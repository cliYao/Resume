import React from 'react'

import Leetcode from '../../static/leetcode.jpg'
import FlappyBird from '../../static/flappybird.png'
import Lodash from '../../static/Lodash.jpg'
import Jianshu from '../../static/jianshu.png'
import Github from '../../static/github.png'


import './style.css'

class Project extends React.Component {
  render() {
    return(
      <div className="section project">
        <h1 className='title'>项目经历</h1>
        <div className='ProjectWrapper'>
          <div className='Wrapper'>
            <img src={Jianshu} alt="" className='pic'/>
            <p>仿简书网站，前端使用 React 开发，
              实现网站登陆，写文章，下拉无限加载，搜索框等功能</p>
            <div className='tool'>
              <a href='https://github.com/cliYao/cliYao_jianshu_react' className='link'>
                <img src={Github} alt=""/>
              </a>
            </div>
          </div>
          <div className='Wrapper'>
            <img src={FlappyBird} alt="" className='pic'/>
            <p>实现了一个简易画板，包括绘画，放大，取色器，拖拽等功能，使用canvas绘制，
              以节省内存提高性能， 后端自动保存图片状态，服务器重启不会丢失</p>
            <div className='tool'>
              <a href='https://github.com/cliYao/Pixel-Painter' className='link'>
                <img src={Github} alt=""/>
              </a>
            </div>
          </div>
          <div className='Wrapper'>
            <img src={Leetcode} alt="" className='pic'/>
            <p>为了提升自己的JS基础功,培养自己的编程思维和算法能力,
              我通过刷Leetcode来进行训练,目前已经通过215题,通过刷Leetcode让我对后端数据
              的处理得到了提升，我的编程思维也日渐逻辑化.</p>
            <div className='tool'>
              <a href='https://leetcode.com/cliyao/' className='link'>
                <img src={Github} alt=""/>
              </a>
            </div>
          </div> 
          <div className='Wrapper'>
            <img src={Lodash} alt="" className='pic'/>
            <p>Lodash是一个一致性、模块化、高性能的 JavaScript 实用工具库。
              为了更好掌握这个库，提升JS基础知识,自己手动实现了90% Lodash函数,
              源码可在GitHub上查询和获取.</p>
            <div className='tool'>
              <a href='https://github.com/cliYao/Lodash-Exercise' className='link'>
                <img src={Github} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project