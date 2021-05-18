import React from 'react';


class Image extends React.Component{ 
    render(){
    return(
        <div>
            <img src={`./images/${this.props.planetprops}.png`} alt="Planet" className="image" /> 
        </div>
    )
}
}

export default Image;