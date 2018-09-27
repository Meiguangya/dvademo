import * as orderservice from '../services/orderService';

export default {
  namespace:'order',
  state:{
    list:[],
    pageObj:null
  },
  subscriptions:{
    setup({ dispatch, history }) {
      alert('setup..');

      dispatch({type:'fetch'});
    },
  },
  effects:{
    *fetch(payload,{call,put}){
      alert('fetch');
      const initPage={
        total:3,
        pageSize:2,
        defaultPageSize:2
      };
      const orders =  yield call(orderservice.getOrderData,{payload:initPage});
      alert(orders.length);
      yield put({type:'initodr',payload:orders});
    }
  },
  reducers:{
    initodr(state,{payload:orders}){
      alert('init order..');
      console.log(orders);
      state.list = orders;
      return {...state};
    },
  }
}
