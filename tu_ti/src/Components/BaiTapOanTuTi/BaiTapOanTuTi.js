import React, { Component } from 'react'
import './style/css.css';
import OanTuTi from './OanTuTi';
import KetQua from './KetQua';

export default class BaiTapOanTuTi extends Component {
    render() {
        return (
            <div className='baiTap'>
               
                <OanTuTi></OanTuTi>
                <KetQua></KetQua>
            </div>
        )
    }
}
