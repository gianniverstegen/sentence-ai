(this["webpackJsonpsentence-ai"]=this["webpackJsonpsentence-ai"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(4),i=n.n(a),c=(n(9),n(2));var u={0:"a",1:"A",2:"b",3:"B",4:"c",5:"C",6:"d",7:"D",8:"e",9:"E",10:"f",11:"F",12:"g",13:"G",14:"h",15:"H",16:"i",17:"I",18:"j",19:"J",20:"k",21:"K",22:"l",23:"L",24:"m",25:"M",26:"n",27:"N",28:"o",29:"O",30:"p",31:"P",32:"q",33:"Q",34:"r",35:"R",36:"s",37:"S",38:"t",39:"T",40:"u",41:"U",42:"v",43:"V",44:"w",45:"W",46:"x",47:"X",48:"y",49:"Y",50:"z",51:"Z",52:"0",53:"1",54:"2",55:"3",56:"4",57:"5",58:"6",59:"7",60:"8",61:"9",62:"$",63:" ",64:",",65:"-",66:"(",67:")",68:".",69:"'",70:'"',71:"?",72:":",73:"!",74:" ",75:" "},s=function(e){return u[e]};function l(e,t){for(var n=Math.random(),r=Math.random(),o=void 0,a=void 0,i=1;i<e.length&&!(n<e[i][0]&&n>e[i-1][0]&&(o=e[i][1],void 0!==a))&&!(r<e[i][0]&&r>e[i-1][0]&&(a=e[i][1],void 0!==o));i++);return[d(o.slice(0,Math.round(o.length/2))+a.slice(Math.round(o.length/2)),t),d(a.slice(0,Math.round(o.length/2))+o.slice(Math.round(o.length/2)),t)]}function d(e,t){for(var n=0;n<e.length;n++)if(Math.random()<t){var r=s(Math.floor(75*Math.random()));e=e.substr(0,n)+r+e.substr(n+1,e.length)}return e}var v=function(e,t,n){for(var r=[],o=0,a=0;a<e.length;a++)o+=e[a][1];for(var i=0,c=[[0]],u=0;u<e.length;u++)i+=e[u][1]/o,c.push([i,e[u][0]]);for(;r.length<t;){var s=l(c,n);r.push([s[0]]),r.push([s[1]])}return r};function f(e){for(var t="",n=0;n<e.length;n++)n%2!==1&&(t+=e[n]);return t}var h=function(e,t,n,r){var o=e,a=o.length,i=void 0;i=void 0===r?function(e,t){for(var n=[],r=0;r<e;r++){for(var o=[],a=0;a<t;a++){var i=Math.floor(75*Math.random()),c=s(i);o.push(c)}o=f(o=o.join()),n.push([o])}return n}(t,a):v(r,t,n);var c,u=function(e,t){for(var n=0;n<e.length;n++){for(var r=0,o=0;o<e[n][0].length;o++)e[n][0].charAt(o)===t.charAt(o)&&(r+=1);var a=Math.round(r/t.length*1e3)/1e3;e[n].push(a)}return e}(i,o);return(c=u).sort((function(e,t){return t[1]-e[1]})),c},j=n(0),b=function(e){var t=e.generateSentences,n=e.generationNumber,o=(e.targetSentence,Object(r.useState)({value:""})),a=Object(c.a)(o,2),i=a[0],u=a[1];return Object(j.jsxs)("div",{id:"inputBox",children:[Object(j.jsx)("form",{children:Object(j.jsx)("input",{autoComplete:"off",type:"text",name:"targetSentence",onChange:function(e){u({value:e.target.value})}})}),Object(j.jsx)("button",{onClick:function(){return t(i.value)},children:"GO"}),Object(j.jsxs)("div",{id:"generationAmountDisplayer",children:["Current Generation: ",n]}),Object(j.jsxs)("div",{id:"infoBox",children:["Using a population of a thousand, approximately"," ",1e3*n," possible sentences were considered.",""]})]})},p=function(e){var t=e.currentGeneration,n=[],r=[];if(void 0!==t)for(var o=0;o<20;o++)n.push(t[o][0]),r.push(t[o][1]);return Object(j.jsxs)("div",{id:"generationResultBox",children:[Object(j.jsx)("div",{id:"topSentenceBlock",children:n.map((function(e,t){return Object(j.jsx)("div",{className:"topSentence",id:"".concat(t,"-element"),children:e},t)}))}),Object(j.jsx)("div",{id:"topFitnessBlock",children:r.map((function(e,t){return Object(j.jsx)("div",{className:"topFitness",id:"".concat(t,"-element"),children:e},t)}))})]})};var g=function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])};var O=function(){var e=Object(r.useState)({isRunning:!1,populationAmount:1e3,mutation:.01}),t=Object(c.a)(e,2),n=t[0],o=(t[1],Object(r.useState)({value:""})),a=Object(c.a)(o,2),i=a[0],u=a[1],s=Object(r.useState)(void 0),l=Object(c.a)(s,2),d=l[0],v=l[1],f=Object(r.useState)(0),O=Object(c.a)(f,2),m=O[0],x=O[1],S=Object(r.useState)(!1),M=Object(c.a)(S,2),k=M[0],A=M[1];return g((function(){if(d[0][0]===i.value)A(!1);else{var e=h(i.value,n.populationAmount,n.mutation,d);v(e),x(m+1)}}),k?40:null),Object(r.useEffect)((function(){window.addEventListener("keypress",(function(e){e.stopImmediatePropagation(),function(e){"s"===e.key&&A(!1)}(e)}))})),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{generateSentences:function(e){u({value:e}),x(1);var t=h(e,n.populationAmount,n.mutation,void 0);v(t),A(!0)},generationNumber:m,targetSentence:i}),Object(j.jsx)(p,{currentGeneration:void 0===d?void 0:d.slice(0,20)})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),m()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.9b75a87b.chunk.js.map