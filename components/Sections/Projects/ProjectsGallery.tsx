"use client";

import React, { useState } from 'react';
import { Building2, Calendar, Filter, MapPin } from 'lucide-react';
import { COLORS, ALL_PROJECTS } from '@/lib/Constants';


const ProjectsGallery = () => {
    const [filter, setFilter] = useState('all');
    
    const filteredProjects = filter === 'all' 
        ? ALL_PROJECTS 
        : ALL_PROJECTS.filter(p => p.category === filter);

    const categories = [
        { id: 'all', label: 'All Sectors' },
        { id: 'oil-gas', label: 'Oil & Gas' },
        { id: 'power-plant', label: 'Power Plants' },
        { id: 'industrial', label: 'Petrochemical' }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                
                {/* --- FILTER BUTTONS (Neural Pathways) --- */}
                <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
                    {categories.map(cat => (
                        <button 
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2 border ${
                                filter === cat.id 
                                ? 'text-white shadow-lg scale-105' 
                                : 'bg-white text-slate-500 hover:bg-slate-50 border-slate-200'
                            }`}
                            style={{ 
                                backgroundColor: filter === cat.id ? COLORS.primary : undefined,
                                borderColor: filter === cat.id ? COLORS.primary : undefined
                            }}
                        >
                            {cat.id === 'all' && <Filter size={14} />}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* --- GALLERY GRID (Muscle Fibers) --- */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all z-10"></div>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Badge Service */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider z-20 shadow-sm" style={{ color: COLORS.primary }}>
                                    {project.service}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-3 uppercase tracking-wide">
                                    <Building2 size={12} /> {project.category.replace('-', ' ')}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[hsl(207,96%,69%)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 text-sm mb-6 flex-1">
                                    {project.desc}
                                </p>
                                
                                <div className="space-y-3 pt-6 border-t border-slate-100 mt-auto">
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <Building2 size={16} className="text-slate-400" />
                                        <span className="font-medium truncate">{project.client}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <MapPin size={16} className="text-slate-400" />
                                        <span>{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <Calendar size={16} className="text-slate-400" />
                                        <span>Completed: {project.year}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGallery;