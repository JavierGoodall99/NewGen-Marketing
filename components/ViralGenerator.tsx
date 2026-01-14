import React, { useState } from 'react';
import { Sparkles, Copy, Loader2, Share2 } from 'lucide-react';
import { generateViralCaptions } from '../services/geminiService';
import { GeneratedCaption, ViralTone } from '../types';
import { Button } from './Button';

export const ViralGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState<ViralTone>(ViralTone.EDGY);
  const [captions, setCaptions] = useState<GeneratedCaption[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setLoading(true);
    setError('');
    setCaptions([]);
    
    try {
      const results = await generateViralCaptions(topic, tone);
      setCaptions(results);
    } catch (err) {
      setError('Something went wrong. The AI is overwhelmed by your brilliance.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-32 relative bg-neutral-900/30">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                
                {/* Left: Content */}
                <div>
                    <div className="inline-block mb-4">
                        <span className="font-display font-bold text-6xl md:text-8xl text-white/5 absolute -top-10 -left-10 select-none -z-10">AI-LAB</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">THE VIRAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-400">ENGINE</span></h2>
                    </div>
                    <p className="text-white/60 text-lg mb-10 max-w-md">
                        Don't trust your gut? Trust our Gemini-powered brain. Generate captions that stop the scroll and drive engagement instantly.
                    </p>

                    <div className="glass-card p-8 rounded-2xl md:p-10 bg-black/40 border border-white/10">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Topic / Product</label>
                                <input 
                                    type="text" 
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                    placeholder="e.g. A cyber-punk sneaker drop"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Vibe Check</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {Object.values(ViralTone).map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setTone(t)}
                                            className={`px-4 py-2 rounded-lg text-sm transition-all border ${tone === t ? 'bg-electric-blue text-black border-electric-blue font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]' : 'bg-transparent text-white/70 border-white/10 hover:border-white/30'}`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Button onClick={handleGenerate} disabled={loading} className="w-full mt-4">
                                {loading ? <Loader2 className="animate-spin" /> : <><Sparkles size={18} /> GENERATE MAGIC</>}
                            </Button>
                            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                        </div>
                    </div>
                </div>

                {/* Right: Results */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-teal-500/10 rounded-3xl blur-3xl -z-10" />
                    
                    <div className="space-y-4">
                        {captions.length === 0 && !loading && (
                            <div className="h-[400px] glass-card rounded-2xl flex flex-col items-center justify-center text-white/20 border border-white/5 border-dashed">
                                <Sparkles size={48} className="mb-4 opacity-50" />
                                <p className="font-display uppercase tracking-widest">Waiting for input...</p>
                            </div>
                        )}

                        {loading && (
                             <div className="space-y-4">
                                {[1,2,3].map(i => (
                                    <div key={i} className="glass-card p-6 rounded-2xl animate-pulse">
                                        <div className="h-4 bg-white/10 rounded w-3/4 mb-3"></div>
                                        <div className="h-4 bg-white/10 rounded w-1/2"></div>
                                    </div>
                                ))}
                             </div>
                        )}

                        {captions.map((item, idx) => (
                            <div key={idx} className="glass-card p-6 rounded-2xl group hover:border-electric-blue/50 transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-electric-blue to-teal-600" />
                                        <span className="font-bold text-sm">NewGen AI</span>
                                    </div>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-white/10 rounded-full" title="Copy">
                                            <Copy size={16} onClick={() => navigator.clipboard.writeText(`${item.caption} ${item.hashtags.join(' ')}`)} />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-lg mb-4 font-medium leading-relaxed">
                                    {item.caption}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {item.hashtags.map(tag => (
                                        <span key={tag} className="text-xs text-electric-blue font-mono bg-electric-blue/10 px-2 py-1 rounded border border-electric-blue/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};