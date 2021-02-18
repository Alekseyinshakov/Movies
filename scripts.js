
let numberOfFilms;

start();

let personalMovieDataBase = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

rememberMyFilms();
writeYourGenres(personalMovieDataBase.genres);
detectPersonalLevel();
showMyDB();

function writeYourGenres(arrayGenres) {
    for (let index = 0; index < 3; index++) {
        arrayGenres[index] = prompt(`Ваш любимый жанр ${index + 1}`);
    }
}

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    }
}

function rememberMyFilms() {
    for (let index = 0; index < 2; index++) {
        let film = prompt('Один из просмотренных фильмов?');

        if (film == "" || film == null || film.length > 50) {
            index--;
            continue;

        } else {
            for (let index = 0; index < 1; index++) {
                let rait = prompt('На сколько оцениваете его?');
                if (rait == "" || rait == null || rait.length > 50) {
                    index--;
                    continue;
                } else {
                    personalMovieDataBase.movies[film] = rait;
                }
            }
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDataBase.count < 10) {
        console.log('Вы посмотрели довольно мало фильмов');
    } else if (personalMovieDataBase.count >= 10 && personalMovieDataBase.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDataBase.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

function showMyDB(params) {
    if (personalMovieDataBase.privat == false) {
        console.log(personalMovieDataBase);
    }
}


