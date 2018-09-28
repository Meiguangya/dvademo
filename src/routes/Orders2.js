import React from 'react';
import SearchBar from '../components/SearchBar';
import {Table} from 'antd';
import {connect} from 'dva';
import OrderList from '../components/OrderList';

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
    this.chan=this.chan.bind(this);
    //this.changepage=this.changepage.bind(this);
    this.state = {
      pagination: {
        total: this.props.order2.pageInfo.total,
        pageSize: this.props.order2.pageInfo.pageSize,
        defaultPageSize: 2,
        pageNum: this.props.order2.pageInfo.pageNum,
        current: this.pageNum,
        onChange(current) {

          //alert(current);
          //this.changepage;
          //this.props.dispatch({type:'changePage'});
          //console.log(this.props);
          //this.sayhi();
        },
        showTotal: () => {
          return '共' + this.props.order2.pageInfo.total + '条数据';
        },
        sayhi: () => {
          alert('hi');

          console.log(this.props.order2.pageInfo.total);
          console.log(this.props.dispatch);
          this.props.dispatch({type: 'order2/ordChangePage', pageNum: 2});
          this.total = this.props.order2.pageInfo.total;
          this.pageSize = this.props.order2.pageInfo.pageSize;
          this.pageNum = this.props.order2.pageInfo.pageNum;
          this.current = this.pageNum;
          console.log('dfasdfasdfasd');
          console.log(this.pageNum);
        }
      },
    }
  }

  chan(page){
    console.log(page);
    this.props.dispatch({type: 'order2/ordChangePage', pageNum: page.current});
    const pagination=this.state.pagination;
    pagination.total=this.props.order2.pageInfo.total;
    pagination.pageSize=this.props.order2.pageInfo.pageSize;
    pagination.pageNum=this.props.order2.pageInfo.pageNum;
    pagination.current=this.props.order2.pageInfo.pageNum;
    console.log(pagination);
    this.setState({
      pagination:pagination
    });
    alert(page);
  }

  render() {
    console.log(this.props.order2.pageInfo);
    /*let pagination = {
      total: this.props.order2.pageInfo.total,
      pageSize: this.props.order2.pageInfo.pageSize,
      defaultPageSize: 2,
      pageNum:this.props.order2.pageInfo.pageNum,
      current:this.pageNum,
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
        this.total=this.props.order2.pageInfo.total;
        this.pageSize=this.props.order2.pageInfo.pageSize;
        this.pageNum=this.props.order2.pageInfo.pageNum;
        this.current=this.pageNum;
        console.log('dfasdfasdfasd');
        console.log(this.pageNum);
      }
    };*/
    return (
      <div>
        <h2>order page2</h2>
        <SearchBar/>
        {/*<Table columns={columns}
               dataSource={this.props.order2.pageInfo.data}
               pagination={this.state.pagination}
        onChange={this.chan}/>*/}
        <hr/>
        <hr/>
        <OrderList/>
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
