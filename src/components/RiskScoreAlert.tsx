import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

interface RiskScoreAlertProps {
  score: number;
  open: boolean;
  onClose: () => void;
}

const RiskScoreAlert: React.FC<RiskScoreAlertProps> = ({ score, open, onClose }) => {
  // Determine risk level based on score
  const getRiskLevel = () => {
    if (score >= 70 && score <= 100) {
      return {
        level: "Safe",
        icon: <CheckCircle className="h-6 w-6 text-green-500" />,
        color: "bg-green-50 dark:bg-green-900/30",
        textColor: "text-green-700 dark:text-green-300",
        description: "This site is safe. You can proceed with your work or login safely.",
        action: "Continue Safely"
      };
    } else if (score >= 50 && score < 70) {
      return {
        level: "Moderate Risk",
        icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
        color: "bg-amber-50 dark:bg-amber-900/30",
        textColor: "text-amber-700 dark:text-amber-300",
        description: "This site has moderate risk. Please be cautious when working on this site or logging in.",
        action: "Proceed with Caution"
      };
    } else {
      return {
        level: "High Risk",
        icon: <Shield className="h-6 w-6 text-red-500" />,
        color: "bg-red-50 dark:bg-red-900/30",
        textColor: "text-red-700 dark:text-red-300",
        description: "This site has high risk. We strongly advise against proceeding with any login or sensitive actions.",
        action: "Go Back"
      };
    }
  };

  const riskInfo = getRiskLevel();

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className={`${riskInfo.color} border-2 border-${riskInfo.textColor.split(' ')[0]}`}>
        <AlertDialogHeader>
          <div className="flex items-center gap-2 mb-2">
            {riskInfo.icon}
            <AlertDialogTitle className={`text-xl ${riskInfo.textColor}`}>
              {riskInfo.level} - Score: {score}
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-base">
            {riskInfo.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose} className={`${riskInfo.level === "High Risk" ? "bg-red-600 hover:bg-red-700" : riskInfo.level === "Moderate Risk" ? "bg-amber-600 hover:bg-amber-700" : "bg-green-600 hover:bg-green-700"} text-white`}>
            {riskInfo.action}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RiskScoreAlert; 