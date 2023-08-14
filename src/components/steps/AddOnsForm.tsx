import CheckMark from '../../assets/images/icon-checkmark.svg';
import { addOnsData } from '../../data/addonsData';
import { Header } from '../header';
import { ContentWrapper, MainPaper } from '../layouts';

const AddonCard = (props: { name: string, description: string, price: string, isSelected: boolean, onClick: () => void }) => {
    return (
        <div onClick={props.onClick} className={`cursor-pointer border p-4 flex justify-between rounded-xl items-center ${props.isSelected ? 'border-purplish-blue bg-alabaster' : 'border-light-gray'}`}>
            <div className="flex gap-6 items-center">
                <div className={`w-5 h-5 rounded flex justify-center items-center ${props.isSelected ? 'bg-purplish-blue' : 'border border-cool-grays'}`}>
                    {props.isSelected && (
                        <img src={CheckMark} />
                    )}
                </div>
                <div className="select-none">
                    <h2 className="font-semibold text-marine-blue">{props.name}</h2>
                    <p className="text-cool-gray">{props.description}</p>
                </div>
            </div>
            <div className="">
                <p className="text-purplish-blue">{props.price}</p>
            </div>
        </div>
    )
}

export const AddOnsForm = ({ 
    navigateStep, billingTime, onSelectAddon, selectedAddons
}: {
    navigateStep: (stepNav: number) => void, 
    billingTime: 'monthly' | 'yearly',
    onSelectAddon: (addon: (typeof addOnsData)[0]) => void
    selectedAddons: (typeof addOnsData)
}) => {
    return (
        <ContentWrapper>
            <MainPaper>
                <Header 
                    title="Pick add-ons" 
                    description="Add-ons help enhance your gaming experience."
                />
                <div className="flex flex-col gap-4">
                    {addOnsData.map((addOn, key) => (
                        <AddonCard
                            key={key}
                            name={addOn.name}
                            description={addOn.description}
                            price={`+$${addOn[billingTime].price}/${billingTime === 'monthly' ? 'mo' : 'yr'}`}
                            isSelected={selectedAddons.includes(addOn)}
                            onClick={() => onSelectAddon(addOn)}
                        />
                    ))}
                </div>
            </MainPaper>
            <div className="flex justify-between xs:p-4">
                <div className=''>
                    <button onClick={() => navigateStep(2)} className='text-cool-gray hover:bg-magnolia transition-all rounded-xl px-6 py-3'>Go Back</button>
                </div>
                <div className='ml-auto'>
                    <button onClick={() => navigateStep(4)} className='bg-marine-blue hover:bg-marine-blue/95 transition-all rounded-xl px-6 py-3 text-white'>Next Step</button>
                </div>
            </div>
        </ContentWrapper>
    )
}
