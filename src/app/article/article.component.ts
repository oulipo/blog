import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.article = this.getArticle();
  }

  getArticle(): Article {
    const id = +this.route.snapshot.paramMap.get('id');
    return ARTICLES.find((article) => article.id === id);
  }

}
