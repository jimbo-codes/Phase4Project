// child of the Dashboard, Should be displayed as tiles/cards of the top things to look at
// at the top of the dashboard.

// This will require figuring out some historical data in order to compare DoD changes.
// will dig thru api docs.
import React from "react";

function TopMovers({trend, btc, round}) {
  // put this before table, but below the other cards  
  if(trend[0]!=='loading'){
    let coins = trend.coins;
    
    // console.log(btc)

    return (      
    
    <dl className="mt-5 mx-2 grid grid-cols-1 gap-5  sm:grid-cols-7">
      {/* MAP IT HERE */}
      {coins.map((coin, index) => (
        <div key={coin.item.id} className="px-4 py-5 bg-white border-2 border-indigo-500 text-center rounded-lg overflow-hidden sm:p-4">
          <dt className="text-sm font-medium text-center text-gray-500 truncate">#{index+1} Most Searched</dt>
          <div className='inline-block text-center'>
            <div className='inline-block text-center content-center'>
              <dd className="mt-1 text-sm font-semibold content-center text-center text-gray-900"><img className="float-left w-6 pr-1" src={coin.item.small} alt={coin.item.name}/>{coin.item.name}</dd>
              <dd className="mt-1 ml-6 text-sm font-semibold text-center text-gray-900">${round(coin.item.price_btc*btc)}</dd>
            </div>
            </div>
        </div> 
      ))} 
    </dl>

    );
  } else{
    console.log('loading')
    return(
      <div>loading</div>
    )
  }
}
export default TopMovers;