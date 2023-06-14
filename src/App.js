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
import Payment from "./components/Payment"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise= loadStripe('pk_test_51MCzfVSCUl7TzaqZOwgokhyicYqLFEoxg7eKJ2o5qHOCdqtFpxXbbhXqYyd4T0wtDiVUVh45HRih3q9SBNtep79i001l3cVmDW');


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
          <Route path='/login' element={<Login type="login"/>}/>
          <Route path='/register' element={<Login type="register"/>}/>
          <Route path='/payment' element={[<Header/>,<Elements stripe={promise}><Payment/></Elements> ]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
