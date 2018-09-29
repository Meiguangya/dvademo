import React from 'react';
import {Tabs} from 'antd';
import AlterRecord from './AlterRecord';

const OtherRecordTab=()=>{

  const TabPane = Tabs.TabPane;

  return(
    <div>
      <Tabs>
        <TabPane tab="修改记录" key="1">
          <AlterRecord/>
        </TabPane>
        <TabPane tab="短信记录" key="2">xxxx</TabPane>
      </Tabs>
    </div>
  );
};

export default OtherRecordTab;
