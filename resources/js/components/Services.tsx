import {
    ArrowRight,
    Award,
    Building2,
    Camera,
    CheckCircle,
    ChevronRight,
    Download,
    Eye,
    FileText,
    Home,
    Info,
    Layers,
    Mail,
    MapPin,
    Menu,
    Phone,
    Share2,
    Shield,
    Snowflake,
    Star,
    Target,
    Thermometer,
    X,
    Zap,
} from 'lucide-react';
import { useState } from 'react';

const products = [
    {
        id: 'spacecool-film',
        icon: Snowflake,
        title: 'SPACECOOL PRODUCT',
        subtitle: 'Material Pendinginan Revolusioner',
        tagline: "World's Highest Cooling Performance",
        shortDesc: 'Film fleksibel dengan teknologi radiative cooling untuk menurunkan suhu hingga 40°C',
        fullDesc:
            'Film fleksibel revolusioner yang memantulkan sinar matahari dan memancarkan panas ke luar angkasa melalui jendela transparansi atmosfer 8-13 mikrometer. Teknologi terdepan yang memberikan performa pendinginan tertinggi di dunia.',
        heroImage: '/images/products/spacecool/spacecool.png',
        gallery: [
            '/images/products/spacecool/spacecoolfilm.jpg',
            '/images/products/spacecool/magnet.jpg',
            '/images/products/spacecool/tarpaulin.jpg',
            '/images/products/spacecool/architectural1.jpg',
        ],
        features: [
            { icon: Thermometer, title: 'Cooling Performance', desc: 'Menurunkan suhu hingga 40°C dibanding pelat baja' },
            { icon: Star, title: 'World Record', desc: 'Performa pendinginan tertinggi di dunia' },
            { icon: Shield, title: 'Weather Resistant', desc: 'Tahan cuaca outdoor jangka panjang 6+ tahun' },
            { icon: Zap, title: 'Energy Efficient', desc: 'Kapasitas pendinginan 70-100 W/m²' },
            { icon: Target, title: 'Precision Cooling', desc: '2-6°C di bawah suhu udara outdoor' },
            { icon: Layers, title: 'Flexible Application', desc: 'Film optik fleksibel untuk berbagai keperluan' },
        ],
        specifications: {
            reflectivity: '95%+',
            emissivity: '95%',
            durability: '6+ tahun',
            cooling: '70-100 W/m²',
            temperature: '2-6°C below ambient',
            application: 'Indoor & Outdoor',
        },
        variants: [
            {
                id: 'scf-film-white',
                name: 'SCF-2bxx-xnw (Film White HD)',
                image: '/images/products/spacecool/spacecoolfilm.jpg',
                tableImage: '/images/products/spacecool/detailfilm.png',
                size: '1.250mm x 25m',
                color: 'Putih/Silver',
                features: [
                    "World's highest reflectance level",
                    'Excellent outdoor weather resistance',
                    'Flexible optical film for various applications',
                    'Cooling capacity: 70-100 W/m²',
                ],
                applications: ['Atap bangunan', 'Greenhouse', 'Kendaraan', 'Industri'],
            },
            {
                id: 'scg-magnet-sheet',
                name: 'SCG-0401-KXW (Magnet Sheet White)',
                image: '/images/products/spacecool/magnet.jpg',
                tableImage: '/images/products/spacecool/detailmagnet.png',
                size: '1020mm x 10m',
                color: 'Putih',
                features: [
                    'Easy attachment and detachment system',
                    'Magnetic installation method',
                    'Reduces installation wear',
                    'Perfect for temporary applications',
                ],
                applications: ['Kendaraan', 'Container', 'Panel logam', 'Struktur sementara'],
            },
            {
                id: 'scm-tarpaulin',
                name: 'SCM-200E (Fire Resistant Tarpaulin)',
                image: '/images/products/spacecool/tarpaulin.jpg',
                tableImage: '/images/products/spacecool/detailtarpaulin.png',
                size: '104cm x 50m',
                color: 'Putih',
                features: ['Fire resistant material', 'Can be sewn and processed', 'Durable for various forms', '6+ years outdoor performance'],
                applications: ['Tenda', 'Penutup industri', 'Shelter', 'Konstruksi'],
            },
            {
                id: 'scm-membrane',
                name: 'SCM-300G-XNW (Membrane Class B)',
                image: '/images/products/spacecool/architectural1.jpg',
                tableImage: '/images/products/spacecool/detailamm.png',
                size: '104cm x 50m',
                color: 'Putih',
                features: [
                    'Class B & non-combustible certified',
                    'Suitable for membrane structures',
                    'Professional grade material',
                    'Architectural applications',
                ],
                applications: ['Struktur membran', 'Bangunan komersial', 'Stadium', 'Airport'],
            },
        ],
        category: 'Material',
        performance: '98%',
        popular: true,
        new: false,
    },
];

const services = [
    {
        id: 'residential',
        icon: Home,
        title: 'Residential Cooling',
        subtitle: 'Solusi Rumah Sejuk & Hemat Energi',
        shortDesc: 'Sistem pendinginan komprehensif untuk hunian modern',
        features: ['Custom Design', '2 Year Warranty', 'Professional Installation', '60% Energy Saving'],
        category: 'Service',
        popular: false,
        new: false,
    },
    {
        id: 'commercial',
        icon: Building2,
        title: 'Commercial Cooling',
        subtitle: 'Gedung & Perkantoran',
        shortDesc: 'Solusi pendinginan untuk bangunan komersial dengan sertifikasi green building',
        features: ['Green Building Certified', '24/7 Support', 'ROI 3-5 Years', 'Integrated System'],
        category: 'Service',
        popular: false,
        new: false,
    },
    // {
    //     id: 'industrial',
    //     icon: Factory,
    //     title: 'Industrial Cooling',
    //     subtitle: 'Skala Besar & Fasilitas Industri',
    //     shortDesc: 'Sistem pendinginan high-performance untuk industri dengan kontrol otomatis',
    //     features: ['Automation System', 'Remote Monitoring', 'High Performance', '98% Efficiency'],
    //     category: 'Service',
    //     popular: false,
    //     new: false,
    // },
    // {
    //     id: 'consulting',
    //     icon: BarChart3,
    //     title: 'Professional Services',
    //     subtitle: 'Konsultasi & Instalasi Expert',
    //     shortDesc: 'Layanan lengkap dari survey hingga maintenance dengan tim ahli berpengalaman',
    //     features: ['Free Consultation', 'Professional Installation', '24/7 Support', 'Lifetime Warranty'],
    //     category: 'Service',
    //     popular: false,
    //     new: false,
    // },
];

export default function CoolingProductsRedesign() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
    const [viewMode, setViewMode] = useState('overview');
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    interface ProductFeature {
        icon: React.ComponentType<{ className?: string }>;
        title: string;
        desc: string;
    }

    interface ProductVariant {
        id: string;
        name: string;
        image: string;
        tableImage: string;
        size: string;
        color: string;
        features: string[];
        applications: string[];
    }

    interface Product {
        id: string;
        icon: React.ComponentType<{ className?: string }>;
        title: string;
        subtitle: string;
        tagline: string;
        shortDesc: string;
        fullDesc: string;
        heroImage: string;
        gallery: string[];
        features: ProductFeature[];
        specifications: Record<string, string>;
        variants?: ProductVariant[];
        category: string;
        performance: string;
        popular: boolean;
        new: boolean;
    }

    interface Service {
        id: string;
        icon: React.ComponentType<{ className?: string }>;
        title: string;
        subtitle: string;
        shortDesc: string;
        features: string[];
        category: string;
        popular: boolean;
        new: boolean;
    }

    type ProductOrService = Product | Service;

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
        setSelectedVariant(null);
        setViewMode('overview');
        setMobileMenuOpen(false);
    };

    const handleVariantClick = (variant: ProductVariant) => {
        setSelectedVariant(variant);
        setViewMode('variant');
        setMobileMenuOpen(false);
    };

    const downloadSpecs = (imageSrc: string, fileName: string) => {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setSelectedVariant(null);
        setViewMode('overview');
        setMobileMenuOpen(false);
    };

    const allProducts = [...products, ...services];

    return (
        <div id="services" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Header Section */}
            <section className="relative overflow-hidden py-12 md:py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.15),transparent_70%)]"></div>

                <div className="relative mx-auto max-w-7xl px-4 md:px-6">
                    <div className="text-center">
                        <div className="mb-6 inline-flex items-center rounded-full border border-blue-200/50 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-sm md:mb-8 md:px-8 md:py-4">
                            <Snowflake className="mr-2 h-4 w-4 text-blue-600 md:mr-3 md:h-6 md:w-6" />
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-sm font-bold text-transparent md:text-lg">
                                Revolutionary Cooling Technology
                            </span>
                        </div>

                        <h1 className="mb-6 text-4xl leading-tight font-black text-slate-900 md:mb-8 md:text-6xl lg:text-8xl">
                            SPACECOOL
                            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                                Innovation
                            </span>
                        </h1>

                        <p className="mx-auto mb-8 max-w-4xl px-4 text-base leading-relaxed text-slate-600 md:mb-12 md:text-xl">
                            Teknologi pendinginan masa depan yang memanfaatkan transparansi atmosfer untuk menciptakan efek pendinginan maksimal
                            dengan efisiensi energi tertinggi di dunia.
                        </p>

                        {/* Quick Stats */}
                        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
                            {[
                                { icon: Award, value: '95%+', label: 'Reflectivity' },
                                { icon: Thermometer, value: '40°C', label: 'Temp Reduction' },
                                { icon: Shield, value: '6+', label: 'Years Durability' },
                                { icon: Zap, value: '100W/m²', label: 'Cooling Capacity' },
                            ].map((stat, index) => {
                                const StatIcon = stat.icon;
                                return (
                                    <div key={index} className="group text-center">
                                        <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg transition-transform duration-300 group-hover:scale-110 md:mb-4 md:h-16 md:w-16">
                                            <StatIcon className="h-5 w-5 text-white md:h-8 md:w-8" />
                                        </div>
                                        <div className="text-xl font-black text-slate-900 md:text-3xl">{stat.value}</div>
                                        <div className="text-xs font-semibold text-slate-600 md:text-sm">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section id="product" className="py-12 md:py-20">
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <div className="mb-12 text-center md:mb-16">
                        <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
                            Our <span className="text-blue-600">Products & Services</span>
                        </h2>
                        <p className="text-base text-slate-600 md:text-lg">Solusi lengkap untuk kebutuhan pendinginan modern</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                        {allProducts.map((item, index) => {
                            const IconComponent = item.icon;
                            const isHovered = hoveredCard === item.id;
                            const isProduct = products.some((p) => p.id === item.id);

                            return (
                                <div
                                    key={item.id}
                                    className={`group relative transform cursor-pointer transition-all duration-700 ${
                                        isHovered ? 'z-10 scale-105' : 'hover:scale-102'
                                    }`}
                                    onMouseEnter={() => setHoveredCard(item.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    onClick={() => {
                                        if (isProduct) {
                                            const product = products.find((p) => p.id === item.id);
                                            if (product) handleProductClick(product as Product);
                                        }
                                    }}
                                >
                                    <div
                                        className={`relative overflow-hidden rounded-3xl border-2 bg-white/90 shadow-xl backdrop-blur-sm transition-all duration-700 ${
                                            item.popular
                                                ? 'border-gradient-to-r from-blue-400 to-cyan-400 ring-4 ring-blue-500/20'
                                                : 'border-white/50 hover:border-blue-200/80'
                                        } ${isHovered ? 'shadow-2xl shadow-blue-500/20' : ''}`}
                                    >
                                        {/* Badges */}
                                        <div className="absolute top-4 left-4 z-10 flex gap-2">
                                            {item.popular && (
                                                <div className="flex items-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-2 py-1 text-xs font-black text-white md:px-3">
                                                    <Star className="mr-1 h-3 w-3 fill-current" />
                                                    POPULAR
                                                </div>
                                            )}
                                            {item.new && (
                                                <div className="rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-2 py-1 text-xs font-black text-white md:px-3">
                                                    NEW
                                                </div>
                                            )}
                                        </div>

                                        {/* Hero Image Placeholder */}
                                        <div className="relative h-40 overflow-hidden rounded-t-3xl md:h-48">
                                            <img
                                                src={
                                                    products.some((p) => p.id === item.id) && 'heroImage' in item && item.heroImage
                                                        ? item.heroImage
                                                        : '/images/placeholder/service.png'
                                                }
                                                alt={item.title}
                                                className="h-full w-full object-cover"
                                            />

                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                                            {/* Category badge */}
                                            <div className="absolute right-4 bottom-4">
                                                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 backdrop-blur-sm">
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 md:p-8">
                                            {/* Header */}
                                            <div className="mb-4 flex items-start justify-between md:mb-6">
                                                <div
                                                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-700 md:h-16 md:w-16 ${
                                                        item.popular || isHovered
                                                            ? 'bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600 shadow-lg'
                                                            : 'bg-gradient-to-br from-slate-100 to-slate-200'
                                                    }`}
                                                >
                                                    <IconComponent
                                                        className={`h-6 w-6 transition-all duration-700 md:h-8 md:w-8 ${
                                                            item.popular || isHovered ? 'text-white' : 'text-slate-600'
                                                        }`}
                                                    />
                                                </div>

                                                {products.some((p) => p.id === item.id) && 'performance' in item && item.performance && (
                                                    <div className="text-right">
                                                        <div className="mb-1 text-xs font-semibold text-slate-500">Performance</div>
                                                        <div className="text-sm font-bold text-green-600 md:text-lg">{item.performance}</div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Title & Subtitle */}
                                            <div className="mb-4">
                                                <h3 className="mb-2 text-lg font-black text-slate-900 transition-colors duration-300 group-hover:text-blue-600 md:text-2xl">
                                                    {item.title}
                                                </h3>
                                                <p className="mb-2 text-sm font-semibold text-blue-600">{item.subtitle}</p>
                                                {'tagline' in item && item.tagline && <p className="text-xs text-slate-500 italic">{item.tagline}</p>}
                                            </div>

                                            {/* Description */}
                                            <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600 md:mb-6 md:text-base">
                                                {item.shortDesc}
                                            </p>

                                            {/* Key Features */}
                                            <div className="mb-4 space-y-2 md:mb-6">
                                                {(item.features || []).slice(0, 3).map((feature, idx) => (
                                                    <div key={idx} className="flex items-center text-sm text-slate-600">
                                                        <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                                                        <span className="line-clamp-1">{typeof feature === 'object' ? feature.title : feature}</span>
                                                    </div>
                                                ))}
                                                {(item.features || []).length > 3 && (
                                                    <div className="text-xs font-semibold text-blue-600">
                                                        +{item.features.length - 3} fitur lainnya
                                                    </div>
                                                )}
                                            </div>

                                            {/* Action Button */}
                                            <div className="flex justify-center">
                                                <button
                                                    className={`group/btn flex items-center rounded-2xl px-4 py-2 font-bold transition-all duration-300 md:px-6 md:py-3 ${
                                                        item.popular
                                                            ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/30'
                                                            : 'bg-slate-100 text-slate-700 hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-indigo-600 hover:text-white hover:shadow-lg'
                                                    }`}
                                                >
                                                    <Eye className="mr-2 h-4 w-4" />
                                                    <span className="text-sm md:text-base">{isProduct ? 'Detail' : 'Info'}</span>
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Hover Effect */}
                                        <div
                                            className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-indigo-600/10 opacity-0 transition-opacity duration-700 ${
                                                isHovered ? 'opacity-100' : ''
                                            }`}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/80 p-2 backdrop-blur-sm md:p-4">
                    <div className="relative flex max-h-[100vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-lg transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-xl md:top-6 md:right-6 md:h-12 md:w-12"
                        >
                            <X className="h-5 w-5 md:h-6 md:w-6" />
                        </button>

                        {/* Modal Content */}
                        <div className="flex h-full flex-col overflow-hidden md:flex-row">
                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="fixed top-4 left-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-lg md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                            </button>

                            {/* Left Panel - Navigation & Quick Info */}
                            <div
                                className={`w-full flex-shrink-0 transform bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4 transition-transform duration-300 md:w-80 md:transform-none md:p-8 ${
                                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                                } absolute z-20 h-full overflow-y-auto md:relative md:translate-x-0`}
                            >
                                {/* Product Header */}
                                <div className="mb-6 flex items-center pt-12 md:mb-8 md:pt-0">
                                    <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg md:mr-4 md:h-16 md:w-16">
                                        <selectedProduct.icon className="h-6 w-6 text-white md:h-8 md:w-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white md:text-2xl">{selectedProduct.title}</h3>
                                        <p className="text-sm text-blue-300 md:text-base">{selectedProduct.subtitle}</p>
                                    </div>
                                </div>

                                {/* Navigation Menu */}
                                <div className="mb-6 space-y-2 md:mb-8">
                                    <button
                                        onClick={() => setViewMode('overview')}
                                        className={`flex w-full items-center rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                                            viewMode === 'overview'
                                                ? 'bg-blue-500 text-white shadow-lg'
                                                : 'text-slate-300 hover:bg-white/10 hover:text-white'
                                        }`}
                                    >
                                        <Info className="mr-3 h-5 w-5" />
                                        Overview
                                    </button>

                                    {selectedProduct.variants && (
                                        <div>
                                            <div className="px-4 py-2 text-xs font-semibold tracking-wide text-blue-300 uppercase">
                                                Variants ({selectedProduct.variants.length})
                                            </div>
                                            {selectedProduct.variants.map((variant) => (
                                                <button
                                                    key={variant.id}
                                                    onClick={() => handleVariantClick(variant)}
                                                    className={`flex w-full items-center rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                                                        selectedVariant?.id === variant.id
                                                            ? 'bg-cyan-500 text-white shadow-lg'
                                                            : 'text-slate-300 hover:bg-white/10 hover:text-white'
                                                    }`}
                                                >
                                                    <Layers className="mr-3 h-4 w-4" />
                                                    <div className="min-w-0 flex-1">
                                                        <div className="truncate text-sm font-semibold">{variant.name.split('(')[0]}</div>
                                                        <div className="text-xs opacity-75">{variant.size}</div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Quick Contact */}
                                <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm md:p-6">
                                    <h4 className="mb-4 text-base font-bold text-white md:text-lg">Need Help?</h4>
                                    <div className="space-y-3">
                                        <a
                                            href="https://wa.me/6281337433933"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex w-full items-center rounded-lg bg-green-500 px-3 py-2 text-white transition-all duration-300 hover:bg-green-600 md:px-4 md:py-3"
                                        >
                                            <Phone className="mr-2 h-4 w-4 md:mr-3" />
                                            <span className="text-sm font-semibold md:text-base">Hubungi via WhatsApp</span>
                                        </a>
                                        <a
                                            href="mailto:info@trigold.id"
                                            className="flex w-full items-center rounded-lg bg-blue-500 px-3 py-2 text-white transition-all duration-300 hover:bg-blue-600 md:px-4 md:py-3"
                                        >
                                            <Mail className="mr-2 h-4 w-4 md:mr-3" />
                                            <span className="text-sm font-semibold md:text-base">Email Us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Overlay for mobile menu */}
                            {mobileMenuOpen && (
                                <div className="fixed inset-0 z-10 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)}></div>
                            )}

                            {/* Right Panel - Main Content */}
                            <div className="flex-1 overflow-y-auto">
                                {viewMode === 'overview' && (
                                    <div className="p-4 md:p-8">
                                        {/* Hero Section */}
                                        <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-4 md:mb-12 md:p-8">
                                            <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-2">
                                                <div>
                                                    <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                                                        <h1 className="text-2xl font-black text-slate-900 md:text-4xl">{selectedProduct.title}</h1>
                                                        {selectedProduct.popular && (
                                                            <div className="flex w-fit items-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-black text-white md:px-4 md:py-2 md:text-sm">
                                                                <Star className="mr-1 h-3 w-3 fill-current md:mr-2 md:h-4 md:w-4" />
                                                                BESTSELLER
                                                            </div>
                                                        )}
                                                    </div>
                                                    <p className="mb-2 text-base font-semibold text-blue-600 md:text-lg">{selectedProduct.tagline}</p>
                                                    <p className="mb-4 text-sm leading-relaxed text-slate-600 md:mb-6 md:text-lg">
                                                        {selectedProduct.fullDesc}
                                                    </p>

                                                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center md:gap-6">
                                                        <a
                                                            href="https://wa.me/6281337433933"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl md:px-8 md:py-4"
                                                        >
                                                            Get Quote
                                                            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                                                        </a>
                                                    </div>
                                                </div>

                                                {/* Hero Image */}
                                                {selectedProduct.heroImage ? (
                                                    <div className="relative h-60 overflow-hidden rounded-2xl shadow-lg md:h-80">
                                                        <img
                                                            src={selectedProduct.heroImage}
                                                            alt={selectedProduct.title}
                                                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                                            onError={(e) => {
                                                                const img = e.target as HTMLImageElement;
                                                                img.style.display = 'none';
                                                                if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                                                                    (img.nextSibling as HTMLElement).style.display = 'flex';
                                                                }
                                                            }}
                                                        />
                                                        <div className="absolute right-4 bottom-4">
                                                            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 backdrop-blur-sm">
                                                                {selectedProduct.category}
                                                            </span>
                                                        </div>
                                                        <div className="absolute inset-0 hidden items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50">
                                                            <div className="text-center">
                                                                <Camera className="mx-auto mb-4 h-12 w-12 text-blue-400 md:h-16 md:w-16" />
                                                                <h3 className="mb-2 text-sm font-bold text-blue-600 md:text-base">
                                                                    Hero Product Image
                                                                </h3>
                                                                <p className="text-xs text-blue-500 md:text-sm">Image not available</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex h-60 items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 md:h-80">
                                                        <div className="text-center">
                                                            <Camera className="mx-auto mb-4 h-12 w-12 text-blue-400 md:h-16 md:w-16" />
                                                            <h3 className="mb-2 text-sm font-bold text-blue-600 md:text-base">Hero Product Image</h3>
                                                            <p className="text-xs text-blue-500 md:text-sm">Upload main product image here</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Key Features Grid */}
                                        <div className="mb-8 md:mb-12">
                                            <h2 className="mb-6 text-2xl font-black text-slate-900 md:mb-8 md:text-3xl">Key Features</h2>
                                            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                                                {selectedProduct.features.map((feature, idx) => {
                                                    const FeatureIcon = feature.icon;
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg md:p-6"
                                                        >
                                                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white transition-transform duration-300 group-hover:scale-110 md:mb-4 md:h-12 md:w-12">
                                                                <FeatureIcon className="h-5 w-5 md:h-6 md:w-6" />
                                                            </div>
                                                            <h3 className="mb-2 text-base font-bold text-slate-900 md:text-lg">{feature.title}</h3>
                                                            <p className="text-sm text-slate-600 md:text-base">{feature.desc}</p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Technical Specifications */}
                                        <div className="mb-8 md:mb-12">
                                            <h2 className="mb-6 text-2xl font-black text-slate-900 md:mb-8 md:text-3xl">Technical Specifications</h2>
                                            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-8">
                                                <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                                                    {Object.entries(selectedProduct.specifications)
                                                        .filter(([key, value]) => value && value.trim() !== '')
                                                        .map(([key, value], idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-center justify-between rounded-xl bg-slate-50 p-3 md:p-4"
                                                            >
                                                                <div className="text-sm font-semibold text-slate-700 capitalize md:text-base">
                                                                    {key.replace(/([A-Z])/g, ' $1')}
                                                                </div>
                                                                <div className="text-sm font-bold text-blue-600 md:text-base">{value}</div>
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Product Gallery */}
                                        <div className="mb-8 md:mb-12">
                                            <h2 className="mb-6 text-2xl font-black text-slate-900 md:mb-8 md:text-3xl">Product Gallery</h2>
                                            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                                                {selectedProduct.gallery && selectedProduct.gallery.length > 0
                                                    ? selectedProduct.gallery.map((imagePath, idx) => (
                                                          <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg">
                                                              <img
                                                                  src={imagePath}
                                                                  alt={`${selectedProduct.title} - Gallery ${idx + 1}`}
                                                                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110 md:h-64"
                                                                  onError={(e) => {
                                                                      const img = e.target as HTMLImageElement;
                                                                      img.style.display = 'none';
                                                                      if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                                                                          (img.nextSibling as HTMLElement).style.display = 'flex';
                                                                      }
                                                                  }}
                                                              />
                                                              <div className="absolute inset-0 hidden items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
                                                                  <div className="text-center">
                                                                      <Camera className="mx-auto mb-4 h-8 w-8 text-slate-400 md:h-12 md:w-12" />
                                                                      <p className="text-sm font-semibold text-slate-600 md:text-base">
                                                                          Gallery Image {idx + 1}
                                                                      </p>
                                                                      <p className="text-xs text-slate-500 md:text-sm">Image not available</p>
                                                                  </div>
                                                              </div>
                                                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                                              <div className="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                                  <p className="text-sm font-semibold md:text-base">Gallery Image {idx + 1}</p>
                                                              </div>
                                                          </div>
                                                      ))
                                                    : [1, 2, 3].map((item, idx) => (
                                                          <div
                                                              key={idx}
                                                              className="flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 md:h-64"
                                                          >
                                                              <div className="text-center">
                                                                  <Camera className="mx-auto mb-4 h-8 w-8 text-slate-400 md:h-12 md:w-12" />
                                                                  <p className="text-sm font-semibold text-slate-600 md:text-base">
                                                                      Gallery Image {item}
                                                                  </p>
                                                                  <p className="text-xs text-slate-500 md:text-sm">Upload product photo</p>
                                                              </div>
                                                          </div>
                                                      ))}
                                            </div>
                                        </div>

                                        {/* Product Variants Preview */}
                                        {selectedProduct.variants && (
                                            <div>
                                                <h2 className="mb-6 text-2xl font-black text-slate-900 md:mb-8 md:text-3xl">Available Variants</h2>
                                                <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
                                                    {selectedProduct.variants.map((variant, idx) => (
                                                        <div
                                                            key={variant.id}
                                                            className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg md:p-6"
                                                            onClick={() => handleVariantClick(variant)}
                                                        >
                                                            <div className="mb-4 flex items-center justify-between">
                                                                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 md:text-lg">
                                                                    {variant.name.split('(')[0]}
                                                                </h3>
                                                                <ChevronRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
                                                            </div>
                                                            <div className="mb-4 text-sm">
                                                                <div className="mb-2">
                                                                    <span className="text-slate-500">Size: </span>
                                                                    <span className="font-semibold text-slate-700">{variant.size}</span>
                                                                </div>
                                                                <div>
                                                                    <span className="text-slate-500">Color: </span>
                                                                    <span className="font-semibold text-slate-700">{variant.color}</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-wrap gap-2">
                                                                {variant.applications.slice(0, 3).map((app, appIdx) => (
                                                                    <span
                                                                        key={appIdx}
                                                                        className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700 md:px-3"
                                                                    >
                                                                        {app}
                                                                    </span>
                                                                ))}
                                                                {variant.applications.length > 3 && (
                                                                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600 md:px-3">
                                                                        +{variant.applications.length - 3}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {viewMode === 'variant' && selectedVariant && (
                                    <div className="p-4 md:p-8">
                                        {/* Variant Header */}
                                        <div className="mb-6 md:mb-8">
                                            <h1 className="mb-2 text-2xl font-black text-slate-900 md:text-4xl">{selectedVariant.name}</h1>
                                            <p className="text-base text-slate-600 md:text-lg">
                                                {selectedVariant.size} • {selectedVariant.color}
                                            </p>
                                        </div>

                                        {/* Variant Images */}
                                        <div className="mb-8 grid gap-4 md:mb-12 md:gap-6 lg:grid-cols-2">
                                            {/* Product Image */}
                                            <div className="relative">
                                                {selectedVariant.image ? (
                                                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                                                        <img
                                                            src={selectedVariant.image}
                                                            alt={selectedVariant.name}
                                                            className="h-60 w-full object-cover transition-transform duration-300 hover:scale-105 md:h-80"
                                                            onError={(e) => {
                                                                const img = e.target as HTMLImageElement;
                                                                img.style.display = 'none';
                                                                if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                                                                    (img.nextSibling as HTMLElement).style.display = 'flex';
                                                                }
                                                            }}
                                                        />
                                                        <div className="absolute inset-0 hidden items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50">
                                                            <div className="text-center">
                                                                <Camera className="mx-auto mb-4 h-12 w-12 text-blue-400 md:h-20 md:w-20" />
                                                                <h3 className="mb-2 text-base font-bold text-blue-600 md:text-xl">Product Image</h3>
                                                                <p className="text-sm text-blue-500 md:text-base">Image not available</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex h-60 items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 md:h-80">
                                                        <div className="text-center">
                                                            <Camera className="mx-auto mb-4 h-12 w-12 text-blue-400 md:h-20 md:w-20" />
                                                            <h3 className="mb-2 text-base font-bold text-blue-600 md:text-xl">Product Image</h3>
                                                            <p className="text-sm text-blue-500 md:text-base">Upload {selectedVariant.name} photo</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Specification Table */}
                                            <div className="relative">
                                                {selectedVariant.tableImage ? (
                                                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                                                        <img
                                                            src={selectedVariant.tableImage}
                                                            alt={`${selectedVariant.name} Specifications`}
                                                            className="h-60 w-full object-cover transition-transform duration-300 hover:scale-105 md:h-80"
                                                            onError={(e) => {
                                                                const img = e.target as HTMLImageElement;
                                                                img.style.display = 'none';
                                                                if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                                                                    (img.nextSibling as HTMLElement).style.display = 'flex';
                                                                }
                                                            }}
                                                        />
                                                        <div className="absolute inset-0 hidden items-center justify-center rounded-2xl border-2 border-dashed border-green-300 bg-green-50">
                                                            <div className="text-center">
                                                                <FileText className="mx-auto mb-4 h-12 w-12 text-green-400 md:h-20 md:w-20" />
                                                                <h3 className="mb-2 text-base font-bold text-green-600 md:text-xl">
                                                                    Specification Table
                                                                </h3>
                                                                <p className="text-sm text-green-500 md:text-base">Image not available</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex h-60 items-center justify-center rounded-2xl border-2 border-dashed border-green-300 bg-green-50 md:h-80">
                                                        <div className="text-center">
                                                            <FileText className="mx-auto mb-4 h-12 w-12 text-green-400 md:h-20 md:w-20" />
                                                            <h3 className="mb-2 text-base font-bold text-green-600 md:text-xl">
                                                                Specification Table
                                                            </h3>
                                                            <p className="text-sm text-green-500 md:text-base">Upload detailed specs table</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Variant Features */}
                                        <div className="mb-8 md:mb-12">
                                            <h2 className="mb-4 text-xl font-black text-slate-900 md:mb-6 md:text-2xl">Key Features</h2>
                                            <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                                                {selectedVariant.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center rounded-xl bg-blue-50 p-3 md:p-4">
                                                        <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500 md:mr-3 md:h-5 md:w-5" />
                                                        <span className="text-sm text-slate-700 md:text-base">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Applications */}
                                        <div className="mb-8 md:mb-12">
                                            <h2 className="mb-4 text-xl font-black text-slate-900 md:mb-6 md:text-2xl">Recommended Applications</h2>
                                            <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
                                                {selectedVariant.applications.map((app, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md md:p-4"
                                                    >
                                                        <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 md:mb-3 md:h-12 md:w-12">
                                                            <MapPin className="h-4 w-4 text-white md:h-6 md:w-6" />
                                                        </div>
                                                        <div className="text-sm font-semibold text-slate-900 md:text-base">{app}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col flex-wrap gap-3 sm:flex-row md:gap-4">
                                            <button
                                                onClick={() =>
                                                    downloadSpecs(selectedVariant.tableImage, `${selectedVariant.name}-specifications.png`)
                                                }
                                                className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl md:px-8 md:py-4"
                                            >
                                                <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                                                <span className="text-sm md:text-base">Download Specs</span>
                                            </button>
                                            <button
                                                className="flex items-center justify-center rounded-2xl border-2 border-blue-200 bg-white px-4 py-3 font-bold text-blue-600 transition-all duration-300 hover:bg-blue-50 md:px-8 md:py-4"
                                                onClick={() => {
                                                    if (navigator.share) {
                                                        navigator.share({
                                                            title: `${selectedProduct?.title} - ${selectedVariant?.name}`,
                                                            text: `Cek produk ${selectedProduct?.title} (${selectedVariant?.name}) ukuran ${selectedVariant?.size} warna ${selectedVariant?.color}`,
                                                            url: window.location.href,
                                                        });
                                                    } else {
                                                        alert('Fitur share tidak tersedia di browser Anda.');
                                                    }
                                                }}
                                            >
                                                <Share2 className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                                                <span className="text-sm md:text-base">Share Product</span>
                                            </button>
                                            <a
                                                className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl md:px-8 md:py-4"
                                                href={`https://wa.me/6281337433933?text=${encodeURIComponent(
                                                    `Halo, saya ingin request quote untuk produk:\n\n${selectedProduct?.title} - ${selectedVariant?.name}\nSize: ${selectedVariant?.size}\nColor: ${selectedVariant?.color}\n\nMohon info detail harga dan ketersediaan.`,
                                                )}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                                                <span className="text-sm md:text-base">Request Quote</span>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
