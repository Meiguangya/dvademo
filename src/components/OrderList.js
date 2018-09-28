import React from 'react';
import {Table, Pagination} from 'antd';


class OrderList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const columns = [
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
    return (
      <div>
        <Table dataSource={[]} columns={columns}/>
      </div>

    );
  }

}

export default OrderList;
