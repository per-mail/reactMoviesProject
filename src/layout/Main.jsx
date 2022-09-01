import React from 'react'
import {Movies} from '../component/Movies'
import {Search} from '../component/Search'
import {Preloader} from '../component/Preloader';

class Main extends React.Component() {
    state = {
        movies: [],
    }
    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=78584b3c&s=matrix")
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))

    }
// создаём компонет жизненного цикла, получаем response, котрый преобразуется в методе json. Далее получаем data(данные из сайта)
// this.setState({movies: data.Search})) методом setState перекладываем в movies данные data котрые расположены под в ключе Search
    searchMovies =(str) => {
        fetch("https://www.omdbapi.com/?apikey=78584b3c&s=${str}")
             .then(response => response.json())
             .then(data => this.setState({movies: data.Search}))

    }
   
    render() {
         //деструктуризация
         const {movies} = this.state;

       return <main className="container content">
        <Search searchMovies={this.searchMovies} />
     проверяем если есть длина, есть данные, выводим фильмы если нет выводим    Preloader
        {movies.length ? (
            <Movies movies={this.state.movies} />
        ) : <Preloader />}
    </main>
  }
}  
    

export {Main}