"use client"
import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Building2, Calendar, MapPin, ShieldCheck, ArrowLeft } from 'lucide-react';
import { COLORS, ALL_PROJECTS } from '@/lib/Constants';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

export default function ProjectDetail(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params);
  const targetId = params?.id || "13";
  const project = ALL_PROJECTS.find(p => p.id.toString() === targetId);

  if (!project) {
    return notFound();
  }

  const carouselImages = project.images || [project.image, project.image, project.image];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white font-sans text-slate-800 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
          </Link>

          <div className="mb-12">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide">
              {carouselImages.map((img, idx) => (
                <div key={idx} className="snap-center w-full md:w-[80%] flex-shrink-0 relative rounded-3xl overflow-hidden shadow-lg h-[300px] md:h-[500px] bg-slate-100 flex items-center justify-center">
                  <img
                    src={img}
                    alt={`${project.title} - View ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2 justify-center mt-2">
              <span className="w-2 h-2 rounded-full bg-slate-800"></span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="md:col-span-2 space-y-6">
              <div className="inline-block px-3 py-1 bg-slate-100 rounded text-xs font-bold uppercase tracking-wider text-slate-500">
                {project.category.replace('-', ' ')}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                {project.title}
              </h1>
              <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: COLORS.primary }}></div>

              <div className="prose max-w-none text-slate-600 text-lg leading-relaxed pt-4">
                <p>{project.desc}</p>
                <p>{project.article}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
                <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-4">Project Overview</h3>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Client</div>
                  <div className="font-medium text-slate-900 flex items-center gap-2">
                    <Building2 size={16} style={{ color: COLORS.primary }} /> {project.client}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</div>
                  <div className="font-medium text-slate-900 flex items-center gap-2">
                    <MapPin size={16} style={{ color: COLORS.primary }} /> {project.location}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Duration</div>
                  <div className="font-medium text-slate-900 flex items-center gap-2">
                    <Calendar size={16} style={{ color: COLORS.primary }} /> {project.year}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Core Service</div>
                  <div className="font-medium text-slate-900 flex items-center gap-2">
                    <ShieldCheck size={16} style={{ color: COLORS.primary }} /> {project.service}
                  </div>
                </div>
              </div>

              <Link href="/contact" className="w-full block text-center text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1" style={{ backgroundColor: COLORS.primary }}>
                Consult Similar Project
              </Link>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}