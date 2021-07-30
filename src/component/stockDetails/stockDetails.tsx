import { useDispatch, useSelector } from "react-redux";
import { removeFromWatchlist, addToWatchlist } from "../../store/actions/stockActions";
import { RootState } from "../../store/reducers/rootReducer";
import Spinner from "../spinner";
import "./stockDetails.scss";

const StockDetails = () => {

    const { selectedStock, watchlist, loading } = useSelector(
        (state: RootState) => state.stocks
    );

    const dispatch = useDispatch()

    if(loading) return <Spinner />

    if(!selectedStock) return <></>


    const { latestPrice, currency, change, changePercent, companyName, symbol, peRatio, iexOpen, iexClose, week52High, week52Low } = selectedStock
    const isShortlisted = watchlist.some(company => company.symbol === symbol)

    const handleShortlist = () => {
        isShortlisted ?
            dispatch(removeFromWatchlist({ symbol })) :
            dispatch(addToWatchlist({ symbol, companyName }))
    }

    return (
        <div className='stock-details'>
            <div className='stock-row'>
            <div className='symbol-info'>
                <div className='symbol-star'>
                    <span>{symbol}</span>
                    <span 
                        className={`star ${isShortlisted? 'fill':''}`} 
                        onClick={handleShortlist}
                        title={`${isShortlisted? 'Remove from':'Add to'} Watchlist`}
                    ></span>
                </div>
                <div className='company-name'>{companyName}</div>                
            </div>
            <div className='price-wrapper'>                 
                <span className='price'><span className='currency'>{currency}</span>{latestPrice}</span>
                <span className={`change ${change>0? 'green': 'red'}`}>{change} ({changePercent}%)</span>
            </div> 

            </div>
            <div className='stock-row'>
                <div><span>P/E Ratio:</span><span>{peRatio}</span></div>
                
                <div><span>Open/Close:</span><span>{iexOpen}/{iexClose}</span></div>
                <div><span>52 weeks high/low:</span><span>{week52High}/{week52Low}</span></div>
            </div>
        </div>
    );
}

export default StockDetails;