import Top from "./components/top/top"
import Nearby from "./components/nearby/nearby"
import Sign from "./components/sign/sign"
import Genre from "./components/genre/genre"

export default function Popular(): JSX.Element {
  return (
    <main>
      <Top />
      <Nearby />
      <Sign />
      <Genre />
    </main>
  )
}
