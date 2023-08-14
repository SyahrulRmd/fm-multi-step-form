import ArcadeImg from '../assets/images/icon-arcade.svg'
import AdvancedImg from '../assets/images/icon-advanced.svg'
import ProImg from '../assets/images/icon-pro.svg'

export const planData = [
    {
        id: '1',
        name: "Arcade",
        imgUrl: ArcadeImg,
        monthly: {
            price: "9"
        },
        yearly: {
            price: '90',
            bonus: '2 months free'
        }
    },
    {
        id: '2',
        name: "Advanced",
        imgUrl: AdvancedImg,
        monthly: {
            price: "12"
        },
        yearly: {
            price: '120',
            bonus: '2 months free'
        }
    },
    {
        id: '3',
        name: "Pro",
        imgUrl: ProImg,
        monthly: {
            price: "15"
        },
        yearly: {
            price: '150',
            bonus: '2 months free'
        }
    }
]
