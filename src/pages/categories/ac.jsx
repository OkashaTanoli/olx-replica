import React from 'react';
import Header from '../../components/header/header'
import '../../App.css'
import './categories.css'
import Avatar from '../../images/avatar.png'
import Ads from '../../images/ads.jpg'
import { connect } from 'react-redux'
import { CloseModal, FacebookLogin, GoogleLogin } from '../../store/action/index'
import Categories from '../../components/categories/categories'



class ACCat extends React.Component {
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
                <div style={{ width: '100%' }}>
                    <Header />
                    <Categories />
                    <div style={{ width: '100%', display: "flex", justifyContent: "center" }}>
                        <img src={Ads} alt="" style={{ marginTop: '30px' }} />
                    </div>
                </div>

                <div style={{ marginLeft: '150px', marginRight: '150px', marginTop: '170px' }}>
                    <p style={{ color: 'grey', marginLeft: '20px', fontSize: '13px' }}>Home / Air Conditions</p>
                    <h3 style={{ fontWeight: '700' }}>Air Conditions In Lahore</h3>
                    <hr />
                    <div className="fullForCat">
                        {this.props.cards.map((card, key) =>
                            <div className='card' key={key}>
                                <div className="ImgDiv">
                                    <img src={card.image} className='card-img-top' />
                                </div>
                                <div style={{ borderLeft: '6px solid rgb(250, 203, 0)', height: '105px' }}>
                                    <div className='card-body'>
                                        <h5 className='card-title' style={{ fontWeight: '700' }}>Rs {card.price}</h5>
                                        <p className='card-text text'>{card.name}</p>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: 'space-between', padding: '10px', marginTop: '-20px' }}>
                                        <p style={{ color: 'gray', fontSize: '13px' }}>location </p>
                                        <p style={{ color: 'gray', fontSize: '13px' }}>date</p>
                                    </div>
                                </div>
                            </div>

                        )}
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
        cards: state.cards
    }
}

const mapDispatchToProp = (dispatch) => ({
    CloseModal: () => dispatch(CloseModal()),
    FacebookLogin: () => dispatch(FacebookLogin()),
    GoogleLogin: () => dispatch(GoogleLogin())
})



export default connect(mapStateToProps, mapDispatchToProp)(ACCat);