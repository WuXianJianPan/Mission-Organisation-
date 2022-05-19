import React from 'react';
import {ConfigProvider, DatePicker, message, Input, Space, Descriptions, Table} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import {TwitterOutlined,HomeOutlined} from '@ant-design/icons'
import './mian.css'
import hImg from './img/head.jpg'
import pImg from './img/passport.jpg'
import AppTable from './table.js'
import Certified from './pages/certified'
import Research from './pages/research'
import {Link, Route, Routes} from 'react-router-dom'


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: '',
            active: true
        }

    }
    componentDidMount() {
        const urlParams = new URL(window.location.href);
        const pathname = urlParams?.pathname;
        console.log(pathname)
        let _this = this
        window.addEventListener('hashchange', () => {
            _this.changActive()
            console.log('asdasd')
        })
    }

    research = ()=> {
        this.setState({
            active: true
        })
        let ser = document.getElementById('table')
        ser.scrollIntoView({
            behavior: "smooth"
        })

    }

    changeFont() {
        let htmlFontSize = getComputedStyle(window.document.documentElement)['font-size']
    }

    changActive = ()=> {
        this.setState({
            active: false
        })
    }



    render() {
        return (
            <div className="wrapper">
                <div className="topBox">
                    <div className="leftTop">
                        <div className="certified" onClick={this.research}>
                            <Link to='/' className={this.state.active? 'active' : ''}>Certified companies</Link>
                        </div>
                        {/*<div className="visa">Type of Visa</div>*/}
                        <div className="about" onClick={this.changActive}>
                            <Link to='/Research' className={this.state.active? '' : 'active'}>Introduction</Link>
                        </div>
                    </div>
                    <div className="rightTop">
                        <div className="aboutMe">
                            <a href="https://www.linkedin.com/in/yanqisong123/" target="_blank">About me</a></div>
                        <div className="twr">
                            <a href="https://twitter.com/yanqi_song" target="_blank"><TwitterOutlined/></a>
                            </div>
                    </div>
                </div>
                <Routes>
                    <Route element={<Certified/>} path='/'/>
                    <Route element={<Research/>} path='/Research'/>
                </Routes>
                <div className="footer">
                    @Data Sources: www.gov.uk (Last updated 3 May 2022)
                </div>
            </div>

        );
    }
}

export default Main