import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';

interface CaseUnlockAnimationProps {
  caseImage: string;
  onComplete: () => void;
  soundEnabled?: boolean;
}

export function CaseUnlockAnimation({ caseImage, onComplete, soundEnabled = true }: CaseUnlockAnimationProps) {
  const caseControls = useAnimation();
  const keyControls = useAnimation();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://raw.githubusercontent.com/Vozn1akHero/CSGOCaseOpeningSimulator/master/public/sound/case_unlock_01.mp3');
    audioRef.current.preload = 'auto';
  }, []);

  const playSound = (type: 'insert' | 'twist' | 'unlock' | 'open') => {
    if (!soundEnabled || !audioRef.current) return;
    
    // The original sound file contains the full sequence (insert, twist, unlock, open)
    // So we only trigger it once at the beginning of the animation sequence ('insert')
    if (type === 'insert') {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  useEffect(() => {
    let isMounted = true;

    const runAnimation = async () => {
      // Initial state
      await keyControls.set({ x: 300, y: 50, scale: 2, rotate: 0, rotateY: 0, opacity: 0, clipPath: "inset(0% 0% 0% 0%)" });
      await caseControls.set({ scale: 1, rotate: 0, filter: 'brightness(1)' });

      if (!isMounted) return;

      // 1. Key appears and moves to hover over the lock (center, slightly left of previous)
      keyControls.start({ x: 18, y: 12, scale: 1, rotate: 0, rotateY: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.5, ease: "easeOut" } });
      await new Promise(r => setTimeout(r, 500));
      if (!isMounted) return;
      
      // 2. Insert into the lock (moves UP and clips the top to simulate entering the lock)
      playSound('insert');
      await keyControls.start({ scale: 0.8, x: 18, y: -2, clipPath: "inset(45% 0% 0% 0%)", transition: { duration: 0.2, ease: "easeIn" } });
      
      // 3. Twist
      await new Promise(r => setTimeout(r, 150));
      if (!isMounted) return;
      playSound('twist');
      await keyControls.start({ rotateY: 180, transition: { duration: 0.3 } });
      
      // 4. Pop off
      await new Promise(r => setTimeout(r, 200));
      if (!isMounted) return;
      playSound('unlock');
      keyControls.start({ x: 200, y: -100, scale: 1.5, rotate: 180, rotateY: 180, opacity: 0, clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.4, ease: "easeIn" } });
      
      // 4. Case opens (shake and glow)
      await new Promise(r => setTimeout(r, 200));
      if (!isMounted) return;
      playSound('open');
      await caseControls.start({ 
        scale: [1, 1.1, 1.05, 1.2, 0],
        rotate: [0, -5, 5, -5, 0],
        filter: ['brightness(1)', 'brightness(1.5)', 'brightness(2)', 'brightness(3)', 'brightness(0)'],
        opacity: [1, 1, 1, 1, 0],
        transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 1] }
      });

      if (!isMounted) return;
      // Done
      onComplete();
    };

    runAnimation();

    return () => {
      isMounted = false;
    };
  }, [caseControls, keyControls, onComplete]);

  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
      {/* Case */}
      <motion.div animate={caseControls} className="relative z-10 w-48 h-48 flex items-center justify-center">
        <img src={caseImage} alt="Case" className="max-w-full max-h-full object-contain drop-shadow-2xl" referrerPolicy="no-referrer" />
      </motion.div>
      
      {/* Key */}
      <motion.div animate={keyControls} className="absolute z-20">
        <img 
          src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxuxpJSXPbQv2S1MDeXkh6LBBOienreFAyh6TKKWsRuNnvzYKPwKeiYr7VwT5Usccj07HC99ym2Vbm_xE5MXezetFgrl7eog/256fx256f" 
          alt="CS:GO Case Key" 
          className="w-10 h-10 object-contain drop-shadow-xl rotate-[135deg]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  );
}
