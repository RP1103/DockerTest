import yfinance as yf
from datetime import datetime
from pymongo import MongoClient

commodities = {
    'Gold': 'GC=F',
    'Silver': 'SI=F',
    'Crude Oil': 'CL=F'
}

start_date = datetime(2022, 1, 1)  # Specify the start date as desired
end_date = datetime(2023, 1, 1)  # Specify the end date as desired

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017')
db = client['FinanceDB']  # Update with your database name
collection = db['commodities']  # Update with your collection name

for commodity, symbol in commodities.items():
    print(f"Commodity: {commodity}")
    print(f"Symbol: {symbol}")

    ticker = yf.Ticker(symbol)
    data = ticker.history(start=start_date, end=end_date)  # Retrieve OHLC data for the specified date range

    commodity_data = []  # List to store data for each commodity

    for index, row in data.iterrows():
        date = index.strftime('%Y-%m-%d')
        ask = row['Close']
        bid = row['Close']
        change = row['Close'] - data['Close'].shift(1).loc[index]
        changepercentage = (change / data['Close'].shift(1).loc[index]) * 100
        open_value = row['Open']
        high = row['High']
        low = row['Low']
        close = row['Close']

        commodity_info = {
            'Date': date,
            'Ask': ask,
            'Bid': bid,
            'Change': change,
            'ChangePercentage': changepercentage,
            'Open': open_value,
            'High': high,
            'Low': low,
            'Close': close
        }

        commodity_data.append(commodity_info)

        print(f"Date: {date}")
        print(f"Ask: {ask}")
        print(f"Bid: {bid}")
        print(f"Change: {change}")
        print(f"Change Percentage: {changepercentage}%")
        print(f"Open: {open_value}")
        print(f"High: {high}")
        print(f"Low: {low}")
        print(f"Close: {close}")
        print()

    # Create a document to store the data for the commodity symbol
    document = {
        'Commodity': commodity,
        'Symbol': symbol,
        'Data': commodity_data
    }

    # Insert the document into the collection
    collection.insert_one(document)

# Close the MongoDB connection
client.close()
