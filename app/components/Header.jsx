import React from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import style from "./css/header.css";


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

	render(){
		
	    return (
		    <div className={style.headerBox}>
                <img src="./images/logo.png" alt="logo" />
            </div>
	    )
	}
}

//导出组件
export default Header;