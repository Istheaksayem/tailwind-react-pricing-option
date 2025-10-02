
import { Suspense } from 'react'
import './App.css'
import Daiusy from './component/daiusy.nav/daiusy'
import NavBar from './component/NavBar/NavBar'
import PricingOption from './component/PricingOption/PricingOption'
import ResultCarts from './component/ResultCarts/ResultCarts'
import axios from 'axios'
import MarksChart from './component/MarksChart/MarksChart'

const pricingPromise = fetch('PricingData.json').then(res => res.json())
const marksPromise =axios.get('marksData.json')


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
        <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
          <MarksChart  marksPromise={ marksPromise}></MarksChart>
        </Suspense>


        <ResultCarts></ResultCarts>
      </main>

    </>
  )
}

export default App
