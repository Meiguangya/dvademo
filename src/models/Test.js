export default {
  namespace:'test2',
  state: {
    name:null,
    price:null,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(location=>{
        if(location.pathname==='/test'){
          dispatch({
            type:'showapple',
            payload:{
              name:'苹果',
              price:10.0
            }
          });
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *showapple({payload},{call,put}){
      console.log('showapple');
      console.log(payload);
      const data={name:'香蕉',price:20};
      yield put({
        type:'getapple',
        payload:{name:'香蕉',price:20}
      });
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    getapple(state,action){
      console.log('getapple');
      console.log(action.payload);

      return {...state,...action.payload};
    }
  },
}
