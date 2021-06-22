import Head from 'next/head'
import InstituteNav from '../components/instituecards/institutenav'
import WhyBeauty from '../components/instituecards/whybeauty'
import WhyChooseBeauty from '../components/instituecards/whychoosebeauty'

export default function WhyUs(){

    return (
        <div>
          
            <InstituteNav />
            <WhyBeauty />
            <WhyChooseBeauty />
            </div>
           
    )
}