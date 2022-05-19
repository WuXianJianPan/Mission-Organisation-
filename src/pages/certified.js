import React from 'react';
import {ConfigProvider, DatePicker, message, Input, Space, Descriptions, Table} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import './certified.css'
import hImg from '../img/head.jpg'
import pImg from '../img/passport.jpg'
import AppTable from '../table.js'


class Certified extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: '',
            hasVerticalScrolled: false
        }

    }

    research() {
        let ser = document.getElementById('table')
        ser.scrollIntoView({
            behavior: "smooth"
        })
    }

    //在componentDidMount，进行scroll事件的注册，绑定一个函数，让这个函数进行监听处理
    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll)
        // console.log(getComputedStyle(window.document.documentElement)['font-size'])
    }

    //在componentWillUnmount，进行scroll事件的注销
    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
    }

    bindHandleScroll = (event) => {
        // 滚动的高度
        const scrollTop = event.target.documentElement.scrollTop
            || window.pageYOffset
            || event.target.body.scrollTop;


        let htmlFontSize = document.documentElement.style.fontSize
        let min = parseInt(htmlFontSize.slice(0, htmlFontSize.indexOf('px')))*48
        // console.log(scrollTop,htmlFontSize)
        this.setState({
            hasVerticalScrolled: scrollTop > min
        })
    }

    render() {
        return (
            <div className="certifiedWrapper">
                <div className={'titleBox ' + (this.state.hasVerticalScrolled? 'opacity-0' : 'opacity-1')}>
                    <div className="head">
                        <div className="hImg">
                            <img src={hImg} alt="head"/>
                        </div>
                        <div className="name">
                            @Yanqi Song
                        </div>
                        <div className="master">
                            Master of UXE
                        </div>
                    </div>
                    <div className="title">
                        <div className="H1">VISA CONFIRMATION</div>
                        <div className="H2">Some gadgets to help international students confirm UK company
                            qualifications and work visa types.
                        </div>
                        <div className="H3">Based on a personal graduation project at Goldsmiths, University of London -
                            The user experience of international student users for Workfinder
                        </div>
                    </div>
                </div>
                <div className="passport">
                    <img src={pImg} alt="pImg"/>
                </div>
                <div className="tableTitle">
                    <div className="H2">CERTIFIED COMPANIES</div>
                    <div className="H25">Filter to find companies with visa qualifications</div>
                </div>
                <div className="table" id="table">
                    <AppTable></AppTable>
                </div>
            </div>

        );
    }
}

export default Certified