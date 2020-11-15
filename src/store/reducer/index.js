import Image from '../../images/long.jpg'
import Image2 from '../../images/image.jpg'
import Image3 from '../../images/image2.jpg'
// import thunk from 'redux-thunk'

const Initial = {
    cards: [],



    modal: "false",

    modalPost: "false",

    error:"",

    CurrentUser: null,


    Category:'',


    Condition:'',

    Individual:{}
}

export default (state = Initial, action) => {
    console.log("Action=>", action.payload)
    switch (action.type) {
        case "OPENMODAL":
            return ({
                ...state,
                modal: action.payload
            });

        case "CLOSEMODAL":
            return ({
                ...state,
                modal: action.payload
            })

        case "CONDITION":
            return ({
                ...state,
                Condition: action.payload
            })

        case "CATEGORIES":
            return({
                ...state,
                Category:action.payload
            })
        
        case "ERROR":
            return({
                ...state,
                error:action.payload
            })


        case "CURRENTUSER":
            return({
                ...state,
                CurrentUser:action.payload
            })

        case "SIGNOUT":
            return({
                ...state,
                CurrentUser:action.payload
            })
        case "MODALPOSTOPEN":
            return({
                ...state,
                modalPost:action.payload
            })
        case "MODALPOSTCLOSE":
            return({
                ...state,
                modalPost:action.payload
            })
        case "CARDDATA":
            return({
                ...state,
                cards:[...state.cards,action.payload]
            })
        case "CARDDATAEMPTY":
            return({
                ...state,
                cards:[]
            })

        case "INDIVICARD":
            return({
                ...state,
                Individual:action.payload
            })
    }
    return state;
}