import React from 'react';
import {Table} from 'antd';

const AlterRecord=()=>{

  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
    },{
      title: '修改人',
      dataIndex: 'alterUser',
      key: 'alterUser',
    }, {
      title: '修改时间',
      dataIndex: 'alterTime',
      key: 'alterTime',
    }, {
      title: '字段',
      key: 'col',
      dataIndex: 'col',
    },{
      title: '修改前',
      key: 'before',
      dataIndex: 'before',
    },{
      title: '修改后',
      key: 'after',
      dataIndex: 'after',
    }
  ];

  return(
    <div>
      <Table columns={columns} dataSource={[]} rowKey={record=>record.id}>

      </Table>
    </div>
  );



};
export default AlterRecord;
