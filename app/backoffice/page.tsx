"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { FileText, Palette, Search, Save, LogOut, Home, Eye, EyeOff, Upload, X } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface LandingConfig {
  hero: {
    title: string
    subtitle: string
    description: string
    cta_text: string
    background_image: string
  }
  about: {
    title: string
    subtitle: string
    description1: string
    description2: string
    image: string
    stats: Array<{
      value: string
      description: string
    }>
  }
  destinations: {
    title: string
    subtitle: string
    description: string
    destinations: Array<{
      name: string
      description: string
      image: string
      number: string
    }>
  }
  brand: {
    site_name: string
    logo_url: string
    primary_color: string
    secondary_color: string
    accent_color: string
  }
}

interface SEOConfig {
  title: string
  description: string
  keywords: string
  og_title: string
  og_description: string
  og_image: string
}

export default function BackofficePage() {
  const [activeTab, setActiveTab] = useState("content")
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [config, setConfig] = useState<LandingConfig | null>(null)
  const [seoConfig, setSeoConfig] = useState<SEOConfig>({
    title: "ItalyTren - Billetes de Tren por Italia",
    description:
      "Compra billetes de tren por Italia de forma fácil y rápida. Rutas Roma-Nápoles, Roma-Florencia, Milán-Venecia y más con los mejores precios.",
    keywords: "billetes tren Italia, Roma Nápoles, Roma Florencia, Frecciarossa, Italo, trenes alta velocidad",
    og_title: "ItalyTren - Tu Compañero de Viaje en Tren por Italia",
    og_description:
      "Descubre la forma más cómoda y rápida de viajar por Italia con nuestros trenes de alta velocidad. Reserva tu billete ahora.",
    og_image: "/images/colosseum-bg.jpg",
  })
  const [previewMode, setPreviewMode] = useState(false)

  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    checkUser()
    loadConfig()
  }, [])

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      router.push("/login")
      return
    }
    setUser(user)
  }

  const loadConfig = async () => {
    try {
      const { data, error } = await supabase.from("landing_config").select("*")

      if (error) throw error

      const configData: any = {}
      data?.forEach((item) => {
        configData[item.section_name] = item.config_data
      })

      setConfig(configData)
    } catch (error) {
      console.error("Error loading config:", error)
    } finally {
      setLoading(false)
    }
  }

  const saveConfig = async () => {
    if (!config) return

    setSaving(true)
    try {
      // Save each section
      for (const [sectionName, sectionData] of Object.entries(config)) {
        const { error } = await supabase.from("landing_config").upsert({
          section_name: sectionName,
          config_data: sectionData,
          updated_at: new Date().toISOString(),
        })

        if (error) throw error
      }

      alert("Configuration saved successfully!")
    } catch (error) {
      console.error("Error saving config:", error)
      alert("Error saving configuration")
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const updateConfig = (section: string, field: string, value: any) => {
    if (!config) return

    setConfig((prev) => ({
      ...prev!,
      [section]: {
        ...prev![section as keyof LandingConfig],
        [field]: value,
      },
    }))
  }

  const updateNestedConfig = (section: string, field: string, index: number, subField: string, value: any) => {
    if (!config) return

    setConfig((prev) => {
      const newConfig = { ...prev! }
      const sectionData = newConfig[section as keyof LandingConfig] as any
      const fieldArray = [...sectionData[field]]
      fieldArray[index] = { ...fieldArray[index], [subField]: value }

      return {
        ...newConfig,
        [section]: {
          ...sectionData,
          [field]: fieldArray,
        },
      }
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Cargando panel de administración...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.84.21 4 0 5.16-1 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <span className="text-teal-600 font-semibold text-xl">ItalyTren</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 font-medium">Panel de Administración</span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {previewMode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{previewMode ? "Modo Edición" : "Vista Previa"}</span>
              </button>

              <a
                href="/"
                target="_blank"
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                rel="noreferrer"
              >
                <Home className="h-4 w-4" />
                <span>Ver Sitio</span>
              </a>


              <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-sm">Bienvenido, {user?.email}</span>
                <button onClick={handleLogout} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <nav className="flex space-x-8">
            {[
              { id: "content", label: "Contenido", icon: FileText },
              { id: "brand", label: "Marca", icon: Palette },
              { id: "seo", label: "SEO", icon: Search },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-teal-100 text-teal-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
            </nav>
            
            <button
              onClick={saveConfig}
              disabled={saving}
              className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>{saving ? "Guardando..." : "Guardar Cambios"}</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm">
          {activeTab === "content" && (
            <ContentEditor config={config} updateConfig={updateConfig} updateNestedConfig={updateNestedConfig} saveConfig={saveConfig} saving={saving} />
          )}
          {activeTab === "brand" && <BrandEditor config={config} updateConfig={updateConfig} saveConfig={saveConfig} saving={saving} />}
          {activeTab === "seo" && <SEOEditor seoConfig={seoConfig} setSeoConfig={setSeoConfig} saveConfig={saveConfig} saving={saving} />}
        </div>
      </div>
    </div>
  )
}

// Image Upload Component
function ImageUpload({ value, onChange, label }: { value: string, onChange: (url: string) => void, label: string }) {
  const [uploading, setUploading] = useState(false)
  const supabase = createClient()

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validar tamaño del archivo (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('El archivo es demasiado grande. Máximo 5MB.')
      return
    }

    // Validar tipo de archivo
    if (!file.type.startsWith('image/')) {
      alert('Por favor selecciona un archivo de imagen válido.')
      return
    }

    setUploading(true)
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `uploads/${fileName}`

      // Primero intentar crear el bucket si no existe
      const { error: bucketError } = await supabase.storage.createBucket('images', {
        public: true,
        allowedMimeTypes: ['image/*'],
        fileSizeLimit: 5242880 // 5MB
      })

      // Ignorar error si el bucket ya existe
      if (bucketError && !bucketError.message.includes('already exists')) {
        console.warn('Bucket creation error:', bucketError)
      }

      const { error } = await supabase.storage
        .from('images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (error) {
        throw error
      }

      const { data } = supabase.storage
        .from('images')
        .getPublicUrl(filePath)

      onChange(data.publicUrl)
    } catch (error: any) {
      console.error('Error uploading file:', error)
      if (error.message?.includes('Bucket not found')) {
        alert('Error: Bucket de almacenamiento no configurado. Por favor contacta al administrador.')
      } else if (error.message?.includes('not allowed')) {
        alert('Error: No tienes permisos para subir archivos.')
      } else {
        alert(`Error al subir la imagen: ${error.message || 'Error desconocido'}`)
      }
    } finally {
      setUploading(false)
    }
  }

  const removeImage = () => {
    onChange('')
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      {value ? (
        <div className="space-y-3">
          <div className="relative inline-block">
            <img 
              src={value} 
              alt="Preview" 
              className="w-32 h-32 object-cover rounded-lg border border-gray-300"
              onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.jpg' }}
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
          <div className="text-xs text-gray-500 break-all">{value}</div>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-400 transition-colors">
          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 mb-3">Sube una imagen</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
            id={`upload-${label.replace(/\s+/g, '-').toLowerCase()}`}
          />
          <label
            htmlFor={`upload-${label.replace(/\s+/g, '-').toLowerCase()}`}
            className={`inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
              uploading 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Upload className="h-4 w-4" />
            <span>{uploading ? 'Subiendo...' : 'Seleccionar Imagen'}</span>
          </label>
        </div>
      )}
    </div>
  )
}

// Content Editor Component
function ContentEditor({ config, updateConfig, updateNestedConfig, saveConfig, saving }: any) {
  if (!config) return <div className="p-8">Cargando...</div>

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestión de Contenido</h2>

      {/* Hero Section */}
      <div className="mb-8 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sección Principal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
            <input
              type="text"
              value={config.hero?.title || ""}
              onChange={(e) => updateConfig("hero", "title", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtítulo</label>
            <input
              type="text"
              value={config.hero?.subtitle || ""}
              onChange={(e) => updateConfig("hero", "subtitle", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
            <textarea
              value={config.hero?.description || ""}
              onChange={(e) => updateConfig("hero", "description", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Texto del Botón</label>
            <input
              type="text"
              value={config.hero?.cta_text || ""}
              onChange={(e) => updateConfig("hero", "cta_text", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <ImageUpload
              value={config.hero?.background_image || ""}
              onChange={(url) => updateConfig("hero", "background_image", url)}
              label="Imagen de Fondo"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-8 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sección Acerca de</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={config.about?.title || ""}
              onChange={(e) => updateConfig("about", "title", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
            <input
              type="text"
              value={config.about?.subtitle || ""}
              onChange={(e) => updateConfig("about", "subtitle", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Descripción 1</label>
            <textarea
              value={config.about?.description1 || ""}
              onChange={(e) => updateConfig("about", "description1", e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Descripción 2</label>
            <textarea
              value={config.about?.description2 || ""}
              onChange={(e) => updateConfig("about", "description2", e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-6">
          <h4 className="text-md font-medium text-gray-900 mb-3">Estadísticas</h4>
          {config.about?.stats?.map((stat: any, index: number) => (
            <div key={index} className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Valor</label>
                <input
                  type="text"
                  value={stat.value || ""}
                  onChange={(e) => updateNestedConfig("about", "stats", index, "value", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                <input
                  type="text"
                  value={stat.description || ""}
                  onChange={(e) => updateNestedConfig("about", "stats", index, "description", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destinations Section */}
      <div className="mb-8 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sección de Destinos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={config.destinations?.title || ""}
              onChange={(e) => updateConfig("destinations", "title", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
            <input
              type="text"
              value={config.destinations?.subtitle || ""}
              onChange={(e) => updateConfig("destinations", "subtitle", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>

        {/* Destinations */}
        <div className="mt-6">
          <h4 className="text-md font-medium text-gray-900 mb-3">Destinos</h4>
          {config.destinations?.destinations?.map((dest: any, index: number) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    value={dest.name || ""}
                    onChange={(e) => updateNestedConfig("destinations", "destinations", index, "name", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <ImageUpload
                    value={dest.image || ""}
                    onChange={(url) => updateNestedConfig("destinations", "destinations", index, "image", url)}
                    label="Imagen del Destino"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                  <textarea
                    value={dest.description || ""}
                    onChange={(e) =>
                      updateNestedConfig("destinations", "destinations", index, "description", e.target.value)
                    }
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Save Button */}
      <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={saveConfig}
          disabled={saving}
          className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors disabled:opacity-50 font-medium"
        >
          <Save className="h-4 w-4" />
          <span>{saving ? "Guardando..." : "Guardar Cambios"}</span>
        </button>
      </div>
    </div>
  )
}

// Brand Editor Component
function BrandEditor({ config, updateConfig, saveConfig, saving }: any) {
  if (!config) return <div className="p-8">Cargando...</div>

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Configuración de Marca</h2>

      {/* Brand Info */}
      <div className="mb-8 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Información de la Marca</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Sitio</label>
            <input
              type="text"
              value={config.brand?.site_name || "ItalyTren"}
              onChange={(e) => updateConfig("brand", "site_name", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Nombre de tu sitio web"
            />
          </div>
          <div>
            <ImageUpload
              value={config.brand?.logo_url || ""}
              onChange={(url) => updateConfig("brand", "logo_url", url)}
              label="Logo de la Marca"
            />
          </div>
        </div>
      </div>

      {/* Color Scheme */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Esquema de Colores</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-3">Color Primario</label>
            <div className="flex items-center space-x-4">
              <input
                type="color"
                value={config.brand?.primary_color || "#0da3ae"}
                onChange={(e) => updateConfig("brand", "primary_color", e.target.value)}
                className="w-16 h-16 rounded-lg border border-gray-300 cursor-pointer"
              />
              <div>
                <input
                  type="text"
                  value={config.brand?.primary_color || "#0da3ae"}
                  onChange={(e) => updateConfig("brand", "primary_color", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-mono"
                />
                <p className="text-sm text-gray-500 mt-1">Usado para botones, enlaces y acentos</p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-3">Color Secundario</label>
            <div className="flex items-center space-x-4">
              <input
                type="color"
                value={config.brand?.secondary_color || "#0f172a"}
                onChange={(e) => updateConfig("brand", "secondary_color", e.target.value)}
                className="w-16 h-16 rounded-lg border border-gray-300 cursor-pointer"
              />
              <div>
                <input
                  type="text"
                  value={config.brand?.secondary_color || "#0f172a"}
                  onChange={(e) => updateConfig("brand", "secondary_color", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-mono"
                />
                <p className="text-sm text-gray-500 mt-1">Usado para texto y elementos oscuros</p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-3">Color de Acento</label>
            <div className="flex items-center space-x-4">
              <input
                type="color"
                value={config.brand?.accent_color || "#0891b2"}
                onChange={(e) => updateConfig("brand", "accent_color", e.target.value)}
                className="w-16 h-16 rounded-lg border border-gray-300 cursor-pointer"
              />
              <div>
                <input
                  type="text"
                  value={config.brand?.accent_color || "#0891b2"}
                  onChange={(e) => updateConfig("brand", "accent_color", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-mono"
                />
                <p className="text-sm text-gray-500 mt-1">Usado para resaltar elementos especiales</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="mt-8 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Vista Previa</h3>
        <div className="mb-6">
          <h4 className="text-md font-medium text-gray-700 mb-3">Colores</h4>
          <div className="flex items-center space-x-4">
            <button
              className="px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: config.brand?.primary_color || "#0da3ae" }}
            >
              Botón Primario
            </button>
            <button
              className="px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: config.brand?.secondary_color || "#0f172a" }}
            >
              Botón Secundario
            </button>
            <button
              className="px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: config.brand?.accent_color || "#0891b2" }}
            >
              Botón de Acento
            </button>
          </div>
        </div>
        <div>
          <h4 className="text-md font-medium text-gray-700 mb-3">Marca</h4>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            {config.brand?.logo_url && (
              <img 
                src={config.brand.logo_url} 
                alt="Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            )}
            <span className="font-semibold text-lg" style={{ color: config.brand?.primary_color || "#0da3ae" }}>
              {config.brand?.site_name || "ItalyTren"}
            </span>
          </div>
        </div>
      </div>
      
      {/* Bottom Save Button */}
      <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={saveConfig}
          disabled={saving}
          className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors disabled:opacity-50 font-medium"
        >
          <Save className="h-4 w-4" />
          <span>{saving ? "Guardando..." : "Guardar Cambios"}</span>
        </button>
      </div>
    </div>
  )
}

// SEO Editor Component
function SEOEditor({ seoConfig, setSeoConfig, saveConfig, saving }: any) {
  const updateSEO = (field: string, value: string) => {
    setSeoConfig((prev: any) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Configuración SEO</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Título Meta</label>
          <input
            type="text"
            value={seoConfig.title}
            onChange={(e) => updateSEO("title", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Ingresa el título meta (recomendado: 50-60 caracteres)"
          />
          <p className="text-sm text-gray-500 mt-1">Caracteres: {seoConfig.title.length}/60</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Descripción Meta</label>
          <textarea
            value={seoConfig.description}
            onChange={(e) => updateSEO("description", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Ingresa la descripción meta (recomendado: 150-160 caracteres)"
          />
          <p className="text-sm text-gray-500 mt-1">Caracteres: {seoConfig.description.length}/160</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Palabras Clave</label>
          <input
            type="text"
            value={seoConfig.keywords}
            onChange={(e) => updateSEO("keywords", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Ingresa palabras clave separadas por comas"
          />
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Open Graph (Redes Sociales)</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Título OG</label>
              <input
                type="text"
                value={seoConfig.og_title}
                onChange={(e) => updateSEO("og_title", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Título para compartir en redes sociales"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descripción OG</label>
              <textarea
                value={seoConfig.og_description}
                onChange={(e) => updateSEO("og_description", e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Descripción para compartir en redes sociales"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">URL de Imagen OG</label>
              <input
                type="text"
                value={seoConfig.og_image}
                onChange={(e) => updateSEO("og_image", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="URL de imagen para redes sociales (recomendado: 1200x630px)"
              />
            </div>
          </div>
        </div>

        {/* SEO Preview */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Vista Previa de Resultados de Búsqueda</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="text-blue-600 text-lg font-medium hover:underline cursor-pointer">{seoConfig.title}</div>
            <div className="text-green-700 text-sm">https://italytren.com</div>
            <div className="text-gray-600 text-sm mt-1">{seoConfig.description}</div>
          </div>
        </div>
        
        {/* Bottom Save Button */}
        <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={saveConfig}
            disabled={saving}
            className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors disabled:opacity-50 font-medium"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Guardando..." : "Guardar Cambios"}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
