import { useState, useEffect } from 'react';
import { Case, InventoryItem, Item, Rarity } from './types';
import { openCase, generateRouletteSequence } from './utils/rng';
import { calculateItemPrice } from './utils/pricing';
import { CaseSelector } from './components/CaseSelector';
import { Roulette } from './components/Roulette';
import { CaseUnlockAnimation } from './components/CaseUnlockAnimation';
import { Inventory } from './components/Inventory';
import { ItemCard } from './components/ItemCard';
import { Wallet, Package, ArrowLeft, DollarSign, Settings as SettingsIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RARITY_COLORS } from './data/cases';

type View = 'selector' | 'opening' | 'inventory' | 'settings';

interface AppSettings {
  instaOpen: boolean;
  soundEnabled: boolean;
}

const getModalAnimation = (rarity: Rarity) => {
  if (rarity === 'Covert' || rarity === 'Rare Special Item') {
    return {
      initial: { scale: 0.5, y: 100, rotate: -5, opacity: 0 },
      animate: { scale: 1, y: 0, rotate: 0, opacity: 1, transition: { type: 'spring', damping: 12, stiffness: 100 } },
      exit: { scale: 0.8, y: 50, opacity: 0 }
    };
  } else if (rarity === 'Classified') {
    return {
      initial: { scale: 0.8, y: 50, opacity: 0 },
      animate: { scale: 1, y: 0, opacity: 1, transition: { type: 'spring', damping: 15, stiffness: 120 } },
      exit: { scale: 0.9, y: 20, opacity: 0 }
    };
  } else {
    return {
      initial: { scale: 0.95, y: 10, opacity: 0 },
      animate: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.2 } },
      exit: { scale: 0.95, y: 10, opacity: 0 }
    };
  }
};

const getGlowStyle = (rarity: Rarity) => {
  const color = RARITY_COLORS[rarity];
  if (rarity === 'Covert' || rarity === 'Rare Special Item') {
    return { boxShadow: `0 0 80px ${color}80, 0 0 20px ${color}40`, borderColor: color };
  } else if (rarity === 'Classified') {
    return { boxShadow: `0 0 40px ${color}40`, borderColor: color };
  }
  return { boxShadow: `0 10px 25px rgba(0,0,0,0.5)`, borderColor: '#2a2d36' };
};

const getHeaderText = (rarity: Rarity) => {
  if (rarity === 'Rare Special Item') return "🌟 OH WOW! RARE SPECIAL ITEM! 🌟";
  if (rarity === 'Covert') return "🔥 INCREDIBLE! COVERT DROP! 🔥";
  if (rarity === 'Classified') return "✨ AWESOME! CLASSIFIED DROP! ✨";
  if (rarity === 'Restricted') return "Nice, a Restricted item.";
  return "You got a Mil-Spec item.";
};

export default function App() {
  const [balance, setBalance] = useState<number>(() => {
    const saved = localStorage.getItem('cs2_sim_balance');
    return saved ? parseFloat(saved) : 5.00;
  });
  const [inventory, setInventory] = useState<InventoryItem[]>(() => {
    const saved = localStorage.getItem('cs2_sim_inventory');
    return saved ? JSON.parse(saved) : [];
  });
  const [ownedCases, setOwnedCases] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('cs2_sim_cases');
    return saved ? JSON.parse(saved) : {};
  });
  const [ownedKeys, setOwnedKeys] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('cs2_sim_keys');
    return saved ? JSON.parse(saved) : {};
  });
  const [view, setView] = useState<View>('selector');
  const [openingState, setOpeningState] = useState<'unlocking' | 'roulette'>('unlocking');
  
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [rouletteItems, setRouletteItems] = useState<Item[]>([]);
  const [winningItem, setWinningItem] = useState<InventoryItem | null>(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [resetStep, setResetStep] = useState<number>(0);
  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('cs2_sim_settings');
    return saved ? JSON.parse(saved) : { instaOpen: false, soundEnabled: true };
  });
  const [isMobile, setIsMobile] = useState(false);

  // Device detection and aspect ratio handling
  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Save state to local storage when it changes
  useEffect(() => {
    localStorage.setItem('cs2_sim_balance', balance.toString());
    localStorage.setItem('cs2_sim_inventory', JSON.stringify(inventory));
    localStorage.setItem('cs2_sim_cases', JSON.stringify(ownedCases));
    localStorage.setItem('cs2_sim_keys', JSON.stringify(ownedKeys));
    localStorage.setItem('cs2_sim_settings', JSON.stringify(settings));
  }, [balance, inventory, ownedCases, ownedKeys, settings]);

  const handleBuyCase = (c: Case) => {
    if (balance < c.price) return;
    setBalance(prev => prev - c.price);
    setOwnedCases(prev => ({ ...prev, [c.id]: (prev[c.id] || 0) + 1 }));
  };

  const handleBuyKey = (c: Case) => {
    if (balance < 2.49) return;
    setBalance(prev => prev - 2.49);
    setOwnedKeys(prev => ({ ...prev, [c.id]: (prev[c.id] || 0) + 1 }));
  };

  const handleOpenCase = (c: Case) => {
    if ((ownedCases[c.id] || 0) < 1 || (ownedKeys[c.id] || 0) < 1) return;
    
    setOwnedCases(prev => ({ ...prev, [c.id]: prev[c.id] - 1 }));
    setOwnedKeys(prev => ({ ...prev, [c.id]: prev[c.id] - 1 }));
    
    setSelectedCase(c);
    
    const winner = openCase(c.items);
    setWinningItem(winner);
    
    if (settings.instaOpen) {
      setInventory(prev => [...prev, winner]);
      setShowResultModal(true);
      setView('opening');
      setOpeningState('roulette'); // Doesn't matter, it's insta open
    } else {
      const sequence = generateRouletteSequence(c.items, winner.item, 60);
      setRouletteItems(sequence);
      setView('opening');
      setOpeningState('unlocking');
      setShowResultModal(false);
    }
  };

  const handleUnlockComplete = () => {
    setOpeningState('roulette');
  };

  const handleRouletteComplete = () => {
    if (winningItem) {
      setInventory(prev => [...prev, winningItem]);
      setShowResultModal(true);
    }
  };

  const handleCloseResult = () => {
    setShowResultModal(false);
    setView('selector');
    setSelectedCase(null);
    setWinningItem(null);
    setRouletteItems([]);
  };

  const addFunds = () => {
    setBalance(prev => prev + 0.05);
  };

  const handleSellItem = (itemToSell: InventoryItem) => {
    const price = calculateItemPrice(itemToSell);
    setBalance(prev => prev + price);
    setInventory(prev => prev.filter(item => item.id !== itemToSell.id));
  };

  const resetGame = () => {
    setResetStep(1);
  };

  const confirmResetStep1 = () => {
    setResetStep(2);
  };

  const confirmResetStep2 = () => {
    setBalance(5.00);
    setInventory([]);
    setOwnedCases({});
    setOwnedKeys({});
    setView('selector');
    setSelectedCase(null);
    setWinningItem(null);
    setRouletteItems([]);
    setShowResultModal(false);
    setResetStep(0);
    localStorage.removeItem('cs2_sim_balance');
    localStorage.removeItem('cs2_sim_inventory');
    localStorage.removeItem('cs2_sim_cases');
    localStorage.removeItem('cs2_sim_keys');
  };

  const cancelReset = () => {
    setResetStep(0);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden p-0 sm:p-4">
      <div 
        className="bg-[#0f1115] text-gray-200 font-sans selection:bg-[#4b69ff] selection:text-white flex flex-col relative shadow-2xl overflow-hidden w-full h-full"
        style={{
          aspectRatio: isMobile ? '9/16' : '1920/1080',
          maxHeight: '100vh',
          maxWidth: isMobile ? 'calc(100vh * 9 / 16)' : 'calc(100vh * 1920 / 1080)',
          margin: 'auto'
        }}
      >
        {/* Header */}
        <header className="bg-[#1a1c23] border-b border-[#2a2d36] sticky top-0 z-40 shadow-md flex-shrink-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-wider uppercase flex items-center gap-2">
                <span className="text-[#4b69ff]">CS2</span> {isMobile ? '' : 'Simulator'}
              </h1>
              
              <nav className="hidden md:flex ml-8 space-x-1">
                <button 
                  onClick={() => setView('selector')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    view === 'selector' || view === 'opening' 
                      ? 'bg-[#2a2d36] text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-[#2a2d36]/50'
                  }`}
                >
                  Cases
                </button>
                <button 
                  onClick={() => setView('inventory')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    view === 'inventory' 
                      ? 'bg-[#2a2d36] text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-[#2a2d36]/50'
                  }`}
                >
                  <Package size={16} />
                  Inventory ({inventory.length})
                </button>
                <button 
                  onClick={() => setView('settings')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    view === 'settings' 
                      ? 'bg-[#2a2d36] text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-[#2a2d36]/50'
                  }`}
                >
                  <SettingsIcon size={16} />
                  Settings
                </button>
              </nav>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 bg-[#2a2d36] px-3 sm:px-4 py-2 rounded-md border border-[#3a3d46]">
                <Wallet size={14} className="text-green-400" />
                <span className="font-mono font-bold text-white text-sm sm:text-base">${balance.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <button 
                  onClick={addFunds}
                  className="bg-[#2a2d36] hover:bg-[#3a3d46] text-white p-2 rounded-md transition-colors border border-[#3a3d46] flex items-center justify-center"
                  title="Add $0.05"
                >
                  <DollarSign size={14} />
                </button>
                <button 
                  onClick={resetGame}
                  className="bg-red-500/20 hover:bg-red-500/40 text-red-400 p-2 rounded-md transition-colors border border-red-500/30 flex items-center justify-center text-xs font-bold px-2 sm:px-3"
                  title="Reset Game"
                >
                  RESET
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Nav - visible only on mobile */}
        <nav className="md:hidden bg-[#1a1c23] border-b border-[#2a2d36] flex justify-around p-2 flex-shrink-0">
          <button 
            onClick={() => setView('selector')}
            className={`p-2 rounded-md transition-colors ${view === 'selector' || view === 'opening' ? 'text-[#4b69ff]' : 'text-gray-400'}`}
          >
            <Package size={20} />
          </button>
          <button 
            onClick={() => setView('inventory')}
            className={`p-2 rounded-md transition-colors ${view === 'inventory' ? 'text-[#4b69ff]' : 'text-gray-400'}`}
          >
            <div className="relative">
              <Package size={20} />
              <span className="absolute -top-1 -right-1 bg-[#4b69ff] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {inventory.length}
              </span>
            </div>
          </button>
          <button 
            onClick={() => setView('settings')}
            className={`p-2 rounded-md transition-colors ${view === 'settings' ? 'text-[#4b69ff]' : 'text-gray-400'}`}
          >
            <SettingsIcon size={20} />
          </button>
        </nav>

        {/* Main Content */}
        <main className="flex-grow relative overflow-y-auto overflow-x-hidden custom-scrollbar">
          {view === 'selector' && (
            <CaseSelector 
              balance={balance} 
              ownedCases={ownedCases}
              ownedKeys={ownedKeys}
              onBuyCase={handleBuyCase}
              onBuyKey={handleBuyKey}
              onOpenCase={handleOpenCase}
            />
          )}
          
          {view === 'inventory' && (
            <Inventory items={inventory} onSellItem={handleSellItem} />
          )}

          {view === 'settings' && (
            <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Settings</h2>
              
              <div className="bg-[#1a1c23] border border-[#2a2d36] rounded-xl overflow-hidden shadow-xl">
                <div className="p-4 sm:p-6 border-b border-[#2a2d36]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">Insta Open Case</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">Skip the roulette animation and instantly see your item.</p>
                    </div>
                    <button
                      onClick={() => setSettings(prev => ({ ...prev, instaOpen: !prev.instaOpen }))}
                      className={`relative inline-flex h-5 w-10 sm:h-6 sm:w-11 items-center rounded-full transition-colors focus:outline-none ${
                        settings.instaOpen ? 'bg-[#4b69ff]' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          settings.instaOpen ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">Sound Effects</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">Enable or disable sound effects during case opening.</p>
                    </div>
                    <button
                      onClick={() => setSettings(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }))}
                      className={`relative inline-flex h-5 w-10 sm:h-6 sm:w-11 items-center rounded-full transition-colors focus:outline-none ${
                        settings.soundEnabled ? 'bg-[#4b69ff]' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {view === 'opening' && selectedCase && winningItem && (
            <div className="flex flex-col items-center justify-center min-h-full py-8 sm:py-12">
              <div className="mb-6 sm:mb-8 text-center px-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-2">Opening {selectedCase.name}</h2>
                <p className="text-sm sm:text-base text-gray-400">Good luck!</p>
              </div>
              
              <div className="w-full relative">
                {openingState === 'unlocking' && !settings.instaOpen ? (
                  <CaseUnlockAnimation 
                    caseImage={selectedCase.image} 
                    onComplete={handleUnlockComplete} 
                    soundEnabled={settings.soundEnabled}
                  />
                ) : (
                  <Roulette 
                    items={rouletteItems} 
                    winningItem={winningItem} 
                    onComplete={handleRouletteComplete} 
                    soundEnabled={settings.soundEnabled}
                  />
                )}
              </div>
            </div>
          )}
        </main>

        {/* Result Modal */}
        <AnimatePresence>
          {showResultModal && winningItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div 
                {...getModalAnimation(winningItem.item.rarity)}
                style={getGlowStyle(winningItem.item.rarity)}
                className="bg-[#1a1c23] border-2 rounded-xl max-w-sm sm:max-w-md w-full overflow-hidden flex flex-col relative"
              >
                <div className="p-4 sm:p-6 text-center border-b border-[#2a2d36] bg-[#12141a]/50">
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider" style={{ color: RARITY_COLORS[winningItem.item.rarity] || 'white' }}>
                    {getHeaderText(winningItem.item.rarity)}
                  </h3>
                </div>
                
                <div className="p-6 sm:p-8 flex justify-center bg-gradient-to-b from-[#1a1c23] to-[#0f1115] relative overflow-hidden">
                  {(winningItem.item.rarity === 'Covert' || winningItem.item.rarity === 'Rare Special Item') && (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-50%] opacity-20"
                      style={{ background: `radial-gradient(circle, ${RARITY_COLORS[winningItem.item.rarity]} 0%, transparent 60%)` }}
                    />
                  )}
                  <ItemCard 
                    item={winningItem.item} 
                    inventoryItem={winningItem} 
                    className="w-48 sm:w-64 transform scale-100 sm:scale-110 relative z-10" 
                  />
                </div>
                
                <div className="p-4 sm:p-6 flex gap-3 sm:gap-4 bg-[#1a1c23] border-t border-[#2a2d36] relative z-10">
                  <button 
                    onClick={handleCloseResult}
                    className="flex-1 bg-[#2a2d36] hover:bg-[#3a3d46] text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-md transition-colors uppercase tracking-wider text-[10px] sm:text-sm flex items-center justify-center gap-1 sm:gap-2"
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>
                  <button 
                    onClick={() => {
                      if (selectedCase && (ownedCases[selectedCase.id] || 0) > 0 && (ownedKeys[selectedCase.id] || 0) > 0) {
                        handleOpenCase(selectedCase);
                      } else {
                        handleCloseResult();
                      }
                    }}
                    disabled={!selectedCase || (ownedCases[selectedCase.id] || 0) < 1 || (ownedKeys[selectedCase.id] || 0) < 1}
                    className={`flex-1 font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-md transition-colors uppercase tracking-wider text-[10px] sm:text-sm ${
                      selectedCase && (ownedCases[selectedCase.id] || 0) > 0 && (ownedKeys[selectedCase.id] || 0) > 0
                        ? 'bg-[#4b69ff] hover:bg-[#3b59df] text-white'
                        : 'bg-[#2a2d36] text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Open Another
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reset Confirmation Modal */}
        <AnimatePresence>
          {resetStep > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#1a1c23] border border-[#2a2d36] rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
              >
                <div className="p-6 text-center">
                  <h2 className="text-xl font-bold text-white mb-4">
                    {resetStep === 1 ? "Reset Game" : "Final Warning"}
                  </h2>
                  <p className="text-gray-300 mb-8">
                    {resetStep === 1 
                      ? "Do you really want to reset all your stuff?" 
                      : "Are you sure you will lose all your items and money?"}
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={cancelReset}
                      className="flex-1 bg-[#2a2d36] hover:bg-[#3a3d46] text-white font-bold py-3 px-4 rounded-md transition-colors uppercase tracking-wider text-sm"
                    >
                      No
                    </button>
                    <button 
                      onClick={resetStep === 1 ? confirmResetStep1 : confirmResetStep2}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md transition-colors uppercase tracking-wider text-sm"
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
