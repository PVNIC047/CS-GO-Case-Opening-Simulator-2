import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Item, InventoryItem } from '../types';
import { RARITY_COLORS } from '../data/cases';

interface RouletteProps {
  items: Item[];
  winningItem: InventoryItem;
  onComplete: () => void;
  soundEnabled?: boolean;
}

export function Roulette({ items, winningItem, onComplete, soundEnabled = true }: RouletteProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isSpinning, setIsSpinning] = useState(true);
  
  // Audio pool for tick sounds to allow overlapping
  const audioPoolRef = useRef<HTMLAudioElement[]>([]);
  const nextAudioIndexRef = useRef(0);
  const lastIndexRef = useRef<number>(-1);

  useEffect(() => {
    // Pre-create a pool of 5 audio elements for the tick sound
    const pool: HTMLAudioElement[] = [];
    for (let i = 0; i < 5; i++) {
      const audio = new Audio('https://raw.githubusercontent.com/Vozn1akHero/CSGOCaseOpeningSimulator/master/public/sound/roll.mp3');
      audio.preload = 'auto';
      pool.push(audio);
    }
    audioPoolRef.current = pool;
  }, []);

  const playTick = () => {
    if (!soundEnabled || audioPoolRef.current.length === 0) return;
    
    const audio = audioPoolRef.current[nextAudioIndexRef.current];
    audio.currentTime = 0;
    audio.play().catch(() => {});
    
    nextAudioIndexRef.current = (nextAudioIndexRef.current + 1) % audioPoolRef.current.length;
  };

  // Use a ref for onComplete to avoid re-triggering the effect when it changes
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const ITEM_WIDTH = 200;
  const ITEM_GAP = 16;
  const PADDING_LEFT = 16;
  const TOTAL_ITEM_WIDTH = ITEM_WIDTH + ITEM_GAP;

  useEffect(() => {
    if (!wrapperRef.current || items.length === 0) return;

    // Reset last index when items change
    lastIndexRef.current = -1;

    // We need the width of the visible window, not the scrolling container
    const containerWidth = wrapperRef.current.offsetWidth;
    const winningIndex = items.length - 5; // The 5th item from the end is the winner
    
    // Calculate the exact position to center the winning item
    // Account for the initial padding-left (px-4 = 16px)
    const itemCenterLocal = PADDING_LEFT + (winningIndex * TOTAL_ITEM_WIDTH) + (ITEM_WIDTH / 2);
    const targetX = (containerWidth / 2) - itemCenterLocal;
    
    // Add a random offset so it doesn't always land perfectly in the center
    // Item is 200px wide, so +/- 80px keeps it safely inside the tile
    const randomOffset = (Math.random() - 0.5) * 160; 
    
    const finalX = targetX + randomOffset;

    const spin = async () => {
      setIsSpinning(true);
      
      // Start slightly off-screen to the right
      await controls.set({ x: 100 });
      
      // Spin animation
      await controls.start({
        x: finalX,
        transition: {
          duration: 6,
          ease: [0.15, 0.85, 0.2, 1], // Custom ease-out curve for roulette feel
        }
      });
      
      setIsSpinning(false);
      
      // Wait a moment before showing the result modal
      setTimeout(() => {
        onCompleteRef.current();
      }, 1500);
    };

    // Small delay to ensure layout is calculated correctly before measuring offsetWidth
    const timer = setTimeout(() => {
      spin();
    }, 50);

    return () => clearTimeout(timer);
  }, [items, controls]); // Only depend on items and controls to prevent re-spinning

  return (
    <div 
      ref={wrapperRef}
      className="relative w-full h-64 bg-[#12141a] border-y-2 border-[#2a2d36] overflow-hidden flex items-center shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]"
    >
      {/* Center Line Marker */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-500 z-20 shadow-[0_0_10px_rgba(234,179,8,0.8)] transform -translate-x-1/2" />
      
      <motion.div 
        className="flex gap-4 px-4 items-center"
        animate={controls}
        onUpdate={(latest) => {
          if (typeof latest.x === 'number' && wrapperRef.current) {
            const containerWidth = wrapperRef.current.offsetWidth;
            const centerPos = containerWidth / 2;
            const offsetFromStart = centerPos - latest.x - PADDING_LEFT;
            const currentIndex = Math.floor(offsetFromStart / TOTAL_ITEM_WIDTH);
            
            if (currentIndex !== lastIndexRef.current && currentIndex >= 0 && currentIndex < items.length) {
              if (lastIndexRef.current !== -1) {
                playTick();
              }
              lastIndexRef.current = currentIndex;
            }
          }
        }}
      >
        {items.map((item, index) => {
          const color = RARITY_COLORS[item.rarity];
          return (
            <div 
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[200px] h-[180px] bg-[#1a1c23] border border-[#2a2d36] rounded-md overflow-hidden flex flex-col"
              style={{ borderBottom: `4px solid ${color}` }}
            >
              <div className="relative h-28 w-full bg-gradient-to-b from-[#2a2d36] to-[#1a1c23] flex items-center justify-center p-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="max-h-full max-w-full object-contain drop-shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 flex flex-col flex-grow justify-center text-center">
                <div className="text-xs text-gray-400 font-medium">{item.weapon}</div>
                <div className="text-sm text-white font-bold truncate" style={{ color }}>{item.name}</div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
