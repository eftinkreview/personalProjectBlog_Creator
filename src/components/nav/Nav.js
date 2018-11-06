import React, {Component} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getUser} from '../../redux/reducer';

class Nav extends Component{
    

    componentDidMount(){
        this.props.getUser()
    }

    render(){
        const {user} = this.props.state
        const logo =user[user.length -1] && user[user.length -1].user_logo
        // const Home = "Home"
        return(
        <div>
            <div className="homeStyle">
                <Link to="/">back to home</Link>
            </div>

                <div className="sizing"> 

                    <div className="topMiddle">
            

                    <div className="logo">
                    <Link to="/home"> {logo} </Link>
                    </div>

                    <div className="posts">
                    <Link to="/blog" >Posts</Link>
                    </div>

                

                    </div>

                </div>
        </div>
        )
    }
}
function mapStatetoProps(state){
    return {state};
}

export default connect(
    mapStatetoProps, 
    { getUser }
    )(Nav);