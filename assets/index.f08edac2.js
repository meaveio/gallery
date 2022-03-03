var E=Object.defineProperty,T=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var v=(e,r,o)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,y=(e,r)=>{for(var o in r||(r={}))I.call(r,o)&&v(e,o,r[o]);if(g)for(var o of g(r))P.call(r,o)&&v(e,o,r[o]);return e},R=(e,r)=>T(e,w(r));var b=(e,r)=>{var o={};for(var a in e)I.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&g)for(var a of g(e))r.indexOf(a)<0&&P.call(e,a)&&(o[a]=e[a]);return o};import{j as L,C as G,r as u,E as N,M as k,L as A,Q as B,V as C,u as F,a as D,b as S,c as W,s as $,d as Q,I as z,T as U,e as j,R as V,f as X}from"./vendor.f9d1848e.js";const K=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}};K();const n=L.exports.jsx,d=L.exports.jsxs,Y="/gallery",x=1.61803398875,l=e=>`https://images.pexels.com/photos/${e}/pexels-photo-${e}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,O=[{position:[0,0,1.5],rotation:[0,0,0],url:`${Y}/images/charleston.jpeg`},{position:[-.8,0,-.6],rotation:[0,0,0],url:l(416430)},{position:[.8,0,-.6],rotation:[0,0,0],url:l(310452)},{position:[-1.75,0,.25],rotation:[0,Math.PI/2.5,0],url:l(327482)},{position:[-2.15,0,1.5],rotation:[0,Math.PI/2.5,0],url:l(325185)},{position:[-2,0,2.75],rotation:[0,Math.PI/2.5,0],url:l(358574)},{position:[1.75,0,.25],rotation:[0,-Math.PI/2.5,0],url:l(227675)},{position:[2.15,0,1.5],rotation:[0,-Math.PI/2.5,0],url:l(911738)},{position:[2,0,2.75],rotation:[0,-Math.PI/2.5,0],url:l(1738986)}],_=()=>d("div",{className:"flex flex-col min-h-screen",children:[n(G,{gl:{alpha:!1},dpr:[1,1.5],camera:{fov:70,position:[0,2,15]},style:{height:"100vh"},performance:{min:.1},mode:"concurrent",children:d(u.exports.Suspense,{fallback:null,children:[n("color",{attach:"background",args:["#191920"]}),n("fog",{attach:"fog",args:["#191920",0,15]}),n(N,{preset:"city"}),d("group",{position:[0,-.5,0],children:[n(q,{images:O}),d("mesh",{rotation:[-Math.PI/2,0,0],position:[0,0,0],children:[n("planeGeometry",{args:[50,50]}),n(k,{blur:[300,100],resolution:2048,mixBlur:1,mixStrength:40,roughness:1,depthScale:1.2,minDepthThreshold:.4,maxDepthThreshold:1.4,color:"#101010",metalness:.5})]})]})]})}),n(A,{})]}),q=({images:e=O,q:r=new B,p:o=new C})=>{const a=u.exports.useRef(),t=u.exports.useRef(),[,s]=F("/item/:id"),[p,f]=D();return u.exports.useEffect(()=>{var i,m,h;a.current&&s&&(t.current=a.current.getObjectByName(s.id)),t.current?((i=t.current.parent)==null||i.updateWorldMatrix(!0,!0),(m=t.current.parent)==null||m.localToWorld(o.set(0,x/2,1.25)),(h=t.current.parent)==null||h.getWorldQuaternion(r)):(o.set(0,0,5.5),r.identity())}),S((i,m)=>{i.camera.position.lerp(o,.025),i.camera.quaternion.slerp(r,.025)}),n("group",{ref:a,onClick:i=>(i.stopPropagation(),f(t.current===i.object?"/":"/item/"+i.object.name)),onPointerMissed:()=>{f("/"),t.current=void 0},children:e.map(i=>n(H,y({},i),i.url))})},H=a=>{var t=a,{url:e,c:r=new W}=t,o=b(t,["url","c"]);const[s,p]=u.exports.useState(!1),[f]=u.exports.useState(()=>Math.random()),c=u.exports.useRef(),i=u.exports.useRef(),m=$(e);return Q(s),S(h=>{var M;c.current&&(c.current.material.zoom=2+Math.sin(f*1e4+h.clock.elapsedTime/3)/2,c.current.scale.x=j.lerp(c.current.scale.x,.85*(s?.85:1),.1),c.current.scale.y=j.lerp(c.current.scale.y,.9*(s?.905:1),.1)),i.current&&((M=i.current.material)==null||M.color.lerp(r.set(s?"orange":"white").convertSRGBToLinear(),.1))}),d("group",R(y({},o),{children:[d("mesh",{name:m,onPointerOver:h=>(h.stopPropagation(),p(!0)),onPointerOut:()=>p(!1),scale:[1,x,.05],position:[0,x/2,0],children:[n("boxGeometry",{}),n("meshStandardMaterial",{color:"#151515",metalness:.5,roughness:.5,envMapIntensity:2}),d("mesh",{ref:i,raycast:()=>null,scale:[.9,.93,.9],position:[0,0,.2],children:[n("boxGeometry",{}),n("meshBasicMaterial",{toneMapped:!1,fog:!1})]}),n(z,{raycast:()=>null,ref:c,position:[0,0,.7],url:e})]}),n(U,{maxWidth:.1,anchorX:"left",anchorY:"top",position:[.55,x,0],fontSize:.025,children:m.split("-").join(" ")})]}))};V.render(n(X.StrictMode,{children:n(_,{})}),document.getElementById("root"));
