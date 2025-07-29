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
        { id: 'all', label: 'Semua Proyek', count: 6 },
        { id: 'industrial', label: 'Industri', count: 5 },
        { id: 'government', label: 'Pemerintah', count: 1 },
    ];

    const projects: Project[] = [
        {
            id: 1,
            title: 'ENEOS Corporation - Refinery Optimization',
            category: 'industrial',
            location: 'Jakarta, Indonesia',
            capacity: '50 MW',
            savings: '68%',
            year: '2024',
            duration: '12 bulan',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&auto=format&q=80',
            description:
                'Implementasi SPACECOOL technology di kompleks refinery dengan sistem cooling terintegrasi untuk optimasi proses produksi minyak.',
            technologies: ['SPACECOOL Technology', 'Anti-Heat Solar Panel', 'Industrial Cooling System'],
            client: 'ENEOS Corporation',
            results: ['Penghematan energi 68%', 'Efisiensi produksi +45%', 'ROI dalam 18 bulan'],
        },
        {
            id: 2,
            title: 'Honda Motor Co., Ltd - Manufacturing Excellence',
            category: 'industrial',
            location: 'Karawang, Jawa Barat',
            capacity: '35 MW',
            savings: '72%',
            year: '2024',
            duration: '10 bulan',
            image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&h=400&fit=crop&auto=format&q=80',
            description: 'Transformasi energi pabrik otomotif dengan teknologi anti-panas terdepan untuk line produksi Honda.',
            technologies: ['Smart Manufacturing System', 'Energy Recovery Technology', 'IoT Monitoring'],
            client: 'Honda Motor Co., Ltd',
            results: ['Efisiensi maksimal 72%', 'Zero emission target', 'Quality improvement +30%'],
        },
        {
            id: 3,
            title: 'PT. AISAN NASMOCO - Energy Revolution',
            category: 'industrial',
            location: 'Jakarta, Indonesia',
            capacity: '20 MW',
            savings: '50%',
            year: '2024',
            duration: '8 bulan',
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&auto=format&q=80',
            description: 'Proyek breakthrough dengan penghematan energi 50% menggunakan teknologi cooling terdepan di fasilitas manufaktur.',
            technologies: ['Advanced Cooling Technology', 'Energy Management System', 'Predictive Analytics'],
            client: 'PT. AISAN NASMOCO',
            results: ['Energy reduction 50%', 'Operational cost -45%', 'Sustainability certified'],
        },
        {
            id: 4,
            title: 'PT. Denso Manufacturing Indonesia - Smart Factory',
            category: 'industrial',
            location: 'Bekasi, Jawa Barat',
            capacity: '25 MW',
            savings: '65%',
            year: '2023',
            duration: '9 bulan',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format&q=80',
            description: 'Implementasi teknologi SPACECOOL di fasilitas manufaktur komponen otomotif dengan fokus efisiensi tinggi.',
            technologies: ['SPACECOOL Integration', 'Smart Grid Technology', 'Real-time Monitoring'],
            client: 'PT. Denso Manufacturing Indonesia',
            results: ['Penghematan 65%', 'Production efficiency +40%', 'Green manufacturing standard'],
        },
        {
            id: 5,
            title: 'Toyota Astra Motor - Future Manufacturing',
            category: 'industrial',
            location: 'Karawang, Jawa Barat',
            capacity: '45 MW',
            savings: '70%',
            year: '2024',
            duration: '14 bulan',
            image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop&auto=format&q=80',
            description: 'Proyek potensial terbesar dengan integrasi teknologi anti-panas untuk transformasi manufaktur berkelanjutan.',
            technologies: ['Next-Gen Cooling System', 'AI-Powered Optimization', 'Carbon Neutral Technology'],
            client: 'Toyota Astra Motor',
            results: ['Target saving 70%', 'Industry 4.0 ready', 'Sustainability leadership'],
        },
        {
            id: 6,
            title: 'Government Facility - Public Sector Innovation',
            category: 'government',
            location: 'Jakarta, Indonesia',
            capacity: '15 MW',
            savings: '58%',
            year: '2023',
            duration: '7 bulan',
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop&auto=format&q=80',
            description: 'Proyek percontohan sektor publik dengan teknologi ramah lingkungan untuk efisiensi energi gedung pemerintahan.',
            technologies: ['Public Sector Technology', 'Energy Efficiency System', 'Environmental Monitoring'],
            client: 'Government of Indonesia',
            results: ['Budget saving 58%', 'Public sector model', 'Environmental compliance'],
        },
    ];

    const filteredProjects = activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter);

    const achievements = [
        { label: 'Total Kapasitas', value: '190+ MW', icon: '⚡' },
        { label: 'Klien Terkemuka', value: '50+', icon: '🏢' },
        { label: 'Penghematan Rata-rata', value: '64%', icon: '📊' },
        { label: 'COP27 Japan Pavilion', value: 'Featured', icon: '🌍' },
    ];

    return (
        <section id="portofolio" className="bg-gradient-to-br from-white to-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-300 shadow-lg">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                        </svg>
                    </div>
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">
                        Portofolio
                        <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent"> Terdepan</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                        Dipercaya oleh perusahaan multinasional terkemuka seperti ENEOS, Honda, Toyota, dan Denso untuk mentransformasi efisiensi
                        energi mereka
                    </p>
                </div>

                {/* Achievements Stats */}
                <div className="mb-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-3 text-3xl">{achievement.icon}</div>
                            <div className="mb-2 text-3xl font-bold text-gray-900">{achievement.value}</div>
                            <div className="text-sm text-gray-600">{achievement.label}</div>
                        </div>
                    ))}
                </div>

                {/* Prestigious Clients Section */}
                <div className="mb-16">
                    <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
                        Dipercaya Perusahaan
                        <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent"> Terkemuka</span>
                    </h3>
                    <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-5">
                        {[
                            { name: 'ENEOS Corporation', logo: '🛢️' },
                            { name: 'Honda Motor Co., Ltd', logo: '🚗' },
                            { name: 'Toyota Astra Motor', logo: '🚙' },
                            { name: 'PT. AISAN NASMOCO', logo: '🔧' },
                            { name: 'PT. Denso Manufacturing', logo: '⚙️' },
                        ].map((client, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-3 text-4xl">{client.logo}</div>
                                <div className="text-sm font-semibold text-gray-700">{client.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications & Awards */}
                <div className="mb-16">
                    <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
                        Sertifikasi &<span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent"> Penghargaan</span>
                    </h3>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center">
                            <div className="mb-3 text-3xl">🌍</div>
                            <h4 className="mb-2 font-bold text-gray-900">COP27 Japan Pavilion</h4>
                            <p className="text-sm text-gray-600">Dipamerkan di konferensi iklim dunia sebagai teknologi inovatif</p>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-6 text-center">
                            <div className="mb-3 text-3xl">🤝</div>
                            <h4 className="mb-2 font-bold text-gray-900">SPACECOOL Partner</h4>
                            <p className="text-sm text-gray-600">Partner resmi teknologi SPACECOOL Japan untuk Indonesia</p>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center">
                            <div className="mb-3 text-3xl">🏆</div>
                            <h4 className="mb-2 font-bold text-gray-900">Quality Certified</h4>
                            <p className="text-sm text-gray-600">Berbagai sertifikat kualitas produk dan standar internasional</p>
                        </div>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="mb-12 flex flex-wrap justify-center gap-3">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`flex items-center space-x-2 rounded-2xl px-6 py-3 font-semibold transition-all duration-300 ${
                                activeFilter === filter.id
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-300 text-white shadow-lg'
                                    : 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            <span>{filter.label}</span>
                            <span
                                className={`rounded-full px-2 py-1 text-xs ${
                                    activeFilter === filter.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                                }`}
                            >
                                {filter.count}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm">
                                    <span className="text-sm font-semibold text-gray-700">{project.year}</span>
                                </div>
                                <div className="absolute top-4 right-4 rounded-full bg-green-500 px-3 py-1 text-white">
                                    <span className="text-sm font-bold">-{project.savings}</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-3 flex items-center justify-between">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                            project.category === 'industrial' ? 'bg-blue-100 text-blue-700' : 'bg-blue-300 text-blue-300'
                                        }`}
                                    >
                                        {project.category === 'industrial' ? 'Industri' : 'Pemerintah'}
                                    </span>
                                    <span className="text-sm text-gray-500">{project.duration}</span>
                                </div>

                                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">{project.title}</h3>

                                <p className="mb-4 line-clamp-3 text-sm text-gray-600">{project.description}</p>

                                <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center space-x-1">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                        </svg>
                                        <span>{project.location}</span>
                                    </div>
                                    <div className="font-semibold text-blue-600">{project.capacity}</div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 2).map((tech, index) => (
                                        <span key={index} className="rounded-lg bg-gray-100 px-2 py-1 text-xs text-gray-600">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 2 && (
                                        <span className="rounded-lg bg-blue-100 px-2 py-1 text-xs text-blue-600">
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
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                        <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white">
                            <div className="relative">
                                <img src={selectedProject.image} alt={selectedProject.title} className="h-64 w-full object-cover" />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/90 backdrop-blur-sm transition-colors hover:bg-black"
                                >
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="mb-6 flex items-center justify-between">
                                    <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
                                    <div className="rounded-2xl bg-green-100 px-4 py-2 font-bold text-green-700">
                                        Penghematan {selectedProject.savings}
                                    </div>
                                </div>

                                <div className="mb-8 grid gap-8 md:grid-cols-2">
                                    <div>
                                        <h4 className="mb-4 font-bold text-gray-900">Detail Proyek</h4>
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
                                        <h4 className="mb-4 font-bold text-gray-900">Hasil Utama</h4>
                                        <div className="space-y-2">
                                            {selectedProject.results.map((result: string, index: number) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                                    <span className="text-gray-700">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4 className="mb-4 font-bold text-gray-900">Teknologi yang Digunakan</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.technologies.map((tech: string, index: number) => (
                                            <span key={index} className="rounded-2xl bg-blue-100 px-4 py-2 font-semibold text-blue-700">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-gray-50 p-6">
                                    <p className="leading-relaxed text-gray-700">{selectedProject.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="text-center">
                    <div className="rounded-3xl bg-gradient-to-r from-blue-500 to-blue-300 p-8 text-white">
                        <h3 className="mb-4 text-2xl font-bold">Proyek Anda Selanjutnya?</h3>
                        <p className="mx-auto mb-6 max-w-2xl text-blue-100">
                            Bergabunglah dengan ENEOS, Honda, Toyota, dan perusahaan terkemuka lainnya yang telah merasakan revolusi efisiensi energi
                            dengan teknologi SPACECOOL.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <a
                                href="https://wa.me/6281337433933?text=Halo%20saya%20tertarik%20konsultasi%20proyek%20efisiensi%20energi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-blue-600 shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl"
                            >
                                <svg className="mr-2 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.68.96.98-3.58-.24-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.28 1.23.45 1.65.58.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                                </svg>
                                Konsultasi Proyek
                            </a>
                            {/* <button className="rounded-2xl border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-blue-600">
                                Download Portfolio PDF
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
