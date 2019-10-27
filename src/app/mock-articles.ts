import { Article } from './article';

export const ARTICLES: Article[] = [
    { id: 1, titre: 'Article n°1', auteur: 'Laurent', date: new Date('1995-12-17'), publie: true, corps: 'lorem ipsum', tags: ['angular'] },
    { id: 2, titre: 'Article n°2', auteur: 'Laurent', date: new Date('1971-12-17'), publie: false, corps: 'bla bla bla', tags: ['test'] },
    { id: 3, titre: 'Article n°3', auteur: 'Toto', date: new Date('2001-12-12'), publie: true, corps: 'test 1 2 3', tags: ['angular', 'react'] },
  ];
  