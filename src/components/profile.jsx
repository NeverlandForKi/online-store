import React from 'react'
import { List } from 'antd-mobile';

const Item = List.Item;

class ProfileComponent extends React.Component {
  state = {
    disabled: false,
  }

  render() {
    return (<div>
      <List renderHeader={() => '姓名'} className="my-list">
        <Item extra={'fengchen'}>姓名</Item>
      </List>
      <List renderHeader={() => '个人资料'} className="my-list">
        <Item>Title</Item>
        <Item arrow="horizontal" onClick={() => {}}>Title</Item>
        <Item extra="" arrow="horizontal" onClick={() => {}}>Title</Item>
        <Item extra="blala" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
          Title
        </Item>
      </List>
      <List renderHeader={() => '我的优惠券'} className="my-list">
        <Item extra="extra content">
          Title
        </Item>
      </List>
      <List renderHeader={() => '左侧带个图标？'}>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >钱包</Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {}}
          arrow="horizontal"
        >
          优惠券
        </Item>
      </List>
    </div>);
  }
}

export default ProfileComponent