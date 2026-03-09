
import Map from "./Map/Map"
import DrawerUI from "./components/DrawerUI"
import { Provider } from "./components/ui/provider"

function App() {
  return (
<Provider>
  <DrawerUI/>
    <Map />
</Provider>
  )
}

export default App
