import { useState } from 'react';

// Define the Project type
interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  capacity: string;
  savings: string;
  year: string;
  duration: string;
  image: string;
  description: string;
  technologies: string[];
  client: string;
  results: string[];
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'Semua Proyek', count: 12 },
    { id: 'industrial', label: 'Industri', count: 4 },
    { id: 'commercial', label: 'Komersial', count: 3 },
    { id: 'residential', label: 'Residensial', count: 2 },
    { id: 'government', label: 'Pemerintah', count: 3 }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "PT Astra Manufacturing - Smart Factory",
      category: "industrial",
      location: "Karawang, Jawa Barat",
      capacity: "25 MW",
      savings: "72%",
      year: "2024",
      duration: "8 bulan",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&auto=format&q=80",
      description: "Implementasi sistem cooling technology di kompleks pabrik seluas 50 hektar dengan 200+ panel surya anti-panas.",
      technologies: ["Anti-Heat Solar Panel", "Smart Cooling System", "IoT Monitoring"],
      client: "PT Astra Manufacturing",
      results: ["Penghematan listrik 72%", "ROI dalam 14 bulan", "Efisiensi produksi +35%"]
    },
    {
      id: 2,
      title: "Mall Central Plaza - Energy Optimization",
      category: "commercial",
      location: "Jakarta Selatan",
      capacity: "15 MW",
      savings: "68%",
      year: "2024",
      duration: "6 bulan",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&h=400&fit=crop&auto=format&q=80",
      description: "Transformasi sistem energi mall dengan teknologi anti-panas terintegrasi dan smart monitoring system.",
      technologies: ["Energy Management System", "Real-time Monitoring", "Cooling Technology"],
      client: "Central Plaza Management",
      results: ["Biaya operasional -68%", "Comfort zone optimal", "Carbon footprint -85%"]
    },
    {
      id: 3,
      title: "Perumahan Green Valley - Sustainable Living",
      category: "residential",
      location: "Bandung, Jawa Barat",
      capacity: "5 MW",
      savings: "65%",
      year: "2024",
      duration: "4 bulan",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&auto=format&q=80",
      description: "Proyek percontohan perumahan berkelanjutan dengan teknologi solar anti-panas untuk 150 rumah.",
      technologies: ["Residential Solar System", "Home Energy Storage", "Smart Grid"],
      client: "Green Valley Developer",
      results: ["150 rumah ter-upgrade", "Tagihan listrik -65%", "Property value +25%"]
    },
    {
      id: 4,
      title: "Kantor Gubernur Jawa Barat - Government Building",
      category: "government",
      location: "Bandung, Jawa Barat",
      capacity: "12 MW",
      savings: "70%",
      year: "2023",
      duration: "10 bulan",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format&q=80",
      description: "Modernisasi sistem energi gedung pemerintahan dengan target carbon neutral pada 2025.",
      technologies: ["Government-Grade Security", "Backup Power System", "Environmental Monitoring"],
      client: "Pemerintah Provinsi Jawa Barat",
      results: ["Anggaran energi -70%", "Carbon neutral ready", "Contoh smart government"]
    },
    {
      id: 5,
      title: "PT Unilever Indonesia - Sustainable Factory",
      category: "industrial",
      location: "Cikarang, Jawa Barat",
      capacity: "30 MW",
      savings: "75%",
      year: "2023",
      duration: "12 bulan",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop&auto=format&q=80",
      description: "Proyek terbesar dengan integrasi AI-powered cooling system di 5 line produksi utama.",
      technologies: ["AI-Powered System", "Predictive Maintenance", "Advanced Cooling"],
      client: "PT Unilever Indonesia",
      results: ["Efisiensi maksimal 75%", "Zero downtime", "Sustainability leader"]
    },
    {
      id: 6,
      title: "Hotel Santika Premier - Hospitality Innovation",
      category: "commercial",
      location: "Bali",
      capacity: "8 MW",
      savings: "62%",
      year: "2023",
      duration: "5 bulan",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop&auto=format&q=80",
      description: "Sistem energi hijau untuk hotel bintang 5 dengan fokus pada guest experience dan sustainability.",
      technologies: ["Hospitality-Grade System", "Guest Comfort Optimization", "Aesthetic Integration"],
      client: "Hotel Santika Premier",
      results: ["Guest satisfaction +40%", "Operating cost -62%", "Green certification"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const achievements = [
    { label: "Total Kapasitas", value: "150+ MW", icon: "⚡" },
    { label: "Proyek Selesai", value: "500+", icon: "🏗️" },
    { label: "Penghematan Rata-rata", value: "68%", icon: "📊" },
    { label: "CO₂ Dikurangi", value: "50K+ Ton", icon: "🌱" }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portofolio
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> Terdepan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dari pabrik multinasional hingga smart city government, kami telah menghadirkan revolusi energi di berbagai sektor
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-3">{achievement.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.value}</div>
              <div className="text-gray-600 text-sm">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-700">{project.year}</span>
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full">
                  <span className="text-sm font-bold">-{project.savings}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'industrial' ? 'bg-blue-100 text-blue-700' :
                    project.category === 'commercial' ? 'bg-purple-100 text-purple-700' :
                    project.category === 'residential' ? 'bg-green-100 text-green-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {project.category === 'industrial' ? 'Industri' :
                     project.category === 'commercial' ? 'Komersial' :
                     project.category === 'residential' ? 'Residensial' :
                     'Pemerintah'}
                  </span>
                  <span className="text-sm text-gray-500">{project.duration}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                  <div className="font-semibold text-amber-600">{project.capacity}</div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 2).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-1 bg-amber-100 text-amber-600 text-xs rounded-lg">
                      +{project.technologies.length - 2} lainnya
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-2xl font-bold">
                    Penghematan {selectedProject.savings}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Detail Proyek</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Klien:</span>
                        <span className="font-semibold">{selectedProject.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lokasi:</span>
                        <span className="font-semibold">{selectedProject.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Kapasitas:</span>
                        <span className="font-semibold">{selectedProject.capacity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Durasi:</span>
                        <span className="font-semibold">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tahun:</span>
                        <span className="font-semibold">{selectedProject.year}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Hasil Utama</h4>
                    <div className="space-y-2">
                      {selectedProject.results.map((result: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">Teknologi yang Digunakan</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span key={index} className="px-4 py-2 bg-amber-100 text-amber-700 rounded-2xl font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Proyek Anda Selanjutnya?</h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Setiap proyek adalah unique. Mari diskusikan bagaimana teknologi Trigold dapat mentransformasi efisiensi energi perusahaan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Konsultasi Proyek
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-amber-600 transition-all duration-300">
                Download Portfolio PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}