import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = ARTICLES;

  titre: string;
  auteur: string;
  corps: string;
  tags: string;

  constructor() { }

  
  ngOnInit() {
  }

  createArticle() {
    if (this.titre && this.auteur && this.corps) {
      this.articles.push({
        titre: this.titre,
        auteur: this.auteur,
        corps: this.corps,
        tags: (this.tags) ? this.tags.split(',') : [],
        date: new Date(),
        id: Math.round(+new Date() / 1000),
        publie: true
      });
      this.titre = '';
      this.auteur = '';
      this.tags = '';
      this.corps = '';
    }
  }

  deleteArticle(index: number) {
    ARTICLES.splice(index, 1);
  }

}
