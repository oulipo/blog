import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { Article } from './article';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  { path:'', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
