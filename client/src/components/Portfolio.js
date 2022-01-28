import CryptoData from "./CryptoData";
import React,{useEffect} from "react";

function Portfolio({round, portCoins, setPortCoins, name, user }) {
   useEffect(() => {
       if(!!user.id){
        fetch(`http://127.0.0.1:3000/usercoins/${user.id}`)
        .then(r=>r.json())
        .then(data=> {setPortCoins(data);console.log(data)})
        // This returns your users portfolio. Now render it!
        .catch(error=> {
          console.log(error)});
       }else(console.log("New user"))
},[])
  let pindex=0;
//    Figure out how to have "portfolio" scrolling across the top above table.
    return(
        <div className=" mx-auto sm:px-6 lg:px-8 space-y-10 py-8">
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 bg-gray-200">
                {!!portCoins.length?
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        {/* Set the background for your table below */}
                      <table className="min-w-full divide-y divide-gray-200" id="market-table">
                        <thead className="bg-gray-50">
                            <tr className="bg-indigo-600">
                            <th scope="col" className="px-1 py-3 text-left text-xs font-medium text-white uppercase tracking-wider" ></th>
                            <th scope="col" className="px-1 py-3 text-left text-xs font-medium text-white uppercase tracking-wider" ></th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider" >Price</th>
                                <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">24H Change</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Mkt Cap</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Max Supply</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Volume</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Market Cap Rank</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">View</th>
                            </tr>
                        </thead>
                            <tbody>
                                {portCoins.map((coin)=>{    
                                    pindex++
                                    return <CryptoData
                                    setPortCoins={setPortCoins}
                                    portCoins={portCoins}
                                        user={user}
                                        key={coin.id}
                                        round={round}
                                        image={coin.coin_image}
                                        id={coin.id}
                                        name={coin.coin_name}
                                        price1={coin.current_price}
                                        dodChg={coin.price_chg}
                                        mktCap={coin.market_cap}
                                        mktCapRank={coin.market_rank}
                                        maxSupply={coin.max_supply}
                                        volume={coin.volume}
                                        index={pindex}
                                        state={true}
                                    />
                                })}
                            </tbody>
                    </table>
                    </div>
                </div>:null}
            </div>
        </div>
    </div>
    );
}
export default Portfolio;