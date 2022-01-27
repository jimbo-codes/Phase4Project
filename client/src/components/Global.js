function Global({global}) {
    // add a flash text change based on what the prior value was (the advanced hook)
    if(global.name!=='loading'){
        let coins = global.data.active_cryptocurrencies.toLocaleString("en-US");
        let cap = Math.round(global.data.total_market_cap.usd).toLocaleString("en-US");
        let vol = Math.round(global.data.total_volume.usd).toLocaleString("en-US");    
        let btc = global.data.market_cap_percentage.btc.toFixed(2)
        let eth = global.data.market_cap_percentage.eth.toFixed(2)
        // let time = global.data.updated_at
        // time = Date(time * 1000)
        // console.log(time)
        
      return (
        <nav className="sticky border-t-5 top-5 py-0 z-40 flex justify-center bg-white shadow">
          <ol className=" space-x-4 text-sm">
                <div className="inline-block">
                    <strong>Coins:</strong> {coins}
                </div>
                {/* Set this to x.00 Trillion */}
                <div className="inline-block">
                    <strong>Market Cap:</strong> ${cap}
                </div>
                <div className="inline-block">
                <strong>24H Vol:</strong> ${vol}
                </div>
                <div className="inline-block">
                    <div className="inline-block">
                    <strong>  Dominance: </strong>
                        <div className=" px-2 inline-block">BTC: {btc}% </div>
                        <div className="px- inline-block">ETH {eth}%</div>
                    </div>
                </div>
          </ol>
        </nav>
      )
    }else{
        return(
            <nav className="sticky border-t-2 top-0 z-50 flex justify-center bg-white shadow">LOADING !! </nav>
        )
        }
    }
export default Global