-- Create landing_config table to store all landing page configuration
CREATE TABLE IF NOT EXISTS landing_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_name TEXT NOT NULL UNIQUE,
  config_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE landing_config ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can read landing config" ON landing_config
  FOR SELECT USING (true);

CREATE POLICY "Only authenticated users can modify landing config" ON landing_config
  FOR ALL USING (auth.role() = 'authenticated');

-- Insert default configuration
INSERT INTO landing_config (section_name, config_data) VALUES
('hero', '{
  "title": "A Journey of Tradition, Innovation, and Natural Beauty",
  "subtitle": "Discover Italy",
  "description": "Step into the heart of Italy with curated travel experiences that showcase its timeless temples, ancient cities, and breathtaking landscapes.",
  "cta_text": "Find your best destination",
  "background_image": "/images/colosseum-bg.jpg"
}'),
('about', '{
  "title": "We specialize in creating tailor-made journeys across Italy",
  "subtitle": "blending must-see landmarks with hidden gems to give you a true sense of this beautiful country.",
  "description1": "Our team is made up of Italy enthusiasts, local experts, and travel specialists dedicated to crafting unique and meaningful experiences.",
  "description2": "From Rome''s vibrant energy to the quiet temples of Tuscany, and from the scenic landscapes of Amalfi to the magical shores of Cinque Terre, we strive to bring out the very best of Italy in every journey we plan.",
  "image": "/images/lake-como.jpg",
  "stats": [
    {"value": "95%", "description": "of travelers would recommend us to friends and family."},
    {"value": "100+", "description": "unique itineraries crafted each year to showcase Italy."},
    {"value": "4.9/5", "description": "average rating from hundreds of happy customers."}
  ]
}'),
('destinations', '{
  "title": "Journey Through Italy''s",
  "subtitle": "Best Destinations",
  "description": "Discover Italy''s metropolitan past city, just a short distance from Rome. Yokohama offers a unique blend of traditional and modern attractions.",
  "destinations": [
    {
      "name": "Rome",
      "description": "Dive into the vibrant heart of Italy! Rome dazzles with its endless energy, from the iconic Colosseum to the bustling markets of Trastevere and the tranquil gardens of Villa Borghese.",
      "image": "/images/colosseum-interior.jpg",
      "number": "1"
    },
    {
      "name": "Florence", 
      "description": "Discover Italy''s Renaissance jewel city, just a short distance from Rome. Florence offers a unique blend of traditional and modern attractions.",
      "image": "/images/florence-duomo.jpg",
      "number": "2"
    },
    {
      "name": "Venice",
      "description": "Escape to Italy''s floating paradise. Venice is renowned for its crystal-clear canals, white-sand beaches, and rich Venetian culture.",
      "image": "/images/venice-grand-canal.jpg", 
      "number": "3"
    }
  ]
}'),
('theme', '{
  "primary_color": "#ea580c",
  "secondary_color": "#0f172a",
  "accent_color": "#0891b2"
}');
