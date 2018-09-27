import React from 'react';
import SearchBar from '../components/SearchBar'
import { Table, Pagination} from 'antd';
import {connect} from 'dva';

const columns = [{
  title: '序号',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '关联项',
  dataIndex: 'reaItem',
  key: 'reaItem',
}, {
  title: '关联内容',
  dataIndex: 'reaContent',
  key: 'reaContent',
}, {
  title: '上报时间',
  key: 'commitTime',
  dataIndex: 'commitTime',
}];

const data = [{
  key: '1',
  id:'1',
  reaItem:'sss',
  reaContent:'content',
  commitTime:'2018年9月27日15:07:53'
}, {
  key: '2',
  id:'2',
  reaItem:'sss',
  reaContent:'content',
  commitTime:'2018年9月27日15:07:53'
}, {
  key: '3',
  id:'3',
  reaItem:'sss',
  reaContent:'content',
  commitTime:'2018年9月27日15:07:53'
}];



const pagination={
  total:3,
  pageSize:2,
  defaultPageSize:2,
  onChange(current){
    alert(current);
  },
  showTotal:()=>{
    return '共'+3+'条数据';
  }
};


function Order({dispatch,list,pageObj}){
  //const data = {orders}
  const orderdata = {list};
  console.log(orderdata);
  /*if({order}){
    alert('true');
    //console.log({order});
    //console.log({order:order.list});
    alert(orderdata.length);
  }*/
  return(
    <div>
      <SearchBar/>
      <Table columns={columns} dataSource={list} pagination={pagination} />
      <hr/>
    </div>
  )

}

/*function mapStateToProps(state) {      //将数据模型索引到props。
  return {orders:state.order}
}*/

export default connect(
  ({order})=>{
    return {
      list:order.list,
      pageObj:order.pageObj
    };
  }
) (Order);
