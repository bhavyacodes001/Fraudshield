import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { ThemeProvider } from '../context/ThemeContext';
import { Shield, AlertCircle, ZapOff, ShieldCheck, Zap, Scan, Lock, Bot, BrainCircuit, Bell } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import FraudStats from '../components/FraudStats';
import CallToAction from '../components/CallToAction';
import CompetitiveAnalysis from '../components/CompetitiveAnalysis';
import CompetitiveSummaryTable from '../components/CompetitiveSummaryTable';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Real-time Protection',
      description: 'Our AI engine scans websites in real-time to detect and block fraudulent activities before they can harm you.',
      accentColor: 'shield-500',
      darkAccentColor: 'shield-400'
    },
    {
      icon: AlertCircle,
      title: 'Phishing Detection',
      description: 'FraudShield identifies phishing attempts that try to steal your personal information or login credentials.',
      accentColor: 'red-500',
      darkAccentColor: 'red-400'
    },
    {
      icon: ZapOff,
      title: 'Malware Blocking',
      description: 'Proactively blocks websites that attempt to distribute malware or other harmful software to your device.',
      accentColor: 'amber-500',
      darkAccentColor: 'amber-400'
    },
    {
      icon: Scan,
      title: 'Safe Browsing Mode',
      description: 'Activate our secure browsing environment for sensitive transactions like banking and shopping.',
      accentColor: 'green-500',
      darkAccentColor: 'green-400'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Prevents websites from collecting your personal data without permission, keeping your digital footprint private.',
      accentColor: 'cyber-500',
      darkAccentColor: 'cyber-400'
    },
    {
      icon: Zap,
      title: 'AI-Powered Analysis',
      description: 'Our machine learning algorithms constantly evolve to recognize new and sophisticated fraud techniques.',
      accentColor: 'purple-500',
      darkAccentColor: 'purple-400'
    }
  ];

  return (
    <ThemeProvider>
      <div className={`min-h-screen theme-transition antialiased overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <ParticleBackground />
        <Navbar />
        <HeroSection />

        <section id="features" className="section-spacing bg-background theme-transition relative">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full bg-shield-100 dark:bg-shield-900/50 px-3 py-1 text-sm font-medium text-shield-600 dark:text-shield-300 mb-4">
                <ShieldCheck className="mr-1 h-3 w-3" /> Advanced Protection Features
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Comprehensive Security for Your Digital Life</h2>
              <p className="text-foreground/80 text-lg">
                FraudShield provides advanced protection against online threats with AI-powered features that keep you safe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  accentColor={feature.accentColor}
                  darkAccentColor={feature.darkAccentColor}
                />
              ))}
            </div>
          </div>
        </section>

        <CompetitiveAnalysis />
        <CompetitiveSummaryTable />
        <HowItWorks />
        <FraudStats />
        <CallToAction />
        
        {/* AI Features Section */}
        <section className="section-spacing bg-background theme-transition relative">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center rounded-full bg-shield-100 dark:bg-shield-900/50 px-3 py-1 text-sm font-medium text-shield-600 dark:text-shield-300 mb-4">
                <Bot className="mr-1 h-3 w-3" /> AI-Powered Protection
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Advanced AI Security Features</h2>
              <p className="text-foreground/80 text-lg">
                Our platform leverages artificial intelligence to provide cutting-edge fraud protection
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-shield-100 dark:bg-shield-900/50 flex items-center justify-center mb-4">
                    <BrainCircuit className="h-6 w-6 text-shield-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Fraud Detection</h3>
                  <p className="text-foreground/70">
                    Our AI algorithms continuously analyze transaction patterns to identify and block suspicious activities before they can cause harm.
                  </p>
                </div>
                
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-shield-100 dark:bg-shield-900/50 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-shield-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Behavioral Analysis</h3>
                  <p className="text-foreground/70">
                    Machine learning models that adapt to evolving fraud techniques by studying user behavior patterns and identifying anomalies.
                  </p>
                </div>
                
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-shield-100 dark:bg-shield-900/50 flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-shield-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Intelligent Alerts</h3>
                  <p className="text-foreground/70">
                    Get instant notifications about potential threats with actionable recommendations to secure your accounts and personal information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
