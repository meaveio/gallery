var T=Object.defineProperty,E=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var v=(e,r,o)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,y=(e,r)=>{for(var o in r||(r={}))I.call(r,o)&&v(e,o,r[o]);if(g)for(var o of g(r))P.call(r,o)&&v(e,o,r[o]);return e},b=(e,r)=>E(e,w(r));var R=(e,r)=>{var o={};for(var a in e)I.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&g)for(var a of g(e))r.indexOf(a)<0&&P.call(e,a)&&(o[a]=e[a]);return o};import{j as L,C as G,r as u,E as N,M as k,L as A,Q as B,V as C,u as D,a as F,b as S,c as W,s as Q,d as $,I as z,T as V,e as j,R as K,f as U}from"./vendor.f9d1848e.js";const X=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};X();const s=L.exports.jsx,d=L.exports.jsxs,x=1.61803398875,c=e=>`https://images.pexels.com/photos/${e}/pexels-photo-${e}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,O=[{position:[0,0,1.5],rotation:[0,0,0],url:c(1103970)},{position:[-.8,0,-.6],rotation:[0,0,0],url:c(416430)},{position:[.8,0,-.6],rotation:[0,0,0],url:c(310452)},{position:[-1.75,0,.25],rotation:[0,Math.PI/2.5,0],url:c(327482)},{position:[-2.15,0,1.5],rotation:[0,Math.PI/2.5,0],url:c(325185)},{position:[-2,0,2.75],rotation:[0,Math.PI/2.5,0],url:c(358574)},{position:[1.75,0,.25],rotation:[0,-Math.PI/2.5,0],url:c(227675)},{position:[2.15,0,1.5],rotation:[0,-Math.PI/2.5,0],url:c(911738)},{position:[2,0,2.75],rotation:[0,-Math.PI/2.5,0],url:c(1738986)}],Y=()=>d("div",{className:"flex flex-col min-h-screen",children:[s(G,{gl:{alpha:!1},dpr:[1,1.5],camera:{fov:70,position:[0,2,15]},style:{height:"100vh"},performance:{min:.1},mode:"concurrent",children:d(u.exports.Suspense,{fallback:null,children:[s("color",{attach:"background",args:["#191920"]}),s("fog",{attach:"fog",args:["#191920",0,15]}),s(N,{preset:"city"}),d("group",{position:[0,-.5,0],children:[s(q,{images:O}),d("mesh",{rotation:[-Math.PI/2,0,0],position:[0,0,0],children:[s("planeGeometry",{args:[50,50]}),s(k,{blur:[300,100],resolution:2048,mixBlur:1,mixStrength:40,roughness:1,depthScale:1.2,minDepthThreshold:.4,maxDepthThreshold:1.4,color:"#101010",metalness:.5})]})]})]})}),s(A,{})]}),q=({images:e=O,q:r=new B,p:o=new C})=>{const a=u.exports.useRef(),t=u.exports.useRef(),[,n]=D("/item/:id"),[p,f]=F();return u.exports.useEffect(()=>{var i,m,h;a.current&&n&&(t.current=a.current.getObjectByName(n.id)),t.current?((i=t.current.parent)==null||i.updateWorldMatrix(!0,!0),(m=t.current.parent)==null||m.localToWorld(o.set(0,x/2,1.25)),(h=t.current.parent)==null||h.getWorldQuaternion(r)):(o.set(0,0,5.5),r.identity())}),S((i,m)=>{i.camera.position.lerp(o,.025),i.camera.quaternion.slerp(r,.025)}),s("group",{ref:a,onClick:i=>(i.stopPropagation(),f(t.current===i.object?"/":"/item/"+i.object.name)),onPointerMissed:()=>{f("/"),t.current=void 0},children:e.map(i=>s(H,y({},i),i.url))})},H=a=>{var t=a,{url:e,c:r=new W}=t,o=R(t,["url","c"]);const[n,p]=u.exports.useState(!1),[f]=u.exports.useState(()=>Math.random()),l=u.exports.useRef(),i=u.exports.useRef(),m=Q(e);return $(n),S(h=>{var M;l.current&&(l.current.material.zoom=2+Math.sin(f*1e4+h.clock.elapsedTime/3)/2,l.current.scale.x=j.lerp(l.current.scale.x,.85*(n?.85:1),.1),l.current.scale.y=j.lerp(l.current.scale.y,.9*(n?.905:1),.1)),i.current&&((M=i.current.material)==null||M.color.lerp(r.set(n?"orange":"white").convertSRGBToLinear(),.1))}),d("group",b(y({},o),{children:[d("mesh",{name:m,onPointerOver:h=>(h.stopPropagation(),p(!0)),onPointerOut:()=>p(!1),scale:[1,x,.05],position:[0,x/2,0],children:[s("boxGeometry",{}),s("meshStandardMaterial",{color:"#151515",metalness:.5,roughness:.5,envMapIntensity:2}),d("mesh",{ref:i,raycast:()=>null,scale:[.9,.93,.9],position:[0,0,.2],children:[s("boxGeometry",{}),s("meshBasicMaterial",{toneMapped:!1,fog:!1})]}),s(z,{raycast:()=>null,ref:l,position:[0,0,.7],url:e})]}),s(V,{maxWidth:.1,anchorX:"left",anchorY:"top",position:[.55,x,0],fontSize:.025,children:m.split("-").join(" ")})]}))};K.render(s(U.StrictMode,{children:s(Y,{})}),document.getElementById("root"));
