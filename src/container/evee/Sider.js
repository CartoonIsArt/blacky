import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getUser } from '../../actions'

const SubMenu = Menu.SubMenu;

class Sider extends Component {
  static getAncestorKeys(key) {
    const map = {
      sub1: ['/dashboard'],
      sub2: ['/noties'],
    };
    return map[key] || [];
  }
  constructor(props) {
    super(props)
    this.state = {
      openKeys: [],
    }
  }
  componentWillMount() {
    const user = this.props.user
    if (user.has_logged_in === false) {
      this.props.getUser()
    }
  }
  onOpenChange(openKeys) {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = Sider.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = Sider.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }
  handleClick(e) {
    const history = this.props.history
    history.push(e.key)
  }
  render() {
    const user = this.props.user
    const loc = this.props.location
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={[loc]}
        style={{ width: 240, minHeight: '100vh' }}
        onOpenChange={openKeys => this.onOpenChange(openKeys)}
        onClick={e => this.handleClick(e)}
      >
        {user.has_logged_in ?
          <div style={{ height: '240px', overflow: 'hidden' }}>
            <img src={user.user.image.src} alt={user.user.image.alt} width="100%" />
          </div> :
          <div style={{ height: '240px', background: 'black' }} />
        }
        <SubMenu
          key="sub1"
          title={
            <span><Icon type="appstore" /><span>대시보드</span></span>}
        >
          <Menu.Item key="/dashboard">대시보드</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span><Icon type="notification" /><span>공지사항</span></span>}
        >
          <Menu.Item key="/noties">공지사항</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span><Icon type="team" /><span>회원들</span></span>}
        >
          <Menu.Item key="/members">회원들</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub5"
          title={
            <span><Icon type="smile" /><span>C.I.A.</span></span>}
        >
          <Menu.Item key="/law">회칙</Menu.Item>
          <Menu.Item key="/doorlock">동방 비밀번호</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub6"
          title={
            <span><Icon type="tool" /><span>임원진도구</span></span>}
        >
          <Menu.Item key="/deactivate">활동인구초기화</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub7"
          title={
            <span><Icon type="frown" /><span>로그아웃</span></span>}
        >
          <Menu.Item key="/logout">로그아웃</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router,
  user: state.user,
})
const mapDispatchToProps = ({
  getUser,
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sider))