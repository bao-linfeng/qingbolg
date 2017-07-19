import React from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import style from "./css/albumHeader.css";


class AlbumHeader extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

	render(){
		
	    return (
		    <div className={style.albumHeaderBox}>
                <img src="./images/pic.jpg" alt="logo" />
                <div className={style.albumHeaderContentBox}>
                    <img src="./images/pic.jpg" alt="users photo" />
                    <p className={style.usersName}>鲍林峰</p>
                    <p className={style.usersNote}>刹那的触动不盛言，瞬间的感动不可言，生灵感刹那的触动不盛言，瞬间的感动不可言，生灵感...</p>
                    <p className={style.usersInfoNum}>
                        <Link to="">108</Link>
                        <Link to="">3</Link>
                        <Link to="">6</Link>
                        <Link to="">32</Link>
                    </p>
                    <p className={style.usersInfo}>
                        <Link to="/article">发表</Link>
                        <Link to="/">专辑</Link>
                        <Link to="/follow">关注</Link>
                        <Link to="/fans">粉丝</Link>
                    </p>
                </div>
            </div>
	    )
	}
}

//导出组件
export default AlbumHeader;