(this.webpackJsonpdolphin=this.webpackJsonpdolphin||[]).push([[0],{62:function(n,t,e){},83:function(n,t,e){},95:function(n,t,e){"use strict";e.r(t);var r=e(12),o=e(1),i=e.n(o),c=e(30),a=e.n(c),s=(e(83),e(14)),u=e(23),l=e(9),p=e(8),d=e(24),j=e(31),b=e(54),g=(e(43),e(75)),h=e(50);e(62);function f(){return Object(r.jsxs)("mesh",{visible:!0,position:[0,0,0],rotation:[0,0,0],children:[Object(r.jsx)("sphereGeometry",{attach:"geometry",args:[1,16,16]}),Object(r.jsx)("meshStandardMaterial",{attach:"material",color:"white",transparent:!0,opacity:.6,roughness:1,metalness:0})]})}function O(n){var t=Object(o.useRef)(),e=Object(g.a)("models/dolphin.glb"),i=Object(o.useState)(!1),c=Object(l.a)(i,2),a=c[0],s=c[1],u=Object(h.c)({scale:a?[2,2,2]:[1.5,1.5,1.5],config:h.b.wobbly}),d=0;return Object(p.g)((function(){d+=.01,t.current.rotation.x=t.current.rotation.y=t.current.rotation.y=a?1.01*t.current.rotation.y:(t.current.rotation.y+.01)%6.28,t.current.rotation.x+=.005,a||(t.current.children[0].material.opacity=.2*Math.abs(Math.sin(d+t.current.rotation.y)),t.current.rotation.z=t.current.rotation.y,t.current.rotation.z+=.05)})),Object(r.jsx)("group",Object(b.a)(Object(b.a)({ref:t},n),{},{children:Object(r.jsx)(h.a.mesh,{position:[0,0,0],scale:u.scale,visible:!0,geometry:e.nodes.DOLPHIN.geometry,onPointerOver:function(n){return s(!0)},onPointerOut:function(n){return s(!1)},children:Object(r.jsx)("meshStandardMaterial",{wireframe:!a,wireframeLinewidth:1.01,attach:"material",color:"white",transparent:!0,opacity:a?.3:.1,roughness:100.1,metalness:a?0:10.5})})}))}function m(){var n=Object(s.a)(Array(14)).map((function(n,t){return t})),t=Object(s.a)(Array(1)).map((function(n,t){return t}));return Object(r.jsx)(o.Suspense,{fallback:Object(r.jsx)(f,{}),children:t.map((function(e){return n.map((function(o){return Object(r.jsx)(O,{position:[.2*n.length+.5*o-.5*n.length+.5,e-.5*t.length+.1,0]},o)}))}))})}function x(){var n=Object(u.a)(["\n  //margin: 1vw;\n  padding: 0.5vw;\n  cursor: pointer;\n // position: relative;\n justify-self: center;\n  \n  z-index: 4;\n  //width: 10%;\n // transform: translateX(calc(-50%+223px));\n  "]);return x=function(){return n},n}var w=Object(d.a)(j.a.img)(x());function v(n){var t=Object(o.useState)(!1),e=Object(l.a)(t,2),i=e[0],c=e[1],a=Object(j.c)({width:i?"10vmax":"6vmax",config:j.b.gentle});return Object(r.jsx)("div",{onPointerOver:function(n){return c(!0)},onPointerOut:function(n){return c(!1)},children:Object(r.jsx)("a",{href:n.link,target:"_blank",children:Object(r.jsx)(w,{src:n.src,style:a})})})}var y=e(59);function k(){var n=Object(u.a)(["\n  position: absolute;\n  opacity: ",";\n  width: ",";\n  height: 100%;\n  right: 0;\n  bottom: 100px;\n  background-repeat: ",';\n  //transform: translateX(85%) translateY(-25%) rotate(90deg) ;\n  z-index: 0;\n  background-image: url("./icons/wdolph.svg");\n\n \n\n  ']);return k=function(){return n},n}function F(){var n=Object(u.a)(["\n  position: absolute;\n  top: 5vmax;\n  width:100%;\n  background-color: grey;\n  overflow: hidden;\n  "]);return F=function(){return n},n}function z(){var n=Object(u.a)(["\n  height: 100%;\n  margin: 0;\n \n  //z-index: -1;\n  //background-color: grey;\n  //fill: #6e40aa;\n  //color: blue;\n  //stroke: #909;\n  //stroke-width: 10;\n \n\n     // top: -4vw;\n     // left: 0.1vw;\n  "]);return z=function(){return n},n}function C(){var n=Object(u.a)(["\n  width: 100%;\n \n  z-index: -1;\n  //background-color: grey;\n  //fill: #6e40aa;\n  //color: blue;\n  //stroke: #909;\n  //stroke-width: 10;\n \n\n     // top: -4vw;\n     // left: 0.1vw;\n  "]);return C=function(){return n},n}function P(){var n=Object(u.a)(['\n  position: fixed;\n  top:0px;\n  left:0px;\n  height:100%;\n  width:100%;\n  overflow:none;\n  overflow: hidden;\n  \n  z-index: 1;\n  //background-image: url("./icons/studio.jpg");\n  background:rgba(255,255,255,0.3);//#00CED3;\n  ']);return P=function(){return n},n}function S(){var n=Object(u.a)(["\n  width: 100%;\n // padding: 10px;\n  z-index: 5;\n  //background-color: grey;\n  //position:absolute;\n  margin-bottom: -10px;\n      \n     // left: 0.1vw;\n  "]);return S=function(){return n},n}function A(){var n=Object(u.a)(["\n  \n  \n  grid-template-columns: ",";\n  //grid-template-rows: auto-fit;\n  background-color: #ffffff;\n  display: grid;\n  z-index: 3;\n  position: absolute;\n  //width: 20%;\n  left: ",";\n  \n  \n  height: 100%;\n  justify-self: top;\n  \n  padding: 12vmax 0 24vmax 0;\n // overflow: hidden;\n  //grid-auto-flow: row\n"]);return A=function(){return n},n}var B=new Date,G=[["#0BFFFF","#5200FF"],["#0BFFC4","#0001FF"],["#5200FF","#0BFFC4"]],L=!0;function M(n){var t=Object(o.useState)(!1),e=Object(l.a)(t,2),i=e[0],c=(e[1],Object(j.c)({width:i?"7vw":"10vw",config:j.b.wobbly}),d.a.div(A(),L?"auto":"auto auto auto",L?"0vmax":"5vmax")),a=d.a.img(S()),u=Object(d.a)(p.a)(P()),b=Object(d.a)(y.Gradient)(C()),g=Object(d.a)(y.Gradient)(z()),h=d.a.div(F()),f=d.a.div(k(),L?"30%":"5%",L?"90%":"100%",L?"no-repeat":"repeat");Object(s.a)(Array(4)).map((function(n,t){return t})),Object(s.a)(Array(4)).map((function(n,t){return t}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(c,{children:[!L&&Object(r.jsx)(h,{children:Object(r.jsx)(b,{gradients:G,property:"background",duration:2400,angle:"180deg",children:Object(r.jsx)(a,{src:"./icons/dmask.png"})})}),Object(r.jsx)(v,{src:"./icons/applemusic.jpg",link:"https://music.apple.com/us/artist/dolphin-uppercut-avenger/1434403698"}),Object(r.jsx)(v,{src:"./icons/Spotify_Icon_RGB_Green.png",link:"https://open.spotify.com/artist/5HW8NeRRGuxY7eCRCQhuTF?si=tGgoUgj6Q_GAsTFv3TkeYw"}),Object(r.jsx)(v,{src:"./icons/soundcloud.jpg",link:"https://soundcloud.com/dolphinuppercut/sets/discography"}),Object(r.jsx)(v,{src:"./icons/bandcamp.jpg",link:"https://dolphinuppercut.bandcamp.com/"}),Object(r.jsx)(v,{src:"./icons/youtube.jpg",link:"https://www.youtube.com/channel/UCNXsYgjdpbAy7NLIyJ7g0vg"}),Object(r.jsx)(v,{src:"./icons/tiktok.jpg",link:"https://www.tiktok.com/@dolphinuppercut"}),Object(r.jsx)(v,{src:"./icons/kofi.jpg",link:"https://ko-fi.com/dolphinuppercut"}),Object(r.jsx)(v,{src:"./icons/twitter.jpg",link:"https://twitter.com/DolphinUppercut"}),Object(r.jsx)(v,{src:"./icons/instagram.jpg",link:"https://www.instagram.com/dolphinuppercut/"}),Object(r.jsx)(v,{src:"./icons/discord.png",link:"https://www.instagram.com/dolphinuppercut/"})]}),Object(r.jsx)(f,{}),Object(r.jsxs)("a",{href:"https://michaellee.xyz",style:{position:"absolute",right:"20px",bottom:"0",color:"white",zIndex:"2",textDecoration:"none",opacity:"50%"},target:"_blank",children:["\xa9 ",B.getFullYear()," Michael Lee"]}),Object(r.jsx)(g,{gradients:G,property:"background",duration:2400,angle:"180deg",children:Object(r.jsxs)(u,{camera:{fov:30},children:[Object(r.jsx)("directionalLight",{color:"#00CED3",intensity:1.5}),Object(r.jsx)("ambientLight",{intensity:1.1}),Object(r.jsx)(m,{})]})})]})}L=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var D=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,96)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;e(n),r(n),o(n),i(n),c(n)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(M,{})}),document.getElementById("root")),D()}},[[95,1,2]]]);
//# sourceMappingURL=main.30c2c4ed.chunk.js.map