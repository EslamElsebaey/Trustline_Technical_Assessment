import React , {useEffect} from 'react'
import Header from "./Header"
import WhyTrustLine from "./WhyTrustLine"
import ServicesSolutions from "./Services&Solutions"
import Ourteam from "./Ourteam"
import Clients from "./Clients"
import News from "./News"
import MyFooter from "./MyFooter"

export default function ParentComponent() {

  useEffect(() => {
    document.body.style.direction = "rtl"
   
  }, []);
    
  return (
    <>
     <Header/>
    <WhyTrustLine/>
    <ServicesSolutions/>
    <Ourteam/>
    <Clients/>
    <News/>
    <MyFooter/>
    </>
   
  )
}
