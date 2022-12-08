// import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "./output.css"
import Login from "./components/Login"
import { useEffect } from "react"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"

function App() {

  const [{cart,user},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }
      else{
        dispatch({
          type: 'SET_USER',
          user:null
        })

      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={[<Header/>,<Home/>]}/>
          <Route path='checkout' element={[<Header/>,<Checkout/>]}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
