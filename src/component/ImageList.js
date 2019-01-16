import React from 'react';
import ImageCard from './ImageCard';
import '../styles/ImageList.css'

class ImageList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            items: 20,
            loadingState: false,
        }
        this.imageContainerRef = React.createRef();
    }

    isBottom=(element) => {
        return element.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentDidMount = () => {
        window.addEventListener("scroll", () => {
            if (this.isBottom(this.imageContainerRef.current)){
              this.loadMoreItems();
            }
        });
    }

    componentWillReceiveProps = () => {
       this.setState({items: 20})
    }
    
    loadMoreItems = () => { 
        if(this.state.loadingState){
            return;
        }
       this.setState({ loadingState: true });
       setTimeout(() => {
         this.setState({ items: this.state.items + 20, loadingState: false });
       }, 1000);
     }
    render(){
        
        const cards = this.props.images.slice(0,this.state.items).map((image) => {
            return (
                <ImageCard key={image.id} image={image}/>
            );
        });
    return (
        <div className="ui basic segment">
            <div className="ui container">
                <div ref={this.imageContainerRef}  style={{overflowY: "auto" }} className="image-list">
                    {cards} 
                </div>
            </div>
        </div>);
    }
}

export default ImageList;