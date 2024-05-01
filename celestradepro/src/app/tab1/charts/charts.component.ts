import { Component, OnInit , AfterViewInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {

  news: any[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews().subscribe(
      (data: any) => {
        this.news = data;
        console.log(this.news);
      },
      error => {
        console.log(error);
      }
    );
  }
  toggleSummary(newsItem) {
    newsItem.showFullSummary = !newsItem.showFullSummary;
  }
}
