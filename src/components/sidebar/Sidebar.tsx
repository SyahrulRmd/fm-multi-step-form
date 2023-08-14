import BgSidebar from '../../assets/images/bg-sidebar-desktop.svg'
import BgSidebarMob from '../../assets/images/bg-sidebar-mobile.svg'
import { StepItem } from './StepItem'
import { useWindowSize } from "@uidotdev/usehooks";

export const Sidebar = ({ actveStep }: { actveStep: number }) => {
    const size = useWindowSize();

    return (
        <div 
          className='h-[584px] xs:h-[200px] xs:items-start xs:justify-center px-8 py-12 flex flex-col xs:flex-row gap-10 xs:gap-4 rounded-xl xs:rounded-none bg-no-repeat bg-cover xs:col-span-12 col-span-4' 
          style={{ backgroundImage: size.width && size.width >  479 ? `url(${BgSidebar})`: `url(${BgSidebarMob})` }}
        >
          <StepItem isActive={actveStep === 1 ? true : false} stepName='YOUR INFO' no={1} />
          <StepItem isActive={actveStep === 2 ? true : false} stepName='SELECT PLAN' no={2} />
          <StepItem isActive={actveStep === 3 ? true : false} stepName='ADD-ONS' no={3} />
          <StepItem isActive={actveStep === 4 ? true : false} stepName='SUMMARY' no={4} />
        </div>    
    )
}
