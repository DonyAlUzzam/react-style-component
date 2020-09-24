import React from 'react'
import {homeObjTwo, homeObjThree, homeObjFour} from './Data'
import { InfoSection } from '../../components'
import Pricing from '../../components/Pricing/Pricing'

const Product = () => {
    return (
        <>
         <InfoSection {...homeObjTwo}/>
         <InfoSection {...homeObjThree}/>
         <Pricing />
         <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Product
