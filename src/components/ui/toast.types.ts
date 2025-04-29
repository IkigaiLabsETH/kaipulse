import * as React from "react"

export interface ToastProps extends React.ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "destructive"
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export type ToastActionElement = React.ReactElement 