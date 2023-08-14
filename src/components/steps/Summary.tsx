import { addOnsData } from "../../data/addonsData"
import { planData } from "../../data/planData"
import { Header } from "../header"
import { ContentWrapper, MainPaper } from "../layouts"

export const Summary = ({ 
    navigateStep, billingTime, selectedAddons, onConfirm, selectedPlan
}: {
    navigateStep: (stepNav: number) => void, 
    billingTime: 'monthly' | 'yearly',
    selectedAddons: (typeof addOnsData),
    onConfirm: () => void
    selectedPlan?: typeof planData[0]
}) => {
    return (
        <ContentWrapper>
            <MainPaper>
                <Header 
                    title="Finishing up" 
                    description="Double-check everything looks OK before confirming."
                />
                <div className="">
                    <div className="bg-alabaster rounded-xl p-6 flex flex-col gap-6 mb-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-marine-blue font-semibold">{selectedPlan?.name} ({ `${billingTime.substring(0,1).toUpperCase()}${billingTime.substring(1)}` })</h2>
                                <span onClick={() => navigateStep(2)} className="text-cool-gray underline cursor-pointer hover:text-purplish-blue transition-all">Change</span>
                            </div>
                            <div>
                                <h2 className="text-marine-blue font-bold">{`$${selectedPlan && selectedPlan[billingTime].price}/${billingTime === 'monthly' ? 'mo' : 'yr'}`}</h2>
                            </div>
                        </div>
                        <hr />
                        <div className="flex flex-col gap-4">
                            {selectedAddons.length > 0 && selectedAddons.map((addOn, key) => (
                                <div className="flex justify-between" key={key}>
                                    <p className="text-cool-gray">{addOn.name}</p>
                                    <p className="text-marine-blue">{`+$${addOn[billingTime].price}/${billingTime === 'monthly' ? 'mo' : 'yr'}`}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between px-6">
                        <p className="text-cool-gray">Total (per {`${billingTime.substring(0,1).toUpperCase()}${billingTime.substring(1)}`})</p>
                        <h2 className="text-purplish-blue text-xl font-bold">{selectedPlan ? calculateTotal(selectedAddons, selectedPlan[billingTime].price, billingTime) : ''}</h2>
                    </div>
                </div>
            </MainPaper>
            <div className="flex justify-between xs:p-4">
                <div className=''>
                    <button onClick={() => navigateStep(3)} className='text-cool-gray hover:bg-magnolia transition-all rounded-xl px-6 py-3'>Go Back</button>
                </div>
                <div className='ml-auto'>
                    <button onClick={onConfirm} className='bg-purplish-blue hover:bg-purplish-blue/95 transition-all rounded-xl px-6 py-3 text-white'>Confirm</button>
                </div>
            </div>
        </ContentWrapper>
    )
}


function calculateTotal(selectedAddons: (typeof addOnsData), billingPrice: string, billingTime: 'monthly' | 'yearly') {
    let total = 0
    selectedAddons.forEach(addOn => {
        const price = addOn[billingTime].price
        total += parseInt(price)        
    })
    total += parseInt(billingPrice)
    
    return `$${total}/${billingTime === 'monthly' ? 'mo': 'yr'}`
}