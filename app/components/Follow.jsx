import React from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import style from "./css/album.css";
import AlbumHeader from "./AlbumHeader.jsx";


class Follow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

	render(){
		
	    return (
		    <div className={style.albumBox}>
                <AlbumHeader />
                <div className={style.albumTitleBox}>我的关注</div>
                <div className={style.albumListBox}>
                    <div className={style.albumListDetailBox+' '+style.fansBox}>
                        <img className={style.pictureBg} src="./images/pic.jpg" alt="" />
                        <span>发表200</span>
                        <label htmlFor=""></label>
                        <span>专辑200</span>
                        <img className={style.fanspic} src="./images/pic.jpg" alt="" />
                        <p>鲍林峰</p>
                    </div>
                    <div className={style.albumListDetailBox+' '+style.fansBox}>
                        <img className={style.pictureBg} src="./images/pic.jpg" alt="" />
                        <span>发表200</span>
                        <label htmlFor=""></label>
                        <span>专辑200</span>
                        <img className={style.fanspic} src="./images/pic.jpg" alt="" />
                        <p>鲍林峰</p>
                    </div>
                    <div className={style.albumListDetailBox+' '+style.fansBox}>
                        <img className={style.pictureBg} src="./images/pic.jpg" alt="" />
                        <span>发表200</span>
                        <label htmlFor=""></label>
                        <span>专辑200</span>
                        <img className={style.fanspic} src="./images/pic.jpg" alt="" />
                        <p>鲍林峰</p>
                    </div>
                    <div className={style.albumListDetailBox+' '+style.fansBox}>
                        <img className={style.pictureBg} src="./images/pic.jpg" alt="" />
                        <span>发表200</span>
                        <label htmlFor=""></label>
                        <span>专辑200</span>
                        <img className={style.fanspic} src="./images/pic.jpg" alt="" />
                        <p>鲍林峰</p>
                    </div>

                    <div className={style.albumListDetailBox+' '+style.fansBox}>
                        <img className={style.pictureBg} src="./images/pic.jpg" alt="" />
                        <span>发表200</span>
                        <label htmlFor=""></label>
                        <span>专辑200</span>
                        <img className={style.fanspic} src="./images/pic.jpg" alt="" />
                        <p>鲍林峰</p>
                    </div>
                </div>
            </div>
	    )
	}
}

//导出组件
export default Follow;