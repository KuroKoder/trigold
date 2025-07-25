import { ArrowRight, Play, Shield, Zap, Sun, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f59e0b;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23d97706;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23b45309;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='%23030712'/%3E%3Cg opacity='0.3'%3E%3Ccircle cx='200' cy='150' r='80' fill='url(%23grad1)'/%3E%3Ccircle cx='800' cy='200' r='60' fill='%23fbbf24'/%3E%3Ccircle cx='1000' cy='400' r='100' fill='url(%23grad1)'/%3E%3Ccircle cx='300' cy='600' r='70' fill='%23f59e0b'/%3E%3C/g%3E%3Cg opacity='0.1'%3E%3Cpath d='M0,400 Q300,300 600,400 T1200,400 V800 H0 Z' fill='%23fbbf24'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-amber-400 rounded-full opacity-60"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Company Badge */}
            <div className="inline-flex items-center bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-8">
              <Sun className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-semibold">Teknologi Energi Terdepan</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Masa Depan
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Energi Bersih
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Dimulai Hari Ini
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              <span className="text-amber-400 font-semibold">TriGold</span> menghadirkan teknologi revolusioner 
              untuk menangkal panas matahari sekaligus mengubahnya menjadi energi bersih yang berkelanjutan.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">98%</div>
                <div className="text-sm text-slate-400">Efisiensi Energi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <div className="text-sm text-slate-400">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">15</div>
                <div className="text-sm text-slate-400">Tahun Garansi</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Mulai Konsultasi Gratis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="group border-2 border-slate-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                Lihat Demo Teknologi
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-400 mr-2" />
                <span>Bersertifikat Internasional</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-amber-400 mr-2" />
                <span>Teknologi Paten Terdaftar</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-blue-400 mr-2" />
                <span>ROI Hingga 300%</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-sm rounded-3xl border border-amber-500/30 p-8">
              {/* Solar Panel Visualization */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-amber-400/80 to-yellow-500/80 rounded-lg flex items-center justify-center relative overflow-hidden"
                    style={{
                      animationDelay: `${i * 0.2}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-amber-600/30"></div>
                    <Sun className="w-6 h-6 text-slate-900 animate-pulse" />
                  </div>
                ))}
              </div>

              {/* Energy Flow Animation */}
              <div className="text-center">
                <div className="inline-flex items-center bg-green-500/20 border border-green-500/40 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                  <span className="text-green-400 font-semibold">Menghasilkan Energi</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden max-w-4xl w-full">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 text-white hover:text-amber-400 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
              <div className="text-center text-slate-300">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Demo Video Teknologi TriGold</p>
                <p className="text-sm opacity-70 mt-2">Video akan dimuat di sini</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}