import { Award, Users, TrendingUp } from 'lucide-react';
import { COLORS } from '@/lib/Constants';

const Performance = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="bg-slate-50 rounded-3xl p-8 md:p-12 h-full relative overflow-hidden border border-slate-200">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full -mr-20 -mt-20" style={{ backgroundColor: COLORS.primaryLight }}></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full -ml-16 -mb-16" style={{ backgroundColor: COLORS.secondaryLight }}></div>
                 <div className="space-y-8 relative z-10">
                    <div className="flex items-start gap-5">
                       <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100" style={{ color: COLORS.primary }}><Award size={28} /></div>
                       <div><h4 className="font-bold text-slate-900 text-lg">International Standard</h4><p className="text-slate-500 leading-relaxed">Supported by credible experts and the latest version of equipment.</p></div>
                    </div>
                    <div className="flex items-start gap-5">
                       <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100" style={{ color: COLORS.secondary }}><Users size={28} /></div>
                       <div><h4 className="font-bold text-slate-900 text-lg">Skilled Human Resources</h4><p className="text-slate-500 leading-relaxed">Engineers trained and experienced in their field for over 10 years.</p></div>
                    </div>
                    <div className="flex items-start gap-5">
                       <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100" style={{ color: COLORS.primary }}><TrendingUp size={28} /></div>
                       <div><h4 className="font-bold text-slate-900 text-lg">Value Creation</h4><p className="text-slate-500 leading-relaxed">Commitment to useful, acceptable, and recognized products by society.</p></div>
                    </div>
                 </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Performance & Integrity</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-justify md:text-left">
              <p>There is nothing without value for <span className="font-bold text-slate-900">PT Estima Reka Sakti</span>. We never hesitate regarding our capability, quality, and competence for creating valuable services toward our clients, company, and environmental interests. As a solid team, honesty, professionalism, and integrity have led ESTIMA to become a leader in all related business areas.</p>
              <p>Supported by professionalism and credible experts with the latest version of equipment, ESTIMA has become a company with international standards. As a team, we are always conscious that cooperation is particularly important, ensuring our products are valuable, useful, acceptable, and recognized by society.</p>
              <div className="bg-slate-50 border-l-4 p-6 rounded-r-lg mt-6" style={{ borderColor: COLORS.secondary }}>
                <p className="italic text-slate-700 font-medium mb-2">"Human resources is a major thing in running this business. Our engineers are skilled, trained and experienced in their field over 10 years, so we can provide optimal result and customer satisfaction can be achieved."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance