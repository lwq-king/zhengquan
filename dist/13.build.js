webpackJsonp([13],{827:function(e,n,t){"use strict";n.a={name:"treelist",data:function(){return{props:{label:"name",children:"zones"},count:1}},methods:{handleCheckChange:function(e,n,t){console.log(e,n,t)},handleNodeClick:function(e){console.log(e)},loadNode:function(e,n){var t=this;if(0===e.level)return n([{name:"region1"},{name:"region2"}]);if(e.level>3)return n([]);var o;o="region1"===e.data.name||"region2"!==e.data.name&&Math.random()>.5,setTimeout(function(){var e;e=o?[{name:"zone"+t.count++},{name:"zone"+t.count++}]:[],n(e)},500)}}}},917:function(e,n,t){"use strict";function o(e){t(918)}Object.defineProperty(n,"__esModule",{value:!0});var a=t(827),r=t(920),c=t(313),i=o,l=c(a.a,r.a,!1,i,null,null);n.default=l.exports},918:function(e,n,t){var o=t(919);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(11)("1be4b3d2",o,!0,{})},919:function(e,n,t){n=e.exports=t(10)(!1),n.push([e.i,"",""])},920:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"treelist"}},[t("el-tree",{attrs:{props:e.props,load:e.loadNode,lazy:"","show-checkbox":""},on:{"check-change":e.handleCheckChange}})],1)},a=[],r={render:o,staticRenderFns:a};n.a=r}});
//# sourceMappingURL=13.build.js.map