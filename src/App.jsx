
import { Suspense } from 'react'
import './App.css'
import Daiusy from './component/daiusy.nav/daiusy'
import NavBar from './component/NavBar/NavBar'
import PricingOption from './component/PricingOption/PricingOption'
import ResultCarts from './component/ResultCarts/ResultCarts'

const pricingPromise = fetch('PricingData.json').then(res => res.json())


function App() {


  return (
    <>

      <header>
        <NavBar></NavBar>
        {/* <Daiusy></Daiusy> */}

      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>


        <ResultCarts></ResultCarts>
      </main>

    </>
  )
}

export default App
