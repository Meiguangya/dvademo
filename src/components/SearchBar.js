import React from 'react';
import {Select,TimePicker,Button} from 'antd';
//import {Option} from 'antd/es/option';

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class SearchBar extends React.Component{

  state={
    value:null,
  };

  onChange = (time) => {
    console.log(time);
    this.setState({ value: time });
  }

  render(){
    return(
      <div>

        <Select defaultValue="1" style={{ width: 120 }} onChange={handleChange}>
          <Option value="1">--请选择--</Option>
          <Option value="2">事发地址</Option>
        </Select>

        上报时间:<TimePicker value={this.state.value} onChange={this.onChange}  />

        <Button type="primary" shape="circle" icon="search" />

      </div>



    )
  }
}

export default SearchBar;
