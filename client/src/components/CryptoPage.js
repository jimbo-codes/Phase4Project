import React,{useState, useCallback} from "react";
import SearchBar from "./SearchBar";
import ProjectDetail from "./ProjectDetail";
import CryptoList from './CryptoList';
import { Route, Routes } from "react-router";
import TopMovers from "./TopMovers";
import Portfolio from './Portfolio';

function CryptoPage({name, btc, user, table, trend }) {
    const [detail, setDetail] = useState([]);
    const [searchContent, setSearch] = useState('');
    const [portCoins, setPortCoins] = useState([]);
    

    function handleCoin(data){
        // console.log(data)
        setPortCoins(data)
    }
// console.log(table)
    function round(price){
        if(Number(price)>100){
            return Math.round(Number(price),0)
         }else if(Number(price)>2){
            return Number(price).toFixed(2)
         }else if(Number(price)===1){
            return Number(price).toFixed(1)
         }else if(Number(price)<0.001){
            return Number(price).toFixed(6)
         }else if(Number(price)>0){
            return Number(price).toFixed(4)
         }
    }
    return (
        <div>
            <SearchBar searchContent={searchContent} setSearch={setSearch}/>
            <Routes>
                <Route path=":id" element={<ProjectDetail detail={detail} setDetail={setDetail}/>} />
            </Routes>
            <TopMovers btc={btc} round={round} trend={trend}/>
            <Portfolio setPortCoins={handleCoin} user={user}portCoins={portCoins} round={round}name={name}table={table}/>
            <CryptoList setPortCoins={handleCoin} portCoins={portCoins} user={user}round={round} table={table}/>
        </div>
      );
    }
export default CryptoPage;