// import { info } from "autoprefixer";
import React, { useEffect } from "react";
import {useParams, useLocation } from "react-router";

function ProjectDetail({ detail,setDetail}) {

    // Declare variables
    let { pathname } = useLocation();
    const BASE_URL = 'https://api.coingecko.com/api/v3/coins'
    const params = useParams();

    // Convert Numbers to have commas 

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Helper function to create smaller data object

    function createObj(data) {
    // console.log(data)
        let info = {};
        // let image = data.image.small

        // Market 
        console.log(data)
        info['Name'] = data.name;
        let price = data.market_data.current_price.usd
        if(price>100){
        info['Price'] = price.toLocaleString('en-US');
         }else if(price>2){
            info['Price'] = price.toFixed(2);
         }else if(price===1){
            info['Price'] = price.toFixed(2);
         }
         else{
            info['Price'] = price.toFixed(6);
         }
        info['WoW Price Change'] = `${data.market_data.price_change_percentage_7d.toFixed(1)}`;

        // Social

        info['Twitter Followers'] = numberWithCommas(data.community_data.twitter_followers);
        info['Reddit Subscribers'] = numberWithCommas(data.community_data.reddit_subscribers);
        // info['48h Reddit Active Posts'] = data.community_data.reddit_average_posts_48h.toFixed(1);
        info['48h Reddit Active Accounts'] = numberWithCommas(data.community_data.reddit_accounts_active_48h);

        // Dev

        info['GitHub Subs'] = numberWithCommas(data.developer_data.subscribers);
        info['GitHub Forks'] = numberWithCommas(data.developer_data.forks);
        // info['GitHub Stars'] = data.developer_data.stars;
        info['GitHub Commits'] = numberWithCommas(data.developer_data.commit_count_4_weeks);

        const result = Object.keys(info).map((key) => ({name: key, stat: info[key]}));

        return result;

    }

    // Fetch data on component Render
    useEffect(() => {
        fetch(`${BASE_URL}/${params.id}`)
        .then(resp => resp.json())
        .then(data => {
            const projectInfo = createObj(data);
            setDetail(projectInfo);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    // JSX to display

    return (

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Project Details</h3>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {detail.map((item) => (
                <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900" style={item.name==='WoW Price Change'?item.stat<0?{color: "red",}:{color: 'green'}:{color: 'black'}}>{item.name==='WoW Price Change'?item.stat+'%':item.stat}</dd>
                </div>
        ))}
        </dl>
        </div>
    </div> 
    )
}

export default ProjectDetail;