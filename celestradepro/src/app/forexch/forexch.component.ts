import { Component, OnInit } from '@angular/core';
import { ForexService } from '../services/forex.service';
import * as Highcharts from 'highcharts/highstock';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '../services/portfolio.service';
import { MarketdepthService } from 'src/app/services/marketdepth.service';


@Component({
  selector: 'app-forexch',
  templateUrl: './forexch.component.html',
  styleUrls: ['./forexch.component.scss'],
})

export class ForexchComponent implements OnInit {
  priceValue: string;
  forexs: any;
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
  TargetsValue: string;
  StoplossValue: string;
  mk: any;
  marketDepthData: any[];
  


  constructor(private forexService: ForexService, private router: Router,
    private portfolioService: PortfolioService, private route: ActivatedRoute,
    private marketdepthService: MarketdepthService) { }

  openLoginForm() {
    this.modalOpen = true;
  }

  closeLoginForm() {
    this.modalOpen = false;
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
   


  onSubmit(orderType: string): void {
    const dateTimeString = this.selectedDateTime.toString().slice(0, 19).replace('T', ' ');

    const portfolioData = {
      stock: this.symbol,
      type: 'forex',
      order : orderType,
      quantity: this.quantity,
      price: this.price,
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
        },
        (error) => {
          console.error('Error occurred while creating portfolio:', error);
        }
      );
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.symbol = params.symbol;
       this.mk = params.symbol;
      console.log('Received:', this.symbol);
      this.loadChartData();
       this.fetchMarketDepthData();
    });
  }

  loadChartData() {
    this.forexService.  getAllForexs().subscribe((response) => {
      this.forexs = response;
      console.log(this.forexs);
      if (this.symbol) {
        this.updateChart();
      }
    });
  }
 
  onSelectionChange(values: any) {
    if (values.selected) {
      this.symbol = values.symbol;
      // Deselect other stocks
      this.forexs.forEach(s => {
        if (s !== values) {
          s.selected = false;
        }
      });
      this.updateChart();
    }
  }

  updateChart() {
    const selectedForex = this.forexs.find(values => values.symbol === this.symbol);
    const chartData = {
      name: selectedForex.STK,
      data: selectedForex.values.map(dataPoint => [
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
      title: {
        text: 'Forex Prices'
      },
      yAxis: {
        title: {
          text: 'Price'
        }
      },
      series: [{
        type: 'candlestick',
        name: chartData.name,
        data: chartData.data,
        color: 'green',
        upColor: 'red'
      }]
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
