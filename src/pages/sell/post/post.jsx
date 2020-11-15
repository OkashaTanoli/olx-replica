import React from 'react';
import './post.css';
import { connect } from 'react-redux'
import { AiFillWarning,AiOutlineCar,AiOutlineMobile } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import olx from '../../../images/olx.png'
import {FiShoppingBag,FiWatch} from 'react-icons/fi'
import {BiCar,BiLandscape} from 'react-icons/bi'
import {FaFan} from 'react-icons/fa'
import {BsHouse} from 'react-icons/bs'
import {RiMotorbikeLine} from 'react-icons/ri'
import {GiRunningShoe,GiFarmTractor} from 'react-icons/gi'
import {ImTablet} from 'react-icons/im'
import {TiDeviceTablet} from 'react-icons/ti'
import {Categories,sendUserDataToLocalStorage} from '../../../store/action/index'


class Post extends React.Component {




    componentDidMount = () =>{
        this.props.sendUserDataToLocalStorage()
      }

      
    render() {
        console.log(this.props.Cat)
        return (
            <div  style={{width:'100%'}}>
                {this.props.CurrentUser === null ?
                <div  style={{textAlign:'center',marginTop:'15%'}}>
                    <AiFillWarning fontSize='100px' style={{color:'rgb(0, 43, 46)'}}/>
                    <h1 style={{fontSize:'50px',color:'rgb(0, 43, 46)',fontWeight:'700',textShadow:'5px 0px 5px gray',fontFamily:" Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>Dear User ,</h1>
                    <h1 className="dearUsers" style={{fontSize:'40px',color:'rgb(46, 46, 46)',fontWeight:'700',textShadow:'5px 0px 5px gray',fontFamily:" Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>Please Login First</h1>
                    <Link to='/'><button style={{backgroundColor:"rgba(0, 238, 255, 0.3)",border:"none",fontSize:'30px',fontWeight:'700'}}>Login</button></Link>
                
                </div>
                   :
                <div style={{width:'100%'}}>
                    <div style={{ width: '100%', backgroundColor: 'rgb(245, 245, 245)', padding: '20px 20px 20px 75px', boxShadow: '0 0 5px 1px silver' }}>
                        <img src={olx} width="50px" />
                    </div>
                    <h3 style={{textAlign:'center',marginTop:'15px',fontWeight:'700',color:'rgb(0, 43, 46)'}}>POST YOUR AD</h3>
                    <div className="mainCatSelDiv">
                        <div className='chooseACat'><h6>CHOOSE A CATEGORY</h6></div>
                        <div onClick={()=>{this.props.Categories("Mobile",this.props.history)}} className="CategoriesSelection forBorder"><AiOutlineMobile className="forMarginRight"/>Mobile</div>
                        <div onClick={()=>{this.props.Categories("Bags",this.props.history)}} className="CategoriesSelection"><FiShoppingBag className="forMarginRight"/>Bags</div>
                        <div onClick={()=>{this.props.Categories("Cars",this.props.history)}} className="CategoriesSelection forBorder"><BiCar className="forMarginRight"/>Cars</div>
                        <div onClick={()=>{this.props.Categories("Fans",this.props.history)}} className="CategoriesSelection "><FaFan className="forMarginRight"/>Fans</div>
                        <div onClick={()=>{this.props.Categories("House",this.props.history)}} className="CategoriesSelection forBorder"><BsHouse className="forMarginRight"/>House</div>
                        <div onClick={()=>{this.props.Categories("Motorcycle",this.props.history)}} className="CategoriesSelection "><RiMotorbikeLine className="forMarginRight"/>Motorcycle</div>
                        <div onClick={()=>{this.props.Categories("Land & Plots",this.props.history)}} className="CategoriesSelection forBorder"><BiLandscape className="forMarginRight"/>Land & Plots</div>
                        <div onClick={()=>{this.props.Categories("Shoes",this.props.history)}} className="CategoriesSelection "><GiRunningShoe className="forMarginRight"/>Shoes</div>
                        <div onClick={()=>{this.props.Categories("Tablets",this.props.history)}} className="CategoriesSelection forBorder"><ImTablet className="forMarginRight"/>Tablets</div>
                        <div onClick={()=>{this.props.Categories("Tractors",this.props.history)}} className="CategoriesSelection "><GiFarmTractor className="forMarginRight"/>Tractors</div>
                        <div onClick={()=>{this.props.Categories("TV-Video-Audio",this.props.history)}} className="CategoriesSelection forBorder"><TiDeviceTablet className="forMarginRight"/>TV-Video-Audio</div>
                        <div onClick={()=>{this.props.Categories("Watches",this.props.history)}} className="CategoriesSelection forBorderBottom"><FiWatch className="forMarginRight"/>Watches</div>
                    </div>
                </div>


         }
            </div>
        )

    }
}





const mapStateToProps = (state) => {
    return {
        CurrentUser: state.CurrentUser,
        Cat:state.Category,
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        Categories: (message,history) => dispatch(Categories(message,history)),
        sendUserDataToLocalStorage:()=>dispatch(sendUserDataToLocalStorage()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);