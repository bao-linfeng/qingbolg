import React from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import style from "./css/footer.css";


class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

	render(){
		
	    return (
		    <div className={style.footerBox}>
                <span>Home+共享美好时光</span>
                <img src="./images/app.png" alt="logo" />
            </div>
	    )
	}
}

//导出组件
export default Footer;