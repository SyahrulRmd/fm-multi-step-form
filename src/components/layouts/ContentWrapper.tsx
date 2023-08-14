import { CSSProperties, ReactNode } from "react"

export const ContentWrapper = ({ children, style }: { children: ReactNode, style?: CSSProperties }) => {
    return (
        <div style={style} className={`col-span-8 flex flex-col xs:col-span-12 justify-between px-14 xs:p-0 my-6 xs:my-0 xs:h-[72vh]`}>
            { children }
        </div>
    )
}
