import React from 'react'
import { Wrapper,Cont} from './style'
import yaoxinh from '../../static/yaoxinh.jpg'

import github from '../../static/github.svg'
import zhihu from '../../static/zhihu.svg'
import zhanku from '../../static/zhanku.svg'

import './styles.css'

class Avator extends React.Component {
  render() {
    const data = [{url:github,id:1},{url:zhihu,id:2,},{url:zhanku,id:3,}]
    return (
      <div className="section Avator">
        <Wrapper>
          <img className="pic"src={yaoxinh} alt=""/ >
          <div className='AvatorCenter'>
            <h1>姚新华</h1>
          </div>
            <p>前端新人，请多指教</p>
            <div className='content'>
            <a href="https://github.com/cliYao">
              <Cont key={data[0].id} >
                <img src={data[0].url} style={data[0].width} alt=""/>
              </Cont>
            </a>
			<a href="https://www.zhihu.com/people/claire-90/activities">
			  <Cont key={data[1].id} >
			  <img src={data[1].url} style={data[1].width} alt=""/>
			  </Cont>
			</a>
			  <a href="https://weibo.com/5897579519/profile?topnav=1&wvr=6&is_all=1">
			  <Cont key={data[2].id} >
			  <img src={data[2].url} style={data[2].width} alt=""/>
			  </Cont></a>
        </div>
        </Wrapper>

        <span className="arrow" role="img">👇</span>
        
      </div>
    );
  }
}
export default Avator
