(this.webpackJsonpjeuxhexagone=this.webpackJsonpjeuxhexagone||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),i=n(6),r=n.n(i),a=(n(11),n(3)),s=n(2),h=(n(12),n(5)),d=n.n(h);function x(e){var t=e.coordSommit;return"".concat(t.x[0],",").concat(t.y[0]," ").concat(t.x[1],",").concat(t.y[1]," ").concat(t.x[2],",").concat(t.y[2]," ").concat(t.x[3],",").concat(t.y[3],"  ").concat(t.x[4],",").concat(t.y[4]," ").concat(t.x[5],",").concat(t.y[5])}function u(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}var g=Math.PI,f=Math.cos,A=Math.sin,l=window.innerWidth,j=(window.innerHeight,l/8/2/2);function m(e){for(var t=0;t<=6;t++){var n=g/180*60*t;e.coordSommit.x[t]=e.coordCenter.x+e.size*f(n),e.coordSommit.y[t]=e.coordCenter.y+e.size*A(n)}return e.coordSommit}function y(){var e={firsthexagonCenter:{x:50,y:50},hexagons:[],numberColumn:8,numberRow:9,hexagonSize:j};return e=function(e){var t=b(e),n=b(e);return e.hexagons[t.x][t.y].fill="url(#banditCamp)",e.hexagons[n.x][n.y].fill="url(#grass)",e}(e=function(e){for(var t=0,n=0;n<e.numberRow;n++){e.hexagons[n]=[];for(var o=0;o<e.numberColumn;o++){var c={indice:0,coordInGrid:{x:0,y:0},coordSommit:{x:[],y:[]},coordCenter:{x:0,y:0},size:e.hexagonSize,color:"",fill:"",opacity:1,circleOnThisHexagon:!1};n%2===1?(c.coordCenter.x=e.firsthexagonCenter.x+1.5*n*c.size,c.coordCenter.y=e.firsthexagonCenter.y+2*o*A(60*g/180)*c.size+A(60*g/180)*c.size):(c.coordCenter.x=e.firsthexagonCenter.x+1.5*n*c.size,c.coordCenter.y=e.firsthexagonCenter.y+2*o*A(60*g/180)*c.size),c.coordSommit=m(c),c.coordInGrid={x:n,y:o},c.indice=t++,c.color=u(),e.numberhexagonInGrid++,e.hexagons[n][o]=c}}return e}(e))}function b(e){var t=Math.floor(Math.random()*e.numberColumn);return{x:Math.floor(Math.random()*e.numberRow),y:t}}function v(e,t,n,o){var c=[{x:0,y:0,pos:""}];return e%2===0?(c[0]={x:e-1,y:t-1,pos:"northWest"},c[1]={x:e-1,y:t,pos:"southWest"},c[2]={x:e,y:t-1,pos:"north"},c[3]={x:e,y:t+1,pos:"south"},c[4]={x:e+1,y:t-1,pos:"northEast"},c[5]={x:e+1,y:t,pos:"southEast"}):(c[0]={x:e-1,y:t,pos:"northWest"},c[1]={x:e-1,y:t+1,pos:"southWest"},c[2]={x:e,y:t-1,pos:"north"},c[3]={x:e,y:t+1,pos:"south"},c[4]={x:e+1,y:t,pos:"northEast"},c[5]={x:e+1,y:t+1,pos:"southEast"}),c.slice(0).forEach((function(e){(e.x<0||e.x>n-1||e.y<0||e.y>o-1)&&c.splice(c.indexOf(e),1)})),c}var p=n.p+"static/media/BanditCamp.111e7e62.jpg",w=n.p+"static/media/knight.8be56920.jpg",O=n(0);var D=function(){var e=Object(o.useState)(y()),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(),r=Object(s.a)(i,2),h=r[0],g=r[1],f=Object(o.useState)(n),A=Object(s.a)(f,2),l=A[0],j=A[1],b=Object(o.useState)(),D=Object(s.a)(b,2),M=(D[0],D[1],Object(o.useState)(n.hexagons[0][0].coordInGrid)),P=Object(s.a)(M,2),B=P[0],C=P[1],z=Object(o.useState)(n.hexagons[0][0].coordCenter),H=Object(s.a)(z,2),S=H[0],I=H[1],L=Object(o.useState)(!1),Q=Object(s.a)(L,2),R=Q[0],G=Q[1];function E(e){return""===e.fill?e.color:"".concat(e.fill)}return window.innerWidth,window.innerHeight,Object(O.jsxs)("div",{className:"mainDivFullScreen",children:[Object(O.jsx)("div",{className:"subLeft-hexagonGrig",children:Object(O.jsxs)("svg",{width:2*n.hexagonSize*n.numberRow,height:2*n.hexagonSize*n.numberColumn,children:[n.hexagons.map((function(e){return e.map((function(e){return Object(O.jsxs)("g",{onMouseOver:function(){},onMouseDown:function(){},onMouseUp:function(){clearTimeout(0),c(l)},onClick:function(){g(e),I(e.coordCenter),C(e.coordInGrid)},onMouseEnter:function(){var t=Object(a.a)({},n);e.color=u(),c(t)},onMouseLeave:function(){},children:[Object(O.jsx)("polygon",{points:x(e),fill:E(e),opacity:e.opacity}),Object(O.jsx)("text",{x:e.coordCenter.x,y:e.coordCenter.y,fontFamily:"Verdana",fontSize:"10",fill:"white",textAnchor:"middle",children:"".concat(e.coordInGrid.x,", ").concat(e.coordInGrid.y)}),Object(O.jsxs)("defs",{children:[Object(O.jsx)("pattern",{id:"grass",x:"0",y:"0",width:"1",height:"1",viewBox:"0 0 320 320",preserveAspectRatio:"xMidYMid slice",children:Object(O.jsx)("image",{width:"320",height:"320",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFABAMAAAA/vriZAAAAAXNSR0IArs4c6QAAAB5QTFRFU4olcKguksxOK28KKGULRYEnfLk1N2seTqAmR3cwJY0EcAAABUNJREFUeJztmtFt3jAMhLWCV9AKXkErcAWvoBWygretSMp9LPNi3xW4Asmf6hTgq2qLtPy1drTW+tn8z2h9fbM1NK7WpkWGzuEAJaBNn9BjYP20ZsX45VMPghwOUOZrdbvF4s6Y29a3GZOGGT6HA9SAI5bTk3bmNTv9p/jvPw2ewwFKwL4n/Fx/J/iin0dctKehc37Aa+St/rP3nCP3Sx9dM05D5/yAvr5+e/tX3PPWRhac9TdbH+gcDlACHjl8OuoZE3vL9fUJ+BwOUAM+ebu84niVibI9bS3wWm10Dgeo8h7FJtbyWpenDU/3HjmiAmFzOEAJuDfF0aLT9sZnzxj9+RdgczhAnfcoLev2PvagL67t5xd4Dgf4BeDlm80uMpd3i8Mn9NuyHQfncIAScK3n3e/42Z+UZ1ywa61vm/H76Jwf0Lvu+7TYKU87zv3gd6yL1sc6PIcDlIDDrrtlY+Mfva+Vnvk4aAw5HOAXgLFPxqW67m6fddqMNZ924XM4QAkYia/m3do+9Rq2LlG/QqNzROdwgBIwispsV0yI5+bh++a6XLNzROdwgCq3Y+2T5/OoYjnBjx/8UdrPx8A5HKDMZ5wx+OI+jyut5YTTL1h0zg8YZzYjh2ccN6yPaftxcBg65wdcT3r7+GvtjXdM8Lztg0RD5/8D4LrJs+WORtvvG//yG97mepAG5/yAT9PvNe+cftoVE2a23B2ewwFKwJZN94gjiNX67AL+vKXqBDkcoARci7qu1TsmXLlfXlEFvQmiyOEA/8y9vsw5om+MdsfX/IgyPncJh+ZwgDLPznC04/Yn5pkPgYdfovlCBZzDAUrAdSdnsxMWQ77j9iKzt8mJz+EAZR7j+SbZF9VfcudRTr4iQOdwgBJw7YlRmp8JIyb0qDieoXM4QAnoMgO1nocGKAF9m2TW8+AAZe4H/8as59EDDnI9Dw1QAqL1O/mD8gfh+p38QfmDaP1O/uDbeh4aQP7gBzm9nkcPSK7noQHkD8ofhAPIH5Q/iAYoAeH6nfxB+YNo/U7+4Ls5P2Cc2eQL0X3c0Lj0PDRACYjW7+QPyh98mn6veZR6HhqgBGzZdFPreWgA+YMv515fmPU8OECZs+t5aAD5gx/kMU6s56EB5A/KH0QDlIC+TTLreXCAMveDf2PW8+gBB7mehwYoAdH6nfxB+YNw/U7+oPxBtH4nf/BtPQ8NIH/wg5xez6MHJNfz0ADyB+UPwgHkD8ofRAOUgHD9Tv6g/EG0fid/8N2cHzDObPKF6D5uaFx6HhqgBETrd/IH5Q8+Tb/XPEo9Dw1QArZsuqn1PDSA/MGXc68vzHoeHKDM2fU8NID8wQ/yGCfW89AA8gflD6IBSkDfJpn1PDhAmfvBvzHrefSAg1zPQwOUgGj9Tv6g/EG4fid/UP4gWr+TP/i2nocGkD/4QU6v59EDkut5aAD5g/IH4QDyB+UPogFKQLh+J39Q/iBav5M/+G7ODxhnNvlCdB83NC49Dw1QAqL1O/mD8gefpt9rHqWehwYoAVs23dR6HhpA/uDLudcXZj0PDlDm7HoeGkD+4Ad5jBPreWgA+YPyB9EAJaBvk8x6HhygzP3g35j1PHrAQa7noQFKQLR+J39Q/iBcv5M/KH8Qrd/JH3xbz0MDyB/8IKfX8+gByfU8NID8QfmDcAD5g/IH0QAlIFy/kz8ofxCt38kffDfnB4wzm3whuo8bGpeehwYoAdH6nfxB+YNP0+81j1LPQwOUgC2bbmo9Dw0gf/Dl3OsLs54HByhzdj0PDSB/8IM8xon1PDSA/MGX8z+JQp0l6fDUVAAAAABJRU5ErkJggg=="})}),Object(O.jsx)("pattern",{id:"banditCamp",x:"0",y:"0",width:"1",height:"1",viewBox:"0 0 700 310",preserveAspectRatio:"xMidYMid slice",children:Object(O.jsx)("image",{href:p,width:"700",height:"310"})})]})]},"indice".concat(e.indice))}))})),function(){var e=0;return console.log("width: ".concat(w.naturalWidth,", height:").concat(w.height)),Object(O.jsxs)("g",{onMouseDown:function(){G(!0),clearTimeout(e);var t=Object(a.a)({},n);e=setTimeout((function(){j(d.a.cloneDeep(n)),c(function(e,t){var n=v(e.coordInGrid.x,e.coordInGrid.y,t.numberColumn,t.numberRow);t.hexagons.map((function(e){return e.map((function(e){return e.opacity=.3}))}));for(var o=0;o<n.length;o++)t.hexagons[n[o].x][n[o].y].opacity=1;return t}(n.hexagons[B.x][B.y],t))}),1e3)},onMouseMove:function(e){!0===R&&I({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY})},onMouseUp:function(){clearTimeout(e),c(l),G(!1)},children:[Object(O.jsx)("rect",{width:"60",height:"60",x:S.x-30,y:S.y-30,fill:"url(#knight)"}),Object(O.jsx)("defs",{children:Object(O.jsx)("pattern",{id:"knight",x:"0",y:"0",width:"1",height:"1",viewBox:"0 0 900 900",preserveAspectRatio:"xMidYMid slice",children:Object(O.jsx)("image",{width:"900",height:"900",href:w})})})]},"Caracter")}()]})}),Object(O.jsxs)("div",{className:"subRight-hexagonDisplay-encounter",children:[Object(O.jsx)("div",{className:"topRight-hexagonDisplay",children:Object(O.jsx)("svg",{width:"500",height:"200",children:function(){if(h){var e=d.a.cloneDeep(h);return(e=Object(a.a)(Object(a.a)({},e),{},{coordCenter:{x:130,y:100},size:100})).coordSommit=m(e),Object(O.jsx)("polygon",{points:x(e),fill:E(e),stroke:"black"})}}()})}),Object(O.jsx)("div",{className:"downRight-encounter"})]})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root")),M()}},[[16,1,2]]]);
//# sourceMappingURL=main.55e7288a.chunk.js.map