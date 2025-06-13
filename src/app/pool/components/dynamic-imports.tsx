import dynamic from 'next/dynamic';
import LoadingState from './LoadingState';

export const DynamicAdvancedFeatures = dynamic(
  () => import('./AdvancedFeatures'),
  { 
    loading: () => <LoadingState height="h-[600px]" />,
    ssr: true 
  }
);

export const DynamicWaterTreatment = dynamic(
  () => import('./WaterTreatmentSystems'),
  { 
    loading: () => <LoadingState height="h-[500px]" />,
    ssr: true 
  }
);

export const DynamicSolarEnergy = dynamic(
  () => import('./SolarEnergySystem'),
  { 
    loading: () => <LoadingState height="h-[450px]" />,
    ssr: true 
  }
);

export const DynamicHeatingEnergy = dynamic(
  () => import('./HeatingEnergy'),
  { 
    loading: () => <LoadingState height="h-[400px]" />,
    ssr: true 
  }
); 