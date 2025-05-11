import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RiskScoreAlert from './RiskScoreAlert';

interface RiskScoreDisplayProps {
  initialScore?: number;
}

const RiskScoreDisplay: React.FC<RiskScoreDisplayProps> = ({ initialScore = 85 }) => {
  const [score, setScore] = useState(initialScore);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // For demo purposes, update score randomly within a range
  const updateScore = (min: number, max: number) => {
    const newScore = Math.floor(Math.random() * (max - min + 1)) + min;
    setScore(newScore);
    setIsDialogOpen(true);
  };

  const getRiskIndicator = () => {
    if (score >= 70) {
      return {
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        label: 'Safe',
        color: 'text-green-600 dark:text-green-400',
        bgColor: 'bg-green-50 dark:bg-green-900/30',
      };
    } else if (score >= 50) {
      return {
        icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
        label: 'Moderate Risk',
        color: 'text-amber-600 dark:text-amber-400', 
        bgColor: 'bg-amber-50 dark:bg-amber-900/30',
      };
    } else {
      return {
        icon: <Shield className="h-5 w-5 text-red-500" />,
        label: 'High Risk',
        color: 'text-red-600 dark:text-red-400',
        bgColor: 'bg-red-50 dark:bg-red-900/30',
      };
    }
  };

  const risk = getRiskIndicator();

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={`${risk.bgColor} p-6 rounded-lg subtle-border shadow-sm`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {risk.icon}
            <h3 className={`font-medium ${risk.color}`}>{risk.label}</h3>
          </div>
          <div className={`text-xl font-bold ${risk.color}`}>{score}</div>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
          <div 
            className={`h-2.5 rounded-full ${
              score >= 70 ? 'bg-green-500' : score >= 50 ? 'bg-amber-500' : 'bg-red-500'
            }`} 
            style={{ width: `${score}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
          <span>High Risk</span>
          <span>Moderate</span>
          <span>Safe</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <Button 
            variant="outline" 
            className="flex-1 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 border-red-300 dark:border-red-800"
            onClick={() => updateScore(10, 49)}
          >
            Simulate High Risk
          </Button>
          <Button 
            variant="outline"
            className="flex-1 bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/40 text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-800"
            onClick={() => updateScore(50, 69)}
          >
            Simulate Moderate Risk
          </Button>
          <Button 
            variant="outline"
            className="flex-1 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 text-green-600 dark:text-green-400 border-green-300 dark:border-green-800"
            onClick={() => updateScore(70, 100)}
          >
            Simulate Safe
          </Button>
        </div>
      </motion.div>
      
      <RiskScoreAlert
        score={score}
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default RiskScoreDisplay; 