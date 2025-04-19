import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface GalleryCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  aspectRatio?: "portrait" | "square"
  children: React.ReactNode
}

const GalleryCard = React.forwardRef<HTMLDivElement, GalleryCardProps>(
  ({ className, aspectRatio = "portrait", children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "gallery-card group relative overflow-hidden bg-card",
          "border border-border/10 hover:border-border/40",
          aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5" />
        <div className="relative h-full w-full p-6">
          {children}
        </div>
      </motion.div>
    )
  }
)
GalleryCard.displayName = "GalleryCard"

export { GalleryCard } 