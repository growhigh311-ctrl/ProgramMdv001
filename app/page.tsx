'use client';
import React, { useState } from 'react';
import { 
  Shield, TrendingUp, Headphones, Zap, Check, Star, Lock, Award, ArrowRight,
  MessageSquare, HelpCircle, Plus, Minus, Trophy, Activity, PlayCircle
} from 'lucide-react';

const stats = [
  { value: '1.2M+', label: 'Active Users', desc: 'Trusted Since 2018' },
  { value: '60K+', label: 'Events /Month', desc: 'Live sports & games' },
  { value: '24/7', label: 'Support Speed', desc: 'Avg .<1m' }
];

const games = [
  { title: "Cricket Betting", desc: "Live IPL,International,T20,Big League Matches with attractive odds", icon: "🏏" },
  { title: "Football Leagues", desc: "Premier league,Champions league,League one,ISL", icon: "⚽" },
  { title: "Live Casino", desc: "Teen patti,Andar Bahar,Roulette,Poker and more live streaming", icon: "🃏" },
  { title: "Tennis Matches", desc: "Grand Slams,Ten nip Tour and WTA Tour Matches", icon: "🎾" },
  { title: "Virtual Sports", desc: "Cricket,football,racing and other sports 24×7", icon: "🎮" }
];

const features = [
  { title: "Secure Payments", desc: "UPI ,GPay,Paytm,PhonePe and local net banking payments with 256 bit encryption", icon: Shield },
  { title: "Fast Payouts", desc: "Withdraw directly to your bank account with 5-10 min payouts.", icon: Zap },
  { title: "Data Insights", desc: "Free data models,predictions,head to head stats and player insights", icon: TrendingUp },
  { title: "24/7 WhatsApp Support", desc: "Your Personal Relationship manager to assist you on WhatsApp", icon: Headphones }
];

const reviews = [
  { name: "Rahul S.", location: "Mumbai", comment: "The withdrawal was processed within 5 minutes! I have not found a better platform." },
  { name: "Priya K.", location: "Delhi", comment: "I got my ID today itself. Very smooth process and great executive support." },
  { name: "Vikram M.", location: "Bangalore", comment: "I had a great experience betting on IPL. The updates and payouts were very fast." },
  { name: "Ankit T.", location: "Pune", comment: "100% genuine site. I have been using it for all my betting needs." },
  { name: "Suresh P.", location: "Hyderabad", comment: "Best customer care. They resolved my query over whatsapp within minutes." },
  { name: "Riya N.", location: "Chennai", comment: "Mujhe bahut accha experience mila. Payout fast aur secure hai." }
];

const trustPoints = [
  { title: "Expertise", desc: "Sports & Gaming Experts with 15+ years of successful experience", icon: Award },
  { title: "Experience", desc: "1.2M+ registered users from 2018 with over 60M plus successful withdrawals", icon: Check },
  { title: "Authority", desc: "Top 1 online betting portal in India with awards winning excellence", icon: Trophy },
  { title: "Trust", desc: "SSL encrypted with secure payment gateways and trusted by iTech labs", icon: Lock }
];

const faqs = [
  { q: "What is Mahadev Book?", a: "Mahadev Book is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information." },
  { q: "How does a Mahadev Book ID work?", a: "An account ID is generally used to identify a user account. Refer to Mahadev Book's current account instructions and terms for the exact process." },
  { q: "How can I access Mahadev Book?", a: "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site." },
  { q: "What sports are available on Mahadev Book?", a: "Available sports can change. Check the current sports or betting section on the website for the latest list and availability." },
  { q: "Does Mahadev Book provide live sports information?", a: "Check the site's current sports section for any live-event information and the terms that apply to its use." },
  { q: "How can I get help with my Mahadev Book account?", a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts." },
  { q: "How do I find Mahadev Book login information?", a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel." },
  { q: "What payment options are supported?", a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts." },
  { q: "What should I do if I have trouble accessing my account?", a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel." },
  { q: "Where can I find the latest Mahadev Book updates?", a: "Refer to Mahadev Book's current website information and terms for the most accurate answer." }
];

const tickerItems = [
  "🏆 USER_9921 WON ₹45,000 on CSK vs MI!",
  "🔥 USER_8832 WON ₹1,20,000 on Teen Patti!",
  "⚡ USER_4411 WITHDREW ₹75,000 in 4 mins!",
  "🎯 USER_5782 WON ₹88,000 on IND vs AUS!"
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = "https://wa.me/918360750829";

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-200 selection:bg-amber-500/30 selection:text-amber-200">
      

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide text-zinc-300">Live Betting Exchange</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-[1.1] tracking-tight text-white">
              BET<br/>
              <span className="text-amber-500">SMART.</span><br/>
              WIN BIG.
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
              The one and only betting exchange with instant withdrawal and 60k + live events, where the odds are in your favor
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={whatsappUrl} className="group flex items-center gap-3 bg-amber-500 text-black font-black px-8 py-4 rounded-xl hover:bg-amber-400 transition-all hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]">
                Join Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md hover:border-amber-500/50 transition-colors ${idx === 2 ? 'sm:col-span-2' : ''}`}>
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-amber-500 font-bold text-lg mb-1">{stat.label}</div>
                <div className="text-zinc-400 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border-y border-amber-500/20 py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-ticker text-sm font-bold tracking-wider text-amber-200/90">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => <span key={idx}>{item}</span>)}
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight">
                ABOUT <span className="text-amber-500">MAHADEV</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Mahadev Book is a trusted aggregator that offers you access to a world of live betting, premium sportsbook, and high roller casino with just a tap of a button. We assure you of the best payout experience with our guaranteed instant withdrawals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustPoints.map((tp, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                  <tp.icon className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold text-white mb-2">{tp.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{tp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                  <f.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{f.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">OUR <span className="text-amber-500">MARKETS</span></h2>
            <p className="text-zinc-400">Premium sportsbook and live casino platforms</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((g, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-[#050B14] border border-white/10 hover:border-amber-500/50 transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
                <div className="text-5xl mb-6 relative z-10">{g.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{g.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 relative z-10 min-h-[60px]">{g.desc}</p>
                <a href={whatsappUrl} className="inline-flex items-center gap-2 text-amber-500 font-bold hover:text-amber-400 transition-colors relative z-10">
                  Play Now <PlayCircle className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">THE <span className="text-amber-500">WINNERS</span></h2>
            <p className="text-zinc-400">Hear from our community of successful players</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-lg text-zinc-300 italic mb-6 leading-relaxed">"{rev.comment}"</p>
                <div>
                  <div className="font-bold text-white text-lg">{rev.name}</div>
                  <div className="text-amber-500 text-sm">{rev.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white/5 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white">F.A.Q</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl bg-[#050B14] border border-white/10 overflow-hidden transition-all hover:border-amber-500/30">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                  className="w-full text-left p-6 flex justify-between items-center text-white font-bold text-lg"
                >
                  <span className="pr-4">{f.q}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-amber-500">
                    {openFaq === i ? <Minus className="w-4 h-4"/> : <Plus className="w-4 h-4"/>}
                  </span>
                </button>
                <div className={`px-6 pb-6 text-zinc-400 leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === i ? 'block' : 'hidden'}`}>
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#02050A] border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="text-3xl font-black tracking-tighter text-white mb-6">
                MAHADEV<span className="text-amber-500">BOOK</span>
              </div>
              <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
                India’s most trusted sports insights and fantasy analytics platform. Providing live odds, player analysis and verified betting ID since 2018.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-zinc-400">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Insights Blog</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Mahadev Betting App</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Mahadev Book ID</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Contact Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Supported Platforms</h4>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Gold365 Exchange</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Laser247 Official</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> IPL Cricket Betting ID</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Online Betting ID India</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Mahadev Book Online Book</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Mahadev Book Official</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500 text-center md:text-left">
            <p>© 2026 Mahadev Book. All rights reserved.</p>
            <div className="flex gap-6 items-center">
              <span className="flex items-center gap-2"><Lock className="w-4 h-4"/> SSL Secured</span>
              <span className="font-bold border border-zinc-700 px-2 py-0.5 rounded">18+</span>
              <span>Play Responsibly</span>
            </div>
          </div>
          <p className="text-xs text-zinc-600 mt-6 text-center md:text-left max-w-4xl">
            Mahadev Book is an educational sports insights platform providing information for informational purposes only. Play all sports at your own risk.
          </p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a href={whatsappUrl} className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center">
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}
