import React, { useState } from 'react';
import { Shield, CheckCircle2, ArrowRight, Code, Database, Cpu, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const CompetitiveAnalysis: React.FC = () => {
  const [showMalwareDetails, setShowMalwareDetails] = useState(false);

  const malwareDetectionMethods = [
    {
      title: "Behavioral Analysis",
      description: "Our AI monitors website behavior patterns in real-time, detecting suspicious activities like unauthorized data collection or malicious scripts.",
      icon: Cpu
    },
    {
      title: "Signature Detection",
      description: "Advanced pattern matching against our constantly updated database of known malware signatures and attack vectors.",
      icon: Database
    },
    {
      title: "Code Analysis",
      description: "Deep scanning of website code to identify malicious scripts, hidden redirects, and other potentially harmful elements.",
      icon: Code
    },
    {
      title: "Threat Intelligence",
      description: "Real-time updates from our global threat intelligence network, ensuring protection against the latest malware variants.",
      icon: AlertTriangle
    }
  ];

  const uniqueFeatures = [
    {
      title: "AI-Powered Protection",
      description: "Our advanced AI engine learns and adapts to new fraud patterns in real-time, providing superior protection compared to traditional rule-based systems.",
      icon: Shield
    },
    {
      title: "Smart Safe Browsing",
      description: "Intelligent safe browsing mode that automatically activates for sensitive transactions like banking and shopping, without compromising user experience.",
      icon: CheckCircle2
    },
    {
      title: "Real-time Fraud Detection",
      description: "Instant detection and blocking of fraudulent websites and phishing attempts before they can harm you, with 99.7% accuracy.",
      icon: ArrowRight
    }
  ];

  return (
    <section id="competitive-analysis" className="section-spacing bg-background theme-transition relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-shield-100 dark:bg-shield-900/50 px-3 py-1 text-sm font-medium text-shield-600 dark:text-shield-300 mb-4">
            <Shield className="mr-1 h-3 w-3" /> Why Choose FraudShield
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Beyond Traditional <span className="gradient-text-enhanced">Security Solutions</span>
          </h2>
          <p className="text-foreground/80 text-lg">
            See how FraudShield combines the best features of traditional security tools while adding unique AI-powered protection
          </p>
        </div>

        {/* Malware Detection Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card p-8 rounded-xl max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold mb-4">
                How FraudShield <span className="gradient-text-enhanced">Detects Malware</span>
              </h3>
              <p className="text-foreground/80">
                Our multi-layered approach combines AI, behavioral analysis, and real-time threat intelligence to protect you from malware
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {malwareDetectionMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-background/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-shield-500/10 flex items-center justify-center flex-shrink-0">
                    <method.icon className="h-5 w-5 text-shield-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{method.title}</h4>
                    <p className="text-sm text-foreground/70">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-lg bg-shield-500/5 border border-shield-500/20">
              <h4 className="font-semibold mb-2 flex items-center">
                <Shield className="h-5 w-5 text-shield-500 mr-2" />
                Key Advantages
              </h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Real-time scanning with minimal performance impact</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>99.7% detection rate for known and unknown malware</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Automatic updates to protect against new threats</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Zero false positives through AI-powered verification</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Unique Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {uniqueFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 mb-4 rounded-lg bg-shield-500/10 flex items-center justify-center`}>
                <feature.icon className="h-6 w-6 text-shield-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAnalysis; 