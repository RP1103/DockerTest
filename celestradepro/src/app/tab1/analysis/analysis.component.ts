import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import * as Highcharts from 'highcharts/highstock';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { MarketdepthService } from 'src/app/services/marketdepth.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent implements OnInit {
  TargetsValue:string;
  StoplossValue:string;
  stocks: any;
  symbol: string;
  straightLineValue: any;
  portfolio: any[];
  currentIndex = 0;
  selectedSegment: any;
  quantity: number;
  price: number;
  triggerprice: number;
  target: number;
  stoploss: number;
  trailingstoploss: number;
  selectedDateTime: Date = new Date();
  selectedOrderType: string = ''; 
  modalOpen: boolean;
  low: number;
  high: number;
  showBox = false;
  marketDepthData: any[];
  displayMarketDepth = false;
  mk: any;




  constructor(private stockService: StockService, private router: Router,
    private portfolioService: PortfolioService, private route: ActivatedRoute,
    private marketdepthService: MarketdepthService) { }
  
  openLoginForm() {
    this.modalOpen = true;
  }

  closeLoginForm() {
    this.modalOpen = false;
  }

  fetchPortfolio() {
    this.portfolioService.getAllPortfolio().subscribe((response: any) => {
      this.portfolio = response;
      console.log('Fetched portfolio:', this.portfolio);
    }, (error) => {
      console.error('Error occurred while fetching portfolio:', error);
    });
  }

  onSubmit(orderType: string): void {
    const dateTimeString = this.selectedDateTime.toString().slice(0, 19).replace('T', ' ');

    const portfolioData = {
      stock: this.symbol,
      type: 'stock',
      order:orderType,
      quantity: this.quantity,
      price: this.price,
      low: this.low,
      high:this.high,
      triggerprice: this.triggerprice,
      target: this.target,
      stoploss: this.stoploss,
      trailingstoploss: this.trailingstoploss,
      selectedDateTime: dateTimeString,
      selectedOrderType: this.selectedOrderType,
      totalamount: this.quantity * this.price,
      credit: 1000 + this.price,
      margininitial: this.price * this.quantity,
      marginmaint:200+this.target
    }; 

    this.portfolioService.createPortfolio(portfolioData)
      .subscribe(
        (response) => {
          console.log('Portfolio created successfully:', response);
          this.fetchPortfolio(); // Fetch portfolio after creating a new portfolio entry
        },
        (error) => {
          console.error('Error occurred while creating portfolio:', error);
        }
      );
      this.updateChart();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.symbol = params.symbol;
      this.mk = params.symbol;
      console.log('Received:', this.symbol);
      this.loadChartData();
      this.fetchPortfolio();// Fetch portfolio when component initializes
      this.fetchMarketDepthData();
    });
  }

  loadChartData() {
    this.stockService.getAllStocks().subscribe((response) => {
      this.stocks = response;
      console.log(this.stocks);
      if (this.symbol) {
        this.updateChart();
      }
    });
  }

  showPrice(price: number) {
    this.price = price;
  }
  showlow(low: number) {
    this.low = low;
  }
  showhigh(high: number) {
    this.high = high;
  }
  showPrices(price: string) {
    this.StoplossValue = price;
  }
  showPricess(price: string) {
    this.TargetsValue = price;
  }
  
  onSelectionChange(stock: any) {
    if (stock.selected) {
      this.symbol = stock.symbol;
      // Deselect other stocks
      this.stocks.forEach(s => {
        if (s !== stock) {
          s.selected = false;
        }
      });
      this.updateChart();
    }
  }
  updateChart() {
    const selectedStock = this.stocks.find(stock => stock.symbol === this.symbol);
    const chartData = {
      name: selectedStock.STK,
      data: selectedStock.stock.map(dataPoint => [
        new Date(dataPoint.Date).getTime(),
        dataPoint.Open,
        dataPoint.High,
        dataPoint.Low,
        dataPoint.Close
      ])
    };

    const chartOptions: any = {
      rangeSelector: {
        selected: 1
      },
     
      yAxis: {
        title: {
         
        }
      },
      series: [{
        type: 'candlestick',
        name: chartData.name,
        data: chartData.data,
        color: 'green',
        upColor: 'red'
      }],
      accessibility: {  // Include accessibility module
        enabled: true
      }
    };

    if (this.price !== undefined && !isNaN(this.price)) {
      chartOptions.series.push({
        type: 'line',
        name: 'Straight Line',
        data: [[chartData.data[0][0], this.price], [chartData.data[chartData.data.length - 1][0], this.price]],
        color: 'blue'
      });
    }

    if (this.target !== undefined && !isNaN(this.target)) {
      chartOptions.series.push({
        type: 'line',
        name: 'Target Line',
        data: [[chartData.data[0][0], this.target], [chartData.data[chartData.data.length - 1][0], this.target]],
        color: 'red'
      });
    }

    if (this.stoploss !== undefined && !isNaN(this.stoploss)) {
      chartOptions.series.push({
        type: 'line',
        name: 'Stoploss Line',
        data: [[chartData.data[0][0], this.stoploss], [chartData.data[chartData.data.length - 1][0], this.stoploss]],
        color: 'green'
      });
    }

    Highcharts.stockChart('chart', chartOptions);
  }

  fetchMarketDepthData() {
    this.marketdepthService.getAllMarketDepth().subscribe(
      (data: any[]) => {
        this.marketDepthData = data.filter((depth: any) => depth.symbol === this.mk);
      },
      (error) => {
        console.error('Error fetching marketDepthData:', error);
      }
    );
  }

   getTotalOrders(marketDepth: any[], side: string): number {
    return marketDepth.reduce((total, item) => total + (side === 'buy' ? item.buy_quantity : 0), 0);
  }

  getTotalOrder(marketDepth: any[], side: string): number {
    
    return marketDepth.reduce((total, item) => total + (side === 'sell' ? item.sell_quantity : 0), 0);
  }

   }