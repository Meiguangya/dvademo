import React from 'react';
import SearchBar from '../components/SearchBar'
import {Table} from 'antd';
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
  id: '1',
  reaItem: 'sss',
  reaContent: 'content',
  commitTime: '2018年9月27日15:07:53'
}, {
  key: '2',
  id: '2',
  reaItem: 'sss',
  reaContent: 'content',
  commitTime: '2018年9月27日15:07:53'
}, {
  key: '3',
  id: '3',
  reaItem: 'sss',
  reaContent: 'content',
  commitTime: '2018年9月27日15:07:53'
}];


const pagination = {
  total: 3,
  pageSize: 2,
  defaultPageSize: 2,
  onChange(current) {
    alert(current);
  },
  showTotal: () => {
    return '共' + 3 + '条数据';
  }
};

class Orders2 extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props.order.list);
    return (
      <div>
        <SearchBar/>
        <Table columns={columns} dataSource={this.props.order.list} pagination={pagination}/>
        <hr/>
        <hr/>
        {this.props.list}
      </div>
    )
  };
}


// function mapStateToProps(state) {
//   return {list: state.list};
// }

export default connect(({order})=>({order}))(Orders2);
