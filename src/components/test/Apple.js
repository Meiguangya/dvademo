import React from 'react';
import {Button} from 'antd';

class Apple extends React.Component{

  constructor(props){
    super(props);
    //const {name,price} = this.props;
    //const{changMoney} = this.props;
    this.onClickBtn=this.onClickBtn.bind(this);
  }
  sayPrice=()=>{
    this.props.sayPrice();
  };

  onClickBtn=()=>{
    this.props.onPriceChange(1,2);
  }


  render(){
    //this.sayPrice();
    return(
      <div>
        {this.props.name}
        {this.props.price}
        <Button onClick={this.onClickBtn}>改变价格</Button>
      </div>
    );
  }

}

export default Apple;
