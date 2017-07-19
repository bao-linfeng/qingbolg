import React from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import style from "./css/album.css";
import AlbumHeader from "./AlbumHeader.jsx";


class Album extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

	render(){
		
	    return (
		    <div className={style.albumBox}>
                <AlbumHeader />
                <div className={style.albumTitleBox}>全部专辑</div>
                <div className={style.albumListBox}>
                    <Link to="/articleList" className={style.albumListDetailBox}>
                        <img className={style.pictureBg} src="./images/pic.jpg" alt="" />
                        <span>亲情相册(60)</span>
                    </Link>
                    <Link to="/articleList" className={style.albumListDetailBox}>
                        <img className={style.pictureBg} src="./images/friendAlbum.jpg" alt="" />
                        <span>亲情相册(60)</span>
                    </Link>
                    <Link to="/articleList" className={style.albumListDetailBox}>
                        <img className={style.pictureBg} src="./images/MicroHabits.jpg" alt="" />
                        <span>微习惯(60)</span>
                    </Link>
                    <Link to="/articleList" className={style.albumListDetailBox}>
                        <img className={style.pictureBg} src="./images/familyLife.jpg" alt="" />
                        <span>家庭生活(60)</span>
                    </Link>
                    <Link to="/articleList" className={style.albumListDetailBox}>
                        <img className={style.pictureBg} src="./images/work.jpg" alt="" />
                        <span>工作(60)</span>
                    </Link>
                    <Link to="/articleList" className={style.albumListDetailBox}>
                        <img className={style.pictureBg} src="./images/pet.jpg" alt="" />
                        <span>宠物(60)</span>
                    </Link>
                    <Link to="/articleList" className={style.albumListDetailBox}>
                        <img className={style.pictureBg} src="./images/cate.jpg" alt="" />
                        <span>美食(60)</span>
                    </Link>
                    <Link to="/articleList" className={style.albumListDetailBox}>
                        <img className={style.pictureBg} src="./images/run.jpg" alt="" />
                        <span>运动(60)</span>
                    </Link>
                    <Link to="/articleList" className={style.albumListDetailBox}>
                        <img className={style.pictureBg} src="./images/tour.jpg" alt="" />
                        <span>旅行(60)</span>
                    </Link>
                    <Link to="/articleList" className={style.albumListDetailBox}>
                        <img className={style.pictureBg} src="./images/child.jpg" alt="" />
                        <span>儿童(60)</span>
                    </Link>
                    <Link to="/articleList" className={style.albumListDetailBox}>
                        <img className={style.pictureBg} src="./images/others.jpg" alt="" />
                        <span>其他(60)</span>
                    </Link>
                </div>
            </div>
	    )
	}
}

//导出组件
export default Album;