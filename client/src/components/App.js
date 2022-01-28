import '../App.css';
import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import ProductHome from './ProductHome';
import User from './User';
import CryptoPage from './CryptoPage';
import Global from './Global';
import CreateUser from './CreateUser';
import Teaser from './Teaser'

function App() {
const [auth, setAuth] = useState(false);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [home, setHome] = useState(true);
const [about, setAbout] = useState(false);
const [table, setTable] = useState([]);
const [global, setGlobal] = useState({name:'loading'});
const [trend, setTrend] = useState(['loading']);
const [log, setLog] = useState(true)
const [user, setUser] = useState("")
const [btc, setBtc] = useState(1)

useEffect(() => {
  fetch('http://127.0.0.1:3000/coins')
  .then(r=>r.json())
  // Here you should have a "checker" to see time vs. last update, if the curr time is >
  // Then run a patch to update the Price, volume and supply
  .then(data=> {
    setTable(data);console.log(data)
    if(data[0].coin_id==='bitcoin')
    setBtc(data[0].current_price)
  })
  .catch(error=> {
    console.log(error)})
},[])

useEffect(() => {
  fetch("http://127.0.0.1:3000/me").then((response) => {
    if (response.ok) {
      response.json().then((user) => {setUser(user);console.log(user)});
    }
  });
}, []);

useEffect(() => {
  fetch('https://api.coingecko.com/api/v3/global')
  .then(r=>r.json())
  .then(data=> {setGlobal(data)})
  .catch(error=> {
    console.log(error)})
},[])

useEffect(() => {
  fetch('https://api.coingecko.com/api/v3/search/trending')
  .then(r=>r.json())
  .then(data=> {setTrend(data)})
  .catch(error=> {
    console.log(error)})
},[])

return (
 <Router>
   <div className='sticky top-0 z-50'>
      <NavBar className='' setLog={setLog} log={log} setAuth={setAuth} auth={auth} name={name} email={email} setAbout={setAbout} about={about} home={home} setHome={setHome}/>
      <div className='z-50'>
    {auth?<Global global={global}/>:null}
  </div>
  </div>
 
    <Routes>  
      {/* Bottom level application with all core functionality */}
      <Route path="app/*" element={<CryptoPage btc={btc}name={name}user={user}trend={trend} global={global} table={table}/>}/>

      <Route path="user/create" element={<CreateUser setUser={setUser}setLog={setLog} log={log} auth={auth}name={name} setName={setName} email={email} setEmail={setEmail} setAuth={setAuth}/>}/>

      {/* This is the user input form */}
      <Route path="user/*" element={<User setLog={setLog} setUser={setUser}log={log} name={name} auth={auth} setName={setName} email={email} setEmail={setEmail} setAuth={setAuth}/>}/>

      {/* This is the about page */}
      <Route path='about' element={<About/>}/>

      <Route path='teaser' element={<Teaser/>}/>    
      
      {/* This is our "homepage"*/}

      {/* Your app is currently not rendering b/c the path isnt blank here. this is for */}
        <Route path="crypto-project-p2" element={<ProductHome home={home} about={about} setHome={setHome} setAbout={setAbout}/>}/>
      </Routes>
      {/* Routes replaces Switch in react-router-dom v6. */}
  </Router>  
  );
}
export default App;
