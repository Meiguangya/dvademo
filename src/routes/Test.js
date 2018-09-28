import React from 'react';
import Apple from '../components/test/Apple';
import {connect} from 'dva';

//无状态函数式组件
//只负责根据传入的props来展示
const Test = (props) => {


  const apple = {
    name:props.test2.name,
    price:10,
    sayPrice(){
      console.log(props);

      alert('sss');
    }
  };

  return (
    <div>
      Test!!
      <hr/>
      <hr/>
      <Apple {...apple}/>
    </div>
  );
}

export default connect(
  ({test2})=>({test2})
)(Test);
