import { motion } from 'framer-motion';
import { Sparkles, Gift, Star } from 'lucide-react';

const FreeBadge = () => {
  return (
    <motion.div
      className="inline-flex items-center relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
      
      {/* Main badge */}
      <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-green-500 rounded-2xl p-1">
        <div className="bg-black rounded-xl px-6 py-3 flex items-center gap-3">
          {/* Sparkle icon */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-5 h-5 text-green-400" />
          </motion.div>
          
          {/* Text content */}
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">Hackosquad is</span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-black text-xl">
              100% FREE
            </span>
            <Gift className="w-5 h-5 text-green-400" />
          </div>
          
          {/* Floating stars */}
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              >
                <Star className="w-3 h-3 text-green-400 fill-current" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Side ribbons */}
      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-gradient-to-r from-green-700 to-green-600 rounded-l-lg"></div>
      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-gradient-to-l from-green-700 to-green-600 rounded-r-lg"></div>
    </motion.div>
  );
};

export default FreeBadge;
