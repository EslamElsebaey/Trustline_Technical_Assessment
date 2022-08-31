import './App.css';
import Data from "./Components/Data"
import Singlepage from "./Components/Singlepage"
import ParentComponent from "./Components/ParentComponent"
import { Routes , Route  } from "react-router-dom"



function App() {
  return (
    <>
     <Routes>
     <Route path="/" element={<ParentComponent/>}/>
      <Route path="parentcomponent" element={<ParentComponent/>}/>
      <Route path="data" element={<Data/>}/>
      <Route path="singlepage/:itemId"  element={ <Singlepage/>  } />
    </Routes>
   
   
   
    
   
    </>
  );
}

export default App;
