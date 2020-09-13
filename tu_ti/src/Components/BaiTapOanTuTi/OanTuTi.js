import React, { Component } from 'react'
import './style/bubble.css'
import {connect} from 'react-redux';
 class OanTuTi extends Component {
    render() {
        console.log(this.props.mangTuTi)
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4'>
                  
                        <div className='speech-bubble'>
                            <img style={{width:'10%'}}  src={this.props.mangTuTi.find(item=>item.datCuoc === true).hinhAnh}></img>
                        </div>
                        <img style={{width:'30%'}} src='./img/player.png'></img>
                        <div className='row'>
                            <div className='col-3'></div>
                            {this.props.mangTuTi.map((sp,index)=>{
                                // Xét border và giá trị đặt cược
                                let border ={};
                                if(sp.datCuoc){
                                    border ={border:'3px solid orange'}
                                }
                                return <div key={index} className='col-2'>
                                <button onClick={()=>{
                                    this.props.datCuoc(sp.ma)
                                }} style={border} >
                                    <img style={{width:'100%'}} src={sp.hinhAnh}></img>
                                </button>
                            </div>
                            })}
                            {/* <div className='col-2'>
                                <button >
                                    <img style={{width:'100%'}} src='./img/keo.png'></img>
                                </button>
                            </div>
                            <div className='col-2'>
                                <button >
                                    <img style={{width:'100%'}} src='./img/bua.png'></img>
                                </button>
                            </div>
                            <div className='col-2'>
                                <button>
                                    <img style={{width:'100%'}} src='./img/bao.png'></img>
                                </button>
                            </div> */}
                            <div className='col-3'></div>

                        </div>
                    </div>
                    <div className='col-4'></div>
                    <div className='col-4'>
                   
                        <div className='speech-bubble'>
                            <img style={{width:'10%'}} src={this.props.computer.hinhAnh}></img>
                        </div>
                        <img style={{width:'30%'}} src='./img/playerComputer.png'></img>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => { //state là giá trị từ rootreducer truyền vào component
   return {
   
         mangTuTi: state.OanTuTiReducer.mangTuTi,
         computer: state.OanTuTiReducer.computer
   }
 }
 const mapDispatchToProps =(dispact)=>{
     return{
         datCuoc: (maCuoc)=>{
             dispact({
                 type:'Chon_XU_XI',
                 maCuoc
             })
         }
     }
 }
export default  connect(mapStateToProps,mapDispatchToProps)(OanTuTi)
