function movies(arr) {
    let movies = [];
    for (let line of arr) {
        if (line.includes("addMovie")) {
            let movieName = line.split("addMovie ").pop();
            let movieObj = { name: movieName };
            movies.push(movieObj);
        } else if (line.includes("directedBy")) {
            let [movieName, directorName] = line.split(" directedBy ");
            let movie = movies.find((movie) => movie.name === movieName);
            if (movie) {
                movie.director = directorName;
            }
        } else if (line.includes("onDate")) {
            let [movieName, date] = line.split(" onDate ");
            let movie = movies.find((movie) => movie.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}
movies([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
]);
movies([
    "addMovie The Avengers",
    "addMovie Superman",
    "The Avengers directedBy Anthony Russo",
    "The Avengers onDate 30.07.2010",
    "Captain America onDate 30.07.2010",
    "Captain America directedBy Joe Russo",
]);
