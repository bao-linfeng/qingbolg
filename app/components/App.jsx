import React from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Album from "./Album.jsx";
import Article from "./Article.jsx";
import ArticleList from "./ArticleList.jsx";
import ArticleDetails from "./ArticleDetails.jsx";
import Fans from "./Fans.jsx";
import Follow from "./Follow.jsx";
import LinkPage from "./LinkPage.jsx";
import style from "./css/App.css";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

	render(){
		
	    return (
		    <Router>
				<div className={style.appBox}>
					<Header />
					<Route path="/" exact component={Album} />
					<Route path="/article" exact component={Article} />
					<Route path="/articleList" exact component={ArticleList} />
					<Route path="/fans" exact component={Fans} />
					<Route path="/follow" exact component={Follow} />
					<Route path="/articleDetails" exact component={ArticleDetails} />
					<Route path="/linkPage" exact component={LinkPage} />
					<Footer />
				</div>
			</Router>
	    )
	}
}

//导出组件
export default App;