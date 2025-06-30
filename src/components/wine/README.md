# Wine Components

This directory contains reusable components for wine-related pages and sections.

## Components

### WineRegionHero
Hero section component with optional video embed.

```tsx
import { WineRegionHero } from '@/components/wine';

<WineRegionHero
  badge="World-Class Wine Regions"
  title="South African & French Wines"
  description="Discover the rich heritage and exceptional quality..."
  videoUrl="https://www.youtube.com/embed/mK7R8hNxY_0"
  videoTitle="Wine Regions of South Africa and France"
/>
```

### WineRegionIntro
Introduction section with title, description, and optional buttons/video.

```tsx
import { WineRegionIntro } from '@/components/wine';

<WineRegionIntro
  title="South African Wine Estates"
  description="Experience the finest wine estates..."
  buttons={[
    { label: "The Silo Hotel Guide", href: "https://..." },
    { label: "Delaire Graff Guide", href: "https://..." }
  ]}
  videoUrl="https://www.youtube.com/embed/ChR8FqY8DL0"
  videoTitle="Loire Valley Wine Region"
/>
```

### WineEstateCard
Card component for displaying wine estate information.

```tsx
import { WineEstateCard } from '@/components/wine';

<WineEstateCard
  title="Boschendal Estate"
  description="Founded in 1688, Boschendal offers award-winning wines..."
  highlights={[
    "Est. in 1688 by French Huguenot Jean le Long",
    "Historic Cape Dutch manor house from 1688"
  ]}
/>
```

### WineItineraryDay
Card component for roadtrip/itinerary day information.

```tsx
import { WineItineraryDay } from '@/components/wine';

<WineItineraryDay
  title="Day 1: Golden Beginnings in Sauternes"
  stayInfo="Château Lafaurie-Peyraguey"
  diningInfo="Lalique, 1 Michelin star"
  description={[
    "You land gently in the amber-hued heart of Sauternes...",
    "Your first night is indulgently spent at..."
  ]}
  buttons={[
    { label: "View on Michelin Guide", href: "https://..." }
  ]}
/>
```

### WineMenuSection
Component for displaying categorized wine lists.

```tsx
import { WineMenuSection } from '@/components/wine';

<WineMenuSection
  title="Bordeaux"
  wines={[
    {
      name: "L'Esprit de Pavie",
      description: "Vinified in the tradition of Château Pavie..."
    },
    {
      name: "Chapelle d'Aliénor",
      description: "Rich terroir near Saint-Émilion..."
    }
  ]}
/>
```

### WineButtonGroup
Group of buttons/links with optional title.

```tsx
import { WineButtonGroup } from '@/components/wine';

<WineButtonGroup
  title="Bordeaux Estates"
  buttons={[
    { label: "Château Lafaurie-Peyraguey", href: "https://..." },
    { label: "Les Sources de Caudalie", href: "https://..." }
  ]}
/>
```

### WineSectionHeader
Reusable section header with consistent styling.

```tsx
import { WineSectionHeader } from '@/components/wine';

<WineSectionHeader
  title="Featured Region: Bordeaux"
  subtitle="Experience the legendary wine region..."
  centered={true}
/>
```

### WineGrid
Responsive grid layout for wine components.

```tsx
import { WineGrid, WineEstateCard } from '@/components/wine';

<WineGrid columns={3}>
  <WineEstateCard title="Estate 1" description="..." />
  <WineEstateCard title="Estate 2" description="..." />
  <WineEstateCard title="Estate 3" description="..." />
</WineGrid>
```

### EmbeddedVideo
Reusable video embedding component.

```tsx
import { EmbeddedVideo } from '@/components/wine';

<EmbeddedVideo
  videoUrl="https://www.youtube.com/embed/mK7R8hNxY_0"
  title="Wine Region Video"
/>
```

## Usage Example

```tsx
import {
  WineRegionHero,
  WineRegionIntro,
  WineGrid,
  WineEstateCard,
  WineSectionHeader
} from '@/components/wine';

export default function WinePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <WineRegionHero
        badge="Premium Wine Regions"
        title="Explore World-Class Vineyards"
        description="Discover exceptional wines from renowned regions..."
        videoUrl="https://www.youtube.com/embed/example"
      />
      
      <WineRegionIntro
        title="Featured Wine Estates"
        description="Experience the finest wineries..."
        buttons={[
          { label: "Book Tour", href: "/book" },
          { label: "View Menu", href: "/menu" }
        ]}
      />
      
      <WineSectionHeader title="Our Selection" />
      
      <WineGrid columns={3}>
        <WineEstateCard
          title="Estate 1"
          description="Award-winning wines from..."
        />
        <WineEstateCard
          title="Estate 2"
          description="Historic vineyard known for..."
        />
        <WineEstateCard
          title="Estate 3"
          description="Modern winery producing..."
        />
      </WineGrid>
    </div>
  );
}
```

## Styling

All components use:
- DNA yellow (`yellow-400`, `yellow-500`) for accents and highlights
- Black backgrounds with yellow borders for cards
- Consistent typography (Epilogue, Satoshi, Boska fonts)
- Tailwind CSS classes following the project's design system

## Notes

- All components are client-side components (`"use client"`)
- Components are designed to be composable and reusable
- Consistent prop interfaces with optional className for customization
- Responsive design built-in
- Follows the project's atomic design principles 