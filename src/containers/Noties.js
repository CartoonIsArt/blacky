import React, { Component } from 'react'
import { Icon, Badge } from 'antd'


class Noties extends Component {
  render() {
    const iter = [1, 2, 3]
    return (
      <div style={{ height: '192px' }}>
        <div style={{ height: '25%', padding: '12px', fontSize: '12pt', textAlign: 'left', display: 'flex', flexDrection: 'column' }}>
          <div style={{ marginRight: '12px', fontSize: '18pt' }}>
            <Icon type="notification" />
            알람
          </div>
          <div style={{ fontSize: 'small', marginTop: '4px' }}>
            <Badge dot>
              <a href="#">Link someting</a>
            </Badge>
          </div>
        </div>
        {iter.map(i =>
          (<div key={i} style={{ height: '25%', display: 'flex', alignItems: 'stretch' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '24px', overflow: 'hidden' }}>
              <img width="100%" height="100%" src="https://cia.kw.ac.kr/media/04531d51-2429-4a8a-9ec5-32d5f00a544b.PNG" alt="profile" />
            </div>
            <div style={{ flexGrow: '2', display: 'flex', alignItems: 'stretch', flexDirection: 'column' }}>
              <div > time </div>
              <div style={{ flexGrow: '1' }}> asdf </div>
            </div>
          </div>),
        )}
      </div>
    )
  }
}

export default Noties
