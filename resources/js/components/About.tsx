import { ArrowRight, Building2, Car, Factory, Hospital, Hotel, Snowflake, Target, Thermometer, Users, Zap } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="bg-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                        <defs>
                            <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#06b6d4" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hero-grid)" />
                    </svg>
                </div>

                <div className="relative mx-auto max-w-7xl px-4">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2">
                                <Snowflake className="mr-2 h-4 w-4 text-cyan-400" />
                                <span className="text-sm font-semibold text-cyan-400">Distributor Resmi SPACECOOL</span>
                            </div>

                            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                                <span className="block">TRIGOLD</span>
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Indonesia</span>
                            </h1>

                            <p className="mb-8 text-xl text-slate-300 lg:text-2xl">
                                Solusi pendinginan tanpa energi listrik yang revolusioner untuk masa depan Indonesia yang berkelanjutan
                            </p>

                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                                <a
                                    href="https://spacecool.jp/en/technology/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-xl"
                                >
                                    Pelajari SPACECOOL
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </a>
                                <a
                                    href="https://wa.me/6281337433933"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-800/50 px-8 py-4 font-semibold text-white transition-all hover:bg-slate-700"
                                >
                                    Konsultasi Gratis
                                </a>
                            </div>
                        </div>

                        {/* Right Visual - SPACECOOL Product Showcase */}
                        <div className="relative">
                            <div className="relative mx-auto max-w-md">
                                {/* Main Product Visualization */}
                                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl">
                                    {/* SPACECOOL Coating Visualization */}
                                    <div className="relative">
                                        <div className="mb-6 text-center">
                                            <div className="inline-flex items-center rounded-full bg-cyan-500/20 px-4 py-2">
                                                <Snowflake className="mr-2 h-4 w-4 text-cyan-400" />
                                                <span className="text-sm font-bold text-cyan-400">SPACECOOL Technology</span>
                                            </div>
                                        </div>

                                        {/* Building with SPACECOOL */}
                                        <div className="relative mx-auto w-48">
                                            {/* Building Structure */}
                                            <div className="relative h-32 rounded-lg bg-slate-700">
                                                {/* SPACECOOL Coating Layer */}
                                                <div className="absolute inset-x-2 -top-3">
                                                    <div className="relative h-6 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 shadow-lg">
                                                        {/* Radiative Effect Animation */}
                                                        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                                                        {/* Cooling Particles */}
                                                        <div className="absolute inset-0 flex items-center justify-around px-2">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Snowflake
                                                                    key={i}
                                                                    className="h-3 w-3 animate-bounce text-white"
                                                                    style={{
                                                                        animationDelay: `${i * 0.2}s`,
                                                                        animationDuration: '2s',
                                                                    }}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Building Windows */}
                                                <div className="absolute inset-4 top-6">
                                                    <div className="grid grid-cols-4 gap-2">
                                                        {[...Array(8)].map((_, i) => (
                                                            <div key={i} className="aspect-square rounded-sm bg-cyan-300/60"></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Energy Savings Indicator */}
                                        <div className="mt-8 text-center">
                                            <div className="inline-flex items-center rounded-full border border-green-400/30 bg-green-500/20 px-6 py-3">
                                                <Thermometer className="mr-3 h-5 w-5 text-green-400" />
                                                <div className="text-left">
                                                    <div className="text-lg font-bold text-green-400">53% Hemat Listrik</div>
                                                    <div className="text-xs text-green-300">Tanpa Energi Tambahan</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Overview */}
            <div className="py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Content */}
                        <div>
                            <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-4 py-2">
                                <Building2 className="mr-2 h-4 w-4 text-blue-600" />
                                <span className="text-sm font-semibold text-blue-700">Tentang TRIGOLD</span>
                            </div>

                            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
                                Distributor Resmi Teknologi
                                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"> SPACECOOL</span> di
                                Indonesia
                            </h2>

                            <p className="mb-6 text-lg leading-relaxed text-slate-600">
                                TRIGOLD adalah distributor resmi teknologi SPACECOOL di Indonesia, menghadirkan solusi pendinginan inovatif yang ramah
                                lingkungan. Kami berkomitmen membantu perusahaan Indonesia mencapai target pengurangan emisi CO2 melalui teknologi
                                pendinginan radiative tanpa energi listrik.
                            </p>

                            <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                Sebagai mitra terpercaya dalam transformasi energi hijau, TRIGOLD melayani berbagai sektor industri dengan solusi
                                terbukti mengurangi konsumsi listrik hingga 53%.
                            </p>

                            {/* Key Features */}
                            <div className="space-y-4">
                                {[
                                    {
                                        icon: <Snowflake className="h-5 w-5 text-cyan-600" />,
                                        title: 'Teknologi Radiative Cooling',
                                        desc: 'Pendinginan tanpa energi listrik dengan SPACECOOL',
                                        bg: 'bg-cyan-50',
                                    },
                                    {
                                        icon: <Zap className="h-5 w-5 text-green-600" />,
                                        title: 'Hemat Energi 53%',
                                        desc: 'Mengurangi konsumsi listrik secara signifikan',
                                        bg: 'bg-green-50',
                                    },
                                    {
                                        icon: <Target className="h-5 w-5 text-blue-600" />,
                                        title: 'Multi-Sektor Industri',
                                        desc: 'Melayani otomotif, manufaktur, rumah sakit, hotel',
                                        bg: 'bg-blue-50',
                                    },
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${feature.bg}`}>
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="mb-1 font-semibold text-slate-900">{feature.title}</h4>
                                            <p className="text-slate-600">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Stats */}
                        <div className="grid gap-6">
                            {[
                                {
                                    number: '53%',
                                    label: 'Penghematan Listrik',
                                    icon: <Zap className="h-8 w-8" />,
                                    color: 'from-green-500 to-emerald-500',
                                },
                                {
                                    number: '0',
                                    label: 'Energi Listrik Dibutuhkan',
                                    icon: <Snowflake className="h-8 w-8" />,
                                    color: 'from-cyan-500 to-blue-500',
                                },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                                >
                                    <div
                                        className={`absolute top-0 right-0 bg-gradient-to-br opacity-10 ${stat.color} -mt-10 -mr-10 h-20 w-20 rounded-full`}
                                    ></div>
                                    <div className="relative">
                                        <div
                                            className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white`}
                                        >
                                            {stat.icon}
                                        </div>
                                        <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                                        <div className="text-slate-600">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision & Mission */}
            <div id="visi-misi" className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Visi & Misi TRIGOLD</h2>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600">
                            Memimpin transformasi energi hijau Indonesia melalui teknologi pendinginan berkelanjutan
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Vision */}
                        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-8 text-white">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20">
                                <Target className="h-8 w-8" />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold">Visi</h3>
                            <p className="text-lg leading-relaxed text-blue-50">
                                Menjadi pionir solusi pendinginan berkelanjutan di Indonesia yang ramah lingkungan dan mendukung target net zero
                                emission nasional.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900">Misi</h3>
                            {[
                                {
                                    icon: <Snowflake className="h-6 w-6 text-cyan-600" />,
                                    title: 'Teknologi Tanpa Energi',
                                    desc: 'Menghadirkan teknologi pendinginan tanpa energi untuk Indonesia',
                                },
                                {
                                    icon: <Target className="h-6 w-6 text-green-600" />,
                                    title: 'Net Zero Target',
                                    desc: 'Membantu perusahaan mencapai target net zero emission',
                                },
                                {
                                    icon: <Users className="h-6 w-6 text-blue-600" />,
                                    title: 'Solusi Terjangkau',
                                    desc: 'Memberikan solusi hemat energi yang terjangkau dan efektif',
                                },
                            ].map((mission, index) => (
                                <div key={index} className="flex items-start space-x-4 rounded-xl bg-white p-6 shadow-sm">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50">
                                        {mission.icon}
                                    </div>
                                    <div>
                                        <h4 className="mb-2 font-semibold text-slate-900">{mission.title}</h4>
                                        <p className="text-slate-600">{mission.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Industry Sectors */}
            <div className="py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Sektor Industri</h2>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600">
                            Melayani berbagai sektor dengan solusi SPACECOOL yang terbukti efektif
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
                        {[
                            { name: 'Otomotif', icon: <Car className="h-8 w-8" />, color: 'from-red-500 to-orange-500' },
                            { name: 'Manufaktur', icon: <Factory className="h-8 w-8" />, color: 'from-blue-500 to-indigo-500' },
                            { name: 'Rumah Sakit', icon: <Hospital className="h-8 w-8" />, color: 'from-green-500 to-emerald-500' },
                            { name: 'Hotel', icon: <Hotel className="h-8 w-8" />, color: 'from-purple-500 to-pink-500' },
                            { name: 'Konstruksi', icon: <Building2 className="h-8 w-8" />, color: 'from-yellow-500 to-orange-500' },
                        ].map((sector, index) => (
                            <div key={index} className="group text-center">
                                <div
                                    className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${sector.color} text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                                >
                                    {sector.icon}
                                </div>
                                <h4 className="font-semibold text-slate-900">{sector.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Snowflake className="mx-auto mb-6 h-16 w-16 text-cyan-400" />
                    <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Siap Menghemat Energi dengan Trigold?</h2>
                    <p className="mb-8 text-xl text-slate-300">Konsultasi gratis untuk mengetahui potensi penghematan energi di perusahaan Anda</p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <a
                            href="https://wa.me/6281337433933"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-xl"
                        >
                            Konsultasi Gratis
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <button className="inline-flex items-center justify-center rounded-full border border-slate-500 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-slate-800">
                            Download Brosur
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
