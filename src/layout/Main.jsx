import React from 'react'
import {Movies} from '../components/Movies'
import {Search} from '../components/Search'
import {Preloader} from '../components/Preloader';




class Main extends React.Component {
    state = {
        movies: [],

        loading: true,
     
    };

// создаём компонет жизненного цикла, получаем response, котрый преобразуется в методе json. Далее получаем data(данные из сайта)
// this.setState({movies: data.Search})) методом setState перекладываем в movies данные data котрые расположены под в ключе Search
// 78584b3c&s - ключ с сайта omdbapi.com
    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=78584b3c&s=matrix')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false })
           )
        // /добавляем исключения
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false })
            })
    }
    

// функция для обновления state, принимает параметры str(поисковая строка), которая приходит с сайта с фильмами и type со значением 'all'
// this.setState({movies: data.Search})) методом setState перекладываем в movies данные data котрые расположены под в ключе Search
    searchMovies = (str, type = 'all') => {
// в начале исполненнения функции активируем загрузку, в конце переводим в значение false 
        this.setState({loading: true})
        //если значение ключа type не равно 'all', получаем данные по дополнительному get - параметру type}
        fetch(`https://www.omdbapi.com/?apikey=78584b3c&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
             .then(response => response.json())
             .then(data => this.setState({movies: data.Search, loading: false })
        )
            // /добавляем исключения
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false })
            });
    };

    render() {
        //деструктуризация
        const { movies, loading } = this.state;

        return (
            <main className="container content">
               <Search searchMovies={this.searchMovies} />
{/* проверяем если идёт выводим  Preloader, если нет страницу с фильмами  */}
               {loading ?  <Preloader /> :  <Movies movies={movies} />}  
            </main>
        );
    }
}


export { Main };