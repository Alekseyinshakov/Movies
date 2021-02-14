let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDataBase = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

for (let index = 0; index < 2; index++) {
    let film = prompt('Один из просмотренных фильмов?');
    let rait = prompt('На сколько оцениваете его?');
    personalMovieDataBase.movies[film] = rait;
}