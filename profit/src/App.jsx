import Table from "./components/table"
import Values from "./components/values"
import { MainContextProvider } from "./context/mainContext"

function App() {

  return (
    <MainContextProvider>
    <div className=" flex flex-col h-screen p-7 items-center ">
     <Values/>
     <Table/>
    </div>
    </MainContextProvider>
  )
}

export default App
