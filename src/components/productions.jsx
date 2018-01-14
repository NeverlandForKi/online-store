import React from 'react'
import { Card, WingBlank, WhiteSpace, SearchBar, Carousel } from 'antd-mobile'

class Productions extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    slideIndex: 0,
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <SearchBar placeholder="搜索" maxLength={8} />
        <Carousel
          autoplay={false}
          infinite
          selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="###"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <Card>
          <Card.Header
            title="产品名称"
            thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
            extra={<span>价格</span>}
          />
          <Card.Body>
            <div>产品介绍介绍。。。。卡了圣诞快乐积分卡咖啡拉上来付了款卡死了附件埃里克发见附件发卡机开发可开发接口会计法开房间发附件咖啡粉建安费</div>
          </Card.Body>
          <Card.Footer content="左侧footer，需不需要？" extra={<div>右侧footer，需要吗？</div>} />
        </Card>
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title="产品名称"
            thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
            extra={<span>价格</span>}
          />
          <Card.Body>
            <div>产品介绍介绍。。。。</div>
          </Card.Body>
          <Card.Footer content="需不需要？" extra={<div>需要吗？</div>} />
        </Card>
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title="产品名称"
            thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
            extra={<span>价格</span>}
          />
          <Card.Body>
            <div>产品介绍介绍。。。。</div>
          </Card.Body>
          <Card.Footer content="需不需要？" extra={<div>需要吗？</div>} />
        </Card>
      </WingBlank>
    )
  }
}

export default Productions