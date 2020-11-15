// import React from 'react';
// import './ads.css'
// import { connect } from 'react-redux'
// import {sendToLocalHost} from '../../store/action/index'

// class Ads extends React.Component {
//     render() {
//         // console.log("my caqrdss",this.props.cards)
//         return (
//             <div className="full" >
//                 {this.props.cards.map((card,key) =>
//                     <div onClick={()=>{this.props.sendToLocalHost(card,this.props.history)}} className='card' key={key}>
//                         <div className="ImgDiv">
//                             <img src={card.image} className='card-img-top' alt="" />
//                         </div>
//                         <div style={{ borderLeft: '6px solid rgb(250, 203, 0)',height:'105px'}}>
//                             <div className='card-body'>
//                                 <h5 className='card-title' style={{fontWeight:'700'}}>Rs {card.price}</h5>
//                                 <p className='card-text text'>{card.title}</p>
//                             </div>
//                             <div style={{ display: "flex", justifyContent: 'space-between', padding: '10px',marginTop:'-20px' }}>
//                                 <p style={{color:'gray',fontSize:'13px'}}>{card.city}  ,{ card.state} </p>
//                                 <p style={{color:'gray',fontSize:'13px'}}>{card.date}</p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         cards: state.cards
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         sendToLocalHost: (card,history) => dispatch(sendToLocalHost(card,history))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Ads);