import React from "react";
// import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';

export default function NavBar({auth,name,setAuth, email,setHome,setAbout,home,about}) {
  // nav bar states to display what is active. I feel like tailwind has a built in way to do this, but "active:xyz" wasn't working.

  function fixNav(){
      // this removes the blue underline for our nav bar pages when launching the app.
    setHome(false);
    setAbout(false);
  }

  function handleClickHome(){
    if(home){
        return
    }
    if(about){
        setAbout(!about)
    }    
    setHome(!home)
  }
  function handleClickAbout(){
    if(about){
        return
    }
    if(home){
        setHome(!home)
    }
    setAbout(!about)
  }

function handleLog(e){
setAuth(false)
  // e.preventDefault()
  // This fetch, have it destroy session

    fetch('http://127.0.0.1:3000/logout',{
             method:'DELETE',
             headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            "madeup": "thing"})
    })
    .then(r=>r.json())
    .then((e)=>{console.log(e);setHome(true)})
    .catch(error=> {console.log(error)})
        
  // put in your delete requeset here to clear your user session.
}


// There has to be a more elegant solution for this ^. but as it stands it works.
// the below mobile menu can be deleted / should be tweaked to make sure our app also works on mobile. haven't touched yet.
    return (
    <Disclosure as="nav" className="bg-white shadow mb-0 border-b-2">
      {({ open }) => (
        <>
          <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
            <div className=" flex justify-between h-16">
              <div className="absolute left-2 h-full my-0 flex">
                {/* h-10 to fit for nav bar. */}
                <div className="-ml-2 mr-2 flex items-center">
                  
                  {/* Mobile menu button */}
                  <Disclosure.Button className="hidden inline-flex w-auto items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                <Link onClick={handleLog} to='/crypto-project-p2'>
                  <img
                    className="block lg h-8 w-auto"
                    src="https://i.ibb.co/ykSpvgM/Recolor-BTC.png"
                    alt="Jim-Coin"/>
                  </Link>   
                </div>

                {/*  Move MD:ML if youw anna center this or movve to right etc. */}
                <div className="md:ml-8 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {/* Set your current with onclick prop,  */}
                  
              {/* Once authenticated, should clicking on this dashboard button take you back to the app dashboard or the proj home? */}
                  <Link to="/crypto-project-p2/"
                    onClick={handleClickHome}
                    className={home?"border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}>
                    Home
                  </Link>

                  <Link to='/about'
                    onClick={handleClickAbout}
                    className={about?"border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                  >
                    About
                  </Link>
                </div>
              </div>
              <div className="absolute items-center right-3 mt-3 object-right">
                <div className="right-0 object-right">
                    <Link onClick={fixNav} className="right-px relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" to={auth?'/app':'/user'}>Launch App</Link>
                </div>
              </div>
            </div>
          </div>
          
          <Disclosure.Panel>
            <div className="pt-0 pb-0 lg space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Link to='/crypto-project-p2/'>
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Dashboard
              </Disclosure.Button>
              </Link>
              <Link to='/about'>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                   Team
              </Disclosure.Button>
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  {auth?<img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />:null}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{auth?name:null}</div>
                  <div className="text-sm font-medium text-gray-500">{auth?email:null}</div>
                </div>
                
              </div>
        <div className="mt-3  space-y-1">
            <Disclosure.Button
                  as="a"
                  href="/user"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >{auth?"Sign out":"Sign In"}     
                <button
                  type="button"
                  className="float-right bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            </Disclosure.Button>
        </div>
    </div>
</Disclosure.Panel>
</>
)}
</Disclosure>
)
}