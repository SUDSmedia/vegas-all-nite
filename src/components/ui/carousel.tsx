import * as React from "react"
import { cn } from "@/lib/utils"

type CarouselApi = unknown

const CarouselContext = React.createContext<{
  api: CarouselApi | undefined
}>({
  api: undefined,
})

function Carousel({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <CarouselContext.Provider value={{ api: undefined }}>
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("overflow-hidden", className)} {...props} />
  )
}

function CarouselItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("min-w-0 shrink-0 grow-0 basis-full", className)} {...props} />
}

function CarouselPrevious({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "absolute left-0 top-1/2 -translate-y-1/2",
        className
      )}
      {...props}
    />
  )
}

function CarouselNext({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "absolute right-0 top-1/2 -translate-y-1/2",
        className
      )}
      {...props}
    />
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
