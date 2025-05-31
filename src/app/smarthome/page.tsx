'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';

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
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  
  @media (max-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
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

const VideoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 6rem auto 3rem auto;
  padding: 2.5rem 2.5rem;
  position: relative;
  z-index: 10;
  border: 3px solid #EAB308;
  border-radius: 24px;
  box-shadow: 5px 5px 0px 0px rgba(234, 179, 8, 1), 0 4px 20px rgba(234, 179, 8, 0.15);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 100%;
    aspect-ratio: 16/9;
    border: none;
    border-radius: 0;
    background: #181818;
    display: block;
  }

  @media (max-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const KitchenVideoContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  padding: 2.5rem 2.5rem;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  background: transparent;
  border: 3px solid #EAB308;
  border-radius: 24px;
  box-shadow: 5px 5px 0px 0px rgba(234, 179, 8, 1), 0 4px 20px rgba(234, 179, 8, 0.15);
  overflow: hidden;
  align-items: center;

  iframe {
    width: 100%;
    height: 56vw;
    max-height: 600px;
    min-height: 300px;
    border: none;
    border-radius: 0;
    background: #181818;
    display: block;
  }

  @media (max-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 1024px) {
    height: auto;
    iframe {
      height: 600px;
    }
  }
`;

const SmartHomeVideoContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  padding: 2.5rem 2.5rem;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  background: transparent;
  border: 3px solid #EAB308;
  border-radius: 24px;
  box-shadow: 5px 5px 0px 0px rgba(234, 179, 8, 1), 0 4px 20px rgba(234, 179, 8, 0.15);
  overflow: hidden;
  align-items: center;

  iframe {
    width: 100%;
    height: 56vw;
    max-height: 600px;
    min-height: 300px;
    border: none;
    border-radius: 0;
    background: #181818;
    display: block;
  }

  @media (max-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 1024px) {
    height: auto;
    iframe {
      height: 600px;
    }
  }
`;

const WellnessVideoContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  padding: 2.5rem 2.5rem;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  background: transparent;
  border: 3px solid #EAB308;
  border-radius: 24px;
  box-shadow: 5px 5px 0px 0px rgba(234, 179, 8, 1), 0 4px 20px rgba(234, 179, 8, 0.15);
  overflow: hidden;
  align-items: center;

  iframe {
    width: 100%;
    height: 56vw;
    max-height: 600px;
    min-height: 300px;
    border: none;
    border-radius: 0;
    background: #181818;
    display: block;
  }

  @media (max-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 1024px) {
    height: auto;
    iframe {
      height: 600px;
    }
  }
`;

const AudioVideoContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  padding: 2.5rem 2.5rem;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  background: transparent;
  border: 3px solid #EAB308;
  border-radius: 24px;
  box-shadow: 5px 5px 0px 0px rgba(234, 179, 8, 1), 0 4px 20px rgba(234, 179, 8, 0.15);
  overflow: hidden;
  align-items: center;

  iframe {
    width: 100%;
    height: 56vw;
    max-height: 600px;
    min-height: 300px;
    border: none;
    border-radius: 0;
    background: #181818;
    display: block;
  }

  @media (max-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 1024px) {
    height: auto;
    iframe {
      height: 600px;
    }
  }
`;

const BathroomVideoContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  padding: 2.5rem 2.5rem;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  background: transparent;
  border: 3px solid #EAB308;
  border-radius: 24px;
  box-shadow: 5px 5px 0px 0px rgba(234, 179, 8, 1), 0 4px 20px rgba(234, 179, 8, 0.15);
  overflow: hidden;
  align-items: center;

  iframe {
    width: 100%;
    height: 56vw;
    max-height: 600px;
    min-height: 300px;
    border: none;
    border-radius: 0;
    background: #181818;
    display: block;
  }

  @media (max-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 1024px) {
    height: auto;
    iframe {
      height: 600px;
    }
  }
`;

const InteriorVideoContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  padding: 2.5rem 2.5rem;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  background: transparent;
  border: 3px solid #EAB308;
  border-radius: 24px;
  box-shadow: 5px 5px 0px 0px rgba(234, 179, 8, 1), 0 4px 20px rgba(234, 179, 8, 0.15);
  overflow: hidden;
  align-items: center;

  iframe {
    width: 100%;
    height: 56vw;
    max-height: 600px;
    min-height: 300px;
    border: none;
    border-radius: 0;
    background: #181818;
    display: block;
  }

  @media (max-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 1024px) {
    height: auto;
    iframe {
      height: 600px;
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
  font-size: 2.5rem;
  font-weight: 900;
  text-yellow-500 mb-12 capitalize;
  position: relative;
  display: inline-block;
  letter-spacing: 0.01em;
  line-height: 1.05;
  
  @media (min-width: 640px) {
    font-size: 3.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
  
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
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 640px) {
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
  border-radius: 16px;
  min-width: 0;

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
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    border-radius: 10px;
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
  z-index: 1;
  pointer-events: auto;
  cursor: pointer;
  
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

const BudgetSection = styled.section`
  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10;
  background: rgba(28, 31, 38, 0.8);
  backdrop-filter: blur(10px);
  border: 2px solid #EAB308;
  border-radius: 24px;
  padding: 3rem;
  margin-top: 4rem;
  box-shadow: 5px 5px 0px 0px rgba(234, 179, 8, 1), 0 4px 20px rgba(234, 179, 8, 0.15);
`;

const BudgetTitle = styled.h2`
  text-3xl sm:text-4xl font-bold text-yellow-500 mb-8 text-center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: #EAB308;
  }
`;

const BudgetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const BudgetCard = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(234, 179, 8, 0.2);
`;

const BudgetItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(234, 179, 8, 0.1);
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const UpgradeSection = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(234, 179, 8, 0.2);
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
    },
    {
      name: 'Miele MasterCool',
      category: 'Luxury Appliances',
      description: 'German manufacturer of premium refrigeration and cooking systems, known for their exceptional quality and innovative technology.',
      website: 'https://www.miele.com',
      specialties: ['Refrigeration', 'Cooking systems', 'Wine storage'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'MasterCool refrigeration technology',
        'PerfectClean system',
        'SmartDevice connectivity',
        'German engineering excellence'
      ]
    }
  ],
  bathroom: [
    {
      name: 'THG Paris',
      category: 'Bathroom Fixtures',
      description: 'French manufacturer of luxury bathroom fittings and accessories, renowned for their artistic collaborations and exquisite craftsmanship.',
      website: 'https://www.thg-paris.com',
      specialties: ['Faucets', 'Shower systems', 'Bathroom accessories', 'Artisan finishes'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Collaborations with world-renowned designers and luxury brands',
        'Handcrafted in France with precious materials',
        'Bespoke finishes and customization',
        'Award-winning French design and innovation'
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
    },
    {
      name: 'Basalte',
      category: 'Smart Controls',
      description: 'Belgian manufacturer of premium touch-sensitive switches and smart home controls, known for their minimalist design and exceptional build quality.',
      website: 'https://www.basalte.be',
      specialties: ['Touch-sensitive switches', 'Smart home controls', 'Architectural integration'],
      priceRange: 'Ultra-Luxury',
      standoutFeatures: [
        'Patented touch-sensitive technology',
        'Belgian design heritage',
        'Seamless architectural integration',
        'Premium materials and craftsmanship'
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

// Custom grid for wellness and audio sections (2 per row on desktop)
const TwoColSupplierGrid = styled(SupplierGrid)`
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function LuxurySuppliers() {
  return (
    <Container>
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent z-10"></div>
      
      <VideoContainer>
        <iframe
          src="https://www.youtube.com/embed/E4hIluTclek"
          title="Luxury Home Technology"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>

      <Header>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-6 font-light text-center w-full"
        >
          Premium Smart Home Brands
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
          <div className="mt-4">
            <StyledLink
              href="/realestate"
              className="text-lg sm:text-xl text-yellow-500/90 hover:text-yellow-500 transition-colors"
            >
              Real Estate Market Dynamics →
            </StyledLink>
          </div>
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

      {Object.entries(suppliers).map(([category, items], index) => {
        if (category === 'audio') {
          return (
            <React.Fragment key={category}>
              <AudioVideoContainer>
                <iframe
                  src="https://www.youtube.com/embed/xqEpMpyvopg"
                  title="Audio Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AudioVideoContainer>
              <CategorySection style={{ animationDelay: `${index * 0.2}s` }}>
                <CategoryTitle>{category}</CategoryTitle>
                <TwoColSupplierGrid>
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
                </TwoColSupplierGrid>
              </CategorySection>
            </React.Fragment>
          );
        }
        if (category === 'wellness') {
          return (
            <React.Fragment key={category}>
              <WellnessVideoContainer>
                <iframe
                  src="https://www.youtube.com/embed/KSfx12M_1Qk"
                  title="Wellness Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </WellnessVideoContainer>
              <CategorySection style={{ animationDelay: `${index * 0.2}s` }}>
                <CategoryTitle>{category}</CategoryTitle>
                <TwoColSupplierGrid>
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
                </TwoColSupplierGrid>
              </CategorySection>
            </React.Fragment>
          );
        }
        if (category === 'smartHome') {
          return (
            <React.Fragment key={category}>
              <SmartHomeVideoContainer>
                <iframe
                  src="https://www.youtube.com/embed/gPQRrAXhEXk"
                  title="Smart Home Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </SmartHomeVideoContainer>
              <CategorySection style={{ animationDelay: `${index * 0.2}s` }}>
                <CategoryTitle>{category}</CategoryTitle>
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
            </React.Fragment>
          );
        }
        if (category === 'kitchen') {
          return (
            <React.Fragment key={category}>
              <KitchenVideoContainer>
                <iframe
                  src="https://www.youtube.com/embed/vKkwYW5YPJQ"
                  title="Luxury Kitchen Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </KitchenVideoContainer>
              <CategorySection style={{ animationDelay: `${index * 0.2}s` }}>
                <CategoryTitle>{category}</CategoryTitle>
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
            </React.Fragment>
          );
        }
        if (category === 'bathroom') {
          return (
            <React.Fragment key={category}>
              <BathroomVideoContainer>
                <iframe
                  src="https://www.youtube.com/embed/N5lmibTqrZM"
                  title="Bathroom Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </BathroomVideoContainer>
              <CategorySection style={{ animationDelay: `${index * 0.2}s` }}>
                <CategoryTitle>{category}</CategoryTitle>
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
            </React.Fragment>
          );
        }
        if (category === 'interior') {
          return (
            <React.Fragment key={category}>
              <InteriorVideoContainer>
                <iframe
                  src="https://www.youtube.com/embed/xEdrTclYBTQ"
                  title="Interior Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </InteriorVideoContainer>
              <CategorySection style={{ animationDelay: `${index * 0.2}s` }}>
                <CategoryTitle>{category}</CategoryTitle>
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
            </React.Fragment>
          );
        }
        return (
          <CategorySection key={category} style={{ animationDelay: `${index * 0.2}s` }}>
            <CategoryTitle>{category}</CategoryTitle>
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
        );
      })}

      <BudgetSection>
        <BudgetTitle>Project Budget Breakdown</BudgetTitle>
        <p className="text-white/70 text-center mb-8">200 m² Vitrocsa-Inspired Minimalist Passive Villa</p>
        
        <BudgetGrid>
          <BudgetCard>
            <h3 className="text-yellow-500 text-xl font-bold mb-4">Core Construction</h3>
            <BudgetItem>
              <span className="text-white/80">Architectural Design + Engineer</span>
              <span className="text-yellow-500">60,000 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white/80">Shell Construction (1,600 €/m²)</span>
              <span className="text-yellow-500">320,000 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white/80">Vitrocsa Glazing (triple-track)</span>
              <span className="text-yellow-500">90,000 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white/80">Interior Fit-Out</span>
              <span className="text-yellow-500">60,000 €</span>
            </BudgetItem>
          </BudgetCard>

          <BudgetCard>
            <h3 className="text-yellow-500 text-xl font-bold mb-4">Interior Elements</h3>
            <BudgetItem>
              <span className="text-white/80">Fireplace (Focus Gyrofocus)</span>
              <span className="text-yellow-500">12,000 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white/80">Kitchen (Bulthaup + Gaggenau)</span>
              <span className="text-yellow-500">50,000 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white/80">Bathrooms (x3, Vola / Agape)</span>
              <span className="text-yellow-500">30,000 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white/80">Flooring (oak / travertine)</span>
              <span className="text-yellow-500">25,000 €</span>
            </BudgetItem>
          </BudgetCard>

          <BudgetCard>
            <h3 className="text-yellow-500 text-xl font-bold mb-4">Systems & Technology</h3>
            <BudgetItem>
              <span className="text-white/80">Lighting (Davide Groppi)</span>
              <span className="text-yellow-500">18,000 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white/80">Smart Home + Controls</span>
              <span className="text-yellow-500">30,000 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white/80">Audio / A/V System</span>
              <span className="text-yellow-500">15,000 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white/80">HVAC + Passive Systems</span>
              <span className="text-yellow-500">35,000 €</span>
            </BudgetItem>
          </BudgetCard>

          <BudgetCard>
            <h3 className="text-yellow-500 text-xl font-bold mb-4">Exterior & Finishing</h3>
            <BudgetItem>
              <span className="text-white/80">Landscaping + Garden Access</span>
              <span className="text-yellow-500">25,000 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white/80">Outdoor Kitchen (Röshults/OFYR)</span>
              <span className="text-yellow-500">20,000 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white/80">Interior Doors + Hardware</span>
              <span className="text-yellow-500">10,000 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white/80">Contingency (10%)</span>
              <span className="text-yellow-500">81,500 €</span>
            </BudgetItem>
            <BudgetItem>
              <span className="text-white font-bold">TOTAL</span>
              <span className="text-yellow-500 font-bold">896,500 €</span>
            </BudgetItem>
          </BudgetCard>
        </BudgetGrid>

        <UpgradeSection>
          <h3 className="text-yellow-500 text-xl font-bold mb-4 text-center">Project Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-black/30 p-4 rounded-lg">
              <p className="text-white/80">Passive House Structure</p>
              <p className="text-yellow-500">RE2020 / RT2012 Compliant</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <p className="text-white/80">Premium Materials</p>
              <p className="text-yellow-500">Travertine, Oak, Custom Finishes</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <p className="text-white/80">Architectural Design</p>
              <p className="text-yellow-500">Gabled Volume, Vaulted Ceilings</p>
            </div>
          </div>
        </UpgradeSection>
      </BudgetSection>

      <CategorySection style={{ marginTop: '8rem' }}>
        <CategoryTitle>Inspiration</CategoryTitle>
        <SupplierGrid>
          {/* Furniture & Interior Systems */}
          <SupplierCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-6">Furniture & Interior</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.molteni.it/fr/kitchens/category/highlights" target="_blank" rel="noopener noreferrer">Molteni&C</StyledLink> – Minimalist integrated storage, sofas, beds
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://meridiani.it/en" target="_blank" rel="noopener noreferrer">Meridiani</StyledLink> – Modern Italian furniture, softer textures
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.porro.com/en/products/systems/storage+closets/" target="_blank" rel="noopener noreferrer">Porro</StyledLink> – Sleek custom wardrobes and open shelving systems
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.rimadesio.it/en/product/spin/" target="_blank" rel="noopener noreferrer">Rimadesio</StyledLink> – Premium sliding doors and partition systems with invisible tracks
                </span>
              </div>
              {/* New Inspirations */}
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.kettal.com/" target="_blank" rel="noopener noreferrer">Kettal</StyledLink> – Outdoor and indoor furniture, innovative materials, contemporary design
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.cassina.com/fr/fr/products/category-page/all-products.5.html" target="_blank" rel="noopener noreferrer">Cassina</StyledLink> – Iconic Italian modern furniture, collaborations with top architects
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.flexform.it/en" target="_blank" rel="noopener noreferrer">Flexform</StyledLink> – Elegant Italian sofas and lounge furniture, understated luxury
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://livingdivani.it/en/products/beds/" target="_blank" rel="noopener noreferrer">Living Divani</StyledLink> – Minimalist sofas and seating, contemporary Italian design
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.carlhansen.com/en/fr" target="_blank" rel="noopener noreferrer">Carl Hansen & Søn</StyledLink> – Danish classics, natural materials, timeless craftsmanship
                </span>
              </div>
            </div>
          </SupplierCard>

          {/* Bathroom Brands */}
          <SupplierCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-6">Bathroom Brands</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://falper.it/en/" target="_blank" rel="noopener noreferrer">Falper</StyledLink> – Bold designer bathroom furniture, resin basins
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://inbani.com/en/" target="_blank" rel="noopener noreferrer">Inbani</StyledLink> – Sleek, minimal Spanish bath furniture
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.zucchettidesign.it/en" target="_blank" rel="noopener noreferrer">Zucchetti.Kos</StyledLink> – Iconic mixer taps and spa bathtubs
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.duravit.com/en-en/products/all-series/sensowash-starck-f" target="_blank" rel="noopener noreferrer">Duravit</StyledLink> (Cecilie Manz, Philippe Starck lines) – Clean but less flashy
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.axor-design.com/int/bath/new-products/axor-showercomposition" target="_blank" rel="noopener noreferrer">Axor by Hansgrohe</StyledLink> – Dornbracht-level quality but more expressive
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.antoniolupi.it/en/products/showerheads" target="_blank" rel="noopener noreferrer">Antonio Lupi</StyledLink> – Contemporary Italian bathroom design with innovative shower systems
                </span>
              </div>
            </div>
          </SupplierCard>

          {/* Kitchen & Joinery */}
          <SupplierCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-6">Kitchen & Joinery</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.arclinea.com" target="_blank" rel="noopener noreferrer">Arclinea</StyledLink> — Integrated pro kitchens with Boffi DNA
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.henrybuilt.com/luxury-kitchen/overview" target="_blank" rel="noopener noreferrer">Henrybuilt</StyledLink> — USA-based, super-custom joinery with architectural finesse
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.bulthaup.com" target="_blank" rel="noopener noreferrer">Bulthaup</StyledLink> — German minimalist kitchens with architectural precision
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.poliform.it/en/kitchens/" target="_blank" rel="noopener noreferrer">Poliform</StyledLink> — Italian modular kitchens and storage, seamless integration
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.molteni.it/en/kitchens" target="_blank" rel="noopener noreferrer">Molteni&C Dada</StyledLink> — Luxury Italian kitchens, innovative materials and design
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.valcucine.com/" target="_blank" rel="noopener noreferrer">Valcucine</StyledLink> — Eco-friendly Italian kitchens, glass and aluminum innovation
                </span>
              </div>
            </div>
          </SupplierCard>

          {/* Lighting Design */}
          <SupplierCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-6">Lighting Design</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://vibia.com/en/int/collections" target="_blank" rel="noopener noreferrer">Vibia</StyledLink> — Mediterranean modern lighting for minimalist spaces
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.davidegroppi.com/en/" target="_blank" rel="noopener noreferrer">Davide Groppi</StyledLink> — Sculptural, poetic lighting with architectural impact
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://flos.com/en/" target="_blank" rel="noopener noreferrer">Flos</StyledLink> — Iconic Italian lighting, collaborations with top designers
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.artemide.com/en/" target="_blank" rel="noopener noreferrer">Artemide</StyledLink> — Human-centered, innovative Italian lighting solutions
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://bocci.com/" target="_blank" rel="noopener noreferrer">Bocci</StyledLink> — Artistic glass pendant lighting, hand-blown in Canada
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.luceplan.com/" target="_blank" rel="noopener noreferrer">Luceplan</StyledLink> — Award-winning Italian lighting, technical and aesthetic excellence
                </span>
              </div>
            </div>
          </SupplierCard>

          {/* Smart Systems & Control */}
          <SupplierCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-6">Smart Systems & Control</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.blacknova.co" target="_blank" rel="noopener noreferrer">Black Nova</StyledLink> – Italian smart panels with luxury hotel DNA
                </span>
              </div>
              {/* New Inspirations */}
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.basalte.be/en/product/adelante" target="_blank" rel="noopener noreferrer">Basalte</StyledLink> – Belgian touch-sensitive switches and smart controls, minimalist design
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.gira.com/en/en/products/socket-outlets/gira-outdoor-socket-outlets#" target="_blank" rel="noopener noreferrer">Gira</StyledLink> – German smart home systems, KNX integration, high-end switches
                </span>
              </div>
            </div>
          </SupplierCard>

          {/* Wellness & Outdoor */}
          <SupplierCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-6">Wellness & Outdoor</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://exteta.it/en" target="_blank" rel="noopener noreferrer">Exteta</StyledLink> – Artisanal Mediterranean outdoor furniture
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.rodaonline.com" target="_blank" rel="noopener noreferrer">Roda</StyledLink> – Neutral-toned outdoor systems in natural fabrics
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.kettal.com" target="_blank" rel="noopener noreferrer">Kettal</StyledLink> – Premium outdoor furniture with innovative materials and timeless design
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.dedon.de/en/Product-Finder/furniture/nestrest/Standing-lounger" target="_blank" rel="noopener noreferrer">Dedon</StyledLink> – Iconic woven outdoor furniture, innovative weatherproof materials
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.tribu.com/en/" target="_blank" rel="noopener noreferrer">Tribù</StyledLink> – Belgian luxury outdoor furniture, refined minimalism
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">•</span>
                <span className="text-white/90 leading-relaxed">
                  <StyledLink href="https://www.gloster.com/en/products/collections/deck" target="_blank" rel="noopener noreferrer">Gloster</StyledLink> – Teak and aluminum outdoor furniture, timeless craftsmanship
                </span>
              </div>
            </div>
          </SupplierCard>
        </SupplierGrid>
      </CategorySection>

      {/* Final Architectural Brief Section */}
      <BudgetSection className="!px-4 !py-6 sm:!px-8 sm:!py-12">
        <BudgetTitle className="text-2xl sm:text-3xl md:text-4xl">🏛️ ARCHITECTURAL BRIEF — LTL SMART VILLA</BudgetTitle>
        <div className="space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <div>
            <strong>Project Name:</strong> LTL Passive Villa<br />
            <strong>Client:</strong> IKIGAI LABS XYZ<br />
            <strong>Location:</strong> Southwest France<br />
            <strong>Plot Status:</strong> Acquired<br />
            <strong>Build Footprint:</strong> 20m x 10m<br />
            <strong>Interior Area:</strong> ~200 m²<br />
            <strong>Use:</strong> Primary residence, reference showcase for Smart Home Living<br />
            <strong>Architectural Style:</strong> Malibu Minimalism × Passive Performance × Mediterranean Warmth
          </div>
          <hr className="border-yellow-500/30 my-4" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2">🎯 Core Vision</h3>
            <p>
              Create a calm, intelligent, and spatially refined villa inspired by Malibu minimalism, where every detail is curated for effortless living and sensory harmony. The architecture should dissolve into the natural landscape, using expansive glazing and organic materials to blur the boundaries between indoors and out. By day, the home is nearly invisible—its presence felt through subtle textures, shadow play, and the gentle transition of light. At night, it transforms into a warm, intentional beacon, softly illuminated to foster a sense of sanctuary and belonging.<br /><br />
              The villa seamlessly integrates advanced smart home technology, allowing intuitive control over lighting, climate, security, and entertainment, all while remaining unobtrusive and tactile. Spaces are designed for both privacy and connection, supporting moments of solitude as well as vibrant gatherings. The result is a living environment that feels both elemental and futuristic—where technology enhances, rather than overwhelms, the experience of home.
            </p>
          </div>
          <hr className="border-yellow-500/30 my-4" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2">🧱 Architectural Principles</h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1">
              <li>Form: Single-storey, 20x10m rectangle with high gabled roof and thin eaves</li>
              <li>Glazing: Full-length Vitrocsa sliding glass facing pool (south), integrated ventilation fins</li>
              <li>Roofing: Zinc or aluminium dark standing seam roof, prepped for solar</li>
              <li>Structure: ICF or hempcrete wall system with polished concrete slab</li>
              <li>Passive Strategy: Orientation, thermal mass, airtight envelope, HRV + geothermal/low-temp system</li>
              <li>Aesthetic: Clean, continuous surfaces, layered warm neutrals, texture over color</li>
            </ul>
          </div>
          <hr className="border-yellow-500/30 my-4" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2">📐 Spatial Program</h3>
            <div className="overflow-x-auto w-full">
              <table className="min-w-[500px] w-full text-left mb-4 text-xs sm:text-sm md:text-base">
                <thead>
                  <tr className="text-yellow-500">
                    <th className="pr-4">Space</th>
                    <th className="pr-4">Size</th>
                    <th>Features</th>
                  </tr>
                </thead>
                <tbody className="text-white/90">
                  <tr><td>Living / Dining / Kitchen</td><td>80</td><td>Island, travertine slab, high ceilings, centered fireplace (Focus or Gyrofocus)</td></tr>
                  <tr><td>Master Bedroom Suite</td><td>45</td><td>WIC, en-suite, private access to pool</td></tr>
                  <tr><td>Bedroom 2</td><td>25</td><td>En-suite or shared access to bath</td></tr>
                  <tr><td>Home Office</td><td>20</td><td>Glass pocket doors, acoustic ceiling</td></tr>
                  <tr><td>Bathrooms (x2)</td><td>12</td><td>Vola or Axor + Agape or Antonio Lupi</td></tr>
                  <tr><td>Utility + Tech</td><td>5</td><td>HVAC, Smart Panel, Storage</td></tr>
                </tbody>
              </table>
            </div>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1">
              <li>Total GFA: 200 m²</li>
              <li>Terrace: ~25 m² shaded + ~60 m² open</li>
              <li>Pool (existing): 12 × 6 m, needs seamless integration</li>
            </ul>
          </div>
          <hr className="border-yellow-500/30 my-4" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2">🛋️ Interior Systems & Finishes</h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1">
              <li><strong>Walls & Floors</strong><br />Walls: Acoustic lime plaster (Living), travertine panels (Bath), Porro wardrobes<br />Floors: Smoked oak (sleeping), seamless microcement (main), Antolini travertine (wet)</li>
              <li><strong>Furniture</strong><br />Lounge: Minotti / Flexform / Living Divani<br />Storage: Molteni&C, Porro<br />Dining: Meridiani or Carl Hansen & Søn</li>
              <li><strong>Kitchen</strong><br />Brand: Bulthaup B3 or Arclinea<br />Appliances: Gaggenau or Miele MasterCool<br />Surfaces: Pietra Serena or Neolith for high use, Antolini for visual</li>
              <li><strong>Bathrooms</strong><br />Vanities: Antonio Lupi, Falper, or Agape<br />Fixtures: Vola, Axor, Zucchetti.Kos<br />Smart Toilets: Toto Neorest</li>
            </ul>
          </div>
          <hr className="border-yellow-500/30 my-4" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2">🧠 Smart Systems</h3>
            <p>Platform: KNX + Savant + Black Nova Touch Panels</p>
            <div className="overflow-x-auto w-full">
              <table className="min-w-[400px] w-full text-left mb-4 text-xs sm:text-sm md:text-base">
                <thead>
                  <tr className="text-yellow-500">
                    <th className="pr-4">System</th>
                    <th>Brands / Specs</th>
                  </tr>
                </thead>
                <tbody className="text-white/90">
                  <tr><td>Lighting</td><td>Vibia, Flos, Davide Groppi / DALI or KNX-controlled</td></tr>
                  <tr><td>Blinds</td><td>Lutron Sivoia QS, solar-tuned</td></tr>
                  <tr><td>HVAC</td><td>Daikin Altherma, underfloor radiant + Zehnder HRV</td></tr>
                  <tr><td>Security</td><td>Doorbird, smart locks, surveillance nodes</td></tr>
                  <tr><td>Audio</td><td>Bang & Olufsen, Bose, Apple AirPlay</td></tr>
                  <tr><td>Control</td><td>Black Nova or Basalte wall panels + iOS App mirroring</td></tr>
                </tbody>
              </table>
            </div>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1">
              <li>AI Energy Mode via Savant for predictive optimization</li>
              <li>Room Scenes for lighting, audio, thermal, shading presets</li>
            </ul>
          </div>
          <hr className="border-yellow-500/30 my-4" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2">🌿 Sustainability & Energy</h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1">
              <li>Triple-glazed Vitrocsa w/ thermal break</li>
              <li>Greywater prep + rainwater collection</li>
              <li>Tesla Powerwall or EcoFlow backup optional</li>
              <li>Solar-ready roof system</li>
              <li>RE2020 compliant</li>
            </ul>
          </div>
          <hr className="border-yellow-500/30 my-4" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2">📦 Required Deliverables</h3>
            <ol className="list-decimal pl-5 sm:pl-6 space-y-1">
              <li>Conceptual Floor Plan</li>
              <li>3D Massing Model – Vaulted interior volume, solar</li>
              <li>Interior Render Pack – Lounge, kitchen, master bath</li>
              <li>Material Moodboard – Aligning with Figma Files</li>
              <li>Smart System Pre-Wire Plan</li>
              <li>HVAC & Passive Certification Coordination</li>
            </ol>
          </div>
          <hr className="border-yellow-500/30 my-4" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2">✨ Final Notes</h3>
            <p>
              This villa is more than a home—it is a living manifesto of intentional design, technological harmony, and elemental beauty. Every detail, from the tactile feel of lime plaster to the seamless orchestration of light, sound, and climate, is curated to foster a sense of calm, clarity, and inspiration. Complexity is hidden behind intuitive, tactile interfaces, empowering residents to shape their environment with a touch or a word, while the architecture itself recedes into the landscape, blurring the boundaries between inside and out.<br /><br />
              Here, luxury is measured not by excess, but by the effortless integration of world-class materials, passive performance, and adaptive smart systems. The villa is a sanctuary for both solitude and connection—a place where mornings are filled with natural light and evenings glow with intention, where every space supports wellness, creativity, and meaningful living.<br /><br />
              As a reference project, this home sets a new standard for tech-forward, sustainable luxury. It is a showcase for curated excellence, a canvas for future innovation, and a testament to the idea that true comfort is found in the seamless union of nature, technology, and human experience.
            </p>
          </div>
        </div>
      </BudgetSection>
    </Container>
  );
}
