import React from 'react';
import '../styles/SearchBar.css'

class SearchBar extends React.Component{
    constructor(){
        super();
        this.state = { term: ''};
    }
  
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }
    render(){
        return (
            <div className="ui basic center aligned segment">
                <div className="ui container search-container">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="ui action input"> 
                            <input 
                            type="text"
                            value= {this.state.term} 
                            onChange={ e =>
                            this.setState({term: e.target.value})
                            }
                        />
                            <button className="ui red right labeled icon button">
                                <i className="search icon"></i>
                                    Search Images
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;