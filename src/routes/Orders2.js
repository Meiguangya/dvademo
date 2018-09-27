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


/*const pagination = {
  total: this.props.pageInfo.total,
  pageSize: this.props.pageInfo.pageNum,
  defaultPageSize: 2,
  onChange(current) {
    alert(current);
  },
  showTotal: () => {
    return '共' + this.props.pageInfo.total + '条数据';
  }
};*/

class Orders2 extends React.Component {
  constructor(props) {
    super(props);
    //this.changepage=this.changepage.bind(this);
    this.change=this.change.bind(this);
  }

  change(){
    alert('change');
  }

  render() {
    console.log(this.props.order2.pageInfo);
    const pagination = {
      total: this.props.order2.pageInfo.total,
      pageSize: this.props.order2.pageInfo.pageSize,
      defaultPageSize: 2,
      that:222,
      onChange(current) {

        //alert(current);
        //this.changepage;
        //this.props.dispatch({type:'changePage'});
        //console.log(this.props);
        this.sayhi();
      },
      showTotal: () => {
        return '共' + this.props.order2.pageInfo.total + '条数据';
      },
      sayhi:()=>{
        alert('hi');

        console.log(this.props.order2.pageInfo.total);
        console.log(this.props.dispatch);
        this.props.dispatch({type:'order2/ordChangePage',pageNum:2});
      }
    };
    return (
      <div>
        <h2>order page2</h2>
        <SearchBar/>
        <Table columns={columns} dataSource={this.props.order2.pageInfo.data} pagination={pagination}/>
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

export default connect(
  ({order2})=>({order2})
)(Orders2);
