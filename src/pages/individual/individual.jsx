import React from 'react';
import Header from '../../components/header/header'
import { connect } from 'react-redux'
import Avatar from '../../images/avatar.png'
import images2 from '../../images/image2.jpg'
import itel from '../../images/itel2.jpg'
import map from '../../images/map.png'
import { CloseModal, FacebookLogin, GoogleLogin, getFromLocalHost } from '../../store/action/index'
import Categories from '../../components/categories/categories'
import './individual.css'
import { HiOutlineShare } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import {FiPhone} from 'react-icons/fi'
import { Description } from '@material-ui/icons';



class App extends React.Component {

    componentDidMount=()=>{
        this.props.getFromLocalHost()
    }

    render() {
        return (
            <div>
                <div className='position' style={{ display: this.props.display === "false" ? "none" : "inline-block" }}>
                    <div className='modalContent'>
                        <div className='cancel' onClick={() => this.props.CloseModal()}>+</div>
                        <div className='loginItem'>
                            <img src={Avatar} width='100px' />
                            <p className='saveItems'>Save all your favorite items in one place</p>
                            <br />
                            <p className="Error">{this.props.error}</p>
                            <button className='AllBtn fbBtn' onClick={() => this.props.FacebookLogin()}>Continue with facebook</button>
                            <button className='AllBtn' onClick={() => this.props.GoogleLogin()}>Continue with Google</button>
                            <p className='small'>We won't share your personal details with anyone</p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <div  style={{width:'100%'}}> */}
                    <Header/>
                    <Categories />
                    <div className='mobilePic' style={{ width: '100%',overflow:'hidden', display: "flex", justifyContent: 'center', marginTop: '90px' }}>
                        <img src={itel} alt="" />
                    </div>
                    {/* </div> */}

                    <div id='individualDiv' style={{ display: 'flex', margin: '20px 150px 150px 150px',width:'90%' }}>
                        <div className="firstPart" style={{ width: '60%' }}>
                            <div id="imageDiv" style={{ backgroundColor: 'black', width: '100%', height: '450px', display: 'flex', justifyContent: 'center', borderRadius: '5px', overflow: 'hidden' }}>
                                <img height="100%" width='auto' src={this.props.Individual.image} alt="" />
                            </div>
                            <div className='DetailsDiv'>
                                <h5>Details</h5>
                                <div className='conditionDiv' style={{ display: 'flex', marginTop: '20px', width: '50%', justifyContent: 'space-between', marginBottom: '-10px' }}>
                                    <p style={{ fontSize: '15px', color: 'GrayText' }}>Condition</p>
                                    <p style={{ fontSize: '15px', color: 'rgb(0,43,49)' }}>{this.props.Individual.condition}</p>
                                </div>
                                <hr />
                                <h5>Description</h5>
                                <div className='descripDiv' style={{ width: '40%' }}>
                                    <p>{this.props.Individual.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className="secondPart" style={{ width: '30%', marginLeft: '20px' }}>
                            <div className="OwnerDiv">
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'-7px'}}>
                                    <div style={{fontSize:'30px',fontWeight:'700',color:'rgb(0,43,47)'}}>Rs {this.props.Individual.price}</div>
                                    <div style={{ display: 'flex',alignItems:'center' }}>
                                        <div style={{marginRight:"20px"}}><HiOutlineShare style={{fontSize:'23px',color:"rgb(0,43,47)"}}/></div>
                                        <div><AiOutlineHeart style={{fontSize:'23px',color:"rgb(0,43,47)"}} /></div>
                                    </div>
                                </div>
                                <p style={{color:'gray'}}>{this.props.Individual.title}</p>
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'35px'}}>
                                    <div style={{fontSize:'14px',color:'rgb(61, 61, 61)'}}>{this.props.Individual.city} ,{this.props.Individual.state}</div>
                                    <div style={{fontSize:'14px',color:'rgb(61, 61, 61)'}}>date</div>
                                </div>
                            </div>

                            <div className="OwnerDiv">
                                <p style={{fontSize:'20px',color:'rgb(0,43,47)',fontWeight:'500'}}>Seller description</p>
                                <div style={{display:'flex'}}>
                                    <div className='OwnerDescrp'>
                                        <img src={this.props.Individual.profile} width='60px' height="60px" />
                                    </div>
                                    <div style={{marginLeft:'10px',display:'flex',alignItems:'center'}}>
                                        <p style={{color:'rgb(0,43,47)',fontSize:'16px',fontWeight:'700'}}>{this.props.Individual.name}</p>
                                    </div>
                                </div>
                                <button className="sellerDescHover" style={{marginTop:'10px',width:'100%', border:'4px solid rgb(0,43,47)',backgroundColor:'rgb(0,43,47)',borderRadius:'5px',color:'white',fontWeight:'700',padding:'5px'}}>Chat With Seller</button>
                                <div style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
                                    < FiPhone style={{fontSize:'25px',color:'rgb(0,43,47)', marginRight:'10px'}}/>
                                    <p>{this.props.Individual.contact}</p>
                                </div>
                            
                            </div>

                            <div className="OwnerDiv">
                                <p style={{fontSize:'21px',color:'rgb(0,43,47)',fontWeight:'700'}}>Posted in</p>
                                <p style={{fontSize:'14px',color:'gray'}}>{this.props.Individual.city} ,{this.props.Individual.state}</p>
                                <img src={map} width="100%"/>
                            </div>
                            <div className='reportDiv' style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                                <p style={{color:'rgb(0,43,47)',fontWeight:'700', fontSize:'14px'}}>AD ID {this.props.Individual.id}</p>
                                <p style={{color:'rgb(0,43,47)',fontWeight:'700', fontSize:'14px'}}>REPORT THIS AD</p>
                            </div>




                        </div>


                    </div>
                </div>
            </div>
        )

    }
}





const mapStateToProps = (state) => {
    return {
        display: state.modal,
        error: state.error,
        Individual : state.Individual
    }
}

const mapDispatchToProp = (dispatch) => ({
    CloseModal: () => dispatch(CloseModal()),
    FacebookLogin: () => dispatch(FacebookLogin()),
    GoogleLogin: () => dispatch(GoogleLogin()),
    getFromLocalHost: () => dispatch(getFromLocalHost())
})

export default connect(mapStateToProps, mapDispatchToProp)(App);