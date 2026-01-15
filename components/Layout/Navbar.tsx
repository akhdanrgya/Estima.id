"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COLORS } from '@/lib/Constants';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-slate-200 py-3' : 'bg-white/80 backdrop-blur-md border-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg" style={{ backgroundColor: COLORS.primary, boxShadow: `0 10px 15px -3px ${COLORS.primaryLight}` }}>
                        E
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-slate-900">
                        ESTIMA<span style={{ color: COLORS.primary }}>.ID</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 font-medium text-slate-600">
                    {['Home', 'Solutions', 'Projects', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[hsl(207,96%,69%)] transition-colors">
                            {item}
                        </a>
                    ))}
                </div>

                <button className="hidden md:block bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                    Get Quote
                </button>

                {/* Mobile Toggle */}
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-800">
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 flex flex-col items-center gap-4 animate-slideDown">
                    {['Home', 'Solutions', 'Projects'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-600 font-medium w-full text-center py-2 hover:bg-slate-50">
                            {item}
                        </a>
                    ))}
                    <button className="text-white px-6 py-2 rounded-lg w-3/4 shadow-md" style={{ backgroundColor: COLORS.primary }}>
                        Get Quote
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;