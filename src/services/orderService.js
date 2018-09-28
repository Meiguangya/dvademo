import request from '../utils/request';

export function getOrderData(pageInfo){
  alert('getdata2...');
  console.log(pageInfo);
  // const page=null;
  console.log(pageInfo.payload.pageNum);
  if(pageInfo.payload.pageNum===1){
    alert('pageNum=1');
    pageInfo.pageNum=1;
    pageInfo.pageSize=2;
    pageInfo.total=4;
    pageInfo.data = [{
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
    }];
    return pageInfo;
  }
  if(pageInfo.payload.pageNum===2){
    alert('pageNum=2');
    console.log('2');
    pageInfo.pageNum=2;
    pageInfo.pageSize=2;
    pageInfo.total=4;
    pageInfo.data = [{
      key: '3',
      id:'3',
      reaItem:'ccc',
      reaContent:'content',
      commitTime:'2018年9月27日15:07:53'
    }, {
      key: '4',
      id:'4',
      reaItem:'ddd',
      reaContent:'content',
      commitTime:'2018年9月27日15:07:53'
    }];
    console.log(pageInfo);
    return pageInfo;
  }

  //return  data;
}
