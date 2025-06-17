"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { FileText, Palette, Search, Save, LogOut, Home, Eye, EyeOff } from "lucide-react"
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
  theme: {
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
    title: "ItalyTravel - Discover Italy's Best Destinations",
    description:
      "Experience authentic Italian culture with our curated travel experiences. From Rome to Venice, discover Italy's timeless beauty.",
    keywords: "Italy travel, Italian destinations, Rome tours, Venice trips, Florence experiences",
    og_title: "ItalyTravel - Authentic Italian Experiences",
    og_description:
      "Step into the heart of Italy with curated travel experiences that showcase its timeless temples, ancient cities, and breathtaking landscapes.",
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
          <p className="mt-2 text-gray-600">Loading backoffice...</p>
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
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.84.21 4 0 5.16-1 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <span className="text-orange-600 font-semibold text-xl">ItalyTravel</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 font-medium">Backoffice</span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {previewMode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{previewMode ? "Edit Mode" : "Preview"}</span>
              </button>

              <a
                href="/"
                target="_blank"
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                rel="noreferrer"
              >
                <Home className="h-4 w-4" />
                <span>View Site</span>
              </a>

              <button
                onClick={saveConfig}
                disabled={saving}
                className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                <span>{saving ? "Saving..." : "Save Changes"}</span>
              </button>

              <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-sm">Welcome, {user?.email}</span>
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
          <nav className="flex space-x-8">
            {[
              { id: "content", label: "Content", icon: FileText },
              { id: "colors", label: "Colors", icon: Palette },
              { id: "seo", label: "SEO", icon: Search },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-orange-100 text-orange-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm">
          {activeTab === "content" && (
            <ContentEditor config={config} updateConfig={updateConfig} updateNestedConfig={updateNestedConfig} />
          )}
          {activeTab === "colors" && <ColorEditor config={config} updateConfig={updateConfig} />}
          {activeTab === "seo" && <SEOEditor seoConfig={seoConfig} setSeoConfig={setSeoConfig} />}
        </div>
      </div>
    </div>
  )
}

// Content Editor Component
function ContentEditor({ config, updateConfig, updateNestedConfig }: any) {
  if (!config) return <div className="p-8">Loading...</div>

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Management</h2>

      {/* Hero Section */}
      <div className="mb-8 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Hero Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={config.hero?.title || ""}
              onChange={(e) => updateConfig("hero", "title", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
            <input
              type="text"
              value={config.hero?.subtitle || ""}
              onChange={(e) => updateConfig("hero", "subtitle", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={config.hero?.description || ""}
              onChange={(e) => updateConfig("hero", "description", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CTA Button Text</label>
            <input
              type="text"
              value={config.hero?.cta_text || ""}
              onChange={(e) => updateConfig("hero", "cta_text", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Background Image URL</label>
            <input
              type="text"
              value={config.hero?.background_image || ""}
              onChange={(e) => updateConfig("hero", "background_image", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-8 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">About Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={config.about?.title || ""}
              onChange={(e) => updateConfig("about", "title", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
            <input
              type="text"
              value={config.about?.subtitle || ""}
              onChange={(e) => updateConfig("about", "subtitle", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description 1</label>
            <textarea
              value={config.about?.description1 || ""}
              onChange={(e) => updateConfig("about", "description1", e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description 2</label>
            <textarea
              value={config.about?.description2 || ""}
              onChange={(e) => updateConfig("about", "description2", e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-6">
          <h4 className="text-md font-medium text-gray-900 mb-3">Statistics</h4>
          {config.about?.stats?.map((stat: any, index: number) => (
            <div key={index} className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Value</label>
                <input
                  type="text"
                  value={stat.value || ""}
                  onChange={(e) => updateNestedConfig("about", "stats", index, "value", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input
                  type="text"
                  value={stat.description || ""}
                  onChange={(e) => updateNestedConfig("about", "stats", index, "description", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destinations Section */}
      <div className="mb-8 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Destinations Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={config.destinations?.title || ""}
              onChange={(e) => updateConfig("destinations", "title", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
            <input
              type="text"
              value={config.destinations?.subtitle || ""}
              onChange={(e) => updateConfig("destinations", "subtitle", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Destinations */}
        <div className="mt-6">
          <h4 className="text-md font-medium text-gray-900 mb-3">Destinations</h4>
          {config.destinations?.destinations?.map((dest: any, index: number) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={dest.name || ""}
                    onChange={(e) => updateNestedConfig("destinations", "destinations", index, "name", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input
                    type="text"
                    value={dest.image || ""}
                    onChange={(e) => updateNestedConfig("destinations", "destinations", index, "image", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={dest.description || ""}
                    onChange={(e) =>
                      updateNestedConfig("destinations", "destinations", index, "description", e.target.value)
                    }
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Color Editor Component
function ColorEditor({ config, updateConfig }: any) {
  if (!config) return <div className="p-8">Loading...</div>

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Color Scheme</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-gray-200 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-3">Primary Color</label>
          <div className="flex items-center space-x-4">
            <input
              type="color"
              value={config.theme?.primary_color || "#ea580c"}
              onChange={(e) => updateConfig("theme", "primary_color", e.target.value)}
              className="w-16 h-16 rounded-lg border border-gray-300 cursor-pointer"
            />
            <div>
              <input
                type="text"
                value={config.theme?.primary_color || "#ea580c"}
                onChange={(e) => updateConfig("theme", "primary_color", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-mono"
              />
              <p className="text-sm text-gray-500 mt-1">Used for buttons, links, and accents</p>
            </div>
          </div>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-3">Secondary Color</label>
          <div className="flex items-center space-x-4">
            <input
              type="color"
              value={config.theme?.secondary_color || "#0f172a"}
              onChange={(e) => updateConfig("theme", "secondary_color", e.target.value)}
              className="w-16 h-16 rounded-lg border border-gray-300 cursor-pointer"
            />
            <div>
              <input
                type="text"
                value={config.theme?.secondary_color || "#0f172a"}
                onChange={(e) => updateConfig("theme", "secondary_color", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-mono"
              />
              <p className="text-sm text-gray-500 mt-1">Used for text and dark elements</p>
            </div>
          </div>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-3">Accent Color</label>
          <div className="flex items-center space-x-4">
            <input
              type="color"
              value={config.theme?.accent_color || "#0891b2"}
              onChange={(e) => updateConfig("theme", "accent_color", e.target.value)}
              className="w-16 h-16 rounded-lg border border-gray-300 cursor-pointer"
            />
            <div>
              <input
                type="text"
                value={config.theme?.accent_color || "#0891b2"}
                onChange={(e) => updateConfig("theme", "accent_color", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-mono"
              />
              <p className="text-sm text-gray-500 mt-1">Used for highlights and special elements</p>
            </div>
          </div>
        </div>
      </div>

      {/* Color Preview */}
      <div className="mt-8 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
        <div className="flex items-center space-x-4">
          <button
            className="px-6 py-3 rounded-lg text-white font-medium"
            style={{ backgroundColor: config.theme?.primary_color || "#ea580c" }}
          >
            Primary Button
          </button>
          <button
            className="px-6 py-3 rounded-lg text-white font-medium"
            style={{ backgroundColor: config.theme?.secondary_color || "#0f172a" }}
          >
            Secondary Button
          </button>
          <button
            className="px-6 py-3 rounded-lg text-white font-medium"
            style={{ backgroundColor: config.theme?.accent_color || "#0891b2" }}
          >
            Accent Button
          </button>
        </div>
      </div>
    </div>
  )
}

// SEO Editor Component
function SEOEditor({ seoConfig, setSeoConfig }: any) {
  const updateSEO = (field: string, value: string) => {
    setSeoConfig((prev: any) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">SEO Settings</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
          <input
            type="text"
            value={seoConfig.title}
            onChange={(e) => updateSEO("title", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter meta title (recommended: 50-60 characters)"
          />
          <p className="text-sm text-gray-500 mt-1">Characters: {seoConfig.title.length}/60</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
          <textarea
            value={seoConfig.description}
            onChange={(e) => updateSEO("description", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter meta description (recommended: 150-160 characters)"
          />
          <p className="text-sm text-gray-500 mt-1">Characters: {seoConfig.description.length}/160</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
          <input
            type="text"
            value={seoConfig.keywords}
            onChange={(e) => updateSEO("keywords", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter keywords separated by commas"
          />
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Open Graph (Social Media)</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">OG Title</label>
              <input
                type="text"
                value={seoConfig.og_title}
                onChange={(e) => updateSEO("og_title", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Title for social media sharing"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">OG Description</label>
              <textarea
                value={seoConfig.og_description}
                onChange={(e) => updateSEO("og_description", e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Description for social media sharing"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">OG Image URL</label>
              <input
                type="text"
                value={seoConfig.og_image}
                onChange={(e) => updateSEO("og_image", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Image URL for social media sharing (1200x630px recommended)"
              />
            </div>
          </div>
        </div>

        {/* SEO Preview */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Result Preview</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="text-blue-600 text-lg font-medium hover:underline cursor-pointer">{seoConfig.title}</div>
            <div className="text-green-700 text-sm">https://italytravel.com</div>
            <div className="text-gray-600 text-sm mt-1">{seoConfig.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
