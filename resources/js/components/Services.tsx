import { Sun, Zap, Shield, Home, Building2, Factory, ArrowRight, CheckCircle, Wrench, BarChart3 } from "lucide-react";
import { useState } from "react";

const services = [
  { 
    id: "residential",
    icon: Home,
    title: "Solar Residensial", 
    desc: "Solusi energi surya untuk rumah tinggal dengan teknologi heat shield terdepan",
    features: ["Instalasi Profesional", "Garansi 15 Tahun", "Monitoring Real-time", "ROI 5-7 Tahun"],
    price: "Mulai dari Rp 25 juta",
    popular: false
  },
  { 
    id: "commercial",
    icon: Building2,
    title: "Solar Komersial", 
    desc: "Sistem energi surya untuk gedung perkantoran dan pusat bisnis",
    features: ["Desain Custom", "Sertifikasi Green Building", "Maintenance 24/7", "Tax Incentive Support"],
    price: "Mulai dari Rp 500 juta",
    popular: true
  },
  { 
    id: "industrial",
    icon: Factory,
    title: "Solar Industrial", 
    desc: "Solusi energi skala besar untuk pabrik dan fasilitas industri",
    features: ["High Capacity System", "Grid Integration", "Energy Storage", "Performance Analytics"],
    price: "Custom Quote",
    popular: false
  },
  { 
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support", 
    desc: "Layanan perawatan dan dukungan teknis untuk semua sistem solar",
    features: ["Regular Inspection", "Performance Optimization", "Emergency Support", "Parts Replacement"],
    price: "Paket Berlangganan",
    popular: false
  },
  { 
    id: "consulting",
    icon: BarChart3,
    title: "Konsultasi Energi", 
    desc: "Analisis dan perencanaan sistem energi surya yang optimal",
    features: ["Site Assessment", "ROI Analysis", "Permit Assistance", "Financing Options"],
    price: "Konsultasi Gratis",
    popular: false
  },
  { 
    id: "technology",
    icon: Zap,
    title: "Teknologi TriGold", 
    desc: "Sistem inovatif menangkal panas sambil menghasilkan energi maksimal",
    features: ["Dual Function Tech", "98% Efficiency", "Smart Monitoring", "Weather Adaptive"],
    price: "Premium Solution",
    popular: false
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState("commercial");
  const activeServiceData = services.find(service => service.id === activeService);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 border border-amber-200 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 text-amber-600 mr-2" />
            <span className="text-amber-700 font-semibold">Layanan Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Solusi Energi Surya
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent"> Terlengkap</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dari rumah tinggal hingga industri besar, kami menyediakan solusi energi surya yang disesuaikan dengan kebutuhan spesifik Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 transform hover:scale-105 ${
                  service.popular 
                    ? 'border-amber-500 ring-4 ring-amber-500/20' 
                    : 'border-transparent hover:border-amber-200'
                } ${
                  activeService === service.id ? 'ring-4 ring-amber-500/30 border-amber-500' : ''
                }`}
                onClick={() => setActiveService(service.id)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Paling Populer
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.popular 
                    ? 'bg-gradient-to-br from-amber-500 to-yellow-500' 
                    : 'bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-amber-500 group-hover:to-yellow-500'
                }`}>
                  <IconComponent className={`w-8 h-8 transition-colors duration-300 ${
                    service.popular 
                      ? 'text-white' 
                      : 'text-slate-600 group-hover:text-white'
                  }`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-slate-900">{service.price}</span>
                  {service.popular && (
                    <Shield className="w-5 h-5 text-amber-500" />
                  )}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center group/btn ${
                  service.popular
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 hover:shadow-lg hover:shadow-amber-500/25'
                    : 'bg-slate-100 text-slate-700 hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-500 hover:text-slate-900'
                }`}>
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Detailed Service View */}
        {activeServiceData && (
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                    <activeServiceData.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{activeServiceData.title}</h3>
                </div>
                
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  {activeServiceData.desc}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xl font-semibold text-amber-400 mb-4">Fitur Lengkap:</h4>
                  {activeServiceData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-6">
                  <div>
                    <div className="text-3xl font-bold text-amber-400">{activeServiceData.price}</div>
                    <div className="text-sm text-slate-400">Investasi yang tepat</div>
                  </div>
                  <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 flex items-center">
                    Konsultasi Sekarang
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl border border-amber-500/30 p-8">
                  {/* Service Visualization */}
                  <div className="aspect-square max-w-sm mx-auto">
                    {activeService === "residential" && (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <Home className="w-24 h-24 text-amber-400 mb-4" />
                        <div className="grid grid-cols-3 gap-1 mb-4">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="aspect-[3/2] bg-gradient-to-br from-amber-400 to-yellow-500 rounded animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                          ))}
                        </div>
                        <div className="text-center text-amber-400 font-semibold">Rumah Energi Mandiri</div>
                      </div>
                    )}
                    {activeService === "commercial" && (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <Building2 className="w-24 h-24 text-amber-400 mb-4" />
                        <div className="w-full bg-slate-700 rounded-lg h-32 relative mb-4">
                          <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-400 to-yellow-500 h-3 rounded-t-lg animate-pulse" />
                          <div className="grid grid-cols-4 gap-1 p-2">
                            {[...Array(12)].map((_, i) => (
                              <div key={i} className="aspect-square bg-amber-300 rounded opacity-60" />
                            ))}
                          </div>
                        </div>
                        <div className="text-center text-amber-400 font-semibold">Gedung Hemat Energi</div>
                      </div>
                    )}
                    {activeService === "industrial" && (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <Factory className="w-24 h-24 text-amber-400 mb-4" />
                        <div className="grid grid-cols-4 gap-1 mb-4">
                          {[...Array(16)].map((_, i) => (
                            <div key={i} className="aspect-square bg-gradient-to-br from-amber-400 to-yellow-500 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                          ))}
                        </div>
                        <div className="text-center text-amber-400 font-semibold">Industri Berkelanjutan</div>
                      </div>
                    )}
                    {(activeService === "maintenance" || activeService === "consulting" || activeService === "technology") && (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <activeServiceData.icon className="w-24 h-24 text-amber-400 mb-6" />
                        <div className="space-y-2 text-center">
                          <div className="inline-flex items-center bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            <span className="text-green-400 text-sm font-semibold">Layanan Premium</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process Steps */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Proses Kerja Kami
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konsultasi", desc: "Analisis kebutuhan energi Anda", icon: BarChart3 },
              { step: "02", title: "Desain", desc: "Rancangan sistem optimal", icon: Sun },
              { step: "03", title: "Instalasi", desc: "Pemasangan profesional", icon: Wrench },
              { step: "04", title: "Monitoring", desc: "Pemantauan performa", icon: Shield }
            ].map((process, index) => {
              const ProcessIcon = process.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-amber-500 group-hover:to-yellow-500 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300">
                      <ProcessIcon className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {process.step}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h4>
                  <p className="text-slate-600">{process.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Siap Beralih ke Energi Bersih?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan energi surya Anda hari ini juga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
              Konsultasi Gratis Sekarang
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:border-amber-400 hover:text-amber-600 transition-all duration-300 inline-flex items-center justify-center">
              <Zap className="mr-2 w-5 h-5" />
              Hitung ROI Investasi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}