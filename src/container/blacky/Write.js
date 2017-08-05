import React, { Component } from 'react'
import { Button, Input } from 'antd'
import ReactMarkdown from 'react-markdown'

class Write extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      mode: 'edit',
    }
  }
  render() {
    const text = this.state.text
    const user = this.props.user
    const mode = this.state.mode
    let display = <div />
    let btn = <div />
    if (mode === 'edit') {
      display = (<Input
        type="textarea"
        autosize={{ minRows: 3, maxRows: 6 }}
        style={{ width: '100%' }}
        value={text}
        onChange={e => this.setState({ text: e.target.value })}
      />)
      btn = (<Button icon="edit" onClick={() => this.setState({ mode: 'preview' })}>
              글쓸거임?
            </Button>)
    } else if (mode === 'preview') {
      display = <ReactMarkdown source={text} />
      btn = (<div style={{ display: 'flex' }}>
        <Button icon="reload" onClick={() => this.setState({ mode: 'edit' })}>
                수정
              </Button>
        <div style={{ width: '4px' }} />
        <Button icon="cloud-upload" type="primary" onClick={() => console.log(text)}>
                완료
              </Button>
      </div>)
    }
    return (
      <div style={{ marginBottom: '4px', padding: '4px', display: 'flex', background: '#FFF' }} >
        <div style={{ marginRight: '4px', width: '48px', height: '48px', background: '#FFF', overflow: 'hidden' }} >
          {user.has_logged_in &&
          <img src={user.user.image.src} alt={user.user.image.alt} width="100%" />
        }
        </div>
        <div style={{ flexGrow: 1 }}>
          { display }
          <div style={{ justifyContent: 'space-between', display: 'flex', margin: '4px 0px' }} >
            <Button icon="picture" shape="circle" />
            <div>
              {btn}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Write
