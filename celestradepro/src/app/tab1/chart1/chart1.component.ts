import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TrendsService } from '../../services/trends.service';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss'],
})
export class Chart1Component implements OnInit, AfterViewInit {
  @ViewChild('cylinderChart') chartRef: ElementRef;

  // Array to hold selected fields
  selectedFields: string[] = [];

  // Chart instance
  chart: Chart;

  constructor(private trendsService: TrendsService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.trendsService.getAllTrends().subscribe((response: any) => {
      const labels = response.map((item: any) => item.symbol);
      const data1 = response.map((item: any) => item.buy);
      const data2 = response.map((item: any) => item.sell);
      const data3 = response.map((item: any) => item.hold);
      const data4 = response.map((item: any) => item.strong_sell);
      const data5 = response.map((item: any) => item.strong_buy);

      console.log(response);

      this.createChart(labels, data1, data2, data3, data4, data5);
      this.updateChart(); // Apply initial field selection
    });
  }

  createChart(labels: any[], data1: any[], data2: any[], data3: any[], data4: any[], data5: any[]) {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels,
        datasets: [
          {
            label: 'Buy',
            data: data1,
            backgroundColor: '#060047',
            hidden: !this.selectedFields.includes('Buy'), // Hide if not selected
          },
          {
            label: 'Sell',
            data: data2,
            backgroundColor: '#B3005E',
            hidden: !this.selectedFields.includes('Sell'), // Hide if not selected
          },
          {
            label: 'Hold',
            data: data3,
            backgroundColor: '#E90064',
            hidden: !this.selectedFields.includes('Hold'), // Hide if not selected
          },
          {
            label: 'Strong Sell',
            data: data4,
            backgroundColor: '#FF5F9E',
            hidden: !this.selectedFields.includes('Strong Sell'), // Hide if not selected
          },
          {
            label: 'Strong Buy',
            data: data5,
            backgroundColor: '#609EA2',
            hidden: !this.selectedFields.includes('Strong Buy'), // Hide if not selected
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  // Function to handle checkbox selection
  handleFieldSelection(event: any, field: string) {
    if (event.target.checked) {
      // Add the field to the selected fields array
      this.selectedFields.push(field);
    } else {
      // Remove the field from the selected fields array
      const index = this.selectedFields.indexOf(field);
      if (index !== -1) {
        this.selectedFields.splice(index, 1);
      }
    }

    this.updateChart(); // Update the chart based on the selected fields
  }
  // Function to update the chart based on the selected fields
updateChart() {
  // Show or hide the datasets based on the selected fields
  this.chart.data.datasets.forEach((dataset: any) => {
    dataset.hidden = !this.selectedFields.includes(dataset.label);
  });

  // Update the chart
  this.chart.update();
}

}
