"use client"
import { CLIENTS } from '@/lib/Constants';

const ClientCarousel = () => {
  return (
    <div className="bg-white border-b border-slate-100 py-10 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest">Trusted by Industry Leaders</p>
      </div>
      
      {/* Infinite Scroll Animation */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {/* Loop 1 */}
          {CLIENTS.map((client, i) => (
            <div key={`l1-${i}`} className="w-32 h-16 flex items-center justify-center hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-full max-h-full object-contain"
                // 💉 VAKSIN: Kita casting targetnya jadi HTMLImageElement
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          ))}
          {/* Loop 2 (Duplicate for smooth scroll) */}
          {CLIENTS.map((client, i) => (
            <div key={`l2-${i}`} className="w-32 h-16 flex items-center justify-center hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-full max-h-full object-contain"
                // 💉 VAKSIN LAGI
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          ))}
          {/* Loop 3 (Extra buffer) */}
          {CLIENTS.map((client, i) => (
            <div key={`l3-${i}`} className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-full max-h-full object-contain"
                // 💉 VAKSIN LAGI
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Injection for Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default ClientCarousel;