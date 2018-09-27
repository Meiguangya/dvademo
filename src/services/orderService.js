import request from '../utils/request';

export function getOrderData(initPage){
  alert('getdata...');
  console.log(initPage);
  alert(initPage.payload.total);
  const data = [{
    key: '1',
    id:'1',
    reaItem:'aaa',
    reaContent:'content',
    commitTime:'2018年9月27日15:07:53'
  }, {
    key: '2',
    id:'2',
    reaItem:'bbb',
    reaContent:'content',
    commitTime:'2018年9月27日15:07:53'
  }, {
    key: '3',
    id:'3',
    reaItem:'ccc',
    reaContent:'content',
    commitTime:'2018年9月27日15:07:53'
  }];
  return  data;
}
