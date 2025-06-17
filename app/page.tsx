"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Train, MapPin, Clock, Users, Star } from "lucide-react"

export default function RailclickApp() {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [passengers, setPassengers] = useState(1)

  const popularRoutes = [
    { from: "Madrid", to: "Barcelona", duration: "2h 30m", price: "€45", rating: 4.8 },
    { from: "París", to: "Londres", duration: "2h 15m", price: "€89", rating: 4.9 },
    { from: "Roma", to: "Milán", duration: "3h 10m", price: "€35", rating: 4.7 },
    { from: "Berlín", to: "Múnich", duration: "4h 05m", price: "€52", rating: 4.6 },
  ]

  const handleSearch = () => {
    alert(`Buscando trenes de ${origin} a ${destination} para ${passengers} pasajero(s) el ${date}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Train className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Railclick</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Inicio
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Rutas
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Ofertas
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Ayuda
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Viaja por Europa en Tren</h2>
          <p className="text-xl text-gray-600 mb-8">
            Encuentra y reserva billetes de tren para toda Europa de forma rápida y sencilla
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Buscar Billetes</span>
            </CardTitle>
            <CardDescription>Encuentra los mejores precios para tu próximo viaje en tren</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="origin">Origen</Label>
                <Input
                  id="origin"
                  placeholder="Ciudad de origen"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destino</Label>
                <Input
                  id="destination"
                  placeholder="Ciudad de destino"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Fecha</Label>
                <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="passengers">Pasajeros</Label>
                <Input
                  id="passengers"
                  type="number"
                  min="1"
                  max="9"
                  value={passengers}
                  onChange={(e) => setPassengers(Number.parseInt(e.target.value))}
                />
              </div>
            </div>
            <Button onClick={handleSearch} className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
              <Train className="mr-2 h-4 w-4" />
              Buscar Trenes
            </Button>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="popular" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="popular">Rutas Populares</TabsTrigger>
            <TabsTrigger value="offers">Ofertas</TabsTrigger>
            <TabsTrigger value="info">Información</TabsTrigger>
          </TabsList>

          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularRoutes.map((route, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {route.from} → {route.to}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {route.duration}
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1 text-yellow-500" />
                            {route.rating}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold">
                        {route.price}
                      </Badge>
                    </div>
                    <Button className="w-full" variant="outline">
                      Ver Horarios
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="offers" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Ofertas Especiales</CardTitle>
                <CardDescription>Aprovecha nuestras mejores ofertas para viajar por Europa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800">Descuento del 25%</h4>
                    <p className="text-green-700">En todos los billetes para menores de 26 años</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800">Pase Eurail</h4>
                    <p className="text-blue-700">Viaja ilimitadamente por 15 países durante 1 mes</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800">Reserva Anticipada</h4>
                    <p className="text-purple-700">Hasta 40% de descuento reservando con 3 meses de antelación</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="info" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>¿Por qué elegir Railclick?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">🚄 Rápido y Cómodo</h4>
                    <p className="text-gray-600">Viaja a alta velocidad entre las principales ciudades europeas</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🌍 Ecológico</h4>
                    <p className="text-gray-600">El tren es el medio de transporte más sostenible</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">💰 Mejor Precio</h4>
                    <p className="text-gray-600">Comparamos precios de todas las compañías ferroviarias</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">📱 Fácil Reserva</h4>
                    <p className="text-gray-600">Reserva y gestiona tus billetes desde cualquier dispositivo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Train className="h-6 w-6" />
                <span className="text-xl font-bold">Railclick</span>
              </div>
              <p className="text-gray-400">Tu plataforma de confianza para viajar en tren por toda Europa</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Destinos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>España</li>
                <li>Francia</li>
                <li>Italia</li>
                <li>Alemania</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ayuda</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Centro de Ayuda</li>
                <li>Contacto</li>
                <li>Política de Cancelación</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nosotros</li>
                <li>Carreras</li>
                <li>Prensa</li>
                <li>Términos de Uso</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Railclick. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
