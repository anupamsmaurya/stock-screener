import { all, call, put, takeLatest } from "redux-saga/effects";
import { CompanyInfoType } from "../../types/types";
import { fetchCompanyDetailsSuccess } from "../actions/stockActions";

import { ADD_FAVOURITE_COMPANY, FETCH_COMPANY_DETAILS_REQUEST } from "../actionTypes";

const getCompanyInfo = (symbol: string): Promise<Response> =>
  fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/company?token=pk_b7e2a919397c4a44bdef9e5795cc5391`);

  const getStockInfo = (symbol: string): Promise<Response> =>
  fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_b7e2a919397c4a44bdef9e5795cc5391`);
  
function* fetchCompanyDetailsSaga({payload}: any): Generator {
  console.log('data:', payload)
  try {
    const response: any = yield (call(getCompanyInfo, payload.searchTerm));
    const responseBody = yield response.json();

    console.log('response', responseBody)


    const stockResponse: any = yield (call(getStockInfo, payload.searchTerm));
    const stockResponseBody = yield stockResponse.json();
    console.log('stock:', stockResponseBody)
    yield put(
      fetchCompanyDetailsSuccess({
        company: responseBody,
        stock: stockResponseBody
      })
    );


  } catch (e) {
    /* yield put(
      fetchPostsFailure({
        error: e.message
      })
    ); */
  }
}

function* stocksSaga() {
  yield all([
    takeLatest(FETCH_COMPANY_DETAILS_REQUEST, fetchCompanyDetailsSaga)
  ]);
}

export default stocksSaga;
