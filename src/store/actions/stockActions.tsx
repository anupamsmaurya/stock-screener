import { AddToWatchlistRequestParamtype, FetchCompanyRequestParamType, RemoveFromWatchlistResponseType } from "../../types/types";
import { ADD_FAVOURITE_COMPANY, FETCH_COMPANY_DETAILS_REQUEST, FETCH_COMPANY_DETAILS_SUCCESS, REMOVE_FAVOURITE_COMPANY } from "../actionTypes";

export const fetchCompanyDetailsRequest = (payload: FetchCompanyRequestParamType) => ({
    type: FETCH_COMPANY_DETAILS_REQUEST,
    payload
});

export const fetchCompanyDetailsSuccess = (payload: any) => ({
    type: FETCH_COMPANY_DETAILS_SUCCESS,
    payload
});

export const addToWatchlist = (payload: AddToWatchlistRequestParamtype) => ({
    type: ADD_FAVOURITE_COMPANY,
    payload
});

export const removeFromWatchlist = (payload: RemoveFromWatchlistResponseType) => ({
    type: REMOVE_FAVOURITE_COMPANY,
    payload
});
