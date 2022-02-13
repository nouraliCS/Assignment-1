"use strict";

var student_name = /*#__PURE__*/React.createElement("div", {
  id: "name"
}, /*#__PURE__*/React.createElement("h2", {
  id: "name_comp"
}, "Nour Ali"));
var pic = /*#__PURE__*/React.createElement("div", {
  id: "picture"
}, /*#__PURE__*/React.createElement("img", {
  id: "picture_comp",
  src: "./assets/nour.png"
}));
var introduction = /*#__PURE__*/React.createElement("div", {
  id: "intro"
}, /*#__PURE__*/React.createElement("p", {
  id: "paragraph"
}, "My name is Nour Ali. I love watching Anime. Listening to holy music and watching TV in general."));
var button = /*#__PURE__*/React.createElement("div", {
  id: "button"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/nouraliCS/Assignment-1"
}, /*#__PURE__*/React.createElement("button", {
  id: "button_comp"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(student_name, document.getElementById('name'));
ReactDOM.render(pic, document.getElementById('picture'));
ReactDOM.render(introduction, document.getElementById('introduction'));
ReactDOM.render(button, document.getElementById('button'));