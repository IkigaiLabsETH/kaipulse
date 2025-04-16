import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader } from "./loader"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center p-4 overflow-hidden font-semibold transition-all duration-150 ease-in-out border-2 group",
  {
    variants: {
      variant: {
        default: "shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        outline: "group inline-flex items-center justify-center py-2 px-4 text-sm ring-1",
      },
      buttonColor: {
        yellow: "text-yellow-400 border-yellow-400 active:text-yellow-400 focus-visible:outline-yellow-400",
        white: "text-black border-black active:text-yellow-400 bg-yellow-400",
      },
      size: {
        default: "",
        sm: "h-9 px-4 py-2",
        lg: "h-12 px-8 py-4",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      buttonColor: "white",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
  loading?: boolean
  target?: '_blank' | '_self'
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, buttonColor, asChild = false, href, children, loading = false, target = '_self', ...props }, ref) => {
    const Comp = asChild ? Slot : href ? 'a' : 'button'
    const baseClassName = cn(buttonVariants({ variant, size, buttonColor, className }))

    const content = (
      <>
        <span className={cn(
          'absolute bottom-0 left-0 w-full h-0 transition-all duration-150 ease-in-out group-hover:h-full opacity-90',
          variant === 'default' ? 'bg-black' : 'bg-yellow-400'
        )} />
        <span className={cn(
          'relative w-full text-center transition-colors duration-200 ease-in-out leading-none pb-1',
          variant === 'default' ? 'group-hover:text-yellow-400' : 'group-hover:text-black'
        )}>
          {loading && (
            <span className="overflow-hidden inline-block translate-y-1 -translate-x-0.5 w-5">
              <Loader size="sm" />
            </span>
          )}{' '}
          {children}
        </span>
      </>
    )

    if (href) {
      return (
        <a 
          href={href} 
          className={baseClassName} 
          target={target} 
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      )
    }

    return (
      <button 
        className={cn(baseClassName, "disabled:cursor-not-allowed")} 
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 