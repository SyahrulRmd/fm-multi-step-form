import { CSSProperties, ReactNode } from "react"

export const MainPaper = ({ children, style } : { children: ReactNode, style?: CSSProperties }) => {
    return (
        <div style={style} className='flex flex-col gap-10 xs:gap-6 mt-8 xs:bg-white xs:-my-20 xs:rounded-xl xs:mx-4 xs:py-8 xs:px-6 xs:shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            { children }
        </div>
    )
}
