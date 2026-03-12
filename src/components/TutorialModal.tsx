import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DollarSign, Package, Zap, ArrowRight, Check, ShoppingCart } from 'lucide-react';

interface TutorialModalProps {
  onClose: () => void;
}

export function TutorialModal({ onClose }: TutorialModalProps) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Welcome to CS2 Simulator",
      description: "Experience the thrill of unboxing without the cost. Let's go over the basics to get you started.",
      icon: <Package className="w-16 h-16 text-[#4b69ff]" />
    },
    {
      title: "1. Get Funds",
      description: "Click the $ button in the top right corner to add free funds to your balance.",
      icon: <DollarSign className="w-16 h-16 text-green-400" />
    },
    {
      title: "2. Open Cases",
      description: "Use your balance to buy cases and keys. Then click on an owned case to open it and win skins!",
      icon: <ShoppingCart className="w-16 h-16 text-yellow-400" />
    },
    {
      title: "3. Upgrade & Progress",
      description: "Sell unwanted skins in your Inventory to buy Upgrades. Increase your click amount and luck multiplier!",
      icon: <Zap className="w-16 h-16 text-purple-400" />
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(prev => prev + 1);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#1a1c23] border border-[#2a2d36] rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col"
      >
        <div className="p-8 flex-grow flex flex-col items-center justify-center min-h-[300px] text-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="bg-[#0f1115] p-6 rounded-full border border-[#2a2d36] mb-6 shadow-lg">
                {steps[step].icon}
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{steps[step].title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {steps[step].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="bg-[#0f1115] p-4 border-t border-[#2a2d36] flex items-center justify-between">
          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === step ? 'w-6 bg-[#4b69ff]' : 'w-2 bg-[#2a2d36]'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={handleNext}
            className="bg-[#4b69ff] hover:bg-[#3b59df] text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-colors"
          >
            {step === steps.length - 1 ? (
              <>
                <span>Start Playing</span>
                <Check size={18} />
              </>
            ) : (
              <>
                <span>Next</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
