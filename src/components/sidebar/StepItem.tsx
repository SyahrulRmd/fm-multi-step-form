export const StepItem = ({ isActive, stepName, no }: { isActive: boolean, stepName: string, no: number }) => {
    return (
        <div className='flex gap-6'>
            <div className={`p-2 w-11 h-11 flex rounded-full transition-all ${isActive ? 'bg-light-blue text-marine-blue' : 'border-white border-solid border text-white' }`}>
                <span className='leading-none m-auto font-semibold'>{no}</span>
            </div>
            <div className="xs:hidden">
                <p className='text-light-gray text-sm'>STEP {no}</p>
                <h2 className='text-white font-semibold tracking-wider'>{stepName}</h2>
            </div>
        </div>
    )
}
