import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
  darkAccentColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  accentColor,
  darkAccentColor
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className={`relative p-6 rounded-xl card-hover cursor-pointer theme-transition glass-card perspective-1000`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-xl"
        style={{ 
          background: `radial-gradient(circle at center, var(--tw-${accentColor}) 0%, transparent 70%)`,
          zIndex: -1 
        }}
      />
      
      <motion.div 
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 5 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center theme-transition ${
        isHovered 
          ? `bg-${accentColor} dark:bg-${darkAccentColor}` 
          : `bg-${accentColor}/10 dark:bg-${darkAccentColor}/20`
        }`}
      >
        <motion.div
          animate={{ 
            scale: isHovered ? 1.2 : 1,
            filter: isHovered ? "drop-shadow(0 0 8px var(--tw-" + accentColor + "))" : "none"
          }}
          transition={{ duration: 0.3 }}
        >
        <Icon 
          className={`h-6 w-6 theme-transition ${
            isHovered 
              ? 'text-white' 
              : `text-${accentColor} dark:text-${darkAccentColor}`
          }`} 
        />
        </motion.div>
      </motion.div>
      
      <motion.h3 
        animate={{ 
          y: isHovered ? -2 : 0,
          color: isHovered ? `var(--tw-${accentColor})` : 'inherit'
        }}
        transition={{ duration: 0.3 }}
        className="text-xl font-semibold mb-2"
      >
        {title}
      </motion.h3>
      
      <motion.p 
        animate={{ 
          y: isHovered ? -2 : 0,
          opacity: isHovered ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
        className="text-foreground/80"
      >
        {description}
      </motion.p>
      
      <motion.div 
        animate={{ 
          width: isHovered ? '30%' : '0%',
          backgroundColor: isHovered ? `var(--tw-${accentColor})` : 'transparent'
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 h-1 theme-transition"
      />
    </motion.div>
  );
};

export default FeatureCard;
