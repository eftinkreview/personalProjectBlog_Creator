import React, {Component} from 'react';
import './Posts.css';
import { connect } from "react-redux";
import {getUser, getBlog} from '../../redux/reducer';
import Nav from '../nav/Nav'

import DisplayEditor from '../postEditor/DisplayEditor';


class Posts extends Component{
         
    render(){
        return(
            <div>
            <Nav />
            <div className="postCenter">
            
                <DisplayEditor/>
               
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
    { getUser, getBlog }
    )(Posts);
                                                        