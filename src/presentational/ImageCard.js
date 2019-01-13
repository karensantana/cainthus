import React from 'react';
import '../styles/ImageList.css'

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.imageDivRef = React.createRef();
        this.state = { spans: 0 }
    }
    setSpans = () =>{
        const height = this.imageDivRef.current.clientHeight;
        const spans = Math.ceil(height/10)+1;
        this.setState({spans});
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
                        <a className="header">{this.props.image.title}</a>
                        <div className="meta">
                        <span className="date">Date Taken: {this.props.image.datetaken}</span>
                    </div>
                    <div className="description">
                        {this.props.image.tags}
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="user icon"></i>
                            Owner: {this.props.image.ownername}
                    </a>
                </div>
            </div>
        </div>
        );
    }
}

export default ImageCard;
