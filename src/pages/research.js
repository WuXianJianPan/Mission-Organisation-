import React from 'react';
import {ConfigProvider, DatePicker, message, Input, Space, Descriptions, Table} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import './research.css'
import Pro1 from '../img/Pro1.png'
import Pro2 from '../img/Pro2.png'


class Research extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: ''
        }

    }

    research() {
        let ser = document.getElementById('table')
        ser.scrollIntoView({
            behavior: "smooth"
        })
    }

    render() {
        return (
            <div className="researchWrapper">
                <div className="researchTitleBox">
                    <div className="researchHead">
                        <div>VISA</div>
                        <div>CONFIRMATION</div>
                    </div>
                    <div className="researchTitle">
                        Some gadgets to help international students confirm UK company qualifications and work visa
                        types.
                    </div>
                </div>
                <div className="researchPassport">
                    {/*<img src={pImg} alt="pImg"/>*/}
                </div>
                <div className="researchMain">
                    <div className="researchBack">
                        <div className="researchBackground">BACKGROUND</div>
                        <div className="researchBackContent">
                            <div>The number of international students in the UK is on the rise</div>
                            <div>Globally, the number of international students is on the rise, with more than 5.6
                                million international students studying in higher education worldwide in 2020, according
                                to the Institute for International Education.
                            </div>
                            <div>Even under the influence of the epidemic, the number of international students is
                                increasing year by year, especially those who choose the UK.
                            </div>
                            <div>In the 2020/2021 academic year, the number of students taught in the first year of
                                postgraduates will increase by 8%, and the proportion of non-EU students will increase
                                every year. International students make up almost 60% of all full-time postgraduate
                                students in the UK. (Higher Education Student Statistics: UK, 2020/21 | HESA, 2022)
                            </div>
                        </div>
                    </div>
                    <div className="researchPSW">
                        <div className="researchPSWContent">
                            <div>PSW Visa brings new opportunities</div>
                            <div>In September 2019, the UK government announced that international students with a
                                bachelor's degree or above will be allowed to obtain a two-year PSW work visa after
                                June 2021.
                            </div>
                            <div>According to the latest report from HEPI and Kaplan International Pathway, more
                                than 71% of international students intend to work in the UK after graduation. This
                                means that millions of international students in the UK alone choose to continue
                                their careers in the UK.
                            </div>
                            <div>These huge numbers show that international students are a user group that we need
                                to pay attention to and deserve attention.
                            </div>
                        </div>
                        <div className="researchPSWImg"></div>
                    </div>
                </div>
                <div className="researchMiddle">
                    It has become a major trend for international students to stay in the UK for employment after
                    graduation.
                </div>
                <div className="researchMain">
                    <div className="researchPerTitle">PERSONA</div>
                    <div className="researchPer">
                        <div className="researchPerImg"></div>
                        <div className="researchPerMain">
                            <div>
                                Jakson <br/>
                                24 <br/>
                                International Student
                            </div>
                            <div>
                                From China <br/>
                                Studying at Goldsmiths <br/>
                                Master's Degree in Computing
                            </div>
                        </div>
                    </div>
                    <div className="researchPerMiddle">
                        “ Which companies can provide me with a T2 visa? ”
                    </div>
                    <div className="researchPerSelf">
                        I have always liked the UK, so I chose to study in the UK for my master's degree. I have been
                        looking forward to working in the UK since I graduated, so I have been preparing for employment
                        during this period. From the resume to the professional skills improvement, this series of
                        things are very complicated and complicated. Among them, the government requirements for visas
                        are even more of a headache for me.
                    </div>
                </div>
                <div className="researchProblem">
                    <div>PROBLEM</div>
                    <div className="researchProblemFlex">
                        <div>
                            <div className="researchProblemImg">
                                <img src={Pro1} alt=""/>
                            </div>
                            <div className="researchProText">
                                The company's visa qualification is not clear
                            </div>
                        </div>
                        <div>
                            <div className="researchProblemImg">
                                <img src={Pro2} alt=""/>
                            </div>
                            <div className="researchProText">
                                Do not know how to choose the right type of visa
                            </div>
                        </div>
                    </div>
                </div>
                <div className="researchProblem">
                    <div>SOLUTION</div>
                    <div className="researchProblemFlex">
                        <div>
                            <div className="researchProblemImg" style={{backgroundColor: "#E0F0CC"}}>
                                <img src={Pro1} alt=""/>
                            </div>
                            <div className="researchProText">
                                Check the list of companies available on the UK government website to confirm
                                qualifications.
                            </div>
                        </div>
                        <div>
                            <div className="researchProblemImg" style={{backgroundColor: "#E0F0CC"}}>
                                <img src={Pro2} alt=""/>
                            </div>
                            <div className="researchProText">
                                According to the future plan, clarify your own needs, and finally choose the
                                corresponding visa type.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Research