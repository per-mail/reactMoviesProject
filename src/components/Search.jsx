import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',          
    };

    // вызываем метод searchMovies и передаём ему текущий state.
    handlekey = (event) => {
        if (event.key === 'Enter') {
// если нажат Enter вызываем метод searchMovies и передаём ему текущие state и type
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(
           //обновляем поле type передаём ему event.target.dataset.type 
            () => ({ type: event.target.dataset.type }),
            () => {
    // вызываем метод searchMovies и передаём ему текущий state и type      
                this.props.searchMovies(this.state.search, this.state.type);
                
        }
      );
    };


    render() {
        return (
            <div className='row'>
            <div className='input-field'>
            <input
                 className='validate'
                 placeholder='search'
                 type='search'
                 value={this.state.search}
                //  обновляем поле search на e.target.value
                 onChange={(e) => this.setState({search: e.target.value})}
                 onkeyDown={this.handleKey}
           />
           {/* кнопкой вызываем метод searchMovies и передаём ему текущие state и type */}
           {/* className='btn search-btn' - добавляем стиль абсолютное позиционирование */}
           <button className='btn search-btn' onclick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
        </div>
        <div>
            <label>
                <input
                     className='with-gap'
                     name='type'
                     type='radio'
                     data-type='all'
                     onChange={this.handleFilter}
                    //  если в state стоит all выведется данное значение, переключения страниц под срокой поиска
                     checked={this.state.type === 'all'}
                />
                <span>All</span>
            </label>
            <label>
                <input
                    className='with-gap'
                    name='type'
                    type='radio'
                    data-type='movie'
                    onChange={this.handleFilter}
                    //  если в state стоит movie выведется данное значение, переключения страниц под срокой поиска
                    checked={this.state.type === 'movie'}                    
               />
                     <span>Movies only</span>
            </label>
            <label>
                <input
                    className='with-gap'
                    name='type'
                    type='radio'
                    data-type='series'
                    onChange={this.handleFilter}
                   //  если в state стоит series выведется данное значение, переключения страниц под срокой поиска 
                    checked={this.state.type === 'series'}
               />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    );
           
                     

    }
}

export {Search};