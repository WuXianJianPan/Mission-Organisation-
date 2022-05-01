import React from 'react';
import './index.css';
import Data from'./data.json'
import { ConfigProvider, DatePicker, message , Input, Space , Descriptions , Table } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import './search.css'

const data = Data['data']
const { Search } = Input;

const columns = [
  {
    title: 'Organisation Name',
    dataIndex: 'Organisation Name',
    key: 'Organisation Name',
  },
  {
    title: 'Town/City',
    dataIndex: 'Town/City',
    key: 'Town/City',
  },
  {
    title: 'County',
    dataIndex: 'County',
    key: 'County',
  },
  {
    title: 'Type & Rating',
    dataIndex: 'Type & Rating',
    key: 'Type & Rating',
  },
  {
    title: 'Route',
    dataIndex: 'Route',
    key: 'Route',
  }
];

function Item(props){
  return (
      <Table columns={columns} dataSource={props.showList} />
    )
}

class Searching extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showList: data
    }

  }
  onSearch = (value) => {
    if(value === '' || value === null){
      this.setState({
        showList:data
      })
      return
    }
    let res = data.filter(item=>item['Organisation Name'].indexOf(value)>=0);
    this.setState({
      showList:res
    })
    console.log(this.state.showList.length)
  };
  render() {
    return (
      <div className="game">
        <div className="searchBox">
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={this.onSearch}
          />
        </div>
        <div className="listBox">
          <Item showList={this.state.showList}/>

        </div>
      </div>

    );
  }
}

export default Searching