import ThankyouIcon from '../../assets/images/icon-thank-you.svg';

export const Confirmed = () => {
    return (
        <div className='col-span-8 flex flex-col xs:col-span-12 justify-center px-14 xs:p-0 xs:my-0'>
            <div className='flex flex-col gap-4 items-center xs:gap-6 xs:bg-white xs:-my-20 xs:rounded-xl xs:mx-4 xs:py-8 xs:px-6 xs:shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                <div>
                    <img src={ThankyouIcon} />
                </div>
                <h1 className='text-2xl text-marine-blue font-bold'>Thank you!</h1>
                <p className="text-cool-gray text-center">
                    Thanks for confirming your subscription! We hope yo hve fun using our platform.
                    If you ever need support, please feel free to email us at support@loremgaming.com
                </p>
            </div>
        </div>
    )
}
