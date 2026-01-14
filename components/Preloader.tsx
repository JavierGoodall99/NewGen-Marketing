import React, { useEffect, useState } from 'react';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increment for a more "real" loading feel
        const increment = Math.floor(Math.random() * 5) + 2; 
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small delay at 100% before starting the exit animation
      const timeout = setTimeout(() => {
        setIsExiting(true);
        // Wait for the exit animation (1000ms) to finish before unmounting
        setTimeout(onComplete, 1000);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-deep-black flex flex-col items-center justify-center transition-transform duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
        <div className="relative w-full max-w-md px-6">
            <div className="flex justify-between items-end mb-4">
                <span className="font-display font-bold text-8xl md:text-9xl text-white tracking-tighter leading-none">
                    {progress}%
                </span>
                <div className="flex flex-col items-end mb-2">
                    <span className="font-mono text-electric-blue text-xs uppercase tracking-widest animate-pulse">
                        System Initializing
                    </span>
                    <span className="font-mono text-white/30 text-[10px] uppercase tracking-wider mt-1">
                        NewGen Marketing v2.0
                    </span>
                </div>
            </div>
            
            <div className="w-full h-[2px] bg-white/10 overflow-hidden relative">
                <div 
                    className="absolute top-0 left-0 h-full bg-electric-blue transition-all duration-75 ease-out shadow-[0_0_15px_#00F0FF]"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 text-white/10 font-mono text-xs">
            LOADING ASSETS...
        </div>
        <div className="absolute top-10 right-10 text-white/10 font-mono text-xs text-right">
            EST. TIME: 0.02s<br/>
            SERVER: US-EAST-1
        </div>
    </div>
  );
};