'use client'

import { VoiceContainer } from "@/components/voice/VoiceContainer";
import HumeService from "@/services/hume";

export default function VoicePage() {
  return (
    <VoiceContainer configId={HumeService.defaultVoiceConfig.configId} />
  );
}
