import Link from "next/link"
import { PropsWithChildren } from "react"

export const Container = ({ children }: PropsWithChildren) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
        {children}
    </div>
)

export const Background = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
        <div className="bg-light h-[35vh] lg:h-auto"></div>
        <div className="bg-light h-[65vh] lg:min-h-screen">
            <div className="bg-dark w-full h-full lg:rounded-[32px] overflow-hidden lg:border-[16px] border-light"></div>
        </div>
    </div>
)

export function Left({ children, progress }: PropsWithChildren<{ progress: number }>) {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
    return (
        <div className="container md:px-16 xl:px-24 flex flex-col justify-center items-center h-[35vh] lg:h-auto"
            style={{ transform: `translateY(${translateY}px)` }}>
            {children}
        </div>
    )
}

export function Right({ children, progress }: PropsWithChildren<{ progress: number }>) {
    let translateY = Math.max(-50, -(progress - 0.5) * 50)
    return (
        <div className="flex flex-1 lg:items-center justify-center h-screen"
            style={{ transform: `translateY(${translateY}px)` }}>
            <div className="container md:px-0 w-full max-w-md pt-10 lg:pt-0">
                {children}
            </div>
        </div>
    )
}

export const CustomLink = ({ href, children }: PropsWithChildren<{ href: string }>) => (
    <Link href={href} target="_blank" className="underline underline-offset-8 decoration-1" rel="noreferrer">
        {children}
    </Link>
)