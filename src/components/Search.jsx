import React from 'react'

class Search extends React.Component {
    state = {
        search: '',
    }

    handlekey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }

    render() {
        return <div className='row'>
            <div className='input-field'>
            <input
                 className='validate'
                 placeholder='serch'
                 type='serch'
                 value={this.state.search}
                 onChange={(e) => this.setState({search: e.target.value})}
                 onkeyDown={this.handleKey}
           />
           <button className='btn search-btn' onclick={() => this.props.searchMovies(this.state.search)}>Search</button>
        </div>
    </div>
    }
}
export {Search}