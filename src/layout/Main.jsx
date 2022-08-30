import React from 'react'
import {Movies} from '../component/Movies'

class Main extends React.Component() {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=78584b3c&s=matrix")
            .then(response) => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovies =(str) => {
        fetch("https://www.omdbapi.com/?apikey=78584b3c&s=${str}")
            .then(response) => response.json())
             .then(data => this.setState({movies: data.Search}))
}
    }
   
    render() {
         //деструктуризация

        <return <main className="container content">
            <Search />
            {    
                movies.length ? (       
                <Movies movies={this.state.movies}/>
            ) : <Preloader />
   </main>
}
    }
    

export {Main}