'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface Supplier {
  name: string;
  category: string;
  description: string;
  website: string;
  specialties: string[];
  priceRange: 'Premium' | 'Luxury' | 'Ultra-Luxury';
  standoutFeatures: string[];
}

// Styled Components
const Container = styled.div`
  min-h-screen bg-black text-white font-satoshi;
`;

const Header = styled.header`
  text-center space-y-8 pt-24 pb-16;
`;

const CategorySection = styled.section`
  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16;
`;

const SupplierGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SupplierCard = styled(motion.div)`
  background: #1c1f26;
  padding: 2rem;
  border: 2px solid #EAB308;
  box-shadow: 5px 5px 0px 0px rgba(234, 179, 8, 1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 8px 8px 0px 0px rgba(234, 179, 8, 1);
  }
`;

const suppliers: Record<string, Supplier[]> = {
  architecture: [
    {
      name: 'Sky-Frame',
      category: 'Frameless Glass Systems',
      description: 'Swiss manufacturer of frameless sliding glass walls and doors, known for their minimalist design and exceptional quality.',
      website: 'https://www.sky-frame.com',
      specialties: ['Frameless sliding doors', 'Glass walls', 'Minimalist design'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Patented sliding system with invisible tracks',
        'Customizable glass thickness up to 21mm',
        'Seamless integration with smart home systems',
        'Swiss precision engineering and craftsmanship'
      ]
    },
    {
      name: 'Vitrocsa',
      category: 'Window Systems',
      description: 'French manufacturer of ultra-minimalist window systems, specializing in frameless sliding windows and doors.',
      website: 'https://www.vitrocsa.com',
      specialties: ['Frameless windows', 'Sliding systems', 'Architectural glazing'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'World\'s thinnest sliding system at 8mm',
        'Custom color matching for hardware',
        'Advanced thermal and acoustic performance',
        'Heritage of French architectural innovation'
      ]
    },
    {
      name: 'Petersen Tegl',
      category: 'Brick Manufacturing',
      description: 'Danish manufacturer of handmade bricks, known for their exceptional quality and unique colors.',
      website: 'https://www.petersen-tegl.dk',
      specialties: ['Handmade bricks', 'Custom colors', 'Traditional craftsmanship'],
      priceRange: 'Luxury',
      standoutFeatures: [
        'Over 100 years of brick-making heritage',
        'Unique color palette with 50+ shades',
        'Handcrafted using traditional methods',
        'Sustainable production process'
      ]
    }
  ],
  interior: [
    {
      name: 'Minotti',
      category: 'Furniture',
      description: 'Italian luxury furniture manufacturer known for their sophisticated designs and exceptional craftsmanship.',
      website: 'https://www.minotti.com',
      specialties: ['Sofas', 'Armchairs', 'Tables', 'Outdoor furniture'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Collaboration with world-renowned designers',
        'Customizable configurations and materials',
        'Handcrafted in Italy since 1948',
        'Innovative modular systems'
      ]
    },
    {
      name: 'B&B Italia',
      category: 'Furniture',
      description: 'Iconic Italian furniture brand combining innovative design with cutting-edge technology.',
      website: 'https://www.bebitalia.com',
      specialties: ['Modern furniture', 'Design classics', 'Innovative materials'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Pioneer in polyurethane technology',
        'Multiple Compasso d\'Oro awards',
        'Research-driven design approach',
        'Sustainable manufacturing processes'
      ]
    },
    {
      name: 'Poliform',
      category: 'Furniture & Storage',
      description: 'Italian manufacturer of high-end furniture and storage solutions, known for their modular systems.',
      website: 'https://www.poliform.it',
      specialties: ['Kitchens', 'Wardrobes', 'Living room furniture'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Integrated home systems',
        'Customizable storage solutions',
        'Advanced material technology',
        'Seamless design language across collections'
      ]
    }
  ],
  kitchen: [
    {
      name: 'Bulthaup',
      category: 'Kitchen Systems',
      description: 'German manufacturer of premium kitchen systems, known for their minimalist design and innovative solutions.',
      website: 'https://www.bulthaup.com',
      specialties: ['Modular kitchens', 'Storage solutions', 'Minimalist design'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Revolutionary b3 kitchen system',
        'Patented storage solutions',
        'Customizable work heights',
        'Architectural approach to kitchen design'
      ]
    },
    {
      name: 'Gaggenau',
      category: 'Kitchen Appliances',
      description: 'German manufacturer of high-end kitchen appliances, known for their professional-grade performance.',
      website: 'https://www.gaggenau.com',
      specialties: ['Cooking appliances', 'Refrigeration', 'Dishwashers'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Professional-grade performance',
        'Innovative steam technology',
        'Architectural integration',
        'Smart home connectivity'
      ]
    },
    {
      name: 'La Cornue',
      category: 'Kitchen Appliances',
      description: 'French manufacturer of luxury ranges and kitchen appliances, known for their handcrafted quality.',
      website: 'https://www.lacornue.com',
      specialties: ['Custom ranges', 'Ovens', 'Kitchen islands'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Handcrafted in France since 1908',
        'Custom color options',
        'Dual-fuel technology',
        'Artisanal craftsmanship'
      ]
    }
  ],
  bathroom: [
    {
      name: 'Dornbracht',
      category: 'Bathroom Fixtures',
      description: 'German manufacturer of premium bathroom fixtures, known for their innovative designs and exceptional quality.',
      website: 'https://www.dornbracht.com',
      specialties: ['Faucets', 'Shower systems', 'Bathroom accessories'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Architectural approach to bathroom design',
        'Innovative water technology',
        'Customizable finishes',
        'Smart home integration'
      ]
    },
    {
      name: 'Vola',
      category: 'Bathroom Fixtures',
      description: 'Danish manufacturer of iconic bathroom fixtures, known for their timeless design and quality.',
      website: 'https://www.vola.com',
      specialties: ['Faucets', 'Shower systems', 'Bathroom accessories'],
      priceRange: 'Luxury',
      standoutFeatures: [
        'Iconic design since 1968',
        'Sustainable manufacturing',
        'Modular system approach',
        'Scandinavian design heritage'
      ]
    },
    {
      name: 'Agape',
      category: 'Bathroom Fixtures',
      description: 'Italian manufacturer of luxury bathroom fixtures, known for their sculptural designs.',
      website: 'https://www.agapedesign.it',
      specialties: ['Bathtubs', 'Basins', 'Bathroom furniture'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Sculptural approach to bathroom design',
        'Innovative material combinations',
        'Customizable configurations',
        'Artistic collaboration program'
      ]
    }
  ],
  smartHome: [
    {
      name: 'Lutron',
      category: 'Smart Lighting & Shading',
      description: 'American manufacturer of premium lighting control and motorized shading systems.',
      website: 'https://www.lutron.com',
      specialties: ['Lighting control', 'Motorized shades', 'Smart home integration'],
      priceRange: 'Luxury',
      standoutFeatures: [
        'Pioneer in lighting control since 1961',
        'Advanced energy management',
        'Seamless integration capabilities',
        'Customizable control solutions'
      ]
    },
    {
      name: 'Savant',
      category: 'Smart Home Systems',
      description: 'American manufacturer of premium smart home systems, known for their intuitive control and reliability.',
      website: 'https://www.savant.com',
      specialties: ['Home automation', 'Audio/Video control', 'Climate control'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'TrueCommand™ operating system',
        'AI-powered automation',
        'Professional-grade reliability',
        'Customizable user interfaces'
      ]
    },
    {
      name: 'Crestron',
      category: 'Smart Home Systems',
      description: 'American manufacturer of high-end automation systems, known for their comprehensive solutions.',
      website: 'https://www.crestron.com',
      specialties: ['Home automation', 'Commercial automation', 'Custom solutions'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'End-to-end automation solutions',
        'Advanced security features',
        'Scalable architecture',
        'Professional-grade reliability'
      ]
    }
  ],
  wellness: [
    {
      name: 'Klafs',
      category: 'Wellness Systems',
      description: 'German manufacturer of premium saunas and wellness systems, known for their innovative designs.',
      website: 'https://www.klafs.com',
      specialties: ['Saunas', 'Steam rooms', 'Wellness systems'],
      priceRange: 'Luxury',
      standoutFeatures: [
        'Innovative infrared technology',
        'Customizable wellness programs',
        'Smart control systems',
        'Architectural integration'
      ]
    },
    {
      name: 'Effegibi',
      category: 'Wellness Systems',
      description: 'Italian manufacturer of luxury hammams and wellness systems, known for their traditional designs.',
      website: 'https://www.effegibi.com',
      specialties: ['Hammams', 'Steam rooms', 'Wellness systems'],
      priceRange: 'Luxury',
      standoutFeatures: [
        'Traditional hammam expertise',
        'Customizable wellness spaces',
        'Advanced steam technology',
        'Luxury spa integration'
      ]
    }
  ],
  audio: [
    {
      name: 'Bang & Olufsen',
      category: 'Audio Systems',
      description: 'Danish manufacturer of premium audio systems, known for their iconic designs and exceptional sound quality.',
      website: 'https://www.bang-olufsen.com',
      specialties: ['Speakers', 'TVs', 'Audio systems'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Iconic design since 1925',
        'Active Room Compensation',
        'Customizable finishes',
        'Smart home integration'
      ]
    },
    {
      name: 'Devialet',
      category: 'Audio Systems',
      description: 'French manufacturer of high-end audio equipment, known for their innovative technology and design.',
      website: 'https://www.devialet.com',
      specialties: ['Speakers', 'Amplifiers', 'Sound systems'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Revolutionary ADH amplification',
        'SAM speaker matching technology',
        'Phantom speaker technology',
        'Artistic collaboration program'
      ]
    }
  ]
};

export default function LuxurySuppliers() {
  return (
    <Container>
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <Header>
        <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light">Luxury Living • Premium Brands • Exceptional Quality</p>
        <h1 className="text-center">
          <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
            Luxury Home Suppliers
          </span>
        </h1>
        <div className="flex items-center justify-center mt-6">
          <div className="h-px w-24 bg-yellow-500/30"></div>
          <p className="mx-6 text-lg text-white/70 font-light italic">Curated selection of premium brands for your dream home</p>
          <div className="h-px w-24 bg-yellow-500/30"></div>
        </div>
      </Header>

      {Object.entries(suppliers).map(([category, items]) => (
        <CategorySection key={category}>
          <h2 className="text-3xl font-bold text-yellow-500 mb-8 capitalize">{category}</h2>
          <SupplierGrid>
            {items.map((supplier) => (
              <SupplierCard
                key={supplier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-yellow-500 mb-4">{supplier.name}</h3>
                <p className="text-white/60 mb-4">{supplier.category}</p>
                <p className="text-white/80 mb-6">{supplier.description}</p>
                <div className="space-y-4 mb-6">
                  {supplier.standoutFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="text-yellow-500">•</span>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-semibold">{supplier.priceRange}</span>
                  <a
                    href={supplier.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-400 transition-colors"
                  >
                    Visit Website →
                  </a>
                </div>
              </SupplierCard>
            ))}
          </SupplierGrid>
        </CategorySection>
      ))}
    </Container>
  );
}
