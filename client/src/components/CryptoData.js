import { Link } from 'react-router-dom';
import React,{useState} from "react";

function CryptoData({name, state, portCoins, setPortCoins, user, price1 ,dodChg, mktCap, mktCapRank, id, maxSupply, volume, index, image, round}) {
// formatting numbers.
let tableMaxSupply
let tableMarketCap
// console.log(state)
  // if(!state){
    const [coin, setCoin] = useState('');
    const [price, setPrice] = useState(price1);
  // enter into here for all NON portfolios
//   if(price){
//     setPrice(round(price))
//     setPrice(price.toLocaleString("en-US"))
// // THIS CODE IS CAUSING PROBLEMS -- it causes NAN when rendering the coin for the first time.
//   }

// You do THIS for all the portfolio ones that you've already rendered
// }else{
  // console.log(price)
  // console.log(id)
      // console.log(typeof(price))
  // }

if(mktCap){
  tableMarketCap = mktCap.toLocaleString("en-US");
}
if(volume){
  volume = volume.toLocaleString('en-US');
}
if(dodChg){
  dodChg = Number(dodChg).toFixed(2)
}
// console.log(price)
if(maxSupply){
    tableMaxSupply = Math.round(maxSupply)
    tableMaxSupply = maxSupply.toLocaleString("en-US")
}

function handleClick2(){
  console.log(id)
  fetch(`http://127.0.0.1:3000/coins/${id}`)
  .then(r=>r.json())
  .then(e=>{
    return fetch(`https://api.coingecko.com/api/v3/coins/${e.coin_id}`)
  })
  .then(r=>r.json())
  .then(data=>{
    let info = { id: data.id, price: data.market_data.current_price.usd, dodChg: data.market_data.price_change_24h, market_cap: data.market_data.market_cap.usd}
    return fetch(`http://127.0.0.1:3000/coins/${coin.id}`,{
      method:'PATCH',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
     info
    })
  })
    
  })
  .then(r=>r.json())
  .then(e=>{
    // setEmail(e)
    console.log(e)
    setPrice(e.current_price)
    dodChg = e.price_chg
    tableMarketCap = e.market_cap
  })
// price
// 
}

function handleClick(e){
  // console.log(e)
    if(portCoins.filter(e=> e.coin_name === name).length === 0){
      let coin = {id: id, coin_image: image, coin_name: name, current_price: Number(price), price_chg: Number(dodChg), market_cap: mktCap, max_supply: maxSupply, volume: volume, market_rank: Number(mktCapRank)}
      if(isNaN(price)){
        fetch(`http://127.0.0.1:3000/coins/${coin.id}`)
        .then(r=>r.json())
        .then(e => {coin.price = e.current_price;console.log(e);console.log(coin.price)})
      }
      
      setPortCoins([...portCoins,coin])
      fetch('http://127.0.0.1:3000/usercoins',{
               method:'POST',
               headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: id,
                user: user
              })
      })
      .then(r=>r.json())
      .then(d=>{ })
    }else{
    setPortCoins(portCoins.filter(c=>c.coin_name !== name))
      fetch(`http://127.0.0.1:3000/usercoins/${id}`,{
               method:'DELETE',
               headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
      })
        .then(r=>r.json())
        .then(d=>console.log(d))
    }
}
return (      
    <tr className="hover:bg-white">
      <td className="px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      <button onClick={handleClick}>{portCoins?portCoins.filter(e=> e.coin_name === name).length === 0?
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        :
        null}
      </button>
      </td>
      <td className="px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index?`${index}.`:""}</td>
      <td className="px-0 py-4 whitespace-nowrap text-sm font-medium text-blue-600 underline"><img className="float-left w-6 pr-1" src={image} alt={name}/><Link to={`/app/${id}`} onClick={()=>{window.scrollTo(0, 0)}}>{name}</Link></td>
      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${coin?`${price}heyo`:price}</td>
      {/* conditional formatting based on the band of price, ex how many decimals to show. */}
      {dodChg<0?<td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900" style={{color: "red",}}> {dodChg}%</td>:<td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900" style={{color: 'green'}}>{dodChg}%</td>}
      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${tableMarketCap}</td>
      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">{maxSupply?tableMaxSupply:"N/A"}</td>
      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${volume}</td>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">{mktCapRank}</td>
      <td><button onClick={handleClick2} className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button></td>
    {/* onClick={()=>{window.scrollTo(0, 0)}} */}
    </tr>
  );
}
    
export default CryptoData;
