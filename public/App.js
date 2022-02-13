"use strict";

var student_name = /*#__PURE__*/React.createElement("div", {
  class: "name_out"
}, /*#__PURE__*/React.createElement("h2", null, "Nour Ali"));
var pic_name = /*#__PURE__*/React.createElement("div", {
  class: "picture_out"
}, /*#__PURE__*/React.createElement("img", {
  src: "https://i.ibb.co/Tkg7Prx/nour.png",
  alt: "nour"
}));
var introduction = /*#__PURE__*/React.createElement("div", {
  class: "intro_out"
}, /*#__PURE__*/React.createElement("p", null, "My name is Nour Ali. I love watching Anime. Listening to holy music and watching TV in general."));
var button_name = /*#__PURE__*/React.createElement("div", {
  class: "button_out"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/nouraliCS/Assignment-1"
}, /*#__PURE__*/React.createElement("button", null, "VIEW MY GITHUB REPO")));
ReactDOM.render(student_name, document.getElementById('name'));
ReactDOM.render(pic_name, document.getElementById('picture'));
ReactDOM.render(introduction, document.getElementById('introduction'));
ReactDOM.render(button_name, document.getElementById('button'));