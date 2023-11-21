import Bcg from "./components/bcg/bcg";
import Gallery from "./components/gallery/gallery";
import Slider from "./components/slider/slider";
import Table from "./components/table/table";
import Table2 from "./components/table2/table2";
import Table3 from "./components/table3/table3";
export default function Artists(): JSX.Element {
  return (
    <>
      <Table />
      <Table2 />
      <Bcg />
      <Table3 />
      <Gallery />
      <Slider />
    </>
    
  )
}
