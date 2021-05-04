import React from 'react';


class Answer extends React.Component{
    render(){ 
    return(
        <div className="answer" >
         
         Your weight on {this.props.planetprops} is { (  this.props.weightprops * this.props.gravityprops  )  } kg
         
        </div>
    )
}
}
export default Answer; 