export interface GalleryItem {
  id: string
  title: string
  description: string
  image: string
  category: "rally" | "capture" | "war" | "meme"
  date: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Steel's Legendary Goose Rally",
    description: "The moment Steel rallied a goose instead of the Sanctuary. A mistake that became alliance legend.",
    image: "/steel-rally-goose.png",
    category: "meme",
    date: "2025-03-25",
  },
  {
    id: "2",
    title: "Spoiikee's Sacrifice Strategy",
    description: "Steel trolling Spoiikee for preferring to kill low-tier troops instead of promoting them.",
    image: "/steel-spoiikee-sacrifice.png",
    category: "meme",
    date: "2025-03-24",
  },
  {
    id: "3",
    title: "Spoiikee Forgot Rally Setup",
    description: "That moment when you realize you forgot to set up formations before Bear Hunt starts.",
    image: "/spoiike-forgot.png",
    category: "meme",
    date: "2025-03-23",
  },
]
