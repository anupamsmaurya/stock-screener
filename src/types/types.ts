export interface CompanyInfoType {
    CEO: string,
    address: string,
    address2?: string,
    city: string,
    companyName: string,
    country: string,
    description: string,
    employees: number,
    exchange: string,
    industry: string,
    issueType: string,
    phone: string,
    primarySicCode: number,
    sector: string,
    securityName: string,
    state: string,
    symbol: string,
    tags: string[],
    website: string,
    zip: string
}

export interface WatchlistType {
    symbol: string,
    companyName: string
}

export interface FetchCompanyRequestParamType {
    searchTerm: string
}

export interface FetchCompanyResponseType {
    company: CompanyInfoType,
    stock: StockInfoType

}

export interface AddToWatchlistRequestParamtype {
    symbol: string, 
    companyName: string
}

export interface RemoveFromWatchlistResponseType {
    symbol: string
}

export interface StockInfoType {
    avgTotalVolume: number,
    calculationPrice: string,
    change: number,
    changePercent: number,
    close: any
    closeSource: string,
    closeTime: any,
    companyName: string,
    currency: string,
    delayedPrice: string,
    delayedPriceTime: string,
    extendedChange: string,
    extendedChangePercent: string,
    extendedPrice: string,
    extendedPriceTime: string,
    high: string,
    highSource: string,
    highTime: string,
    iexAskPrice: number,
    iexAskSize: number,
    iexBidPrice: number,
    iexBidSize: number,
    iexClose: number,
    iexCloseTime: number,
    iexLastUpdated: number,
    iexMarketPercent: number,
    iexOpen: string,
    iexOpenTime: string,
    iexRealtimePrice: number,
    iexRealtimeSize: number,
    iexVolume: number,
    isUSMarketOpen: boolean,
    lastTradeTime: number,
    latestPrice: number,
    latestSource: string,
    latestTime: string,
    latestUpdate: number,
    latestVolume: string,
    low: string,
    lowSource: string,
    lowTime: number,
    marketCap: number,
    oddLotDelayedPrice: string,
    oddLotDelayedPriceTime: string,
    open: string,
    openSource: string,
    openTime: string,
    peRatio: number,
    previousClose: number,
    previousVolume: number,
    primaryExchange: string,
    symbol: string,
    volume: string,
    week52High: number,
    week52Low: number,
    ytdChange: number
}