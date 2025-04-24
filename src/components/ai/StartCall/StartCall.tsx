import React, { FC, useState } from 'react'
import { useVoice } from "@humeai/voice-react";

import { Button } from '../Button';

export const StartCall:FC = () => {
  const { connect } = useVoice();
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    setIsConnecting(true);
    setError(null);
    
    try {
      await connect();
      // Connection successful - the VoiceProvider will handle the connected state
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect to voice service');
    } finally {
      setIsConnecting(false);
    }
  };

  return(
    <div className="relative">
      <Button
        className={"z-50 flex items-center gap-1.5"}
        onClick={handleConnect}
        disabled={isConnecting}
      >
        {/* <span>
          <Phone
            className={"size-4 opacity-50"}
            strokeWidth={2}
            stroke={"currentColor"}
          />
        </span> */}
        <span>{isConnecting ? 'Connecting...' : 'Call Satoshi'}</span>
      </Button>
      {error && (
        <div className="absolute top-full left-0 right-0 mt-2 text-red-500 text-sm">
          {error}
        </div>
      )}
    </div>
  )
}
