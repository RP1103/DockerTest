/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Com_newsService } from '../../services/com_news.service';

@Component({
  selector: 'app-com-news',
  templateUrl: './com-news.component.html',
  styleUrls: ['./com-news.component.scss'],
})
export class ComNewsComponent implements OnInit {

  com_news: any[];

  constructor(private com_newsService: Com_newsService) { }

  ngOnInit() {
    this.com_newsService.getCom_news().subscribe(
      (data: any) => {
        this.com_news = data;
        console.log(this.com_news);
      },
      error => {
        console.log(error);
      }
    );
  }
}
