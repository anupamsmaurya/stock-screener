import { ADD_FAVOURITE_COMPANY, FETCH_COMPANY_DETAILS_REQUEST, FETCH_COMPANY_DETAILS_SUCCESS, REMOVE_FAVOURITE_COMPANY, SET_SELECTED_COMPANY } from "../actionTypes";

export const fetchCompanyDetailsRequest = (payload: any) => ({
    type: FETCH_COMPANY_DETAILS_REQUEST,
    payload
});

export const fetchCompanyDetailsSuccess = (payload: any) => ({
    type: FETCH_COMPANY_DETAILS_SUCCESS,
    payload
});

export const addFavouriteCompany = (payload: any) => ({
    type: ADD_FAVOURITE_COMPANY,
    payload
});

export const removeFavouriteCompany = (payload: any) => ({
    type: REMOVE_FAVOURITE_COMPANY,
    payload
});
