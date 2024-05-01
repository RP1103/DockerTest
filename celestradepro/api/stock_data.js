// Assuming you have a MongoDB connection established (replace with your connection details)
const MongoClient = require('mongodb').MongoClient;
const yahooFinance = require('yahoo-finance'); // Install the 'yahoo-finance' package: npm install yahoo-finance

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = "FinanceDB";
const collectionName = "stock_data";

async function insertStockData(symbols) {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);
    const startDate = lastYear.toISOString();
    const endDate = new Date().toISOString();

    const historicalDataPromises = symbols.map(async (symbol) => {
      try {
        // Fetch historical data from Yahoo Finance using yahoo-finance package
        const historicalData = await yahooFinance.historical({
          symbol,
          from: startDate,
          to: endDate,
          period1: undefined, // Optional: Use undefined for daily data
          period2: undefined  // Optional: Use undefined for daily data
        });

        // Check if data is retrieved successfully
        if (historicalData.length > 0) {
          return { symbol, stock: historicalData }; // Return data in desired format
        } else {
          console.warn(`No data found for symbol: ${symbol}`);
          return null; // Or handle missing data differently
        }
      } catch (error) {
        console.error(`Error fetching data for symbol ${symbol}:`, error);
        return null; // Or handle the error differently
      }
    });

    const historicalData = await Promise.all(historicalDataPromises);

    // Insert documents with validation (optional, adjust validation logic as needed)
    const insertResults = await collection.insertMany(historicalData.filter(data => data !== null)); // Filter out null values

    console.log("Documents inserted successfully:", insertResults.insertedIds.length);

  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    await client.close();
  }
}

// Example usage:
const symbols = ["AAPL", "GOOG", "MSFT", "AMZN", "TSLA"]; // Replace with your desired symbols
insertStockData(symbols);
