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
  min-h-screen bg-black text-white font-satoshi relative overflow-hidden;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 50% 50%, rgba(28, 31, 38, 0.8) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(45deg, rgba(234, 179, 8, 0.03) 0%, transparent 100%);
    z-index: 0;
    animation: pulse 15s ease-in-out infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

const Header = styled.header`
  text-center space-y-12 pt-40 pb-24 px-4 relative z-10;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(234, 179, 8, 0.3), transparent);
  }
`;

const CategorySection = styled.section`
  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CategoryTitle = styled.h2`
  text-2xl sm:text-3xl font-bold text-yellow-500 mb-12 capitalize;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: #EAB308;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const SupplierGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SupplierCard = styled(motion.div)`
  background: rgba(28, 31, 38, 0.8);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border: 2px solid #EAB308;
  box-shadow: 5px 5px 0px 0px rgba(234, 179, 8, 1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #EAB308, transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(234, 179, 8, 0.03), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  @media (max-width: 640px) {
    padding: 2rem;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 8px 8px 0px 0px rgba(234, 179, 8, 1);
    background: rgba(28, 31, 38, 0.9);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
    }
  }
`;

const StyledLink = styled.a`
  position: relative;
  color: #EAB308;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #EAB308;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: #FCD34D;
    transform: translateX(4px);
    
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
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
      name: 'Antolini',
      category: 'Natural Stone',
      description: 'Italian manufacturer of premium natural stone surfaces, known for their exceptional selection of marble, travertine, and onyx.',
      website: 'https://www.antolini.com',
      specialties: ['Marble walls', 'Travertine cladding', 'Stone slabs', 'Custom stone solutions'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'World\'s largest selection of natural stone',
        'Proprietary stone treatment technology',
        'Custom architectural solutions',
        'Sustainable quarrying practices'
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
      name: 'Philips Hue',
      category: 'Smart Lighting',
      description: 'Dutch manufacturer of innovative smart lighting solutions, known for their extensive ecosystem and user-friendly control.',
      website: 'https://www.philips-hue.com',
      specialties: ['Smart bulbs', 'Lighting control', 'Ambient lighting', 'Entertainment lighting'],
      priceRange: 'Luxury',
      standoutFeatures: [
        '16 million color options with precise control',
        'Seamless integration with major smart home platforms',
        'Advanced scene creation and scheduling',
        'Entertainment sync for gaming and movies'
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
      name: 'Storvatt',
      category: 'Wellness Systems',
      description: 'Norwegian manufacturer of luxury wellness and spa solutions, known for their innovative water technology and sustainable design.',
      website: 'https://www.storvatt.com',
      specialties: ['Swimming pools', 'Wellness pools', 'Water features', 'Spa systems'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Advanced water purification technology',
        'Sustainable energy solutions',
        'Custom architectural integration',
        'Smart control systems'
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
    },
    {
      name: 'Bose',
      category: 'Audio Systems',
      description: 'American manufacturer of premium audio systems, known for their innovative sound technology and immersive home entertainment solutions.',
      website: 'https://www.bose.com',
      specialties: ['Home theater systems', 'Smart speakers', 'Architectural speakers', 'Soundbars'],
      priceRange: 'Luxury',
      standoutFeatures: [
        'Proprietary waveguide technology',
        'Adaptive audio calibration',
        'Seamless multi-room audio',
        'Smart home integration'
      ]
    }
  ]
};

export default function LuxurySuppliers() {
  return (
    <Container>
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent z-10"></div>
      
      <Header>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-6 font-light"
        >
          Premium Brands • Exceptional Quality
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <span className="text-4xl sm:text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
            Smart Home
          </span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4 sm:gap-0"
        >
          <div className="h-px w-32 bg-yellow-500/30"></div>
          <p className="mx-8 text-base sm:text-lg text-white/70 font-light italic text-center">Curated selection of premium brands for your dream home</p>
          <div className="h-px w-32 bg-yellow-500/30"></div>
        </motion.div>
      </Header>

      {Object.entries(suppliers).map(([category, items], index) => (
        <CategorySection 
          key={category}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <CategoryTitle>
            {category}
          </CategoryTitle>
          <SupplierGrid>
            {items.map((supplier) => (
              <SupplierCard
                key={supplier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-6">{supplier.name}</h3>
                <p className="text-white/60 mb-6">{supplier.category}</p>
                <p className="text-white/80 mb-8 leading-relaxed">{supplier.description}</p>
                <div className="space-y-4 mb-8">
                  {supplier.standoutFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="text-yellow-500">•</span>
                      <span className="text-white/90 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <StyledLink
                    href={supplier.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website →
                  </StyledLink>
                </div>
              </SupplierCard>
            ))}
          </SupplierGrid>
        </CategorySection>
      ))}
    </Container>
  );
}
