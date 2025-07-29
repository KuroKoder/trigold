import React, { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNewsletterSubmit = () => {
        if (!email.trim()) return;

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setEmail('');
            alert('Terima kasih! Anda telah berlangganan newsletter kami.');
        }, 1000);
    };

    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '30px 30px',
                    }}
                ></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="mb-6 flex items-center space-x-4">
                            <img
                                src="/trigold.png"
                                alt="Trigold Logo"
                                className="h-12 w-12 rounded-xl object-contain shadow-lg"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const fallback = target.nextElementSibling as HTMLElement | null;
                                    if (fallback) {
                                        fallback.style.display = 'flex';
                                    }
                                }}
                            />

                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"
                                style={{ display: 'none' }}
                            >
                                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-2xl font-bold text-transparent">Trigold</h3>
                                <p className="font-medium text-blue-300">Environmental Technology</p>
                            </div>
                        </div>
                        <p className="mb-6 leading-relaxed text-gray-300">
                            Solusi pendinginan tanpa energi listrik yang revolusioner untuk masa depan Indonesia yang berkelanjutan.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-3">
                            {[
                                {
                                    href: '#',
                                    bg: 'bg-blue-600 hover:bg-blue-700',
                                    icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
                                },
                                {
                                    href: '#',
                                    bg: 'bg-blue-700 hover:bg-blue-800',
                                    icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z',
                                },
                                {
                                    href: '#',
                                    bg: 'bg-pink-600 hover:bg-pink-700',
                                    icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.766-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z',
                                },
                                {
                                    href: '#',
                                    bg: 'bg-red-600 hover:bg-red-700',
                                    icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                                },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${social.bg} shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl`}
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="mb-6 text-lg font-semibold text-blue-200">Perusahaan</h4>
                        <ul className="space-y-3">
                            {[
                                { href: '#about', text: 'Tentang Kami' },
                                { href: '#visi-misi', text: 'Tim & Visi' },
                                { href: '#portofolio', text: 'Portofolio' },
                                { href: '#services', text: 'Layanan' },
                                // { href: '#careers', text: 'Karir' },
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="group flex items-center text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-blue-400 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100"></span>
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h4 className="mb-6 text-lg font-semibold text-blue-200">Produk & Layanan</h4>
                        <ul className="space-y-3">
                            {[
                                { href: '#product', text: 'Teknologi Pendingin' },
                                { href: '#product', text: 'Solusi Energi' },
                                { href: '#contact', text: 'Konsultasi' },
                                { href: '#contact', text: 'Dukungan Teknis' },
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="group flex items-center text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-blue-400 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100"></span>
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter Column */}
                    <div>
                        <h4 className="mb-6 text-lg font-semibold text-blue-200">Kontak Kami</h4>
                        <div className="mb-8 space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="mt-1 h-5 w-5 flex-shrink-0 text-blue-300">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-300">Sekeloa, Bandung</p>
                                    <p className="text-sm text-gray-400">40134, Jawa Barat</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="h-5 w-5 flex-shrink-0 text-blue-300">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <a
                                    href="mailto:info@trigold.id"
                                    className="text-gray-300 transition-colors duration-300 hover:text-blue-300 hover:underline"
                                >
                                    info@trigold.id
                                </a>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="h-5 w-5 flex-shrink-0 text-green-400">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                                    </svg>
                                </div>
                                <a
                                    href="https://wa.me/6281337433933"
                                    className="text-gray-300 transition-colors duration-300 hover:text-green-300 hover:underline"
                                >
                                    +62 813-3743-3933
                                </a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="rounded-2xl border border-blue-800/20 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-6 backdrop-blur-sm">
                            <h5 className="mb-3 flex items-center text-base font-semibold text-blue-200">
                                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                Newsletter
                            </h5>
                            <div className="space-y-3">
                                <div className="flex">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email Anda"
                                        className="flex-1 rounded-l-xl border border-gray-600 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none"
                                    />
                                    <button
                                        onClick={handleNewsletterSubmit}
                                        disabled={isSubmitting}
                                        className="rounded-r-xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                        ) : (
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-400">Update teknologi terbaru & tips hemat energi 🌱</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700/50 bg-black/20 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
                        <div className="flex flex-col items-center space-y-3 text-sm text-gray-400 lg:flex-row lg:space-y-0 lg:space-x-6">
                            <p className="flex items-center">&copy; {new Date().getFullYear()} Trigold. All rights reserved.</p>
                            <div className="flex flex-wrap justify-center space-x-4 lg:space-x-6">
                                {[
                                    { href: '#privacy', text: 'Kebijakan Privasi' },
                                    { href: '#terms', text: 'Syarat & Ketentuan' },
                                    { href: '#cookies', text: 'Cookie Policy' },
                                ].map((item, index, array) => (
                                    <React.Fragment key={index}>
                                        <a href={item.href} className="transition-colors duration-300 hover:text-white hover:underline">
                                            {item.text}
                                        </a>
                                        {index < array.length - 1 && <span className="text-gray-600">•</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                                <div className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
                                <span className="font-medium text-green-300">Online</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="font-medium text-blue-300">SPACECOOL Technology</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
