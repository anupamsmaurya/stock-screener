import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import "./companyDetails.scss";

const CompanyDetails = () => {

    const { selectedCompany } = useSelector(
        (state: RootState) => state.stocks
    );

    if (!selectedCompany) return <></>

    const {
        CEO, address, address2, city, companyName, country, description, employees, exchange, industry, issueType,
        phone, primarySicCode, sector, securityName, state, symbol, tags, website, zip
    } = selectedCompany;

    
    return (
        <div className='company-info-container'>
            <div className='company-info-section'>
                <div><span className='label'>CEO: </span><span className='value'>{CEO}</span></div>
                <div><span className='label'>address: </span><span className='value'>{address}</span></div>
                <div><span className='label'>address2: </span><span className='value'>{address2}</span></div>
                <div><span className='label'>city: </span><span className='value'>{city}</span></div>
                <div><span className='label'>companyName: </span><span className='value'>{companyName}</span></div>
                <div><span className='label'>country: </span><span className='value'>{country}</span></div>
                <div><span className='label'>description: </span><span className='value'>{description}</span></div>
            </div>

            <div className='company-info-section'>
                <div><span className='label'>employees: </span><span className='value'>{employees}</span></div>
                <div><span className='label'>exchange: </span><span className='value'>{exchange}</span></div>
                <div><span className='label'>industry: </span><span className='value'>{industry}</span></div>
                <div><span className='label'>issueType: </span><span className='value'>{issueType}</span></div>
                <div><span className='label'>phone: </span><span className='value'>{phone}</span></div>
                <div><span className='label'>primarySicCode: </span><span className='value'>{primarySicCode}</span></div>
                <div><span className='label'>sector: </span><span className='value'>{sector}</span></div>
                <div><span className='label'>securityName: </span><span className='value'>{securityName}</span></div>
                <div><span className='label'>state: </span><span className='value'>{state}</span></div>
                <div><span className='label'>symbol: </span><span className='value'>{symbol}</span></div>
                <div><span className='label'>tags: </span><span className='value'>{tags}</span></div>
                <div><span className='label'>website: </span><span className='value'>{website}</span></div>
                <div><span className='label'>zip: </span><span className='value'>{zip}</span></div>
            </div>
            {/* <button onClick={handleShortlist}>{isShortlisted ? 'UnShortlist' : 'Watchlist'}</button> */}
        </div>
    );
}

export default CompanyDetails;