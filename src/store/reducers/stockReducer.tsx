import { StockActions, StockState } from "../../types/types";
import { ADD_FAVOURITE_COMPANY, FETCH_COMPANY_DETAILS_FAILURE, FETCH_COMPANY_DETAILS_REQUEST, FETCH_COMPANY_DETAILS_SUCCESS, REMOVE_FAVOURITE_COMPANY } from "../actionTypes";

const initialState: StockState = {
  watchlist: [],
  selectedCompany: null,
  selectedStock: null,
  loading: false,
  error: null
};

const stockReducer = (state = initialState, action: StockActions) => {
  switch (action.type) {
    case FETCH_COMPANY_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        selectedCompany: action.payload.company,
        selectedStock: action.payload.stock,
        loading: false,
        error: null
      };
    case FETCH_COMPANY_DETAILS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      }  
    case ADD_FAVOURITE_COMPANY:
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload]
      }
    case REMOVE_FAVOURITE_COMPANY:
      return {
        ...state,
        watchlist: state.watchlist.filter(company => company.symbol !== action.payload.symbol)
      }
    default:
      return {
        ...state
      };
  }
};

export default stockReducer;