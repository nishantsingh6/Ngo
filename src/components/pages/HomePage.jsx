import React from 'react'
import Herosection from './Herosection'
import Introduction from './Introduction'
import Mission from './Mission'
import OurWork from './Ourwork'
import FuturePlans from './FuturePlans'
import WhoCanSupportUs from './WhoCanSupportUs'
import Fund from './Fund'
import Contact from '../common/Contact'
import Conclusion from './Conclusion'

const HomePage = () => {
  return (
    <div>
        <Herosection/>
        <Introduction />
        <Mission />
        <OurWork />
        <FuturePlans />
        <WhoCanSupportUs />
        <Fund />
        <Contact />
        <Conclusion />
    </div>
  )
}

export default HomePage