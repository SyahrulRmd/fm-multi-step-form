import { useEffect, useState } from 'react';
import { planData } from '../../data/planData';
import { Header } from '../header/Headers';
import { ContentWrapper, MainPaper } from '../layouts';

const PlanCard = (props: { name: string, price: string, imgUrl: string, onClick: () => void, isSelected: boolean, bonus: string }) => {
    return (
        <div onClick={props.onClick} className={`col-span-2 xs:col-span-6 rounded-xl border transition-all hover:border-purplish-blue cursor-pointer ${props.isSelected ? 'border-purplish-blue bg-alabaster' : ' border-light-gray'}`}>
            <div className="flex flex-col xs:flex-row justify-between xs:justify-start p-5 xs:p-3 xs:items-center gap-8 xs:gap-4">
                <div className="">
                    <img src={props.imgUrl} alt="" className="" />
                </div>
                <div className="xs:flex-grow">
                    <h2 className="text-marine-blue">{props.name}</h2>
                    <div className="xs:flex justify-between">
                        <p className="text-cool-gray ">{props.price}</p>
                        {!!props.bonus && (
                            <p className="text-marine-blue text-xs mt-2 xs:m-0">{props.bonus}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SelectPlanForm = ({ 
    navigateStep, toggleBillingTime, billingTime, onSelectPlan, selectedPlan
}: {
    navigateStep: (stepNav: number) => void
    toggleBillingTime: () => void, billingTime: 'monthly' | 'yearly'
    onSelectPlan: (planArg: typeof planData[0]) => void
    selectedPlan?: typeof planData[0]
}) => {
    const [isPlanEmpty, setIsPlanEmpty] = useState<boolean>(false)
    const nextStep = () => {
        if (!selectedPlan) {
            setIsPlanEmpty(true)
        } else {
            setIsPlanEmpty(false)
            navigateStep(3)
        }
    }

    useEffect(() => {
        if (selectedPlan) {
            setIsPlanEmpty(false)
        }
    }, [selectedPlan])

    return (
        <ContentWrapper>
            <MainPaper>
                <Header 
                    title="Select your plan" 
                    description="You have the option of monthly or yearly billing."
                />
                <div>
                    <p className={`mb-2 text-red-600 ${isPlanEmpty ? '' : 'hidden'}`}>
                        Please select the plan first
                    </p>
                    <div className="grid grid-cols-6 gap-6 xs:gap-4">
                        {planData.map((plan, key) => (
                            <PlanCard 
                                key={key}
                                name={plan.name}
                                price={`$${plan[billingTime].price}/${billingTime === 'monthly' ? 'mo' : 'yr'}`} 
                                imgUrl={plan.imgUrl} 
                                onClick={() => onSelectPlan(plan)}
                                isSelected={selectedPlan === plan ? true : false}
                                bonus={billingTime === 'yearly' ? plan.yearly.bonus : ''}
                            />
                        ))}
                    </div>
                </div>
                <div className="bg-magnolia rounded-xl flex gap-6 justify-center items-center p-4">
                    <div>
                        <span className={`${billingTime === 'yearly' ? 'text-cool-gray' : 'text-marine-blue'}`}>Monthly</span>
                    </div>
                    <div>
                        <div 
                            onClick={toggleBillingTime} 
                            className={`flex rounded-full w-12 p-1 bg-marine-blue cursor-pointer`}
                        >
                            <div className={`rounded-full transition-all will-change-transform w-4 h-4 bg-white ${billingTime === 'monthly' ? 'translate-x-0' : 'translate-x-6'}`} />
                        </div>
                    </div>
                    <div>
                        <span className={`${billingTime === 'monthly' ? 'text-cool-gray' : 'text-marine-blue'}`}>Yearly</span>
                    </div>
                </div>
            </MainPaper>
            <div className="flex justify-between xs:p-4">
                <div className=''>
                    <button onClick={() => navigateStep(1)} className='text-cool-gray hover:bg-magnolia transition-all rounded-xl px-6 py-3'>Go Back</button>
                </div>
                <div className='ml-auto'>
                    <button onClick={nextStep} className='bg-marine-blue hover:bg-marine-blue/95 transition-all rounded-xl px-6 py-3 text-white'>Next Step</button>
                </div>
            </div>
        </ContentWrapper>
    )
}
