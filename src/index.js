import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from'./data.json'
import Searching from './search.js'
import AppTable from './table.js'
import Main from './mian.js'
import {HashRouter} from 'react-router-dom'
document.title = 'CHECKVISA'
class Game extends React.Component {
    componentDidMount() {
       let c = () => {
            // 获取设备的宽度
            let w = document.documentElement.clientWidth;
            // 根据宽度计算字体大小 将屏幕分成750份，
           let n = (12 * (w / 750) > 16 ? 16 + 'px' : (12 * (w / 750) + "px"))
            document.documentElement.style.fontSize = n //动态设置根元素的字体大小
           // console.log(n)
        }
        c()
        window.addEventListener("resize", c)
    }

  render() {
    return (
      <div className="Wrapper">
        {/*<Searching />*/}

        <div className="main">
            <HashRouter>
                <Main />
            </HashRouter>,
          {/*<AppTable />*/}
        </div>

      </div>
    );
  }
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
