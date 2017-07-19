import React from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import style from "./css/linkPage.css";
import $ from 'jquery';

class linkPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

    componentDidMount(){
        $('#app').mouseover(function(){
            $('#appLeft').animate({opacity:1},1000);
            $('#appCenter').animate({opacity:1},1500);
            $('#appRight').animate({opacity:1},2000);
        });
        $('#discover').mouseover(function(){
            $('#discoverTopRight img').animate({right:"50%",marginRight:"-106px",opacity:1},1000);
            $('#discoverBottomLeft img').animate({left:"50%",marginLeft:"-106px",opacity:1},1000);
            $('#discoverTopLeft p').animate({marginLeft:"0",opacity:1},1000);
            $('#discoverBottomRight p').animate({marginLeft:"0",opacity:1},1000);
        });
    }

	render(){
	    return (
		    <div className={style.linkPageBox}>
                <div className={style.Items}>
                    <div className={style.ItemsTwo} id="handBox">
                        <img className="hand" src="./images/hand.png" alt=""/>
                    </div>
                    <div className={style.ItemsTwo+' '+style.oneLeft}>
                        <h1>感受温情，<br />关爱家人，不忘亲情，<br />记录生活的点滴，分享美好的瞬见，<br />就在这里</h1>
                        <div className={style.appDownload}>
                            <img src="./images/app.png" alt=""/>
                            <Link to=""><i className="fa fa-apple"></i>IOS版本下载</Link>
                            <Link to=""><i className="fa fa-android"></i>安卓版本下载</Link>
                        </div>
                    </div>
                </div>
                <div className={style.features}>
                    <div className={style.featuresTitle}>
                        <span></span>
                        <h3>Features</h3>
                        <p>了解产品更多特色功能</p>
                    </div>
                    <div className={style.ItemsThree} id="featuresLeft">
                        <div className={style.featuresOne+' featuresLeft'}>
                            <h3>相册</h3>
                            <p>与最亲密的人分享自己的过去与现在，见证自己的改变
                            </p>
                            <i className="fa fa-image"></i>
                        </div>
                        <div className={style.featuresOne+' featuresLeft'}>
                            <h3>地图</h3>
                            <p>世界在打，有你关注的目光
                            </p>
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className={style.featuresOne+' featuresLeft'}>
                            <h3>天气</h3>
                            <p>四季流转，亲情的天空永远是晴天
                            </p>
                            <i className="fa fa-cloud"></i>
                        </div>
                        <div className={style.featuresOne+' featuresLeft'}>
                            <h3>亲友</h3>
                            <p>认真管理亲友列表，看谁是你的最爱
                            </p>
                            <i className="fa fa-users"></i>
                        </div>
                    </div>
                    <div className={style.ItemsThree+' '+style.col_3_c} id="featuresCenter">
                        <img src="./images/overview.png" alt=""/>
                    </div>
                    <div className={style.ItemsThree+' '+style.featuresRights} id="featuresRight">
                        <div className={style.featuresOne+' '+ style.featuresRight}>
                            <h3>随记</h3>
                            <p>记录人生难忘的每一刻，分享我们成长与感动
                            </p>
                            <i className="fa fa-edit"></i>
                        </div>
                        <div className={style.featuresOne+' '+ style.featuresRight}>
                            <h3>微习惯</h3>
                            <p>每天小小1块钱，亲友打卡挑战，让我们以爱的方式，彼此监督共同养成好习惯。
                            </p>
                            <i className="fa fa-trophy"></i>
                        </div>
                        <div className={style.featuresOne+' '+ style.featuresRight}>
                            <h3>家庭树</h3>
                            <p>一个人是一片叶子，一个家庭是一个枝桠，一个家族才是一棵参树！
                            </p>
                            <i className="fa fa-tree"></i>
                        </div>
                        <div className={style.featuresOne+' '+ style.featuresRight}>
                            <h3>参易问道</h3>
                            <p>事疑解惑，启迪智慧！采用最古老的六爻占卜法，占卜问卦：问运势、问事业、问健康、问家庭、问婚姻，是您身边的易经命理大师！
                            </p>
                            <i className="fa fa-magic"></i>
                        </div>
                    </div>
                </div>
                <div className={style.features+' '+style.discover} id="discover">
                    <div className={style.featuresTitle}>
                        <span></span>
                        <h3>Discover</h3>
                        <p>发现更多精彩内容</p>
                    </div>
                    <div className={style.discoverItem+' '+style.discoverItem_1} id="discoverTopLeft">
                        <p className={style.span}>相册</p>
                        <p className={style.h3}>分享每一个美丽瞬间</p>
                        <p>Lily手机相册中有两千张照片</p>
                        <p>想把今年旅游拍的精品照分享给亲友</p>
                        <p>无奈最近在朋友圈刷屏</p>
                        <p className={style.label}>—2016 lily 的故事</p>
                    </div>
                    <div className={style.discoverItem} id="discoverTopRight">
                        <img src="./images/create_album.png" alt=""/>
                    </div>
                    <div className={style.discoverItem} id="discoverBottomLeft">
                        <img src="./images/create_wish.png" alt=""/>
                    </div>
                    <div className={style.discoverItem+' '+style.discoverItem_1} id="discoverBottomRight">
                        <p className={style.span}>心愿</p>
                        <p className={style.h3}>每天进步一小步</p>
                        <p>小明儿子是初中生，酷爱篮球</p>
                        <p>暑假期间每天篮球时间一小时</p>
                        <p>开学后由于晚上打球，导致每天作业写到很晚</p>
                        <p>小明无奈每天下班后监督完成作业</p>
                        <p>近期出差，监督工作没人接替，儿子积极性不够</p>
                        <p className={style.label}>—2016 小明 的烦恼</p>
                    </div>
                </div>
                <div className={style.features+' '+style.app} id="app">
                    <div className={style.featuresTitle}>
                        <span></span>
                        <h3>App</h3>
                        <p>即刻拿起手机下载，与亲朋好友一起分享</p>
                    </div>
                    <ul className={style.appDetailsBox+' '+style.appOdd} id="appLeft">
                        <li className={style.appTitle}>Home+标准版</li>
                        <li>标准版即可享有所有内容，与好友互动，分享内容</li>
                        <li className={style.green}>免费</li>
                        <li>相册，随记</li>
                        <li>心愿，日程</li>
                        <li>天气，地图</li>
                        <li>亲子帐号</li>
                        <li>群组聊天，发红包</li>
                        <li>
                            <Link to=""><i className="fa fa-apple"></i>IOS版本下载</Link>
                            <Link to=""><i className="fa fa-android"></i>安卓版本下载</Link>
                        </li>
                    </ul>
                    <ul className={style.appDetailsBox} id="appCenter">
                        <li className={style.appTitle}>Home+家族版</li>
                        <li>在标准版的基础上，集成了族谱管理</li>
                        <li className={style.green}>￥1 / 帐号</li>
                        <li>相册，随记</li>
                        <li>心愿，日程</li>
                        <li>天气，地图</li>
                        <li>亲子帐号</li>
                        <li>群组聊天，发红包</li>
                        <li>族谱管理</li>
                        <li>
                            <Link to=""><i className="fa fa-apple"></i>IOS版本下载</Link>
                            <Link to=""><i className="fa fa-android"></i>安卓版本下载</Link>
                        </li>
                    </ul>
                    <ul className={style.appDetailsBox+' '+style.appOdd} id="appRight">
                        <li className={style.appTitle}>Home+至尊版</li>
                        <li>在家族版的基础上，对于族谱的管理，享受企业级的顾问服务</li>
                        <li className={style.green}>联系我们</li>
                        <li>相册，随记</li>
                        <li>心愿，日程</li>
                        <li>天气，地图</li>
                        <li>亲子帐号</li>
                        <li>群组聊天，发红包</li>
                        <li>族谱管理</li>
                        <li>企业级顾问服务</li>
                        <li>
                            <Link to=""><i className="fa fa-email"></i>联系我们</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.features+' '+style.contact}>
                    <div className={style.featuresTitle}>
                        <span></span>
                        <h3>Contact</h3>
                        <p>如果您有任何问题，欢迎联系我们</p>
                    </div>
                    <div className={style.contactItem+' '+style.contactItemIndex}>
                        <p className={style.green}>江苏时光信息科技有限公司</p>
                        <p>常州科教城天润科技大厦A栋2层</p>
                        <p><i className="fa fa-phone"></i>0519-69877686 </p>
                        <p>0519-69877681</p>
                    </div>
                    <div className={style.contactItem}>
                        江苏时光信息科技有限公司（时光科技®）成立于2014年5月， 英文名Qingtime，是一家融合东方人文精神和西方硅谷创新气质的现代高科技企业，公司除软件研发中心外，另设谱牒研究中心（位于常州家谱馆）、基因研究中心（位于杭州浙江大学生命科学院），拥有来自中国科大、浙江大学等知名院校的科研管理团队。
                    </div>
                    <div className={style.contactTips}><Link to="" className={style.contactEmail}>给我们发邮件</Link></div>
                    <div className={style.contactTips}>或者在社交网站上关注我们</div>
                    <div className={style.contactTips}>
                        <Link to=""><i className="fa fa-weixin"></i></Link>
                        <Link to=""><i className="fa fa-weibo"></i></Link>
                        <Link to=""><i className="fa fa-qq"></i></Link>
                    </div>
                    <p>© 2016 江苏时光信息科技有限公司</p>
                    <p>与时间赛跑，给世界光明</p>
                </div>
            </div>
	    )
	}
}

//导出组件
export default linkPage;