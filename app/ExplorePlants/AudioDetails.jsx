import { Button } from "@/components/ui/button";
import { AudioLines, Pause, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";

export default function AudioDetails({ description }) {
  const [isPlayMode, setBtnMode] = useState(true);

  function playAudio() {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(description);

    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice

    // Speak the text
    if(isPlayMode){
      speechSynthesis.speak(utterance);
      setBtnMode(false);
    }else{
      speechSynthesis.pause();
      setBtnMode(true);
    }
  }

  return (
    <div className="w-full sm:w-[400px] h-12 glassmorphism border-none rounded-lg flex justify-center items-center">
      <h1 className="text-white flex items-center mr-3 font-medium text-sm">
        <AudioLines className="h-5 w-5 mr-2" /> Plant Knowledge on Play
      </h1>
      <Badge
        onClick={playAudio}
        className="glassmorphism text-white text-sm p-[9px] hover:text-black hover:bg-white cursor-pointer rounded-full"
        variant="secondary"
      >
         {
          isPlayMode ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />
         }
      </Badge>
    </div>
  );
}
