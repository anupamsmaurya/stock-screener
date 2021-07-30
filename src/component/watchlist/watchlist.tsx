import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyDetailsRequest } from "../../store/actions/stockActions";
import { RootState } from "../../store/reducers/rootReducer";

import "./watchlist.scss";

const WatchlistCompanies = () => {

    const { watchlist } = useSelector(
        (state: RootState) => state.stocks
    );

    const dispatch = useDispatch()

    if(!watchlist.length) return <></>
    
    return (
        <div className='watchlist-container'>
            <h2>Watchlist</h2>
            {watchlist.map(company => (
                <div 
                    key={company.symbol} 
                    onClick={()=> dispatch(fetchCompanyDetailsRequest({searchTerm: company.symbol}))}
                    className='watchlist-item'
                >
                    {company.symbol} - {company.companyName}
                </div>
            ))}
        </div>
    );
}

export default WatchlistCompanies;