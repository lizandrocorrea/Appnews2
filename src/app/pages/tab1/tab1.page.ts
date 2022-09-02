import { NewsResponse, Article } from './../../interfaces/index';
import { NewsService } from './../../service/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public articles: Article[]=[];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getTopHeadLines().subscribe((resp)=>{
      console.log(resp.articles);
      this.articles = resp.articles;
    });
  }
}
