export interface CoinProps {
    name: string;
    image: string;
    symbol: string;
    marketcap: number;
    price: number;
    priceChange: number;
    volume: number;
}

export interface CryptoCurrencyTrackerRes {
    id: string;
    name: string;
    image: string;
    symbol: string;
    market_cap: number;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
}
