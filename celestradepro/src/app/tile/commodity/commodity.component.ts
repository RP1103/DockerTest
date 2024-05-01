import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommodityService } from 'src/app/services/commodity.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as Highcharts from 'highcharts/highstock';
import { PortfolioService } from '../../services/portfolio.service';
import { MarketdepthService } from 'src/app/services/marketdepth.service';
import { HttpErrorResponse } from '@angular/common/http';

interface CommodityData {
  _id: string;
  Commodity: string;
  Symbol: string;
  Data: {
    Date: string;
    Ask: number;
    Bid: number;
    Change: number;
    Open: number;
    High: number;
    Low: number;
    Close: number;
  }[];
}

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.scss'],
})
export class CommodityComponent implements OnInit {
  priceValue: string;
  commoditys: any;
  Symbol: string;
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
  commodityPrices: any;


  constructor(private commodityService: CommodityService,
    private route: ActivatedRoute,
    private router: Router,
    private portfolioService: PortfolioService,
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
      stock: this.Symbol,
      type: 'commodity',
      order:orderType,
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
      this.Symbol = params.Symbol;
       this.mk = params.Symbol;
      console.log('Received:', this.Symbol);
      this.loadChartData();
      this.fetchMarketDepthData();
      this.fetchCommodityPrices();
    });
  }

  loadChartData() {
    this.commodityService. getCommodities().subscribe((response) => {
      this.commoditys = response;
      console.log(this.commoditys);
      if (this.Symbol) {
        this.updateChart();
      }
      
    });
  }
  
  
  onSelectionChange(Data: any) {
    if (Data.selected) {
      this.Symbol = Data.Symbol;
      // Deselect other stocks
      this.commoditys.forEach(s => {
        if (s !== Data) {
          s.selected = false;
        }
      });
      this.updateChart();
    }
  }

  updateChart() {
    const selectedCommodity = this.commoditys.find(Data => Data.Symbol === this.Symbol);
    const chartData = {
      name: selectedCommodity.STK,
      data: selectedCommodity.Data.map(dataPoint => [
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

 fetchCommodityPrices() {
  this.commodityService.getCommodityPrices().subscribe(
    (data) => {
      this.commodityPrices = data;
    },
    (error) => {
      console.error('Error fetching commodity prices:', error);
      // Handle error message based on error status or type
      if (error instanceof HttpErrorResponse) {
        if (error.status === 0) {
          console.error('Network error occurred. Please check your internet connection.');
        } else {
          console.error('An error occurred while fetching commodity prices. Please try again later.');
        }
      } else {
        console.error('An unexpected error occurred. Please try again later.');
      }
    }
  );
}

}