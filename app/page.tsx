import { Button } from "@/components/ui/button"
import { Users, Shield, Award, ChevronRight, ChevronDown, Phone, Mail, Globe, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function JapanTravelLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Rounded Container */}
        <div className="relative w-[90vw] h-[90vh] mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image src="/images/colosseum-bg.jpg" alt="Roman Colosseum" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 min-h-[90vh] flex flex-col">
            {/* Header inside rounded container */}
            <header className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.84.21 4 0 5.16-1 9-5.45 9-11V7l-10-5z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-xl">ItalyTravel</span>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                  <a href="#home" className="text-white/80 hover:text-white transition-colors">
                    Home
                  </a>
                  <a href="#about" className="text-white/80 hover:text-white transition-colors">
                    About us
                  </a>
                  <a href="#gallery" className="text-white/80 hover:text-white transition-colors">
                    Gallery
                  </a>
                  <a href="#packages" className="text-white/80 hover:text-white transition-colors">
                    Travel Package
                  </a>
                  <a href="#offers" className="text-white/80 hover:text-white transition-colors">
                    Offers
                  </a>
                </nav>

                <div className="flex items-center space-x-4">
                  <Link href="/login">
                    <Button variant="ghost" className="text-white hover:bg-white/10">
                      Login
                    </Button>
                  </Link>
                  <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white">
                    Trip Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-8 pb-20">
              <div className="mb-6">
                <span className="text-white/90 text-lg font-medium italic">Discover Italy</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight max-w-5xl">
                A Journey of Tradition, Innovation, and Natural Beauty
              </h1>

              <Button
                size="lg"
                className="bg-white/90 hover:bg-white text-gray-900 px-8 py-4 text-lg font-medium rounded-full"
              >
                Find your best destination
              </Button>
            </div>

            {/* Bottom Section */}
            <div className="flex items-end justify-between p-8">
              {/* World Travel Awards Badge */}
              <div className="flex items-center space-x-2 text-white">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">WORLD</div>
                  <div className="font-semibold">TRAVEL</div>
                  <div className="font-semibold">AWARDS</div>
                </div>
              </div>

              {/* Center Text */}
              <div className="text-center text-white/90 max-w-2xl">
                <p className="text-sm md:text-base">
                  Step into the heart of Italy with curated travel experiences that showcase its timeless temples,
                  ancient cities, and breathtaking landscapes.
                </p>
              </div>

              {/* Tripadvisor Logo */}
              <div className="flex items-center space-x-2 text-white">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">T</span>
                </div>
                <span className="font-semibold">Tripadvisor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          {/* Container */}
          <div className="relative max-w-6xl mx-auto bg-white p-8 md:p-12">
            {/* About us label */}
            <div className="absolute top-8 right-8 flex items-center space-x-4">
              <div className="w-12 h-px bg-gray-300"></div>
              <span className="text-gray-600 font-medium italic">About us</span>
              <div className="w-12 h-px bg-gray-300"></div>
            </div>

            {/* Main Content */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-4xl">
                We specialize in creating tailor-made journeys across Italy
              </h2>
              <p className="text-lg text-gray-500 max-w-3xl">
                blending must-see landmarks with hidden gems to give you a true sense of this beautiful country.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <Image
                src="/images/lake-como.jpg"
                alt="Charming Italian lakeside town with traditional architecture"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Read More Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full font-medium">
                  Read More
                </Button>
              </div>
            </div>

            {/* Description Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our team is made up of Italy enthusiasts, local experts, and travel specialists dedicated to crafting
                  unique and meaningful experiences.
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  From Rome's vibrant energy to the quiet temples of Tuscany, and from the scenic landscapes of Amalfi
                  to the magical shores of Cinque Terre, we strive to bring out the very best of Italy in every journey
                  we plan.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">95%</div>
                <p className="text-gray-600 text-sm">of travelers would recommend us to friends and family.</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">100+</div>
                <p className="text-gray-600 text-sm">unique itineraries crafted each year to showcase Italy.</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">4.9/5</div>
                <p className="text-gray-600 text-sm">average rating from hundreds of happy customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          {/* Container */}
          <div className="relative max-w-6xl mx-auto bg-white p-8 md:p-12">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <div className="text-center mb-6 flex items-center justify-center space-x-4">
                  <div className="w-12 h-px bg-gray-300"></div>
                  <span className="text-gray-600 font-medium italic">Popular Destination</span>
                  <div className="w-12 h-px bg-gray-300"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Journey Through Italy's</h2>
                <h3 className="text-3xl md:text-4xl text-gray-400 mb-6">Best Destinations</h3>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-sm text-gray-600 mb-4 max-w-xs text-right">
                  Discover Italy's metropolitan past city, just a short distance from Rome. Yokohama offers a unique
                  blend of traditional and modern attractions.
                </p>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full">Read More</Button>
              </div>
            </div>

            {/* Destination Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Rome */}
              <div className="group">
                <div className="relative rounded-2xl overflow-hidden mb-4 h-64">
                  <Image
                    src="/images/colosseum-interior.jpg"
                    alt="Interior of the Roman Colosseum"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-gray-900 font-semibold text-sm">1</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Rome</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Dive into the vibrant heart of Italy! Rome dazzles with its endless energy, from the iconic Colosseum
                  to the bustling markets of Trastevere and the tranquil gardens of Villa Borghese.
                </p>
              </div>

              {/* Florence */}
              <div className="group">
                <div className="relative rounded-2xl overflow-hidden mb-4 h-64">
                  <Image
                    src="/images/florence-duomo.jpg"
                    alt="Florence Cathedral and cityscape"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-gray-900 font-semibold text-sm">2</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Florence</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Discover Italy's Renaissance jewel city, just a short distance from Rome. Florence offers a unique
                  blend of traditional and modern attractions.
                </p>
              </div>

              {/* Venice */}
              <div className="group">
                <div className="relative rounded-2xl overflow-hidden mb-4 h-64">
                  <Image
                    src="/images/venice-grand-canal.jpg"
                    alt="Venice Grand Canal with gondola"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-gray-900 font-semibold text-sm">3</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Venice</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Escape to Italy's floating paradise. Venice is renowned for its crystal-clear canals, white-sand
                  beaches, and rich Venetian culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informational Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-px bg-gray-300"></div>
                  <span className="text-gray-600 font-medium italic">Experience Italy</span>
                  <div className="w-12 h-px bg-gray-300"></div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Immerse Yourself in Italy's Rich</h2>
                <h3 className="text-3xl md:text-4xl text-gray-400 mb-6">Cultural Heritage</h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  From the ancient ruins of Rome to the Renaissance masterpieces of Florence, Italy offers an
                  unparalleled journey through history, art, and culture. Our expertly crafted tours ensure you
                  experience the very best of what this magnificent country has to offer.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you're exploring the romantic canals of Venice, savoring authentic cuisine in Tuscany, or
                  walking through the preserved streets of Pompeii, every moment becomes a treasured memory that will
                  last a lifetime.
                </p>

                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-medium">
                  Start Your Journey
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/florence-duomo.jpg"
                    alt="Florence Cathedral and Renaissance architecture"
                    width={600}
                    height={500}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">2000+</div>
                      <div className="text-sm text-gray-600">Happy Travelers</div>
                    </div>
                    <div className="w-px h-12 bg-gray-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
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
              <span className="text-gray-600 font-medium italic">Gallery</span>
              <div className="w-12 h-px bg-gray-300"></div>
            </div>

            {/* Main Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Discover Italy's Landscapes, <span className="text-gray-400">Culture,</span>
              </h2>
              <h3 className="text-3xl md:text-4xl text-gray-400">and Moments in Photos</h3>
            </div>

            {/* Gallery Grid - Masonry Style */}
            <div className="relative mb-8">
              {/* Top Row */}
              <div className="grid grid-cols-4 gap-4 mb-4">
                {/* Image 1 - Tall */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-80">
                  <Image
                    src="/images/venice-canal.jpg"
                    alt="Venice canal with colorful buildings"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 2 - Full Height */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-80">
                  <Image
                    src="/images/milan-cathedral.jpg"
                    alt="Milan Cathedral Gothic architecture"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 3 - Full Height */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-80">
                  <Image
                    src="/images/david-florence.jpg"
                    alt="Michelangelo's David statue in Florence"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 4 - Tall */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-80">
                  <Image
                    src="/images/positano-amalfi.jpg"
                    alt="Positano on the Amalfi Coast"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-3 gap-4">
                {/* Image 5 - Wide */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-64">
                  <Image
                    src="/images/pompeii-vesuvius.jpg"
                    alt="Pompeii ruins with Mount Vesuvius"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 6 - Wide */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-64">
                  <Image
                    src="/images/cinque-terre.jpg"
                    alt="Cinque Terre colorful cliffside village"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 7 - Wide */}
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-64">
                  <Image
                    src="/images/lake-como.jpg"
                    alt="Lake Como charming street scene"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Explore Gallery Button - Centered in section */}
              <div className="absolute inset-0 flex items-center justify-center z-10 mt-[60px]">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full text-lg font-medium shadow-lg">
                  Explore Gallery
                </Button>
              </div>
            </div>

            {/* Description Text */}
            <div className="text-center">
              <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Step into Italy through our curated gallery, capturing the beauty, culture, and unforgettable moments
                from our journeys across the country. From iconic landmarks to hidden gems, experience Italy in every
                image.
              </p>
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
                <span className="text-gray-600 font-medium italic">Why travel with us</span>
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choosing the right travel partner can make
              </h2>
              <h3 className="text-3xl md:text-4xl text-gray-400">all the difference in your journey.</h3>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Authenticity */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Authenticity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience genuine Italian culture through local connections and traditional practices that showcase
                  the real heart of Italy.
                </p>
              </div>

              {/* Expert Knowledge */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Expert Knowledge</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our local experts provide insider insights and hidden gems you won't find elsewhere, ensuring
                  unforgettable experiences.
                </p>
              </div>

              {/* Personalized Service */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Personalized Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tailored itineraries designed around your interests and travel preferences for a truly personalized
                  journey.
                </p>
              </div>

              {/* Sustainable Tourism */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Sustainable Tourism</h3>
                <p className="text-gray-600 leading-relaxed">
                  Responsible travel practices that support local communities and preserve Italy's cultural heritage for
                  future generations.
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
                <span className="text-gray-600 font-medium italic">Reviews</span>
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">What Our Travelers Say</h2>
              <h3 className="text-3xl md:text-4xl text-gray-400">About Their Italian Adventures</h3>
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
                  "Our trip to Italy with ItalyTravel was absolutely magical! From the moment we arrived in Rome to our
                  final day in Venice, every detail was perfectly planned. The local guides were knowledgeable and
                  passionate."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                    <div className="text-sm text-gray-500">New York, USA</div>
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
                  "The attention to detail and personalized service exceeded our expectations. We discovered hidden gems
                  in Tuscany that we never would have found on our own. Truly an unforgettable experience!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">MJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Michael Johnson</div>
                    <div className="text-sm text-gray-500">London, UK</div>
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
                  "From the Amalfi Coast to the art galleries of Florence, every moment was perfectly curated. The
                  team's expertise in Italian culture and history made our journey educational and inspiring."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">ER</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Emma Rodriguez</div>
                    <div className="text-sm text-gray-500">Barcelona, Spain</div>
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
                <span className="text-gray-600">Based on 500+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-px bg-gray-300"></div>
                <span className="text-gray-600 font-medium italic">FAQs</span>
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Explore our FAQ section for answers</h2>
              <h3 className="text-3xl md:text-4xl text-gray-400">on trip planning.</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* FAQ Questions */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {[
                    "Do you offer customizable travel itineraries?",
                    "What is the best time to visit Italy?",
                    "Are your tours guided?",
                    "What's included in the trip cost?",
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
                    <h4 className="text-xl font-bold mb-4">Still Have Questions?</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Our travel experts are here to help you plan the perfect Italian adventure.
                    </p>
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 w-full">Contact Us</Button>
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
                alt="Naples architecture with classical columns and dome"
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Subscribe to our Newsletter</h2>
                <h3 className="text-3xl md:text-4xl text-white/80">Get the latest travel tips and exclusive offers</h3>
              </div>

              {/* Newsletter Form */}
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full">Subscribe</Button>
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
            <h2 className="text-2xl font-bold mb-4">Explore Japan with Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the perfect blend of ancient traditions and modern innovation. Let us guide you through an
              unforgettable Japanese adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tokyo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kyoto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Osaka
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hiroshima
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Experiences</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cultural Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Food Experiences
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Nature Adventures
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Traditional Stays
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Travel Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Booking Help
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@japantour.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+81 3-1234-5678</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JapanTour. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
