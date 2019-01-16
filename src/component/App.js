import React from 'react';
import SearchBar from './SearchBar';
import Menu from '../presentational/Menu';
import ImageList from '../component/ImageList';

class App extends React.Component {
    constructor(){
        super()
        this.state = { 
            images: []
        }
        this.imageList = React.createRef();
    }
    onSearchSubmit=(term)=>{
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=30f1600e8ae8022d1812853e87751099&tags='+term+'&format=json&nojsoncallback=1&extras=owner_name%2C+tags%2C+url_o%2C+date_taken',
        ).then((response) =>{
            return response.json();
        }).then((j)=>{
            this.setState({images: j.photos.photo});
        });
    }
    render(){
        return (
            <div className="">
                <Menu />
                <SearchBar onFormSubmit={this.onSearchSubmit}/>
                <ImageList ref={this.imageList} images={this.state.images}  />
            </div>
            
        );
    }
}
export default App;