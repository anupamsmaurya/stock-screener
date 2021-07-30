import { useDispatch, useSelector } from "react-redux";
import { removeFavouriteCompany, addFavouriteCompany } from "../../store/actions/stockActions";
import { RootState } from "../../store/reducers/rootReducer";
import "./stockDetails.scss";

const StockDetails = () => {

    const { selectedStock, watchlist } = useSelector(
        (state: RootState) => state.stocks
    );

    console.log('watchlist', watchlist)

    const dispatch = useDispatch()

    if(!selectedStock) return <></>


    const { latestPrice, currency, change, changePercent, companyName, symbol, peRatio, iexOpen, iexClose, week52High, week52Low } = selectedStock
    const isShortlisted = watchlist.some(company => company.symbol === symbol)

    console.log(watchlist, isShortlisted)

    const handleShortlist = () => {
        isShortlisted ?
            dispatch(removeFavouriteCompany({ symbol })) :
            dispatch(addFavouriteCompany({ symbol, companyName }))
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
                <span className={`change ${change>-1? 'green': 'red'}`}>{change} ({changePercent}%)</span>
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