(this.webpackJsonpdolphin=this.webpackJsonpdolphin||[]).push([[0],{62:function(n,t,e){},83:function(n,t,e){},95:function(n,t,e){"use strict";e.r(t);var r=e(12),o=e(1),c=e.n(o),i=e(31),a=e.n(i),s=(e(83),e(14)),u=e(23),b=e(9),l=e(8),j=e(24),d=e(30),p=e(54),g=(e(43),e(75)),h=e(50);e(62);function f(){return Object(r.jsxs)("mesh",{visible:!0,position:[0,0,0],rotation:[0,0,0],children:[Object(r.jsx)("sphereGeometry",{attach:"geometry",args:[1,16,16]}),Object(r.jsx)("meshStandardMaterial",{attach:"material",color:"white",transparent:!0,opacity:.6,roughness:1,metalness:0})]})}function O(n){var t=Object(o.useRef)(),e=Object(g.a)("models/dolphin.glb"),c=Object(o.useState)(!1),i=Object(b.a)(c,2),a=i[0],s=i[1],u=Object(h.c)({scale:a?[2,2,2]:[1.5,1.5,1.5],config:h.b.wobbly}),j=0;return Object(l.g)((function(){j+=.01,t.current.rotation.x=t.current.rotation.y=t.current.rotation.y=a?1.01*t.current.rotation.y:(t.current.rotation.y+.01)%6.28,t.current.rotation.x+=.005,a||(t.current.children[0].material.opacity=.2*Math.abs(Math.sin(j+t.current.rotation.y)),t.current.rotation.z=t.current.rotation.y,t.current.rotation.z+=.05)})),Object(r.jsx)("group",Object(p.a)(Object(p.a)({ref:t},n),{},{children:Object(r.jsx)(h.a.mesh,{position:[0,0,0],scale:u.scale,visible:!0,geometry:e.nodes.DOLPHIN.geometry,onPointerOver:function(n){return s(!0)},onPointerOut:function(n){return s(!1)},children:Object(r.jsx)("meshStandardMaterial",{wireframe:!a,wireframeLinewidth:1.01,attach:"material",color:"white",transparent:!0,opacity:a?.3:.1,roughness:100.1,metalness:a?0:10.5})})}))}function m(){var n=Object(s.a)(Array(14)).map((function(n,t){return t})),t=Object(s.a)(Array(1)).map((function(n,t){return t}));return Object(r.jsx)(o.Suspense,{fallback:Object(r.jsx)(f,{}),children:t.map((function(e){return n.map((function(o){return Object(r.jsx)(O,{position:[.2*n.length+.5*o-.5*n.length+.5,e-.5*t.length+.1,0]},o)}))}))})}function w(){var n=Object(u.a)(["\n  margin: 1vw;\n  padding: 0.5vw;\n  cursor: pointer;\n  \n  z-index: 4;\n  width: 7vw;\n // transform: translateX(calc(-50%+223px));\n  "]);return w=function(){return n},n}var x=Object(j.a)(d.a.img)(w());function v(n){var t=Object(o.useState)(!1),e=Object(b.a)(t,2),c=e[0],i=e[1],a=Object(d.c)({width:c?"10vw":"6vw",config:d.b.gentle});return Object(r.jsx)("div",{onPointerOver:function(n){return i(!0)},onPointerOut:function(n){return i(!1)},children:Object(r.jsx)("a",{href:n.link,target:"_blank",children:Object(r.jsx)(x,{src:n.src,style:a})})})}var y=e(59);function k(){var n=Object(u.a)(["\n  position: absolute;\n  top: 5vw;\n  width:100%;\n  background-color: grey;\n  overflow: hidden;\n  "]);return k=function(){return n},n}function z(){var n=Object(u.a)(["\n  height: 100%;\n  margin: 0;\n \n  //z-index: -1;\n  //background-color: grey;\n  //fill: #6e40aa;\n  //color: blue;\n  //stroke: #909;\n  //stroke-width: 10;\n \n\n     // top: -4vw;\n     // left: 0.1vw;\n  "]);return z=function(){return n},n}function S(){var n=Object(u.a)(["\n  width: 100%;\n \n  //z-index: -1;\n  //background-color: grey;\n  //fill: #6e40aa;\n  //color: blue;\n  //stroke: #909;\n  //stroke-width: 10;\n \n\n     // top: -4vw;\n     // left: 0.1vw;\n  "]);return S=function(){return n},n}function C(){var n=Object(u.a)(['\n  position: fixed;\n  top:0px;\n  left:0px;\n  height:100%;\n  width:100%;\n  overflow:none;\n  overflow: hidden;\n  \n  z-index: 1;\n  //background-image: url("./icons/studio.jpg");\n  background:rgba(255,255,255,0.3);//#00CED3;\n  ']);return C=function(){return n},n}function F(){var n=Object(u.a)(["\n  width: 100%;\n // padding: 10px;\n  z-index: 5;\n  //background-color: grey;\n  //position:absolute;\n  margin-bottom: -10px;\n      \n     // left: 0.1vw;\n  "]);return F=function(){return n},n}function G(){var n=Object(u.a)(["\n  margin: 1vw;\n  width: 7vw;\n  "]);return G=function(){return n},n}function L(){var n=Object(u.a)(["\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 20px;\n  font-size: 30px;\n  text-align: center;\n  "]);return L=function(){return n},n}function P(){var n=Object(u.a)(["\n  \n  \n  grid-template-columns: auto auto auto;\n  background-color: #ffffff;\n  display: grid;\n  z-index: 2;\n  position: absolute;\n  left: 5vw;\n  \n  \n  \n  padding: 15vw 0 24vh 0;\n  overflow: hidden;\n  grid-auto-flow: row\n"]);return P=function(){return n},n}var A=new Date,D=[["rgb(231, 140, 255)","rgb(5,193,255)"],["rgb(78, 255, 167)","rgb(167, 255, 78)"],["rgb(5,193,255)","rgb(153,218,255)"],["rgb(255,140,174)","rgb(255,94,193)"]];function I(n){var t=Object(o.useState)(!1),e=Object(b.a)(t,2),c=e[0],i=(e[1],Object(d.c)({width:c?"7vw":"10vw",config:d.b.wobbly}),j.a.div(P())),a=(j.a.div(L()),Object(j.a)(d.a.img)(G()),j.a.img(F())),u=Object(j.a)(l.a)(C()),p=Object(j.a)(y.Gradient)(S()),g=Object(j.a)(y.Gradient)(z()),h=j.a.div(k());Object(s.a)(Array(4)).map((function(n,t){return t})),Object(s.a)(Array(4)).map((function(n,t){return t}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(i,{children:[Object(r.jsx)(h,{children:Object(r.jsx)(p,{gradients:D,property:"background",duration:1800,angle:"180deg",children:Object(r.jsx)(a,{src:"./icons/dmask.png"})})}),Object(r.jsx)(v,{src:"./icons/applemusic.jpg",link:"https://music.apple.com/us/artist/dolphin-uppercut-avenger/1434403698"}),Object(r.jsx)(v,{src:"./icons/Spotify_Icon_RGB_Green.png",link:"https://open.spotify.com/artist/5HW8NeRRGuxY7eCRCQhuTF?si=tGgoUgj6Q_GAsTFv3TkeYw"}),Object(r.jsx)(v,{src:"./icons/soundcloud.jpg",link:"https://soundcloud.com/dolphinuppercut/sets/discography"}),Object(r.jsx)(v,{src:"./icons/bandcamp.jpg",link:"https://dolphinuppercut.bandcamp.com/"}),Object(r.jsx)(v,{src:"./icons/youtube.jpg",link:"https://www.youtube.com/channel/UCNXsYgjdpbAy7NLIyJ7g0vg"}),Object(r.jsx)(v,{src:"./icons/tiktok.jpg",link:"https://www.tiktok.com/@dolphinuppercut"}),Object(r.jsx)(v,{src:"./icons/kofi.jpg",link:"https://ko-fi.com/dolphinuppercut"}),Object(r.jsx)(v,{src:"./icons/twitter.jpg",link:"https://twitter.com/DolphinUppercut"}),Object(r.jsx)(v,{src:"./icons/instagram.jpg",link:"https://www.instagram.com/dolphinuppercut/"})]}),Object(r.jsxs)("a",{href:"https://michaellee.xyz",style:{position:"absolute",right:"0",bottom:"0",color:"white",zIndex:"2"},target:"_blank",children:["\xa9 ",A.getFullYear()," Michael Lee"]}),Object(r.jsx)(g,{gradients:D,property:"background",duration:1800,angle:"180deg",children:Object(r.jsxs)(u,{camera:{fov:30},children:[Object(r.jsx)("directionalLight",{color:"#00CED3",intensity:1.5}),Object(r.jsx)("ambientLight",{intensity:1.1}),Object(r.jsx)(m,{})]})})]})}var M=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,96)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;e(n),r(n),o(n),c(n),i(n)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root")),M()}},[[95,1,2]]]);
//# sourceMappingURL=main.d2da83ff.chunk.js.map