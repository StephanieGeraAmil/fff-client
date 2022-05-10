// const React = require('react');

//const {MapSection} = require('./components/mapSection');
//import {MapSection} from './components/mapSection';


// import React from "react";

 //import App from "./App";
 const App = require('./App.js');

test('add 2 and 3 to be 5', () => {
const {getBytext}= render(<App/>)
  // const link=getBytext("this")
  const n1=2;
  const n2=3;
  expect(n1+n2).toBe(5);
});
