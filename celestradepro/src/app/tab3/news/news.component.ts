import { Component, OnInit } from '@angular/core';
import { ForexnewsService } from '../../services/forexnews.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  news: any[];

  constructor(private forexnewsService: ForexnewsService) { }

  ngOnInit() {
    this.forexnewsService.getAllFnews().subscribe(
      (data: any) => {
        this.news = data;
        console.log(this.news);
      }

    );
  }
}
