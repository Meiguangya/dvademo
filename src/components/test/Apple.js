import React from 'react';

class Apple extends React.Component{

  constructor(props){
    super(props);
    //const {name,price} = this.props;
  }
  sayPrice=()=>{
    this.props.sayPrice();
  };

  render(){

    return(
      <div onClick={this.sayPrice}>
        {this.props.name}
        {this.props.price}
      </div>
    );
  }

}

export default Apple;
