const numberOfFilm = +prompt('Сколько фильмов?', '');
const personanalmovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('Один из последних фильмов', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних фильмов', ''),
      d = prompt('На сколько оцените его?', '');

      personanalmovieDB.movies[a] = b;
      personanalmovieDB.movies[c] = d;

      console.log(personanalmovieDB);