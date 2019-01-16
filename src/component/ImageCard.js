import React from 'react';
import '../styles/ImageCard.css'
class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.imageDivRef = React.createRef();
        this.state = { spans: 0 , imageIsLoaded: false}
    }
    setSpans = () =>{
        if(this.imageDivRef.current){
            const height = this.imageDivRef.current.clientHeight;
            const spans = Math.ceil(height/10)+1;
            this.setState({spans:spans, imageIsLoaded: true});
        }  
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    render(){
        const imageURL = 'https://farm'+this.props.image.farm+'.staticflickr.com/'+this.props.image.server+'/'+this.props.image.id+'_'+this.props.image.secret+'.jpg';
        return (
            <div className="image-card" style={{gridRowEnd:`span ${this.state.spans}`}}>
                <div ref={this.imageDivRef} className="ui card">
                    <div className="image">
                        <img ref={this.imageRef} src={imageURL} alt={this.props.image.title}/>
                    </div>
                    <div className="content">
                        <span className="header">{this.props.image.title}</span>
                        <div className="meta">
                        <span className="date">Date Taken: {this.props.image.datetaken}</span>
                    </div>
                    <div className="description">
                    <div className="ui cainthus horizontal label">Tags</div>
                        {this.props.image.tags}
                    </div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="user icon"></i>
                            Owner: {this.props.image.ownername}
                        <a href={imageURL}> <i className="linkify icon"></i></a>
                            
                    </span>
                </div>
            </div>
        </div>
        );
    }
}

export default ImageCard;
