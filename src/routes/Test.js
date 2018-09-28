import React from 'react';
import Apple from '../components/test/Apple';
import {connect} from 'dva';

//无状态函数式组件
//只负责根据传入的props来展示
const Test = ({dispatch,test2}) => {

  /*function changp(num1,num2){
    alert('test2/changp');
    dispatch({
      type:'test2/changeprice',
      payload:{num1,num2}
    });
  }*/

  const apple = {
    name:test2.name,
    price:test2.price,
    sayPrice(){
      alert('sayPrice');
    },
    onPriceChange(num,num2){
      console.log(test2);
      dispatch({
        type:'test2/changeprice',
        payload:{num,num2}
      });
      //alert('onPriceChange..');
      //changp(num,num2);
    },
  };

  return (
    <div onClick={this.sayPrice}>
      Test!!
      <hr/>
      <hr/>
      <Apple {...apple}/>
    </div>
  );
};

export default connect(
  ({test2})=>({test2})
)(Test);
