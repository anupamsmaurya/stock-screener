//import { PostsActions, PostsState } from "../../types/types";
import { CompanyInfoType, StockInfoType, WatchlistType } from "../../types/types";
import { ADD_FAVOURITE_COMPANY, FETCH_COMPANY_DETAILS_REQUEST, FETCH_COMPANY_DETAILS_SUCCESS, FETCH_COMPANY_STOCK_INFO_REQUEST, REMOVE_FAVOURITE_COMPANY } from "../actionTypes";

const initialState = {
  watchlist: [] as WatchlistType[],
  selectedCompany: null as unknown as CompanyInfoType,
  selectedStock: null as unknown as StockInfoType,
  loading: false
};

const stockReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_COMPANY_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        pending: false,
        selectedCompany: action.payload.company,
        selectedStock: action.payload.stock,
        loading: false,
        error: null
      };
    case FETCH_COMPANY_STOCK_INFO_REQUEST:
      return {
        ...state,
        posts: [],
        error: action.payload.error
      };
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