
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import CreateNote from './Components/CreateNote'
import { ProviderContext } from './Components/Context/NoteContext'
import EditNote from './EditNote'

function App() {
 

  return (
    <>
   <ProviderContext>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/createNote' element={<CreateNote/>}/> 
        <Route path='/edit/:id' element={<CreateNote/>} />  {/* its a dynamic router */}
      </Routes>
    </Router>
    </ProviderContext>  
    </>
  )
}

export default App
