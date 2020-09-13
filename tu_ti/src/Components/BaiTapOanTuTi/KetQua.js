import React, { Component } from 'react'
import {connect} from 'react-redux';
 class KetQua extends Component {
    render() {
        return (
            <div>
                 <h3>{this.props.ketqua}</h3>
                <div className='text-primary'>SỐ BÀN THẮNG : <span className='text-warning'>{this.props.soBanThang}</span></div>
                <div className='text-primary'>SỐ MÀN CHƠI : <span className='text-warning'>{this.props.soManChoi}</span></div>
                <button onClick={()=>{
                    this.props.playgame()
                }} className='btn btn-success'>
                    Play Game
                </button>

            </div>
        )
    }
}
const mapStateToProps = (state) => { //state là giá trị từ rootreducer truyền vào component
    return {
    
        ketqua: state.OanTuTiReducer.ketqua,
        soBanThang: state.OanTuTiReducer.soBanThang,
        soManChoi: state.OanTuTiReducer.soManChoi
    }
  }
  const mapDispatchToProps =(dispact)=>{
    return{
        playgame: ()=>{
            let count =20;
            let randomComPuter = setInterval(()=>{
                dispact({
                    type:'Ran_DOM'
                    
                })
                count ++;
                if(count > 30){
                    clearInterval(randomComPuter)
                    dispact({
                        type:'End'
                        
                    })
                }
            },50)
          
        }
    }
}
 export default  connect(mapStateToProps,mapDispatchToProps)(KetQua)
