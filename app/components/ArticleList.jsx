import React from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import style from "./css/article.css";
import AlbumHeader from "./AlbumHeader.jsx";


class ArticleList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

	render(){
		
	    return (
		    <div className={style.albumBox}>
                <AlbumHeader />
                <div className={style.albumTitleBox+' '+style.articleListBox}><Link to="/">全部专辑</Link>&gt;<span>亲情相册</span></div>
                <div className={style.articleAllListBox}>
                    <Link to="/articleDetails" className={style.articleListDetailBox}>
                        <img className={style.articleImg} src="./images/pic.jpg" alt="" />
                        <p>一把眷恋的泥巴一把眷恋的泥巴一把眷恋的泥巴一把眷恋的泥巴</p>
                        <span><i className="fa fa-clock-o"></i>2017-7-17</span>
                        <div className={style.articleActiveBox}>
                            <span><i className="fa fa-eye"></i>200</span>
                            <span><i className="fa fa-heart-o"></i>200</span>
                            <span><i className="fa fa-comment-o"></i>200</span>
                        </div>
                        <img className={style.choice} src="./images/choice.png" alt="时光精选"/>
                    </Link>
                </div>
            </div>
	    )
	}
}

//导出组件
export default ArticleList;