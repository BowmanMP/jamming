import React from 'react';
import './SearchBar.css';


export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    onKeyPress = (event) => {
        if(event.which === 13) {
          this.search(event);
        }
    } 

    search() {
       this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        this.setState({ term: e.target.value });
    }
    
    
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist"
                    onChange={this.handleTermChange} onKeyPress={this.onKeyPress} />
                <button onClick={this.search} className="SearchButton">SEARCH</button>
            </div>
        );
    }
}