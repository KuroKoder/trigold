import { Menu, Shield, Sun, X, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${
                isScrolled ? 'border-b border-gray-200 bg-white/95 shadow-lg backdrop-blur-xl' : 'bg-transparent'
            }`}
        >
            {/* Trust indicators bar - only show when scrolled */}
            <div
                className={`overflow-hidden bg-blue-500 text-xs text-white transition-all duration-500 ease-out ${
                    isScrolled ? 'max-h-8 py-1 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-center space-x-6 px-4">
                    <div className="flex items-center space-x-1">
                        <Shield className="h-3 w-3" />
                        <span className="font-semibold">Sertifikasi ISO 4593</span>
                    </div>
                    <div className="hidden items-center space-x-1 md:flex">
                        <Zap className="h-3 w-3" />
                        <span>Teknologi Terdepan</span>
                    </div>
                    <div className="hidden items-center space-x-1 md:flex">
                        <Sun className="h-3 w-3" />
                        <span>SPACECOOL Technology</span>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <img src="/trigold.png" alt="Trigold Logo" className="h-10 w-10 rounded-lg object-cover shadow-lg" />
                        </div>
                        <div>
                            <h1 className={`text-2xl font-bold transition-all duration-500 ease-out ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                                TriGold
                            </h1>
                            <p className={`-mt-1 text-xs transition-all duration-500 ease-out ${isScrolled ? 'text-black' : 'text-white'}`}>
                                Environmental Technology
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center space-x-8 md:flex">
                        <a
                            href="#about"
                            className={`group relative font-medium transition-all duration-500 ease-out ${
                                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                            }`}
                        >
                            Tentang Kami
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-500 ease-out group-hover:w-full ${
                                    isScrolled ? 'bg-blue-500' : 'bg-blue-300'
                                }`}
                            ></span>
                        </a>
                        <a
                            href="#services"
                            className={`group relative font-medium transition-all duration-500 ease-out ${
                                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                            }`}
                        >
                            Teknologi
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-500 ease-out group-hover:w-full ${
                                    isScrolled ? 'bg-blue-500' : 'bg-blue-300'
                                }`}
                            ></span>
                        </a>
                        <a
                            href="#solutions"
                            className={`group relative font-medium transition-all duration-500 ease-out ${
                                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                            }`}
                        >
                            Solusi
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-500 ease-out group-hover:w-full ${
                                    isScrolled ? 'bg-blue-500' : 'bg-blue-300'
                                }`}
                            ></span>
                        </a>
                        <a
                            href="#portofolio"
                            className={`group relative font-medium transition-all duration-500 ease-out ${
                                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                            }`}
                        >
                            Proyek
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-500 ease-out group-hover:w-full ${
                                    isScrolled ? 'bg-blue-500' : 'bg-blue-300'
                                }`}
                            ></span>
                        </a>
                        <a
                            href="#contact"
                            className={`transform rounded-full px-6 py-2.5 font-semibold transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg ${
                                isScrolled
                                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                                    : 'border border-white/30 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
                            }`}
                        >
                            Konsultasi Gratis
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`transition-all duration-500 ease-out md:hidden ${
                            isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                        }`}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div
                        className={`mt-4 pb-4 transition-all duration-500 ease-out md:hidden ${
                            isScrolled ? 'border-t border-gray-200' : 'border-t border-white/20'
                        }`}
                    >
                        <nav className="mt-4 flex flex-col space-y-3">
                            <a
                                href="#about"
                                className={`rounded-lg px-4 py-2 font-medium transition-all duration-500 ease-out ${
                                    isScrolled
                                        ? 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        : 'text-white hover:bg-white/10 hover:text-blue-300'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Tentang Kami
                            </a>
                            <a
                                href="#technology"
                                className={`rounded-lg px-4 py-2 font-medium transition-all duration-500 ease-out ${
                                    isScrolled
                                        ? 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        : 'text-white hover:bg-white/10 hover:text-blue-300'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Teknologi
                            </a>
                            <a
                                href="#solutions"
                                className={`rounded-lg px-4 py-2 font-medium transition-all duration-500 ease-out ${
                                    isScrolled
                                        ? 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        : 'text-white hover:bg-white/10 hover:text-blue-300'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Solusi
                            </a>
                            <a
                                href="#portfolio"
                                className={`rounded-lg px-4 py-2 font-medium transition-all duration-500 ease-out ${
                                    isScrolled
                                        ? 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        : 'text-white hover:bg-white/10 hover:text-blue-300'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Proyek
                            </a>
                            <a
                                href="#contact"
                                className={`mt-2 rounded-full px-6 py-3 text-center font-semibold transition-all duration-500 ease-out ${
                                    isScrolled
                                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                                        : 'border border-white/30 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
                                }`}
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
