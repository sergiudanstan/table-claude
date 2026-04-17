var Nf=Object.defineProperty;var Ff=(i,e,t)=>e in i?Nf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var It=(i,e,t)=>Ff(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Of="modulepreload",Bf=function(i){return"/table-claude/"+i},tl={},hc=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let a=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=a(t.map(u=>{if(u=Bf(u),u in tl)return;tl[u]=!0;const h=u.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":Of,h||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((_,v)=>{m.addEventListener("load",_),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _o="173",zf=0,nl=1,Hf=2,dc=1,Vf=2,Gn=3,hi=0,rn=1,Xn=2,Yn=0,er=1,il=2,rl=3,sl=4,kf=5,yi=100,Gf=101,Wf=102,Xf=103,$f=104,qf=200,Yf=201,jf=202,Kf=203,ya=204,Ta=205,Zf=206,Jf=207,Qf=208,eh=209,th=210,nh=211,ih=212,rh=213,sh=214,ba=0,Aa=1,wa=2,rr=3,Ra=4,Ca=5,Pa=6,Da=7,pc=0,ah=1,oh=2,fi=0,mc=1,gc=2,_c=3,vc=4,xc=5,Sc=6,Mc=7,Ec=300,sr=301,ar=302,La=303,Ua=304,As=306,Ia=1e3,bi=1001,Na=1002,wn=1003,lh=1004,Gr=1005,Ln=1006,Xs=1007,Ai=1008,Zn=1009,yc=1010,Tc=1011,Fr=1012,vo=1013,wi=1014,$n=1015,pr=1016,xo=1017,So=1018,or=1020,bc=35902,Ac=1021,wc=1022,An=1023,Rc=1024,Cc=1025,tr=1026,lr=1027,Pc=1028,Mo=1029,Dc=1030,Eo=1031,yo=1033,ps=33776,ms=33777,gs=33778,_s=33779,Fa=35840,Oa=35841,Ba=35842,za=35843,Ha=36196,Va=37492,ka=37496,Ga=37808,Wa=37809,Xa=37810,$a=37811,qa=37812,Ya=37813,ja=37814,Ka=37815,Za=37816,Ja=37817,Qa=37818,eo=37819,to=37820,no=37821,vs=36492,io=36494,ro=36495,Lc=36283,so=36284,ao=36285,oo=36286,ch=3200,uh=3201,Uc=0,fh=1,ui="",fn="srgb",cr="srgb-linear",Ms="linear",mt="srgb",Bi=7680,al=519,hh=512,dh=513,ph=514,Ic=515,mh=516,gh=517,_h=518,vh=519,ol=35044,ll="300 es",qn=2e3,Es=2001;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$s=Math.PI/180,lo=180/Math.PI;function Or(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function xh(i,e){return(i%e+e)%e}function qs(i,e,t){return(1-t)*i+t*e}function Ar(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,r,s,a,o,l,u){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,u)}set(e,t,n,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],h=n[4],p=n[7],m=n[2],_=n[5],v=n[8],y=r[0],g=r[3],d=r[6],C=r[1],A=r[4],b=r[7],I=r[2],L=r[5],P=r[8];return s[0]=a*y+o*C+l*I,s[3]=a*g+o*A+l*L,s[6]=a*d+o*b+l*P,s[1]=u*y+h*C+p*I,s[4]=u*g+h*A+p*L,s[7]=u*d+h*b+p*P,s[2]=m*y+_*C+v*I,s[5]=m*g+_*A+v*L,s[8]=m*d+_*b+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=h*a-o*u,m=o*l-h*s,_=u*s-a*l,v=t*p+n*m+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=p*y,e[1]=(r*u-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=m*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=_*y,e[7]=(n*l-u*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ys.makeScale(e,t)),this}rotate(e){return this.premultiply(Ys.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ys.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new je;function Nc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sh(){const i=ys("canvas");return i.style.display="block",i}const cl={};function Ji(i){i in cl||(cl[i]=!0,console.warn(i))}function Mh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Eh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ul=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fl=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Th(){const i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?Ms:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:e,whitePoint:n,transfer:Ms,toXYZ:ul,fromXYZ:fl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:ul,fromXYZ:fl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}const lt=Th();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zi;class bh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=ys("canvas")),zi.width=e.width,zi.height=e.height;const n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=jn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ah=0;class Fc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Or(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(js(r[a].image)):s.push(js(r[a]))}else s=js(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wh=0;class sn extends mr{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=bi,r=bi,s=Ln,a=Ai,o=An,l=Zn,u=sn.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Or(),this.name="",this.source=new Fc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Ec;sn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],m=l[1],_=l[5],v=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(h-m)<.01&&Math.abs(p-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+y)<.1&&Math.abs(v+g)<.1&&Math.abs(u+_+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(u+1)/2,b=(_+1)/2,I=(d+1)/2,L=(h+m)/4,P=(p+y)/4,D=(v+g)/4;return A>b&&A>I?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=L/n,s=P/n):b>I?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=L/r,s=D/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=P/s,r=D/s),this.set(n,r,s,t),this}let C=Math.sqrt((g-v)*(g-v)+(p-y)*(p-y)+(m-h)*(m-h));return Math.abs(C)<.001&&(C=1),this.x=(g-v)/C,this.y=(p-y)/C,this.z=(m-h)/C,this.w=Math.acos((u+_+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rh extends mr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Fc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Rh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Oc extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ch extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],u=n[r+1],h=n[r+2],p=n[r+3];const m=s[a+0],_=s[a+1],v=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=p;return}if(o===1){e[t+0]=m,e[t+1]=_,e[t+2]=v,e[t+3]=y;return}if(p!==y||l!==m||u!==_||h!==v){let g=1-o;const d=l*m+u*_+h*v+p*y,C=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const I=Math.sqrt(A),L=Math.atan2(I,d*C);g=Math.sin(g*L)/I,o=Math.sin(o*L)/I}const b=o*C;if(l=l*g+m*b,u=u*g+_*b,h=h*g+v*b,p=p*g+y*b,g===1-o){const I=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=I,u*=I,h*=I,p*=I}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],u=n[r+2],h=n[r+3],p=s[a],m=s[a+1],_=s[a+2],v=s[a+3];return e[t]=o*v+h*p+l*_-u*m,e[t+1]=l*v+h*m+u*p-o*_,e[t+2]=u*v+h*_+o*m-l*p,e[t+3]=h*v-o*p-l*m-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),h=o(r/2),p=o(s/2),m=l(n/2),_=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=m*h*p+u*_*v,this._y=u*_*p-m*h*v,this._z=u*h*v+m*_*p,this._w=u*h*p-m*_*v;break;case"YXZ":this._x=m*h*p+u*_*v,this._y=u*_*p-m*h*v,this._z=u*h*v-m*_*p,this._w=u*h*p+m*_*v;break;case"ZXY":this._x=m*h*p-u*_*v,this._y=u*_*p+m*h*v,this._z=u*h*v+m*_*p,this._w=u*h*p-m*_*v;break;case"ZYX":this._x=m*h*p-u*_*v,this._y=u*_*p+m*h*v,this._z=u*h*v-m*_*p,this._w=u*h*p+m*_*v;break;case"YZX":this._x=m*h*p+u*_*v,this._y=u*_*p+m*h*v,this._z=u*h*v-m*_*p,this._w=u*h*p-m*_*v;break;case"XZY":this._x=m*h*p-u*_*v,this._y=u*_*p-m*h*v,this._z=u*h*v+m*_*p,this._w=u*h*p+m*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],h=t[6],p=t[10],m=n+o+p;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-u)*_,this._z=(a-r)*_}else if(n>o&&n>p){const _=2*Math.sqrt(1+n-o-p);this._w=(h-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+u)/_}else if(o>p){const _=2*Math.sqrt(1+o-n-p);this._w=(s-u)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+p-n-o);this._w=(a-r)/_,this._x=(s+u)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-n*u,this._z=s*h+a*u+n*l-r*o,this._w=a*h-n*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),p=Math.sin((1-t)*h)/u,m=Math.sin(t*h)/u;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*n),h=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+l*u+a*p-o*h,this.y=n+l*h+o*u-s*p,this.z=r+l*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new W,hl=new Br;class zr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),Xr.subVectors(this.max,wr),Hi.subVectors(e.a,wr),Vi.subVectors(e.b,wr),ki.subVectors(e.c,wr),ni.subVectors(Vi,Hi),ii.subVectors(ki,Vi),mi.subVectors(Hi,ki);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-mi.z,mi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,mi.z,0,-mi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-mi.y,mi.x,0];return!Zs(t,Hi,Vi,ki,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Zs(t,Hi,Vi,ki,Xr))?!1:($r.crossVectors(ni,ii),t=[$r.x,$r.y,$r.z],Zs(t,Hi,Vi,ki,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new W,new W,new W,new W,new W,new W,new W,new W],Mn=new W,Wr=new zr,Hi=new W,Vi=new W,ki=new W,ni=new W,ii=new W,mi=new W,wr=new W,Xr=new W,$r=new W,gi=new W;function Zs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){gi.fromArray(i,s);const o=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=e.dot(gi),u=t.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const Ph=new zr,Rr=new W,Js=new W;class To{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ph.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Rr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Js.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Js)),this.expandByPoint(Rr.copy(e.center).sub(Js))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new W,Qs=new W,qr=new W,ri=new W,ea=new W,Yr=new W,ta=new W;class Dh{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qs.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Qs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=ri.dot(this.direction),l=-ri.dot(qr),u=ri.lengthSq(),h=Math.abs(1-a*a);let p,m,_,v;if(h>0)if(p=a*l-o,m=a*o-l,v=s*h,p>=0)if(m>=-v)if(m<=v){const y=1/h;p*=y,m*=y,_=p*(p+a*m+2*o)+m*(a*p+m+2*l)+u}else m=s,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+u;else m=-s,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+u;else m<=-v?(p=Math.max(0,-(-a*s+o)),m=p>0?-s:Math.min(Math.max(-s,-l),s),_=-p*p+m*(m+2*l)+u):m<=v?(p=0,m=Math.min(Math.max(-s,-l),s),_=m*(m+2*l)+u):(p=Math.max(0,-(a*s+o)),m=p>0?s:Math.min(Math.max(-s,-l),s),_=-p*p+m*(m+2*l)+u);else m=a>0?-s:s,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Qs).addScaledVector(qr,m),_}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),r=Bn.dot(Bn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),h>=0?(s=(e.min.y-m.y)*h,a=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,a=(e.min.y-m.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(o=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,r,s){ea.subVectors(t,e),Yr.subVectors(n,e),ta.crossVectors(ea,Yr);let a=this.direction.dot(ta),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const l=o*this.direction.dot(Yr.crossVectors(ri,Yr));if(l<0)return null;const u=o*this.direction.dot(ea.cross(ri));if(u<0||l+u>a)return null;const h=-o*ri.dot(ta);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,n,r,s,a,o,l,u,h,p,m,_,v,y,g){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,u,h,p,m,_,v,y,g)}set(e,t,n,r,s,a,o,l,u,h,p,m,_,v,y,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=h,d[10]=p,d[14]=m,d[3]=_,d[7]=v,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*h,_=a*p,v=o*h,y=o*p;t[0]=l*h,t[4]=-l*p,t[8]=u,t[1]=_+v*u,t[5]=m-y*u,t[9]=-o*l,t[2]=y-m*u,t[6]=v+_*u,t[10]=a*l}else if(e.order==="YXZ"){const m=l*h,_=l*p,v=u*h,y=u*p;t[0]=m+y*o,t[4]=v*o-_,t[8]=a*u,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=_*o-v,t[6]=y+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*h,_=l*p,v=u*h,y=u*p;t[0]=m-y*o,t[4]=-a*p,t[8]=v+_*o,t[1]=_+v*o,t[5]=a*h,t[9]=y-m*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*h,_=a*p,v=o*h,y=o*p;t[0]=l*h,t[4]=v*u-_,t[8]=m*u+y,t[1]=l*p,t[5]=y*u+m,t[9]=_*u-v,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,_=a*u,v=o*l,y=o*u;t[0]=l*h,t[4]=y-m*p,t[8]=v*p+_,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=_*p+v,t[10]=m-y*p}else if(e.order==="XZY"){const m=a*l,_=a*u,v=o*l,y=o*u;t[0]=l*h,t[4]=-p,t[8]=u*h,t[1]=m*p+y,t[5]=a*h,t[9]=_*p-v,t[2]=v*p-_,t[6]=o*h,t[10]=y*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lh,e,Uh)}lookAt(e,t,n){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),si.crossVectors(n,cn),si.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),si.crossVectors(n,cn)),si.normalize(),jr.crossVectors(cn,si),r[0]=si.x,r[4]=jr.x,r[8]=cn.x,r[1]=si.y,r[5]=jr.y,r[9]=cn.y,r[2]=si.z,r[6]=jr.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],h=n[1],p=n[5],m=n[9],_=n[13],v=n[2],y=n[6],g=n[10],d=n[14],C=n[3],A=n[7],b=n[11],I=n[15],L=r[0],P=r[4],D=r[8],M=r[12],S=r[1],N=r[5],j=r[9],V=r[13],J=r[2],se=r[6],Q=r[10],oe=r[14],q=r[3],ge=r[7],be=r[11],Ce=r[15];return s[0]=a*L+o*S+l*J+u*q,s[4]=a*P+o*N+l*se+u*ge,s[8]=a*D+o*j+l*Q+u*be,s[12]=a*M+o*V+l*oe+u*Ce,s[1]=h*L+p*S+m*J+_*q,s[5]=h*P+p*N+m*se+_*ge,s[9]=h*D+p*j+m*Q+_*be,s[13]=h*M+p*V+m*oe+_*Ce,s[2]=v*L+y*S+g*J+d*q,s[6]=v*P+y*N+g*se+d*ge,s[10]=v*D+y*j+g*Q+d*be,s[14]=v*M+y*V+g*oe+d*Ce,s[3]=C*L+A*S+b*J+I*q,s[7]=C*P+A*N+b*se+I*ge,s[11]=C*D+A*j+b*Q+I*be,s[15]=C*M+A*V+b*oe+I*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],p=e[6],m=e[10],_=e[14],v=e[3],y=e[7],g=e[11],d=e[15];return v*(+s*l*p-r*u*p-s*o*m+n*u*m+r*o*_-n*l*_)+y*(+t*l*_-t*u*m+s*a*m-r*a*_+r*u*h-s*l*h)+g*(+t*u*p-t*o*_-s*a*p+n*a*_+s*o*h-n*u*h)+d*(-r*o*h-t*l*p+t*o*m+r*a*p-n*a*m+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=e[9],m=e[10],_=e[11],v=e[12],y=e[13],g=e[14],d=e[15],C=p*g*u-y*m*u+y*l*_-o*g*_-p*l*d+o*m*d,A=v*m*u-h*g*u-v*l*_+a*g*_+h*l*d-a*m*d,b=h*y*u-v*p*u+v*o*_-a*y*_-h*o*d+a*p*d,I=v*p*l-h*y*l-v*o*m+a*y*m+h*o*g-a*p*g,L=t*C+n*A+r*b+s*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=C*P,e[1]=(y*m*s-p*g*s-y*r*_+n*g*_+p*r*d-n*m*d)*P,e[2]=(o*g*s-y*l*s+y*r*u-n*g*u-o*r*d+n*l*d)*P,e[3]=(p*l*s-o*m*s-p*r*u+n*m*u+o*r*_-n*l*_)*P,e[4]=A*P,e[5]=(h*g*s-v*m*s+v*r*_-t*g*_-h*r*d+t*m*d)*P,e[6]=(v*l*s-a*g*s-v*r*u+t*g*u+a*r*d-t*l*d)*P,e[7]=(a*m*s-h*l*s+h*r*u-t*m*u-a*r*_+t*l*_)*P,e[8]=b*P,e[9]=(v*p*s-h*y*s-v*n*_+t*y*_+h*n*d-t*p*d)*P,e[10]=(a*y*s-v*o*s+v*n*u-t*y*u-a*n*d+t*o*d)*P,e[11]=(h*o*s-a*p*s-h*n*u+t*p*u+a*n*_-t*o*_)*P,e[12]=I*P,e[13]=(h*y*r-v*p*r+v*n*m-t*y*m-h*n*g+t*p*g)*P,e[14]=(v*o*r-a*y*r-v*n*l+t*y*l+a*n*g-t*o*g)*P,e[15]=(a*p*r-h*o*r+h*n*l-t*p*l-a*n*m+t*o*m)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+n,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,h=a+a,p=o+o,m=s*u,_=s*h,v=s*p,y=a*h,g=a*p,d=o*p,C=l*u,A=l*h,b=l*p,I=n.x,L=n.y,P=n.z;return r[0]=(1-(y+d))*I,r[1]=(_+b)*I,r[2]=(v-A)*I,r[3]=0,r[4]=(_-b)*L,r[5]=(1-(m+d))*L,r[6]=(g+C)*L,r[7]=0,r[8]=(v+A)*P,r[9]=(g-C)*P,r[10]=(1-(m+y))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Gi.set(r[0],r[1],r[2]).length();const a=Gi.set(r[4],r[5],r[6]).length(),o=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const u=1/s,h=1/a,p=1/o;return En.elements[0]*=u,En.elements[1]*=u,En.elements[2]*=u,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=p,En.elements[9]*=p,En.elements[10]*=p,t.setFromRotationMatrix(En),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=qn){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let _,v;if(o===qn)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Es)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=qn){const l=this.elements,u=1/(t-e),h=1/(n-r),p=1/(a-s),m=(t+e)*u,_=(n+r)*h;let v,y;if(o===qn)v=(a+s)*p,y=-2*p;else if(o===Es)v=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new W,En=new Dt,Lh=new W(0,0,0),Uh=new W(1,1,1),si=new W,jr=new W,cn=new W,dl=new Dt,pl=new Br;class Jn{constructor(e=0,t=0,n=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],p=r[2],m=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pl.setFromEuler(this),this.setFromQuaternion(pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ih=0;const ml=new W,Wi=new Br,zn=new Dt,Kr=new W,Cr=new W,Nh=new W,Fh=new Br,gl=new W(1,0,0),_l=new W(0,1,0),vl=new W(0,0,1),xl={type:"added"},Oh={type:"removed"},Xi={type:"childadded",child:null},na={type:"childremoved",child:null};class an extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new W,t=new Jn,n=new Br,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new je}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(gl,e)}rotateY(e){return this.rotateOnAxis(_l,e)}rotateZ(e){return this.rotateOnAxis(vl,e)}translateOnAxis(e,t){return ml.copy(e).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gl,e)}translateY(e){return this.translateOnAxis(_l,e)}translateZ(e){return this.translateOnAxis(vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Cr,Kr,this.up):zn.lookAt(Kr,Cr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(zn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oh),na.child=e,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,Nh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Fh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),m=a(e.skeletons),_=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}an.DEFAULT_UP=new W(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new W,Hn=new W,ia=new W,Vn=new W,$i=new W,qi=new W,Sl=new W,ra=new W,sa=new W,aa=new W,oa=new Pt,la=new Pt,ca=new Pt;class bn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){yn.subVectors(r,t),Hn.subVectors(n,t),ia.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Hn),l=yn.dot(ia),u=Hn.dot(Hn),h=Hn.dot(ia),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const m=1/p,_=(u*l-o*h)*m,v=(a*h-o*l)*m;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return oa.setScalar(0),la.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(e,t),la.fromBufferAttribute(e,n),ca.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(oa,s.x),a.addScaledVector(la,s.y),a.addScaledVector(ca,s.z),a}static isFrontFacing(e,t,n,r){return yn.subVectors(n,t),Hn.subVectors(e,t),yn.cross(Hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),yn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;$i.subVectors(r,n),qi.subVectors(s,n),ra.subVectors(e,n);const l=$i.dot(ra),u=qi.dot(ra);if(l<=0&&u<=0)return t.copy(n);sa.subVectors(e,r);const h=$i.dot(sa),p=qi.dot(sa);if(h>=0&&p<=h)return t.copy(r);const m=l*p-h*u;if(m<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector($i,a);aa.subVectors(e,s);const _=$i.dot(aa),v=qi.dot(aa);if(v>=0&&_<=v)return t.copy(s);const y=_*u-l*v;if(y<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(qi,o);const g=h*v-_*p;if(g<=0&&p-h>=0&&_-v>=0)return Sl.subVectors(s,r),o=(p-h)/(p-h+(_-v)),t.copy(r).addScaledVector(Sl,o);const d=1/(g+y+m);return a=y*d,o=m*d,t.copy(n).addScaledVector($i,a).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function ua(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=xh(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ua(a,s,e+1/3),this.g=ua(a,s,e),this.b=ua(a,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=zc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return lt.fromWorkingColorSpace(qt.copy(this),e),Math.round(ot(qt.r*255,0,255))*65536+Math.round(ot(qt.g*255,0,255))*256+Math.round(ot(qt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(qt.copy(this),t);const n=qt.r,r=qt.g,s=qt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=fn){lt.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,r=qt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Zr);const n=qs(ai.h,Zr.h,t),r=qs(ai.s,Zr.s,t),s=qs(ai.l,Zr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new gt;gt.NAMES=zc;let Bh=0;class gr extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=er,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=Ta,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hc extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new W,Jr=new ct;let zh=0;class Rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ol,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ar(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ol&&(e.usage=this.usage),e}}class Vc extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kc extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kn extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hh=0;const mn=new Dt,fa=new an,Yi=new W,un=new zr,Pr=new zr,Wt=new W;class Qn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nc(e)?kc:Vc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new To);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(un.min,Pr.min),un.expandByPoint(Wt),Wt.addVectors(un.max,Pr.max),un.expandByPoint(Wt)):(un.expandByPoint(Pr.min),un.expandByPoint(Pr.max))}un.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Wt.fromBufferAttribute(o,u),l&&(Yi.fromBufferAttribute(e,u),Wt.add(Yi)),r=Math.max(r,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new W,l[D]=new W;const u=new W,h=new W,p=new W,m=new ct,_=new ct,v=new ct,y=new W,g=new W;function d(D,M,S){u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),p.fromBufferAttribute(n,S),m.fromBufferAttribute(s,D),_.fromBufferAttribute(s,M),v.fromBufferAttribute(s,S),h.sub(u),p.sub(u),_.sub(m),v.sub(m);const N=1/(_.x*v.y-v.x*_.y);isFinite(N)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(p,-_.y).multiplyScalar(N),g.copy(p).multiplyScalar(_.x).addScaledVector(h,-v.x).multiplyScalar(N),o[D].add(y),o[M].add(y),o[S].add(y),l[D].add(g),l[M].add(g),l[S].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let D=0,M=C.length;D<M;++D){const S=C[D],N=S.start,j=S.count;for(let V=N,J=N+j;V<J;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const A=new W,b=new W,I=new W,L=new W;function P(D){I.fromBufferAttribute(r,D),L.copy(I);const M=o[D];A.copy(M),A.sub(I.multiplyScalar(I.dot(M))).normalize(),b.crossVectors(L,M);const N=b.dot(l[D])<0?-1:1;a.setXYZW(D,A.x,A.y,A.z,N)}for(let D=0,M=C.length;D<M;++D){const S=C[D],N=S.start,j=S.count;for(let V=N,J=N+j;V<J;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,u=new W,h=new W,p=new W;if(e)for(let m=0,_=e.count;m<_;m+=3){const v=e.getX(m+0),y=e.getX(m+1),g=e.getX(m+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,g),o.add(h),l.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let m=0,_=t.count;m<_;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,p=o.normalized,m=new u.constructor(l.length*h);let _=0,v=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?_=l[y]*o.data.stride+o.offset:_=l[y]*h;for(let d=0;d<h;d++)m[v++]=u[_++]}return new Rn(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const m=u[h],_=e(m,n);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,m=u.length;p<m;p++){const _=u[p];h.push(_.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let m=0,_=p.length;m<_;m++)h.push(p[m].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new Dt,_i=new Dh,Qr=new To,El=new W,es=new W,ts=new W,ns=new W,ha=new W,is=new W,yl=new W,rs=new W;class hn extends an{constructor(e=new Qn,t=new Hc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){is.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],p=s[l];h!==0&&(ha.fromBufferAttribute(p,e),a?is.addScaledVector(ha,h):is.addScaledVector(ha.sub(t),h))}t.add(is)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(Qr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Qr,El)===null||_i.origin.distanceToSquared(El)>(e.far-e.near)**2))&&(Ml.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=m.length;v<y;v++){const g=m[v],d=a[g.materialIndex],C=Math.max(g.start,_.start),A=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let b=C,I=A;b<I;b+=3){const L=o.getX(b),P=o.getX(b+1),D=o.getX(b+2);r=ss(this,d,e,n,u,h,p,L,P,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),y=Math.min(o.count,_.start+_.count);for(let g=v,d=y;g<d;g+=3){const C=o.getX(g),A=o.getX(g+1),b=o.getX(g+2);r=ss(this,a,e,n,u,h,p,C,A,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=m.length;v<y;v++){const g=m[v],d=a[g.materialIndex],C=Math.max(g.start,_.start),A=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let b=C,I=A;b<I;b+=3){const L=b,P=b+1,D=b+2;r=ss(this,d,e,n,u,h,p,L,P,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),y=Math.min(l.count,_.start+_.count);for(let g=v,d=y;g<d;g+=3){const C=g,A=g+1,b=g+2;r=ss(this,a,e,n,u,h,p,C,A,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Vh(i,e,t,n,r,s,a,o){let l;if(e.side===rn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===hi,o),l===null)return null;rs.copy(o),rs.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(rs);return u<t.near||u>t.far?null:{distance:u,point:rs.clone(),object:i}}function ss(i,e,t,n,r,s,a,o,l,u){i.getVertexPosition(o,es),i.getVertexPosition(l,ts),i.getVertexPosition(u,ns);const h=Vh(i,e,t,n,es,ts,ns,yl);if(h){const p=new W;bn.getBarycoord(yl,es,ts,ns,p),r&&(h.uv=bn.getInterpolatedAttribute(r,o,l,u,p,new ct)),s&&(h.uv1=bn.getInterpolatedAttribute(s,o,l,u,p,new ct)),a&&(h.normal=bn.getInterpolatedAttribute(a,o,l,u,p,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const m={a:o,b:l,c:u,normal:new W,materialIndex:0};bn.getNormal(es,ts,ns,m.normal),h.face=m,h.barycoord=p}return h}class _r extends Qn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],p=[];let m=0,_=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Kn(u,3)),this.setAttribute("normal",new Kn(h,3)),this.setAttribute("uv",new Kn(p,2));function v(y,g,d,C,A,b,I,L,P,D,M){const S=b/P,N=I/D,j=b/2,V=I/2,J=L/2,se=P+1,Q=D+1;let oe=0,q=0;const ge=new W;for(let be=0;be<Q;be++){const Ce=be*N-V;for(let Xe=0;Xe<se;Xe++){const tt=Xe*S-j;ge[y]=tt*C,ge[g]=Ce*A,ge[d]=J,u.push(ge.x,ge.y,ge.z),ge[y]=0,ge[g]=0,ge[d]=L>0?1:-1,h.push(ge.x,ge.y,ge.z),p.push(Xe/P),p.push(1-be/D),oe+=1}}for(let be=0;be<D;be++)for(let Ce=0;Ce<P;Ce++){const Xe=m+Ce+se*be,tt=m+Ce+se*(be+1),ee=m+(Ce+1)+se*(be+1),fe=m+(Ce+1)+se*be;l.push(Xe,tt,fe),l.push(tt,ee,fe),q+=6}o.addGroup(_,q,M),_+=q,m+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=ur(i[t]);for(const r in n)e[r]=n[r]}return e}function kh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const bo={clone:ur,merge:Jt};var Gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gh,this.fragmentShader=Wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=kh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wc extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new W,Tl=new ct,bl=new ct;class Tn extends Wc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Tl,bl),t.subVectors(bl,Tl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/u,r*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Ki=1;class Xh extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(ji,Ki,e,t);r.layers=this.layers,this.add(r);const s=new Tn(ji,Ki,e,t);s.layers=this.layers,this.add(s);const a=new Tn(ji,Ki,e,t);a.layers=this.layers,this.add(a);const o=new Tn(ji,Ki,e,t);o.layers=this.layers,this.add(o);const l=new Tn(ji,Ki,e,t);l.layers=this.layers,this.add(l);const u=new Tn(ji,Ki,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(p,m,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Xc extends sn{constructor(e,t,n,r,s,a,o,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,n,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $h extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Xc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _r(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Yn});s.uniforms.tEquirect.value=t;const a=new hn(r,s),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Ln),new Xh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class as extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qh={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,n),d=this._getHandJoint(u,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=h.position.distanceTo(p.position),_=.02,v=.005;u.inputState.pinching&&m>_+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=_-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new as;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Yh extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pa=new W,jh=new W,Kh=new je;class Mi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=pa.subVectors(n,t).cross(jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kh.getNormalMatrix(e),r=this.coplanarPoint(pa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new To,os=new W;class $c{constructor(e=new Mi,t=new Mi,n=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],h=r[5],p=r[6],m=r[7],_=r[8],v=r[9],y=r[10],g=r[11],d=r[12],C=r[13],A=r[14],b=r[15];if(n[0].setComponents(l-s,m-u,g-_,b-d).normalize(),n[1].setComponents(l+s,m+u,g+_,b+d).normalize(),n[2].setComponents(l+a,m+h,g+v,b+C).normalize(),n[3].setComponents(l-a,m-h,g-v,b-C).normalize(),n[4].setComponents(l-o,m-p,g-y,b-A).normalize(),t===qn)n[5].setComponents(l+o,m+p,g+y,b+A).normalize();else if(t===Es)n[5].setComponents(o,p,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(os.x=r.normal.x>0?e.max.x:e.min.x,os.y=r.normal.y>0?e.max.y:e.min.y,os.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ao extends sn{constructor(e,t,n,r,s,a,o,l,u,h=tr){if(h!==tr&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===tr&&(n=wi),n===void 0&&h===lr&&(n=or),super(null,r,s,a,o,l,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ws extends Qn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),u=o+1,h=l+1,p=e/o,m=t/l,_=[],v=[],y=[],g=[];for(let d=0;d<h;d++){const C=d*m-a;for(let A=0;A<u;A++){const b=A*p-s;v.push(b,-C,0),y.push(0,0,1),g.push(A/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let C=0;C<o;C++){const A=C+u*d,b=C+u*(d+1),I=C+1+u*(d+1),L=C+1+u*d;_.push(A,b,L),_.push(b,I,L)}this.setIndex(_),this.setAttribute("position",new Kn(v,3)),this.setAttribute("normal",new Kn(y,3)),this.setAttribute("uv",new Kn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zh extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jh extends gr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Qh extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ed extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wo extends Wc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class td extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Ro{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Al(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Al();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Al(){return performance.now()}function wl(i,e,t,n){const r=nd(n);switch(t){case Ac:return i*e;case Rc:return i*e;case Cc:return i*e*2;case Pc:return i*e/r.components*r.byteLength;case Mo:return i*e/r.components*r.byteLength;case Dc:return i*e*2/r.components*r.byteLength;case Eo:return i*e*2/r.components*r.byteLength;case wc:return i*e*3/r.components*r.byteLength;case An:return i*e*4/r.components*r.byteLength;case yo:return i*e*4/r.components*r.byteLength;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gs:case _s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:case za:return Math.max(i,16)*Math.max(e,8)/4;case Fa:case Ba:return Math.max(i,8)*Math.max(e,8)/2;case Ha:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vs:case io:case ro:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lc:case so:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ao:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nd(i){switch(i){case Zn:case yc:return{byteLength:1,components:1};case Fr:case Tc:case pr:return{byteLength:2,components:1};case xo:case So:return{byteLength:2,components:4};case wi:case vo:case $n:return{byteLength:4,components:1};case bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_o);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function id(i){const e=new WeakMap;function t(o,l){const u=o.array,h=o.usage,p=u.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,u,h),o.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,u){const h=l.array,p=l.updateRanges;if(i.bindBuffer(u,o),p.length===0)i.bufferSubData(u,0,h);else{p.sort((_,v)=>_.start-v.start);let m=0;for(let _=1;_<p.length;_++){const v=p[m],y=p[_];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++m,p[m]=y)}p.length=m+1;for(let _=0,v=p.length;_<v;_++){const y=p[_];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ud=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_d=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Id="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,np=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ip=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:rd,alphahash_pars_fragment:sd,alphamap_fragment:ad,alphamap_pars_fragment:od,alphatest_fragment:ld,alphatest_pars_fragment:cd,aomap_fragment:ud,aomap_pars_fragment:fd,batching_pars_vertex:hd,batching_vertex:dd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,iridescence_fragment:_d,bumpmap_pars_fragment:vd,clipping_planes_fragment:xd,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:Md,clipping_planes_vertex:Ed,color_fragment:yd,color_pars_fragment:Td,color_pars_vertex:bd,color_vertex:Ad,common:wd,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Cd,displacementmap_pars_vertex:Pd,displacementmap_vertex:Dd,emissivemap_fragment:Ld,emissivemap_pars_fragment:Ud,colorspace_fragment:Id,colorspace_pars_fragment:Nd,envmap_fragment:Fd,envmap_common_pars_fragment:Od,envmap_pars_fragment:Bd,envmap_pars_vertex:zd,envmap_physical_pars_fragment:Kd,envmap_vertex:Hd,fog_vertex:Vd,fog_pars_vertex:kd,fog_fragment:Gd,fog_pars_fragment:Wd,gradientmap_pars_fragment:Xd,lightmap_pars_fragment:$d,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Yd,lights_pars_begin:jd,lights_toon_fragment:Zd,lights_toon_pars_fragment:Jd,lights_phong_fragment:Qd,lights_phong_pars_fragment:ep,lights_physical_fragment:tp,lights_physical_pars_fragment:np,lights_fragment_begin:ip,lights_fragment_maps:rp,lights_fragment_end:sp,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:cp,map_fragment:up,map_pars_fragment:fp,map_particle_fragment:hp,map_particle_pars_fragment:dp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:mp,morphinstance_vertex:gp,morphcolor_vertex:_p,morphnormal_vertex:vp,morphtarget_pars_vertex:xp,morphtarget_vertex:Sp,normal_fragment_begin:Mp,normal_fragment_maps:Ep,normal_pars_fragment:yp,normal_pars_vertex:Tp,normal_vertex:bp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Pp,opaque_fragment:Dp,packing:Lp,premultiplied_alpha_fragment:Up,project_vertex:Ip,dithering_fragment:Np,dithering_pars_fragment:Fp,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Bp,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Vp,shadowmask_pars_fragment:kp,skinbase_vertex:Gp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:$p,specularmap_fragment:qp,specularmap_pars_fragment:Yp,tonemapping_fragment:jp,tonemapping_pars_fragment:Kp,transmission_fragment:Zp,transmission_pars_fragment:Jp,uv_pars_fragment:Qp,uv_pars_vertex:em,uv_vertex:tm,worldpos_vertex:nm,background_vert:im,background_frag:rm,backgroundCube_vert:sm,backgroundCube_frag:am,cube_vert:om,cube_frag:lm,depth_vert:cm,depth_frag:um,distanceRGBA_vert:fm,distanceRGBA_frag:hm,equirect_vert:dm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:_m,meshbasic_frag:vm,meshlambert_vert:xm,meshlambert_frag:Sm,meshmatcap_vert:Mm,meshmatcap_frag:Em,meshnormal_vert:ym,meshnormal_frag:Tm,meshphong_vert:bm,meshphong_frag:Am,meshphysical_vert:wm,meshphysical_frag:Rm,meshtoon_vert:Cm,meshtoon_frag:Pm,points_vert:Dm,points_frag:Lm,shadow_vert:Um,shadow_frag:Im,sprite_vert:Nm,sprite_frag:Fm},Me={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Pn={basic:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Jt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Jt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Jt([Me.points,Me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Jt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Jt([Me.common,Me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Jt([Me.sprite,Me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Jt([Me.common,Me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Jt([Me.lights,Me.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Pn.physical={uniforms:Jt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ls={r:0,b:0,g:0},xi=new Jn,Om=new Dt;function Bm(i,e,t,n,r,s,a){const o=new gt(0);let l=s===!0?0:1,u,h,p=null,m=0,_=null;function v(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function y(A){let b=!1;const I=v(A);I===null?d(o,l):I&&I.isColor&&(d(I,1),b=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(A,b){const I=v(b);I&&(I.isCubeTexture||I.mapping===As)?(h===void 0&&(h=new hn(new _r(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ur(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),xi.copy(b.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Om.makeRotationFromEuler(xi)),h.material.toneMapped=lt.getTransfer(I.colorSpace)!==mt,(p!==I||m!==I.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,p=I,m=I.version,_=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(u===void 0&&(u=new hn(new ws(2,2),new pn({name:"BackgroundMaterial",uniforms:ur(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=I,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=lt.getTransfer(I.colorSpace)!==mt,I.matrixAutoUpdate===!0&&I.updateMatrix(),u.material.uniforms.uvTransform.value.copy(I.matrix),(p!==I||m!==I.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,p=I,m=I.version,_=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function d(A,b){A.getRGB(ls,Gc(i)),n.buffers.color.setClear(ls.r,ls.g,ls.b,b,a)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,b=1){o.set(A),l=b,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:y,addToRenderList:g,dispose:C}}function zm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,a=!1;function o(S,N,j,V,J){let se=!1;const Q=p(V,j,N);s!==Q&&(s=Q,u(s.object)),se=_(S,V,j,J),se&&v(S,V,j,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,b(S,N,j,V),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function p(S,N,j){const V=j.wireframe===!0;let J=n[S.id];J===void 0&&(J={},n[S.id]=J);let se=J[N.id];se===void 0&&(se={},J[N.id]=se);let Q=se[V];return Q===void 0&&(Q=m(l()),se[V]=Q),Q}function m(S){const N=[],j=[],V=[];for(let J=0;J<t;J++)N[J]=0,j[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:j,attributeDivisors:V,object:S,attributes:{},index:null}}function _(S,N,j,V){const J=s.attributes,se=N.attributes;let Q=0;const oe=j.getAttributes();for(const q in oe)if(oe[q].location>=0){const be=J[q];let Ce=se[q];if(Ce===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Ce=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Ce=S.instanceColor)),be===void 0||be.attribute!==Ce||Ce&&be.data!==Ce.data)return!0;Q++}return s.attributesNum!==Q||s.index!==V}function v(S,N,j,V){const J={},se=N.attributes;let Q=0;const oe=j.getAttributes();for(const q in oe)if(oe[q].location>=0){let be=se[q];be===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(be=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(be=S.instanceColor));const Ce={};Ce.attribute=be,be&&be.data&&(Ce.data=be.data),J[q]=Ce,Q++}s.attributes=J,s.attributesNum=Q,s.index=V}function y(){const S=s.newAttributes;for(let N=0,j=S.length;N<j;N++)S[N]=0}function g(S){d(S,0)}function d(S,N){const j=s.newAttributes,V=s.enabledAttributes,J=s.attributeDivisors;j[S]=1,V[S]===0&&(i.enableVertexAttribArray(S),V[S]=1),J[S]!==N&&(i.vertexAttribDivisor(S,N),J[S]=N)}function C(){const S=s.newAttributes,N=s.enabledAttributes;for(let j=0,V=N.length;j<V;j++)N[j]!==S[j]&&(i.disableVertexAttribArray(j),N[j]=0)}function A(S,N,j,V,J,se,Q){Q===!0?i.vertexAttribIPointer(S,N,j,J,se):i.vertexAttribPointer(S,N,j,V,J,se)}function b(S,N,j,V){y();const J=V.attributes,se=j.getAttributes(),Q=N.defaultAttributeValues;for(const oe in se){const q=se[oe];if(q.location>=0){let ge=J[oe];if(ge===void 0&&(oe==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),oe==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),ge!==void 0){const be=ge.normalized,Ce=ge.itemSize,Xe=e.get(ge);if(Xe===void 0)continue;const tt=Xe.buffer,ee=Xe.type,fe=Xe.bytesPerElement,Ee=ee===i.INT||ee===i.UNSIGNED_INT||ge.gpuType===vo;if(ge.isInterleavedBufferAttribute){const _e=ge.data,Be=_e.stride,st=ge.offset;if(_e.isInstancedInterleavedBuffer){for(let Ie=0;Ie<q.locationSize;Ie++)d(q.location+Ie,_e.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ie=0;Ie<q.locationSize;Ie++)g(q.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Ie=0;Ie<q.locationSize;Ie++)A(q.location+Ie,Ce/q.locationSize,ee,be,Be*fe,(st+Ce/q.locationSize*Ie)*fe,Ee)}else{if(ge.isInstancedBufferAttribute){for(let _e=0;_e<q.locationSize;_e++)d(q.location+_e,ge.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let _e=0;_e<q.locationSize;_e++)g(q.location+_e);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let _e=0;_e<q.locationSize;_e++)A(q.location+_e,Ce/q.locationSize,ee,be,Ce*fe,Ce/q.locationSize*_e*fe,Ee)}}else if(Q!==void 0){const be=Q[oe];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(q.location,be);break;case 3:i.vertexAttrib3fv(q.location,be);break;case 4:i.vertexAttrib4fv(q.location,be);break;default:i.vertexAttrib1fv(q.location,be)}}}}C()}function I(){D();for(const S in n){const N=n[S];for(const j in N){const V=N[j];for(const J in V)h(V[J].object),delete V[J];delete N[j]}delete n[S]}}function L(S){if(n[S.id]===void 0)return;const N=n[S.id];for(const j in N){const V=N[j];for(const J in V)h(V[J].object),delete V[J];delete N[j]}delete n[S.id]}function P(S){for(const N in n){const j=n[N];if(j[S.id]===void 0)continue;const V=j[S.id];for(const J in V)h(V[J].object),delete V[J];delete j[S.id]}}function D(){M(),a=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:g,disableUnusedAttributes:C}}function Hm(i,e,t){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),t.update(h,n,1)}function a(u,h,p){p!==0&&(i.drawArraysInstanced(n,u,h,p),t.update(h,n,p))}function o(u,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,p);let _=0;for(let v=0;v<p;v++)_+=h[v];t.update(_,n,1)}function l(u,h,p,m){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<u.length;v++)a(u[v],h[v],m[v]);else{_.multiDrawArraysInstancedWEBGL(n,u,0,h,0,m,0,p);let v=0;for(let y=0;y<p;y++)v+=h[y]*m[y];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const D=P===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Zn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==$n&&!D)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:m,maxTextures:_,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:b,vertexTextures:I,maxSamples:L}}function km(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Mi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const _=p.length!==0||m||n!==0||r;return r=m,n=p.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,_){const v=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,d=i.get(p);if(!r||v===null||v.length===0||s&&!g)s?h(null):u();else{const C=s?0:n,A=C*4;let b=d.clippingState||null;l.value=b,b=h(v,m,A,_);for(let I=0;I!==A;++I)b[I]=t[I];d.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,_,v){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const d=_+y*4,C=m.matrixWorldInverse;o.getNormalMatrix(C),(g===null||g.length<d)&&(g=new Float32Array(d));for(let A=0,b=_;A!==y;++A,b+=4)a.copy(p[A]).applyMatrix4(C,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function Gm(i){let e=new WeakMap;function t(a,o){return o===La?a.mapping=sr:o===Ua&&(a.mapping=ar),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===La||o===Ua)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new $h(l.height);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Qi=4,Rl=[.125,.215,.35,.446,.526,.582],Ti=20,ma=new wo,Cl=new gt;let ga=null,_a=0,va=0,xa=!1;const Ei=(1+Math.sqrt(5))/2,Zi=1/Ei,Pl=[new W(-Ei,Zi,0),new W(Ei,Zi,0),new W(-Zi,0,Ei),new W(Zi,0,Ei),new W(0,Ei,-Zi),new W(0,Ei,Zi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Dl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ga,_a,va),this._renderer.xr.enabled=xa,e.scissorTest=!1,cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:pr,format:An,colorSpace:cr,depthBuffer:!1},r=Ll(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(s)),this._blurMaterial=Xm(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,r){const o=new Tn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(Cl),h.toneMapping=fi,h.autoClear=!1;const _=new Hc({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new hn(new _r,_);let y=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,y=!0):(_.color.copy(Cl),y=!0);for(let d=0;d<6;d++){const C=d%3;C===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):C===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const A=this._cubeSize;cs(r,C*A,d>2?A:0,A,A),h.setRenderTarget(r),y&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===sr||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Pl[(r-s-1)%Pl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new hn(this._lodPlanes[r],u),m=u.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Ti-1),y=s/v,g=isFinite(s)?1+Math.floor(h*y):Ti;g>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ti}`);const d=[];let C=0;for(let P=0;P<Ti;++P){const D=P/y,M=Math.exp(-D*D/2);d.push(M),P===0?C+=M:P<g&&(C+=2*M)}for(let P=0;P<d.length;P++)d[P]=d[P]/C;m.envMap.value=e.texture,m.samples.value=g,m.weights.value=d,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:A}=this;m.dTheta.value=v,m.mipInt.value=A-n;const b=this._sizeLods[r],I=3*b*(r>A-Qi?r-A+Qi:0),L=4*(this._cubeSize-b);cs(t,I,L,3*b,2*b),l.setRenderTarget(t),l.render(p,ma)}}function Wm(i){const e=[],t=[],n=[];let r=i;const s=i-Qi+1+Rl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Qi?l=Rl[a-i+Qi-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,p=1+u,m=[h,h,p,h,p,p,h,h,p,p,h,p],_=6,v=6,y=3,g=2,d=1,C=new Float32Array(y*v*_),A=new Float32Array(g*v*_),b=new Float32Array(d*v*_);for(let L=0;L<_;L++){const P=L%3*2/3-1,D=L>2?0:-1,M=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];C.set(M,y*v*L),A.set(m,g*v*L);const S=[L,L,L,L,L,L];b.set(S,d*v*L)}const I=new Qn;I.setAttribute("position",new Rn(C,y)),I.setAttribute("uv",new Rn(A,g)),I.setAttribute("faceIndex",new Rn(b,d)),e.push(I),r>Qi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ll(i,e,t){const n=new Un(i,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Xm(i,e,t){const n=new Float32Array(Ti),r=new W(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ul(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Il(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $m(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===La||l===Ua,h=l===sr||l===ar;if(u||h){let p=e.get(o);const m=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new Dl(i)),p=u?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const _=o.image;return u&&_&&_.height>0||h&&_&&r(_)?(t===null&&(t=new Dl(i)),p=u?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function qm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ym(i,e,t,n){const r={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);m.removeEventListener("dispose",a),delete r[m.id];const _=s.get(m);_&&(e.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(p,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function l(p){const m=p.attributes;for(const _ in m)e.update(m[_],i.ARRAY_BUFFER)}function u(p){const m=[],_=p.index,v=p.attributes.position;let y=0;if(_!==null){const C=_.array;y=_.version;for(let A=0,b=C.length;A<b;A+=3){const I=C[A+0],L=C[A+1],P=C[A+2];m.push(I,L,L,P,P,I)}}else if(v!==void 0){const C=v.array;y=v.version;for(let A=0,b=C.length/3-1;A<b;A+=3){const I=A+0,L=A+1,P=A+2;m.push(I,L,L,P,P,I)}}else return;const g=new(Nc(m)?kc:Vc)(m,1);g.version=y;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function h(p){const m=s.get(p);if(m){const _=p.index;_!==null&&m.version<_.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function jm(i,e,t){let n;function r(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,_){i.drawElements(n,_,s,m*a),t.update(_,n,1)}function u(m,_,v){v!==0&&(i.drawElementsInstanced(n,_,s,m*a,v),t.update(_,n,v))}function h(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,m,0,v);let g=0;for(let d=0;d<v;d++)g+=_[d];t.update(g,n,1)}function p(m,_,v,y){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<m.length;d++)u(m[d]/a,_[d],y[d]);else{g.multiDrawElementsInstancedWEBGL(n,_,0,s,m,0,y,0,v);let d=0;for(let C=0;C<v;C++)d+=_[C]*y[C];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Km(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Zm(i,e,t){const n=new WeakMap,r=new Pt;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let m=n.get(o);if(m===void 0||m.count!==p){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};m!==void 0&&m.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let A=0;_===!0&&(A=1),v===!0&&(A=2),y===!0&&(A=3);let b=o.attributes.position.count*A,I=1;b>e.maxTextureSize&&(I=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const L=new Float32Array(b*I*4*p),P=new Oc(L,b,I,p);P.type=$n,P.needsUpdate=!0;const D=A*4;for(let S=0;S<p;S++){const N=g[S],j=d[S],V=C[S],J=b*I*4*S;for(let se=0;se<N.count;se++){const Q=se*D;_===!0&&(r.fromBufferAttribute(N,se),L[J+Q+0]=r.x,L[J+Q+1]=r.y,L[J+Q+2]=r.z,L[J+Q+3]=0),v===!0&&(r.fromBufferAttribute(j,se),L[J+Q+4]=r.x,L[J+Q+5]=r.y,L[J+Q+6]=r.z,L[J+Q+7]=0),y===!0&&(r.fromBufferAttribute(V,se),L[J+Q+8]=r.x,L[J+Q+9]=r.y,L[J+Q+10]=r.z,L[J+Q+11]=V.itemSize===4?r.w:1)}}m={count:p,texture:P,size:new ct(b,I)},n.set(o,m),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let y=0;y<u.length;y++)_+=u[y];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function Jm(i,e,t,n){let r=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return p}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const Yc=new sn,Nl=new Ao(1,1),jc=new Oc,Kc=new Ch,Zc=new Xc,Fl=[],Ol=[],Bl=new Float32Array(16),zl=new Float32Array(9),Hl=new Float32Array(4);function vr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Fl[r];if(s===void 0&&(s=new Float32Array(r),Fl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rs(i,e){let t=Ol[e];t===void 0&&(t=new Int32Array(e),Ol[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function ig(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Hl.set(n),i.uniformMatrix2fv(this.addr,!1,Hl),Vt(t,n)}}function rg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;zl.set(n),i.uniformMatrix3fv(this.addr,!1,zl),Vt(t,n)}}function sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Bl.set(n),i.uniformMatrix4fv(this.addr,!1,Bl),Vt(t,n)}}function ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function ug(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function pg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Nl.compareFunction=Ic,s=Nl):s=Yc,t.setTexture2D(e||s,r)}function mg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Kc,r)}function gg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Zc,r)}function _g(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||jc,r)}function vg(i){switch(i){case 5126:return Qm;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return rg;case 35676:return sg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return ug;case 36294:return fg;case 36295:return hg;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}function xg(i,e){i.uniform1fv(this.addr,e)}function Sg(i,e){const t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function Mg(i,e){const t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function Eg(i,e){const t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function yg(i,e){const t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tg(i,e){const t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bg(i,e){const t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ag(i,e){i.uniform1iv(this.addr,e)}function wg(i,e){i.uniform2iv(this.addr,e)}function Rg(i,e){i.uniform3iv(this.addr,e)}function Cg(i,e){i.uniform4iv(this.addr,e)}function Pg(i,e){i.uniform1uiv(this.addr,e)}function Dg(i,e){i.uniform2uiv(this.addr,e)}function Lg(i,e){i.uniform3uiv(this.addr,e)}function Ug(i,e){i.uniform4uiv(this.addr,e)}function Ig(i,e,t){const n=this.cache,r=e.length,s=Rs(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Yc,s[a])}function Ng(i,e,t){const n=this.cache,r=e.length,s=Rs(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Kc,s[a])}function Fg(i,e,t){const n=this.cache,r=e.length,s=Rs(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Zc,s[a])}function Og(i,e,t){const n=this.cache,r=e.length,s=Rs(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||jc,s[a])}function Bg(i){switch(i){case 5126:return xg;case 35664:return Sg;case 35665:return Mg;case 35666:return Eg;case 35674:return yg;case 35675:return Tg;case 35676:return bg;case 5124:case 35670:return Ag;case 35667:case 35671:return wg;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Dg;case 36295:return Lg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}class zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vg(t.type)}}class Hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bg(t.type)}}class Vg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Vl(i,e){i.seq.push(e),i.map[e.id]=e}function kg(i,e,t){const n=i.name,r=n.length;for(Sa.lastIndex=0;;){const s=Sa.exec(n),a=Sa.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Vl(t,u===void 0?new zg(o,i,e):new Hg(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Vg(o),Vl(t,p)),t=p}}}class xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);kg(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function kl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gg=37297;let Wg=0;function Xg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Gl=new je;function $g(i){lt._getMatrix(Gl,lt.workingColorSpace,i);const e=`mat3( ${Gl.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Ms:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Xg(i.getShaderSource(e),a)}else return r}function qg(i,e){const t=$g(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Yg(i,e){let t;switch(e){case mc:t="Linear";break;case gc:t="Reinhard";break;case _c:t="Cineon";break;case vc:t="ACESFilmic";break;case Sc:t="AgX";break;case Mc:t="Neutral";break;case xc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const us=new W;function jg(){lt.getLuminanceCoefficients(us);const i=us.x.toFixed(4),e=us.y.toFixed(4),t=us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Zg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ur(i){return i!==""}function Xl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(i){return i.replace(Qg,t_)}const e_=new Map;function t_(i,e){let t=Ke[e];if(t===void 0){const n=e_.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return co(t)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(i){return i.replace(n_,i_)}function i_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function r_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function s_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case ar:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function o_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pc:e="ENVMAP_BLENDING_MULTIPLY";break;case ah:e="ENVMAP_BLENDING_MIX";break;case oh:e="ENVMAP_BLENDING_ADD";break}return e}function l_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function c_(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=r_(t),u=s_(t),h=a_(t),p=o_(t),m=l_(t),_=Kg(t),v=Zg(s),y=r.createProgram();let g,d,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ur).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ur).join(`
`),d.length>0&&(d+=`
`)):(g=[Yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),d=[Yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==fi?Yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,qg("linearToOutputTexel",t.outputColorSpace),jg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),a=co(a),a=Xl(a,t),a=$l(a,t),o=co(o),o=Xl(o,t),o=$l(o,t),a=ql(a),o=ql(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=C+g+a,b=C+d+o,I=kl(r,r.VERTEX_SHADER,A),L=kl(r,r.FRAGMENT_SHADER,b);r.attachShader(y,I),r.attachShader(y,L),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function P(N){if(i.debug.checkShaderErrors){const j=r.getProgramInfoLog(y).trim(),V=r.getShaderInfoLog(I).trim(),J=r.getShaderInfoLog(L).trim();let se=!0,Q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,I,L);else{const oe=Wl(r,I,"vertex"),q=Wl(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+j+`
`+oe+`
`+q)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||J==="")&&(Q=!1);Q&&(N.diagnostics={runnable:se,programLog:j,vertexShader:{log:V,prefix:g},fragmentShader:{log:J,prefix:d}})}r.deleteShader(I),r.deleteShader(L),D=new xs(r,y),M=Jg(r,y)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,Gg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=L,this}let u_=0;class f_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new h_(e),t.set(e,n)),n}}class h_{constructor(e){this.id=u_++,this.code=e,this.usedTimes=0}}function d_(i,e,t,n,r,s,a){const o=new Bc,l=new f_,u=new Set,h=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return u.add(M),M===0?"uv":`uv${M}`}function g(M,S,N,j,V){const J=j.fog,se=V.geometry,Q=M.isMeshStandardMaterial?j.environment:null,oe=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),q=oe&&oe.mapping===As?oe.image.height:null,ge=v[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const be=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ce=be!==void 0?be.length:0;let Xe=0;se.morphAttributes.position!==void 0&&(Xe=1),se.morphAttributes.normal!==void 0&&(Xe=2),se.morphAttributes.color!==void 0&&(Xe=3);let tt,ee,fe,Ee;if(ge){const dt=Pn[ge];tt=dt.vertexShader,ee=dt.fragmentShader}else tt=M.vertexShader,ee=M.fragmentShader,l.update(M),fe=l.getVertexShaderID(M),Ee=l.getFragmentShaderID(M);const _e=i.getRenderTarget(),Be=i.state.buffers.depth.getReversed(),st=V.isInstancedMesh===!0,Ie=V.isBatchedMesh===!0,St=!!M.map,pt=!!M.matcap,qe=!!oe,U=!!M.aoMap,Xt=!!M.lightMap,Je=!!M.bumpMap,nt=!!M.normalMap,Ne=!!M.displacementMap,vt=!!M.emissiveMap,Fe=!!M.metalnessMap,w=!!M.roughnessMap,x=M.anisotropy>0,k=M.clearcoat>0,re=M.dispersion>0,ce=M.iridescence>0,ie=M.sheen>0,Le=M.transmission>0,Te=x&&!!M.anisotropyMap,we=k&&!!M.clearcoatMap,Qe=k&&!!M.clearcoatNormalMap,pe=k&&!!M.clearcoatRoughnessMap,Ae=ce&&!!M.iridescenceMap,Ue=ce&&!!M.iridescenceThicknessMap,He=ie&&!!M.sheenColorMap,Pe=ie&&!!M.sheenRoughnessMap,Ze=!!M.specularMap,Ve=!!M.specularColorMap,_t=!!M.specularIntensityMap,O=Le&&!!M.transmissionMap,ye=Le&&!!M.thicknessMap,K=!!M.gradientMap,te=!!M.alphaMap,xe=M.alphaTest>0,le=!!M.alphaHash,Ye=!!M.extensions;let ut=fi;M.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ut=i.toneMapping);const xt={shaderID:ge,shaderType:M.type,shaderName:M.name,vertexShader:tt,fragmentShader:ee,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:Ie,batchingColor:Ie&&V._colorsTexture!==null,instancing:st,instancingColor:st&&V.instanceColor!==null,instancingMorph:st&&V.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:cr,alphaToCoverage:!!M.alphaToCoverage,map:St,matcap:pt,envMap:qe,envMapMode:qe&&oe.mapping,envMapCubeUVHeight:q,aoMap:U,lightMap:Xt,bumpMap:Je,normalMap:nt,displacementMap:m&&Ne,emissiveMap:vt,normalMapObjectSpace:nt&&M.normalMapType===fh,normalMapTangentSpace:nt&&M.normalMapType===Uc,metalnessMap:Fe,roughnessMap:w,anisotropy:x,anisotropyMap:Te,clearcoat:k,clearcoatMap:we,clearcoatNormalMap:Qe,clearcoatRoughnessMap:pe,dispersion:re,iridescence:ce,iridescenceMap:Ae,iridescenceThicknessMap:Ue,sheen:ie,sheenColorMap:He,sheenRoughnessMap:Pe,specularMap:Ze,specularColorMap:Ve,specularIntensityMap:_t,transmission:Le,transmissionMap:O,thicknessMap:ye,gradientMap:K,opaque:M.transparent===!1&&M.blending===er&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:xe,alphaHash:le,combine:M.combine,mapUv:St&&y(M.map.channel),aoMapUv:U&&y(M.aoMap.channel),lightMapUv:Xt&&y(M.lightMap.channel),bumpMapUv:Je&&y(M.bumpMap.channel),normalMapUv:nt&&y(M.normalMap.channel),displacementMapUv:Ne&&y(M.displacementMap.channel),emissiveMapUv:vt&&y(M.emissiveMap.channel),metalnessMapUv:Fe&&y(M.metalnessMap.channel),roughnessMapUv:w&&y(M.roughnessMap.channel),anisotropyMapUv:Te&&y(M.anisotropyMap.channel),clearcoatMapUv:we&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:He&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&y(M.sheenRoughnessMap.channel),specularMapUv:Ze&&y(M.specularMap.channel),specularColorMapUv:Ve&&y(M.specularColorMap.channel),specularIntensityMapUv:_t&&y(M.specularIntensityMap.channel),transmissionMapUv:O&&y(M.transmissionMap.channel),thicknessMapUv:ye&&y(M.thicknessMap.channel),alphaMapUv:te&&y(M.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(nt||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!se.attributes.uv&&(St||te),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Be,skinning:V.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:St&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:vt&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xn,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ye&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&M.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return xt.vertexUv1s=u.has(1),xt.vertexUv2s=u.has(2),xt.vertexUv3s=u.has(3),u.clear(),xt}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(C(S,M),A(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function C(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function A(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const S=v[M.type];let N;if(S){const j=Pn[S];N=bo.clone(j.uniforms)}else N=M.uniforms;return N}function I(M,S){let N;for(let j=0,V=h.length;j<V;j++){const J=h[j];if(J.cacheKey===S){N=J,++N.usedTimes;break}}return N===void 0&&(N=new c_(i,S,M,s),h.push(N)),N}function L(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function P(M){l.remove(M)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:b,acquireProgram:I,releaseProgram:L,releaseShaderCache:P,programs:h,dispose:D}}function p_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function m_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(p,m,_,v,y,g){let d=i[e];return d===void 0?(d={id:p.id,object:p,geometry:m,material:_,groupOrder:v,renderOrder:p.renderOrder,z:y,group:g},i[e]=d):(d.id=p.id,d.object=p,d.geometry=m,d.material=_,d.groupOrder=v,d.renderOrder=p.renderOrder,d.z=y,d.group=g),e++,d}function o(p,m,_,v,y,g){const d=a(p,m,_,v,y,g);_.transmission>0?n.push(d):_.transparent===!0?r.push(d):t.push(d)}function l(p,m,_,v,y,g){const d=a(p,m,_,v,y,g);_.transmission>0?n.unshift(d):_.transparent===!0?r.unshift(d):t.unshift(d)}function u(p,m){t.length>1&&t.sort(p||m_),n.length>1&&n.sort(m||jl),r.length>1&&r.sort(m||jl)}function h(){for(let p=e,m=i.length;p<m;p++){const _=i[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:u}}function g_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Kl,i.set(n,[a])):r>=s.length?(a=new Kl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function __(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new gt};break;case"SpotLight":t={position:new W,direction:new W,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function v_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let x_=0;function S_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function M_(i){const e=new __,t=v_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);const r=new W,s=new Dt,a=new Dt;function o(u){let h=0,p=0,m=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let _=0,v=0,y=0,g=0,d=0,C=0,A=0,b=0,I=0,L=0,P=0;u.sort(S_);for(let M=0,S=u.length;M<S;M++){const N=u[M],j=N.color,V=N.intensity,J=N.distance,se=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=j.r*V,p+=j.g*V,m+=j.b*V;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(N.sh.coefficients[Q],V);P++}else if(N.isDirectionalLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const oe=N.shadow,q=t.get(N);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,n.directionalShadow[_]=q,n.directionalShadowMap[_]=se,n.directionalShadowMatrix[_]=N.shadow.matrix,C++}n.directional[_]=Q,_++}else if(N.isSpotLight){const Q=e.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy(j).multiplyScalar(V),Q.distance=J,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,n.spot[y]=Q;const oe=N.shadow;if(N.map&&(n.spotLightMap[I]=N.map,I++,oe.updateMatrices(N),N.castShadow&&L++),n.spotLightMatrix[y]=oe.matrix,N.castShadow){const q=t.get(N);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,n.spotShadow[y]=q,n.spotShadowMap[y]=se,b++}y++}else if(N.isRectAreaLight){const Q=e.get(N);Q.color.copy(j).multiplyScalar(V),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),n.rectArea[g]=Q,g++}else if(N.isPointLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){const oe=N.shadow,q=t.get(N);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,q.shadowCameraNear=oe.camera.near,q.shadowCameraFar=oe.camera.far,n.pointShadow[v]=q,n.pointShadowMap[v]=se,n.pointShadowMatrix[v]=N.shadow.matrix,A++}n.point[v]=Q,v++}else if(N.isHemisphereLight){const Q=e.get(N);Q.skyColor.copy(N.color).multiplyScalar(V),Q.groundColor.copy(N.groundColor).multiplyScalar(V),n.hemi[d]=Q,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=m;const D=n.hash;(D.directionalLength!==_||D.pointLength!==v||D.spotLength!==y||D.rectAreaLength!==g||D.hemiLength!==d||D.numDirectionalShadows!==C||D.numPointShadows!==A||D.numSpotShadows!==b||D.numSpotMaps!==I||D.numLightProbes!==P)&&(n.directional.length=_,n.spot.length=y,n.rectArea.length=g,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=b+I-L,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,D.directionalLength=_,D.pointLength=v,D.spotLength=y,D.rectAreaLength=g,D.hemiLength=d,D.numDirectionalShadows=C,D.numPointShadows=A,D.numSpotShadows=b,D.numSpotMaps=I,D.numLightProbes=P,n.version=x_++)}function l(u,h){let p=0,m=0,_=0,v=0,y=0;const g=h.matrixWorldInverse;for(let d=0,C=u.length;d<C;d++){const A=u[d];if(A.isDirectionalLight){const b=n.directional[p];b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),p++}else if(A.isSpotLight){const b=n.spot[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),_++}else if(A.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(A.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(g),m++}else if(A.isHemisphereLight){const b=n.hemi[y];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:n}}function Zl(i){const e=new M_(i),t=[],n=[];function r(h){u.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function E_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Zl(i),e.set(r,[o])):s>=a.length?(o=new Zl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function b_(i,e,t){let n=new $c;const r=new ct,s=new ct,a=new Pt,o=new Qh({depthPacking:uh}),l=new ed,u={},h=t.maxTextureSize,p={[hi]:rn,[rn]:hi,[Xn]:Xn},m=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:y_,fragmentShader:T_}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const v=new Qn;v.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new hn(v,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let d=this.type;this.render=function(L,P,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Yn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=d!==Gn&&this.type===Gn,J=d===Gn&&this.type!==Gn;for(let se=0,Q=L.length;se<Q;se++){const oe=L[se],q=oe.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ge=q.getFrameExtents();if(r.multiply(ge),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ge.x),r.x=s.x*ge.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ge.y),r.y=s.y*ge.y,q.mapSize.y=s.y)),q.map===null||V===!0||J===!0){const Ce=this.type!==Gn?{minFilter:wn,magFilter:wn}:{};q.map!==null&&q.map.dispose(),q.map=new Un(r.x,r.y,Ce),q.map.texture.name=oe.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const be=q.getViewportCount();for(let Ce=0;Ce<be;Ce++){const Xe=q.getViewport(Ce);a.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),j.viewport(a),q.updateMatrices(oe,Ce),n=q.getFrustum(),b(P,D,q.camera,oe,this.type)}q.isPointLightShadow!==!0&&this.type===Gn&&C(q,D),q.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(M,S,N)};function C(L,P){const D=e.update(y);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Un(r.x,r.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(P,null,D,m,y,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(P,null,D,_,y,null)}function A(L,P,D,M){let S=null;const N=D.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)S=N;else if(S=D.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const j=S.uuid,V=P.uuid;let J=u[j];J===void 0&&(J={},u[j]=J);let se=J[V];se===void 0&&(se=S.clone(),J[V]=se,P.addEventListener("dispose",I)),S=se}if(S.visible=P.visible,S.wireframe=P.wireframe,M===Gn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:p[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const j=i.properties.get(S);j.light=D}return S}function b(L,P,D,M,S){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Gn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,L.matrixWorld);const V=e.update(L),J=L.material;if(Array.isArray(J)){const se=V.groups;for(let Q=0,oe=se.length;Q<oe;Q++){const q=se[Q],ge=J[q.materialIndex];if(ge&&ge.visible){const be=A(L,ge,M,S);L.onBeforeShadow(i,L,P,D,V,be,q),i.renderBufferDirect(D,null,V,be,L,q),L.onAfterShadow(i,L,P,D,V,be,q)}}}else if(J.visible){const se=A(L,J,M,S);L.onBeforeShadow(i,L,P,D,V,se,null),i.renderBufferDirect(D,null,V,se,L,null),L.onAfterShadow(i,L,P,D,V,se,null)}}const j=L.children;for(let V=0,J=j.length;V<J;V++)b(j[V],P,D,M,S)}function I(L){L.target.removeEventListener("dispose",I);for(const D in u){const M=u[D],S=L.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const A_={[ba]:Aa,[wa]:Pa,[Ra]:Da,[rr]:Ca,[Aa]:ba,[Pa]:wa,[Da]:Ra,[Ca]:rr};function w_(i,e){function t(){let O=!1;const ye=new Pt;let K=null;const te=new Pt(0,0,0,0);return{setMask:function(xe){K!==xe&&!O&&(i.colorMask(xe,xe,xe,xe),K=xe)},setLocked:function(xe){O=xe},setClear:function(xe,le,Ye,ut,xt){xt===!0&&(xe*=ut,le*=ut,Ye*=ut),ye.set(xe,le,Ye,ut),te.equals(ye)===!1&&(i.clearColor(xe,le,Ye,ut),te.copy(ye))},reset:function(){O=!1,K=null,te.set(-1,0,0,0)}}}function n(){let O=!1,ye=!1,K=null,te=null,xe=null;return{setReversed:function(le){if(ye!==le){const Ye=e.get("EXT_clip_control");ye?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);const ut=xe;xe=null,this.setClear(ut)}ye=le},getReversed:function(){return ye},setTest:function(le){le?_e(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(le){K!==le&&!O&&(i.depthMask(le),K=le)},setFunc:function(le){if(ye&&(le=A_[le]),te!==le){switch(le){case ba:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case Pa:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=le}},setLocked:function(le){O=le},setClear:function(le){xe!==le&&(ye&&(le=1-le),i.clearDepth(le),xe=le)},reset:function(){O=!1,K=null,te=null,xe=null,ye=!1}}}function r(){let O=!1,ye=null,K=null,te=null,xe=null,le=null,Ye=null,ut=null,xt=null;return{setTest:function(dt){O||(dt?_e(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(dt){ye!==dt&&!O&&(i.stencilMask(dt),ye=dt)},setFunc:function(dt,on,ln){(K!==dt||te!==on||xe!==ln)&&(i.stencilFunc(dt,on,ln),K=dt,te=on,xe=ln)},setOp:function(dt,on,ln){(le!==dt||Ye!==on||ut!==ln)&&(i.stencilOp(dt,on,ln),le=dt,Ye=on,ut=ln)},setLocked:function(dt){O=dt},setClear:function(dt){xt!==dt&&(i.clearStencil(dt),xt=dt)},reset:function(){O=!1,ye=null,K=null,te=null,xe=null,le=null,Ye=null,ut=null,xt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,u=new WeakMap;let h={},p={},m=new WeakMap,_=[],v=null,y=!1,g=null,d=null,C=null,A=null,b=null,I=null,L=null,P=new gt(0,0,0),D=0,M=!1,S=null,N=null,j=null,V=null,J=null;const se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,oe=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=oe>=1):q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=oe>=2);let ge=null,be={};const Ce=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),tt=new Pt().fromArray(Ce),ee=new Pt().fromArray(Xe);function fe(O,ye,K,te){const xe=new Uint8Array(4),le=i.createTexture();i.bindTexture(O,le),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<K;Ye++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ye+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return le}const Ee={};Ee[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),a.setFunc(rr),Je(!1),nt(nl),_e(i.CULL_FACE),U(Yn);function _e(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Be(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function st(O,ye){return p[O]!==ye?(i.bindFramebuffer(O,ye),p[O]=ye,O===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ye),O===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ie(O,ye){let K=_,te=!1;if(O){K=m.get(ye),K===void 0&&(K=[],m.set(ye,K));const xe=O.textures;if(K.length!==xe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Ye=xe.length;le<Ye;le++)K[le]=i.COLOR_ATTACHMENT0+le;K.length=xe.length,te=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,te=!0);te&&i.drawBuffers(K)}function St(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const pt={[yi]:i.FUNC_ADD,[Gf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};pt[Xf]=i.MIN,pt[$f]=i.MAX;const qe={[qf]:i.ZERO,[Yf]:i.ONE,[jf]:i.SRC_COLOR,[ya]:i.SRC_ALPHA,[th]:i.SRC_ALPHA_SATURATE,[Qf]:i.DST_COLOR,[Zf]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[Ta]:i.ONE_MINUS_SRC_ALPHA,[eh]:i.ONE_MINUS_DST_COLOR,[Jf]:i.ONE_MINUS_DST_ALPHA,[nh]:i.CONSTANT_COLOR,[ih]:i.ONE_MINUS_CONSTANT_COLOR,[rh]:i.CONSTANT_ALPHA,[sh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(O,ye,K,te,xe,le,Ye,ut,xt,dt){if(O===Yn){y===!0&&(Be(i.BLEND),y=!1);return}if(y===!1&&(_e(i.BLEND),y=!0),O!==kf){if(O!==g||dt!==M){if((d!==yi||b!==yi)&&(i.blendEquation(i.FUNC_ADD),d=yi,b=yi),dt)switch(O){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}C=null,A=null,I=null,L=null,P.set(0,0,0),D=0,g=O,M=dt}return}xe=xe||ye,le=le||K,Ye=Ye||te,(ye!==d||xe!==b)&&(i.blendEquationSeparate(pt[ye],pt[xe]),d=ye,b=xe),(K!==C||te!==A||le!==I||Ye!==L)&&(i.blendFuncSeparate(qe[K],qe[te],qe[le],qe[Ye]),C=K,A=te,I=le,L=Ye),(ut.equals(P)===!1||xt!==D)&&(i.blendColor(ut.r,ut.g,ut.b,xt),P.copy(ut),D=xt),g=O,M=!1}function Xt(O,ye){O.side===Xn?Be(i.CULL_FACE):_e(i.CULL_FACE);let K=O.side===rn;ye&&(K=!K),Je(K),O.blending===er&&O.transparent===!1?U(Yn):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const te=O.stencilWrite;o.setTest(te),te&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),vt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function nt(O){O!==zf?(_e(i.CULL_FACE),O!==N&&(O===nl?i.cullFace(i.BACK):O===Hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),N=O}function Ne(O){O!==j&&(Q&&i.lineWidth(O),j=O)}function vt(O,ye,K){O?(_e(i.POLYGON_OFFSET_FILL),(V!==ye||J!==K)&&(i.polygonOffset(ye,K),V=ye,J=K)):Be(i.POLYGON_OFFSET_FILL)}function Fe(O){O?_e(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function w(O){O===void 0&&(O=i.TEXTURE0+se-1),ge!==O&&(i.activeTexture(O),ge=O)}function x(O,ye,K){K===void 0&&(ge===null?K=i.TEXTURE0+se-1:K=ge);let te=be[K];te===void 0&&(te={type:void 0,texture:void 0},be[K]=te),(te.type!==O||te.texture!==ye)&&(ge!==K&&(i.activeTexture(K),ge=K),i.bindTexture(O,ye||Ee[O]),te.type=O,te.texture=ye)}function k(){const O=be[ge];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(O){tt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),tt.copy(O))}function Pe(O){ee.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Ze(O,ye){let K=u.get(ye);K===void 0&&(K=new WeakMap,u.set(ye,K));let te=K.get(O);te===void 0&&(te=i.getUniformBlockIndex(ye,O.name),K.set(O,te))}function Ve(O,ye){const te=u.get(ye).get(O);l.get(ye)!==te&&(i.uniformBlockBinding(ye,te,O.__bindingPointIndex),l.set(ye,te))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ge=null,be={},p={},m=new WeakMap,_=[],v=null,y=!1,g=null,d=null,C=null,A=null,b=null,I=null,L=null,P=new gt(0,0,0),D=0,M=!1,S=null,N=null,j=null,V=null,J=null,tt.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_e,disable:Be,bindFramebuffer:st,drawBuffers:Ie,useProgram:St,setBlending:U,setMaterial:Xt,setFlipSided:Je,setCullFace:nt,setLineWidth:Ne,setPolygonOffset:vt,setScissorTest:Fe,activeTexture:w,bindTexture:x,unbindTexture:k,compressedTexImage2D:re,compressedTexImage3D:ce,texImage2D:Ae,texImage3D:Ue,updateUBOMapping:Ze,uniformBlockBinding:Ve,texStorage2D:Qe,texStorage3D:pe,texSubImage2D:ie,texSubImage3D:Le,compressedTexSubImage2D:Te,compressedTexSubImage3D:we,scissor:He,viewport:Pe,reset:_t}}function R_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ct,h=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,x){return _?new OffscreenCanvas(w,x):ys("canvas")}function y(w,x,k){let re=1;const ce=Fe(w);if((ce.width>k||ce.height>k)&&(re=k/Math.max(ce.width,ce.height)),re<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ie=Math.floor(re*ce.width),Le=Math.floor(re*ce.height);p===void 0&&(p=v(ie,Le));const Te=x?v(ie,Le):p;return Te.width=ie,Te.height=Le,Te.getContext("2d").drawImage(w,0,0,ie,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ie+"x"+Le+")."),Te}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),w;return w}function g(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(w,x,k,re,ce=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ie=x;if(x===i.RED&&(k===i.FLOAT&&(ie=i.R32F),k===i.HALF_FLOAT&&(ie=i.R16F),k===i.UNSIGNED_BYTE&&(ie=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.R8UI),k===i.UNSIGNED_SHORT&&(ie=i.R16UI),k===i.UNSIGNED_INT&&(ie=i.R32UI),k===i.BYTE&&(ie=i.R8I),k===i.SHORT&&(ie=i.R16I),k===i.INT&&(ie=i.R32I)),x===i.RG&&(k===i.FLOAT&&(ie=i.RG32F),k===i.HALF_FLOAT&&(ie=i.RG16F),k===i.UNSIGNED_BYTE&&(ie=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.RG8UI),k===i.UNSIGNED_SHORT&&(ie=i.RG16UI),k===i.UNSIGNED_INT&&(ie=i.RG32UI),k===i.BYTE&&(ie=i.RG8I),k===i.SHORT&&(ie=i.RG16I),k===i.INT&&(ie=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),k===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),k===i.UNSIGNED_INT&&(ie=i.RGB32UI),k===i.BYTE&&(ie=i.RGB8I),k===i.SHORT&&(ie=i.RGB16I),k===i.INT&&(ie=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),k===i.UNSIGNED_INT&&(ie=i.RGBA32UI),k===i.BYTE&&(ie=i.RGBA8I),k===i.SHORT&&(ie=i.RGBA16I),k===i.INT&&(ie=i.RGBA32I)),x===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),x===i.RGBA){const Le=ce?Ms:lt.getTransfer(re);k===i.FLOAT&&(ie=i.RGBA32F),k===i.HALF_FLOAT&&(ie=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ie=Le===mt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(w,x){let k;return w?x===null||x===wi||x===or?k=i.DEPTH24_STENCIL8:x===$n?k=i.DEPTH32F_STENCIL8:x===Fr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wi||x===or?k=i.DEPTH_COMPONENT24:x===$n?k=i.DEPTH_COMPONENT32F:x===Fr&&(k=i.DEPTH_COMPONENT16),k}function I(w,x){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==wn&&w.minFilter!==Ln?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function L(w){const x=w.target;x.removeEventListener("dispose",L),D(x),x.isVideoTexture&&h.delete(x)}function P(w){const x=w.target;x.removeEventListener("dispose",P),S(x)}function D(w){const x=n.get(w);if(x.__webglInit===void 0)return;const k=w.source,re=m.get(k);if(re){const ce=re[x.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&M(w),Object.keys(re).length===0&&m.delete(k)}n.remove(w)}function M(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const k=w.source,re=m.get(k);delete re[x.__cacheKey],a.memory.textures--}function S(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(x.__webglFramebuffer[re]))for(let ce=0;ce<x.__webglFramebuffer[re].length;ce++)i.deleteFramebuffer(x.__webglFramebuffer[re][ce]);else i.deleteFramebuffer(x.__webglFramebuffer[re]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[re])}else{if(Array.isArray(x.__webglFramebuffer))for(let re=0;re<x.__webglFramebuffer.length;re++)i.deleteFramebuffer(x.__webglFramebuffer[re]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let re=0;re<x.__webglColorRenderbuffer.length;re++)x.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[re]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=w.textures;for(let re=0,ce=k.length;re<ce;re++){const ie=n.get(k[re]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(k[re])}n.remove(w)}let N=0;function j(){N=0}function V(){const w=N;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),N+=1,w}function J(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function se(w,x){const k=n.get(w);if(w.isVideoTexture&&Ne(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const re=w.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(k,w,x);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function Q(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){ee(k,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function oe(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){ee(k,w,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function q(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){fe(k,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const ge={[Ia]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},be={[wn]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Xs]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},Ce={[hh]:i.NEVER,[vh]:i.ALWAYS,[dh]:i.LESS,[Ic]:i.LEQUAL,[ph]:i.EQUAL,[_h]:i.GEQUAL,[mh]:i.GREATER,[gh]:i.NOTEQUAL};function Xe(w,x){if(x.type===$n&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ln||x.magFilter===Xs||x.magFilter===Gr||x.magFilter===Ai||x.minFilter===Ln||x.minFilter===Xs||x.minFilter===Gr||x.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ge[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ge[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ge[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,be[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,be[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wn||x.minFilter!==Gr&&x.minFilter!==Ai||x.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function tt(w,x){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",L));const re=x.source;let ce=m.get(re);ce===void 0&&(ce={},m.set(re,ce));const ie=J(x);if(ie!==w.__cacheKey){ce[ie]===void 0&&(ce[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ce[ie].usedTimes++;const Le=ce[w.__cacheKey];Le!==void 0&&(ce[w.__cacheKey].usedTimes--,Le.usedTimes===0&&M(x)),w.__cacheKey=ie,w.__webglTexture=ce[ie].texture}return k}function ee(w,x,k){let re=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(re=i.TEXTURE_3D);const ce=tt(w,x),ie=x.source;t.bindTexture(re,w.__webglTexture,i.TEXTURE0+k);const Le=n.get(ie);if(ie.version!==Le.__version||ce===!0){t.activeTexture(i.TEXTURE0+k);const Te=lt.getPrimaries(lt.workingColorSpace),we=x.colorSpace===ui?null:lt.getPrimaries(x.colorSpace),Qe=x.colorSpace===ui||Te===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let pe=y(x.image,!1,r.maxTextureSize);pe=vt(x,pe);const Ae=s.convert(x.format,x.colorSpace),Ue=s.convert(x.type);let He=A(x.internalFormat,Ae,Ue,x.colorSpace,x.isVideoTexture);Xe(re,x);let Pe;const Ze=x.mipmaps,Ve=x.isVideoTexture!==!0,_t=Le.__version===void 0||ce===!0,O=ie.dataReady,ye=I(x,pe);if(x.isDepthTexture)He=b(x.format===lr,x.type),_t&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,He,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,He,pe.width,pe.height,0,Ae,Ue,null));else if(x.isDataTexture)if(Ze.length>0){Ve&&_t&&t.texStorage2D(i.TEXTURE_2D,ye,He,Ze[0].width,Ze[0].height);for(let K=0,te=Ze.length;K<te;K++)Pe=Ze[K],Ve?O&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Pe.width,Pe.height,Ae,Ue,Pe.data):t.texImage2D(i.TEXTURE_2D,K,He,Pe.width,Pe.height,0,Ae,Ue,Pe.data);x.generateMipmaps=!1}else Ve?(_t&&t.texStorage2D(i.TEXTURE_2D,ye,He,pe.width,pe.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Ae,Ue,pe.data)):t.texImage2D(i.TEXTURE_2D,0,He,pe.width,pe.height,0,Ae,Ue,pe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,He,Ze[0].width,Ze[0].height,pe.depth);for(let K=0,te=Ze.length;K<te;K++)if(Pe=Ze[K],x.format!==An)if(Ae!==null)if(Ve){if(O)if(x.layerUpdates.size>0){const xe=wl(Pe.width,Pe.height,x.format,x.type);for(const le of x.layerUpdates){const Ye=Pe.data.subarray(le*xe/Pe.data.BYTES_PER_ELEMENT,(le+1)*xe/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,le,Pe.width,Pe.height,1,Ae,Ye)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Pe.width,Pe.height,pe.depth,Ae,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,He,Pe.width,Pe.height,pe.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Pe.width,Pe.height,pe.depth,Ae,Ue,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,He,Pe.width,Pe.height,pe.depth,0,Ae,Ue,Pe.data)}else{Ve&&_t&&t.texStorage2D(i.TEXTURE_2D,ye,He,Ze[0].width,Ze[0].height);for(let K=0,te=Ze.length;K<te;K++)Pe=Ze[K],x.format!==An?Ae!==null?Ve?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Pe.width,Pe.height,Ae,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,K,He,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?O&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Pe.width,Pe.height,Ae,Ue,Pe.data):t.texImage2D(i.TEXTURE_2D,K,He,Pe.width,Pe.height,0,Ae,Ue,Pe.data)}else if(x.isDataArrayTexture)if(Ve){if(_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,He,pe.width,pe.height,pe.depth),O)if(x.layerUpdates.size>0){const K=wl(pe.width,pe.height,x.format,x.type);for(const te of x.layerUpdates){const xe=pe.data.subarray(te*K/pe.data.BYTES_PER_ELEMENT,(te+1)*K/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,pe.width,pe.height,1,Ae,Ue,xe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Ue,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,pe.width,pe.height,pe.depth,0,Ae,Ue,pe.data);else if(x.isData3DTexture)Ve?(_t&&t.texStorage3D(i.TEXTURE_3D,ye,He,pe.width,pe.height,pe.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Ue,pe.data)):t.texImage3D(i.TEXTURE_3D,0,He,pe.width,pe.height,pe.depth,0,Ae,Ue,pe.data);else if(x.isFramebufferTexture){if(_t)if(Ve)t.texStorage2D(i.TEXTURE_2D,ye,He,pe.width,pe.height);else{let K=pe.width,te=pe.height;for(let xe=0;xe<ye;xe++)t.texImage2D(i.TEXTURE_2D,xe,He,K,te,0,Ae,Ue,null),K>>=1,te>>=1}}else if(Ze.length>0){if(Ve&&_t){const K=Fe(Ze[0]);t.texStorage2D(i.TEXTURE_2D,ye,He,K.width,K.height)}for(let K=0,te=Ze.length;K<te;K++)Pe=Ze[K],Ve?O&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Ae,Ue,Pe):t.texImage2D(i.TEXTURE_2D,K,He,Ae,Ue,Pe);x.generateMipmaps=!1}else if(Ve){if(_t){const K=Fe(pe);t.texStorage2D(i.TEXTURE_2D,ye,He,K.width,K.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Ue,pe)}else t.texImage2D(i.TEXTURE_2D,0,He,Ae,Ue,pe);g(x)&&d(re),Le.__version=ie.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function fe(w,x,k){if(x.image.length!==6)return;const re=tt(w,x),ce=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);const ie=n.get(ce);if(ce.version!==ie.__version||re===!0){t.activeTexture(i.TEXTURE0+k);const Le=lt.getPrimaries(lt.workingColorSpace),Te=x.colorSpace===ui?null:lt.getPrimaries(x.colorSpace),we=x.colorSpace===ui||Le===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Qe=x.isCompressedTexture||x.image[0].isCompressedTexture,pe=x.image[0]&&x.image[0].isDataTexture,Ae=[];for(let te=0;te<6;te++)!Qe&&!pe?Ae[te]=y(x.image[te],!0,r.maxCubemapSize):Ae[te]=pe?x.image[te].image:x.image[te],Ae[te]=vt(x,Ae[te]);const Ue=Ae[0],He=s.convert(x.format,x.colorSpace),Pe=s.convert(x.type),Ze=A(x.internalFormat,He,Pe,x.colorSpace),Ve=x.isVideoTexture!==!0,_t=ie.__version===void 0||re===!0,O=ce.dataReady;let ye=I(x,Ue);Xe(i.TEXTURE_CUBE_MAP,x);let K;if(Qe){Ve&&_t&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ze,Ue.width,Ue.height);for(let te=0;te<6;te++){K=Ae[te].mipmaps;for(let xe=0;xe<K.length;xe++){const le=K[xe];x.format!==An?He!==null?Ve?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,le.width,le.height,He,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Ze,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,le.width,le.height,He,Pe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Ze,le.width,le.height,0,He,Pe,le.data)}}}else{if(K=x.mipmaps,Ve&&_t){K.length>0&&ye++;const te=Fe(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ze,te.width,te.height)}for(let te=0;te<6;te++)if(pe){Ve?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ae[te].width,Ae[te].height,He,Pe,Ae[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ze,Ae[te].width,Ae[te].height,0,He,Pe,Ae[te].data);for(let xe=0;xe<K.length;xe++){const Ye=K[xe].image[te].image;Ve?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,Ye.width,Ye.height,He,Pe,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Ze,Ye.width,Ye.height,0,He,Pe,Ye.data)}}else{Ve?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,He,Pe,Ae[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ze,He,Pe,Ae[te]);for(let xe=0;xe<K.length;xe++){const le=K[xe];Ve?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,He,Pe,le.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Ze,He,Pe,le.image[te])}}}g(x)&&d(i.TEXTURE_CUBE_MAP),ie.__version=ce.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Ee(w,x,k,re,ce,ie){const Le=s.convert(k.format,k.colorSpace),Te=s.convert(k.type),we=A(k.internalFormat,Le,Te,k.colorSpace),Qe=n.get(x),pe=n.get(k);if(pe.__renderTarget=x,!Qe.__hasExternalTextures){const Ae=Math.max(1,x.width>>ie),Ue=Math.max(1,x.height>>ie);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ie,we,Ae,Ue,x.depth,0,Le,Te,null):t.texImage2D(ce,ie,we,Ae,Ue,0,Le,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),nt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ce,pe.__webglTexture,0,Je(x)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ce,pe.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(w,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const re=x.depthTexture,ce=re&&re.isDepthTexture?re.type:null,ie=b(x.stencilBuffer,ce),Le=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=Je(x);nt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,ie,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ie,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ie,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,w)}else{const re=x.textures;for(let ce=0;ce<re.length;ce++){const ie=re[ce],Le=s.convert(ie.format,ie.colorSpace),Te=s.convert(ie.type),we=A(ie.internalFormat,Le,Te,ie.colorSpace),Qe=Je(x);k&&nt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,we,x.width,x.height):nt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,we,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,we,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(x.depthTexture);re.__renderTarget=x,(!re.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),se(x.depthTexture,0);const ce=re.__webglTexture,ie=Je(x);if(x.depthTexture.format===tr)nt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(x.depthTexture.format===lr)nt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function st(w){const x=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const re=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),re){const ce=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,re.removeEventListener("dispose",ce)};re.addEventListener("dispose",ce),x.__depthDisposeCallback=ce}x.__boundDepthTexture=re}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Be(x.__webglFramebuffer,w)}else if(k){x.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[re]),x.__webglDepthbuffer[re]===void 0)x.__webglDepthbuffer[re]=i.createRenderbuffer(),_e(x.__webglDepthbuffer[re],w,!1);else{const ce=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),_e(x.__webglDepthbuffer,w,!1);else{const re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(w,x,k){const re=n.get(w);x!==void 0&&Ee(re.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&st(w)}function St(w){const x=w.texture,k=n.get(w),re=n.get(x);w.addEventListener("dispose",P);const ce=w.textures,ie=w.isWebGLCubeRenderTarget===!0,Le=ce.length>1;if(Le||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=x.version,a.memory.textures++),ie){k.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[Te]=[];for(let we=0;we<x.mipmaps.length;we++)k.__webglFramebuffer[Te][we]=i.createFramebuffer()}else k.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let Te=0;Te<x.mipmaps.length;Te++)k.__webglFramebuffer[Te]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Le)for(let Te=0,we=ce.length;Te<we;Te++){const Qe=n.get(ce[Te]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&nt(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Te=0;Te<ce.length;Te++){const we=ce[Te];k.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Te]);const Qe=s.convert(we.format,we.colorSpace),pe=s.convert(we.type),Ae=A(we.internalFormat,Qe,pe,we.colorSpace,w.isXRRenderTarget===!0),Ue=Je(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,k.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,x);for(let Te=0;Te<6;Te++)if(x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)Ee(k.__webglFramebuffer[Te][we],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,we);else Ee(k.__webglFramebuffer[Te],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);g(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let Te=0,we=ce.length;Te<we;Te++){const Qe=ce[Te],pe=n.get(Qe);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),Xe(i.TEXTURE_2D,Qe),Ee(k.__webglFramebuffer,w,Qe,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,0),g(Qe)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Te=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,re.__webglTexture),Xe(Te,x),x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)Ee(k.__webglFramebuffer[we],w,x,i.COLOR_ATTACHMENT0,Te,we);else Ee(k.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,Te,0);g(x)&&d(Te),t.unbindTexture()}w.depthBuffer&&st(w)}function pt(w){const x=w.textures;for(let k=0,re=x.length;k<re;k++){const ce=x[k];if(g(ce)){const ie=C(w),Le=n.get(ce).__webglTexture;t.bindTexture(ie,Le),d(ie),t.unbindTexture()}}}const qe=[],U=[];function Xt(w){if(w.samples>0){if(nt(w)===!1){const x=w.textures,k=w.width,re=w.height;let ce=i.COLOR_BUFFER_BIT;const ie=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(w),Te=x.length>1;if(Te)for(let we=0;we<x.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let we=0;we<x.length;we++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const Qe=n.get(x[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,k,re,0,0,k,re,ce,i.NEAREST),l===!0&&(qe.length=0,U.length=0,qe.push(i.COLOR_ATTACHMENT0+we),w.depthBuffer&&w.resolveDepthBuffer===!1&&(qe.push(ie),U.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let we=0;we<x.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const Qe=n.get(x[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Je(w){return Math.min(r.maxSamples,w.samples)}function nt(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ne(w){const x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function vt(w,x){const k=w.colorSpace,re=w.format,ce=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==cr&&k!==ui&&(lt.getTransfer(k)===mt?(re!==An||ce!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function Fe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=se,this.setTexture2DArray=Q,this.setTexture3D=oe,this.setTextureCube=q,this.rebindTextures=Ie,this.setupRenderTarget=St,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=nt}function C_(i,e){function t(n,r=ui){let s;const a=lt.getTransfer(r);if(n===Zn)return i.UNSIGNED_BYTE;if(n===xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yc)return i.BYTE;if(n===Tc)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===pr)return i.HALF_FLOAT;if(n===Ac)return i.ALPHA;if(n===wc)return i.RGB;if(n===An)return i.RGBA;if(n===Rc)return i.LUMINANCE;if(n===Cc)return i.LUMINANCE_ALPHA;if(n===tr)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===Pc)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===Dc)return i.RG;if(n===Eo)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===ps||n===ms||n===gs||n===_s)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===Ba||n===za)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Va||n===ka)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ha||n===Va)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ka)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ga||n===Wa||n===Xa||n===$a||n===qa||n===Ya||n===ja||n===Ka||n===Za||n===Ja||n===Qa||n===eo||n===to||n===no)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ga)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===to)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vs||n===io||n===ro)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===vs)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ro)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===so||n===ao||n===oo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===vs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===so)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class L_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pn({vertexShader:P_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U_ extends mr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,p=null,m=null,_=null,v=null;const y=new L_,g=t.getContextAttributes();let d=null,C=null;const A=[],b=[],I=new ct;let L=null;const P=new Tn;P.viewport=new Pt;const D=new Tn;D.viewport=new Pt;const M=[P,D],S=new td;let N=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=A[ee];return fe===void 0&&(fe=new da,A[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=A[ee];return fe===void 0&&(fe=new da,A[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=A[ee];return fe===void 0&&(fe=new da,A[ee]=fe),fe.getHandSpace()};function V(ee){const fe=b.indexOf(ee.inputSource);if(fe===-1)return;const Ee=A[fe];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,u||a),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function J(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",se);for(let ee=0;ee<A.length;ee++){const fe=b[ee];fe!==null&&(b[ee]=null,A[ee].disconnect(fe))}N=null,j=null,y.reset(),e.setRenderTarget(d),_=null,m=null,p=null,r=null,C=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(ee){u=ee},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",J),r.addEventListener("inputsourceschange",se),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,_e=null,Be=null;g.depth&&(Be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=g.stencil?lr:tr,_e=g.stencil?or:wi);const st={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:s};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(st),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new Un(m.textureWidth,m.textureHeight,{format:An,type:Zn,depthTexture:new Ao(m.textureWidth,m.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}else{const Ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),C=new Un(_.framebufferWidth,_.framebufferHeight,{format:An,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}C.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function se(ee){for(let fe=0;fe<ee.removed.length;fe++){const Ee=ee.removed[fe],_e=b.indexOf(Ee);_e>=0&&(b[_e]=null,A[_e].disconnect(Ee))}for(let fe=0;fe<ee.added.length;fe++){const Ee=ee.added[fe];let _e=b.indexOf(Ee);if(_e===-1){for(let st=0;st<A.length;st++)if(st>=b.length){b.push(Ee),_e=st;break}else if(b[st]===null){b[st]=Ee,_e=st;break}if(_e===-1)break}const Be=A[_e];Be&&Be.connect(Ee)}}const Q=new W,oe=new W;function q(ee,fe,Ee){Q.setFromMatrixPosition(fe.matrixWorld),oe.setFromMatrixPosition(Ee.matrixWorld);const _e=Q.distanceTo(oe),Be=fe.projectionMatrix.elements,st=Ee.projectionMatrix.elements,Ie=Be[14]/(Be[10]-1),St=Be[14]/(Be[10]+1),pt=(Be[9]+1)/Be[5],qe=(Be[9]-1)/Be[5],U=(Be[8]-1)/Be[0],Xt=(st[8]+1)/st[0],Je=Ie*U,nt=Ie*Xt,Ne=_e/(-U+Xt),vt=Ne*-U;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(vt),ee.translateZ(Ne),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Be[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Fe=Ie+Ne,w=St+Ne,x=Je-vt,k=nt+(_e-vt),re=pt*St/w*Fe,ce=qe*St/w*Fe;ee.projectionMatrix.makePerspective(x,k,re,ce,Fe,w),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ge(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let fe=ee.near,Ee=ee.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),S.near=D.near=P.near=fe,S.far=D.far=P.far=Ee,(N!==S.near||j!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,j=S.far),P.layers.mask=ee.layers.mask|2,D.layers.mask=ee.layers.mask|4,S.layers.mask=P.layers.mask|D.layers.mask;const _e=ee.parent,Be=S.cameras;ge(S,_e);for(let st=0;st<Be.length;st++)ge(Be[st],_e);Be.length===2?q(S,P,D):S.projectionMatrix.copy(P.projectionMatrix),be(ee,S,_e)};function be(ee,fe,Ee){Ee===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=lo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(m===null&&_===null))return l},this.setFoveation=function(ee){l=ee,m!==null&&(m.fixedFoveation=ee),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let Ce=null;function Xe(ee,fe){if(h=fe.getViewerPose(u||a),v=fe,h!==null){const Ee=h.views;_!==null&&(e.setRenderTargetFramebuffer(C,_.framebuffer),e.setRenderTarget(C));let _e=!1;Ee.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let Ie=0;Ie<Ee.length;Ie++){const St=Ee[Ie];let pt=null;if(_!==null)pt=_.getViewport(St);else{const U=p.getViewSubImage(m,St);pt=U.viewport,Ie===0&&(e.setRenderTargetTextures(C,U.colorTexture,m.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(C))}let qe=M[Ie];qe===void 0&&(qe=new Tn,qe.layers.enable(Ie),qe.viewport=new Pt,M[Ie]=qe),qe.matrix.fromArray(St.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(St.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(pt.x,pt.y,pt.width,pt.height),Ie===0&&(S.matrix.copy(qe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(qe)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&p){const Ie=p.getDepthInformation(Ee[0]);Ie&&Ie.isValid&&Ie.texture&&y.init(e,Ie,r.renderState)}}for(let Ee=0;Ee<A.length;Ee++){const _e=b[Ee],Be=A[Ee];_e!==null&&Be!==void 0&&Be.update(_e,fe,u||a)}Ce&&Ce(ee,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),v=null}const tt=new qc;tt.setAnimationLoop(Xe),this.setAnimationLoop=function(ee){Ce=ee},this.dispose=function(){}}}const Si=new Jn,I_=new Dt;function N_(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Gc(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,C,A,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d)):d.isMeshStandardMaterial?(s(g,d),m(g,d),d.isMeshPhysicalMaterial&&_(g,d,b)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),y(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,C,A):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===rn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===rn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const C=e.get(d),A=C.envMap,b=C.envMapRotation;A&&(g.envMap.value=A,Si.copy(b),Si.x*=-1,Si.y*=-1,Si.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),g.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(Si)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,C,A){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*C,g.scale.value=A*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function m(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function _(g,d,C){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const C=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function F_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,A){const b=A.program;n.uniformBlockBinding(C,b)}function u(C,A){let b=r[C.id];b===void 0&&(v(C),b=h(C),r[C.id]=b,C.addEventListener("dispose",g));const I=A.program;n.updateUBOMapping(C,I);const L=e.render.frame;s[C.id]!==L&&(m(C),s[C.id]=L)}function h(C){const A=p();C.__bindingPointIndex=A;const b=i.createBuffer(),I=C.__size,L=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,b),b}function p(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const A=r[C.id],b=C.uniforms,I=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let L=0,P=b.length;L<P;L++){const D=Array.isArray(b[L])?b[L]:[b[L]];for(let M=0,S=D.length;M<S;M++){const N=D[M];if(_(N,L,M,I)===!0){const j=N.__offset,V=Array.isArray(N.value)?N.value:[N.value];let J=0;for(let se=0;se<V.length;se++){const Q=V[se],oe=y(Q);typeof Q=="number"||typeof Q=="boolean"?(N.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,j+J,N.__data)):Q.isMatrix3?(N.__data[0]=Q.elements[0],N.__data[1]=Q.elements[1],N.__data[2]=Q.elements[2],N.__data[3]=0,N.__data[4]=Q.elements[3],N.__data[5]=Q.elements[4],N.__data[6]=Q.elements[5],N.__data[7]=0,N.__data[8]=Q.elements[6],N.__data[9]=Q.elements[7],N.__data[10]=Q.elements[8],N.__data[11]=0):(Q.toArray(N.__data,J),J+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(C,A,b,I){const L=C.value,P=A+"_"+b;if(I[P]===void 0)return typeof L=="number"||typeof L=="boolean"?I[P]=L:I[P]=L.clone(),!0;{const D=I[P];if(typeof L=="number"||typeof L=="boolean"){if(D!==L)return I[P]=L,!0}else if(D.equals(L)===!1)return D.copy(L),!0}return!1}function v(C){const A=C.uniforms;let b=0;const I=16;for(let P=0,D=A.length;P<D;P++){const M=Array.isArray(A[P])?A[P]:[A[P]];for(let S=0,N=M.length;S<N;S++){const j=M[S],V=Array.isArray(j.value)?j.value:[j.value];for(let J=0,se=V.length;J<se;J++){const Q=V[J],oe=y(Q),q=b%I,ge=q%oe.boundary,be=q+ge;b+=ge,be!==0&&I-be<oe.storage&&(b+=I-be),j.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=oe.storage}}}const L=b%I;return L>0&&(b+=I-L),C.__size=b,C.__cache={},this}function y(C){const A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function g(C){const A=C.target;A.removeEventListener("dispose",g);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const C in r)i.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class O_{constructor(e={}){const{canvas:t=Sh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const v=new Uint32Array(4),y=new Int32Array(4);let g=null,d=null;const C=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=fi,this.toneMappingExposure=1;const b=this;let I=!1,L=0,P=0,D=null,M=-1,S=null;const N=new Pt,j=new Pt;let V=null;const J=new gt(0);let se=0,Q=t.width,oe=t.height,q=1,ge=null,be=null;const Ce=new Pt(0,0,Q,oe),Xe=new Pt(0,0,Q,oe);let tt=!1;const ee=new $c;let fe=!1,Ee=!1;this.transmissionResolutionScale=1;const _e=new Dt,Be=new Dt,st=new W,Ie=new Pt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function qe(){return D===null?q:1}let U=n;function Xt(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_o}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",le,!1),U===null){const B="webgl2";if(U=Xt(B,E),U===null)throw Xt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Je,nt,Ne,vt,Fe,w,x,k,re,ce,ie,Le,Te,we,Qe,pe,Ae,Ue,He,Pe,Ze,Ve,_t,O;function ye(){Je=new qm(U),Je.init(),Ve=new C_(U,Je),nt=new Vm(U,Je,e,Ve),Ne=new w_(U,Je),nt.reverseDepthBuffer&&m&&Ne.buffers.depth.setReversed(!0),vt=new Km(U),Fe=new p_,w=new R_(U,Je,Ne,Fe,nt,Ve,vt),x=new Gm(b),k=new $m(b),re=new id(U),_t=new zm(U,re),ce=new Ym(U,re,vt,_t),ie=new Jm(U,ce,re,vt),He=new Zm(U,nt,w),pe=new km(Fe),Le=new d_(b,x,k,Je,nt,_t,pe),Te=new N_(b,Fe),we=new g_,Qe=new E_(Je),Ue=new Bm(b,x,k,Ne,ie,_,l),Ae=new b_(b,ie,nt),O=new F_(U,vt,nt,Ne),Pe=new Hm(U,Je,vt),Ze=new jm(U,Je,vt),vt.programs=Le.programs,b.capabilities=nt,b.extensions=Je,b.properties=Fe,b.renderLists=we,b.shadowMap=Ae,b.state=Ne,b.info=vt}ye();const K=new U_(b,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(Q,oe,!1))},this.getSize=function(E){return E.set(Q,oe)},this.setSize=function(E,B,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,oe=B,t.width=Math.floor(E*q),t.height=Math.floor(B*q),X===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Q*q,oe*q).floor()},this.setDrawingBufferSize=function(E,B,X){Q=E,oe=B,q=X,t.width=Math.floor(E*X),t.height=Math.floor(B*X),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(Ce)},this.setViewport=function(E,B,X,$){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,B,X,$),Ne.viewport(N.copy(Ce).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Xe)},this.setScissor=function(E,B,X,$){E.isVector4?Xe.set(E.x,E.y,E.z,E.w):Xe.set(E,B,X,$),Ne.scissor(j.copy(Xe).multiplyScalar(q).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(E){Ne.setScissorTest(tt=E)},this.setOpaqueSort=function(E){ge=E},this.setTransparentSort=function(E){be=E},this.getClearColor=function(E){return E.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(E=!0,B=!0,X=!0){let $=0;if(E){let z=!1;if(D!==null){const he=D.texture.format;z=he===yo||he===Eo||he===Mo}if(z){const he=D.texture.type,Se=he===Zn||he===wi||he===Fr||he===or||he===xo||he===So,Re=Ue.getClearColor(),De=Ue.getClearAlpha(),ke=Re.r,We=Re.g,Oe=Re.b;Se?(v[0]=ke,v[1]=We,v[2]=Oe,v[3]=De,U.clearBufferuiv(U.COLOR,0,v)):(y[0]=ke,y[1]=We,y[2]=Oe,y[3]=De,U.clearBufferiv(U.COLOR,0,y))}else $|=U.COLOR_BUFFER_BIT}B&&($|=U.DEPTH_BUFFER_BIT),X&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ue.dispose(),we.dispose(),Qe.dispose(),Fe.dispose(),x.dispose(),k.dispose(),ie.dispose(),_t.dispose(),O.dispose(),Le.dispose(),K.dispose(),K.removeEventListener("sessionstart",Di),K.removeEventListener("sessionend",Sr),In.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=vt.autoReset,B=Ae.enabled,X=Ae.autoUpdate,$=Ae.needsUpdate,z=Ae.type;ye(),vt.autoReset=E,Ae.enabled=B,Ae.autoUpdate=X,Ae.needsUpdate=$,Ae.type=z}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ye(E){const B=E.target;B.removeEventListener("dispose",Ye),ut(B)}function ut(E){xt(E),Fe.remove(E)}function xt(E){const B=Fe.get(E).programs;B!==void 0&&(B.forEach(function(X){Le.releaseProgram(X)}),E.isShaderMaterial&&Le.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,X,$,z,he){B===null&&(B=St);const Se=z.isMesh&&z.matrixWorld.determinant()<0,Re=Us(E,B,X,$,z);Ne.setMaterial($,Se);let De=X.index,ke=1;if($.wireframe===!0){if(De=ce.getWireframeAttribute(X),De===void 0)return;ke=2}const We=X.drawRange,Oe=X.attributes.position;let at=We.start*ke,ft=(We.start+We.count)*ke;he!==null&&(at=Math.max(at,he.start*ke),ft=Math.min(ft,(he.start+he.count)*ke)),De!==null?(at=Math.max(at,0),ft=Math.min(ft,De.count)):Oe!=null&&(at=Math.max(at,0),ft=Math.min(ft,Oe.count));const bt=ft-at;if(bt<0||bt===1/0)return;_t.setup(z,$,Re,X,De);let Et,et=Pe;if(De!==null&&(Et=re.get(De),et=Ze,et.setIndex(Et)),z.isMesh)$.wireframe===!0?(Ne.setLineWidth($.wireframeLinewidth*qe()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if(z.isLine){let ze=$.linewidth;ze===void 0&&(ze=1),Ne.setLineWidth(ze*qe()),z.isLineSegments?et.setMode(U.LINES):z.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else z.isPoints?et.setMode(U.POINTS):z.isSprite&&et.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)et.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))et.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const ze=z._multiDrawStarts,Ft=z._multiDrawCounts,it=z._multiDrawCount,Ot=De?re.get(De).bytesPerElement:1,gn=Fe.get($).currentProgram.getUniforms();for(let Kt=0;Kt<it;Kt++)gn.setValue(U,"_gl_DrawID",Kt),et.render(ze[Kt]/Ot,Ft[Kt])}else if(z.isInstancedMesh)et.renderInstances(at,bt,z.count);else if(X.isInstancedBufferGeometry){const ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ft=Math.min(X.instanceCount,ze);et.renderInstances(at,bt,Ft)}else et.render(at,bt)};function dt(E,B,X){E.transparent===!0&&E.side===Xn&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,Cn(E,B,X),E.side=hi,E.needsUpdate=!0,Cn(E,B,X),E.side=Xn):Cn(E,B,X)}this.compile=function(E,B,X=null){X===null&&(X=E),d=Qe.get(X),d.init(B),A.push(d),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),E!==X&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const $=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const Re=he[Se];dt(Re,X,z),$.add(Re)}else dt(he,X,z),$.add(he)}),A.pop(),d=null,$},this.compileAsync=function(E,B,X=null){const $=this.compile(E,B,X);return new Promise(z=>{function he(){if($.forEach(function(Se){Fe.get(Se).currentProgram.isReady()&&$.delete(Se)}),$.size===0){z(E);return}setTimeout(he,10)}Je.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let on=null;function ln(E){on&&on(E)}function Di(){In.stop()}function Sr(){In.start()}const In=new qc;In.setAnimationLoop(ln),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(E){on=E,K.setAnimationLoop(E),E===null?In.stop():In.start()},K.addEventListener("sessionstart",Di),K.addEventListener("sessionend",Sr),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,B,D),d=Qe.get(E,A.length),d.init(B),A.push(d),Be.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(Be),Ee=this.localClippingEnabled,fe=pe.init(this.clippingPlanes,Ee),g=we.get(E,C.length),g.init(),C.push(g),K.enabled===!0&&K.isPresenting===!0){const he=b.xr.getDepthSensingMesh();he!==null&&Li(he,B,-1/0,b.sortObjects)}Li(E,B,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(ge,be),pt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,pt&&Ue.addToRenderList(g,E),this.info.render.frame++,fe===!0&&pe.beginShadows();const X=d.state.shadowsArray;Ae.render(X,E,B),fe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,z=g.transmissive;if(d.setupLights(),B.isArrayCamera){const he=B.cameras;if(z.length>0)for(let Se=0,Re=he.length;Se<Re;Se++){const De=he[Se];Er($,z,E,De)}pt&&Ue.render(E);for(let Se=0,Re=he.length;Se<Re;Se++){const De=he[Se];Mr(g,E,De,De.viewport)}}else z.length>0&&Er($,z,E,B),pt&&Ue.render(E),Mr(g,E,B);D!==null&&P===0&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(b,E,B),_t.resetDefaultState(),M=-1,S=null,A.pop(),A.length>0?(d=A[A.length-1],fe===!0&&pe.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,C.pop(),C.length>0?g=C[C.length-1]:g=null};function Li(E,B,X,$){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){$&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Be);const Se=ie.update(E),Re=E.material;Re.visible&&g.push(E,Se,Re,X,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ee.intersectsObject(E))){const Se=ie.update(E),Re=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ie.copy(Se.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(Be)),Array.isArray(Re)){const De=Se.groups;for(let ke=0,We=De.length;ke<We;ke++){const Oe=De[ke],at=Re[Oe.materialIndex];at&&at.visible&&g.push(E,Se,at,X,Ie.z,Oe)}}else Re.visible&&g.push(E,Se,Re,X,Ie.z,null)}}const he=E.children;for(let Se=0,Re=he.length;Se<Re;Se++)Li(he[Se],B,X,$)}function Mr(E,B,X,$){const z=E.opaque,he=E.transmissive,Se=E.transparent;d.setupLightsView(X),fe===!0&&pe.setGlobalState(b.clippingPlanes,X),$&&Ne.viewport(N.copy($)),z.length>0&&Ui(z,B,X),he.length>0&&Ui(he,B,X),Se.length>0&&Ui(Se,B,X),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Er(E,B,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new Un(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?pr:Zn,minFilter:Ai,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const he=d.state.transmissionRenderTarget[$.id],Se=$.viewport||N;he.setSize(Se.z*b.transmissionResolutionScale,Se.w*b.transmissionResolutionScale);const Re=b.getRenderTarget();b.setRenderTarget(he),b.getClearColor(J),se=b.getClearAlpha(),se<1&&b.setClearColor(16777215,.5),b.clear(),pt&&Ue.render(X);const De=b.toneMapping;b.toneMapping=fi;const ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),fe===!0&&pe.setGlobalState(b.clippingPlanes,$),Ui(E,X,$),w.updateMultisampleRenderTarget(he),w.updateRenderTargetMipmap(he),Je.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Oe=0,at=B.length;Oe<at;Oe++){const ft=B[Oe],bt=ft.object,Et=ft.geometry,et=ft.material,ze=ft.group;if(et.side===Xn&&bt.layers.test($.layers)){const Ft=et.side;et.side=rn,et.needsUpdate=!0,Hr(bt,X,$,Et,et,ze),et.side=Ft,et.needsUpdate=!0,We=!0}}We===!0&&(w.updateMultisampleRenderTarget(he),w.updateRenderTargetMipmap(he))}b.setRenderTarget(Re),b.setClearColor(J,se),ke!==void 0&&($.viewport=ke),b.toneMapping=De}function Ui(E,B,X){const $=B.isScene===!0?B.overrideMaterial:null;for(let z=0,he=E.length;z<he;z++){const Se=E[z],Re=Se.object,De=Se.geometry,ke=$===null?Se.material:$,We=Se.group;Re.layers.test(X.layers)&&Hr(Re,B,X,De,ke,We)}}function Hr(E,B,X,$,z,he){E.onBeforeRender(b,B,X,$,z,he),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(b,B,X,$,E,he),z.transparent===!0&&z.side===Xn&&z.forceSinglePass===!1?(z.side=rn,z.needsUpdate=!0,b.renderBufferDirect(X,B,$,z,E,he),z.side=hi,z.needsUpdate=!0,b.renderBufferDirect(X,B,$,z,E,he),z.side=Xn):b.renderBufferDirect(X,B,$,z,E,he),E.onAfterRender(b,B,X,$,z,he)}function Cn(E,B,X){B.isScene!==!0&&(B=St);const $=Fe.get(E),z=d.state.lights,he=d.state.shadowsArray,Se=z.state.version,Re=Le.getParameters(E,z.state,he,B,X),De=Le.getProgramCacheKey(Re);let ke=$.programs;$.environment=E.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(E.isMeshStandardMaterial?k:x).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Ye),ke=new Map,$.programs=ke);let We=ke.get(De);if(We!==void 0){if($.currentProgram===We&&$.lightsStateVersion===Se)return ei(E,Re),We}else Re.uniforms=Le.getUniforms(E),E.onBeforeCompile(Re,b),We=Le.acquireProgram(Re,De),ke.set(De,We),$.uniforms=Re.uniforms;const Oe=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=pe.uniform),ei(E,Re),$.needsLights=di(E),$.lightsStateVersion=Se,$.needsLights&&(Oe.ambientLightColor.value=z.state.ambient,Oe.lightProbe.value=z.state.probe,Oe.directionalLights.value=z.state.directional,Oe.directionalLightShadows.value=z.state.directionalShadow,Oe.spotLights.value=z.state.spot,Oe.spotLightShadows.value=z.state.spotShadow,Oe.rectAreaLights.value=z.state.rectArea,Oe.ltc_1.value=z.state.rectAreaLTC1,Oe.ltc_2.value=z.state.rectAreaLTC2,Oe.pointLights.value=z.state.point,Oe.pointLightShadows.value=z.state.pointShadow,Oe.hemisphereLights.value=z.state.hemi,Oe.directionalShadowMap.value=z.state.directionalShadowMap,Oe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Oe.spotShadowMap.value=z.state.spotShadowMap,Oe.spotLightMatrix.value=z.state.spotLightMatrix,Oe.spotLightMap.value=z.state.spotLightMap,Oe.pointShadowMap.value=z.state.pointShadowMap,Oe.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=We,$.uniformsList=null,We}function Ii(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=xs.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function ei(E,B){const X=Fe.get(E);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Us(E,B,X,$,z){B.isScene!==!0&&(B=St),w.resetTextureUnits();const he=B.fog,Se=$.isMeshStandardMaterial?B.environment:null,Re=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:cr,De=($.isMeshStandardMaterial?k:x).get($.envMap||Se),ke=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,ft=!!X.morphAttributes.color;let bt=fi;$.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(bt=b.toneMapping);const Et=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,et=Et!==void 0?Et.length:0,ze=Fe.get($),Ft=d.state.lights;if(fe===!0&&(Ee===!0||E!==S)){const kt=E===S&&$.id===M;pe.setState($,E,kt)}let it=!1;$.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Ft.state.version||ze.outputColorSpace!==Re||z.isBatchedMesh&&ze.batching===!1||!z.isBatchedMesh&&ze.batching===!0||z.isBatchedMesh&&ze.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ze.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ze.instancing===!1||!z.isInstancedMesh&&ze.instancing===!0||z.isSkinnedMesh&&ze.skinning===!1||!z.isSkinnedMesh&&ze.skinning===!0||z.isInstancedMesh&&ze.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ze.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ze.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ze.instancingMorph===!1&&z.morphTexture!==null||ze.envMap!==De||$.fog===!0&&ze.fog!==he||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==pe.numPlanes||ze.numIntersection!==pe.numIntersection)||ze.vertexAlphas!==ke||ze.vertexTangents!==We||ze.morphTargets!==Oe||ze.morphNormals!==at||ze.morphColors!==ft||ze.toneMapping!==bt||ze.morphTargetsCount!==et)&&(it=!0):(it=!0,ze.__version=$.version);let Ot=ze.currentProgram;it===!0&&(Ot=Cn($,B,z));let gn=!1,Kt=!1,ti=!1;const rt=Ot.getUniforms(),Qt=ze.uniforms;if(Ne.useProgram(Ot.program)&&(gn=!0,Kt=!0,ti=!0),$.id!==M&&(M=$.id,Kt=!0),gn||S!==E){Ne.buffers.depth.getReversed()?(_e.copy(E.projectionMatrix),Eh(_e),yh(_e),rt.setValue(U,"projectionMatrix",_e)):rt.setValue(U,"projectionMatrix",E.projectionMatrix),rt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Bt=rt.map.cameraPosition;Bt!==void 0&&Bt.setValue(U,st.setFromMatrixPosition(E.matrixWorld)),nt.logarithmicDepthBuffer&&rt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&rt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Kt=!0,ti=!0)}if(z.isSkinnedMesh){rt.setOptional(U,z,"bindMatrix"),rt.setOptional(U,z,"bindMatrixInverse");const kt=z.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),rt.setValue(U,"boneTexture",kt.boneTexture,w))}z.isBatchedMesh&&(rt.setOptional(U,z,"batchingTexture"),rt.setValue(U,"batchingTexture",z._matricesTexture,w),rt.setOptional(U,z,"batchingIdTexture"),rt.setValue(U,"batchingIdTexture",z._indirectTexture,w),rt.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&rt.setValue(U,"batchingColorTexture",z._colorsTexture,w));const Zt=X.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&He.update(z,X,Ot),(Kt||ze.receiveShadow!==z.receiveShadow)&&(ze.receiveShadow=z.receiveShadow,rt.setValue(U,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Qt.envMap.value=De,Qt.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(Qt.envMapIntensity.value=B.environmentIntensity),Kt&&(rt.setValue(U,"toneMappingExposure",b.toneMappingExposure),ze.needsLights&&Is(Qt,ti),he&&$.fog===!0&&Te.refreshFogUniforms(Qt,he),Te.refreshMaterialUniforms(Qt,$,q,oe,d.state.transmissionRenderTarget[E.id]),xs.upload(U,Ii(ze),Qt,w)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(xs.upload(U,Ii(ze),Qt,w),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&rt.setValue(U,"center",z.center),rt.setValue(U,"modelViewMatrix",z.modelViewMatrix),rt.setValue(U,"normalMatrix",z.normalMatrix),rt.setValue(U,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const kt=$.uniformsGroups;for(let Bt=0,yr=kt.length;Bt<yr;Bt++){const _n=kt[Bt];O.update(_n,Ot),O.bind(_n,Ot)}}return Ot}function Is(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function di(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,B,X){Fe.get(E.texture).__webglTexture=B,Fe.get(E.depthTexture).__webglTexture=X;const $=Fe.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const X=Fe.get(E);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const Ns=U.createFramebuffer();this.setRenderTarget=function(E,B=0,X=0){D=E,L=B,P=X;let $=!0,z=null,he=!1,Se=!1;if(E){const De=Fe.get(E);if(De.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(De.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(De.__hasExternalTextures)w.rebindTextures(E,Fe.get(E.texture).__webglTexture,Fe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(De.__boundDepthTexture!==Oe){if(Oe!==null&&Fe.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Se=!0);const We=Fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(We[B])?z=We[B][X]:z=We[B],he=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?z=Fe.get(E).__webglMultisampledFramebuffer:Array.isArray(We)?z=We[X]:z=We,N.copy(E.viewport),j.copy(E.scissor),V=E.scissorTest}else N.copy(Ce).multiplyScalar(q).floor(),j.copy(Xe).multiplyScalar(q).floor(),V=tt;if(X!==0&&(z=Ns),Ne.bindFramebuffer(U.FRAMEBUFFER,z)&&$&&Ne.drawBuffers(E,z),Ne.viewport(N),Ne.scissor(j),Ne.setScissorTest(V),he){const De=Fe.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,De.__webglTexture,X)}else if(Se){const De=Fe.get(E.texture),ke=B;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.__webglTexture,X,ke)}else if(E!==null&&X!==0){const De=Fe.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,De.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(E,B,X,$,z,he,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){Ne.bindFramebuffer(U.FRAMEBUFFER,Re);try{const De=E.texture,ke=De.format,We=De.type;if(!nt.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-$&&X>=0&&X<=E.height-z&&U.readPixels(B,X,$,z,Ve.convert(ke),Ve.convert(We),he)}finally{const De=D!==null?Fe.get(D).__webglFramebuffer:null;Ne.bindFramebuffer(U.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,B,X,$,z,he,Se){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){const De=E.texture,ke=De.format,We=De.type;if(!nt.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-$&&X>=0&&X<=E.height-z){Ne.bindFramebuffer(U.FRAMEBUFFER,Re);const Oe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),U.readPixels(B,X,$,z,Ve.convert(ke),Ve.convert(We),0);const at=D!==null?Fe.get(D).__webglFramebuffer:null;Ne.bindFramebuffer(U.FRAMEBUFFER,at);const ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Mh(U,ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he),U.deleteBuffer(Oe),U.deleteSync(ft),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,X=0){E.isTexture!==!0&&(Ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const $=Math.pow(2,-X),z=Math.floor(E.image.width*$),he=Math.floor(E.image.height*$),Se=B!==null?B.x:0,Re=B!==null?B.y:0;w.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Se,Re,z,he),Ne.unbindTexture()};const Fs=U.createFramebuffer(),Ni=U.createFramebuffer();this.copyTextureToTexture=function(E,B,X=null,$=null,z=0,he=null){E.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],B=arguments[2],he=arguments[3]||0,X=null),he===null&&(z!==0?(Ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=z,z=0):he=0);let Se,Re,De,ke,We,Oe,at,ft,bt;const Et=E.isCompressedTexture?E.mipmaps[he]:E.image;if(X!==null)Se=X.max.x-X.min.x,Re=X.max.y-X.min.y,De=X.isBox3?X.max.z-X.min.z:1,ke=X.min.x,We=X.min.y,Oe=X.isBox3?X.min.z:0;else{const Zt=Math.pow(2,-z);Se=Math.floor(Et.width*Zt),Re=Math.floor(Et.height*Zt),E.isDataArrayTexture?De=Et.depth:E.isData3DTexture?De=Math.floor(Et.depth*Zt):De=1,ke=0,We=0,Oe=0}$!==null?(at=$.x,ft=$.y,bt=$.z):(at=0,ft=0,bt=0);const et=Ve.convert(B.format),ze=Ve.convert(B.type);let Ft;B.isData3DTexture?(w.setTexture3D(B,0),Ft=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(w.setTexture2DArray(B,0),Ft=U.TEXTURE_2D_ARRAY):(w.setTexture2D(B,0),Ft=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const it=U.getParameter(U.UNPACK_ROW_LENGTH),Ot=U.getParameter(U.UNPACK_IMAGE_HEIGHT),gn=U.getParameter(U.UNPACK_SKIP_PIXELS),Kt=U.getParameter(U.UNPACK_SKIP_ROWS),ti=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Et.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,We),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Oe);const rt=E.isDataArrayTexture||E.isData3DTexture,Qt=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Zt=Fe.get(E),kt=Fe.get(B),Bt=Fe.get(Zt.__renderTarget),yr=Fe.get(kt.__renderTarget);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let _n=0;_n<De;_n++)rt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fe.get(E).__webglTexture,z,Oe+_n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fe.get(B).__webglTexture,he,bt+_n)),U.blitFramebuffer(ke,We,Se,Re,at,ft,Se,Re,U.DEPTH_BUFFER_BIT,U.NEAREST);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Fe.has(E)){const Zt=Fe.get(E),kt=Fe.get(B);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,Fs),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ni);for(let Bt=0;Bt<De;Bt++)rt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Zt.__webglTexture,z,Oe+Bt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Zt.__webglTexture,z),Qt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,he,bt+Bt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,kt.__webglTexture,he),z!==0?U.blitFramebuffer(ke,We,Se,Re,at,ft,Se,Re,U.COLOR_BUFFER_BIT,U.NEAREST):Qt?U.copyTexSubImage3D(Ft,he,at,ft,bt+Bt,ke,We,Se,Re):U.copyTexSubImage2D(Ft,he,at,ft,ke,We,Se,Re);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Qt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ft,he,at,ft,bt,Se,Re,De,et,ze,Et.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ft,he,at,ft,bt,Se,Re,De,et,Et.data):U.texSubImage3D(Ft,he,at,ft,bt,Se,Re,De,et,ze,Et):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,he,at,ft,Se,Re,et,ze,Et.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,he,at,ft,Et.width,Et.height,et,Et.data):U.texSubImage2D(U.TEXTURE_2D,he,at,ft,Se,Re,et,ze,Et);U.pixelStorei(U.UNPACK_ROW_LENGTH,it),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot),U.pixelStorei(U.UNPACK_SKIP_PIXELS,gn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Kt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ti),he===0&&B.generateMipmaps&&U.generateMipmap(Ft),Ne.unbindTexture()},this.copyTextureToTexture3D=function(E,B,X=null,$=null,z=0){return E.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,E=arguments[2],B=arguments[3],z=arguments[4]||0),Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,X,$,z)},this.initRenderTarget=function(E){Fe.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Ne.unbindTexture()},this.resetState=function(){L=0,P=0,D=null,Ne.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const B_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class xr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const z_=new wo(-1,1,1,-1,0,1);class H_ extends Qn{constructor(){super(),this.setAttribute("position",new Kn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kn([0,2,0,0,2,0],2))}}const V_=new H_;class Cs{constructor(e){this._mesh=new hn(V_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,z_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Jc extends xr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bo.clone(e.uniforms),this.material=new pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Cs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Jl extends xr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class k_ extends xr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class G_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ct);this._width=n.width,this._height=n.height,t=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jc(B_),this.copyPass.material.blending=Yn,this.clock=new Ro}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Jl!==void 0&&(a instanceof Jl?n=!0:a instanceof k_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const W_=`varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,X_=`// Fragment shader that renders outlines, adapted from:
//   https://roystan.net/articles/outline-shader/

varying vec2 vUv; // (x,y) with x,y in [0,1]
uniform sampler2D tNormal;
uniform sampler2D tDepth;
uniform vec2 texelSize;

/* Both the depth & normal checks use a Sobel operator, which
   is composed of two 3x3 kernels. For exact structure, see:
        https://en.wikipedia.org/wiki/Sobel_operator
*/


float computeEdgeDepth() {

    // Horizontal comparison
    // [m] for minus (negative components and [p] for plus
    float xm0 = texture(tDepth, vUv + texelSize * vec2(-1., +1.)).x;
    float xm1 = texture(tDepth, vUv + texelSize * vec2(-1.,  0.)).x;
    float xm2 = texture(tDepth, vUv + texelSize * vec2(-1., -1.)).x;

    float xp0 = texture(tDepth, vUv + texelSize * vec2(+1., +1.)).x;
    float xp1 = texture(tDepth, vUv + texelSize * vec2(+1.,  0.)).x;
    float xp2 = texture(tDepth, vUv + texelSize * vec2(+1., -1.)).x;

    // Vertical comparison
    float ym0 = texture(tDepth, vUv + texelSize * vec2(-1., 1.)).x;
    float ym1 = texture(tDepth, vUv + texelSize * vec2( 0., 1.)).x;
    float ym2 = texture(tDepth, vUv + texelSize * vec2(+1., 1.)).x;

    float yp0 = texture(tDepth, vUv + texelSize * vec2(-1., -1.)).x;
    float yp1 = texture(tDepth, vUv + texelSize * vec2( 0., -1.)).x;
    float yp2 = texture(tDepth, vUv + texelSize * vec2(+1., -1.)).x;

    // Build the local operator and apply to samples
    vec3 v121 = vec3(1., 2., 1.);

    // Compute the magnitude
    float Gx = dot(v121, vec3(xp0, xp1, xp2)) - dot(v121, vec3(xm0, xm1, xm2));
    float Gy = dot(v121, vec3(yp0, yp1, yp2)) - dot(v121, vec3(ym0, ym1, ym2));
    return sqrt(pow(Gx, 2.) + pow(Gy, 2.));
}

float computeEdgeNormal() {
    // Similar to Depth check, but using all three values for the normals

    vec3 xm0 = texture(tNormal, vUv + texelSize * vec2(-1., +1.)).rgb;
    vec3 xm1 = texture(tNormal, vUv + texelSize * vec2(-1.,  0.)).rgb;
    vec3 xm2 = texture(tNormal, vUv + texelSize * vec2(-1., -1.)).rgb;

    vec3 xp0 = texture(tNormal, vUv + texelSize * vec2(+1., +1.)).rgb;
    vec3 xp1 = texture(tNormal, vUv + texelSize * vec2(+1.,  0.)).rgb;
    vec3 xp2 = texture(tNormal, vUv + texelSize * vec2(+1., -1.)).rgb;

    vec3 ym0 = texture(tNormal, vUv + texelSize * vec2(-1., 1.)).rgb;
    vec3 ym1 = texture(tNormal, vUv + texelSize * vec2( 0., 1.)).rgb;
    vec3 ym2 = texture(tNormal, vUv + texelSize * vec2(+1., 1.)).rgb;

    vec3 yp0 = texture(tNormal, vUv + texelSize * vec2(-1., -1.)).rgb;
    vec3 yp1 = texture(tNormal, vUv + texelSize * vec2( 0., -1.)).rgb;
    vec3 yp2 = texture(tNormal, vUv + texelSize * vec2(+1., -1.)).rgb;

    vec3 v121 = vec3(1., 2., 1.);
    vec3 Gx = vec3( dot(v121, xp0), dot(v121, xp1), dot(v121, xp2))
        - vec3(dot(v121, xm0), dot(v121, xm1), dot(v121, xm2)                 );

    vec3 Gy = vec3( dot(v121, yp0), dot(v121, yp1), dot(v121, yp2))
        - vec3(dot(v121, ym0), dot(v121, ym1), dot(v121, ym2)                 );

    return sqrt(dot(Gx, Gx) + dot(Gy, Gy));
}

void main() {
    float edgeDepth = computeEdgeDepth();
    float edgeNormal = computeEdgeNormal();

    float edge = step(.25, max(edgeDepth, edgeNormal));
    float depth = texture(tDepth, vUv).x;

    // Make alpha transparent if depth == 1 (hitting far plane) UNLESS
    // we are drawing an edge
    float alpha = 1.0 - step(1.0, depth) + edge;

    // Color which we premultiply with alpha
    gl_FragColor.rgb = (1.0 - vec3(edge)) * alpha;
    gl_FragColor.a = alpha;
}
`;class $_ extends xr{constructor(t,n,r,s){super();It(this,"normalMaterial");It(this,"fsQuad");It(this,"outlineMaterial");It(this,"normalRenderTarget",new Un);this.scene=t,this.camera=n,this.normalMaterial=new Jh,this.fsQuad=new Cs,this.outlineMaterial=new pn({name:"outline shader",uniforms:{tDepth:{value:null},tNormal:{value:null},texelSize:{value:null}},vertexShader:W_,fragmentShader:X_}),this.fsQuad.material=this.outlineMaterial,this.setSize(r,s)}setSize(t,n){var s;(s=this.normalRenderTarget.depthTexture)==null||s.dispose();const r=new Ao(t,n);this.normalRenderTarget.setSize(t,n),this.normalRenderTarget.depthTexture=r,this.outlineMaterial.uniforms.tDepth.value=r,this.outlineMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.outlineMaterial.uniforms.texelSize.value=new ct(1/t,1/n)}render(t,n){const r=this.scene.overrideMaterial;this.scene.overrideMaterial=this.normalMaterial,t.setRenderTarget(this.normalRenderTarget),t.render(this.scene,this.camera),this.scene.overrideMaterial=r,t.setRenderTarget(n),this.fsQuad.render(t)}dispose(){this.normalMaterial.dispose(),this.fsQuad.dispose(),this.outlineMaterial.dispose(),this.normalRenderTarget.dispose()}}const q_=`varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

`,Y_=`varying vec2 vUv; // (x,y) with x,y in [0,1]
uniform sampler2D tInput;
uniform vec2 texelSize;

// Distance in pixels (more or less) to a black pixel for this pixel to turn black
uniform int thickness;

void main() {
    vec4 base = texture2D(tInput, vUv);
    vec4 black = vec4(vec3(0.), 1.);

    int thickness2 = thickness*thickness;

    // Becomes true if any pixel within a disc of radius "thickness" is black
    bool is_black = false;

    for (int i = -thickness/2; i < thickness/2; i++) {
        int i2 = i * i;
        for (int j = -thickness/2; j < thickness/2; j++) {
            vec4 smpl = texture2D(tInput, vUv + vec2(i,j) * texelSize);
            is_black = is_black || i2 + j * j < thickness2 && smpl == black;
        }
    }

    gl_FragColor.rgba = is_black ? black : base;
}
`;class j_ extends xr{constructor(t,n){super();It(this,"fsQuad");It(this,"thickenMaterial");this.fsQuad=new Cs,this.thickenMaterial=new pn({name:"thicken shader",uniforms:{tInput:{value:null},texelSize:{value:null},thickness:{value:0}},vertexShader:q_,fragmentShader:Y_}),this.fsQuad.material=this.thickenMaterial,this.setSize(t,n)}setSize(t,n){this.thickenMaterial.uniforms.texelSize.value=new ct(1/t,1/n)}setThickness(t){this.thickenMaterial.uniforms.thickness.value=t}render(t,n,r){t.setRenderTarget(n),this.thickenMaterial.uniforms.tInput.value=r.texture,this.fsQuad.render(t)}dispose(){this.fsQuad.dispose(),this.thickenMaterial.dispose()}}const K_={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ct(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`};class Z_ extends Jc{constructor(){super(K_)}setSize(e,t){this.material.uniforms.resolution.value.x=1/e,this.material.uniforms.resolution.value.y=1/t}}const J_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Q_ extends xr{constructor(){super();const e=J_;this.uniforms=bo.clone(e.uniforms),this.material=new Zh({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Cs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===xc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ev{constructor(e,t){It(this,"camera");It(this,"mesh");It(this,"canvas");It(this,"scene",new Yh);It(this,"renderer");It(this,"composer");It(this,"canvasWidth");It(this,"canvasHeight");It(this,"thickenPass");this.canvas=e,this.canvasWidth=0,this.canvasHeight=0,this.mesh=t,this.camera=new wo,this.camera.position.x=0,this.camera.position.y=0,this.camera.position.z=2e3,this.camera.lookAt(300,300,0),this.scene.add(this.mesh),this.renderer=new O_({antialias:!0,canvas:e,preserveDrawingBuffer:!0});const n=new Un;this.composer=new G_(this.renderer,n);const r=new $_(this.scene,this.camera,e.clientWidth,e.clientHeight);this.composer.addPass(r);const s=new j_(e.clientWidth,e.clientHeight);this.thickenPass=s,this.composer.addPass(s);const a=new Q_;this.composer.addPass(a);const o=new Z_;this.composer.addPass(o)}getCanvasPixelColor(e){const t=this.composer.writeBuffer,[n,r]=[e[0]*window.devicePixelRatio,e[1]*window.devicePixelRatio],s=new Uint8Array(4);return this.renderer.readRenderTargetPixels(t,n,t.height-r,1,1,s),[s[0],s[1],s[2],s[3]]}resizeCanvas(){return this.canvas.clientWidth===this.canvasWidth&&this.canvas.clientHeight===this.canvasHeight?!1:(this.canvasWidth=this.canvas.clientWidth,this.canvasHeight=this.canvas.clientHeight,this.composer.setPixelRatio(window.devicePixelRatio),this.composer.setSize(this.canvasWidth,this.canvasHeight),this.composer.renderer.setPixelRatio(window.devicePixelRatio),this.composer.renderer.setSize(this.canvasWidth,this.canvasHeight,!1),!0)}centerCameraAround(e,t){const r=e.geometry.getAttribute("position"),s=this.canvas.parentElement,a=.5*(this.canvas.clientWidth-s.clientWidth)/s.clientWidth,o=.5*(this.canvas.clientHeight-s.clientHeight)/s.clientHeight,{left:l,right:u,top:h,bottom:p,far:m,near:_}=tv(this.camera,r,t),v=this.canvas.clientWidth/this.canvas.clientHeight,y=s.clientWidth/s.clientHeight,g=(u-l)/(h-p);if(g>y){const b=u-l;this.camera.left=l-b*a,this.camera.right=u+b*a;const I=b/y,L=b/g,P=I-L;this.camera.bottom=p-I*o-P/2,this.camera.top=h+I*o+P/2}else{const b=h-p;this.camera.top=h+b*o,this.camera.bottom=p-b*o;const I=b*v;this.camera.left=l-I*a,this.camera.right=l+I+I*a}this.camera.near=_,this.camera.far=m,this.camera.updateProjectionMatrix();const d=u-l,C=h-p,A=Math.sqrt(d*d+C*C);this.thickenPass.setThickness(150*window.devicePixelRatio/A)}render(){this.composer.render()}}const tv=(i,e,t)=>{const n=new W;let[r,s]=[1/0,-1/0],[a,o]=[1/0,-1/0],[l,u]=[1/0,-1/0];const h=i.position,p=new W;i.getWorldDirection(p);const m=h.x*p.x+h.y*p.y+h.z*p.z;for(let _=0;_<e.count;_++){n.fromArray(e.array,_*e.itemSize),n.applyMatrix4(t);const y=Math.sqrt(n.x*n.x+n.y*n.y)*Math.sqrt(1-p.z*p.z),g=m-n.z*p.z+y,d=m-n.z*p.z-y,C=i.worldToLocal(n);r=Math.min(r,C.x),s=Math.max(s,C.x),a=Math.min(a,C.y),o=Math.max(o,C.y),l=Math.min(l,-g,-d),u=Math.max(u,-g,-d)}return{left:r,right:s,top:o,bottom:a,near:l,far:u}};var nv=(()=>{var i=import.meta.url;return async function(e={}){var t,n=e,r,s,a=new Promise((c,f)=>{r=c,s=f}),o=typeof window=="object",l=typeof importScripts=="function",u=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(u){const{createRequire:c}=await hc(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);var h=c(import.meta.url)}var p=!1;n.setup=function(){if(p)return;p=!0;function c(F,G,ne=me=>me){if(G)for(let me of G)F.push_back(ne(me));return F}function f(F,G=ne=>ne){const ne=[],me=F.size();for(let Ge=0;Ge<me;Ge++)ne.push(G(F.get(Ge)));return ne}function T(F,G=ne=>ne){const ne=[],me=F.size();for(let Ge=0;Ge<me;Ge++){const Tt=F.get(Ge),Ut=Tt.size(),en=[];for(let Rt=0;Rt<Ut;Rt++)en.push(G(Tt.get(Rt)));ne.push(en)}return ne}function R(F){return F[0].length<3&&(F=[F]),c(new n.Vector2_vec2,F,G=>c(new n.Vector_vec2,G,ne=>ne instanceof Array?{x:ne[0],y:ne[1]}:ne))}function H(F){for(let G=0;G<F.size();G++)F.get(G).delete();F.delete()}function Y(F){return F[0]instanceof Array?{x:F[0][0],y:F[0][1]}:typeof F[0]=="number"?{x:F[0]||0,y:F[1]||0}:F[0]}function ae(F){return F[0]instanceof Array?{x:F[0][0],y:F[0][1],z:F[0][2]}:typeof F[0]=="number"?{x:F[0]||0,y:F[1]||0,z:F[2]||0}:F[0]}function Z(F){return F=="EvenOdd"?0:F=="NonZero"?1:F=="Negative"?3:2}function ue(F){return F=="Round"?1:F=="Miter"?2:0}const de=n.CrossSection;function ve(F,G="Positive"){if(F instanceof de)return F;{const ne=R(F),me=new de(ne,Z(G));return H(ne),me}}n.CrossSection.prototype.translate=function(...F){return this._Translate(Y(F))},n.CrossSection.prototype.scale=function(F){return typeof F=="number"?this._Scale({x:F,y:F}):this._Scale(Y([F]))},n.CrossSection.prototype.mirror=function(F){return this._Mirror(Y([F]))},n.CrossSection.prototype.warp=function(F){const G=Tr(function(me){const Ge=k(me,"double"),Tt=k(me+8,"double"),Ut=[Ge,Tt];F(Ut),re(me,Ut[0],"double"),re(me+8,Ut[1],"double")},"vi"),ne=this._Warp(G);return br(G),ne},n.CrossSection.prototype.decompose=function(){const F=this._Decompose(),G=f(F);return F.delete(),G},n.CrossSection.prototype.bounds=function(){const F=this._Bounds();return{min:["x","y"].map(G=>F.min[G]),max:["x","y"].map(G=>F.max[G])}},n.CrossSection.prototype.offset=function(F,G="Square",ne=2,me=0){return this._Offset(F,ue(G),ne,me)},n.CrossSection.prototype.extrude=function(F,G=0,ne=0,me=[1,1],Ge=!1){me=Y([me]);const Tt=n._Extrude(this._ToPolygons(),F,G,ne,me);return Ge?Tt.translate([0,0,-F/2]):Tt},n.CrossSection.prototype.revolve=function(F=0,G=360){return n._Revolve(this._ToPolygons(),F,G)},n.CrossSection.prototype.add=function(F){return this._add(ve(F))},n.CrossSection.prototype.subtract=function(F){return this._subtract(ve(F))},n.CrossSection.prototype.intersect=function(F){return this._intersect(ve(F))},n.CrossSection.prototype.toPolygons=function(){const F=this._ToPolygons(),G=T(F,ne=>[ne.x,ne.y]);return F.delete(),G},n.Manifold.prototype.smoothOut=function(F=60,G=0){return this._SmoothOut(F,G)},n.Manifold.prototype.warp=function(F){const G=Tr(function(Ge){const Tt=k(Ge,"double"),Ut=k(Ge+8,"double"),en=k(Ge+16,"double"),Rt=[Tt,Ut,en];F(Rt),re(Ge,Rt[0],"double"),re(Ge+8,Rt[1],"double"),re(Ge+16,Rt[2],"double")},"vi"),ne=this._Warp(G);br(G);const me=ne.status();if(me.value!==0)throw new n.ManifoldError(me.value);return ne},n.Manifold.prototype.calculateNormals=function(F,G=60){return this._CalculateNormals(F,G)},n.Manifold.prototype.setProperties=function(F,G){const ne=this.numProp(),me=Tr(function(Tt,Ut,en){const Rt=[];for(let Ct=0;Ct<F;++Ct)Rt[Ct]=k(Tt+8*Ct,"double");const Fi=[];for(let Ct=0;Ct<3;++Ct)Fi[Ct]=k(Ut+8*Ct,"double");const Oi=[];for(let Ct=0;Ct<ne;++Ct)Oi[Ct]=k(en+8*Ct,"double");G(Rt,Fi,Oi);for(let Ct=0;Ct<F;++Ct)re(Tt+8*Ct,Rt[Ct],"double")},"viii"),Ge=this._SetProperties(F,me);return br(me),Ge},n.Manifold.prototype.translate=function(...F){return this._Translate(ae(F))},n.Manifold.prototype.rotate=function(F,G,ne){return Array.isArray(F)?this._Rotate(...F):this._Rotate(F,G||0,ne||0)},n.Manifold.prototype.scale=function(F){return typeof F=="number"?this._Scale({x:F,y:F,z:F}):this._Scale(ae([F]))},n.Manifold.prototype.mirror=function(F){return this._Mirror(ae([F]))},n.Manifold.prototype.trimByPlane=function(F,G=0){return this._TrimByPlane(ae([F]),G)},n.Manifold.prototype.slice=function(F=0){const G=this._Slice(F),ne=new de(G,Z("Positive"));return H(G),ne},n.Manifold.prototype.project=function(){const F=this._Project(),G=new de(F,Z("Positive"));return H(F),G.simplify(this.tolerance)},n.Manifold.prototype.split=function(F){const G=this._Split(F),ne=f(G);return G.delete(),ne},n.Manifold.prototype.splitByPlane=function(F,G=0){const ne=this._SplitByPlane(ae([F]),G),me=f(ne);return ne.delete(),me},n.Manifold.prototype.decompose=function(){const F=this._Decompose(),G=f(F);return F.delete(),G},n.Manifold.prototype.boundingBox=function(){const F=this._boundingBox();return{min:["x","y","z"].map(G=>F.min[G]),max:["x","y","z"].map(G=>F.max[G])}};class $e{constructor({numProp:G=3,triVerts:ne=new Uint32Array,vertProperties:me=new Float32Array,mergeFromVert:Ge,mergeToVert:Tt,runIndex:Ut,runOriginalID:en,faceID:Rt,halfedgeTangent:Fi,runTransform:Oi}={}){this.numProp=G,this.triVerts=ne,this.vertProperties=me,this.mergeFromVert=Ge,this.mergeToVert=Tt,this.runIndex=Ut,this.runOriginalID=en,this.faceID=Rt,this.halfedgeTangent=Fi,this.runTransform=Oi}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:G,mesh:ne}=n._Merge(this);return Object.assign(this,{...ne}),G}verts(G){return this.triVerts.subarray(3*G,3*(G+1))}position(G){return this.vertProperties.subarray(this.numProp*G,this.numProp*G+3)}extras(G){return this.vertProperties.subarray(this.numProp*G+3,this.numProp*(G+1))}tangent(G){return this.halfedgeTangent.subarray(4*G,4*(G+1))}transform(G){const ne=new Array(16);for(const me of[0,1,2,3])for(const Ge of[0,1,2])ne[4*me+Ge]=this.runTransform[12*G+3*me+Ge];return ne[15]=1,ne}}n.Mesh=$e,n.Manifold.prototype.getMesh=function(F=-1){return new $e(this._GetMeshJS(F))},n.ManifoldError=function(G,...ne){let me="Unknown error";switch(G){case n.status.NonFiniteVertex.value:me="Non-finite vertex";break;case n.status.NotManifold.value:me="Not manifold";break;case n.status.VertexOutOfBounds.value:me="Vertex index out of bounds";break;case n.status.PropertiesWrongLength.value:me="Properties have wrong length";break;case n.status.MissingPositionProperties.value:me="Less than three properties";break;case n.status.MergeVectorsDifferentLengths.value:me="Merge vectors have different lengths";break;case n.status.MergeIndexOutOfBounds.value:me="Merge index out of bounds";break;case n.status.TransformWrongLength.value:me="Transform vector has wrong length";break;case n.status.RunIndexWrongLength.value:me="Run index vector has wrong length";break;case n.status.FaceIDWrongLength.value:me="Face ID vector has wrong length";case n.status.InvalidConstruction.value:me="Manifold constructed with invalid parameters"}const Ge=Error.apply(this,[me,...ne]);Ge.name=this.name="ManifoldError",this.message=Ge.message,this.stack=Ge.stack,this.code=G},n.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:n.ManifoldError,writable:!0,configurable:!0}}),n.CrossSection=function(F,G="Positive"){const ne=R(F),me=new de(ne,Z(G));return H(ne),me},n.CrossSection.ofPolygons=function(F,G="Positive"){return new n.CrossSection(F,G)},n.CrossSection.square=function(...F){let G;F.length==0?G={x:1,y:1}:typeof F[0]=="number"?G={x:F[0],y:F[0]}:G=Y(F);const ne=F[1]||!1;return n._Square(G,ne)},n.CrossSection.circle=function(F,G=0){return n._Circle(F,G)};function ht(F){return function(...G){G.length==1&&(G=G[0]);const ne=new n.Vector_crossSection;for(const Ge of G)ne.push_back(ve(Ge));const me=n["_crossSection"+F](ne);return ne.delete(),me}}n.CrossSection.compose=ht("Compose"),n.CrossSection.union=ht("UnionN"),n.CrossSection.difference=ht("DifferenceN"),n.CrossSection.intersection=ht("IntersectionN");function Lt(F,G){c(F,G,ne=>ne instanceof Array?{x:ne[0],y:ne[1]}:ne)}n.CrossSection.hull=function(...F){F.length==1&&(F=F[0]);let G=new n.Vector_vec2;for(const me of F)if(me instanceof de)n._crossSectionCollectVertices(G,me);else if(me instanceof Array&&me.length==2&&typeof me[0]=="number")G.push_back({x:me[0],y:me[1]});else if(me.x)G.push_back(me);else{const Tt=me[0].length==2&&typeof me[0][0]=="number"||me[0].x?[me]:me;for(const Ut of Tt)Lt(G,Ut)}const ne=n._crossSectionHullPoints(G);return G.delete(),ne},n.CrossSection.prototype=Object.create(de.prototype),Object.defineProperty(n.CrossSection,Symbol.hasInstance,{get:()=>F=>F instanceof de});const At=n.Manifold;n.Manifold=function(F){const G=new At(F),ne=G.status();if(ne.value!==0)throw new n.ManifoldError(ne.value);return G},n.Manifold.ofMesh=function(F){return new n.Manifold(F)},n.Manifold.tetrahedron=function(){return n._Tetrahedron()},n.Manifold.cube=function(...F){let G;F.length==0?G={x:1,y:1,z:1}:typeof F[0]=="number"?G={x:F[0],y:F[0],z:F[0]}:G=ae(F);const ne=F[1]||!1;return n._Cube(G,ne)},n.Manifold.cylinder=function(F,G,ne=-1,me=0,Ge=!1){return n._Cylinder(F,G,ne,me,Ge)},n.Manifold.sphere=function(F,G=0){return n._Sphere(F,G)},n.Manifold.smooth=function(F,G=[]){const ne=new n.Vector_smoothness;c(ne,G);const me=n._Smooth(F,ne);return ne.delete(),me},n.Manifold.extrude=function(F,G,ne=0,me=0,Ge=[1,1],Tt=!1){return(F instanceof de?F:n.CrossSection(F,"Positive")).extrude(G,ne,me,Ge,Tt)},n.Manifold.revolve=function(F,G=0,ne=360){return(F instanceof de?F:n.CrossSection(F,"Positive")).revolve(G,ne)},n.Manifold.reserveIDs=function(F){return n._ReserveIDs(F)},n.Manifold.compose=function(F){const G=new n.Vector_manifold;c(G,F);const ne=n._manifoldCompose(G);return G.delete(),ne};function xn(F){return function(...G){G.length==1&&(G=G[0]);const ne=new n.Vector_manifold;for(const Ge of G)ne.push_back(Ge);const me=n["_manifold"+F+"N"](ne);return ne.delete(),me}}n.Manifold.union=xn("Union"),n.Manifold.difference=xn("Difference"),n.Manifold.intersection=xn("Intersection"),n.Manifold.levelSet=function(F,G,ne,me=0,Ge=-1){const Tt={min:{x:G.min[0],y:G.min[1],z:G.min[2]},max:{x:G.max[0],y:G.max[1],z:G.max[2]}},Ut=Tr(function(Rt){const Fi=k(Rt,"double"),Oi=k(Rt+8,"double"),Ct=k(Rt+16,"double");return F([Fi,Oi,Ct])},"di"),en=n._LevelSet(Ut,Tt,ne,me,Ge);return br(Ut),en};function Sn(F,G){c(F,G,ne=>ne instanceof Array?{x:ne[0],y:ne[1],z:ne[2]}:ne)}n.Manifold.hull=function(...F){F.length==1&&(F=F[0]);let G=new n.Vector_vec3;for(const me of F)me instanceof At?n._manifoldCollectVertices(G,me):me instanceof Array&&me.length==3&&typeof me[0]=="number"?G.push_back({x:me[0],y:me[1],z:me[2]}):me.x?G.push_back(me):Sn(G,me);const ne=n._manifoldHullPoints(G);return G.delete(),ne},n.Manifold.prototype=Object.create(At.prototype),Object.defineProperty(n.Manifold,Symbol.hasInstance,{get:()=>F=>F instanceof At}),n.triangulate=function(F,G=-1){const ne=R(F),me=f(n._Triangulate(ne,G),Ge=>[Ge[0],Ge[1],Ge[2]]);return H(ne),me}};var m=Object.assign({},n),_="";function v(c){return n.locateFile?n.locateFile(c,_):_+c}var y,g,d;if(u){var C=h("fs"),A=h("path");_=h("url").fileURLToPath(new URL("/table-claude/assets/manifold-c2SCfANJ.js",import.meta.url)),y=(c,f)=>(c=qe(c)?new URL(c):A.normalize(c),C.readFileSync(c,f?void 0:"utf8")),d=c=>{var f=y(c,!0);return f.buffer||(f=new Uint8Array(f)),f},g=(c,f,T,R=!0)=>{c=qe(c)?new URL(c):A.normalize(c),C.readFile(c,R?void 0:"utf8",(H,Y)=>{H?T(H):f(R?Y.buffer:Y)})},!n.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(o||l)&&(l?_=self.location.href:typeof document<"u"&&document.currentScript&&(_=document.currentScript.src),i&&(_=i),_.startsWith("blob:")?_="":_=_.substr(0,_.replace(/[?#].*/,"").lastIndexOf("/")+1),y=c=>{var f=new XMLHttpRequest;return f.open("GET",c,!1),f.send(null),f.responseText},l&&(d=c=>{var f=new XMLHttpRequest;return f.open("GET",c,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),g=(c,f,T)=>{if(qe(c)){var R=new XMLHttpRequest;R.open("GET",c,!0),R.responseType="arraybuffer",R.onload=()=>{if(R.status==200||R.status==0&&R.response){f(R.response);return}T()},R.onerror=T,R.send(null);return}fetch(c,{credentials:"same-origin"}).then(H=>H.ok?H.arrayBuffer():Promise.reject(new Error(H.status+" : "+H.url))).then(f,T)});n.print||console.log.bind(console);var b=n.printErr||console.error.bind(console);Object.assign(n,m),m=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit;var I;n.wasmBinary&&(I=n.wasmBinary);var L,P=!1,D,M,S,N,j,V,J,se;function Q(){var c=L.buffer;n.HEAP8=D=new Int8Array(c),n.HEAP16=S=new Int16Array(c),n.HEAPU8=M=new Uint8Array(c),n.HEAPU16=N=new Uint16Array(c),n.HEAP32=j=new Int32Array(c),n.HEAPU32=V=new Uint32Array(c),n.HEAPF32=J=new Float32Array(c),n.HEAPF64=se=new Float64Array(c)}var oe=[],q=[],ge=[];function be(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)tt(n.preRun.shift());x(oe)}function Ce(){x(q)}function Xe(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)fe(n.postRun.shift());x(ge)}function tt(c){oe.unshift(c)}function ee(c){q.unshift(c)}function fe(c){ge.unshift(c)}var Ee=0,_e=null;function Be(c){var f;Ee++,(f=n.monitorRunDependencies)==null||f.call(n,Ee)}function st(c){var T;if(Ee--,(T=n.monitorRunDependencies)==null||T.call(n,Ee),Ee==0&&_e){var f=_e;_e=null,f()}}function Ie(c){var T;(T=n.onAbort)==null||T.call(n,c),c="Aborted("+c+")",b(c),P=!0,c+=". Build with -sASSERTIONS for more info.";var f=new WebAssembly.RuntimeError(c);throw s(f),f}var St="data:application/octet-stream;base64,",pt=c=>c.startsWith(St),qe=c=>c.startsWith("file://");function U(){if(n.locateFile){var c="manifold.wasm";return pt(c)?c:v(c)}return new URL("/table-claude/assets/manifold-DAzdCCqa.wasm",import.meta.url).href}var Xt;function Je(c){if(c==Xt&&I)return new Uint8Array(I);if(d)return d(c);throw"both async and sync fetching of the wasm failed"}function nt(c){return I?Promise.resolve().then(()=>Je(c)):new Promise((f,T)=>{g(c,R=>f(new Uint8Array(R)),R=>{try{f(Je(c))}catch(H){T(H)}})})}function Ne(c,f,T){return nt(c).then(R=>WebAssembly.instantiate(R,f)).then(T,R=>{b(`failed to asynchronously prepare wasm: ${R}`),Ie(R)})}function vt(c,f,T,R){return!c&&typeof WebAssembly.instantiateStreaming=="function"&&!pt(f)&&!qe(f)&&!u&&typeof fetch=="function"?fetch(f,{credentials:"same-origin"}).then(H=>{var Y=WebAssembly.instantiateStreaming(H,T);return Y.then(R,function(ae){return b(`wasm streaming compile failed: ${ae}`),b("falling back to ArrayBuffer instantiation"),Ne(f,T,R)})}):Ne(f,T,R)}function Fe(){return{a:Uf}}function w(){var c=Fe();function f(R,H){return vn=R.exports,vn=If(vn),L=vn.J,Q(),Ot=vn.M,ee(vn.K),st(),vn}Be();function T(R){f(R.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(c,f)}catch(R){b(`Module.instantiateWasm callback failed with error: ${R}`),s(R)}return Xt||(Xt=U()),vt(I,Xt,c,T).catch(s),{}}var x=c=>{for(;c.length>0;)c.shift()(n)};function k(c,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":return D[c>>>0];case"i8":return D[c>>>0];case"i16":return S[c>>>1>>>0];case"i32":return j[c>>>2>>>0];case"i64":Ie("to do getValue(i64) use WASM_BIGINT");case"float":return J[c>>>2>>>0];case"double":return se[c>>>3>>>0];case"*":return V[c>>>2>>>0];default:Ie(`invalid type for getValue: ${f}`)}}n.noExitRuntime;function re(c,f,T="i8"){switch(T.endsWith("*")&&(T="*"),T){case"i1":D[c>>>0]=f;break;case"i8":D[c>>>0]=f;break;case"i16":S[c>>>1>>>0]=f;break;case"i32":j[c>>>2>>>0]=f;break;case"i64":Ie("to do setValue(i64) use WASM_BIGINT");case"float":J[c>>>2>>>0]=f;break;case"double":se[c>>>3>>>0]=f;break;case"*":V[c>>>2>>>0]=f;break;default:Ie(`invalid type for setValue: ${T}`)}}class ce{constructor(f){this.excPtr=f,this.ptr=f-24}set_type(f){V[this.ptr+4>>>2>>>0]=f}get_type(){return V[this.ptr+4>>>2>>>0]}set_destructor(f){V[this.ptr+8>>>2>>>0]=f}get_destructor(){return V[this.ptr+8>>>2>>>0]}set_caught(f){f=f?1:0,D[this.ptr+12>>>0]=f}get_caught(){return D[this.ptr+12>>>0]!=0}set_rethrown(f){f=f?1:0,D[this.ptr+13>>>0]=f}get_rethrown(){return D[this.ptr+13>>>0]!=0}init(f,T){this.set_adjusted_ptr(0),this.set_type(f),this.set_destructor(T)}set_adjusted_ptr(f){V[this.ptr+16>>>2>>>0]=f}get_adjusted_ptr(){return V[this.ptr+16>>>2>>>0]}get_exception_ptr(){var f=Qo(this.get_type());if(f)return V[this.excPtr>>>2>>>0];var T=this.get_adjusted_ptr();return T!==0?T:this.excPtr}}var ie=0;function Le(c,f,T){c>>>=0,f>>>=0,T>>>=0;var R=new ce(c);throw R.init(f,T),ie=c,ie}var Te=()=>{Ie("")},we={},Qe=c=>{for(;c.length;){var f=c.pop(),T=c.pop();T(f)}};function pe(c){return this.fromWireType(V[c>>>2>>>0])}var Ae={},Ue={},He={},Pe,Ze=c=>{throw new Pe(c)},Ve=(c,f,T)=>{c.forEach(function(Z){He[Z]=f});function R(Z){var ue=T(Z);ue.length!==c.length&&Ze("Mismatched type converter count");for(var de=0;de<c.length;++de)ut(c[de],ue[de])}var H=new Array(f.length),Y=[],ae=0;f.forEach((Z,ue)=>{Ue.hasOwnProperty(Z)?H[ue]=Ue[Z]:(Y.push(Z),Ae.hasOwnProperty(Z)||(Ae[Z]=[]),Ae[Z].push(()=>{H[ue]=Ue[Z],++ae,ae===Y.length&&R(H)}))}),Y.length===0&&R(H)},_t=function(c){c>>>=0;var f=we[c];delete we[c];var T=f.rawConstructor,R=f.rawDestructor,H=f.fields,Y=H.map(ae=>ae.getterReturnType).concat(H.map(ae=>ae.setterArgumentType));Ve([c],Y,ae=>{var Z={};return H.forEach((ue,de)=>{var ve=ue.fieldName,$e=ae[de],ht=ue.getter,Lt=ue.getterContext,At=ae[de+H.length],xn=ue.setter,Sn=ue.setterContext;Z[ve]={read:F=>$e.fromWireType(ht(Lt,F)),write:(F,G)=>{var ne=[];xn(Sn,F,At.toWireType(ne,G)),Qe(ne)}}}),[{name:f.name,fromWireType:ue=>{var de={};for(var ve in Z)de[ve]=Z[ve].read(ue);return R(ue),de},toWireType:(ue,de)=>{for(var ve in Z)if(!(ve in de))throw new TypeError(`Missing field: "${ve}"`);var $e=T();for(ve in Z)Z[ve].write($e,de[ve]);return ue!==null&&ue.push(R,$e),$e},argPackAdvance:xt,readValueFromPointer:pe,destructorFunction:R}]})};function O(c,f,T,R,H){}var ye=()=>{for(var c=new Array(256),f=0;f<256;++f)c[f]=String.fromCharCode(f);K=c},K,te=c=>{for(var f="",T=c;M[T>>>0];)f+=K[M[T++>>>0]];return f},xe,le=c=>{throw new xe(c)};function Ye(c,f,T={}){var R=f.name;if(c||le(`type "${R}" must have a positive integer typeid pointer`),Ue.hasOwnProperty(c)){if(T.ignoreDuplicateRegistrations)return;le(`Cannot register type '${R}' twice`)}if(Ue[c]=f,delete He[c],Ae.hasOwnProperty(c)){var H=Ae[c];delete Ae[c],H.forEach(Y=>Y())}}function ut(c,f,T={}){if(!("argPackAdvance"in f))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Ye(c,f,T)}var xt=8;function dt(c,f,T,R){c>>>=0,f>>>=0,f=te(f),ut(c,{name:f,fromWireType:function(H){return!!H},toWireType:function(H,Y){return Y?T:R},argPackAdvance:xt,readValueFromPointer:function(H){return this.fromWireType(M[H>>>0])},destructorFunction:null})}var on=c=>({count:c.count,deleteScheduled:c.deleteScheduled,preservePointerOnDelete:c.preservePointerOnDelete,ptr:c.ptr,ptrType:c.ptrType,smartPtr:c.smartPtr,smartPtrType:c.smartPtrType}),ln=c=>{function f(T){return T.$$.ptrType.registeredClass.name}le(f(c)+" instance already deleted")},Di=!1,Sr=c=>{},In=c=>{c.smartPtr?c.smartPtrType.rawDestructor(c.smartPtr):c.ptrType.registeredClass.rawDestructor(c.ptr)},Li=c=>{c.count.value-=1;var f=c.count.value===0;f&&In(c)},Mr=(c,f,T)=>{if(f===T)return c;if(T.baseClass===void 0)return null;var R=Mr(c,f,T.baseClass);return R===null?null:T.downcast(R)},Er={},Ui=()=>Object.keys(di).length,Hr=()=>{var c=[];for(var f in di)di.hasOwnProperty(f)&&c.push(di[f]);return c},Cn=[],Ii=()=>{for(;Cn.length;){var c=Cn.pop();c.$$.deleteScheduled=!1,c.delete()}},ei,Us=c=>{ei=c,Cn.length&&ei&&ei(Ii)},Is=()=>{n.getInheritedInstanceCount=Ui,n.getLiveInheritedInstances=Hr,n.flushPendingDeletes=Ii,n.setDelayFunction=Us},di={},Ns=(c,f)=>{for(f===void 0&&le("ptr should not be undefined");c.baseClass;)f=c.upcast(f),c=c.baseClass;return f},Fs=(c,f)=>(f=Ns(c,f),di[f]),Ni=(c,f)=>{(!f.ptrType||!f.ptr)&&Ze("makeClassHandle requires ptr and ptrType");var T=!!f.smartPtrType,R=!!f.smartPtr;return T!==R&&Ze("Both smartPtrType and smartPtr must be specified"),f.count={value:1},B(Object.create(c,{$$:{value:f,writable:!0}}))};function E(c){var f=this.getPointee(c);if(!f)return this.destructor(c),null;var T=Fs(this.registeredClass,f);if(T!==void 0){if(T.$$.count.value===0)return T.$$.ptr=f,T.$$.smartPtr=c,T.clone();var R=T.clone();return this.destructor(c),R}function H(){return this.isSmartPointer?Ni(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:f,smartPtrType:this,smartPtr:c}):Ni(this.registeredClass.instancePrototype,{ptrType:this,ptr:c})}var Y=this.registeredClass.getActualType(f),ae=Er[Y];if(!ae)return H.call(this);var Z;this.isConst?Z=ae.constPointerType:Z=ae.pointerType;var ue=Mr(f,this.registeredClass,Z.registeredClass);return ue===null?H.call(this):this.isSmartPointer?Ni(Z.registeredClass.instancePrototype,{ptrType:Z,ptr:ue,smartPtrType:this,smartPtr:c}):Ni(Z.registeredClass.instancePrototype,{ptrType:Z,ptr:ue})}var B=c=>typeof FinalizationRegistry>"u"?(B=f=>f,c):(Di=new FinalizationRegistry(f=>{Li(f.$$)}),B=f=>{var T=f.$$,R=!!T.smartPtr;if(R){var H={$$:T};Di.register(f,H,f)}return f},Sr=f=>Di.unregister(f),B(c)),X=()=>{Object.assign($.prototype,{isAliasOf(c){if(!(this instanceof $)||!(c instanceof $))return!1;var f=this.$$.ptrType.registeredClass,T=this.$$.ptr;c.$$=c.$$;for(var R=c.$$.ptrType.registeredClass,H=c.$$.ptr;f.baseClass;)T=f.upcast(T),f=f.baseClass;for(;R.baseClass;)H=R.upcast(H),R=R.baseClass;return f===R&&T===H},clone(){if(this.$$.ptr||ln(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var c=B(Object.create(Object.getPrototypeOf(this),{$$:{value:on(this.$$)}}));return c.$$.count.value+=1,c.$$.deleteScheduled=!1,c},delete(){this.$$.ptr||ln(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&le("Object already scheduled for deletion"),Sr(this),Li(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||ln(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&le("Object already scheduled for deletion"),Cn.push(this),Cn.length===1&&ei&&ei(Ii),this.$$.deleteScheduled=!0,this}})};function $(){}var z=(c,f)=>Object.defineProperty(f,"name",{value:c}),he=(c,f,T)=>{if(c[f].overloadTable===void 0){var R=c[f];c[f]=function(...H){return c[f].overloadTable.hasOwnProperty(H.length)||le(`Function '${T}' called with an invalid number of arguments (${H.length}) - expects one of (${c[f].overloadTable})!`),c[f].overloadTable[H.length].apply(this,H)},c[f].overloadTable=[],c[f].overloadTable[R.argCount]=R}},Se=(c,f,T)=>{n.hasOwnProperty(c)?((T===void 0||n[c].overloadTable!==void 0&&n[c].overloadTable[T]!==void 0)&&le(`Cannot register public name '${c}' twice`),he(n,c,c),n.hasOwnProperty(T)&&le(`Cannot register multiple overloads of a function with the same number of arguments (${T})!`),n[c].overloadTable[T]=f):(n[c]=f,T!==void 0&&(n[c].numArguments=T))},Re=48,De=57,ke=c=>{if(c===void 0)return"_unknown";c=c.replace(/[^a-zA-Z0-9_]/g,"$");var f=c.charCodeAt(0);return f>=Re&&f<=De?`_${c}`:c};function We(c,f,T,R,H,Y,ae,Z){this.name=c,this.constructor=f,this.instancePrototype=T,this.rawDestructor=R,this.baseClass=H,this.getActualType=Y,this.upcast=ae,this.downcast=Z,this.pureVirtualFunctions=[]}var Oe=(c,f,T)=>{for(;f!==T;)f.upcast||le(`Expected null or instance of ${T.name}, got an instance of ${f.name}`),c=f.upcast(c),f=f.baseClass;return c};function at(c,f){if(f===null)return this.isReference&&le(`null is not a valid ${this.name}`),0;f.$$||le(`Cannot pass "${Hs(f)}" as a ${this.name}`),f.$$.ptr||le(`Cannot pass deleted object as a pointer of type ${this.name}`);var T=f.$$.ptrType.registeredClass,R=Oe(f.$$.ptr,T,this.registeredClass);return R}function ft(c,f){var T;if(f===null)return this.isReference&&le(`null is not a valid ${this.name}`),this.isSmartPointer?(T=this.rawConstructor(),c!==null&&c.push(this.rawDestructor,T),T):0;(!f||!f.$$)&&le(`Cannot pass "${Hs(f)}" as a ${this.name}`),f.$$.ptr||le(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&f.$$.ptrType.isConst&&le(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);var R=f.$$.ptrType.registeredClass;if(T=Oe(f.$$.ptr,R,this.registeredClass),this.isSmartPointer)switch(f.$$.smartPtr===void 0&&le("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:f.$$.smartPtrType===this?T=f.$$.smartPtr:le(`Cannot convert argument of type ${f.$$.smartPtrType?f.$$.smartPtrType.name:f.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:T=f.$$.smartPtr;break;case 2:if(f.$$.smartPtrType===this)T=f.$$.smartPtr;else{var H=f.clone();T=this.rawShare(T,Gt.toHandle(()=>H.delete())),c!==null&&c.push(this.rawDestructor,T)}break;default:le("Unsupporting sharing policy")}return T}function bt(c,f){if(f===null)return this.isReference&&le(`null is not a valid ${this.name}`),0;f.$$||le(`Cannot pass "${Hs(f)}" as a ${this.name}`),f.$$.ptr||le(`Cannot pass deleted object as a pointer of type ${this.name}`),f.$$.ptrType.isConst&&le(`Cannot convert argument of type ${f.$$.ptrType.name} to parameter type ${this.name}`);var T=f.$$.ptrType.registeredClass,R=Oe(f.$$.ptr,T,this.registeredClass);return R}var Et=()=>{Object.assign(et.prototype,{getPointee(c){return this.rawGetPointee&&(c=this.rawGetPointee(c)),c},destructor(c){var f;(f=this.rawDestructor)==null||f.call(this,c)},argPackAdvance:xt,readValueFromPointer:pe,fromWireType:E})};function et(c,f,T,R,H,Y,ae,Z,ue,de,ve){this.name=c,this.registeredClass=f,this.isReference=T,this.isConst=R,this.isSmartPointer=H,this.pointeeType=Y,this.sharingPolicy=ae,this.rawGetPointee=Z,this.rawConstructor=ue,this.rawShare=de,this.rawDestructor=ve,!H&&f.baseClass===void 0?R?(this.toWireType=at,this.destructorFunction=null):(this.toWireType=bt,this.destructorFunction=null):this.toWireType=ft}var ze=(c,f,T)=>{n.hasOwnProperty(c)||Ze("Replacing nonexistent public symbol"),n[c].overloadTable!==void 0&&T!==void 0?n[c].overloadTable[T]=f:(n[c]=f,n[c].argCount=T)},Ft=(c,f,T)=>{c=c.replace(/p/g,"i");var R=n["dynCall_"+c];return R(f,...T)},it=[],Ot,gn=c=>{var f=it[c];return f||(c>=it.length&&(it.length=c+1),it[c]=f=Ot.get(c)),f},Kt=(c,f,T=[])=>{if(c.includes("j"))return Ft(c,f,T);var R=gn(f)(...T);return c[0]=="p"?R>>>0:R},ti=(c,f)=>(...T)=>Kt(c,f,T),rt=(c,f)=>{c=te(c);function T(){return c.includes("j")||c.includes("p")?ti(c,f):gn(f)}var R=T();return typeof R!="function"&&le(`unknown function pointer with signature ${c}: ${f}`),R},Qt=(c,f)=>{var T=z(f,function(R){this.name=f,this.message=R;var H=new Error(R).stack;H!==void 0&&(this.stack=this.toString()+`
`+H.replace(/^Error(:[^\n]*)?\n/,""))});return T.prototype=Object.create(c.prototype),T.prototype.constructor=T,T.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},T},Zt,kt=c=>{var f=Jo(c),T=te(f);return Fn(f),T},Bt=(c,f)=>{var T=[],R={};function H(Y){if(!R[Y]&&!Ue[Y]){if(He[Y]){He[Y].forEach(H);return}T.push(Y),R[Y]=!0}}throw f.forEach(H),new Zt(`${c}: `+T.map(kt).join([", "]))};function yr(c,f,T,R,H,Y,ae,Z,ue,de,ve,$e,ht){c>>>=0,f>>>=0,T>>>=0,R>>>=0,H>>>=0,Y>>>=0,ae>>>=0,Z>>>=0,ue>>>=0,de>>>=0,ve>>>=0,$e>>>=0,ht>>>=0,ve=te(ve),Y=rt(H,Y),Z&&(Z=rt(ae,Z)),de&&(de=rt(ue,de)),ht=rt($e,ht);var Lt=ke(ve);Se(Lt,function(){Bt(`Cannot construct ${ve} due to unbound types`,[R])}),Ve([c,f,T],R?[R]:[],At=>{var Ut;At=At[0];var xn,Sn;R?(xn=At.registeredClass,Sn=xn.instancePrototype):Sn=$.prototype;var F=z(ve,function(...en){if(Object.getPrototypeOf(this)!==G)throw new xe("Use 'new' to construct "+ve);if(ne.constructor_body===void 0)throw new xe(ve+" has no accessible constructor");var Rt=ne.constructor_body[en.length];if(Rt===void 0)throw new xe(`Tried to invoke ctor of ${ve} with invalid number of parameters (${en.length}) - expected (${Object.keys(ne.constructor_body).toString()}) parameters instead!`);return Rt.apply(this,en)}),G=Object.create(Sn,{constructor:{value:F}});F.prototype=G;var ne=new We(ve,F,G,ht,xn,Y,Z,de);ne.baseClass&&((Ut=ne.baseClass).__derivedClasses??(Ut.__derivedClasses=[]),ne.baseClass.__derivedClasses.push(ne));var me=new et(ve,ne,!0,!1,!1),Ge=new et(ve+"*",ne,!1,!1,!1),Tt=new et(ve+" const*",ne,!1,!0,!1);return Er[c]={pointerType:Ge,constPointerType:Tt},ze(Lt,F),[me,Ge,Tt]})}var _n=(c,f)=>{for(var T=[],R=0;R<c;R++)T.push(V[f+R*4>>>2>>>0]);return T};function Go(c){for(var f=1;f<c.length;++f)if(c[f]!==null&&c[f].destructorFunction===void 0)return!0;return!1}function Wo(c,f){if(!(c instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof c} which is not a function`);var T=z(c.name||"unknownFunctionName",function(){});T.prototype=c.prototype;var R=new T,H=c.apply(R,f);return H instanceof Object?H:R}function Pu(c,f,T,R){for(var H=Go(c),Y=c.length,ae="",Z="",ue=0;ue<Y-2;++ue)ae+=(ue!==0?", ":"")+"arg"+ue,Z+=(ue!==0?", ":"")+"arg"+ue+"Wired";var de=`
        return function (${ae}) {
        if (arguments.length !== ${Y-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${Y-2}');
        }`;H&&(de+=`var destructors = [];
`);var ve=H?"destructors":"null",$e=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];f&&(de+="var thisWired = classParam['toWireType']("+ve+`, this);
`);for(var ue=0;ue<Y-2;++ue)de+="var arg"+ue+"Wired = argType"+ue+"['toWireType']("+ve+", arg"+ue+`);
`,$e.push("argType"+ue);if(f&&(Z="thisWired"+(Z.length>0?", ":"")+Z),de+=(T||R?"var rv = ":"")+"invoker(fn"+(Z.length>0?", ":"")+Z+`);
`,H)de+=`runDestructors(destructors);
`;else for(var ue=f?1:2;ue<c.length;++ue){var ht=ue===1?"thisWired":"arg"+(ue-2)+"Wired";c[ue].destructorFunction!==null&&(de+=`${ht}_dtor(${ht});
`,$e.push(`${ht}_dtor`))}return T&&(de+=`var ret = retType['fromWireType'](rv);
return ret;
`),de+=`}
`,[$e,de]}function Os(c,f,T,R,H,Y){var ae=f.length;ae<2&&le("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Z=f[1]!==null&&T!==null,ue=Go(f),de=f[0].name!=="void",ve=[c,le,R,H,Qe,f[0],f[1]],$e=0;$e<ae-2;++$e)ve.push(f[$e+2]);if(!ue)for(var $e=Z?1:2;$e<f.length;++$e)f[$e].destructorFunction!==null&&ve.push(f[$e].destructorFunction);let[ht,Lt]=Pu(f,Z,de,Y);ht.push(Lt);var At=Wo(Function,ht)(...ve);return z(c,At)}var Du=function(c,f,T,R,H,Y){c>>>=0,T>>>=0,R>>>=0,H>>>=0,Y>>>=0;var ae=_n(f,T);H=rt(R,H),Ve([],[c],Z=>{Z=Z[0];var ue=`constructor ${Z.name}`;if(Z.registeredClass.constructor_body===void 0&&(Z.registeredClass.constructor_body=[]),Z.registeredClass.constructor_body[f-1]!==void 0)throw new xe(`Cannot register multiple constructors with identical number of parameters (${f-1}) for class '${Z.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Z.registeredClass.constructor_body[f-1]=()=>{Bt(`Cannot construct ${Z.name} due to unbound types`,ae)},Ve([],ae,de=>(de.splice(1,0,null),Z.registeredClass.constructor_body[f-1]=Os(ue,de,null,H,Y),[])),[]})},Xo=c=>{c=c.trim();const f=c.indexOf("(");return f!==-1?c.substr(0,f):c},Lu=function(c,f,T,R,H,Y,ae,Z,ue){c>>>=0,f>>>=0,R>>>=0,H>>>=0,Y>>>=0,ae>>>=0;var de=_n(T,R);f=te(f),f=Xo(f),Y=rt(H,Y),Ve([],[c],ve=>{ve=ve[0];var $e=`${ve.name}.${f}`;f.startsWith("@@")&&(f=Symbol[f.substring(2)]),Z&&ve.registeredClass.pureVirtualFunctions.push(f);function ht(){Bt(`Cannot call ${$e} due to unbound types`,de)}var Lt=ve.registeredClass.instancePrototype,At=Lt[f];return At===void 0||At.overloadTable===void 0&&At.className!==ve.name&&At.argCount===T-2?(ht.argCount=T-2,ht.className=ve.name,Lt[f]=ht):(he(Lt,f,$e),Lt[f].overloadTable[T-2]=ht),Ve([],de,xn=>{var Sn=Os($e,xn,ve,Y,ae,ue);return Lt[f].overloadTable===void 0?(Sn.argCount=T-2,Lt[f]=Sn):Lt[f].overloadTable[T-2]=Sn,[]}),[]})},Bs=[],Nn=[];function zs(c){c>>>=0,c>9&&--Nn[c+1]===0&&(Nn[c]=void 0,Bs.push(c))}var Uu=()=>Nn.length/2-5-Bs.length,Iu=()=>{Nn.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=Uu},Gt={toValue:c=>(c||le("Cannot use deleted val. handle = "+c),Nn[c]),toHandle:c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const f=Bs.pop()||Nn.length;return Nn[f]=c,Nn[f+1]=1,f}}}},Nu={name:"emscripten::val",fromWireType:c=>{var f=Gt.toValue(c);return zs(c),f},toWireType:(c,f)=>Gt.toHandle(f),argPackAdvance:xt,readValueFromPointer:pe,destructorFunction:null};function $o(c){return c>>>=0,ut(c,Nu)}var Fu=(c,f,T)=>{switch(f){case 1:return T?function(R){return this.fromWireType(D[R>>>0])}:function(R){return this.fromWireType(M[R>>>0])};case 2:return T?function(R){return this.fromWireType(S[R>>>1>>>0])}:function(R){return this.fromWireType(N[R>>>1>>>0])};case 4:return T?function(R){return this.fromWireType(j[R>>>2>>>0])}:function(R){return this.fromWireType(V[R>>>2>>>0])};default:throw new TypeError(`invalid integer width (${f}): ${c}`)}};function Ou(c,f,T,R){c>>>=0,f>>>=0,T>>>=0,f=te(f);function H(){}H.values={},ut(c,{name:f,constructor:H,fromWireType:function(Y){return this.constructor.values[Y]},toWireType:(Y,ae)=>ae.value,argPackAdvance:xt,readValueFromPointer:Fu(f,T,R),destructorFunction:null}),Se(f,H)}var Vr=(c,f)=>{var T=Ue[c];return T===void 0&&le(`${f} has unknown type ${kt(c)}`),T};function Bu(c,f,T){c>>>=0,f>>>=0;var R=Vr(c,"enum");f=te(f);var H=R.constructor,Y=Object.create(R.constructor.prototype,{value:{value:T},constructor:{value:z(`${R.name}_${f}`,function(){})}});H.values[T]=Y,H[f]=Y}var Hs=c=>{if(c===null)return"null";var f=typeof c;return f==="object"||f==="array"||f==="function"?c.toString():""+c},zu=(c,f)=>{switch(f){case 4:return function(T){return this.fromWireType(J[T>>>2>>>0])};case 8:return function(T){return this.fromWireType(se[T>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${c}`)}},Hu=function(c,f,T){c>>>=0,f>>>=0,T>>>=0,f=te(f),ut(c,{name:f,fromWireType:R=>R,toWireType:(R,H)=>H,argPackAdvance:xt,readValueFromPointer:zu(f,T),destructorFunction:null})};function Vu(c,f,T,R,H,Y,ae){c>>>=0,T>>>=0,R>>>=0,H>>>=0,Y>>>=0;var Z=_n(f,T);c=te(c),c=Xo(c),H=rt(R,H),Se(c,function(){Bt(`Cannot call ${c} due to unbound types`,Z)},f-1),Ve([],Z,ue=>{var de=[ue[0],null].concat(ue.slice(1));return ze(c,Os(c,de,null,H,Y,ae),f-1),[]})}var ku=(c,f,T)=>{switch(f){case 1:return T?R=>D[R>>>0]:R=>M[R>>>0];case 2:return T?R=>S[R>>>1>>>0]:R=>N[R>>>1>>>0];case 4:return T?R=>j[R>>>2>>>0]:R=>V[R>>>2>>>0];default:throw new TypeError(`invalid integer width (${f}): ${c}`)}};function Gu(c,f,T,R,H){c>>>=0,f>>>=0,T>>>=0,f=te(f);var Y=ve=>ve;if(R===0){var ae=32-8*T;Y=ve=>ve<<ae>>>ae}var Z=f.includes("unsigned"),ue=(ve,$e)=>{},de;Z?de=function(ve,$e){return ue($e,this.name),$e>>>0}:de=function(ve,$e){return ue($e,this.name),$e},ut(c,{name:f,fromWireType:Y,toWireType:de,argPackAdvance:xt,readValueFromPointer:ku(f,T,R!==0),destructorFunction:null})}function Wu(c,f,T){c>>>=0,T>>>=0;var R=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],H=R[f];function Y(ae){var Z=V[ae>>>2>>>0],ue=V[ae+4>>>2>>>0];return new H(D.buffer,ue,Z)}T=te(T),ut(c,{name:T,fromWireType:Y,argPackAdvance:xt,readValueFromPointer:Y},{ignoreDuplicateRegistrations:!0})}function Xu(c,f){c>>>=0,$o(c)}var $u=(c,f,T,R)=>{if(T>>>=0,!(R>0))return 0;for(var H=T,Y=T+R-1,ae=0;ae<c.length;++ae){var Z=c.charCodeAt(ae);if(Z>=55296&&Z<=57343){var ue=c.charCodeAt(++ae);Z=65536+((Z&1023)<<10)|ue&1023}if(Z<=127){if(T>=Y)break;f[T++>>>0]=Z}else if(Z<=2047){if(T+1>=Y)break;f[T++>>>0]=192|Z>>6,f[T++>>>0]=128|Z&63}else if(Z<=65535){if(T+2>=Y)break;f[T++>>>0]=224|Z>>12,f[T++>>>0]=128|Z>>6&63,f[T++>>>0]=128|Z&63}else{if(T+3>=Y)break;f[T++>>>0]=240|Z>>18,f[T++>>>0]=128|Z>>12&63,f[T++>>>0]=128|Z>>6&63,f[T++>>>0]=128|Z&63}}return f[T>>>0]=0,T-H},qu=(c,f,T)=>$u(c,M,f,T),Yu=c=>{for(var f=0,T=0;T<c.length;++T){var R=c.charCodeAt(T);R<=127?f++:R<=2047?f+=2:R>=55296&&R<=57343?(f+=4,++T):f+=3}return f},qo=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,ju=(c,f,T)=>{f>>>=0;for(var R=f+T,H=f;c[H]&&!(H>=R);)++H;if(H-f>16&&c.buffer&&qo)return qo.decode(c.subarray(f,H));for(var Y="";f<H;){var ae=c[f++];if(!(ae&128)){Y+=String.fromCharCode(ae);continue}var Z=c[f++]&63;if((ae&224)==192){Y+=String.fromCharCode((ae&31)<<6|Z);continue}var ue=c[f++]&63;if((ae&240)==224?ae=(ae&15)<<12|Z<<6|ue:ae=(ae&7)<<18|Z<<12|ue<<6|c[f++]&63,ae<65536)Y+=String.fromCharCode(ae);else{var de=ae-65536;Y+=String.fromCharCode(55296|de>>10,56320|de&1023)}}return Y},Ku=(c,f)=>(c>>>=0,c?ju(M,c,f):"");function Zu(c,f){c>>>=0,f>>>=0,f=te(f);var T=f==="std::string";ut(c,{name:f,fromWireType(R){var H=V[R>>>2>>>0],Y=R+4,ae;if(T)for(var Z=Y,ue=0;ue<=H;++ue){var de=Y+ue;if(ue==H||M[de>>>0]==0){var ve=de-Z,$e=Ku(Z,ve);ae===void 0?ae=$e:(ae+="\0",ae+=$e),Z=de+1}}else{for(var ht=new Array(H),ue=0;ue<H;++ue)ht[ue]=String.fromCharCode(M[Y+ue>>>0]);ae=ht.join("")}return Fn(R),ae},toWireType(R,H){H instanceof ArrayBuffer&&(H=new Uint8Array(H));var Y,ae=typeof H=="string";ae||H instanceof Uint8Array||H instanceof Uint8ClampedArray||H instanceof Int8Array||le("Cannot pass non-string to std::string"),T&&ae?Y=Yu(H):Y=H.length;var Z=Ws(4+Y+1),ue=Z+4;if(V[Z>>>2>>>0]=Y,T&&ae)qu(H,ue,Y+1);else if(ae)for(var de=0;de<Y;++de){var ve=H.charCodeAt(de);ve>255&&(Fn(ue),le("String has UTF-16 code units that do not fit in 8 bits")),M[ue+de>>>0]=ve}else for(var de=0;de<Y;++de)M[ue+de>>>0]=H[de];return R!==null&&R.push(Fn,Z),Z},argPackAdvance:xt,readValueFromPointer:pe,destructorFunction(R){Fn(R)}})}var Yo=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Ju=(c,f)=>{for(var T=c,R=T>>1,H=R+f/2;!(R>=H)&&N[R>>>0];)++R;if(T=R<<1,T-c>32&&Yo)return Yo.decode(M.subarray(c>>>0,T>>>0));for(var Y="",ae=0;!(ae>=f/2);++ae){var Z=S[c+ae*2>>>1>>>0];if(Z==0)break;Y+=String.fromCharCode(Z)}return Y},Qu=(c,f,T)=>{if(T??(T=2147483647),T<2)return 0;T-=2;for(var R=f,H=T<c.length*2?T/2:c.length,Y=0;Y<H;++Y){var ae=c.charCodeAt(Y);S[f>>>1>>>0]=ae,f+=2}return S[f>>>1>>>0]=0,f-R},ef=c=>c.length*2,tf=(c,f)=>{for(var T=0,R="";!(T>=f/4);){var H=j[c+T*4>>>2>>>0];if(H==0)break;if(++T,H>=65536){var Y=H-65536;R+=String.fromCharCode(55296|Y>>10,56320|Y&1023)}else R+=String.fromCharCode(H)}return R},nf=(c,f,T)=>{if(f>>>=0,T??(T=2147483647),T<4)return 0;for(var R=f,H=R+T-4,Y=0;Y<c.length;++Y){var ae=c.charCodeAt(Y);if(ae>=55296&&ae<=57343){var Z=c.charCodeAt(++Y);ae=65536+((ae&1023)<<10)|Z&1023}if(j[f>>>2>>>0]=ae,f+=4,f+4>H)break}return j[f>>>2>>>0]=0,f-R},rf=c=>{for(var f=0,T=0;T<c.length;++T){var R=c.charCodeAt(T);R>=55296&&R<=57343&&++T,f+=4}return f},sf=function(c,f,T){c>>>=0,f>>>=0,T>>>=0,T=te(T);var R,H,Y,ae;f===2?(R=Ju,H=Qu,ae=ef,Y=Z=>N[Z>>>1>>>0]):f===4&&(R=tf,H=nf,ae=rf,Y=Z=>V[Z>>>2>>>0]),ut(c,{name:T,fromWireType:Z=>{for(var ue=V[Z>>>2>>>0],de,ve=Z+4,$e=0;$e<=ue;++$e){var ht=Z+4+$e*f;if($e==ue||Y(ht)==0){var Lt=ht-ve,At=R(ve,Lt);de===void 0?de=At:(de+="\0",de+=At),ve=ht+f}}return Fn(Z),de},toWireType:(Z,ue)=>{typeof ue!="string"&&le(`Cannot pass non-string to C++ string type ${T}`);var de=ae(ue),ve=Ws(4+de+f);return V[ve>>>2>>>0]=de/f,H(ue,ve+4,de+f),Z!==null&&Z.push(Fn,ve),ve},argPackAdvance:xt,readValueFromPointer:pe,destructorFunction(Z){Fn(Z)}})};function af(c,f,T,R,H,Y){c>>>=0,f>>>=0,T>>>=0,R>>>=0,H>>>=0,Y>>>=0,we[c]={name:te(f),rawConstructor:rt(T,R),rawDestructor:rt(H,Y),fields:[]}}function of(c,f,T,R,H,Y,ae,Z,ue,de){c>>>=0,f>>>=0,T>>>=0,R>>>=0,H>>>=0,Y>>>=0,ae>>>=0,Z>>>=0,ue>>>=0,de>>>=0,we[c].fields.push({fieldName:te(f),getterReturnType:T,getter:rt(R,H),getterContext:Y,setterArgumentType:ae,setter:rt(Z,ue),setterContext:de})}var lf=function(c,f){c>>>=0,f>>>=0,f=te(f),ut(c,{isVoid:!0,name:f,argPackAdvance:0,fromWireType:()=>{},toWireType:(T,R)=>{}})};function cf(c,f,T){return c>>>=0,f>>>=0,T>>>=0,M.copyWithin(c>>>0,f>>>0,f+T>>>0)}var jo=(c,f,T)=>{var R=[],H=c.toWireType(R,T);return R.length&&(V[f>>>2>>>0]=Gt.toHandle(R)),H};function uf(c,f,T){return c>>>=0,f>>>=0,T>>>=0,c=Gt.toValue(c),f=Vr(f,"emval::as"),jo(f,T,c)}var ff={},Ko=c=>{var f=ff[c];return f===void 0?te(c):f},Vs=[];function hf(c,f,T,R,H){return c>>>=0,f>>>=0,T>>>=0,R>>>=0,H>>>=0,c=Vs[c],f=Gt.toValue(f),T=Ko(T),c(f,f[T],R,H)}function df(c,f){return c>>>=0,f>>>=0,c=Gt.toValue(c),f=Gt.toValue(f),c==f}var pf=c=>{var f=Vs.length;return Vs.push(c),f},mf=(c,f)=>{for(var T=new Array(c),R=0;R<c;++R)T[R]=Vr(V[f+R*4>>>2>>>0],"parameter "+R);return T};function gf(c,f,T){f>>>=0;var R=mf(c,f),H=R.shift();c--;var Y=`return function (obj, func, destructorsRef, args) {
`,ae=0,Z=[];T===0&&Z.push("obj");for(var ue=["retType"],de=[H],ve=0;ve<c;++ve)Z.push("arg"+ve),ue.push("argType"+ve),de.push(R[ve]),Y+=`  var arg${ve} = argType${ve}.readValueFromPointer(args${ae?"+"+ae:""});
`,ae+=R[ve].argPackAdvance;var $e=T===1?"new func":"func.call";Y+=`  var rv = ${$e}(${Z.join(", ")});
`,H.isVoid||(ue.push("emval_returnValue"),de.push(jo),Y+=`  return emval_returnValue(retType, destructorsRef, rv);
`),Y+=`};
`,ue.push(Y);var ht=Wo(Function,ue)(...de),Lt=`methodCaller<(${R.map(At=>At.name).join(", ")}) => ${H.name}>`;return pf(z(Lt,ht))}function _f(c,f){return c>>>=0,f>>>=0,c=Gt.toValue(c),f=Gt.toValue(f),Gt.toHandle(c[f])}function vf(c){c>>>=0,c>9&&(Nn[c+1]+=1)}function xf(c){return c>>>=0,Gt.toHandle(Ko(c))}function Sf(){return Gt.toHandle({})}function Mf(c){c>>>=0;var f=Gt.toValue(c);Qe(f),zs(c)}function Ef(c,f,T){c>>>=0,f>>>=0,T>>>=0,c=Gt.toValue(c),f=Gt.toValue(f),T=Gt.toValue(T),c[f]=T}function yf(c,f){c>>>=0,f>>>=0,c=Vr(c,"_emval_take_value");var T=c.readValueFromPointer(f);return Gt.toHandle(T)}var Tf=()=>4294901760,bf=c=>{var f=L.buffer,T=(c-f.byteLength+65535)/65536;try{return L.grow(T),Q(),1}catch{}};function Af(c){c>>>=0;var f=M.length,T=Tf();if(c>T)return!1;for(var R=(ue,de)=>ue+(de-ue%de)%de,H=1;H<=4;H*=2){var Y=f*(1+.2/H);Y=Math.min(Y,c+100663296);var ae=Math.min(T,R(Math.max(c,Y),65536)),Z=bf(ae);if(Z)return!0}return!1}var Zo=(c,f)=>{c<128?f.push(c):f.push(c%128|128,c>>7)},wf=c=>{for(var f={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},T={parameters:[],results:c[0]=="v"?[]:[f[c[0]]]},R=1;R<c.length;++R)T.parameters.push(f[c[R]]);return T},Rf=(c,f)=>{var T=c.slice(0,1),R=c.slice(1),H={i:127,p:127,j:126,f:125,d:124,e:111};f.push(96),Zo(R.length,f);for(var Y=0;Y<R.length;++Y)f.push(H[R[Y]]);T=="v"?f.push(0):f.push(1,H[T])},Cf=(c,f)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(wf(f),c);var T=[1];Rf(f,T);var R=[0,97,115,109,1,0,0,0,1];Zo(T.length,R),R.push(...T),R.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var H=new WebAssembly.Module(new Uint8Array(R)),Y=new WebAssembly.Instance(H,{e:{f:c}}),ae=Y.exports.f;return ae},Pf=(c,f)=>{if(pi)for(var T=c;T<c+f;T++){var R=gn(T);R&&pi.set(R,T)}},pi,Df=c=>(pi||(pi=new WeakMap,Pf(0,Ot.length)),pi.get(c)||0),ks=[],Lf=()=>{if(ks.length)return ks.pop();try{Ot.grow(1)}catch(c){throw c instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":c}return Ot.length-1},Gs=(c,f)=>{Ot.set(c,f),it[c]=Ot.get(c)},Tr=(c,f)=>{var T=Df(c);if(T)return T;var R=Lf();try{Gs(R,c)}catch(Y){if(!(Y instanceof TypeError))throw Y;var H=Cf(c,f);Gs(R,H)}return pi.set(c,R),R},br=c=>{pi.delete(gn(c)),Gs(c,null),ks.push(c)};Pe=n.InternalError=class extends Error{constructor(f){super(f),this.name="InternalError"}},ye(),xe=n.BindingError=class extends Error{constructor(f){super(f),this.name="BindingError"}},X(),Is(),Et(),Zt=n.UnboundTypeError=Qt(Error,"UnboundTypeError"),Iu();var Uf={r:Le,D:Te,s:_t,C:O,H:dt,o:yr,n:Du,a:Lu,G:$o,y:Ou,h:Bu,A:Hu,d:Vu,p:Gu,g:Wu,q:Xu,z:Zu,x:sf,t:af,i:of,I:lf,F:cf,v:uf,k:hf,b:zs,u:df,l:gf,f:_f,w:vf,c:xf,B:Sf,j:Mf,m:Ef,e:yf,E:Af},vn=w(),Jo=c=>(Jo=vn.L)(c),Ws=c=>(Ws=vn.N)(c),Fn=c=>(Fn=vn.O)(c),Qo=c=>(Qo=vn.P)(c);function If(c){c=Object.assign({},c);var f=R=>H=>R(H)>>>0,T=R=>()=>R()>>>0;return c.L=f(c.L),c.N=f(c.N),c._emscripten_stack_alloc=f(c._emscripten_stack_alloc),c.emscripten_stack_get_current=T(c.emscripten_stack_get_current),c}n.addFunction=Tr,n.removeFunction=br;var kr;_e=function c(){kr||el(),kr||(_e=c)};function el(){if(Ee>0||(be(),Ee>0))return;function c(){kr||(kr=!0,n.calledRun=!0,!P&&(Ce(),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),Xe()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),c()},1)):c()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return el(),t=a,t}})();const iv="/table-claude/assets/manifold-DAzdCCqa.wasm";class Qc{static async get(){return this.wasm!==void 0?this.wasm:(this.wasm=await nv({locateFile:()=>iv}),await this.wasm.setup(),this.wasm)}}It(Qc,"wasm");function rv({center:i,radius:e}){const r=[];for(let s=0;s<12;s++){const a=s*(Math.PI/2)/11;r.push([i[0]+e*Math.cos(a),i[1]+e*Math.sin(a)])}return r}async function Ql(i,e){const{CrossSection:t}=await Qc.get(),n=i[0],r=i[1],s=rv({center:[n/2-e,r/2-e],radius:e}),a=s,o=Array.from(s.map(([p,m])=>[-p,m]));o.reverse();const l=s.map(([p,m])=>[-p,-m]),u=Array.from(s.map(([p,m])=>[p,-m]));u.reverse();const h=[...a,...o,...l,...u];return new t(h)}async function eu(i){const e=(await Ql([i.topWidth,i.topDepth],i.topRadius)).extrude(i.topThickness).translate([0,0,i.legHeight]),t=i.legWidth*.15,r=(await Ql([i.legWidth,i.legWidth],t)).extrude(i.legHeight),s=i.topWidth/2-i.legInset-i.legWidth/2,a=i.topDepth/2-i.legInset-i.legWidth/2,o=[r.translate([+s,+a,0]),r.translate([+s,-a,0]),r.translate([-s,+a,0]),r.translate([-s,-a,0])].reduce((l,u)=>l.add(u));return e.add(o)}const tu=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],nu=i=>{let e="";for(let t=0;t<16;t++)t%4!=3&&(t>0&&(e+=" "),e+=i[t]||0);return e},sv=(i=1,e=tu)=>`    <item objectid="${i}" transform="${nu(e)}" />
`,ec=i=>i?i.toISOString().substring(0,10):"";function av(i,{unit:e="millimeter",title:t="jscad model",author:n="",description:r="",application:s="jscad",creationDate:a=new Date,license:o="",modificationDate:l}={}){i.push(`<?xml version="1.0" encoding="UTF-8"?>
<model unit="${e}" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:slic3rpe="http://schemas.slic3r.org/3mf/2017/06">
  <metadata name="slic3rpe:Version3mf">1</metadata>
  <metadata name="Title">${t}</metadata>
  <metadata name="Designer">${n}</metadata>
  <metadata name="Description">${r||t}</metadata>
  <metadata name="Copyright"></metadata>
  <metadata name="LicenseTerms">${o}</metadata>
  <metadata name="Rating"></metadata>
  <metadata name="CreationDate">${ec(a)}</metadata>
  <metadata name="ModificationDate">${ec(l||a)}</metadata>
  <metadata name="Application">${s}</metadata>
   `)}function ov(i,e,t,n){i.push(`<object id="${e}" type="model"${n==null?"":' name="'+n+'"'}>
`),i.push(` <components>
`),t.forEach(({objectID:r,transform:s})=>{lv(i,r,s)}),i.push(` </components>
`),i.push(`</object>
`)}const lv=(i,e=1,t=tu)=>{i.push(`    <component objectid="${e}" transform="${nu(t)}" />
`)};function cv(i,e,t,n,r,s){i.push(`  <object id="${e}" type="model"${s?' name="'+s+'"':""}>
   <mesh>
    <vertices>
`);for(let a=0;a<t.length;a+=3)i.push(`     <vertex x="${t[a].toPrecision(r)}" y="${t[a+1].toPrecision(r)}" z="${t[a+2].toPrecision(r)}" />
`);i.push(`    </vertices>
    <triangles>
`);for(let a=0;a<n.length;a+=3)i.push(`     <triangle v1="${n[a]}" v2="${n[a+1]}" v3="${n[a+2]}" />
`);return i.push(`    </triangles>
   </mesh>
  </object>
`),i}const tc={name:"[Content_Types].xml",content:`<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" />
<Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml" />
<Default Extension="png" ContentType="image/png" />
</Types>`};function uv({meshes:i=[],components:e=[],items:t=[],precision:n=17,header:r}){const s=[];return av(s,r),s.push(`  <resources>
`),t.length==0&&console.error("3MF empty build! Include items or simple."),i.forEach(({id:a,vertices:o,indices:l,name:u})=>cv(s,a,o,l,n,u)),e.forEach(({id:a,children:o,name:l})=>{ov(s,a,o,l)}),s.push(`  </resources>
`),s.push(`<build>
`),t.forEach(({objectID:a,transform:o})=>{s.push(sv(a,o))}),s.push(`</build>
`),s.push(`</model>
`),s.join("")}class fv{constructor(){this.idSeq=0,this.lines=['<?xml version="1.0" encoding="UTF-8"?>','<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">']}get name(){return"_rels/.rels"}addRel(e,t){this.lines.push(`  <Relationship Target="${e}" Id="rel-${++this.idSeq}" Type="${t}" />`)}add3dModel(e){this.addRel(e,"http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel")}addThumbnail(e){this.addRel(e,"http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail")}get content(){return this.lines.join(`
`)+`
</Relationships>`}}class hv{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,r=[];let s=0;e.traverse(function(d){if(d.isMesh){const C=d.geometry,A=C.index,b=C.getAttribute("position");s+=A!==null?A.count/3:b.count/3,r.push({object3d:d,geometry:C})}});let a,o=80;if(n===!0){const d=s*2+s*3*4*4+80+4,C=new ArrayBuffer(d);a=new DataView(C),a.setUint32(o,s,!0),o+=4}else a="",a+=`solid exported
`;const l=new W,u=new W,h=new W,p=new W,m=new W,_=new W;for(let d=0,C=r.length;d<C;d++){const A=r[d].object3d,b=r[d].geometry,I=b.index,L=b.getAttribute("position");if(I!==null)for(let P=0;P<I.count;P+=3){const D=I.getX(P+0),M=I.getX(P+1),S=I.getX(P+2);v(D,M,S,L,A)}else for(let P=0;P<L.count;P+=3){const D=P+0,M=P+1,S=P+2;v(D,M,S,L,A)}}return n===!1&&(a+=`endsolid exported
`),a;function v(d,C,A,b,I){l.fromBufferAttribute(b,d),u.fromBufferAttribute(b,C),h.fromBufferAttribute(b,A),I.isSkinnedMesh===!0&&(I.applyBoneTransform(d,l),I.applyBoneTransform(C,u),I.applyBoneTransform(A,h)),l.applyMatrix4(I.matrixWorld),u.applyMatrix4(I.matrixWorld),h.applyMatrix4(I.matrixWorld),y(l,u,h),g(l),g(u),g(h),n===!0?(a.setUint16(o,0,!0),o+=2):(a+=`		endloop
`,a+=`	endfacet
`)}function y(d,C,A){p.subVectors(A,C),m.subVectors(d,C),p.cross(m).normalize(),_.copy(p).normalize(),n===!0?(a.setFloat32(o,_.x,!0),o+=4,a.setFloat32(o,_.y,!0),o+=4,a.setFloat32(o,_.z,!0),o+=4):(a+="	facet normal "+_.x+" "+_.y+" "+_.z+`
`,a+=`		outer loop
`)}function g(d){n===!0?(a.setFloat32(o,d.x,!0),o+=4,a.setFloat32(o,d.y,!0),o+=4,a.setFloat32(o,d.z,!0),o+=4):a+="			vertex "+d.x+" "+d.y+" "+d.z+`
`}}}class dv{parse(e){let t="",n=0,r=0,s=0;const a=new W,o=new gt,l=new W,u=new ct,h=[];function p(v){let y=0,g=0,d=0;const C=v.geometry,A=new je,b=C.getAttribute("position"),I=C.getAttribute("normal"),L=C.getAttribute("uv"),P=C.getIndex();if(t+="o "+v.name+`
`,v.material&&v.material.name&&(t+="usemtl "+v.material.name+`
`),b!==void 0)for(let D=0,M=b.count;D<M;D++,y++)a.fromBufferAttribute(b,D),a.applyMatrix4(v.matrixWorld),t+="v "+a.x+" "+a.y+" "+a.z+`
`;if(L!==void 0)for(let D=0,M=L.count;D<M;D++,d++)u.fromBufferAttribute(L,D),t+="vt "+u.x+" "+u.y+`
`;if(I!==void 0){A.getNormalMatrix(v.matrixWorld);for(let D=0,M=I.count;D<M;D++,g++)l.fromBufferAttribute(I,D),l.applyMatrix3(A).normalize(),t+="vn "+l.x+" "+l.y+" "+l.z+`
`}if(P!==null)for(let D=0,M=P.count;D<M;D+=3){for(let S=0;S<3;S++){const N=P.getX(D+S)+1;h[S]=n+N+(I||L?"/"+(L?r+N:"")+(I?"/"+(s+N):""):"")}t+="f "+h.join(" ")+`
`}else for(let D=0,M=b.count;D<M;D+=3){for(let S=0;S<3;S++){const N=D+S+1;h[S]=n+N+(I||L?"/"+(L?r+N:"")+(I?"/"+(s+N):""):"")}t+="f "+h.join(" ")+`
`}n+=y,r+=d,s+=g}function m(v){let y=0;const g=v.geometry,d=v.type,C=g.getAttribute("position");if(t+="o "+v.name+`
`,C!==void 0)for(let A=0,b=C.count;A<b;A++,y++)a.fromBufferAttribute(C,A),a.applyMatrix4(v.matrixWorld),t+="v "+a.x+" "+a.y+" "+a.z+`
`;if(d==="Line"){t+="l ";for(let A=1,b=C.count;A<=b;A++)t+=n+A+" ";t+=`
`}if(d==="LineSegments")for(let A=1,b=A+1,I=C.count;A<I;A+=2,b=A+1)t+="l "+(n+A)+" "+(n+b)+`
`;n+=y}function _(v){let y=0;const g=v.geometry,d=g.getAttribute("position"),C=g.getAttribute("color");if(t+="o "+v.name+`
`,d!==void 0){for(let A=0,b=d.count;A<b;A++,y++)a.fromBufferAttribute(d,A),a.applyMatrix4(v.matrixWorld),t+="v "+a.x+" "+a.y+" "+a.z,C!==void 0&&(o.fromBufferAttribute(C,A),lt.fromWorkingColorSpace(o,fn),t+=" "+o.r+" "+o.g+" "+o.b),t+=`
`;t+="p ";for(let A=1,b=d.count;A<=b;A++)t+=n+A+" ";t+=`
`}n+=y}return e.traverse(function(v){v.isMesh===!0&&p(v),v.isLine===!0&&m(v),v.isPoints===!0&&_(v)}),t}}var jt=Uint8Array,dn=Uint16Array,Po=Int32Array,Do=new jt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Lo=new jt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),nc=new jt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),iu=function(i,e){for(var t=new dn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Po(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},ru=iu(Do,2),pv=ru.b,uo=ru.r;pv[28]=258,uo[258]=28;var mv=iu(Lo,0),ic=mv.r,fo=new dn(32768);for(var Mt=0;Mt<32768;++Mt){var li=(Mt&43690)>>1|(Mt&21845)<<1;li=(li&52428)>>2|(li&13107)<<2,li=(li&61680)>>4|(li&3855)<<4,fo[Mt]=((li&65280)>>8|(li&255)<<8)>>1}var Ir=function(i,e,t){for(var n=i.length,r=0,s=new dn(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new dn(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new dn(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var u=r<<4|i[r],h=e-i[r],p=a[i[r]-1]++<<h,m=p|(1<<h)-1;p<=m;++p)o[fo[p]>>l]=u}else for(o=new dn(n),r=0;r<n;++r)i[r]&&(o[r]=fo[a[i[r]-1]++]>>15-i[r]);return o},Ri=new jt(288);for(var Mt=0;Mt<144;++Mt)Ri[Mt]=8;for(var Mt=144;Mt<256;++Mt)Ri[Mt]=9;for(var Mt=256;Mt<280;++Mt)Ri[Mt]=7;for(var Mt=280;Mt<288;++Mt)Ri[Mt]=8;var Ts=new jt(32);for(var Mt=0;Mt<32;++Mt)Ts[Mt]=5;var gv=Ir(Ri,9,0),_v=Ir(Ts,5,0),su=function(i){return(i+7)/8|0},au=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new jt(i.subarray(e,t))},vv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ps=function(i,e,t){var n=new Error(e||vv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Ps),!t)throw n;return n},kn=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},Dr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},Ma=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:lu,l:0};if(r==1){var a=new jt(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(I,L){return I.f-L.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],u=0,h=1,p=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};h!=r-1;)o=t[t[u].f<t[p].f?u++:p++],l=t[u!=h&&t[u].f<t[p].f?u++:p++],t[h++]={s:-1,f:o.f+l.f,l:o,r:l};for(var m=s[0].s,n=1;n<r;++n)s[n].s>m&&(m=s[n].s);var _=new dn(m+1),v=ho(t[h-1],_,0);if(v>e){var n=0,y=0,g=v-e,d=1<<g;for(s.sort(function(L,P){return _[P.s]-_[L.s]||L.f-P.f});n<r;++n){var C=s[n].s;if(_[C]>e)y+=d-(1<<v-_[C]),_[C]=e;else break}for(y>>=g;y>0;){var A=s[n].s;_[A]<e?y-=1<<e-_[A]++-1:++n}for(;n>=0&&y;--n){var b=s[n].s;_[b]==e&&(--_[b],++y)}v=e}return{t:new jt(_),l:v}},ho=function(i,e,t){return i.s==-1?Math.max(ho(i.l,e,t+1),ho(i.r,e,t+1)):e[i.s]=t},rc=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new dn(++e),n=0,r=i[0],s=1,a=function(l){t[n++]=l},o=1;o<=e;++o)if(i[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=i[o]}return{c:t.subarray(0,n),n:e}},Lr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},ou=function(i,e,t){var n=t.length,r=su(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},sc=function(i,e,t,n,r,s,a,o,l,u,h){kn(e,h++,t),++r[256];for(var p=Ma(r,15),m=p.t,_=p.l,v=Ma(s,15),y=v.t,g=v.l,d=rc(m),C=d.c,A=d.n,b=rc(y),I=b.c,L=b.n,P=new dn(19),D=0;D<C.length;++D)++P[C[D]&31];for(var D=0;D<I.length;++D)++P[I[D]&31];for(var M=Ma(P,7),S=M.t,N=M.l,j=19;j>4&&!S[nc[j-1]];--j);var V=u+5<<3,J=Lr(r,Ri)+Lr(s,Ts)+a,se=Lr(r,m)+Lr(s,y)+a+14+3*j+Lr(P,S)+2*P[16]+3*P[17]+7*P[18];if(l>=0&&V<=J&&V<=se)return ou(e,h,i.subarray(l,l+u));var Q,oe,q,ge;if(kn(e,h,1+(se<J)),h+=2,se<J){Q=Ir(m,_,0),oe=m,q=Ir(y,g,0),ge=y;var be=Ir(S,N,0);kn(e,h,A-257),kn(e,h+5,L-1),kn(e,h+10,j-4),h+=14;for(var D=0;D<j;++D)kn(e,h+3*D,S[nc[D]]);h+=3*j;for(var Ce=[C,I],Xe=0;Xe<2;++Xe)for(var tt=Ce[Xe],D=0;D<tt.length;++D){var ee=tt[D]&31;kn(e,h,be[ee]),h+=S[ee],ee>15&&(kn(e,h,tt[D]>>5&127),h+=tt[D]>>12)}}else Q=gv,oe=Ri,q=_v,ge=Ts;for(var D=0;D<o;++D){var fe=n[D];if(fe>255){var ee=fe>>18&31;Dr(e,h,Q[ee+257]),h+=oe[ee+257],ee>7&&(kn(e,h,fe>>23&31),h+=Do[ee]);var Ee=fe&31;Dr(e,h,q[Ee]),h+=ge[Ee],Ee>3&&(Dr(e,h,fe>>5&8191),h+=Lo[Ee])}else Dr(e,h,Q[fe]),h+=oe[fe]}return Dr(e,h,Q[256]),h+oe[256]},xv=new Po([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),lu=new jt(0),Sv=function(i,e,t,n,r,s){var a=s.z||i.length,o=new jt(n+a+5*(1+Math.ceil(a/7e3))+r),l=o.subarray(n,o.length-r),u=s.l,h=(s.r||0)&7;if(e){h&&(l[0]=s.r>>3);for(var p=xv[e-1],m=p>>13,_=p&8191,v=(1<<t)-1,y=s.p||new dn(32768),g=s.h||new dn(v+1),d=Math.ceil(t/3),C=2*d,A=function(U){return(i[U]^i[U+1]<<d^i[U+2]<<C)&v},b=new Po(25e3),I=new dn(288),L=new dn(32),P=0,D=0,M=s.i||0,S=0,N=s.w||0,j=0;M+2<a;++M){var V=A(M),J=M&32767,se=g[V];if(y[J]=se,g[V]=J,N<=M){var Q=a-M;if((P>7e3||S>24576)&&(Q>423||!u)){h=sc(i,l,0,b,I,L,D,S,j,M-j,h),S=P=D=0,j=M;for(var oe=0;oe<286;++oe)I[oe]=0;for(var oe=0;oe<30;++oe)L[oe]=0}var q=2,ge=0,be=_,Ce=J-se&32767;if(Q>2&&V==A(M-Ce))for(var Xe=Math.min(m,Q)-1,tt=Math.min(32767,M),ee=Math.min(258,Q);Ce<=tt&&--be&&J!=se;){if(i[M+q]==i[M+q-Ce]){for(var fe=0;fe<ee&&i[M+fe]==i[M+fe-Ce];++fe);if(fe>q){if(q=fe,ge=Ce,fe>Xe)break;for(var Ee=Math.min(Ce,fe-2),_e=0,oe=0;oe<Ee;++oe){var Be=M-Ce+oe&32767,st=y[Be],Ie=Be-st&32767;Ie>_e&&(_e=Ie,se=Be)}}}J=se,se=y[J],Ce+=J-se&32767}if(ge){b[S++]=268435456|uo[q]<<18|ic[ge];var St=uo[q]&31,pt=ic[ge]&31;D+=Do[St]+Lo[pt],++I[257+St],++L[pt],N=M+q,++P}else b[S++]=i[M],++I[i[M]]}}for(M=Math.max(M,N);M<a;++M)b[S++]=i[M],++I[i[M]];h=sc(i,l,u,b,I,L,D,S,j,M-j,h),u||(s.r=h&7|l[h/8|0]<<3,h-=7,s.h=g,s.p=y,s.i=M,s.w=N)}else{for(var M=s.w||0;M<a+u;M+=65535){var qe=M+65535;qe>=a&&(l[h/8|0]=u,qe=a),h=ou(l,h+1,i.subarray(M,qe))}s.i=a}return au(o,0,n+su(h)+r)},Mv=function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i}(),Ev=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Mv[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},cu=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=n+=t[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},uu=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new jt(s.length+i.length);a.set(s),a.set(i,s.length),i=a,r.w=s.length}return Sv(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},fu=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},zt=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},yv=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var r=cu();r.p(e.dictionary),zt(i,2,r.d())}};function Tv(i,e){return uu(i,e||{},0,0)}function R0(i,e){e||(e={});var t=cu();t.p(i);var n=uu(i,e,e.dictionary?6:2,4);return yv(n,e),zt(n,n.length-4,t.d()),n}var hu=function(i,e,t,n){for(var r in i){var s=i[r],a=e+r,o=n;Array.isArray(s)&&(o=fu(n,s[1]),s=s[0]),s instanceof jt?t[a]=[s,o]:(t[a+="/"]=[new jt(0),o],hu(s,a,t,n))}},ac=typeof TextEncoder<"u"&&new TextEncoder,bv=typeof TextDecoder<"u"&&new TextDecoder,Av=0;try{bv.decode(lu,{stream:!0}),Av=1}catch{}function Nr(i,e){var t;if(ac)return ac.encode(i);for(var n=i.length,r=new jt(i.length+(i.length>>1)),s=0,a=function(u){r[s++]=u},t=0;t<n;++t){if(s+5>r.length){var o=new jt(s+8+(n-t<<1));o.set(r),r=o}var l=i.charCodeAt(t);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++t)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return au(r,0,s)}var po=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&Ps(9),e+=n+4}return e},oc=function(i,e,t,n,r,s,a,o){var l=n.length,u=t.extra,h=o&&o.length,p=po(u);zt(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var m=new Date(t.mtime==null?Date.now():t.mtime),_=m.getFullYear()-1980;if((_<0||_>119)&&Ps(10),zt(i,e,_<<25|m.getMonth()+1<<21|m.getDate()<<16|m.getHours()<<11|m.getMinutes()<<5|m.getSeconds()>>1),e+=4,s!=-1&&(zt(i,e,t.crc),zt(i,e+4,s<0?-s-2:s),zt(i,e+8,t.size)),zt(i,e+12,l),zt(i,e+14,p),e+=16,a!=null&&(zt(i,e,h),zt(i,e+6,t.attrs),zt(i,e+10,a),e+=14),i.set(n,e),e+=l,p)for(var v in u){var y=u[v],g=y.length;zt(i,e,+v),zt(i,e+2,g),i.set(y,e+4),e+=4+g}return h&&(i.set(o,e),e+=h),e},wv=function(i,e,t,n,r){zt(i,e,101010256),zt(i,e+8,t),zt(i,e+10,t),zt(i,e+12,n),zt(i,e+16,r)};function Rv(i,e){e||(e={});var t={},n=[];hu(i,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],l=o[0],u=o[1],h=u.level==0?0:8,p=Nr(a),m=p.length,_=u.comment,v=_&&Nr(_),y=v&&v.length,g=po(u.extra);m>65535&&Ps(11);var d=h?Tv(l,u):l,C=d.length,A=Ev();A.p(l),n.push(fu(u,{size:l.length,crc:A.d(),c:d,f:p,m:v,u:m!=a.length||v&&_.length!=y,o:r,compression:h})),r+=30+m+g+C,s+=76+2*(m+g)+(y||0)+C}for(var b=new jt(s+22),I=r,L=s-r,P=0;P<n.length;++P){var p=n[P];oc(b,p.o,p,p.f,p.u,p.c.length);var D=30+p.f.length+po(p.extra);b.set(p.c,p.o+D),oc(b,r,p,p.f,p.u,p.c.length,p.o,p.m),r+=16+D+(p.m?p.m.length:0)}return wv(b,r,n.length,L,I),b}function Cv(i){const e=i.getMesh(),t=e.numProp===3?e.vertProperties:new Float32Array(e.numVert*3);if(e.numProp>3)for(let l=0;l<e.numVert;++l)for(let u=0;u<3;++u)t[l*3+u]=e.vertProperties[l*e.numProp+u];const n={meshes:[{vertices:t,indices:e.triVerts,id:"0"}],components:[],items:[{objectID:"0"}],precision:7,header:{unit:"millimeter",title:"skapa-ikea-skadis",description:"",application:""}},r=uv(n),s={},a=new fv;a.add3dModel("3D/3dmodel.model"),s["3D/3dmodel.model"]=Nr(r),s[tc.name]=Nr(tc.content),s[a.name]=Nr(a.content);const o=Rv(s);return new Blob([o],{type:"application/vnd.ms-package.3dmanufacturing-3dmodel+xml"})}function Pv(i){const e=Uo(i);e.computeVertexNormals();const t=new hn(e),n=new hv().parse(t,{binary:!0});return new Blob([n.buffer],{type:"model/stl"})}function Dv(i){const e=Uo(i);e.computeVertexNormals();const t=new hn(e),n=new dv().parse(t);return new Blob([n],{type:"text/plain"})}function Uo(i){const e=i.getMesh(),t=new Qn,n=new Float32Array(3*e.triVerts.length);return e.triVerts.forEach((r,s)=>{n[3*s+0]=e.vertProperties[3*r+0],n[3*s+1]=e.vertProperties[3*r+1],n[3*s+2]=e.vertProperties[3*r+2]}),t.setAttribute("position",new Rn(n,3)),t}class Lv{constructor(){It(this,"loading")}load(e,t){this.loading={};const n=this.loading;e.then(r=>{n.result={tmf:{blob:Cv(r),filename:t+".3mf"},stl:{blob:Pv(r),filename:t+".stl"},obj:{blob:Dv(r),filename:t+".obj"}}})}take(){var t;const e=(t=this.loading)==null?void 0:t.result;return e!==void 0&&(this.loading=void 0),e}}const lc=.5,Uv=(i,e,t,n)=>(i/=n/2)<1?t/2*i*i*i+e:t/2*((i-=2)*i*i+2)+e,Iv=(i,e,t,n)=>e+t;class ci{constructor(e){It(this,"current");It(this,"animation");this.current=e}startAnimationTo(e,t=Uv){if(this.current===e||this.animation!==void 0&&this.animation.target===e)return;const n=new Ro;n.start(),this.animation={clock:n,start:this.current,target:e,easingFunction:t}}update(){if(this.animation===void 0)return!1;const e=this.animation.clock.getElapsedTime();if(e<lc){const t=this.animation.easingFunction(e,0,1,lc),n=(this.animation.target-this.animation.start)*t;this.current=this.animation.start+n}else this.current=this.animation.target,this.animation=void 0;return!0}}var Nv=Object.defineProperty,Fv=(i,e,t)=>e in i?Nv(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,bs=(i,e,t)=>Fv(i,typeof e!="symbol"?e+"":e,t);const du=class Ss{constructor(e,t){bs(this,"latest"),bs(this,"listeners",[]),t!==void 0&&(this.listeners=t),this.latest=e,this.send(e)}static sequence(e){const t=new Ss(e.map(n=>n.latest));return e.forEach((n,r)=>{n.addListener(s=>{const a=e.map(o=>o.latest);a[r]=s,t.send(a)})}),t}addListener(e){return this.listeners.push(e),e(this.latest)}block(e){const t=new Ss(this.latest);return e.addListener(()=>{t.send(this.latest)}),t}send(e){this.listeners.forEach(t=>t(e)),this.latest=e}update(e){this.send(e(this.latest))}map(e){const t=new Ss(e(this.latest));return this.addListener(n=>{t.send(e(n))}),t}};bs(du,"unchanged",Symbol("unchanged"));let Yt=du;class Dn{constructor(){bs(this,"listeners",[])}static asyncTrigger(e){const t=new Dn;return(async()=>{for(;;){const n=await e.next();if(n.done)return;t.send(n.value)}})(),t}static gen(e){return Dn.asyncTrigger(async function*(){for(;;)yield await e()}())}static watch(e){const t=new Dn;return t.addListener(n=>{e.send(n)}),t}static any(e,t){const n=new Dn;return e.addListener(r=>n.send(r)),t.addListener(r=>n.send(r)),n}addListener(e){this.listeners.push(e)}send(e){this.listeners.forEach(t=>t(e))}set(e){const t=new Dn;return this.addListener(()=>{t.send(e)}),t}map(e){const t=new Dn;return this.addListener(n=>{t.send(e(n))}),t}track(e,t){const n=new Yt(t);return this.addListener(r=>{const s=n.latest,a=e(s,r);n.send(a)}),n}}function Ov(i,e){const t=document.createElement(i);for(const n in e){const r=e[n];if(n==="on:input"){const s=n.substring(3);(r instanceof Dn||r instanceof Yt)&&t.addEventListener(s,()=>{t instanceof HTMLInputElement&&r.send(t.value)});continue}if(n==="on:click"){const s=n.substring(3);(r instanceof Dn||r instanceof Yt)&&t.addEventListener(s,()=>{t instanceof HTMLButtonElement&&r.send(null)});continue}if(typeof r=="string"||typeof r=="number"){n.includes("-")?t.setAttribute(n,String(r)):t[n]=r;continue}if(r instanceof Yt){const s=a=>{if(!["string","number"].includes(typeof a))throw new Error("Don't know how to handle value of type "+typeof r);try{t[n]=a}catch{console.error("Could not set value "+n,t)}};r.addListener(s);continue}throw new Error("Unknown attribute: "+n+", "+r)}return t}function mo(i){if(typeof i=="string")return document.createTextNode(i);if(typeof i=="number")return document.createTextNode(String(i));if(i instanceof HTMLElement)return i;throw new Error("Unsupported value for child: "+i)}function Bv(i){let e=mo(i.latest);return i.addListener(t=>{var n;const r=e;e=mo(t),(n=r.parentNode)==null||n.replaceChild(e,r)}),e}function zv(i,e,t){let n;if(typeof i=="string")n=Ov(i,e);else{if(i instanceof Yt||i instanceof Dn)throw new Error("not implemented");n=i(e)}for(const r of t){let s;r instanceof Yt?s=Bv(r):s=mo(r),n.appendChild(s)}return n}function wt(i,e){if(i===void 0){if(!e.children)throw new Error("Fragment does not have children");if(Array.isArray(e.children))throw new Error("Fragment does not support children: "+JSON.stringify(e.children));if(typeof e.children!="string")throw new Error("Fragment only supports strings, got: "+JSON.stringify(e));return new Text(e.children)}const{children:t,...n}=e,r=Hv(t);return zv(i,n,r)}function Hv(i){return i===void 0?[]:Array.isArray(i)?i:[i]}const nn=wt,Vv=(i,e)=>{const t=wt("input",{type:"range",id:`${i}-range`,min:e.min,max:e.max,"aria-label":`${e.name} slider`}),n=wt("input",{type:"number",id:i,name:i,min:e.sliderMin,max:e.sliderMax,"aria-label":e.name});return{wrapper:nn("div",{className:"range-input-wrapper",children:[wt("label",{htmlFor:i,children:e.name}),t,wt("div",{className:"range-input-value",children:n})]}),range:t,input:n}},pu=(i,e)=>{const t=wt("select",{id:i,name:i,"aria-label":e.name,children:e.options.map(r=>wt("option",{value:r.value,children:r.label}))});return{wrapper:nn("div",{className:"select-input-wrapper",children:[wt("label",{htmlFor:i,children:e.name}),t]}),select:t}};function kv(i){let e=0;return e+=i.topWidth*i.topDepth*i.topThickness,e+=4*i.legWidth*i.legWidth*i.legHeight,e}function Gv(i){const e=(n,r,s)=>2*(n*r+n*s+r*s);let t=0;return t+=e(i.topWidth,i.topDepth,i.topThickness),t+=4*e(i.legWidth,i.legWidth,i.legHeight),t}function Wv(i,e){let t=e.baseMinutes;return t+=i.legInset*e.perLegInsetComplexity,t+=i.topRadius*e.perRadiusComplexity,t}function mu(i,e,t){const n=t.materials[e.woodType],r=n.finishes[e.finish],a=kv(i)/1e3*t.wasteFactor,o=a*n.densityKgPerCm3,u=Gv(i)/1e6,h=a*n.pricePerCm3,p=u*r.pricePerM2,m=Wv(i,t.labor),_=m/60*t.laborRatePerHour,v=h+p+_,y=v*(t.overheadMultiplier-1),g=v+y,d=g*(t.profitMarginPercent/100),C=Math.max(g+d,t.minimumPrice);return{volumeCm3:a,weightKg:o,surfaceAreaM2:u,materialCost:h,finishCost:p,laborMinutes:m,laborCost:_,subtotal:v,overhead:y,profit:d,total:C,currency:t.currency}}const gu={woodType:"oak",finish:"natural"};function fs(i){return{label:wt("span",{className:"quote-row-label",children:i}),value:wt("span",{className:"quote-row-value",children:"--"})}}function Xv(){const i=wt("span",{className:"quote-detail-value",children:"--"}),e=wt("span",{className:"quote-detail-value",children:"--"}),t=wt("span",{className:"quote-detail-value",children:"--"}),n=wt("span",{className:"quote-detail-value",children:"--"}),r=fs("Material"),s=fs("Finish"),a=fs("Labor"),o=fs("Overhead + Margin"),l=wt("span",{className:"quote-total-value",children:"--"}),u=wt("button",{type:"button",className:"quote-pdf-btn",children:"Export PDF Quote"});return{wrapper:nn("div",{className:"quote-panel",children:[wt("h3",{className:"quote-heading",children:"Quote Summary"}),nn("div",{className:"quote-details",children:[nn("div",{className:"quote-detail-row",children:[wt("span",{className:"quote-detail-label",children:"Wood"}),i]}),nn("div",{className:"quote-detail-row",children:[wt("span",{className:"quote-detail-label",children:"Finish"}),e]}),nn("div",{className:"quote-detail-row",children:[wt("span",{className:"quote-detail-label",children:"Volume"}),t]}),nn("div",{className:"quote-detail-row",children:[wt("span",{className:"quote-detail-label",children:"Weight"}),n]})]}),nn("div",{className:"quote-breakdown",children:[nn("div",{className:"quote-row",children:[r.label,r.value]}),nn("div",{className:"quote-row",children:[s.label,s.value]}),nn("div",{className:"quote-row",children:[a.label,a.value]}),nn("div",{className:"quote-row",children:[o.label,o.value]})]}),nn("div",{className:"quote-total",children:[wt("span",{className:"quote-total-label",children:"Total"}),l]}),u]}),materialLabel:i,finishLabel:e,rows:{material:r,finish:s,labor:a,overhead:o},totalValue:l,volumeInfo:t,weightInfo:n,pdfButton:u}}function $v(i,e,t,n){const r=o=>o.toFixed(2),{currency:s}=e,a=s==="EUR"?"€":s;i.materialLabel.textContent=t,i.finishLabel.textContent=n,i.volumeInfo.textContent=`${e.volumeCm3.toFixed(0)} cm³`,i.weightInfo.textContent=`${e.weightKg.toFixed(1)} kg`,i.rows.material.value.textContent=`${a}${r(e.materialCost)}`,i.rows.finish.value.textContent=`${a}${r(e.finishCost)}`,i.rows.labor.value.textContent=`${a}${r(e.laborCost)} (${Math.round(e.laborMinutes)} min)`,i.rows.overhead.value.textContent=`${a}${r(e.overhead+e.profit)}`,i.totalValue.textContent=`${a}${r(e.total)}`}const qv="EUR",Yv=45,jv=1.15,Kv=1.08,Zv=25,Jv=220,Qv={oak:{displayName:"European Oak",pricePerCm3:.012,densityKgPerCm3:67e-5,finishes:{natural:{displayName:"Natural Oil",pricePerM2:8.5},lacquer:{displayName:"Clear Lacquer",pricePerM2:12},"stain-dark":{displayName:"Dark Stain + Lacquer",pricePerM2:18}}},walnut:{displayName:"American Walnut",pricePerCm3:.022,densityKgPerCm3:55e-5,finishes:{natural:{displayName:"Natural Oil",pricePerM2:8.5},lacquer:{displayName:"Clear Lacquer",pricePerM2:12},"stain-dark":{displayName:"Dark Stain + Lacquer",pricePerM2:18}}},beech:{displayName:"European Beech",pricePerCm3:.008,densityKgPerCm3:72e-5,finishes:{natural:{displayName:"Natural Oil",pricePerM2:8.5},whitewash:{displayName:"Whitewash",pricePerM2:15},lacquer:{displayName:"Clear Lacquer",pricePerM2:12}}},pine:{displayName:"Scandinavian Pine",pricePerCm3:.005,densityKgPerCm3:52e-5,finishes:{natural:{displayName:"Natural Oil",pricePerM2:8.5},whitewash:{displayName:"Whitewash",pricePerM2:15},lacquer:{displayName:"Clear Lacquer",pricePerM2:12}}}},e0={baseMinutes:180,perLegInsetComplexity:.5,perRadiusComplexity:1},t0={currency:qv,laborRatePerHour:Yv,overheadMultiplier:jv,wasteFactor:Kv,profitMarginPercent:Zv,minimumPrice:Jv,materials:Qv,labor:e0};an.DEFAULT_UP=new W(0,0,1);const Ds=["topWidth","topDepth","topThickness","topRadius","legHeight","legWidth","legInset"],Io=1200,n0=400,i0=2400,No=800,r0=300,s0=1600,Fo=30,a0=10,o0=100,_u=20,l0=0,c0=100,Oo=720,u0=300,f0=1200,vu=60,h0=20,d0=200,xu=40,p0=0,m0=300,yt={topWidth:new Yt(Io),topDepth:new Yt(No),topThickness:new Yt(Fo),topRadius:new Yt(_u),legHeight:new Yt(Oo),legWidth:new Yt(vu),legInset:new Yt(xu)},Ci=new Yt({...gu}),Ls=new Yt({tag:"static",position:0}),Su=new Lv;async function g0(i,e,t,n,r,s,a){const o=await eu({topWidth:i,topDepth:e,topThickness:t,topRadius:n,legHeight:r,legWidth:s,legInset:a}),l=Uo(o);l.computeVertexNormals(),fr.geometry=l,fr.clear()}Yt.sequence([yt.topWidth,yt.topDepth,yt.topThickness,yt.topRadius,yt.legHeight,yt.legWidth,yt.legInset]).addListener(([i,e,t,n,r,s,a])=>{const o=`table-${i}-${e}-${r}`;Su.load(eu({topWidth:i,topDepth:e,topThickness:t,topRadius:n,legHeight:r,legWidth:s,legInset:a}),o)});let hs=!0;const fr=new hn(new _r(Io,No,Oo+Fo),new gr);async function _0(){const i=new Dt;i.makeRotationAxis(new W(0,0,1),Bo),hr.centerCameraAround(fr,i)}const Bo=.1;fr.rotation.z=Bo;const zo=document.querySelector("canvas"),hr=new ev(zo,fr);let Ea=!0;const dr=new ci(0),Mu=(i,[e,t])=>(i-e)%(t-e)+e;Ls.addListener(i=>{if(i.tag==="static")dr.startAnimationTo(i.position);else if(i.tag==="moving"){const e=2/hr.canvasWidth,t=(i.x-i.startPos[0])*e-i.startRot;dr.startAnimationTo(Mu(t,[-1,1]),Iv)}else i.tag});const Wn={topWidth:new ci(Io),topDepth:new ci(No),topThickness:new ci(Fo),topRadius:new ci(_u),legHeight:new ci(Oo),legWidth:new ci(vu),legInset:new ci(xu)};Ds.forEach(i=>yt[i].addListener(e=>{Wn[i].startAnimationTo(e)}));const cc=document.querySelector("#download"),uc=document.getElementById("download-stl"),fc=document.getElementById("download-obj"),Ho=document.querySelector("#controls"),v0={topWidth:{name:"Top Width",min:n0,max:i0},topDepth:{name:"Top Depth",min:r0,max:s0},topThickness:{name:"Thickness",min:a0,max:o0},topRadius:{name:"Corner Radius",min:l0,max:c0},legHeight:{name:"Leg Height",min:u0,max:f0},legWidth:{name:"Leg Width",min:h0,max:d0},legInset:{name:"Leg Inset",min:p0,max:m0}};Ds.forEach(i=>{const e=v0[i],t=Vv(i,{name:e.name,min:String(e.min),max:String(e.max),sliderMin:String(e.min),sliderMax:String(e.max)});Ho.append(t.wrapper);const n=yt[i];[[t.input,"change"],[t.range,"input"]].forEach(([r,s])=>{n.addListener(a=>{r.value=`${a}`}),r.addEventListener(s,()=>{const a=parseInt(r.value);Number.isNaN(a)||n.send(Math.max(e.min,Math.min(a,e.max)))})}),t.input.addEventListener("focus",()=>{t.input.select()})});const Pi=t0,x0=Object.entries(Pi.materials).map(([i,e])=>({value:i,label:e.displayName})),go=pu("woodType",{name:"Wood",options:x0});Ho.append(go.wrapper);const ir=pu("finishType",{name:"Finish",options:Object.entries(Pi.materials[gu.woodType].finishes).map(([i,e])=>({value:i,label:e.displayName}))});Ho.append(ir.wrapper);go.select.addEventListener("change",()=>{const i=Ci.latest,e=go.select.value,t=Pi.materials[e].finishes;ir.select.innerHTML="";for(const[r,s]of Object.entries(t)){const a=document.createElement("option");a.value=r,a.textContent=s.displayName,ir.select.append(a)}const n=t[i.finish]?i.finish:Object.keys(t)[0];ir.select.value=n,Ci.send({...i,woodType:e,finish:n})});ir.select.addEventListener("change",()=>{const i=Ci.latest;Ci.send({...i,finish:ir.select.value})});const Vo=Xv(),S0=document.getElementById("quote");S0.append(Vo.wrapper);function ko(){const i={topWidth:yt.topWidth.latest,topDepth:yt.topDepth.latest,topThickness:yt.topThickness.latest,topRadius:yt.topRadius.latest,legHeight:yt.legHeight.latest,legWidth:yt.legWidth.latest,legInset:yt.legInset.latest},e=Ci.latest,t=mu(i,e,Pi),n=Pi.materials[e.woodType],r=n.finishes[e.finish];$v(Vo,t,n.displayName,r.displayName)}for(const i of Ds)yt[i].addListener(()=>ko());Ci.addListener(()=>ko());ko();Vo.pdfButton.addEventListener("click",async()=>{const{downloadQuotePDF:i}=await hc(async()=>{const{downloadQuotePDF:s}=await import("./pdf-export-BbpcZ-qF.js");return{downloadQuotePDF:s}},[]),e={topWidth:yt.topWidth.latest,topDepth:yt.topDepth.latest,topThickness:yt.topThickness.latest,topRadius:yt.topRadius.latest,legHeight:yt.legHeight.latest,legWidth:yt.legWidth.latest,legInset:yt.legInset.latest},t=Ci.latest,n=mu(e,t,Pi),r=zo.toDataURL("image/png");await i({params:e,selection:t,breakdown:n,config:Pi,snapshotDataUrl:r})});const Eu=i=>{if(i instanceof MouseEvent)return[i.offsetX,i.offsetY];const e=i.target;if(!e)return console.warn("Event doesn't have target",i),[0,0];if(!(e instanceof HTMLElement))return console.warn("Event target is not an element",i),[0,0];const t=e.getBoundingClientRect(),n=i.targetTouches[0].clientX-t.x,r=i.targetTouches[0].clientY-t.y;return[n,r]},M0=zo,E0=["mousedown","touchstart"],y0=i=>{hr.render();const[e,t]=Eu(i),[n,r,s,a]=hr.getCanvasPixelColor([e,t]);n===0&&r===0&&s===0&&a===0||(i.preventDefault(),Ls.update(o=>{if(o.tag==="will-move"||o.tag==="moving")return o;{const l=new Ro;return l.start(),{tag:"will-move",startRot:dr.current,startPos:[e,t],clock:l,lastStatic:o}}}),Tu.forEach(o=>yu.addEventListener(o,bu,{passive:!1})),wu.forEach(o=>Au.addEventListener(o,Ru)))};E0.forEach(i=>M0.addEventListener(i,y0));const yu=window,Tu=["mousemove","touchmove"],bu=i=>{const[e]=Eu(i);Ls.update(t=>t.tag==="will-move"||t.tag==="moving"?{tag:"moving",x:e,startPos:t.startPos,startRot:t.startRot,lastStatic:t.lastStatic,clock:t.clock}:(t.tag,t))},Au=window,wu=["mouseup","touchend"],Ru=()=>{Tu.forEach(e=>yu.removeEventListener(e,bu)),wu.forEach(e=>Au.removeEventListener(e,Ru));const i=e=>({[-1]:{tag:"static",position:0},0:{tag:"static",position:1},1:{tag:"static",position:0}})[e.position];Ls.update(e=>{if(e.tag==="will-move")return i(e.lastStatic);if(e.tag==="static")return i(e);{e.tag;const t=e.clock.getElapsedTime(),n=Math.abs(e.x-e.startPos[0]);if(t<.3&&n<15)return i(e.lastStatic);const r=Math.round(Mu(dr.current,[-1,1]));return r<=-1?{tag:"static",position:-1}:1<=r?{tag:"static",position:1}:{tag:"static",position:0}}})};let ds;function Cu(i){requestAnimationFrame(Cu);const e=Su.take();e!==void 0&&(cc.href=URL.createObjectURL(e.tmf.blob),cc.download=e.tmf.filename,uc.href=URL.createObjectURL(e.stl.blob),uc.download=e.stl.filename,fc.href=URL.createObjectURL(e.obj.blob),fc.download=e.obj.filename),dr.update()&&(fr.rotation.z=dr.current*Math.PI+Bo),Ds.reduce((a,o)=>Wn[o].update()||a,!1)&&(Ea=!0),Ea&&(ds===void 0||i-ds>100)&&(ds=i,Ea=!1,g0(Wn.topWidth.current,Wn.topDepth.current,Wn.topThickness.current,Wn.topRadius.current,Wn.legHeight.current,Wn.legWidth.current,Wn.legInset.current).then(()=>{ds=void 0,hs=!0})),hr.resizeCanvas()&&(hs=!0),hs&&(_0(),hs=!1),hr.render()}Cu(performance.now());export{hc as _,R0 as z};
