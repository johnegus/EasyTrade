import * as StockApiUtil from '../util/stock_api_util';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_STOCK_INFO = 'RECEIVE_STOCK_INFO';
export const RECEIVE_STOCK_INTRADAY_DATA = 'RECEIVE_STOCK_INTRADAY_DATA';

const receiveStock = stock => ({
  type: RECEIVE_STOCK,
  stock
});

const receiveStockInfo = stockInfo => ({
  type: RECEIVE_STOCK_INFO,
  stockInfo
});

const receiveStockIntradayData = data => ({
  type: RECEIVE_STOCK_INTRADAY_DATA,
  data
});

export const fetchStock = ticker => dispatch => (
  StockApiUtil.fetchStock(ticker)
    .then(stock => dispatch(receiveStock(stock)))
);

export const fetchStockInfo = ticker => dispatch => (
  StockApiUtil.fetchStockInfo(ticker)
    .then(stockInfo => dispatch(receiveStockInfo(stockInfo)))
);

export const fetchStockIntradayData = ticker => dispatch => (
StockApiUtil.fetchStockIntradayData(ticker)
  .then(data => dispatch(receiveStockIntradayData(data['Time Series (5min)'])))
);
