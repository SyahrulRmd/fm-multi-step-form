import { useState } from 'react';

import { IPersonalInfo } from '../../App';
import { Header } from '../header/Headers';
import { InputField } from '../input';
import { ContentWrapper, MainPaper } from '../layouts';

export const InfoForm = ({ 
    navigateStep, savePersonalInfo, personalInfo
}: {
    navigateStep: (stepNav: number) => void,
    savePersonalInfo: (personalInfoArg: IPersonalInfo) => void
    personalInfo: IPersonalInfo | undefined
}) => {
    const [errorState, setErrorState] = useState({
        name: false,
        email: false,
        phone: false
    })
    const [nameVal, setNameVal] = useState(personalInfo?.name ?? '')
    const [emailVal, setEmailVal] = useState(personalInfo?.email ?? '')
    const [phoneVal, setPhoneVal] = useState(personalInfo?.phone ?? '')

    const onNextStep = () => {
        let tempError = {...errorState}
        
        if (!nameVal) {
            tempError = {
                ...tempError,
                name: true
            }
        } else {
            tempError = {
                ...tempError,
                name: false
            }
        }
        if (!emailVal) {
            tempError = {
                ...tempError,
                email: true
            }
        } else {
            tempError = {
                ...tempError,
                email: false
            }        }
        if (!phoneVal) {
            tempError = {
                ...tempError,
                phone: true
            }
        } else {
            tempError = {
                ...tempError,
                phone: false
            }
        }

        setErrorState(tempError)        

        if (!!nameVal && !!emailVal && !!phoneVal) {
            navigateStep(2)
            const infoData: IPersonalInfo = {
                name: nameVal,
                email: emailVal,
                phone: phoneVal
            }

            savePersonalInfo(infoData)
        }
    }    
    
    return (
        <ContentWrapper>
            <MainPaper>
                <Header 
                        title="Personal Info" 
                        description="Please provide your name, email address, and phone number."
                    />
                    <div className='flex flex-col gap-6'>
                        <InputField
                            label='Name'
                            id='name'
                            placeholder='e.g. Stephen King'
                            onChange={e => setNameVal(e.target.value)}
                            isError={errorState['name']}
                            defaultValue={personalInfo?.name}
                        />
                        <InputField
                            label='Email Address'
                            id='email'
                            placeholder='e.g. stephenking@lorem.com'
                            type='email'
                            onChange={e => setEmailVal(e.target.value)}
                            isError={errorState['email']}
                            defaultValue={personalInfo?.email}
                        />
                        <InputField
                            label='Phone Number'
                            id='phone'
                            placeholder='e.g. +1 234 567 890'
                            onChange={e => setPhoneVal(e.target.value)}
                            isError={errorState['phone']}
                            defaultValue={personalInfo?.phone}
                        />
                    </div>
            </MainPaper>               
            <div className='ml-auto xs:p-4'>
                <button onClick={onNextStep} className='bg-marine-blue hover:bg-marine-blue/95 transition-all rounded-xl px-6 py-3 text-white'>Next Step</button>
            </div>
        </ContentWrapper>
    )
}
