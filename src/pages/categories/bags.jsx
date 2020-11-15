import React from 'react';
import Header from '../../components/header/header'
import '../../App.css'
import './categories.css'
import Avatar from '../../images/avatar.png'
import Ads from '../../images/ads.jpg'
import { connect } from 'react-redux'
import { CloseModal, FacebookLogin, GoogleLogin ,getCardsData,sendToLocalHost,sendUserDataToLocalStorage} from '../../store/action/index'
import Categories from '../../components/categories/categories'


class BagsCat extends React.Component {


    componentDidMount = () =>{
        this.props.getCardsData()
        this.props.sendUserDataToLocalStorage()

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
                {/* <div style={{ width: '100%' }}> */}
                    <Header />
                    <Categories />
                    <div className='ForSaleImageDiv' style={{ width: '100%', display: "flex", justifyContent: "center" }}>
                        <img className="ForSaleImage" src={Ads} alt="" style={{ marginTop: '30px' }} />
                    </div>
                {/* </div> */}

                <div className='ForReducingMargin' style={{ marginLeft: '150px', marginRight: '150px', marginTop: '170px' }}>
                    <p style={{ color: 'grey', marginLeft: '20px', fontSize: '13px' }}>Home / Bags</p>
                    <h3 style={{ fontWeight: '700' }}>Bags In Pakistan</h3>
                    <hr />
                    <div className="fullForCat">
                        {this.props.cards.map((card, key) =>
                        card.category === 'Bags' ?
                            <div onClick={()=>{this.props.sendToLocalHost(card,this.props.history)}} className='card' key={key}>
                                <div className="ImgDiv" style={{backgroundColor: 'black', width: '90%', height: '300px', display: 'flex', justifyContent: 'center',border:'1px solid rgb(172, 172, 172)'}}>
                                    <img width="auto" height="100%" src={card.image}  />
                                </div>
                                <div style={{ borderLeft: '6px solid rgb(250, 203, 0)', height: '105px' }}>
                                    <div className='card-body'>
                                        <h5 className='card-title' style={{ fontWeight: '700' }}>Rs {card.price}</h5>
                                        <p className='card-text text'>{card.name}</p>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: 'space-between', padding: '10px', marginTop: '-20px' }}>
                                        <p style={{ color: 'gray', fontSize: '13px' }}>{card.city}  ,{ card.state}</p>
                                        <p style={{ color: 'gray', fontSize: '13px' }}>{card.date}</p>
                                    </div>
                                </div>
                            </div>
                            :
                            false

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
    GoogleLogin: () => dispatch(GoogleLogin()),
    getCardsData:()=>dispatch(getCardsData()),
    sendToLocalHost: (card,history) => dispatch(sendToLocalHost(card,history)),
    sendUserDataToLocalStorage:()=>dispatch(sendUserDataToLocalStorage()),

})



export default connect(mapStateToProps, mapDispatchToProp)(BagsCat);