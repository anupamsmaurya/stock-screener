import CompanyDetails from "../companyDetails";
import WatchlistCompanies from "../watchlist";
import SearchInput from "../searchInput";
import StockDetails from "../stockDetails";
import "./app.scss";

const App = () => {
    return (
        <div className='app-root'>
            <SearchInput />
            <div className='app-contents'>
                <div className='search-content'>
                    <StockDetails />
                    <CompanyDetails />
                </div>                
                <WatchlistCompanies />
            </div>
        </div>
    );
}

export default App;