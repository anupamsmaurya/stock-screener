import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCompanyDetailsRequest } from "../../store/actions/stockActions";
import "./searchInput.scss";

const SearchInput: React.FC = () => {

    const [ searchTerm, setSearchTerm ] = useState<string>('')

    const dispatch = useDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleSearchClick()
        }
    }

    const handleSearchClick = () => {
        if(searchTerm) {
            dispatch(fetchCompanyDetailsRequest({searchTerm}));
        }
    }

    return (
        <div className='search-wrapper'>
            <input 
                value={searchTerm} 
                onChange={handleChange} 
                onKeyDown={handleKeyDown}
                placeholder="Enter company symbol"
            />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    )
}

export default SearchInput