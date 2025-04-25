export interface Photo {
  id: string;
  url: string;
  title: string;
  photographer: string;
  likes: number;
}

// Replace these URLs with your own images
export const photos: Photo[] = [
  {
    id: "1",
    url: "/images/model_s_tesla.jpeg",
    title: "Bitcoin Mining Facility",
    photographer: "Satoshi N.",
    likes: 21,
  },
  {
    id: "2",
    url: "/images/model_s_tesla.jpeg",
    title: "Lightning Strike",
    photographer: "Andreas A.",
    likes: 42,
  },
  {
    id: "3",
    url: "/images/model_s_tesla.jpeg",
    title: "Future of Money",
    photographer: "Hal F.",
    likes: 84,
  },
]; 