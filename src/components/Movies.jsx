import {Movie} from './Movie'
// получаем массив с карточками фильмов
function Movies (props) {
    const {movies} = props;
// выводим фильмы по одному по ключу imdbID
    return<div className='movies'>
        {movies.map(movie => {
            <Movie key={movie.imdbID} {...movie} />

        })}
        </div>
}

export {Movies}