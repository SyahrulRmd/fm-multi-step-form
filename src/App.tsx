import { useState } from 'react';
import './App.css';

import { Sidebar } from './components/sidebar';
import { AddOnsForm, InfoForm, SelectPlanForm } from './components/steps';
import { Summary } from './components/steps/Summary';
import { addOnsData } from './data/addonsData';
import { Confirmed } from './components/steps/Confirmed';
import { planData } from './data/planData';

export interface IPersonalInfo {
  name: string 
  email: string 
  phone: string
}

function App() {
  const [step, setStep] = useState<number>(1)
  const navigateStep = (stepNav: number) => {
    setStep(stepNav)
  }

  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>()
  const savePersonalInfo = (personalInfoArg: IPersonalInfo) => {
    setPersonalInfo(personalInfoArg)
  } 

  const [selectedPlan, setSelectedPlan] = useState<typeof planData[0]>()
  const onSelectPlan = (planArg: typeof planData[0]) => {
    setSelectedPlan(planArg)
  }  

  const [billingTime, setbillingTime] = useState<'monthly' | 'yearly'>('monthly')
  const toggleBillingTime = () => {
    const temp = billingTime === 'monthly' ? 'yearly' : 'monthly'
    setbillingTime(temp)
  }

  const [selectedAddons, setSelectedAddons] = useState<typeof addOnsData>([])
  const onSelectAddon = (addon: typeof addOnsData[0]) => {
    if (!selectedAddons.includes(addon)) {
      setSelectedAddons([...selectedAddons, addon])
    } else {
      const idx = selectedAddons.indexOf(addon)
      selectedAddons.splice(idx, 1)
      setSelectedAddons([...selectedAddons])
    }
  }

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false)
  const onConfirm = () => {
    setIsConfirmed(true)
  }

  return (
    <div className='bg-magnolia h-screen grid place-items-center xs:place-items-start'>
      <div className='container mx-auto sm:my-auto'>
        <div className='bg-white xs:bg-transparent xs:shadow-none p-4 xs:p-0 mx-auto max-w-[928px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] grid grid-cols-12 gap-1'>
          <Sidebar actveStep={step} />
          {step === 1 ? (
            <InfoForm 
              navigateStep={navigateStep} 
              savePersonalInfo={savePersonalInfo} 
              personalInfo={personalInfo} 
            />
          ) : step === 2 ? (
            <SelectPlanForm 
              navigateStep={navigateStep} 
              billingTime={billingTime} 
              toggleBillingTime={toggleBillingTime} 
              selectedPlan={selectedPlan} 
              onSelectPlan={onSelectPlan} 
            />
          ) : step === 3 ? (
            <AddOnsForm 
              navigateStep={navigateStep} 
              billingTime={billingTime} 
              onSelectAddon={onSelectAddon} 
              selectedAddons={selectedAddons} 
            />
          ) : step === 4 && (
            isConfirmed ? (
              <Confirmed />
            ) : (
              <Summary 
                navigateStep={navigateStep} 
                billingTime={billingTime} 
                selectedAddons={selectedAddons} 
                onConfirm={onConfirm}
                selectedPlan={selectedPlan}
              />
            )
          )}
        </div>

      </div>
    </div>
  )
}

export default App
