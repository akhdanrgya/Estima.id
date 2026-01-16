const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <img
            src="/estima.png"
            alt="PT Estima Reka Sakti"
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="text-sm text-slate-500">
          © 2026 PT Estima Reka Sakti. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;