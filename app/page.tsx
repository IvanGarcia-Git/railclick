import { Button } from "@/components/ui/button"
import { Users, Shield, Award, ChevronRight, ChevronDown, Phone, Mail, Globe, Star, Search, Train } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ItaliaTrainLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-4 sm:py-auto">
        {/* Rounded Container */}
        <div className="relative w-full sm:w-[90vw] max-w-none sm:max-w-none h-[calc(100vh-2rem)] sm:h-[90vh] mx-auto rounded-3xl overflow-hidden border-2 sm:border-4 border-white shadow-lg sm:shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image src="/images/colosseum-bg.jpg" alt="Roman Colosseum" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-[calc(100vh-2rem)] sm:h-[90vh] flex flex-col">
            {/* Header inside rounded container */}
            <header className="p-4 sm:p-6 lg:p-8 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                    <Train className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-white font-semibold text-lg sm:text-xl">ItalyTren</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                  <a href="#inicio" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
                    Inicio
                  </a>
                  <a href="#rutas" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
                    Rutas de Tren
                  </a>
                  <a href="#tipos" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
                    Tipos de Tren
                  </a>
                  <a href="#estaciones" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
                    Estaciones
                  </a>
                  <a href="#billetes" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
                    Comprar Billetes
                  </a>
                  <a href="#blog" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
                    Blog
                  </a>
                  <a href="#faqs" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
                    FAQs
                  </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                  <Button variant="ghost" className="text-white hover:bg-white/10 p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </Button>
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                  <div className="flex items-center space-x-2">
                    <select className="bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 hover:bg-white/25 transition-all duration-300">
                      <option value="es" className="text-gray-900">ES</option>
                      <option value="en" className="text-gray-900">EN</option>
                    </select>
                  </div>
                  <Link href="/login">
                    <Button variant="ghost" className="text-white hover:bg-white/10 text-sm">
                      Login
                    </Button>
                  </Link>
                  <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-sm px-4 py-2">
                    Buscar Trenes
                    <ChevronRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 min-h-0">
              <div className="mb-4 sm:mb-6">
                <span className="text-white/90 text-base sm:text-lg font-medium italic">Viaja por Italia</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight max-w-6xl">
                Explora las mejores rutas de tren en Italia
              </h1>

              {/* Search Bar - Mobile First */}
              <div className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl sm:rounded-full p-3 sm:p-2 mb-6 sm:mb-8 w-full max-w-5xl shadow-2xl">
                {/* Mobile Layout - Stacked */}
                <div className="flex flex-col sm:hidden space-y-3">
                  <select className="w-full bg-transparent text-white placeholder-white/70 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40 border border-white/30">
                    <option value="" className="text-gray-900">Origen</option>
                    <option value="roma" className="text-gray-900">Roma</option>
                    <option value="milan" className="text-gray-900">Milán</option>
                    <option value="florencia" className="text-gray-900">Florencia</option>
                    <option value="venecia" className="text-gray-900">Venecia</option>
                    <option value="napoles" className="text-gray-900">Nápoles</option>
                  </select>
                  <select className="w-full bg-transparent text-white placeholder-white/70 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40 border border-white/30">
                    <option value="" className="text-gray-900">Destino</option>
                    <option value="roma" className="text-gray-900">Roma</option>
                    <option value="milan" className="text-gray-900">Milán</option>
                    <option value="florencia" className="text-gray-900">Florencia</option>
                    <option value="venecia" className="text-gray-900">Venecia</option>
                    <option value="napoles" className="text-gray-900">Nápoles</option>
                  </select>
                  <input 
                    type="date" 
                    className="w-full bg-transparent text-white placeholder-white/70 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40 border border-white/30 [color-scheme:dark]" 
                    placeholder="Fecha"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white py-3 rounded-xl transition-all duration-300">
                    <Search className="mr-2 h-4 w-4" />
                    Buscar Trenes
                  </Button>
                </div>

                {/* Desktop Layout - Inline */}
                <div className="hidden sm:flex items-center gap-1">
                  <div className="flex-1">
                    <select className="w-full bg-transparent text-white placeholder-white/70 px-3 lg:px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 border-0 text-sm lg:text-base">
                      <option value="" className="text-gray-900">Origen</option>
                      <option value="roma" className="text-gray-900">Roma</option>
                      <option value="milan" className="text-gray-900">Milán</option>
                      <option value="florencia" className="text-gray-900">Florencia</option>
                      <option value="venecia" className="text-gray-900">Venecia</option>
                      <option value="napoles" className="text-gray-900">Nápoles</option>
                    </select>
                  </div>
                  <div className="w-px h-8 bg-white/40"></div>
                  <div className="flex-1">
                    <select className="w-full bg-transparent text-white placeholder-white/70 px-3 lg:px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 border-0 text-sm lg:text-base">
                      <option value="" className="text-gray-900">Destino</option>
                      <option value="roma" className="text-gray-900">Roma</option>
                      <option value="milan" className="text-gray-900">Milán</option>
                      <option value="florencia" className="text-gray-900">Florencia</option>
                      <option value="venecia" className="text-gray-900">Venecia</option>
                      <option value="napoles" className="text-gray-900">Nápoles</option>
                    </select>
                  </div>
                  <div className="w-px h-8 bg-white/40"></div>
                  <div className="flex-1">
                    <input 
                      type="date" 
                      className="w-full bg-transparent text-white placeholder-white/70 px-3 lg:px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 border-0 [color-scheme:dark] text-sm lg:text-base" 
                      placeholder="Fecha"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 lg:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm lg:text-base">
                    <Search className="mr-2 h-4 w-4" />
                    Buscar
                  </Button>
                </div>
              </div>

              <p className="text-white/80 text-base sm:text-lg max-w-3xl px-4">
                Descubre la manera más cómoda y rápida de viajar por Italia con nuestros trenes de alta velocidad
              </p>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between p-4 sm:p-6 lg:p-8 space-y-4 lg:space-y-0 flex-shrink-0">
              {/* World Travel Awards Badge */}
              <div className="flex items-center space-x-2 text-white">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Award className="h-4 w-4 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="text-xs lg:text-sm">
                  <div className="font-semibold">WORLD</div>
                  <div className="font-semibold">TRAVEL</div>
                  <div className="font-semibold">AWARDS</div>
                </div>
              </div>

              {/* Center Text */}
              <div className="text-center text-white/90 max-w-2xl px-4">
                <p className="text-xs sm:text-sm lg:text-sm xl:text-base">
                  Descubre el corazón de Italia con experiencias de viaje únicas que muestran sus ciudades eternas,
                  paisajes impresionantes y rica cultura ferroviaria.
                </p>
              </div>

              {/* Rating Badge */}
              <div className="flex items-center space-x-2 text-white">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">★</span>
                </div>
                <div className="text-xs lg:text-sm">
                  <div className="font-semibold">4.9/5</div>
                  <div className="text-xs opacity-80">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-12 bg-white" id="rutas">
        <div className="container mx-auto px-6">
          <div className="relative max-w-6xl mx-auto bg-white p-8 md:p-12">
            <div className="text-center mb-8 flex items-center justify-center space-x-4">
              <div className="w-12 h-px bg-gray-300"></div>
              <span className="text-gray-600 font-medium italic">Rutas Populares</span>
              <div className="w-12 h-px bg-gray-300"></div>
            </div>

            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto">
                Descubre las rutas de tren más populares de Italia
              </h2>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Viaja cómodamente entre las principales ciudades italianas con nuestros trenes de alta velocidad
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Roma - Nápoles */}
              <div className="group bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/colosseum-interior.jpg"
                    alt="Roma - Nápoles"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Alta Velocidad
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Roma - Nápoles</h3>
                  <p className="text-gray-600 mb-4">Desde 1h 10min | Desde €29</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Conecta la capital con la hermosa ciudad del sur de Italia. Disfruta de vistas espectaculares del paisaje italiano.
                  </p>
                  <Link href="/rutas/roma-napoles">
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                      Ver Horarios
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Roma - Florencia */}
              <div className="group bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/florence-duomo.jpg"
                    alt="Roma - Florencia"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Frecciarossa
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Roma - Florencia</h3>
                  <p className="text-gray-600 mb-4">Desde 1h 32min | Desde €45</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Viaja al corazón del Renacimiento italiano. La ruta más popular para los amantes del arte y la cultura.
                  </p>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    Ver Horarios
                  </Button>
                </div>
              </div>

              {/* Milán - Venecia */}
              <div className="group bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/venice-grand-canal.jpg"
                    alt="Milán - Venecia"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Italo
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Milán - Venecia</h3>
                  <p className="text-gray-600 mb-4">Desde 2h 25min | Desde €35</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Desde la capital de la moda hasta la ciudad flotante. Una experiencia única atravesando el norte de Italia.
                  </p>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    Ver Horarios
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#tipos">
                <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-full">
                  Ver Más Información
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Train Types Section */}
      <section className="py-12 bg-gray-50" id="tipos">
        <div className="container mx-auto px-6">
          <div className="relative max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8 flex items-center justify-center space-x-4">
              <div className="w-12 h-px bg-gray-300"></div>
              <span className="text-gray-600 font-medium italic">Tipos de Tren</span>
              <div className="w-12 h-px bg-gray-300"></div>
            </div>

            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Conoce nuestros trenes de alta velocidad
              </h2>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Viaja con los trenes más modernos y rápidos de Europa. Comodidad, velocidad y puntualidad garantizada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frecciarossa */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Train className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Frecciarossa</h3>
                <div className="mb-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Hasta 300 km/h
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  El tren de alta velocidad más avanzado de Italia. Conecta las principales ciudades con máximo confort y velocidad.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• WiFi gratuito</li>
                  <li>• Asientos reclinables</li>
                  <li>• Servicio de restauración</li>
                  <li>• Enchufes en cada asiento</li>
                </ul>
              </div>

              {/* Italo */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Train className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Italo</h3>
                <div className="mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Hasta 300 km/h
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Trenes modernos con diseño italiano distintivo. Ofrece una experiencia de viaje premium y sostenible.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Entretenimiento a bordo</li>
                  <li>• Asientos ergonómicos</li>
                  <li>• Bar a bordo</li>
                  <li>• Ambiente silencioso</li>
                </ul>
              </div>

              {/* Frecciargento */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                  <Train className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Frecciargento</h3>
                <div className="mb-4">
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Hasta 250 km/h
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Conecta el norte y sur de Italia pasando por Roma. Ideal para rutas panorámicas y ciudades medianas.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Vistas panorámicas</li>
                  <li>• Conexiones regionales</li>
                  <li>• Precios competitivos</li>
                  <li>• Horarios frecuentes</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-full">
                Comparar Trenes
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          {/* Rounded Container */}
          <div className="relative max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-12">
            {/* Gallery label */}
            <div className="text-center mb-8 flex items-center justify-center space-x-4">
              <div className="w-12 h-px bg-gray-300"></div>
              <span className="text-gray-600 font-medium italic">Galería</span>
              <div className="w-12 h-px bg-gray-300"></div>
            </div>

            {/* Main Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Descubre los paisajes, la cultura y momentos únicos de Italia
              </h2>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Explora nuestra galería curada que captura la belleza, cultura y momentos inolvidables de nuestros viajes por Italia
              </p>
            </div>

            {/* Gallery Grid - Masonry Style */}
            <div className="relative mb-8">
              {/* Top Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {/* Image 1 - Tall */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-80">
                  <Image
                    src="/images/venice-canal.jpg"
                    alt="Canal de Venecia con edificios coloridos"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 2 - Full Height */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-80">
                  <Image
                    src="/images/milan-cathedral.jpg"
                    alt="Catedral de Milán - Arquitectura gótica"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 3 - Full Height */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-80">
                  <Image
                    src="/images/david-florence.jpg"
                    alt="David de Miguel Ángel en Florencia"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 4 - Tall */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-80">
                  <Image
                    src="/images/positano-amalfi.jpg"
                    alt="Positano en la Costa Amalfitana"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Image 5 - Wide */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-48 md:h-64">
                  <Image
                    src="/images/pompeii-vesuvius.jpg"
                    alt="Ruinas de Pompeya con el Monte Vesubio"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 6 - Wide */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-48 md:h-64">
                  <Image
                    src="/images/cinque-terre.jpg"
                    alt="Cinque Terre - Pueblo colorido en acantilado"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 7 - Wide */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-48 md:h-64">
                  <Image
                    src="/images/lake-como.jpg"
                    alt="Lago Como - Escena callejera encantadora"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Explore Gallery Button - Centered in section */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="pointer-events-auto">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium shadow-lg border border-gray-200 mt-16">
                    Explorar Galería
                  </Button>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-full">
                Ver Todas las Fotos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Main Train Stations Section */}
      <section className="py-12 bg-white" id="estaciones">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-px bg-gray-300"></div>
                <span className="text-gray-600 font-medium italic">Estaciones Principales</span>
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Las estaciones de tren más importantes de Italia
              </h2>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Modernas, cómodas y perfectamente conectadas. Nuestras estaciones ofrecen todos los servicios necesarios para tu viaje.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Roma Termini */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/colosseum-interior.jpg"
                    alt="Roma Termini"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Roma Termini</h3>
                    <p className="text-sm opacity-90">Estación Central de Roma</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    La estación más grande de Italia y principal hub ferroviario del país. Conecta con todas las principales ciudades italianas y europeas.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">Servicios:</strong>
                      <ul className="text-gray-600 mt-1">
                        <li>• 32 andenes</li>
                        <li>• WiFi gratuito</li>
                        <li>• Restaurantes</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-gray-900">Conexiones:</strong>
                      <ul className="text-gray-600 mt-1">
                        <li>• Metro líneas A y B</li>
                        <li>• Autobuses urbanos</li>
                        <li>• Taxi y transporte</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milano Centrale */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/milan-cathedral.jpg"
                    alt="Milano Centrale"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Milano Centrale</h3>
                    <p className="text-sm opacity-90">Estación Central de Milán</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Una de las estaciones más hermosas de Europa con arquitectura Art Déco. Punto de partida hacia el norte de Italia y Europa.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">Servicios:</strong>
                      <ul className="text-gray-600 mt-1">
                        <li>• 24 andenes</li>
                        <li>• Centros comerciales</li>
                        <li>• Salas VIP</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-gray-900">Conexiones:</strong>
                      <ul className="text-gray-600 mt-1">
                        <li>• Metro líneas 2 y 3</li>
                        <li>• Aeropuerto Malpensa</li>
                        <li>• Transporte público</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Firenze Santa Maria Novella */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/florence-duomo.jpg"
                    alt="Firenze Santa Maria Novella"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Firenze S.M.N.</h3>
                    <p className="text-sm opacity-90">Estación Central de Florencia</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Puerta de entrada al corazón del Renacimiento italiano. Ubicada a pocos minutos del centro histórico de Florencia.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">Servicios:</strong>
                      <ul className="text-gray-600 mt-1">
                        <li>• 19 andenes</li>
                        <li>• Farmacia 24h</li>
                        <li>• Tiendas y cafés</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-gray-900">Conexiones:</strong>
                      <ul className="text-gray-600 mt-1">
                        <li>• Autobuses urbanos</li>
                        <li>• 10 min a pie al Duomo</li>
                        <li>• Taxi disponibles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Venezia Santa Lucia */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/venice-grand-canal.jpg"
                    alt="Venezia Santa Lucia"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Venezia S. Lucia</h3>
                    <p className="text-sm opacity-90">Estación Central de Venecia</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    La única estación ferroviaria en el centro histórico de Venecia, con acceso directo al Gran Canal y los principales sitios turísticos.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">Servicios:</strong>
                      <ul className="text-gray-600 mt-1">
                        <li>• 14 andenes</li>
                        <li>• Consigna equipaje</li>
                        <li>• Información turística</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-gray-900">Conexiones:</strong>
                      <ul className="text-gray-600 mt-1">
                        <li>• Vaporetti (barcos)</li>
                        <li>• Puente de Calatrava</li>
                        <li>• Plaza San Marco</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-full">
                Ver Todas las Estaciones
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 bg-gray-50" id="blog">
        <div className="container mx-auto px-6">
          <div className="relative max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8 flex items-center justify-center space-x-4">
              <div className="w-12 h-px bg-gray-300"></div>
              <span className="text-gray-600 font-medium italic">Blog</span>
              <div className="w-12 h-px bg-gray-300"></div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Consejos y guías para viajar en tren por Italia
              </h2>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Descubre los mejores consejos, rutas recomendadas y secretos para aprovechar al máximo tu viaje en tren por Italia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Blog Post 1 */}
              <article className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src="/images/florence-duomo.jpg"
                    alt="Guía completa para viajar en tren por Italia"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Guía de Viaje
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">15 Diciembre 2024</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Guía completa para viajar en tren por Italia: Todo lo que necesitas saber
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Descubre cómo planificar tu viaje perfecto en tren por Italia, desde la compra de billetes hasta los mejores asientos y servicios a bordo.
                  </p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Leer más →
                  </Button>
                </div>
              </article>

              {/* Blog Post 2 */}
              <article className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src="/images/venice-grand-canal.jpg"
                    alt="Las 10 rutas de tren más bonitas de Italia"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Rutas
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">12 Diciembre 2024</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Las 10 rutas de tren más bonitas de Italia que debes conocer
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Explora las rutas ferroviarias más espectaculares de Italia, desde los Alpes hasta la costa mediterránea, con paisajes inolvidables.
                  </p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Leer más →
                  </Button>
                </div>
              </article>

              {/* Blog Post 3 */}
              <article className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src="/images/colosseum-interior.jpg"
                    alt="Cómo ahorrar dinero en billetes de tren en Italia"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Consejos
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">10 Diciembre 2024</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Cómo ahorrar dinero en billetes de tren: Trucos y ofertas especiales
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Aprende los mejores trucos para conseguir billetes de tren baratos en Italia y aprovecha las ofertas especiales disponibles.
                  </p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Leer más →
                  </Button>
                </div>
              </article>
            </div>

            <div className="text-center">
              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-full">
                Ver Todos los Artículos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel With Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-px bg-gray-300"></div>
                <span className="text-gray-600 font-medium italic">Por qué elegir ItalyTren</span>
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                La mejor experiencia de viaje en tren por toda Italia te espera
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Reliability */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Confiabilidad</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trenes puntuales y seguros con tecnología de última generación para garantizar tu comodidad y tranquilidad en cada viaje.
                </p>
              </div>

              {/* Best Prices */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Mejores Precios</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ofertas exclusivas y precios competitivos para que puedas viajar más por menos, con opciones para todos los presupuestos.
                </p>
              </div>

              {/* Easy Booking */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Reserva Fácil</h3>
                <p className="text-gray-600 leading-relaxed">
                  Plataforma intuitiva y proceso de reserva simplificado. Compra tus billetes en minutos desde cualquier dispositivo.
                </p>
              </div>

              {/* Customer Support */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Soporte 24/7</h3>
                <p className="text-gray-600 leading-relaxed">
                  Atención al cliente en español disponible las 24 horas para ayudarte con cualquier consulta o cambio en tu viaje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-px bg-gray-300"></div>
                <span className="text-gray-600 font-medium italic">Opiniones</span>
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Lo que dicen nuestros viajeros sobre sus experiencias en tren</h2>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  "Mi viaje en tren por Italia con ItalyTren fue absolutamente perfecto. Desde Roma hasta Venecia, todo estuvo 
                  impecablemente organizado. Los trenes son cómodos, puntuales y el personal muy atento."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">CM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Carlos Mendez</div>
                    <div className="text-sm text-gray-500">Madrid, España</div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  "La atención al detalle y los precios fueron excepcionales. Pude conocer la Toscana de manera cómoda y rápida. 
                  Definitivamente la mejor forma de viajar por Italia."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">LP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Laura Pérez</div>
                    <div className="text-sm text-gray-500">Barcelona, España</div>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  "Desde la Costa Amalfitana hasta las galerías de arte de Florencia, cada momento fue perfectamente planificado. 
                  Los trenes de alta velocidad son una maravilla de la ingeniería."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">AR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ana Rodríguez</div>
                    <div className="text-sm text-gray-500">Valencia, España</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overall Rating */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-6 py-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-900 font-semibold">4.9/5</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">Basado en más de 500 opiniones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 pb-20 bg-white" id="faqs">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-px bg-gray-300"></div>
                <span className="text-gray-600 font-medium italic">Preguntas Frecuentes</span>
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Resuelve tus dudas sobre viajar en tren por Italia</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* FAQ Questions */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {[
                    "¿Cómo puedo comprar billetes de tren online?",
                    "¿Cuál es la mejor época para viajar en tren por Italia?",
                    "¿Necesito reserva previa para los trenes?",
                    "¿Puedo cambiar o cancelar mi billete?",
                    "¿Qué documentos necesito para viajar?",
                  ].map((question, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{question}</span>
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Still Have Questions Card */}
              <div className="lg:col-span-1">
                <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
                  {/* Decorative Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="grid grid-cols-8 gap-1 h-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="bg-white rounded-sm"></div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-4">¿Más Preguntas?</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Nuestros expertos en viajes están aquí para ayudarte a planificar tu aventura italiana perfecta.
                    </p>
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 w-full transition-all duration-300 hover:scale-105 shadow-lg">Contáctanos</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/naples-newsletter-bg.webp"
                alt="Arquitectura italiana con columnas clásicas y cúpula"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 text-white">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-12 h-px bg-white/40"></div>
                  <span className="text-white/80 font-medium italic">Newsletter</span>
                  <div className="w-12 h-px bg-white/40"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Suscríbete a nuestro Newsletter y recibe ofertas exclusivas y consejos de viaje</h2>
              </div>

              {/* Newsletter Form */}
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Ingresa tu email"
                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-3 rounded-full">Suscribirse</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Train className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold">ItalyTren</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tu compañero de confianza para viajar en tren por Italia. Descubre la comodidad, velocidad y belleza 
              de los ferrocarriles italianos con nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Rutas Populares</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Roma - Nápoles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Roma - Florencia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Milán - Venecia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ver todas las rutas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Tipos de Tren</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Frecciarossa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Italo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Frecciargento
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Trenes Regionales
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Guía de Viaje
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ayuda con Reservas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Aviso Legal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Términos y Condiciones
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@italytren.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ItalyTren. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
