"use client";

import { useRef, useState, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
  };

  const skipForward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
  };

  const skipBackward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(audio.currentTime - 10, 0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    audio.currentTime = percentage * duration;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <audio ref={audioRef} src="/Be Young Be Foolish Be Happy - The Tams - 1968.mp3" />

      {/* Compact player container */}
      <div className="bg-[#F4F49D] rounded-lg border-2 border-[#002C45] p-2 shadow-lg" style={{ width: "280px" }}>

        {/* Top row - buttons and song info */}
        <div className="flex items-center gap-2 mb-2">
          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            className="w-8 h-8 bg-[#E2579A] border border-[#002C45] rounded flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
          >
            {isPlaying ? (
              <div className="flex gap-0.5">
                <div className="w-1 h-3 bg-[#FF91C6] border-[0.5px] border-[#002C45]" />
                <div className="w-1 h-3 bg-[#FF91C6] border-[0.5px] border-[#002C45]" />
              </div>
            ) : (
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                <path d="M1 1L9 6L1 11V1Z" fill="#FF91C6" stroke="#002C45" strokeWidth="0.5" />
              </svg>
            )}
          </button>

          {/* Rewind button */}
          <button
            onClick={skipBackward}
            className="w-8 h-8 bg-[#E2579A] border border-[#002C45] rounded flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <div className="flex gap-0.5">
              <div className="w-1 h-3 bg-[#FF91C6] border-[0.5px] border-[#002C45]" />
              <div className="w-1 h-3 bg-[#FF91C6] border-[0.5px] border-[#002C45]" />
            </div>
          </button>

          {/* Fast forward button */}
          <button
            onClick={skipForward}
            className="w-8 h-8 bg-[#E2579A] border border-[#002C45] rounded flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <div className="flex -space-x-1">
              <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                <path d="M0 0L7 5L0 10V0Z" fill="#FF91C6" stroke="#002C45" strokeWidth="0.5" />
              </svg>
              <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                <path d="M0 0L7 5L0 10V0Z" fill="#FF91C6" stroke="#002C45" strokeWidth="0.5" />
              </svg>
            </div>
          </button>

          {/* Song title */}
          <div className="text-[8px] text-[#002C45] leading-tight truncate">
            <div className="font-medium">BE YOUNG, BE FOOLISH</div>
            <div>BE HAPPY - The Tams</div>
          </div>
        </div>

        {/* Bottom row - progress bar */}
        <div className="flex items-center gap-2 bg-[#FF91C6] rounded p-1.5">
          {/* Volume button */}
          <button
            onClick={toggleMute}
            className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
              <path
                d="M3 4V8H5L9 11V1L5 4H3Z"
                fill={isMuted ? "#002C45" : "#FF91C6"}
                stroke="#002C45"
                strokeWidth="0.75"
              />
              {!isMuted && (
                <>
                  <path d="M10 3.5C10.7 4.5 10.7 7.5 10 8.5" stroke="#002C45" strokeWidth="1" />
                  <path d="M11.5 2C12.8 4 12.8 8 11.5 10" stroke="#002C45" strokeWidth="1" />
                </>
              )}
              {isMuted && (
                <path d="M10 4L13 8M13 4L10 8" stroke="#002C45" strokeWidth="1" />
              )}
            </svg>
          </button>

          {/* Progress bar */}
          <div
            onClick={handleProgressClick}
            className="flex-1 h-4 bg-[#E2579A] border border-[#002C45] rounded cursor-pointer overflow-hidden"
          >
            <div
              className="h-full bg-[#F4F49D] transition-all duration-100"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
