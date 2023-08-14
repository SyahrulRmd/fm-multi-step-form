export const Header = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className=''>
            <h1 className='mb-3 text-marine-blue text-3xl font-bold'>{ title }</h1>
            <p className="text-cool-gray">{ description }</p>
        </div>
    )
}
