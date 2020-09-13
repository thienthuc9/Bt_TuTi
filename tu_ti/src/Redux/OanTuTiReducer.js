
const MacDinh ={
    mangTuTi :[
        {ma:'keo', hinhAnh:'./img/keo.png',datCuoc:true},
        {ma:'bua', hinhAnh:'./img/bua.png',datCuoc:false},
        {ma:'bao', hinhAnh:'./img/bao.png',datCuoc:false}
    
        
    ],
    ketqua:'Game Tu Xi',
    soBanThang:0,
    soManChoi:0,
    computer :
        {ma:'keo', hinhAnh:'./img/keo.png'}

    
}
export const OanTuTiReducer = (state = MacDinh, action) => {
    switch(action.type){
        case 'Chon_XU_XI':{
            console.log("sss",action.maCuoc)
            let mangCuocUD = [...state.mangTuTi];
            mangCuocUD = mangCuocUD.map((item,index)=>{
                return{...item,datCuoc:false}
            })
            let index = mangCuocUD.findIndex(hihi =>hihi.ma === action.maCuoc)
            if(index !=-1){
                mangCuocUD[index].datCuoc = true;
            }
            state.mangTuTi = mangCuocUD
            return{...state }
        }
        case 'Ran_DOM':{
            let soNN = Math.floor(Math.random() * 3);
            let quanCuocNN = state.mangTuTi[soNN];
            state.computer =quanCuocNN 
            return{...state }
        }
        case 'End':{
            state.soManChoi +=1;
            let mtp = state.mangTuTi.find(hihi =>hihi.datCuoc === true)
            if(mtp.ma ==='keo' && state.computer.ma ==='bao' 
            || mtp.ma ==='bua' && state.computer.ma ==='keo'
            || mtp.ma ==='bao' && state.computer.ma ==='bua'){
                state.soBanThang +=1
                return{...state,ketqua:'Bạn Thắng'}
            }else if(mtp.ma ==='keo' && state.computer.ma ==='keo' 
            || mtp.ma ==='bua' && state.computer.ma ==='bua'
            || mtp.ma ==='bao' && state.computer.ma ==='bao'){
                return{...state,ketqua:'Bạn Hòa'}
            }else if(mtp.ma ==='keo' && state.computer.ma ==='bua' 
            || mtp.ma ==='bua' && state.computer.ma ==='bao'
            || mtp.ma ==='bao' && state.computer.ma ==='keo'){
                return{...state,ketqua:'Bạn Thua'}
            }
            // else if(action.maCuoc ==='keo' && state.computer.ma ==='bua'){
            //     return{...state,ketqua:'Bạn Thua'}
            // }
            // else if(action.maCuoc ==='keo' && state.computer.ma ==='keo'){
            //     return{...state,ketqua:'Bạn Hòa'}
            // }
            // else if(action.maCuoc ==='bao' && state.computer.ma ==='bao'){
            //     return{...state,ketqua:'Bạn Hòa'}
            // }
        }
        default: return {...state}
    }
}
