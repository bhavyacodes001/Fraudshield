import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

const features = [
  {
    name: "AI/NLP Scam Detection",
    fraudshield: { icon: <CheckCircle2 className="text-green-500" />, value: "Yes", detail: null },
    others: { icon: <XCircle className="text-red-500" />, value: "No", detail: "Mostly rule-based or URL-based" }
  },
  {
    name: "Domain Age & SSL Checks",
    fraudshield: { icon: <CheckCircle2 className="text-green-500" />, value: "Real-time", detail: null },
    others: { icon: <AlertTriangle className="text-amber-400" />, value: "Basic/Delayed", detail: "Checks are basic or delayed" }
  },
  {
    name: "No Login or Setup",
    fraudshield: { icon: <CheckCircle2 className="text-green-500" />, value: "Zero-friction UX", detail: null },
    others: { icon: <XCircle className="text-red-500" />, value: "No", detail: "Often requires account creation" }
  },
  {
    name: "Explainable Alerts",
    fraudshield: { icon: <CheckCircle2 className="text-green-500" />, value: "Transparent", detail: "Transparent feedback" },
    others: { icon: <XCircle className="text-red-500" />, value: "No", detail: "Black-box blocking" }
  },
  {
    name: "Live Threat Intelligence",
    fraudshield: { icon: <CheckCircle2 className="text-green-500" />, value: "Integrated", detail: "Integrated feeds" },
    others: { icon: <AlertTriangle className="text-amber-400" />, value: "Limited", detail: "Limited or proprietary sources" }
  },
  {
    name: "Enterprise Integration Ready",
    fraudshield: { icon: <CheckCircle2 className="text-green-500" />, value: "Yes (APIs)", detail: null },
    others: { icon: <XCircle className="text-red-500" />, value: "No", detail: "Mostly consumer-only" }
  },
  {
    name: "User Education in Real Time",
    fraudshield: { icon: <CheckCircle2 className="text-green-500" />, value: "In-browser cues", detail: null },
    others: { icon: <XCircle className="text-red-500" />, value: "No", detail: "Rare or non-existent" }
  }
];

const CompetitiveSummaryTable: React.FC = () => (
  <section className="section-spacing bg-background theme-transition relative overflow-hidden">
    <div className="container-custom relative z-10">
      <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto mb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 gradient-text-enhanced">Unique Selling Points</h2>
          <p className="text-foreground/80 text-base">How FraudShield stands out from other security extensions</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm md:text-base">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-3 text-left text-foreground/80 font-semibold">Feature</th>
                <th className="py-2 px-3 text-left text-shield-500 font-semibold">FraudShield</th>
                <th className="py-2 px-3 text-left text-foreground/60 font-semibold">Other Extensions <span className="text-xs">(Netcraft, Guardio, etc.)</span></th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, idx) => (
                <tr key={row.name} className={`border-b border-border ${idx % 2 === 0 ? 'bg-white/5 dark:bg-black/10' : ''}`}>
                  <td className="py-3 px-3 font-medium align-top w-1/3">{row.name}</td>
                  <td className="py-3 px-3 align-top w-1/3">
                    <div className="flex items-center space-x-2">
                      {row.fraudshield.icon}
                      <span className="font-semibold">{row.fraudshield.value}</span>
                    </div>
                    {row.fraudshield.detail && (
                      <div className="text-xs text-foreground/60 mt-1">{row.fraudshield.detail}</div>
                    )}
                  </td>
                  <td className="py-3 px-3 align-top w-1/3">
                    <div className="flex items-center space-x-2">
                      {row.others.icon}
                      <span className="font-semibold">{row.others.value}</span>
                    </div>
                    {row.others.detail && (
                      <div className="text-xs text-foreground/60 mt-1">{row.others.detail}</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default CompetitiveSummaryTable; 