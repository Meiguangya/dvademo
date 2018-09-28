import React from 'react';
import OrderTable from '../components/eventorder/OrderTable'
import {connect} from 'dva';

const EventOrder=({dispatch,eventorder})=>{

  const orderTable={
    data:eventorder.data,
    pagination:eventorder.pagination,
    onChange(page){
      alert(page.current);
      console.log(page);
    }
  };

  console.log(eventorder);

  return(
    <React.Fragment>
      <div>
        <h1>EventOrder</h1>
        <hr/>
        <OrderTable props={orderTable}/>
      </div>
    </React.Fragment>

  );
}
export default connect(
  ({eventorder})=>({eventorder})
) (EventOrder);
