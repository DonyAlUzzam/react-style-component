import React from 'react'
import {homeObjFour} from './Data'
import { InfoSection } from '../../components'
import Pricing from '../../components/Pricing/Pricing'

const Services = () => {
    return (
        <>
         <Pricing />
         <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Services
