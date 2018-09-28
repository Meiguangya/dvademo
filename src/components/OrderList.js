import React from 'react';
import { Table, Pagination} from 'antd';


class OrderList extends React.Component{

  constructor(props){
    super(props);

    this.columns = [
      {
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
      }
    ];
  }

  render(){
    return(
      <Table dataSource={} columns={this.columns}/>
    );
  }


}
