import { Component } from "react";

class ImageComponent extends Component {
    render(){
        return <img src={this.props.srcImage} alt={this.props.altImage} />
    }
}

export default ImageComponent