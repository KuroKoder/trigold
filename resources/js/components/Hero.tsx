// Ganti warna teks dan icon agar lebih kontras dan nyaman dilihat user
import { ArrowRight, Leaf, Shield, Target, TrendingUp } from 'lucide-react';

export default function Hero() {
    // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">
            {/* Simplified Background with Minimal Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/herp-bg.webp"
                    alt="Modern industrial facility with air conditioning systems and blue technology elements"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="text-left">
                        {/* Simple Mission Badge */}
                        <div className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-2">
                            <Leaf className="mr-2 h-4 w-4 text-white" />
                            <span className="text-sm font-medium text-white">Net-Zero Carbon Solution</span>
                        </div>

                        {/* Clean Main Heading */}
                        <h1 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
                            <span className="text-white">Reduksi Emisi</span>
                            <br />
                            <span className="text-yellow-100">50% Lebih Hemat</span>
                            <br />
                            <span className="text-white">Energi AC</span>
                        </h1>

                        {/* Simplified Description */}
                        <p className="mb-8 text-xl leading-relaxed text-white">
                            <span className="font-semibold text-yellow-100">TriGold</span>
                            Solusi Pendinginan Revolusioner Tanpa Listrik dengan Teknologi SPACECOOL - Mengurangi Konsumsi Energi hingga 53% dan Emisi
                            CO2 hingga 51%.
                        </p>

                        {/* Simple Stats Grid */}
                        <div className="mb-10 grid grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-100">50%</div>
                                <div className="text-sm text-white">Hemat Energi</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-100">51%</div>
                                <div className="text-sm text-white">CO₂ Dikurangi</div>
                            </div>
                        </div>

                        {/* Simple CTA Buttons */}
                        <div className="mb-10 flex flex-col gap-4 sm:flex-row">
                            <button
                                className="group flex items-center justify-center rounded-lg bg-yellow-100 px-8 py-4 text-lg font-semibold text-blue-400 transition-all hover:scale-105 hover:bg-yellow-100"
                                onClick={() =>
                                    window.open('https://wa.me/6281337433933?text=Halo%20TriGold,%20saya%20ingin%20konsultasi%20gratis.', '_blank')
                                }
                            >
                                Konsultasi Gratis
                                <ArrowRight className="ml-2 h-5 w-5 text-blue-400 transition-transform group-hover:translate-x-1" />
                            </button>
                            {/* <button
                                onClick={() => setIsVideoPlaying(true)}
                                className="group flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:border-yellow-100 hover:text-yellow-100"
                            >
                                <Play className="mr-2 h-5 w-5 text-yellow-100" />
                                Lihat Case Study
                            </button> */}
                        </div>

                        {/* Simple Trust Indicators */}
                        <div className="flex flex-wrap gap-6 text-sm text-white">
                            <div className="flex items-center">
                                <Shield className="mr-2 h-4 w-4 text-white" />
                                <span>Teknologi Jepang</span>
                            </div>
                            <div className="flex items-center">
                                <Target className="mr-2 h-4 w-4 text-white" />
                                <span>ISO 14001 Certified</span>
                            </div>
                            <div className="flex items-center">
                                <TrendingUp className="mr-2 h-4 w-4 text-white" />
                                <span>Proven Results</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simplified Video Modal */}
            {/* {isVideoPlaying && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                    <div className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-white">
                        <button onClick={() => setIsVideoPlaying(false)} className="absolute top-4 right-4 z-10 text-white hover:text-yellow-100">
                            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex aspect-video items-center justify-center bg-white">
                            <div className="max-w-2xl px-8 text-center text-white">
                                <Play className="mx-auto mb-4 h-16 w-16 text-yellow-100" />
                                <h3 className="mb-2 text-2xl font-bold text-white">Case Study Results</h3>
                                <p className="mb-4 text-lg text-yellow-100">PT. AISAN NASMOCO & PT. Denso Manufacturing</p>

                                <div className="mx-auto max-w-md space-y-3 text-left">
                                    <div className="flex justify-between">
                                        <span>Energy Reduction:</span>
                                        <span className="font-bold text-yellow-100">50%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>CO₂ Saved Annually:</span>
                                        <span className="font-bold text-yellow-100">1,200 Ton</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>ROI Period:</span>
                                        <span className="font-bold text-yellow-100">18 Months</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Maintenance Reduction:</span>
                                        <span className="font-bold text-yellow-100">60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </section>
    );
}
