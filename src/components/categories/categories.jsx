import React from 'react';
import './categories.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link } from "react-router-dom"

class Categories extends React.Component {
    render() {
        return (

            <div className='flex' style={{width:'100%'}}>
                <div className="nav-item dropdown">
                    <a className="nav-link nav-link2 " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ALL CATEGORIES
                        <KeyboardArrowDownIcon className='arrowDown' />
                    </a>
                    <div className="dropdown-menu dropdown-menu3" aria-labelledby="navbarDropdown">
                        <h5 className='All_Categories'>All Categories</h5>
                        <hr />
                        <ul>
                            <Link to='/mobiles'className='lineKhatam'><li>Mobile Phones</li></Link>
                            <Link to='/houses'className='lineKhatam'><li>House</li></Link>
                            <Link to='/tablets'className='lineKhatam'><li>Tablets</li></Link>
                            <Link to='/cars'className='lineKhatam'><li>Cars</li></Link>
                            <Link to='/tractors'className='lineKhatam'><li>Tractors</li></Link>
                            <Link to='/watches'className='lineKhatam'><li>Watch</li></Link>
                            <Link to='/motorcycles'className='lineKhatam'><li>Motorcycles</li></Link>
                            <Link to='/TV-Video-Audio'className='lineKhatam'><li>TV - Video - Audio</li></Link>
                            <Link to='/shoes'className='lineKhatam'><li>Shoes</li></Link>
                            {/* <Link to='/AC'className='lineKhatam'><li>Air Conditions</li></Link> */}
                            <Link to='/bags'className='lineKhatam'><li>Bags</li></Link>
                            <Link to='/fans'className='lineKhatam'><li>Fans</li></Link>
                        </ul>
                    </div>
                </div>
                <ul className='CatUl'>
                    <Link className='lineKhatam' to='/mobiles'>
                        <li>
                            Mobile Phones
                    </li>
                    </Link>

                    <Link className='lineKhatam' to='/cars'>
                    <li>
                        Cars
                    </li>
                    </Link>

                    <Link className='lineKhatam' to='/motorcycles'>
                    <li>
                        Motorcycles
                    </li>
                    </Link>

                    <Link className='lineKhatam' to='/houses'>
                    <li>
                        Houses
                    </li>
                    </Link>

                    <Link className='lineKhatam' to='/TV-Video-Audio'>
                    <li>
                        TV - Video - Audio
                    </li>
                    </Link>

                    <Link className='lineKhatam' to='/tablets'>
                    <li>
                        Tablets
                    </li>
                    </Link>

                    <Link className='lineKhatam' to='/lands and plots'>
                    <li>
                        Land & Plots
                    </li>
                    </Link>

                </ul>
            </div>
        )
    }
}


export default Categories;