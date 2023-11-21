'use client'

import Cards from "./components/cards/cards"
import Picwall from "./components/picwall/picwall"
import Slider from "./components/slider/slider"
import Table from "./components/table/table"
export default function Pictures(): JSX.Element {
  return (
    <>
      <Slider />
      <Cards />
      <Picwall />
      <Table />
    </>
    
  )
}
