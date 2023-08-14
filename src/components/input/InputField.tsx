import { forwardRef, InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    isError: boolean
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={props.id} className='text-marine-blue'>
                { props.label } 
                <span className={`float-right text-red-600 ${props.isError ? '' : 'hidden'}`}>
                    This field is required
                </span>
            </label>
            <input
                id={props.id}
                name={props.id}
                className={`
                    w-full appearance-none items-center justify-center rounded-lg px-5 py-4 leading-none outline-none 
                    bg-transparent focus:ring-inset ring-1 ring-inset   
                    ${props.isError ? 
                        'hover:ring-red-600 focus:ring-red-600 ring-red-600' 
                        : 
                        'ring-cool-gray hover:ring-marine-blue focus:ring-marine-blue'
                    }
                `}
                placeholder={props.placeholder}
                onChange={props.onChange}
                type={props.type ? props.type : 'text'}
                defaultValue={props.defaultValue ?? ''}
            />
        </div>
    )
})
