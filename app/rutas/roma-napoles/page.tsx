import { Button } from "@/components/ui/button"
import { Clock, Train, Users, Shield, Award, ChevronRight, ChevronDown, Star, ArrowRight, MapPin, Euro, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RomaNapolesRoute() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                <Train className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <span className="text-gray-900 font-semibold text-lg sm:text-xl">ItalyTren</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base">
                Inicio
              </Link>
              <a href="/#rutas" className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base">
                Rutas de Tren
              </a>
              <a href="/#tipos" className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base">
                Tipos de Tren
              </a>
              <a href="/#estaciones" className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base">
                Estaciones
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <Link href="/login">
                <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 text-sm">
                  Login
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-sm px-4 py-2">
                Buscar Trenes
                <ChevronRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/colosseum-interior.jpg" 
            alt="Interior del Coliseo Romano" 
            fill 
            className="object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-teal-50/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-6">
              <Link href="/" className="hover:text-blue-600">Inicio</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/#rutas" className="hover:text-blue-600">Rutas</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-blue-600 font-medium">Roma - Nápoles</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tren de <span className="text-blue-600">Roma a Nápoles</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Viaja cómodamente entre la capital italiana y la hermosa ciudad del sur en solo 1 hora y 10 minutos. 
              Descubre la forma más rápida y cómoda de conectar estas dos ciudades históricas.
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">1h 10min</div>
                <div className="text-sm text-gray-600">Duración mínima</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <Euro className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">Desde €29</div>
                <div className="text-sm text-gray-600">Precio por trayecto</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <Train className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">40+ diarios</div>
                <div className="text-sm text-gray-600">Trenes disponibles</div>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 text-lg">
              Comprar Billete Roma - Nápoles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Route Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-px bg-gray-300"></div>
                <span className="text-gray-600 font-medium italic">Información de la Ruta</span>
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todo lo que necesitas saber sobre el tren Roma - Nápoles
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Route Map Placeholder */}
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Mapa de la Ruta</h3>
                    <p className="text-gray-500">Visualiza el recorrido del tren de Roma a Nápoles</p>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between bg-white rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                          <span className="font-medium">Roma Termini</span>
                        </div>
                        <span className="text-sm text-gray-500">Origen</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-px h-8 bg-gray-300"></div>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                          <span className="font-medium">Napoli Centrale</span>
                        </div>
                        <span className="text-sm text-gray-500">Destino</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Route Details */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Detalles de la Ruta</h3>
                <div className="space-y-6">
                  {/* Distance */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Distancia</h4>
                      <p className="text-gray-600">225 km de recorrido directo por la costa occidental italiana</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Duración del Viaje</h4>
                      <p className="text-gray-600">Entre 1h 10min (Frecciarossa) y 2h 30min (trenes regionales)</p>
                    </div>
                  </div>

                  {/* Frequency */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Frecuencia</h4>
                      <p className="text-gray-600">Más de 40 trenes diarios, salidas cada 30 minutos en horas punta</p>
                    </div>
                  </div>

                  {/* Stations */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Train className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Estaciones Principales</h4>
                      <p className="text-gray-600">Roma Termini ↔ Napoli Centrale (algunas paradas en Roma Tiburtina)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Train Types & Prices */}
      <section className="relative py-12 bg-gray-50">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero-train.jpg" 
            alt="Tren de alta velocidad italiano" 
            fill 
            className="object-cover opacity-10" 
          />
          <div className="absolute inset-0 bg-gray-50/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-px bg-gray-300"></div>
                <span className="text-gray-600 font-medium italic">Trenes y Precios</span>
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Elige el tren perfecto para tu viaje
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frecciarossa */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Train className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Frecciarossa</h3>
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Hasta 300 km/h
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duración:</span>
                    <span className="font-semibold">1h 10min - 1h 20min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Frecuencia:</span>
                    <span className="font-semibold">Cada hora</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <h4 className="font-semibold mb-3">Precios por clase:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Standard:</span>
                      <span className="font-semibold">€29 - €45</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Premium:</span>
                      <span className="font-semibold">€39 - €65</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Business:</span>
                      <span className="font-semibold">€65 - €95</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Executive:</span>
                      <span className="font-semibold">€85 - €125</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Comprar Frecciarossa
                </Button>
              </div>

              {/* Italo */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Train className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Italo</h3>
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Hasta 300 km/h
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duración:</span>
                    <span className="font-semibold">1h 15min - 1h 25min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Frecuencia:</span>
                    <span className="font-semibold">Cada 2 horas</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <h4 className="font-semibold mb-3">Precios por clase:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Smart:</span>
                      <span className="font-semibold">€25 - €40</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Comfort:</span>
                      <span className="font-semibold">€35 - €60</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prima:</span>
                      <span className="font-semibold">€55 - €85</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Club Executive:</span>
                      <span className="font-semibold">€75 - €115</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Comprar Italo
                </Button>
              </div>

              {/* Intercity */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Train className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Intercity</h3>
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Hasta 200 km/h
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duración:</span>
                    <span className="font-semibold">2h 15min - 2h 30min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Frecuencia:</span>
                    <span className="font-semibold">Cada 3-4 horas</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <h4 className="font-semibold mb-3">Precios por clase:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Segunda Clase:</span>
                      <span className="font-semibold">€15 - €25</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Primera Clase:</span>
                      <span className="font-semibold">€25 - €40</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Comprar Intercity
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-px bg-gray-300"></div>
                <span className="text-gray-600 font-medium italic">FAQ Roma - Nápoles</span>
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas frecuentes sobre el tren Roma - Nápoles
              </h2>
            </div>

            <div className="space-y-4">
              {[
                "¿Cuánto tiempo dura el viaje en tren de Roma a Nápoles?",
                "¿Cuál es el precio del billete de tren Roma - Nápoles?",
                "¿Desde qué estación sale el tren en Roma?",
                "¿Necesito reserva previa para viajar?",
                "¿Qué servicios están disponibles a bordo?",
                "¿Puedo cambiar o cancelar mi billete?",
                "¿Hay descuentos para jóvenes o mayores?",
                "¿Qué documentos necesito para viajar?"
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
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-px bg-gray-300"></div>
                <span className="text-gray-600 font-medium italic">Opiniones</span>
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lo que dicen nuestros viajeros sobre la ruta Roma - Nápoles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Review 1 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  "El Frecciarossa de Roma a Nápoles es increíble. En poco más de una hora estás en Nápoles. 
                  Los trenes son puntuales, cómodos y el servicio excelente. Muy recomendable."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">MG</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Marco García</div>
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
                  "Perfecto para un viaje de un día. Salimos por la mañana de Roma, disfrutamos de Nápoles y 
                  regresamos por la noche. Los precios son muy competitivos comparado con otros medios."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">LM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Lucia Martínez</div>
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
                  "La estación Roma Termini está muy bien conectada y la llegada a Napoli Centrale es perfecta 
                  para acceder al centro. El tren pasa por paisajes hermosos."
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
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-gray-200">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-900 font-semibold">4.8/5</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">Basado en 250+ opiniones de la ruta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para viajar de Roma a Nápoles?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Compra tu billete ahora y disfruta del mejor servicio ferroviario de Italia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Comprar Billete Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Ver Horarios Completos
              </Button>
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
                    Intercity
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
                  <a href="#" className="hover:text-white transition-colors">
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