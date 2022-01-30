import {action, thunk} from "easy-peasy";

export default {
    movies: [],
    favourites: [],
    movieDetails: [],

    addFavourite: action((state, payload) => {

        let oldFavourites = state.favourites;
        oldFavourites.push(payload);
        state.favourites = oldFavourites;
    }),

    remove: action((state, favourite) => {
        let oldFavourite = state.favourites
        const index = oldFavourite.findIndex((element) => element.imdbID === favourite.imdbID)
        oldFavourite.splice(index, 1)
        state.favourites = oldFavourite
    }),

    fetchMovies: thunk(async (actions, filter) => {
        let url = "https://movie-database-imdb-alternative.p.rapidapi.com/";

        if (filter){
            url = `${url}?s=${filter}`;
        }
        const responsePromise = await fetch(url,{
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": "460a47770dmsh4892f28e8cf3d6cp13cc36jsn1f3d219ca938"
            }
            })

            .then(response => response.json())
            .then(json => actions.setMovies(json))
            .catch(err => {
                console.log(err);
            });
    }),

    movieSelected: thunk(async (actions, id) => {
        let url = "https://movie-database-imdb-alternative.p.rapidapi.com/";

        if (id){
            url = `${url}?r=json&i=${id}`;
        }
        const responsePromise = await fetch(url,{
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": "460a47770dmsh4892f28e8cf3d6cp13cc36jsn1f3d219ca938"
            }
        })


            .then(response => response.json())
            .then(json => actions.setMovieDetail(json))
            .catch(err => {

                console.log(err);
            });
    }),

    //Actions
    setMovies: action((state, movies) => {
        state.movies = movies
    }),
    setMovieDetail:action((state, movie) => {
        let oldMovieDetail
        oldMovieDetail = movie
        state.movieDetails = oldMovieDetail
    }),
}


//