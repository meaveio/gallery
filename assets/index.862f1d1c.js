var F=Object.defineProperty,O=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var L=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))j.call(t,o)&&L(e,o,t[o]);if(x)for(var o of x(t))I.call(t,o)&&L(e,o,t[o]);return e},v=(e,t)=>O(e,T(t));var R=(e,t)=>{var o={};for(var a in e)j.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&x)for(var a of x(e))t.indexOf(a)<0&&I.call(e,a)&&(o[a]=e[a]);return o};import{j as w,V as h,u as K,r as c,a as P,F as C,C as A,E as B,M as D,L as G,Q as N,b as W,c as $,d as Q,s as U,e as z,I as V,T as X,f as S,R as Y,g as _}from"./vendor.7df221ec.js";const q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}};q();const s=w.exports.jsx,d=w.exports.jsxs,H=w.exports.Fragment,J={KeyW:"forward",KeyS:"backward",KeyA:"left",KeyD:"right",Space:"jump"},E=e=>J[e];new h;new h;new h;new h;new h;const Z=()=>{const[e,t]=c.exports.useState({forward:!1,backward:!1,left:!1,right:!1,jump:!1});return c.exports.useEffect(()=>{const o=r=>t(n=>v(g({},n),{[E(r.code)]:!0})),a=r=>t(n=>v(g({},n),{[E(r.code)]:!1}));return document.addEventListener("keydown",o),document.addEventListener("keyup",a),()=>{document.removeEventListener("keydown",o),document.removeEventListener("keyup",a)}},[]),e},ee=()=>{const{camera:e}=K(),t=c.exports.useRef();return Z(),P(o=>{}),s(H,{children:s(C,{object:e,ref:t})})},te="/gallery",M=1.61803398875,u=e=>`https://images.pexels.com/photos/${e}/pexels-photo-${e}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,k=[{position:[0,0,1.5],rotation:[0,0,0],url:`${te}/images/charleston.jpeg`},{position:[-.8,0,-.6],rotation:[0,0,0],url:u(416430)},{position:[.8,0,-.6],rotation:[0,0,0],url:u(310452)},{position:[-1.75,0,.25],rotation:[0,Math.PI/2.5,0],url:u(327482)},{position:[-2.15,0,1.5],rotation:[0,Math.PI/2.5,0],url:u(325185)},{position:[-2,0,2.75],rotation:[0,Math.PI/2.5,0],url:u(358574)},{position:[1.75,0,.25],rotation:[0,-Math.PI/2.5,0],url:u(227675)},{position:[2.15,0,1.5],rotation:[0,-Math.PI/2.5,0],url:u(911738)},{position:[2,0,2.75],rotation:[0,-Math.PI/2.5,0],url:u(1738986)}],re=()=>d("div",{className:"flex flex-col min-h-screen",children:[s(A,{gl:{alpha:!1},dpr:[1,1.5],camera:{fov:70,position:[0,2,15]},style:{height:"100vh"},performance:{min:.1},mode:"concurrent",children:d(c.exports.Suspense,{fallback:null,children:[s("color",{attach:"background",args:["#191920"]}),s("fog",{attach:"fog",args:["#191920",0,15]}),s(B,{preset:"city"}),d("group",{position:[0,-.5,0],children:[s(oe,{images:k}),d("mesh",{rotation:[-Math.PI/2,0,0],position:[0,0,0],children:[s("planeGeometry",{args:[50,50]}),s(D,{blur:[300,100],resolution:2048,mixBlur:1,mixStrength:40,roughness:1,depthScale:1.2,minDepthThreshold:.4,maxDepthThreshold:1.4,color:"#101010",metalness:.5})]})]}),s(ee,{})]})}),s(G,{})]}),oe=({images:e=k,q:t=new N,p:o=new h})=>{const a=c.exports.useRef(),r=c.exports.useRef(),[,n]=W("/item/:id"),[p,y]=$();return c.exports.useEffect(()=>{var i,m,f;a.current&&n&&(r.current=a.current.getObjectByName(n.id)),r.current?((i=r.current.parent)==null||i.updateWorldMatrix(!0,!0),(m=r.current.parent)==null||m.localToWorld(o.set(0,M/2,1.25)),(f=r.current.parent)==null||f.getWorldQuaternion(t)):(o.set(0,0,5.5),t.identity())}),P((i,m)=>{i.camera.position.lerp(o,.025),i.camera.quaternion.slerp(t,.025)}),s("group",{ref:a,onClick:i=>(i.stopPropagation(),y(r.current===i.object?"/":"/item/"+i.object.name)),onPointerMissed:()=>{y("/"),r.current=void 0},children:e.map(i=>s(ne,g({},i),i.url))})},ne=a=>{var r=a,{url:e,c:t=new Q}=r,o=R(r,["url","c"]);const[n,p]=c.exports.useState(!1),[y]=c.exports.useState(()=>Math.random()),l=c.exports.useRef(),i=c.exports.useRef(),m=U(e);return z(n),P(f=>{var b;l.current&&(l.current.material.zoom=2+Math.sin(y*1e4+f.clock.elapsedTime/3)/2,l.current.scale.x=S.lerp(l.current.scale.x,.85*(n?.85:1),.1),l.current.scale.y=S.lerp(l.current.scale.y,.9*(n?.905:1),.1)),i.current&&((b=i.current.material)==null||b.color.lerp(t.set(n?"orange":"white").convertSRGBToLinear(),.1))}),d("group",v(g({},o),{children:[d("mesh",{name:m,onPointerOver:f=>(f.stopPropagation(),p(!0)),onPointerOut:()=>p(!1),scale:[1,M,.05],position:[0,M/2,0],children:[s("boxGeometry",{}),s("meshStandardMaterial",{color:"#151515",metalness:.5,roughness:.5,envMapIntensity:2}),d("mesh",{ref:i,raycast:()=>null,scale:[.9,.93,.9],position:[0,0,.2],children:[s("boxGeometry",{}),s("meshBasicMaterial",{toneMapped:!1,fog:!1})]}),s(V,{raycast:()=>null,ref:l,position:[0,0,.7],url:e})]}),s(X,{maxWidth:.1,anchorX:"left",anchorY:"top",position:[.55,M,0],fontSize:.025,children:m.split("-").join(" ")})]}))};Y.render(s(_.StrictMode,{children:s(re,{})}),document.getElementById("root"));