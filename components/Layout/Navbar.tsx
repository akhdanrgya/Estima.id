"use client"
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { COLORS } from '@/lib/Constants';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const pathname = usePathname(); 

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-slate-200 py-3' : 'bg-white/80 backdrop-blur-md border-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0" style={{ backgroundColor: COLORS.primary, boxShadow: `0 10px 15px -3px ${COLORS.primaryLight}` }}>E</div>
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 leading-none">PT ESTIMA<span style={{ color: COLORS.primary }}>.ID</span></span>
                        <span className="text-[0.65rem] md:text-xs font-bold tracking-widest text-slate-500 uppercase">Reka Sakti</span>
                    </div>
                </div>

                {/* --- DESKTOP MENU --- */}
                <div className="hidden md:flex gap-8 font-medium text-slate-600">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        
                        return (
                            <a 
                                key={item.name}
                                href={item.href} 
                                className={`transition-colors ${
                                    isActive 
                                    ? 'font-bold' // Kalo aktif, tebelin
                                    : 'hover:text-[hsl(207,96%,69%)]' // Kalo gak, kasih hover effect biasa
                                }`}
                                style={{ color: isActive ? COLORS.primary : undefined }} // Suntik warna kalo aktif
                            >
                                {item.name}
                            </a>
                        )
                    })}
                </div>

                <button className="hidden md:block bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">Get Quote</button>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-800">{isMobileMenuOpen ? <X /> : <Menu />}</button>
            </div>

            {/* --- MOBILE MENU --- */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 flex flex-col items-center gap-4 animate-slideDown">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <a 
                                key={item.name}
                                href={item.href} 
                                className={`w-full text-center py-2 ${
                                    isActive ? 'font-bold bg-slate-50' : 'text-slate-600 hover:bg-slate-50'
                                }`}
                                style={{ color: isActive ? COLORS.primary : undefined }}
                            >
                                {item.name}
                            </a>
                        )
                    })}
                    <button className="text-white px-6 py-2 rounded-lg w-3/4 shadow-md" style={{ backgroundColor: COLORS.primary }}>Get Quote</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;