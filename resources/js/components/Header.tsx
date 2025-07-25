import { Shield, Sun, Zap, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-lg border-b border-amber-500/20 sticky top-0 z-50">
      {/* Trust indicators bar */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 text-xs py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center space-x-6">
          <div className="flex items-center space-x-1">
            <Shield className="w-3 h-3" />
            <span className="font-semibold">Sertifikasi ISO 14001</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Zap className="w-3 h-3" />
            <span>Teknologi Terdepan</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Sun className="w-3 h-3" />
            <span>10+ Tahun Pengalaman</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/trigold.png"
                alt="Trigold Logo"
                className="w-10 h-10 rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                TriGold
              </h1>
              <p className="text-xs text-slate-400 -mt-1">Solar Technology</p>
            </div>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium relative group"
            >
              Tentang Kami
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#technology" 
              className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium relative group"
            >
              Teknologi
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#solutions" 
              className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium relative group"
            >
              Solusi
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#portfolio" 
              className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium relative group"
            >
              Proyek
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Konsultasi Gratis
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-amber-400 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700/50">
            <nav className="flex flex-col space-y-3 mt-4">
              <a 
                href="#about" 
                className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium py-2 px-4 hover:bg-slate-800/50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </a>
              <a 
                href="#technology" 
                className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium py-2 px-4 hover:bg-slate-800/50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Teknologi
              </a>
              <a 
                href="#solutions" 
                className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium py-2 px-4 hover:bg-slate-800/50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Solusi
              </a>
              <a 
                href="#portfolio" 
                className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium py-2 px-4 hover:bg-slate-800/50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyek
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-6 py-3 rounded-full font-semibold text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Konsultasi Gratis
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}