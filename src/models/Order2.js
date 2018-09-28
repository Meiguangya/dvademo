import * as orderservice from '../services/orderService';

export default {
  namespace:'order2',
  state:{
    pageInfo:{
      pageSize:2,
      pageNum:1,
      total:0,
      data:[]
    }
  },
  subscriptions:{
    setup({ dispatch, history }) {
      alert('setup2..');
      dispatch({type:'fetch'});
    },
  },
  effects:{
    *fetch(payload,{call,put}){
      alert('fetch2');
      const initPage={
        total:3,
        pageSize:2,
        defaultPageSize:2,
        pageNum:1
      };
      const pageInfo =  yield call(orderservice.getOrderData,{payload:initPage});
      alert('fetch get page2...');
      console.log(pageInfo);
      yield put({type:'initodr',payload:pageInfo});
    },
    *ordChangePage(payload,{call,put}){
      alert(payload.pageNum);
      const page={
        total:3,
        pageSize:2,
        defaultPageSize:2,
        pageNum: payload.pageNum
      };
      const pageInfo = yield call(orderservice.getOrderData,{payload:page});
      yield put({type:'changePage',payload:pageInfo})
    }
  },
  reducers:{
    initodr(state,{payload:pageInfo}){
      alert('initodr2..');
      console.log(pageInfo);
      state.pageInfo = pageInfo;
      return {...state};
    },
    changePage(state,{payload:pageInfo}){
      alert('change...');
      state.pageInfo = pageInfo;
      console.log('changpagedsafasdfasd....');
      console.log(state.pageInfo);
      return{...state};
    }
  }
}
