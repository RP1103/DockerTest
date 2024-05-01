import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { Nifty50Service } from '../services/nifty50.service';
import * as ta from 'ta-lib'; // Import ta-lib library

@Component({
  selector: 'app-nifty50',
  templateUrl: './nifty50.page.html',
  styleUrls: ['./nifty50.page.scss'],
})
export class Nifty50Page implements OnInit {

  @ViewChild('stockChart') stockChart: ElementRef;

  companies: { symbol: string; price: string }[] = [];
  chart: Chart;

  constructor(private nifty50Service:  Nifty50Service) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.loadStockData();
  }

  async loadStockData() {
    const nifty50_symbols = [
      "ADANIPORTS.NS", "ASIANPAINT.NS", "AXISBANK.NS", "BAJAJ-AUTO.NS", "BAJFINANCE.NS",
      // Add more symbols here
    ];

    this.companies = [];

    for (const symbol of nifty50_symbols) {
      try {
        const data = await this.nifty50Service.getStockData(symbol);
        console.log(`Data for ${symbol}:`, data); // Log the response data
        
        // Check if data is not empty
        if (data && Object.keys(data).length !== 0 && data['Global Quote']) {
          const companyName = data['Global Quote']['01. symbol'];
          const price = parseFloat(data['Global Quote']['05. price']).toFixed(2); // Convert price to float
          this.companies.push({ symbol: companyName, price: price });
        } else {
          console.error(`No data found for ${symbol}`);
        }
      } catch (error) {
        console.error(`Error fetching data for ${symbol}:`, error);
      }
    }
    this.renderChart(); // After fetching data, render the chart
  }

  renderChart() {
    const labels = this.companies.map(company => company.symbol);
    const prices = this.companies.map(company => parseFloat(company.price));

    const ctx = this.stockChart.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line', // Change the chart type to 'line'
      data: {
        labels: labels,
        datasets: [{
          label: 'Stock Prices (INR)',
          data: prices,
          borderColor: 'blue', // Set border color for the line
          borderWidth: 1, // Set border width
          fill: false // Do not fill the area under the line
        }]
      },
      options: {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Price (INR)' // Y-axis label
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Company Symbol' // X-axis label
            }
          }]
        }
      }
    });
  }

  // Add trend line functionality (if needed)
  addTrendLine() {
    // Example of adding a trend line
    // You can draw trend lines manually using canvas API
    const ctx = this.stockChart.nativeElement.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(this.stockChart.nativeElement.width, 200);
    ctx.stroke();
  }

  // Add indicator functionality (if needed)
  addIndicators() {
    const closePrices = this.companies.map(company => parseFloat(company.price));
    const sma = ta.SMA(closePrices, 10); // Example of Simple Moving Average (SMA) indicator with a length of 10
    console.log('SMA:', sma);
  }
  
}
