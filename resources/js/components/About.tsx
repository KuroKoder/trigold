import { Sun, Shield, Zap, Award, Users, Target, CheckCircle, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 border border-amber-200 rounded-full px-6 py-2 mb-6">
            <Sun className="w-5 h-5 text-amber-600 mr-2" />
            <span className="text-amber-700 font-semibold">Tentang TriGold</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Pelopor Teknologi
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent"> Solar Terdepan</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Lebih dari sekedar penyedia panel surya, kami adalah inovator teknologi yang mengubah cara dunia memanfaatkan energi matahari untuk masa depan yang lebih berkelanjutan.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Misi Kami: Mengubah Panas Menjadi Harapan
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                TriGold didirikan dengan visi revolusioner untuk mengubah tantangan panas berlebih menjadi solusi energi berkelanjutan. Teknologi inovatif kami tidak hanya menangkal panas matahari yang merugikan, tetapi mengonversinya menjadi energi bersih yang bermanfaat.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Dengan pengalaman lebih dari satu dekade, kami telah membantu ratusan perusahaan dan rumah tangga mengurangi biaya energi hingga 90% sambil berkontribusi pada lingkungan yang lebih hijau.
              </p>

              {/* Key Features */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Teknologi Paten Terdaftar</h4>
                    <p className="text-slate-600">Sistem dual-function yang menangkal panas sekaligus menghasilkan energi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Efisiensi Maksimal</h4>
                    <p className="text-slate-600">Konversi energi hingga 98% dengan teknologi fotovoltaik terdepan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Durabilitas Tinggi</h4>
                    <p className="text-slate-600">Garansi 15 tahun dengan material berkualitas premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* SVG Illustration */}
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fbbf24" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Solar Installation Illustration */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
                  {/* Building Silhouette */}
                  <div className="w-full max-w-sm">
                    <div className="bg-slate-700 rounded-t-lg h-32 mb-2 relative">
                      {/* Solar Panels on Roof */}
                      <div className="absolute -top-3 left-4 right-4">
                        <div className="grid grid-cols-4 gap-1">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="aspect-[3/2] bg-gradient-to-br from-amber-400 to-yellow-500 rounded-sm flex items-center justify-center"
                              style={{
                                animation: `pulse ${2 + (i * 0.2)}s infinite ease-in-out`
                              }}
                            >
                              <Sun className="w-3 h-3 text-slate-900 opacity-60" />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Windows */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="grid grid-cols-3 gap-2">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="aspect-square bg-amber-300 rounded-sm opacity-80"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Energy Flow Visualization */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-amber-400 text-sm font-semibold">Energi Terserap</div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-amber-400 rounded-full"
                            style={{
                              animation: `bounce ${1 + (i * 0.1)}s infinite ease-in-out`,
                              animationDelay: `${i * 0.2}s`
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2">
                        <Zap className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-green-400 text-sm font-semibold">Menghasilkan 5.2 kWh</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Visi Berkelanjutan</h4>
            <p className="text-slate-600">Menciptakan masa depan di mana energi bersih dapat diakses oleh semua lapisan masyarakat.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Kualitas Terjamin</h4>
            <p className="text-slate-600">Komitmen terhadap standar internasional dan jaminan kualitas produk terbaik.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Kepuasan Pelanggan</h4>
            <p className="text-slate-600">Mengutamakan kepuasan dan kesuksesan jangka panjang setiap klien yang kami layani.</p>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center">
          <Award className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Penghargaan & Sertifikasi</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Keunggulan TriGold telah diakui melalui berbagai penghargaan internasional dan sertifikasi standar kualitas tertinggi.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-sm text-slate-400">ISO 14001</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-sm text-slate-400">Green Energy Award</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-sm text-slate-400">IEC 61215 Certified</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
            Pelajari Teknologi Kami
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}