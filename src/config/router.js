import React from 'react'
import {BrowserRouter as Router,  Route} from "react-router-dom";
import App from '../App'
import MobileCat from '../pages/categories/mobile'
// import ACCat from '../pages/categories/ac'
import BagsCat from '../pages/categories/bags'
import CarsCat from '../pages/categories/car'
import FansCat from '../pages/categories/fans'
import HouseCat from '../pages/categories/house'
import MotorcycleCat from '../pages/categories/motorcycle'
import PlotsCat from '../pages/categories/plot'
import ShoesCat from '../pages/categories/shoes'
import Tablets from '../pages/categories/tablets'
import TractorsCat from '../pages/categories/tractors'
import TvCat from '../pages/categories/tv'
import WatchCat from '../pages/categories/watch'
import Post from '../pages/sell/post/post'
import Attribute from '../pages/sell/Attributes/attribute'
import Indivi from '../pages/individual/individual'


class RouterApp extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={App}/>
                <Route exact path="/ad" component={Indivi}/>
                <Route path="/mobiles" component={MobileCat}/>
                {/* <Route path="/AC" component={ACCat}/> */}
                <Route path="/bags" component={BagsCat}/>
                <Route path="/cars" component={CarsCat}/>
                <Route path="/fans" component={FansCat}/>
                <Route path="/houses" component={HouseCat}/>
                <Route path="/motorcycles" component={MotorcycleCat}/>
                <Route path="/lands and plots" component={PlotsCat}/>
                <Route path="/shoes" component={ShoesCat}/>
                <Route path="/tablets" component={Tablets}/>
                <Route path="/tractors" component={TractorsCat}/>
                <Route path="/TV-Video-Audio" component={TvCat}/>
                <Route path="/watches" component={WatchCat}/>
                <Route exact path="/post" component={Post}/>
                <Route path="/post/attribute" component={Attribute}/>
            </Router>
        )
    }
}

export default RouterApp;