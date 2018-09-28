

export default {
  namespace: 'eventorder',

  state: {
    data:[],
    pagination:{
      current:null,
      hideOnSinglePage:null,
      pageSize:null,
      total:null,
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(location=>{
        if(location.pathname==='/eventorder'){
          dispatch({
            type:'fetch'
          });
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      //console.log(payload);

      yield put({
        type: 'save',
        payload:{
          data:[1],
          pagination:{
            current:2,
            hideOnSinglePage:true,
            pageSize:4,
            total:6,
          },
        }
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
}
