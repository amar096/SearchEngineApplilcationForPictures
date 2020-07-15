import React, { Component } from 'react'

export class ImageCard extends Component {
    constructor(props)
    {
        super(props);
        this.state={spans:0};
        this.imageRef = React.createRef();
    }

    componentDidMount()
    {
        if(this.props.image.urls === null)
        {
            return <div><p>No images found</p></div>
        }
        this.imageRef.current.addEventListener('load',this.setSpans);        
    }

    setSpans=()=>
    {
        const height = this.imageRef.current.clientHeight; 
       const spans = Math.ceil(height/10);    
       
       this.setState({spans});
    }

    render() {
        if(this.props.image.urls === null)
        {
            return <div><p>No images found</p></div>
        }
        const {description,urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef}
                    alt={description} 
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard
