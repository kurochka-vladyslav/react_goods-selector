(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),s=c(7),r=c(5),a=c(6),l=c(9),i=c(8),d=c(1),u=c.n(d),b=(c(14),c(3)),h=c.n(b),j=c(0),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:["Jam"]},e.buttonClick=function(t){e.state.selectedGood.includes(t)?e.setState((function(e){return{selectedGood:e.selectedGood.filter((function(e){return e!==t}))}})):e.setState((function(e){return{selectedGood:[].concat(Object(s.a)(e.selectedGood),[t])}}))},e.clearGoods=function(){e.setState({selectedGood:[]})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:function(){switch(t.length){case 0:return"No goods selected";case 1:return"".concat(t," is selected");default:return"".concat(t.slice(0,t.length-1).join(",")," and ").concat(t.at(-1)," are selected")}}()}),Object(j.jsx)("div",{className:"clear-button-wrapper",children:t.length>0&&Object(j.jsx)("button",{className:"clear-button",type:"button",onClick:this.clearGoods,children:"Clear"})}),Object(j.jsx)("ul",{children:p.map((function(c){var n=t.includes(c);return Object(j.jsxs)("li",{className:h()("item",{selected:n}),children:[c,Object(j.jsx)("button",{type:"button",onClick:function(){return e.buttonClick(c)},className:h()("item__button",{"item__button-selected":n}),children:n?"Remove":"Select"})]},c)}))})]})}}]),c}(u.a.Component),f=m;o.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e41cdf64.chunk.js.map