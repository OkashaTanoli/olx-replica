import React from 'react';
import './attribute.css';
import { connect } from 'react-redux'
import olx from '../../../images/olx.png'
import { Link } from 'react-router-dom'
import { AiFillWarning } from 'react-icons/ai'
import firebase from 'firebase'
import { CloseModal, setUpRecaptcha, setUpRecaptchaClose, sendingDataToFirebase, sendUserDataToLocalStorage } from '../../../store/action/index'

class Attribute extends React.Component {



    // componentWillMount = () => {
    //     this.props.sendUserDataToLocalStorage()
    // }

    constructor() {
        super()
        // this.props.sendUserDataToLocalStorage()
        this.state = {
            condition: '',
            title: '',
            description: '',
            price: '',
            contact: '',
            city: '',
            state: '',
            image: ''
        }
    }
    condit = (con) => {
        this.setState({
            condition: con
        })
        alert(con)
    }

    upload_file = (e) => {
        console.log(e)
        var ref = firebase.storage().ref().child(`images/${e.name}`).put(e)

        ref.on('state_changed', (snapshot) => {
        }, (error) => {
        }, () => {
            ref.snapshot.ref.getDownloadURL()
                .then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    this.setState({
                        image: downloadURL
                    })
                })
            // .catch(function(error){
            //     console.log(error)
            // })

        });



    }



   render() {
  
        const data = {
            condition: this.state.condition,
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            contact: this.state.contact,
            city: this.state.city,
            state: this.state.state,
            image: this.state.image,
            name: this.props.CurrentUser.name,
            profile: this.props.CurrentUser.image,
            category: this.props.cat
        }
        // console.log(this.state.name)
        // console.log(this.state.title)
        // console.log(this.state.price)
        // console.log(this.state.description)
        return (
            <div style={{width:'100%'}}>
                {this.props.CurrentUser === null ?
                    <div style={{ textAlign: 'center', marginTop: '15%' }}>
                        <AiFillWarning fontSize='100px' style={{ color: 'rgb(0, 43, 46)' }} />
                        <h1 style={{ fontSize: '50px', color: 'rgb(0, 43, 46)', fontWeight: '700', textShadow: '5px 0px 5px gray', fontFamily: " Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Dear User ,</h1>
                        <h1 className="dearUsers" style={{ fontSize: '40px', color: 'rgb(46, 46, 46)', fontWeight: '700', textShadow: '5px 0px 5px gray', fontFamily: " Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Please Login First</h1>
                        <Link to='/'><button style={{ backgroundColor: "rgba(0, 238, 255, 0.3)", border: "none", fontSize: '30px', fontWeight: '700' }}>Login</button></Link>

                    </div>
                    :
                    <div style={{width:'100%'}}>
                        <div className='position' style={{ display: this.props.display === "false" ? "none" : "inline-block" }}>
                            <div className='modalContent' style={{ height: '400px' }}>
                                <div className='cancel' onClick={() => this.props.setUpRecaptchaClose()}>+</div>
                                <div className='loginItem'>
                                    <h1 style={{ color: 'rgb(0,43,46)' }}>Posting Ad</h1>
                                    <h5 style={{ color: 'rgb(0,43,46)', marginTop: '50px', padding: '30px' }}> If you Agree in posting ad so please click the button </h5>
                                    <button onClick={() => this.props.sendingDataToFirebase(data, this.props.history)} className="postBtn" style={{ backgroundColor: 'rgb(0, 43, 46)', border: '5px solid rgb(0, 43, 46)', padding: '5px', fontSize: '20px', borderRadius: '6px', color: 'white', fontWeight: '700' }}>Post My Ad</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ width: '100%', backgroundColor: 'rgb(245, 245, 245)', padding: '20px 20px 20px 75px', boxShadow: '0 0 5px 1px silver' }}>
                                <img src={olx} width="50px" />
                            </div>
                            <h3 style={{ textAlign: 'center', marginTop: '15px', fontWeight: '700', color: 'rgb(0, 43, 46)' }}>POST YOUR AD</h3>
                            <div className="mainCatDescriptionSellDiv">
                                <div className='SelectedACat'><h4>SELECTED CATEGORY</h4></div>
                                <span style={{ fontSize: '14px', color: 'GrayText', paddingLeft: '15px', marginRight: '10px' }}>{this.props.cat}</span>
                                <Link to='/post' className="changeLink" style={{ color: 'rgb(0, 43, 46) ', fontWeight: '700', textDecoration: 'underline' }}>Change</Link>
                                <hr />
                                <div className="formCreation">
                                    <h4 style={{ color: 'rgb(0, 43, 46)', fontSize: '20px', fontWeight: '700', fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>INCLUDE SOME DETAILS</h4>
                                    <p style={{ color: 'rgb(0, 43, 46)', fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>Condition*</p>
                                    <div style={{ display: 'flex', marginTop: '-15px' }}>
                                        <div className="Condition" onClick={() => { this.condit('New') }}>New</div>
                                        <div className="Condition" onClick={() => { this.condit('Used') }}>Used</div>
                                    </div>
                                    <div style={{ marginTop: '40px' }}>
                                        <p style={{ color: 'rgb(0, 43, 46)', fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", marginBottom: '0px' }}>Ad title*</p>
                                        <input onChange={(e) => { this.setState({ title: e.target.value }) }} className="inputTitle" type="text" maxLength="70" minLength="10" style={{ border: '1px solid rgb(0, 43, 46)', borderRadius: '4px', padding: '10px', fontSize: '16px', width: '400px' }} />
                                        <p style={{ fontSize: "12px", color: 'rgb(0, 43, 46)' }}>A minimum length of 5 characters is required. Please edit the field.</p>
                                    </div>
                                    <div style={{ marginTop: '40px' }}>
                                        <p style={{ color: 'rgb(0, 43, 46)', fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", marginBottom: '0px' }}>Description*</p>
                                        <textarea onChange={(e) => { this.setState({ description: e.target.value }) }} className="inputTitle inputDescription" type="comment" maxLength='400' minLength='100' rows='5' style={{ border: '1px solid rgb(0, 43, 46)', borderRadius: '4px', padding: '10px', fontSize: '16px', width: '400px' }} />
                                        <p style={{ fontSize: "12px", color: 'rgb(0, 43, 46)' }}>Include condition, features and reason for selling</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="formCreation">
                                    <h4 style={{ color: 'rgb(0, 43, 46)', fontSize: '18px', fontWeight: '700', fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>SET PRICE</h4>
                                    <p style={{ fontSize: '14px', color: 'gray', fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", marginBottom: '0px' }}>Price*</p>
                                    <div style={{ display: 'flex', paddingLeft: '20px' }}>
                                        <p className="priceRS">Rs</p>
                                        <input onChange={(e) => { this.setState({ price: e.target.value }) }} className="inputTitle" type="number" style={{ padding: '10px 10px 10px 50px', backgroundColor: 'transparent', marginLeft: '30px', border: '1px solid rgb(0, 43, 46)', borderRadius: '5px', width: '400px' }} />
                                    </div>

                                </div>
                                <hr />

                                <div className="formCreation">
                                    <h4 style={{ color: 'rgb(0, 43, 46)', fontSize: '18px', fontWeight: '700', fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>UPLOAD IMAGE</h4>
                                    <input type="file" onChange={(e) => { this.upload_file(e.target.files[0]) }} />
                                </div>
                                <hr />
                                <div className="formCreation">
                                    <h4 style={{ color: 'rgb(0, 43, 46)', fontSize: '18px', fontWeight: '700', fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>Write Address</h4>
                                    <p style={{ fontSize: '14px', color: 'gray', fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", marginBottom: '0px' }}>State*</p>
                                    <select onChange={(e) => { this.setState({ state: e.target.value }) }} className="inputTitle" name="Selectstate" id="" style={{ border: '1px solid rgb(0, 43, 46)', borderRadius: '4px', padding: '10px', fontSize: '16px', width: '400px' }}>
                                        <option value="">Select State</option>
                                        <option value='Sindh'>Sindh</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="KPK">KPK</option>
                                        <option value="Balochistan">Balochistan</option>
                                    </select>
                                    <p style={{ marginTop: '20px', fontSize: '14px', color: 'gray', fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", marginBottom: '0px' }}>Write your city name*</p>
                                    <input onChange={(e) => { this.setState({ city: e.target.value }) }} className="inputTitle" type="text" maxLength="70" minLength="10" style={{ border: '1px solid rgb(0, 43, 46)', borderRadius: '4px', padding: '10px', fontSize: '16px', width: '400px' }} />

                                </div>
                                <hr />
                                <div className="formCreation">
                                    <h4 style={{ color: 'rgb(0, 43, 46)', fontSize: '18px', fontWeight: '700', fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>REVIEW YOUR PROFILE</h4>
                                    <div style={{ display: 'flex' }}>
                                        <div id="UserImgDiv" style={{ borderRadius: '50%', overflow: 'hidden' }}><img src={this.props.CurrentUser.image} width='100px' height='100px' /></div>
                                        <div id="UserDescDiv" style={{ marginLeft: '20px' }}>
                                            <span>Name</span>
                                            <p style={{ border: '1px solid gray', padding: '10px', borderRadius: '5px', width: '280px' }}>{this.props.CurrentUser.name}</p>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '40px' }}>
                                        <p style={{ color: 'rgb(0, 43, 46)', fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", marginBottom: '0px' }}>Mobile Phone Number*</p>
                                        <input onChange={(e) => { this.setState({ contact: e.target.value }) }} className="inputTitle" type="number" style={{ fontSize: "20px", padding: '10px', backgroundColor: 'transparent', border: '1px solid rgb(0, 43, 46)', borderRadius: '5px', width: '400px' }} />
                                    </div>
                                </div>
                                <hr />

                                {data.condition === "" || data.title === "" || data.description === "" || data.price === "" ||
                                    data.contact === "" || data.city === "" || data.state === "" || data.image === "" || data.category === ""
                                    ?
                                    <div className="formCreation">
                                        <button disabled className="postBtn disabled" style={{ backgroundColor: 'gray', border: '5px solid gray', padding: '5px', fontSize: '20px', borderRadius: '6px', color: 'white', fontWeight: '700' }}>Post now</button>
                                    </div>
                                    :
                                    <div className="formCreation">
                                        <button onClick={() => this.props.setUpRecaptcha()} className="postBtn" style={{ backgroundColor: 'rgb(0, 43, 46)', border: '5px solid rgb(0, 43, 46)', padding: '5px', fontSize: '20px', borderRadius: '6px', color: 'white', fontWeight: '700' }}>Post now</button>
                                    </div>
                                }


                            </div>
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
        cat: state.Category,
        display: state.modalPost,
    }
}


const mapDispatchToProp = (dispatch) => ({
    CloseModal: () => dispatch(CloseModal()),
    setUpRecaptcha: () => dispatch(setUpRecaptcha()),
    setUpRecaptchaClose: () => dispatch(setUpRecaptchaClose()),
    sendingDataToFirebase: (data, history) => dispatch(sendingDataToFirebase(data, history)),
    sendUserDataToLocalStorage: () => dispatch(sendUserDataToLocalStorage()),

})
export default connect(mapStateToProps, mapDispatchToProp)(Attribute);