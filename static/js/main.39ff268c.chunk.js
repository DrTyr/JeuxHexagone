(this.webpackJsonpjeuxhexagone=this.webpackJsonpjeuxhexagone||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),r=t(5),i=t.n(r),a=(t(11),t(2)),s=t(4),d=(t(12),t(6)),g=t.n(d);function h(e){var n=e.coordSommit;return"".concat(n.x[0],",").concat(n.y[0]," ").concat(n.x[1],",").concat(n.y[1]," ").concat(n.x[2],",").concat(n.y[2]," ").concat(n.x[3],",").concat(n.y[3],"  ").concat(n.x[4],",").concat(n.y[4]," ").concat(n.x[5],",").concat(n.y[5])}function x(){for(var e="#",n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}var A=Math.PI,f=Math.cos,u=Math.sin;function l(e){for(var n=0;n<=6;n++){var t=A/180*60*n;e.coordSommit.x[n]=e.coordCenter.x+e.size*f(t),e.coordSommit.y[n]=e.coordCenter.y+e.size*u(t)}return e.coordSommit}function m(){var e={firsthexagonCenter:{x:50,y:50},hexagons:[],numberColumn:8,numberRow:8,hexagonSize:60};return e=function(e){var n=j(e),t=j(e);return e.hexagons[n.x][n.y].fill="url(#banditCamp)",e.hexagons[t.x][t.y].fill="url(#grass)",e}(e=function(e){for(var n=0,t=0;t<e.numberRow;t++){e.hexagons[t]=[];for(var o=0;o<e.numberColumn;o++){var c={indice:0,coordInGrid:{x:0,y:0},coordSommit:{x:[],y:[]},coordCenter:{x:0,y:0},size:e.hexagonSize,color:"",fill:""};t%2===1?(c.coordCenter.x=e.firsthexagonCenter.x+1.5*t*c.size,c.coordCenter.y=e.firsthexagonCenter.y+2*o*u(60*A/180)*c.size+u(60*A/180)*c.size):(c.coordCenter.x=e.firsthexagonCenter.x+1.5*t*c.size,c.coordCenter.y=e.firsthexagonCenter.y+2*o*u(60*A/180)*c.size),c.coordSommit=l(c),c.coordInGrid={x:t,y:o},c.indice=n++,c.color=x(),e.numberhexagonInGrid++,e.hexagons[t][o]=c}}return e}(e))}function j(e){var n=Math.floor(Math.random()*e.numberColumn);return{x:Math.floor(Math.random()*e.numberRow),y:n}}var D=t.p+"static/media/BanditCamp.111e7e62.jpg",b=t(0);var v=function(){var e=Object(o.useState)(m()),n=Object(s.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(),i=Object(s.a)(r,2),d=i[0],A=i[1];function f(e){return""===e.fill?e.color:"".concat(e.fill)}return Object(b.jsxs)("div",{className:"mainDivFullScreen",children:[Object(b.jsx)("div",{className:"subLeft-hexagonGrig",children:Object(b.jsx)("svg",{width:2*t.hexagonSize*t.numberColumn,height:2*t.hexagonSize*t.numberRow,children:t.hexagons.map((function(e){return e.map((function(e){return Object(b.jsxs)(o.Fragment,{children:[Object(b.jsx)("polygon",{onClick:function(){var n=Object(a.a)({},t);e.color=x(),c(n)},onMouseEnter:function(){A(e)},onMouseLeave:function(){A(null)},points:h(e),fill:f(e)},"indice".concat(e.indice)),Object(b.jsx)("text",{x:e.coordCenter.x,y:e.coordCenter.y,fontFamily:"Verdana",fontSize:"10",fill:"white",textAnchor:"middle",children:"".concat(e.coordInGrid.x,", ").concat(e.coordInGrid.y)},"text".concat(e.indice)),Object(b.jsxs)("defs",{children:[Object(b.jsx)("pattern",{id:"banditCamp",patternUnits:"objectBoundingBox",x:"0",y:"0",width:e.size,height:e.size,children:Object(b.jsx)("image",{href:D,x:"0",y:"0",width:4*e.size,height:2*e.size})}),Object(b.jsx)("pattern",{id:"grass",patternUnits:"objectBoundingBox",x:"0",y:"0",width:e.size,height:e.size,children:Object(b.jsx)("image",{href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFABAMAAAA/vriZAAAAAXNSR0IArs4c6QAAAB5QTFRFU4olcKguksxOK28KKGULRYEnfLk1N2seTqAmR3cwJY0EcAAABUNJREFUeJztmtFt3jAMhLWCV9AKXkErcAWvoBWygretSMp9LPNi3xW4Asmf6hTgq2qLtPy1drTW+tn8z2h9fbM1NK7WpkWGzuEAJaBNn9BjYP20ZsX45VMPghwOUOZrdbvF4s6Y29a3GZOGGT6HA9SAI5bTk3bmNTv9p/jvPw2ewwFKwL4n/Fx/J/iin0dctKehc37Aa+St/rP3nCP3Sx9dM05D5/yAvr5+e/tX3PPWRhac9TdbH+gcDlACHjl8OuoZE3vL9fUJ+BwOUAM+ebu84niVibI9bS3wWm10Dgeo8h7FJtbyWpenDU/3HjmiAmFzOEAJuDfF0aLT9sZnzxj9+RdgczhAnfcoLev2PvagL67t5xd4Dgf4BeDlm80uMpd3i8Mn9NuyHQfncIAScK3n3e/42Z+UZ1ywa61vm/H76Jwf0Lvu+7TYKU87zv3gd6yL1sc6PIcDlIDDrrtlY+Mfva+Vnvk4aAw5HOAXgLFPxqW67m6fddqMNZ924XM4QAkYia/m3do+9Rq2LlG/QqNzROdwgBIwispsV0yI5+bh++a6XLNzROdwgCq3Y+2T5/OoYjnBjx/8UdrPx8A5HKDMZ5wx+OI+jyut5YTTL1h0zg8YZzYjh2ccN6yPaftxcBg65wdcT3r7+GvtjXdM8Lztg0RD5/8D4LrJs+WORtvvG//yG97mepAG5/yAT9PvNe+cftoVE2a23B2ewwFKwJZN94gjiNX67AL+vKXqBDkcoARci7qu1TsmXLlfXlEFvQmiyOEA/8y9vsw5om+MdsfX/IgyPncJh+ZwgDLPznC04/Yn5pkPgYdfovlCBZzDAUrAdSdnsxMWQ77j9iKzt8mJz+EAZR7j+SbZF9VfcudRTr4iQOdwgBJw7YlRmp8JIyb0qDieoXM4QAnoMgO1nocGKAF9m2TW8+AAZe4H/8as59EDDnI9Dw1QAqL1O/mD8gfh+p38QfmDaP1O/uDbeh4aQP7gBzm9nkcPSK7noQHkD8ofhAPIH5Q/iAYoAeH6nfxB+YNo/U7+4Ls5P2Cc2eQL0X3c0Lj0PDRACYjW7+QPyh98mn6veZR6HhqgBGzZdFPreWgA+YMv515fmPU8OECZs+t5aAD5gx/kMU6s56EB5A/KH0QDlIC+TTLreXCAMveDf2PW8+gBB7mehwYoAdH6nfxB+YNw/U7+oPxBtH4nf/BtPQ8NIH/wg5xez6MHJNfz0ADyB+UPwgHkD8ofRAOUgHD9Tv6g/EG0fid/8N2cHzDObPKF6D5uaFx6HhqgBETrd/IH5Q8+Tb/XPEo9Dw1QArZsuqn1PDSA/MGXc68vzHoeHKDM2fU8NID8wQ/yGCfW89AA8gflD6IBSkDfJpn1PDhAmfvBvzHrefSAg1zPQwOUgGj9Tv6g/EG4fid/UP4gWr+TP/i2nocGkD/4QU6v59EDkut5aAD5g/IH4QDyB+UPogFKQLh+J39Q/iBav5M/+G7ODxhnNvlCdB83NC49Dw1QAqL1O/mD8gefpt9rHqWehwYoAVs23dR6HhpA/uDLudcXZj0PDlDm7HoeGkD+4Ad5jBPreWgA+YPyB9EAJaBvk8x6HhygzP3g35j1PHrAQa7noQFKQLR+J39Q/iBcv5M/KH8Qrd/JH3xbz0MDyB/8IKfX8+gByfU8NID8QfmDcAD5g/IH0QAlIFy/kz8ofxCt38kffDfnB4wzm3whuo8bGpeehwYoAdH6nfxB+YNP0+81j1LPQwOUgC2bbmo9Dw0gf/Dl3OsLs54HByhzdj0PDSB/8IM8xon1PDSA/MGX8z+JQp0l6fDUVAAAAABJRU5ErkJggg==",x:"0",y:"0",width:4*e.size,height:2*e.size})})]})]})}))}))})}),Object(b.jsxs)("div",{className:"subRight-hexagonDisplay-encounter",children:[Object(b.jsx)("div",{className:"topRight-hexagonDisplay",children:Object(b.jsx)("svg",{width:"500",height:"200",children:function(){if(d){var e=g.a.cloneDeep(d);return(e=Object(a.a)(Object(a.a)({},e),{},{coordCenter:{x:130,y:100},size:100})).coordSommit=l(e),Object(b.jsx)("polygon",{points:h(e),fill:e.color,stroke:"black"})}}()})}),Object(b.jsx)("div",{className:"downRight-encounter",children:"BIP BOUP BOUP BIP"})]})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),o(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.39ff268c.chunk.js.map