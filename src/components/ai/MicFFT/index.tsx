'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MicFFTProps {
  isActive: boolean;
  className?: string;
}

export const MicFFT = ({ isActive, className = '' }: MicFFTProps) => {
  const [fft, setFFT] = useState<number[]>(Array(64).fill(0));
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Initialize and clean up audio processing
  useEffect(() => {
    let mounted = true;

    const setupAudio = async () => {
      try {
        if (!isActive) return;

        // Create audio context and analyzer if not exists
        if (!audioContextRef.current) {
          // Handle AudioContext with proper typing
          const AudioContextClass = window.AudioContext || 
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          audioContextRef.current = new AudioContextClass();
          analyserRef.current = audioContextRef.current.createAnalyser();
          analyserRef.current.fftSize = 128;
          analyserRef.current.smoothingTimeConstant = 0.7;
        }

        // Get user media stream
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;

        // Connect to audio source
        if (audioContextRef.current && analyserRef.current) {
          sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
          sourceRef.current.connect(analyserRef.current);
        }

        // Start animation frame loop
        const analyzeAudio = () => {
          if (!mounted || !isActive || !analyserRef.current) return;

          const bufferLength = analyserRef.current.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
          analyserRef.current.getByteFrequencyData(dataArray);

          // Process and set FFT data
          const normalizedData = Array.from(dataArray)
            .slice(0, 64)
            .map(value => Math.max(value / 255, 0.05)); // Normalize to 0-1 range with minimum value

          setFFT(normalizedData);
          animationRef.current = requestAnimationFrame(analyzeAudio);
        };

        analyzeAudio();
      } catch {
        // Silent error - microphone may not be available or user denied permission
        // This prevents visualizer from breaking the UI
      }
    };

    const cleanupAudio = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }

      // Stop all tracks in the stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }

      // Disconnect source
      if (sourceRef.current) {
        sourceRef.current.disconnect();
        sourceRef.current = null;
      }

      // Reset FFT data
      setFFT(Array(64).fill(0));
    };

    if (isActive) {
      setupAudio();
    } else {
      cleanupAudio();
    }

    return () => {
      mounted = false;
      cleanupAudio();
    };
  }, [isActive]);

  return (
    <div className={`w-full h-full ${className}`}>
      <div className="w-full h-full flex items-end justify-center gap-[2px]">
        {fft.map((value, index) => (
          <motion.div
            key={`fft-bar-${index}`}
            className="w-[4px] bg-gradient-to-t from-yellow-600/40 to-yellow-400"
            initial={{ height: '2%' }}
            animate={{ 
              height: `${Math.max(value * 100, 2)}%`,
              opacity: value * 0.8 + 0.2
            }}
            transition={{ 
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}
            style={{
              transformOrigin: 'bottom',
              borderTopLeftRadius: '2px',
              borderTopRightRadius: '2px'
            }}
          />
        ))}
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {isActive && fft.some(v => v > 0.5) && (
          Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-yellow-500/60"
              initial={{ 
                x: `${Math.random() * 100}%`, 
                y: '100%',
                opacity: 0.8
              }}
              animate={{ 
                y: `${Math.random() * 50}%`,
                opacity: 0
              }}
              transition={{ 
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeOut',
                delay: i * 0.5
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}; 