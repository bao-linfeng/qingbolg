import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import App from './components/App.jsx';

ReactDom.render(
    <App />
	,document.getElementById('root')
);