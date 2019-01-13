import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) =>{
    const cards = props.images.map((image) => {
        return (
            <ImageCard key={image.id} image={image}/>
        );
    });
    return (
        <div className="ui basic segment">
            <div className="ui container">
                <div className="image-list">
                    {cards}
                </div>
            </div>
        </div>);
}

export default ImageList;