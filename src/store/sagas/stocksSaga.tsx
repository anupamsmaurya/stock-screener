import { all, call, put, takeLatest } from "redux-saga/effects";
import { API_TOKEN, BASE_URL } from "../../utils/constants";
import { fetchCompanyDetailsFailure, fetchCompanyDetailsSuccess } from "../actions/stockActions";

import { FETCH_COMPANY_DETAILS_REQUEST } from "../actionTypes";

const getCompanyInfo = (symbol: string): Promise<Response> =>
  fetch(`${BASE_URL}/${symbol}/company?token=${API_TOKEN}`);

  const getStockInfo = (symbol: string): Promise<Response> =>
  fetch(`${BASE_URL}/${symbol}/quote?token=${API_TOKEN}`);
  
function* fetchCompanyDetailsSaga({payload}: any): Generator {
  try {
    const response: any = yield (call(getCompanyInfo, payload.searchTerm));
    const responseBody = yield response.json();

    const stockResponse: any = yield (call(getStockInfo, payload.searchTerm));
    const stockResponseBody = yield stockResponse.json();
    yield put(
      fetchCompanyDetailsSuccess({
        company: responseBody,
        stock: stockResponseBody
      })
    );
  } catch (e) {
    yield put(
      fetchCompanyDetailsFailure('Unable to fetch details for this company. Please check the symbol.')
    );
  }
}

function* stocksSaga() {
  yield all([
    takeLatest(FETCH_COMPANY_DETAILS_REQUEST, fetchCompanyDetailsSaga)
  ]);
}

export default stocksSaga;
