import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-deep-black text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-white/50 hover:text-electric-blue mb-12 transition-colors uppercase tracking-widest text-xs font-bold"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-12 tracking-tighter">
          Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-400">Policy</span>
        </h1>

        <div className="space-y-12 text-white/70 leading-relaxed font-light text-lg">
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to NewGen Marketing ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-electric-blue">
              <li><strong className="text-white">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong className="text-white">Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong className="text-white">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong className="text-white">Usage Data:</strong> includes information about how you use our website, products, and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-electric-blue mt-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us via WhatsApp or through our social media channels provided on our website.
            </p>
          </section>

          <div className="pt-12 border-t border-white/10 text-sm text-white/40">
            Last Updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};