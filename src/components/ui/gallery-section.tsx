import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface GallerySectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  children: React.ReactNode
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const GallerySection = React.forwardRef<HTMLDivElement, GallerySectionProps>(
  ({ className, title, subtitle, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("relative py-16 md:py-24 lg:py-32", className)}
        {...props}
      >
        <div className="container px-4 md:px-6">
          {(title || subtitle) && (
            <div className="mx-auto max-w-[800px] text-center mb-16 md:mb-24">
              {title && (
                <motion.h2
                  className="heading-lg mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {title}
                </motion.h2>
              )}
              {subtitle && (
                <motion.p
                  className="text-lg md:text-xl text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          )}
          <motion.div
            className="gallery-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {children}
          </motion.div>
        </div>
      </section>
    )
  }
)
GallerySection.displayName = "GallerySection"

export { GallerySection } 