import React from 'react';
import './header.css';
import OlxLogo from '../../images/olx.png'
import Avatar from '../../images/avatar.png'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
// import '../../App.css'
import { OpenModal, Signout } from '../../store/action/index'
import { connect } from 'react-redux'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { colors } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link } from "react-router-dom"


class Header extends React.Component {
    render() {
        // console.log("pakisstan zindabad",this.props.CurrentUser)

        return (

            // <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ width: '100%',textAlign:'center'}}>
            <div className="Header">
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="ForSpace">
                    <img className="olxImage" src={OlxLogo} width="50px" />
                </div>


                <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}

                <div className="ForSpace">
                    <img className="olxImage" src={OlxLogo} width="50px" />
                </div>
                <div className="nav-item dropdown dropDown ForSpace">
                    <div className="nav-link nav-link3 " href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <SearchIcon fontSize='medium' className='spaceBtw' />
                        Location
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="dropdown-menu dropdown-menu1" aria-labelledby="navbarDropdownMenuLink">
                        <div className="dropdown-item" >Action</div>
                        <div className="dropdown-item">Another action</div>
                        <div className="dropdown-item">Something else here</div>
                    </div>
                </div>
                <div className='inputDiv ForSpace'>
                    <input className='input' type="text" placeholder='search....' id="" />
                    <div className='searchIconDiv'>
                        < SearchIcon className='searchIcon' fontSize='large' />
                    </div>
                </div>
                {this.props.CurrentUser === null ?
                    <div className='login ForSpace' onClick={() => this.props.OpenModal()}>
                        Login
                </div>
                    :
                    <div style={{ display: "flex" }}>
                        <div className='chatDiv' title='chat'>
                            <ChatBubbleOutlineIcon />
                        </div>
                        <div className="dropdown" >
                            <button className="btn btn-secondary " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={this.props.CurrentUser.image} width='40px' height='40px' />
                            </button>
                            <div className="dropdown-menu dropdown-menu2" aria-labelledby="dropdownMenuButton">
                                <div style={{ display: "flex", padding: '30px 15px' }}>
                                    <div style={{ borderRadius: "50%", overflow: "hidden" }}>
                                        <img src={this.props.CurrentUser.image} width='60px' height='60px' />
                                    </div>
                                    <div>
                                        <p style={{ marginTop: "-10px", color: "gray", marginLeft: "10px", fontSize: "15px" }}>Hello,</p>
                                        <h5 style={{ marginTop: "-10px", marginLeft: "10px", color: 'rgb(0, 43, 46)' }}>{this.props.CurrentUser.name}</h5>
                                    </div>
                                </div>
                                <div>
                                    <button className="MyAdsBtn" style={{ width: "100%", padding: "10px", transitionProperty: "all", transitionDuration: ".3s", border: "none", fontSize: "18px", color: 'rgb(0, 43, 46)', backgroundColor: "transparent" }}>My Ads</button>
                                </div>
                                <hr />
                                <div>
                                    <button onClick={() => { this.props.Signout() }} className="MyAdsBtn" style={{ width: "100%", padding: "10px", transitionProperty: "all", transitionDuration: ".3s", border: "none", fontSize: "18px", color: 'rgb(0, 43, 46)', backgroundColor: "transparent" }}>Log Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {this.props.CurrentUser === null ?

                    <div className='sell ForSpace' onClick={() => this.props.OpenModal()}>
                        <AddIcon />
                        SELL
                   </div>
                    :
                    <Link to='/post' className='sellBtn'><div className='sell ForSpace'>
                        <AddIcon />
                       SELL
                   </div>
                    </Link>
                }


            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        mixShow: state.mixShow,
        loginHide: state.loginHide,
        CurrentUser: state.CurrentUser
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        OpenModal: () => dispatch(OpenModal()),
        Signout: () => dispatch(Signout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);