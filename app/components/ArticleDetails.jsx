import React from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import style from "./css/articleDetails.css";


class ArticleDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

	render(){
		
	    return (
		    <div className={style.articleDetailsBox}>
                <div className={style.userInfoBox}>
                    <h3>一把眷恋的泥巴</h3>
                    <img src="./images/pic.jpg" alt="user photo"/>
                    <p className={style.usersName}>鲍林峰</p>
                    <p className={style.usersTips}><span>亲情相册</span><i className="fa fa-clock-o"></i>2017-7-18</p>
                </div>
                <div className={style.articleDetailsContentBox}>
                    <p>随山的走势起伏的层层横铺的梯田，在烟雨雾气交织弥漫于满是翠绿的田间时，那种迷离与缥缈一如幻象。薄薄的雾气里，似乎渗出一种新翻的泥土气息，随着铺列的梯田弥漫的雾气在氤氲。一位荷着犁子赶着几头黄牛的老人，蓦地犁开了雾痕。氤氲的雾气，仿佛闪了一下又迅速地复合在一起。</p>
                    <img src="./images/pic.jpg" alt="" />
                </div>
            </div>
	    )
	}
}

//导出组件
export default ArticleDetails;