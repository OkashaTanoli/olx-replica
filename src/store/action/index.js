import Firebase from '../../config/firebase'
import firebase from 'firebase'


const OpenModal = () => {
    return (dispatch) => {
        dispatch({ type: "OPENMODAL", payload: "true" })
    }
}


const CloseModal = () => {
    return (dispatch) => {
        dispatch({ type: "CLOSEMODAL", payload: "false" })
    }
}

const FacebookLogin = () => {
    //  console.log("running")
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                let Info = {
                    name: user.displayName,
                    email: user.email,
                    uid: user.uid,
                    image: user.photoURL
                }
                firebase.database().ref(`users/${user.uid}`).set(Info)
                localStorage.setItem('user',JSON.stringify(Info))
                dispatch({ type: "CURRENTUSER", payload: Info })
                dispatch({ type: "CLOSEMODAL", payload: "false" })
                // dispatch({ type: "MIXSHOW", payload : "true"})
                // dispatch({ type: "LOGINHIDE", payload : "false"})
            })

            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                dispatch({ type: "ERROR", payload: 'Network Error' })

            });
    }
}



const GoogleLogin = () => {
    return (dispatch) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)

            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                let Info = {
                    name: user.displayName,
                    email: user.email,
                    uid: user.uid,
                    photo: user.photoURL
                }
                firebase.database().ref(`users/${user.uid}`).set(Info)
                localStorage.setItem('user',JSON.stringify(Info))
                dispatch({ type: "CURRENTUSER", payload: Info })
                dispatch({ type: "CLOSEMODAL", payload: "false" })
                // dispatch({ type: "MIXSHOW", payload : "true"})
                // dispatch({ type: "LOGINHIDE", payload : "false"})
            })

            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                dispatch({ type: "ERROR", payload: 'Network Error' })
            });
    }
}

const sendUserDataToLocalStorage = () =>{
    return(dispatch)=>{
        var user = JSON.parse(localStorage.getItem('user')) 
        console.log("User",user)
        dispatch({ type: "CURRENTUSER", payload: user })
    }
}





const setUpRecaptcha = () => {
    return (dispatch) => {
        dispatch({ type: "MODALPOSTOPEN", payload: "true" })   
    }

}

const setUpRecaptchaClose = () => {
    return (dispatch) => {
        dispatch({ type: "MODALPOSTCLOSE", payload: "false" })   
    }

}
  
const sendingDataToFirebase = (data,history) => {
    return async(dispatch) => {
        let date = new Date;
        let getDay = date.getDate()
        let getEMonth = date.getMonth()
        let getYear = date.getFullYear()
        let merge = `${getEMonth} / ${getDay} / ${getYear}`
        let num = Math.random()*1324877983343
        let clearAll = Math.round(num)
        let Information = {
            condition: data.condition,
            title: data.title,
            description: data.description,
            price: data.price,
            contact: data.contact,
            city: data.city,
            state: data.state,
            image: data.image,
            name: data.name,
            profile: data.profile,
            category: data.category,
            id:clearAll,
            date:merge
        }
        // console.log(Information)
       await firebase.database().ref('cards').child(clearAll).set(Information)

        history.push('/')

        dispatch({ type: "MODALPOSTCLOSE", payload: "false" })   
    }
}


const getCardsData = () =>{
    return(dispatch)=>{
        dispatch({type:'CARDDATAEMPTY',payload:''})
        firebase.database().ref('/').child('cards').on('child_added',(data)=>{
        //    console.log("firebase",data.val())
           dispatch({type:'CARDDATA',payload:data.val()})
        })
    }
}



const Signout = () => {
    return (dispatch) => {
        firebase.auth().signOut()
            .then(function (result) {
                localStorage.setItem('user',JSON.stringify(null))
                // dispatch({ type: "SIGNOUT", payload: null })
                // console.log("signout", result)
               window.location.reload()
            }).

            catch(function (error) {
                console.log("error", error)
            });
    }
}



const Categories = (message, history) => {
    return (dispatch) => {
        // console.log(message)
        dispatch({ type: "CATEGORIES", payload: message })
        history.push('/post/attribute')
    }
}

// const DidMountain = (history) =>{
//     return(dispatch)=>{
//         history.push('/post')
//     }
// }

const Condition = (condition) => {
    return (dispatch) => {
        // console.log('run')
        dispatch({ type: 'CONDITION', payload: condition })
        alert(condition, 'is selected')
    }
}


const sendToLocalHost = (cardData,history) =>{
    return(dispatch)=>{
        console.log(cardData)
        localStorage.setItem('card',JSON.stringify(cardData))
        history.push('/ad')
    }
}


const getFromLocalHost = () =>{
    return(dispatch)=>{
        var data = JSON.parse(localStorage.getItem('card')) 
        dispatch({type:'INDIVICARD',payload:data})       
        // console.log(data)
    }
}



export {
    OpenModal,
    CloseModal,
    FacebookLogin,
    GoogleLogin,
    Signout,
    Categories,
    Condition,
    setUpRecaptcha,
    setUpRecaptchaClose,
    sendingDataToFirebase,
    getCardsData,
    sendToLocalHost,
    getFromLocalHost,
    sendUserDataToLocalStorage
}


