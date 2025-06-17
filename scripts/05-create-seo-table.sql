-- Create SEO configuration table
CREATE TABLE IF NOT EXISTS seo_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  keywords TEXT,
  og_title TEXT,
  og_description TEXT,
  og_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE seo_config ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can read SEO config" ON seo_config
  FOR SELECT USING (true);

CREATE POLICY "Only authenticated users can modify SEO config" ON seo_config
  FOR ALL USING (auth.role() = 'authenticated');

-- Insert default SEO configuration
INSERT INTO seo_config (title, description, keywords, og_title, og_description, og_image) VALUES
(
  'ItalyTravel - Discover Italy''s Best Destinations',
  'Experience authentic Italian culture with our curated travel experiences. From Rome to Venice, discover Italy''s timeless beauty.',
  'Italy travel, Italian destinations, Rome tours, Venice trips, Florence experiences',
  'ItalyTravel - Authentic Italian Experiences',
  'Step into the heart of Italy with curated travel experiences that showcase its timeless temples, ancient cities, and breathtaking landscapes.',
  '/images/colosseum-bg.jpg'
);
