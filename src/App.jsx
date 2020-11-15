import React from 'react';
import Header from './components/header/header'
import Image from './images/olxFull.jpg'
import Ads from './components/ads/ad'
import './App.css'
import Avatar from './images/avatar.png'
import {CloseModal,FacebookLogin,GoogleLogin,getCardsData,sendToLocalHost,sendUserDataToLocalStorage} from './store/action/index'
import {connect} from 'react-redux'
import Categories from './components/categories/categories'
import firebase from  'firebase'
import './components/ads/ads.css'


class App extends React.Component {
// constructor(){
//   super()
//   this.state={
//       name:'',
//       email:'',
//       uid:'',
//       photo:''
//   }
// }
componentDidMount = () =>{
  this.props.getCardsData()
  this.props.sendUserDataToLocalStorage()
}


  
  render() {
    
    // let modal = this.props.display
    return (
      <div style={{width:'100%'}}>
        <div className='position' style={{display:this.props.display === "false" ? "none" :"inline-block"}}>
          <div className='modalContent'>
             <div className='cancel' onClick={()=>this.props.CloseModal()}>+</div>
             <div className='loginItem'>
               <img src={Avatar} width='100px' />
               <p className='saveItems'>Save all your favorite items in one place</p>
               <br/>
               <p className="Error">{this.props.error}</p>
               <button className='AllBtn fbBtn' onClick={()=>this.props.FacebookLogin()}>Continue with facebook</button>
               <button className='AllBtn' onClick={()=>this.props.GoogleLogin()}>Continue with Google</button>
               <p className='small'>We won't share your personal details with anyone</p>
             </div>
          </div>
        </div>
        <div>
          <Header />
          <Categories />
          <div style={{width:'100%',overflow:'hidden',marginBottom:'50px'}}>
              <img src={Image} width='100%' className='OlxImage'/>
          </div>
          {/* <div className='Display'> */}
          <div className="full" >
                {this.props.cards.map((card,key) =>
                    <div onClick={()=>{this.props.sendToLocalHost(card,this.props.history)}} className='card' key={key}>
                        <div className="ImgDiv" style={{backgroundColor: 'black', width: '90%', height: '300px', display: 'flex', justifyContent: 'center',border:'1px solid rgb(172, 172, 172)'}}>
                            <img width="auto" height="100%" src={card.image} alt="" />
                        </div>
                        <div style={{ borderLeft: '6px solid rgb(250, 203, 0)',height:'105px'}}>
                            <div className='card-body'>
                                <h5 className='card-title' style={{fontWeight:'700'}}>Rs {card.price}</h5>
                                <p className='card-text text'>{card.title}</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: 'space-between', padding: '10px',marginTop:'-20px' }}>
                                <p style={{color:'gray',fontSize:'13px'}}>{card.city}  ,{ card.state} </p>
                                <p style={{color:'gray',fontSize:'13px'}}>{card.date}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
          {/* </div> */}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state)=>{
  return{
      display:state.modal,
      error:state.error,
      cards: state.cards
  }
}

const mapDispatchToProp = (dispatch)=>({
  CloseModal:()=>  dispatch(CloseModal()),
  FacebookLogin:()=>dispatch(FacebookLogin()),
  GoogleLogin:()=>dispatch(GoogleLogin()),
  getCardsData:()=>dispatch(getCardsData()),
  sendToLocalHost: (card,history) => dispatch(sendToLocalHost(card,history)),
  sendUserDataToLocalStorage:()=>dispatch(sendUserDataToLocalStorage()),

})

export default connect(mapStateToProps,mapDispatchToProp)(App);