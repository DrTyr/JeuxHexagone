(this.webpackJsonpjeuxhexagone=this.webpackJsonpjeuxhexagone||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),s=n(7),r=n.n(s),o=(n(12),n(2)),h=n(3),c=n(5),x=n(4),u=(n(13),n(14),n(0)),v=Math.PI,d=Math.cos,f=Math.sin,l=function(t){Object(c.a)(n,t);var e=Object(x.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={hexSize:20,firstHexCenter:{x:50,y:50},nbHexInGrid:50,nbHexInLine:10,nbColumn:5},i}return Object(h.a)(n,[{key:"componentWillMount",value:function(){this.setState({canvasSize:{canvasWidth:800,canvasHeight:600}})}},{key:"componentDidMount",value:function(){var t=this.state.canvasSize,e=t.canvasWidth,n=t.canvasHeight;this.canvasHex.width=e,this.canvasHex.height=n,this.drawGridOddColumn(this.canvasHex,{x:this.state.firstHexCenter.x,y:this.state.firstHexCenter.y}),this.drawGridEvenColumn(this.canvasHex,{x:this.state.firstHexCenter.x,y:this.state.firstHexCenter.y})}},{key:"drawGridOddColumn",value:function(t,e){for(var n=0;n<=this.state.nbColumn;n++)this.drawGridColumn(this.canvasHex,{x:this.state.firstHexCenter.x+3*n*this.state.hexSize,y:this.state.firstHexCenter.y})}},{key:"drawGridEvenColumn",value:function(t,e){for(var n=0;n<=this.state.nbColumn-1;n++)this.drawGridColumn(this.canvasHex,{x:this.state.firstHexCenter.x+3*n*this.state.hexSize+1.5*this.state.hexSize,y:this.state.firstHexCenter.y+f(60*v/180)*this.state.hexSize})}},{key:"drawGridColumn",value:function(t,e){for(var n=0;n<=this.state.nbHexInLine;n++)this.drawHex(this.canvasHex,{x:e.x,y:2*n*f(60*v/180)*this.state.hexSize+e.y})}},{key:"drawHex",value:function(t,e){for(var n=0;n<=5;n++){var i=this.getHexCornerCoord(e,n),a=this.getHexCornerCoord(e,n+1);this.drawLine(t,{x:i.x,y:i.y},{x:a.x,y:a.y})}}},{key:"getHexCornerCoord",value:function(t,e){var n=v/180*(60*e),i=t.x+this.state.hexSize*d(n),a=t.y+this.state.hexSize*f(n);return this.Point(i,a)}},{key:"Point",value:function(t,e){return{x:t,y:e}}},{key:"drawLine",value:function(t,e,n){var i=t.getContext("2d");i.beginPath(),i.moveTo(e.x,e.y),i.lineTo(n.x,n.y),i.stroke(),i.closePath()}},{key:"render",value:function(){var t=this;return Object(u.jsx)("div",{children:Object(u.jsx)("canvas",{ref:function(e){return t.canvasHex=e}})})}}]),n}(a.a.Component),y=function(t){Object(c.a)(n,t);var e=Object(x.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)(l,{})})}}]),n}(a.a.Component),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),i(t),a(t),s(t),r(t)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),C()}},[[16,1,2]]]);
//# sourceMappingURL=main.341d09e6.chunk.js.map