const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white font-bold text-sm">
            E
          </div>
          <span className="font-bold text-slate-900">PT Estima Reka Sakti</span>
        </div>
        <div className="text-sm text-slate-500">
          © 2026 PT Estima Reka Sakti. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;