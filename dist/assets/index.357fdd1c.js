(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=window,Y=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),Q=new WeakMap;class yt{constructor(t,e,i){if(this._$cssResult$=!0,i!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Y&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Q.set(e,t))}return t}toString(){return this.cssText}}const Z=o=>new yt(typeof o=="string"?o:o+"",void 0,gt),vt=(o,t)=>{Y?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),r=D.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,o.appendChild(i)})},X=Y?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Z(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B;const I=window,tt=I.trustedTypes,$t=tt?tt.emptyScript:"",et=I.reactiveElementPolyfillSupport,V={toAttribute(o,t){switch(t){case Boolean:o=o?$t:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ft=(o,t)=>t!==o&&(t==t||o==o),F={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:ft};class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const r=this._$Ep(i,e);r!==void 0&&(this._$Ev.set(r,i),t.push(r))}),t}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||F}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of i)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(X(r))}else t!==void 0&&e.push(X(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return vt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=F){var r;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const a=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:V).toAttribute(e,i.type);this._$El=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,n=r._$Ev.get(t);if(n!==void 0&&this._$El!==n){const a=r.getPropertyOptions(n),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:V;this._$El=n,this[n]=d.fromAttribute(e,a.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ft)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,n)=>this[n]=r),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$Ek()}catch(r){throw e=!1,this._$Ek(),r}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}w.finalized=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},et==null||et({ReactiveElement:w}),((B=I.reactiveElementVersions)!==null&&B!==void 0?B:I.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J;const L=window,v=L.trustedTypes,it=v?v.createPolicy("lit-html",{createHTML:o=>o}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,bt="?"+g,kt=`<${bt}>`,$=document,O=(o="")=>$.createComment(o),T=o=>o===null||typeof o!="object"&&typeof o!="function",ut=Array.isArray,_t=o=>ut(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,ot=/>/g,f=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,at=/"/g,wt=/^(?:script|style|textarea|title)$/i,Et=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),E=Et(1),b=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),st=new WeakMap,y=$.createTreeWalker($,129,null,!1),At=(o,t)=>{const e=o.length-1,i=[];let r,n=t===2?"<svg>":"",a=z;for(let s=0;s<e;s++){const l=o[s];let x,p,m=-1,c=0;for(;c<l.length&&(a.lastIndex=c,p=a.exec(l),p!==null);)c=a.lastIndex,a===z?p[1]==="!--"?a=rt:p[1]!==void 0?a=ot:p[2]!==void 0?(wt.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=f):p[3]!==void 0&&(a=f):a===f?p[0]===">"?(a=r!=null?r:z,m=-1):p[1]===void 0?m=-2:(m=a.lastIndex-p[2].length,x=p[1],a=p[3]===void 0?f:p[3]==='"'?at:nt):a===at||a===nt?a=f:a===rt||a===ot?a=z:(a=f,r=void 0);const R=a===f&&o[s+1].startsWith("/>")?" ":"";n+=a===z?l+kt:m>=0?(i.push(x),l.slice(0,m)+"$lit$"+l.slice(m)+g+R):l+g+(m===-2?(i.push(void 0),s):R)}const d=n+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[it!==void 0?it.createHTML(d):d,i]};class C{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,a=0;const d=t.length-1,s=this.parts,[l,x]=At(t,e);if(this.el=C.createElement(l,i),y.currentNode=this.el.content,e===2){const p=this.el.content,m=p.firstChild;m.remove(),p.append(...m.childNodes)}for(;(r=y.nextNode())!==null&&s.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const p=[];for(const m of r.getAttributeNames())if(m.endsWith("$lit$")||m.startsWith(g)){const c=x[a++];if(p.push(m),c!==void 0){const R=r.getAttribute(c.toLowerCase()+"$lit$").split(g),M=/([.?@])?(.*)/.exec(c);s.push({type:1,index:n,name:M[2],strings:R,ctor:M[1]==="."?zt:M[1]==="?"?Pt:M[1]==="@"?Ot:H})}else s.push({type:6,index:n})}for(const m of p)r.removeAttribute(m)}if(wt.test(r.tagName)){const p=r.textContent.split(g),m=p.length-1;if(m>0){r.textContent=v?v.emptyScript:"";for(let c=0;c<m;c++)r.append(p[c],O()),y.nextNode(),s.push({type:2,index:++n});r.append(p[m],O())}}}else if(r.nodeType===8)if(r.data===bt)s.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(g,p+1))!==-1;)s.push({type:7,index:n}),p+=g.length-1}n++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function k(o,t,e=o,i){var r,n,a,d;if(t===b)return t;let s=i!==void 0?(r=e._$Co)===null||r===void 0?void 0:r[i]:e._$Cl;const l=T(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==l&&((n=s==null?void 0:s._$AO)===null||n===void 0||n.call(s,!1),l===void 0?s=void 0:(s=new l(o),s._$AT(o,e,i)),i!==void 0?((a=(d=e)._$Co)!==null&&a!==void 0?a:d._$Co=[])[i]=s:e._$Cl=s),s!==void 0&&(t=k(o,s._$AS(o,t.values),s,i)),t}class jt{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:r}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:$).importNode(i,!0);y.currentNode=n;let a=y.nextNode(),d=0,s=0,l=r[0];for(;l!==void 0;){if(d===l.index){let x;l.type===2?x=new U(a,a.nextSibling,this,t):l.type===1?x=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(x=new Tt(a,this,t)),this.u.push(x),l=r[++s]}d!==(l==null?void 0:l.index)&&(a=y.nextNode(),d++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,r){var n;this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cm=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),T(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==b&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_t(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==h&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=C.createElement(r.h,this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const a=new jt(n,this),d=a.v(this.options);a.p(i),this.T(d),this._$AH=a}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new C(t)),e}k(t){ut(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new U(this.O(O()),this.O(O()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class H{constructor(t,e,i,r,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const n=this.strings;let a=!1;if(n===void 0)t=k(this,t,e,0),a=!T(t)||t!==this._$AH&&t!==b,a&&(this._$AH=t);else{const d=t;let s,l;for(t=n[0],s=0;s<n.length-1;s++)l=k(this,d[i+s],e,s),l===b&&(l=this._$AH[s]),a||(a=!T(l)||l!==this._$AH[s]),l===h?t=h:t!==h&&(t+=(l!=null?l:"")+n[s+1]),this._$AH[s]=l}a&&!r&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class zt extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}const St=v?v.emptyScript:"";class Pt extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==h?this.element.setAttribute(this.name,St):this.element.removeAttribute(this.name)}}class Ot extends H{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=k(this,t,e,0))!==null&&i!==void 0?i:h)===b)return;const r=this._$AH,n=t===h&&r!==h||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==h&&(r===h||n);n&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const lt=L.litHtmlPolyfillSupport;lt==null||lt(C,U),((J=L.litHtmlVersions)!==null&&J!==void 0?J:L.litHtmlVersions=[]).push("2.4.0");const Ct=(o,t,e)=>{var i,r;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let a=n._$litPart$;if(a===void 0){const d=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=a=new U(t.insertBefore(O(),d),d,void 0,e!=null?e:{})}return a._$AI(o),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K,G;class P extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return b}}P.finalized=!0,P._$litElement$=!0,(K=globalThis.litElementHydrateSupport)===null||K===void 0||K.call(globalThis,{LitElement:P});const pt=globalThis.litElementPolyfillSupport;pt==null||pt({LitElement:P});((G=globalThis.litElementVersions)!==null&&G!==void 0?G:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(a){customElements.define(e,a)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function W(o){return(t,e)=>e!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(o,t,e):Ut(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Nt(o){return W({...o,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;((q=window.HTMLSlotElement)===null||q===void 0?void 0:q.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mt=o=>(...t)=>({_$litDirective$:o,values:t});class Dt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=Mt(class extends Dt{constructor(o){var t;if(super(o),o.type!==Rt.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,i;if(this.nt===void 0){this.nt=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((e=this.st)===null||e===void 0)&&e.has(n))&&this.nt.add(n);return this.render(t)}const r=o.element.classList;this.nt.forEach(n=>{n in t||(r.remove(n),this.nt.delete(n))});for(const n in t){const a=!!t[n];a===this.nt.has(n)||((i=this.st)===null||i===void 0?void 0:i.has(n))||(a?(r.add(n),this.nt.add(n)):(r.remove(n),this.nt.delete(n)))}return b}}),u=`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }main{margin-top:1.5rem;padding-bottom:200px}@media (min-width: 768px){main{margin-top:4rem;padding-bottom:426px}}@media (min-width: 1280px){main{margin-top:9rem;padding-bottom:360px}}.contact-page-input{margin-top:.25rem;margin-bottom:.25rem;border-width:2px;--tw-border-opacity: 1;border-color:rgb(57 154 194 / var(--tw-border-opacity));background-color:#399ac20f;padding-left:10px;font-size:9px;line-height:9px;font-family:Josefin Sans;font-weight:600;font-style:italic}.contact-page-input:focus{--tw-border-opacity: 1;border-color:rgb(38 71 108 / var(--tw-border-opacity));background-color:#26476c0f}@media (min-width: 768px){.contact-page-input{margin-top:6px;margin-bottom:6px;padding-left:1.25rem;font-size:.875rem;line-height:1.25rem}}@media (min-width: 1280px){.contact-page-input{line-height:1rem}.desktop-header-nav-items{width:144px;border-right-width:1px;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity))}}.desktop-footer-headings{font-size:27px;font-family:Unna;font-weight:400;font-style:italic}.desktop-footer-items{padding-top:6px;padding-bottom:6px;font-size:1rem;line-height:1.5rem;font-family:Josefin Sans;font-weight:400;font-style:italic}.desktop-footer-navs{margin-left:auto;margin-right:auto;display:flex;flex-direction:column}.glenn-page-quotes{margin:auto;margin-bottom:1.25rem;margin-top:2.5rem;width:70%;text-align:center;font-size:17px;font-family:Unna;font-weight:700;font-style:italic}@media (min-width: 768px){.glenn-page-quotes{margin-bottom:1.75rem;margin-top:60px;width:100%;font-size:29px;line-height:2rem}}.glenn-page-quotes-author{margin:auto;width:70%;text-align:center;font-size:13px;font-family:Josefin Sans;font-weight:300;font-style:italic}@media (min-width: 768px){.glenn-page-quotes-author{font-size:19px}}.glenn-page-headings{margin-top:2.5rem;margin-bottom:.75rem;font-size:1.25rem;line-height:1.75rem;font-family:Unna;font-weight:700;font-style:italic}@media (min-width: 768px){.glenn-page-headings{margin-top:60px;width:70%;font-size:25px}}.glenn-page-p-div{margin:auto}@media (min-width: 768px){.glenn-page-p-div{width:80%;line-height:1.25rem}}.map-btn{width:245px;cursor:pointer}.map-btn:hover{color:#399ac299}.map-btn-selected{width:245px;cursor:pointer;--tw-text-opacity: 1;color:rgb(57 154 194 / var(--tw-text-opacity))}.map-card-p{margin-top:.75rem;font-size:19px;line-height:22px;color:#26476c99;font-family:Josefin Sans;font-weight:600}.map-card-span{font-size:19px;line-height:22px;--tw-text-opacity: 1;color:rgb(38 71 108 / var(--tw-text-opacity));font-family:Josefin Sans;font-weight:600}.mobile-menu-rectangle{margin:2px;height:1.5px;width:1.25rem;border-radius:.125rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.mobile-footer-btns{margin-left:.75rem;margin-right:.75rem;height:2rem;width:134px;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:9999px;border-width:1px;--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));padding-top:.125rem;text-align:center;font-size:17px}.mobile-footer-btns:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(57 154 194 / var(--tw-text-opacity))}.newsroom-btn-default{position:absolute;bottom:.5rem;right:.5rem;display:flex;height:2rem;width:87px;cursor:pointer;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));padding-top:2px;font-size:10px;line-height:.75rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));font-family:Josefin Sans;font-weight:600}.newsroom-btn-default:hover{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(38 71 108 / var(--tw-text-opacity))}@media (min-width: 768px){.newsroom-btn-default{height:1.75rem;width:6rem;padding-top:3px;font-size:10.5px;line-height:14.5px}}@media (min-width: 1280px){.newsroom-btn-default{height:2rem;width:7rem;font-size:11.5px}}.newsroom-btn-white{position:absolute;bottom:.5rem;right:.5rem;display:flex;height:2rem;width:87px;cursor:pointer;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;--tw-border-opacity: 1;border-color:rgb(38 71 108 / var(--tw-border-opacity));padding-top:2px;font-size:10px;line-height:.75rem;--tw-text-opacity: 1;color:rgb(38 71 108 / var(--tw-text-opacity));font-family:Josefin Sans;font-weight:600}.newsroom-btn-white:hover{--tw-bg-opacity: 1;background-color:rgb(38 71 108 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 768px){.newsroom-btn-white{height:1.75rem;width:6rem;padding-top:3px}}@media (min-width: 1280px){.newsroom-btn-white{height:2rem;width:7rem}}.newsroom-btn-pic{position:absolute;bottom:.5rem;right:.5rem;display:flex;height:2rem;width:87px;cursor:pointer;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));padding-top:2px;font-size:10px;line-height:.75rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));font-family:Josefin Sans;font-weight:600}.newsroom-btn-pic:hover{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(38 71 108 / var(--tw-text-opacity))}@media (min-width: 768px){.newsroom-btn-pic{height:1.75rem;width:6rem;padding-top:3px}}@media (min-width: 1280px){.newsroom-btn-pic{height:2rem;width:7rem}}.publications-menu-divs{margin-top:.25rem;margin-bottom:.25rem;width:48%;cursor:pointer;border-radius:9999px;border-width:2px;--tw-border-opacity: 1;border-color:rgb(38 71 108 / var(--tw-border-opacity));padding-top:7px;padding-bottom:7px;text-align:center;font-size:9px;line-height:9px;--tw-text-opacity: 1;color:rgb(38 71 108 / var(--tw-text-opacity));font-family:Josefin Sans;font-weight:600}@media (min-width: 768px){.publications-menu-divs{margin-left:1.5px;margin-right:1.5px;width:24%;border-radius:0;--tw-bg-opacity: 1;background-color:rgb(38 71 108 / var(--tw-bg-opacity));font-size:1rem;line-height:1.5rem;font-weight:300;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}}@media (min-width: 1280px){.publications-menu-divs{margin-left:1px;margin-right:1px}}@media (min-width: 768px){.publications-menu-first{border-top-left-radius:1.5rem}.publications-menu-last{border-bottom-right-radius:1.5rem}}.publications-article-p{font-size:15px;line-height:17px;font-family:Josefin Sans;font-weight:400}@media (min-width: 768px){.publications-article-p{font-size:17px;line-height:21px}}.publications-article-h2{margin-left:auto;margin-right:auto;margin-top:2rem;text-align:center;font-size:23px;line-height:28px;font-family:Unna;font-weight:700}@media (min-width: 768px){.publications-article-h2{margin-top:4rem;font-size:33px;line-height:38px}}.publications-article-h2-subtitle{margin-left:auto;margin-right:auto;margin-top:1rem;width:92%;text-align:center;font-size:15px;line-height:21px;font-family:Josefin Sans;font-weight:300;font-style:italic}@media (min-width: 768px){.publications-article-h2-subtitle{margin-top:1.75rem;width:100%;font-size:19px;line-height:23px}}@media (min-width: 1280px){.publications-article-h2-subtitle{width:75%}}.publications-article-h4{margin-top:2rem;font-size:20px;line-height:23px;font-family:Unna;font-weight:700;font-style:italic}@media (min-width: 768px){.publications-article-h4{margin-top:3rem;font-size:25px;line-height:28px}}@media (min-width: 1280px){.publications-article-h4{margin-top:4rem}}.responsive-ordered-list-items{padding-top:1.25rem;padding-bottom:1.25rem}@media (min-width: 1280px){.responsive-ordered-list-items{padding-top:2.25rem;padding-bottom:2.25rem}}.services-project-initiation-focused,.services-project-initiation.focused{--tw-bg-opacity: 1;background-color:rgb(112 188 152 / var(--tw-bg-opacity))}.services-project-initiation-unfocused,.services-project-initiation.unfocused{--tw-bg-opacity: 1;background-color:rgb(130 214 174 / var(--tw-bg-opacity))}.services-project-planning-focused,.services-project-planning.focused{--tw-bg-opacity: 1;background-color:rgb(52 140 176 / var(--tw-bg-opacity))}.services-project-planning-unfocused,.services-project-planning.unfocused{--tw-bg-opacity: 1;background-color:rgb(57 154 194 / var(--tw-bg-opacity))}.services-project-execution-focused,.services-project-execution.focused{background-color:#26476ccc}.services-project-execution-unfocused,.services-project-execution.unfocused{--tw-bg-opacity: 1;background-color:rgb(38 71 108 / var(--tw-bg-opacity))}.services-project-closure-focused,.services-project-closure.focused{--tw-bg-opacity: 1;background-color:rgb(106 149 197 / var(--tw-bg-opacity))}.services-project-closure-unfocused,.services-project-closure.unfocused{background-color:#6a95c5cc}.tablet-services-div{position:absolute;top:116px;left:240px;z-index:20;height:320px;width:312px;flex-direction:column;align-items:center;justify-content:space-between}@media (min-width: 1280px){.tablet-services-div{top:180px;left:330px;height:320px;width:402px}}.tablet-desktop-whoweare-photo-div{position:absolute;top:189px;left:4px;z-index:10;display:flex;height:47px;width:232px;flex-direction:column;align-items:center;justify-content:center}@media (min-width: 1280px){.tablet-desktop-whoweare-photo-div{top:282px;left:10px;height:68px;width:340px}}.tablet-services-btns{position:absolute;z-index:30;display:flex;height:80px;width:160px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:center;border-radius:9999px;padding-left:.5rem;padding-right:.5rem;text-align:center;font-size:22px;line-height:25px;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));font-family:Unna;font-weight:700}@media (min-width: 1280px){.tablet-services-btns{height:90px;width:165px}}.tablet-services-div-title{margin-bottom:1.25rem;text-align:center;font-size:31px;line-height:31px;font-family:Unna;font-weight:700}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.bottom-0{bottom:0px}.left-0{left:0px}.top-0{top:0px}.top-\\[-4px\\]{top:-4px}.right-0{right:0px}.top-4{top:1rem}.-top-3{top:-.75rem}.bottom-2{bottom:.5rem}.right-2{right:.5rem}.top-\\[116px\\]{top:116px}.left-\\[240px\\]{left:240px}.top-\\[189px\\]{top:189px}.left-\\[4px\\]{left:4px}.top-\\[-1px\\]{top:-1px}.left-\\[-1px\\]{left:-1px}.bottom-3{bottom:.75rem}.right-3{right:.75rem}.-top-32{top:-8rem}.right-8{right:2rem}.-bottom-32{bottom:-8rem}.left-6{left:1.5rem}.-top-16{top:-4rem}.left-\\[310px\\]{left:310px}.top-3{top:.75rem}.right-36{right:9rem}.top-\\[120px\\]{top:120px}.top-64{top:16rem}.bottom-\\[72px\\]{bottom:72px}.right-\\[90px\\]{right:90px}.-bottom-7{bottom:-1.75rem}.right-52{right:13rem}.left-\\[215px\\]{left:215px}.left-\\[106px\\]{left:106px}.left-10{left:2.5rem}.-top-8{top:-2rem}.left-40{left:10rem}.top-20{top:5rem}.left-\\[178px\\]{left:178px}.top-44{top:11rem}.left-\\[210px\\]{left:210px}.top-\\[63\\%\\]{top:63%}.z-\\[-10\\]{z-index:-10}.z-20{z-index:20}.z-50{z-index:50}.z-10{z-index:10}.z-30{z-index:30}.col-start-2{grid-column-start:2}.col-end-4{grid-column-end:4}.m-auto{margin:auto}.m-\\[2px\\]{margin:2px}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-4{margin-top:1rem;margin-bottom:1rem}.mx-3{margin-left:.75rem;margin-right:.75rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-\\[2px\\]{margin-top:2px;margin-bottom:2px}.my-10{margin-top:2.5rem;margin-bottom:2.5rem}.my-14{margin-top:3.5rem;margin-bottom:3.5rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.mx-\\[15\\%\\]{margin-left:15%;margin-right:15%}.my-9{margin-top:2.25rem;margin-bottom:2.25rem}.mx-8{margin-left:2rem;margin-right:2rem}.my-12{margin-top:3rem;margin-bottom:3rem}.mx-5{margin-left:1.25rem;margin-right:1.25rem}.my-\\[6px\\]{margin-top:6px;margin-bottom:6px}.my-20{margin-top:5rem;margin-bottom:5rem}.mx-44{margin-left:11rem;margin-right:11rem}.mb-6{margin-bottom:1.5rem}.ml-10{margin-left:2.5rem}.mb-16{margin-bottom:4rem}.mt-11{margin-top:2.75rem}.mb-40{margin-bottom:10rem}.mt-2{margin-top:.5rem}.mt-\\[77px\\]{margin-top:77px}.mt-7{margin-top:1.75rem}.ml-7{margin-left:1.75rem}.ml-\\[4\\%\\]{margin-left:4%}.ml-4{margin-left:1rem}.mr-3{margin-right:.75rem}.ml-\\[85\\%\\]{margin-left:85%}.mt-0{margin-top:0}.ml-6{margin-left:1.5rem}.mb-3{margin-bottom:.75rem}.mb-2{margin-bottom:.5rem}.mt-14{margin-top:3.5rem}.mb-14{margin-bottom:3.5rem}.mt-5{margin-top:1.25rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-10{margin-top:2.5rem}.mt-3{margin-top:.75rem}.mb-20{margin-bottom:5rem}.mt-12{margin-top:3rem}.mt-8{margin-top:2rem}.mt-20{margin-top:5rem}.ml-2{margin-left:.5rem}.mb-12{margin-bottom:3rem}.mb-4{margin-bottom:1rem}.mt-16{margin-top:4rem}.mb-5{margin-bottom:1.25rem}.mt-24{margin-top:6rem}.mb-28{margin-bottom:7rem}.mt-40{margin-top:10rem}.mb-60{margin-bottom:15rem}.mt-9{margin-top:2.25rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-\\[28px\\]{height:28px}.h-8{height:2rem}.h-10{height:2.5rem}.h-\\[40px\\]{height:40px}.h-12{height:3rem}.h-\\[200px\\]{height:200px}.h-\\[426px\\]{height:426px}.h-\\[50\\%\\]{height:50%}.h-full{height:100%}.h-\\[120px\\]{height:120px}.h-\\[360px\\]{height:360px}.h-4\\/5{height:80%}.h-\\[43px\\]{height:43px}.h-\\[35px\\]{height:35px}.h-\\[352px\\]{height:352px}.h-\\[90\\%\\]{height:90%}.h-20{height:5rem}.h-\\[1000px\\]{height:1000px}.h-\\[1205px\\]{height:1205px}.h-\\[1\\.5px\\]{height:1.5px}.h-\\[320px\\]{height:320px}.h-\\[47px\\]{height:47px}.h-\\[80px\\]{height:80px}.h-\\[268px\\]{height:268px}.h-\\[12\\%\\]{height:12%}.h-\\[162px\\]{height:162px}.h-\\[15\\%\\]{height:15%}.h-9{height:2.25rem}.h-\\[460px\\]{height:460px}.h-\\[380px\\]{height:380px}.h-11{height:2.75rem}.h-\\[300px\\]{height:300px}.h-\\[104px\\]{height:104px}.h-\\[240px\\]{height:240px}.h-\\[340px\\]{height:340px}.h-80{height:20rem}.h-\\[156px\\]{height:156px}.h-\\[37\\%\\]{height:37%}.h-\\[140px\\]{height:140px}.min-h-\\[112px\\]{min-height:112px}.min-h-\\[300px\\]{min-height:300px}.min-h-screen{min-height:100vh}.w-\\[80\\%\\]{width:80%}.w-\\[88\\%\\]{width:88%}.w-full{width:100%}.w-\\[49\\%\\]{width:49%}.w-\\[134px\\]{width:134px}.w-10{width:2.5rem}.w-\\[90\\%\\]{width:90%}.w-2\\/3{width:66.666667%}.w-48{width:12rem}.w-1\\/3{width:33.333333%}.w-\\[40px\\]{width:40px}.w-\\[70\\%\\]{width:70%}.w-\\[22px\\]{width:22px}.w-\\[416px\\]{width:416px}.w-\\[281px\\]{width:281px}.w-\\[130px\\]{width:130px}.w-\\[201px\\]{width:201px}.w-\\[35px\\]{width:35px}.w-\\[55\\%\\]{width:55%}.w-\\[45\\%\\]{width:45%}.w-\\[170px\\]{width:170px}.w-\\[145px\\]{width:145px}.w-\\[200px\\]{width:200px}.w-\\[138px\\]{width:138px}.w-\\[148px\\]{width:148px}.w-4\\/5{width:80%}.w-3\\/5{width:60%}.w-\\[95\\%\\]{width:95%}.w-\\[40\\%\\],.w-2\\/5{width:40%}.w-\\[85\\%\\]{width:85%}.w-80{width:20rem}.w-\\[245px\\]{width:245px}.w-5{width:1.25rem}.w-\\[87px\\]{width:87px}.w-\\[48\\%\\]{width:48%}.w-\\[92\\%\\]{width:92%}.w-\\[312px\\]{width:312px}.w-\\[232px\\]{width:232px}.w-\\[160px\\]{width:160px}.w-36{width:9rem}.w-28{width:7rem}.w-40{width:10rem}.w-\\[770px\\]{width:770px}.w-\\[680px\\]{width:680px}.w-\\[950px\\]{width:950px}.w-\\[425px\\]{width:425px}.w-\\[402px\\]{width:402px}.w-\\[181px\\]{width:181px}.w-\\[156px\\]{width:156px}.w-\\[752px\\]{width:752px}.w-\\[240px\\]{width:240px}.w-\\[320px\\]{width:320px}.w-\\[208px\\]{width:208px}.w-\\[108px\\]{width:108px}.max-w-\\[320px\\]{max-width:320px}.max-w-\\[90\\%\\]{max-width:90%}.max-w-\\[1400px\\]{max-width:1400px}.max-w-6xl{max-width:72rem}.max-w-7xl{max-width:80rem}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.list-disc{list-style-type:disc}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[1fr_40\\%_1fr\\]{grid-template-columns:1fr 40% 1fr}.grid-cols-\\[38\\%_1fr\\]{grid-template-columns:38% 1fr}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[1fr_40\\%\\]{grid-template-columns:1fr 40%}.grid-rows-\\[35\\%_1fr\\]{grid-template-rows:35% 1fr}.grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.grid-rows-\\[1fr_2fr\\]{grid-template-rows:1fr 2fr}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.gap-2{gap:.5rem}.gap-5{gap:1.25rem}.gap-8{gap:2rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-y-2{row-gap:.5rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-l-full{border-top-left-radius:9999px;border-bottom-left-radius:9999px}.rounded-r-full{border-top-right-radius:9999px;border-bottom-right-radius:9999px}.rounded-tr-none{border-top-right-radius:0}.rounded-br-3xl{border-bottom-right-radius:1.5rem}.border-\\[1px\\]{border-width:1px}.border-\\[3px\\]{border-width:3px}.border-2{border-width:2px}.border{border-width:1px}.border-4{border-width:4px}.border-y{border-top-width:1px;border-bottom-width:1px}.border-t-0{border-top-width:0px}.border-l-0{border-left-width:0px}.border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.border-primary{--tw-border-opacity: 1;border-color:rgb(57 154 194 / var(--tw-border-opacity))}.border-primary-dark2{--tw-border-opacity: 1;border-color:rgb(38 71 108 / var(--tw-border-opacity))}.border-mygreen{--tw-border-opacity: 1;border-color:rgb(112 188 152 / var(--tw-border-opacity))}.border-mygrey{--tw-border-opacity: 1;border-color:rgb(106 149 197 / var(--tw-border-opacity))}.bg-primary{--tw-bg-opacity: 1;background-color:rgb(57 154 194 / var(--tw-bg-opacity))}.bg-white\\/\\[\\.62\\]{background-color:#ffffff9e}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-primary\\/\\[\\.06\\]{background-color:#399ac20f}.bg-mygreen{--tw-bg-opacity: 1;background-color:rgb(112 188 152 / var(--tw-bg-opacity))}.bg-mygreen-light{--tw-bg-opacity: 1;background-color:rgb(130 214 174 / var(--tw-bg-opacity))}.bg-primary-focus{--tw-bg-opacity: 1;background-color:rgb(52 140 176 / var(--tw-bg-opacity))}.bg-primary-dark2\\/80{background-color:#26476ccc}.bg-primary-dark2{--tw-bg-opacity: 1;background-color:rgb(38 71 108 / var(--tw-bg-opacity))}.bg-mygrey{--tw-bg-opacity: 1;background-color:rgb(106 149 197 / var(--tw-bg-opacity))}.bg-mygrey\\/80{background-color:#6a95c5cc}.bg-green-200{--tw-bg-opacity: 1;background-color:rgb(187 247 208 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-orange-200{--tw-bg-opacity: 1;background-color:rgb(254 215 170 / var(--tw-bg-opacity))}.bg-primary-dark2\\/\\[\\.7\\]{background-color:#26476cb3}.bg-primary\\/\\[\\.6\\]{background-color:#399ac299}.object-cover{-o-object-fit:cover;object-fit:cover}.p-2{padding:.5rem}.p-4{padding:1rem}.p-3{padding:.75rem}.p-6{padding:1.5rem}.p-\\[13px\\]{padding:13px}.px-9{padding-left:2.25rem;padding-right:2.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-\\[6px\\]{padding-top:6px;padding-bottom:6px}.py-\\[7px\\]{padding-top:7px;padding-bottom:7px}.px-3{padding-left:.75rem;padding-right:.75rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.pt-2{padding-top:.5rem}.pt-0\\.5{padding-top:.125rem}.pt-0{padding-top:0}.pt-4{padding-top:1rem}.pb-\\[164px\\]{padding-bottom:164px}.pl-8{padding-left:2rem}.pb-10{padding-bottom:2.5rem}.pl-9{padding-left:2.25rem}.pb-2{padding-bottom:.5rem}.pt-7{padding-top:1.75rem}.pl-5{padding-left:1.25rem}.pb-\\[200px\\]{padding-bottom:200px}.pl-\\[10px\\]{padding-left:10px}.pt-\\[2px\\]{padding-top:2px}.pt-5{padding-top:1.25rem}.pb-5{padding-bottom:1.25rem}.pr-5{padding-right:1.25rem}.pl-\\[60px\\]{padding-left:60px}.pl-2{padding-left:.5rem}.pr-\\[60px\\]{padding-right:60px}.pl-4{padding-left:1rem}.pl-6{padding-left:1.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-\\[20px\\]{font-size:20px}.text-\\[17px\\]{font-size:17px}.text-\\[13px\\]{font-size:13px}.text-\\[9px\\]{font-size:9px}.text-\\[39px\\]{font-size:39px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[18px\\]{font-size:18px}.text-\\[14px\\]{font-size:14px}.text-\\[30px\\]{font-size:30px}.text-\\[23px\\]{font-size:23px}.text-\\[11px\\]{font-size:11px}.text-\\[28px\\]{font-size:28px}.text-base{font-size:1rem;line-height:1.5rem}.text-\\[19px\\]{font-size:19px}.text-sm{font-size:.875rem;line-height:1.25rem}.text-\\[26px\\]{font-size:26px}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[27px\\]{font-size:27px}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-\\[15px\\]{font-size:15px}.text-\\[10px\\]{font-size:10px}.text-\\[22px\\]{font-size:22px}.text-\\[31px\\]{font-size:31px}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[21px\\]{font-size:21px}.text-\\[13\\.5px\\]{font-size:13.5px}.text-\\[12px\\]{font-size:12px}.text-\\[16px\\]{font-size:16px}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.leading-4{line-height:1rem}.leading-3{line-height:.75rem}.leading-10{line-height:2.5rem}.leading-6{line-height:1.5rem}.leading-\\[13px\\]{line-height:13px}.leading-\\[23px\\]{line-height:23px}.leading-\\[17px\\]{line-height:17px}.leading-\\[20px\\]{line-height:20px}.leading-\\[15px\\]{line-height:15px}.leading-\\[18px\\]{line-height:18px}.leading-\\[16px\\]{line-height:16px}.leading-\\[9px\\]{line-height:9px}.leading-\\[22px\\]{line-height:22px}.leading-\\[28px\\]{line-height:28px}.leading-\\[21px\\]{line-height:21px}.leading-\\[25px\\]{line-height:25px}.leading-\\[31px\\]{line-height:31px}.leading-5{line-height:1.25rem}.leading-7{line-height:1.75rem}.leading-\\[26px\\]{line-height:26px}.leading-\\[36px\\]{line-height:36px}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-primary-dark2{--tw-text-opacity: 1;color:rgb(38 71 108 / var(--tw-text-opacity))}.text-primary{--tw-text-opacity: 1;color:rgb(57 154 194 / var(--tw-text-opacity))}.text-primary-dark{--tw-text-opacity: 1;color:rgb(28 76 106 / var(--tw-text-opacity))}.text-primary-dark2\\/60{color:#26476c99}.text-yellow-200{--tw-text-opacity: 1;color:rgb(254 240 138 / var(--tw-text-opacity))}.text-violet-700{--tw-text-opacity: 1;color:rgb(109 40 217 / var(--tw-text-opacity))}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-mygreen{--tw-text-opacity: 1;color:rgb(112 188 152 / var(--tw-text-opacity))}.text-mygrey\\/80{color:#6a95c5cc}.text-primary-focus{--tw-text-opacity: 1;color:rgb(52 140 176 / var(--tw-text-opacity))}.text-primary-dark2\\/80{color:#26476ccc}.text-mygrey{--tw-text-opacity: 1;color:rgb(106 149 197 / var(--tw-text-opacity))}.outline{outline-style:solid}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}body{position:relative;min-height:100vh}:root{-webkit-tap-highlight-color:rgba(255,255,255,0)}h1{-webkit-user-select:none;-moz-user-select:none;user-select:none}input::-moz-placeholder{color:#26476c}input::placeholder{color:#26476c}input:focus{outline:none}textarea::-moz-placeholder{color:#26476c}textarea::placeholder{color:#26476c}textarea:focus{outline:none}#body-newsletter-input::-moz-placeholder{color:#fff}#body-newsletter-input::placeholder{color:#fff}.font-jose-200{font-family:Josefin Sans;font-weight:200}.font-jose-300{font-family:Josefin Sans;font-weight:300}.font-jose-300-it{font-family:Josefin Sans;font-weight:300;font-style:italic}.font-jose-400{font-family:Josefin Sans;font-weight:400}.font-jose-400-it{font-family:Josefin Sans;font-weight:400;font-style:italic}.font-jose-600{font-family:Josefin Sans;font-weight:600}.font-jose-600-it{font-family:Josefin Sans;font-weight:600;font-style:italic}.font-jose-700{font-family:Josefin Sans;font-weight:700}.font-unna-400-it{font-family:Unna;font-weight:400;font-style:italic}.font-unna-700{font-family:Unna;font-weight:700}.font-unna-700-it{font-family:Unna;font-weight:700;font-style:italic}.font-nunito-400{font-family:Nunito;font-weight:400;font-size:25px}.publications-blu-div{background:#399AC299}.hover\\:border-white:hover{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.hover\\:border-primary:hover{--tw-border-opacity: 1;border-color:rgb(57 154 194 / var(--tw-border-opacity))}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.hover\\:bg-primary-dark2:hover{--tw-bg-opacity: 1;background-color:rgb(38 71 108 / var(--tw-bg-opacity))}.hover\\:bg-primary:hover{--tw-bg-opacity: 1;background-color:rgb(57 154 194 / var(--tw-bg-opacity))}.hover\\:bg-mygreen:hover{--tw-bg-opacity: 1;background-color:rgb(112 188 152 / var(--tw-bg-opacity))}.hover\\:bg-mygrey:hover{--tw-bg-opacity: 1;background-color:rgb(106 149 197 / var(--tw-bg-opacity))}.hover\\:text-primary:hover{--tw-text-opacity: 1;color:rgb(57 154 194 / var(--tw-text-opacity))}.hover\\:text-primary\\/60:hover{color:#399ac299}.hover\\:text-primary-dark2:hover{--tw-text-opacity: 1;color:rgb(38 71 108 / var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.focus\\:border-primary-dark2:focus{--tw-border-opacity: 1;border-color:rgb(38 71 108 / var(--tw-border-opacity))}.focus\\:bg-primary-dark2\\/\\[\\.06\\]:focus{background-color:#26476c0f}@media (min-width: 640px){.sm\\:w-\\[80\\%\\]{width:80%}}@media (min-width: 768px){.md\\:-top-7{top:-1.75rem}.md\\:my-7{margin-top:1.75rem;margin-bottom:1.75rem}.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:mx-0{margin-left:0;margin-right:0}.md\\:my-\\[6px\\]{margin-top:6px;margin-bottom:6px}.md\\:mx-\\[1\\.5px\\]{margin-left:1.5px;margin-right:1.5px}.md\\:my-12{margin-top:3rem;margin-bottom:3rem}.md\\:mx-10{margin-left:2.5rem;margin-right:2.5rem}.md\\:my-10{margin-top:2.5rem;margin-bottom:2.5rem}.md\\:my-0{margin-top:0;margin-bottom:0}.md\\:mb-4{margin-bottom:1rem}.md\\:mt-24{margin-top:6rem}.md\\:mb-24{margin-bottom:6rem}.md\\:mt-7{margin-top:1.75rem}.md\\:mt-10{margin-top:2.5rem}.md\\:mt-8{margin-top:2rem}.md\\:mt-16{margin-top:4rem}.md\\:mb-32{margin-bottom:8rem}.md\\:mt-12{margin-top:3rem}.md\\:mt-6{margin-top:1.5rem}.md\\:mt-20{margin-top:5rem}.md\\:mb-10{margin-bottom:2.5rem}.md\\:mb-16{margin-bottom:4rem}.md\\:mb-9{margin-bottom:2.25rem}.md\\:mb-7{margin-bottom:1.75rem}.md\\:mt-\\[60px\\]{margin-top:60px}.md\\:mb-12{margin-bottom:3rem}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:grid{display:grid}.md\\:hidden{display:none}.md\\:h-full{height:100%}.md\\:h-7{height:1.75rem}.md\\:h-\\[315px\\]{height:315px}.md\\:h-\\[28px\\]{height:28px}.md\\:h-11{height:2.75rem}.md\\:h-\\[210px\\]{height:210px}.md\\:h-\\[40px\\]{height:40px}.md\\:w-\\[500px\\]{width:500px}.md\\:w-\\[70\\%\\]{width:70%}.md\\:w-full{width:100%}.md\\:w-4\\/5{width:80%}.md\\:w-\\[90\\%\\]{width:90%}.md\\:w-\\[88\\%\\]{width:88%}.md\\:w-\\[75\\%\\]{width:75%}.md\\:w-\\[55\\%\\]{width:55%}.md\\:w-\\[640px\\]{width:640px}.md\\:w-\\[600px\\]{width:600px}.md\\:w-24{width:6rem}.md\\:w-\\[24\\%\\]{width:24%}.md\\:w-\\[90px\\]{width:90px}.md\\:w-40{width:10rem}.md\\:w-\\[416px\\]{width:416px}.md\\:w-\\[280px\\]{width:280px}.md\\:w-\\[130px\\]{width:130px}.md\\:max-w-\\[450px\\]{max-width:450px}.md\\:auto-cols-fr{grid-auto-columns:minmax(0,1fr)}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:justify-center{justify-content:center}.md\\:justify-between{justify-content:space-between}.md\\:gap-4{gap:1rem}.md\\:rounded-none{border-radius:0}.md\\:rounded-tl-3xl{border-top-left-radius:1.5rem}.md\\:rounded-br-3xl{border-bottom-right-radius:1.5rem}.md\\:border-none{border-style:none}.md\\:bg-transparent{background-color:transparent}.md\\:bg-primary-dark2{--tw-bg-opacity: 1;background-color:rgb(38 71 108 / var(--tw-bg-opacity))}.md\\:pt-2{padding-top:.5rem}.md\\:pb-4{padding-bottom:1rem}.md\\:pt-4{padding-top:1rem}.md\\:pl-\\[82\\%\\]{padding-left:82%}.md\\:pr-24{padding-right:6rem}.md\\:pb-\\[426px\\]{padding-bottom:426px}.md\\:pl-5{padding-left:1.25rem}.md\\:pt-\\[3px\\]{padding-top:3px}.md\\:pl-\\[72px\\]{padding-left:72px}.md\\:pl-7{padding-left:1.75rem}.md\\:text-right{text-align:right}.md\\:text-\\[21px\\]{font-size:21px}.md\\:text-\\[27px\\]{font-size:27px}.md\\:text-\\[25px\\]{font-size:25px}.md\\:text-\\[15px\\]{font-size:15px}.md\\:text-\\[39px\\]{font-size:39px}.md\\:text-\\[17px\\]{font-size:17px}.md\\:text-\\[29px\\]{font-size:29px}.md\\:text-\\[19px\\]{font-size:19px}.md\\:text-\\[14px\\]{font-size:14px}.md\\:text-sm{font-size:.875rem;line-height:1.25rem}.md\\:text-\\[10\\.5px\\]{font-size:10.5px}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:text-\\[33px\\]{font-size:33px}.md\\:text-\\[23px\\]{font-size:23px}.md\\:font-semibold{font-weight:600}.md\\:font-light{font-weight:300}.md\\:leading-8{line-height:2rem}.md\\:leading-\\[15px\\]{line-height:15px}.md\\:leading-\\[45px\\]{line-height:45px}.md\\:leading-\\[21px\\]{line-height:21px}.md\\:leading-\\[33px\\]{line-height:33px}.md\\:leading-\\[19px\\]{line-height:19px}.md\\:leading-\\[29px\\]{line-height:29px}.md\\:leading-\\[26px\\]{line-height:26px}.md\\:leading-\\[14px\\]{line-height:14px}.md\\:leading-5{line-height:1.25rem}.md\\:leading-\\[14\\.5px\\]{line-height:14.5px}.md\\:leading-\\[38px\\]{line-height:38px}.md\\:leading-\\[23px\\]{line-height:23px}.md\\:leading-\\[28px\\]{line-height:28px}.md\\:leading-7{line-height:1.75rem}.md\\:text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}}@media (min-width: 1024px){.lg\\:mx-20{margin-left:5rem;margin-right:5rem}}@media (min-width: 1280px){.xl\\:-top-20{top:-5rem}.xl\\:top-\\[180px\\]{top:180px}.xl\\:left-\\[330px\\]{left:330px}.xl\\:top-\\[282px\\]{top:282px}.xl\\:left-\\[10px\\]{left:10px}.xl\\:-top-16{top:-4rem}.xl\\:right-12{right:3rem}.xl\\:-bottom-12{bottom:-3rem}.xl\\:left-16{left:4rem}.xl\\:-top-11{top:-2.75rem}.xl\\:left-\\[445px\\]{left:445px}.xl\\:right-60{right:15rem}.xl\\:top-36{top:9rem}.xl\\:right-24{right:6rem}.xl\\:top-\\[300px\\]{top:300px}.xl\\:right-16{right:4rem}.xl\\:bottom-24{bottom:6rem}.xl\\:right-40{right:10rem}.xl\\:right-\\[330px\\]{right:330px}.xl\\:left-\\[345px\\]{left:345px}.xl\\:left-44{left:11rem}.xl\\:left-20{left:5rem}.xl\\:left-28{left:7rem}.xl\\:top-6{top:1.5rem}.xl\\:-left-20{left:-5rem}.xl\\:left-60{left:15rem}.xl\\:top-40{top:10rem}.xl\\:left-80{left:20rem}.xl\\:top-\\[200px\\]{top:200px}.xl\\:col-end-3{grid-column-end:3}.xl\\:my-20{margin-top:5rem;margin-bottom:5rem}.xl\\:mx-0{margin-left:0;margin-right:0}.xl\\:mx-\\[1px\\]{margin-left:1px;margin-right:1px}.xl\\:my-16{margin-top:4rem;margin-bottom:4rem}.xl\\:mx-44{margin-left:11rem;margin-right:11rem}.xl\\:mt-4{margin-top:1rem}.xl\\:mb-7{margin-bottom:1.75rem}.xl\\:mt-40{margin-top:10rem}.xl\\:mb-40{margin-bottom:10rem}.xl\\:mt-16{margin-top:4rem}.xl\\:mt-20{margin-top:5rem}.xl\\:mt-6{margin-top:1.5rem}.xl\\:mb-16{margin-bottom:4rem}.xl\\:mb-12{margin-bottom:3rem}.xl\\:mb-28{margin-bottom:7rem}.xl\\:mb-60{margin-bottom:15rem}.xl\\:mb-20{margin-bottom:5rem}.xl\\:mt-9{margin-top:2.25rem}.xl\\:mb-4{margin-bottom:1rem}.xl\\:mt-36{margin-top:9rem}.xl\\:mt-28{margin-top:7rem}.xl\\:mt-48{margin-top:12rem}.xl\\:block{display:block}.xl\\:flex{display:flex}.xl\\:grid{display:grid}.xl\\:hidden{display:none}.xl\\:h-\\[1020px\\]{height:1020px}.xl\\:h-8{height:2rem}.xl\\:h-\\[320px\\]{height:320px}.xl\\:h-\\[68px\\]{height:68px}.xl\\:h-\\[90px\\]{height:90px}.xl\\:h-\\[328px\\]{height:328px}.xl\\:h-11{height:2.75rem}.xl\\:h-\\[360px\\]{height:360px}.xl\\:min-h-\\[360px\\]{min-height:360px}.xl\\:w-\\[70\\%\\]{width:70%}.xl\\:w-\\[60px\\]{width:60px}.xl\\:w-\\[50\\%\\]{width:50%}.xl\\:w-4\\/5{width:80%}.xl\\:w-4\\/6{width:66.666667%}.xl\\:w-\\[75\\%\\]{width:75%}.xl\\:w-3\\/5{width:60%}.xl\\:w-\\[800px\\]{width:800px}.xl\\:w-\\[650px\\]{width:650px}.xl\\:w-\\[862px\\]{width:862px}.xl\\:w-\\[144px\\]{width:144px}.xl\\:w-28{width:7rem}.xl\\:w-\\[402px\\]{width:402px}.xl\\:w-\\[340px\\]{width:340px}.xl\\:w-\\[165px\\]{width:165px}.xl\\:w-2\\/4{width:50%}.xl\\:w-44{width:11rem}.xl\\:w-\\[60\\%\\]{width:60%}.xl\\:w-40{width:10rem}.xl\\:w-\\[1050px\\]{width:1050px}.xl\\:w-\\[1116px\\]{width:1116px}.xl\\:w-\\[360px\\]{width:360px}.xl\\:max-w-\\[750px\\]{max-width:750px}.xl\\:grid-cols-\\[1fr_40\\%_1fr\\]{grid-template-columns:1fr 40% 1fr}.xl\\:grid-cols-\\[40\\%_1fr_1fr\\]{grid-template-columns:40% 1fr 1fr}.xl\\:grid-cols-\\[1fr_1fr_40\\%\\]{grid-template-columns:1fr 1fr 40%}.xl\\:justify-center{justify-content:center}.xl\\:border-r-0{border-right-width:0px}.xl\\:border-t-2{border-top-width:2px}.xl\\:border-r{border-right-width:1px}.xl\\:border-primary-dark2{--tw-border-opacity: 1;border-color:rgb(38 71 108 / var(--tw-border-opacity))}.xl\\:border-black{--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity))}.xl\\:p-6{padding:1.5rem}.xl\\:px-4{padding-left:1rem;padding-right:1rem}.xl\\:py-3{padding-top:.75rem;padding-bottom:.75rem}.xl\\:pt-3{padding-top:.75rem}.xl\\:pb-7{padding-bottom:1.75rem}.xl\\:pt-7{padding-top:1.75rem}.xl\\:pl-\\[88\\%\\]{padding-left:88%}.xl\\:pt-0{padding-top:0}.xl\\:pr-\\[20\\%\\]{padding-right:20%}.xl\\:pt-4{padding-top:1rem}.xl\\:pb-\\[360px\\]{padding-bottom:360px}.xl\\:pt-9{padding-top:2.25rem}.xl\\:pb-9{padding-bottom:2.25rem}.xl\\:pl-\\[92px\\]{padding-left:92px}.xl\\:pr-\\[100px\\]{padding-right:100px}.xl\\:pl-6{padding-left:1.5rem}.xl\\:text-\\[50px\\]{font-size:50px}.xl\\:text-\\[21px\\]{font-size:21px}.xl\\:text-2xl{font-size:1.5rem;line-height:2rem}.xl\\:text-\\[31px\\]{font-size:31px}.xl\\:text-\\[19px\\]{font-size:19px}.xl\\:text-base{font-size:1rem;line-height:1.5rem}.xl\\:text-\\[23px\\]{font-size:23px}.xl\\:text-\\[25px\\]{font-size:25px}.xl\\:text-\\[17px\\]{font-size:17px}.xl\\:text-\\[11\\.5px\\]{font-size:11.5px}.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}.xl\\:text-\\[15px\\]{font-size:15px}.xl\\:leading-\\[42px\\]{line-height:42px}.xl\\:leading-\\[57px\\]{line-height:57px}.xl\\:leading-\\[24px\\]{line-height:24px}.xl\\:leading-\\[22px\\]{line-height:22px}.xl\\:leading-\\[75px\\]{line-height:75px}.xl\\:leading-\\[26px\\]{line-height:26px}.xl\\:leading-\\[21px\\]{line-height:21px}.xl\\:leading-4{line-height:1rem}}@media (min-width: 1500px){.min-\\[1500px\\]\\:mx-auto{margin-left:auto;margin-right:auto}}@media (min-width: 1536px){.\\32xl\\:w-\\[50\\%\\]{width:50%}}
`,It=Z(u),j=o=>{var t;return t=class extends P{},t.styles=[It,Z(o)],t};var Lt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,N=(o,t,e,i)=>{for(var r=i>1?void 0:i?Ht(t,e):t,n=o.length-1,a;n>=0;n--)(a=o[n])&&(r=(i?a(t,e,r):a(r))||r);return i&&r&&Lt(t,e,r),r};let _=class extends j(u){constructor(){super(...arguments),this.showMenu=!1,this.withImg=!1,this.withDoors=!1,this.title="TIME&PLACE FUNDING"}render(){return E`
        <header>

            <!-- TABLET / DESKTOP HEADER -->

            <div class="hidden ${S({"md:hidden":this.withImg==!0,"md:flex":this.withImg==!1})} justify-between items-center select-none md:bg-transparent pb-2 md:pt-2 md:pb-4 xl:pt-3 xl:pb-7">
                <a class="xl:hidden ml-7" href="./index.html">
                    <img class="w-[170px] xl:hidden" src="../images/icons/T&Pfunding-logo.svg" alt="T&P Funding logo">
                </a>
                <a class="hidden xl:block ml-[4%]" href="./index.html">
                    <img class="w-[145px]" src="../images/icons/T&Pfunding-logo-desktop.svg" alt="T&P Funding logo">             
                </a>
                <nav id="header-nav" class="flex flex-row justify-around xl:justify-center items-center w-[70%] h-full font-jose-400-it text-base text-center">    
                    <a class="desktop-header-nav-items" href="./newsroom.html">Newsroom</a>
                    <a class="desktop-header-nav-items" href="./services.html">Services</a>
                    <a class="desktop-header-nav-items" href="./publications.html">Publications</a>
                    <a class="desktop-header-nav-items" href="./why-us.html">Why Us</a>
                    <a class="desktop-header-nav-items" href="./who-we-are.html">Who We Are</a>
                    <a class="desktop-header-nav-items xl:border-r-0" href="./contact.html">Contact</a>
                </nav>
            </div>


            <!-- TABLET / DESKTOP HEADER WITH PICTURE -->

            <div id="header-with-hands" class="relative hidden ${S({"md:hidden":this.withImg==!1,"md:flex":this.withImg==!0})} flex-col justify-between ">
                <img class="${S({block:this.withDoors==!1,hidden:this.withDoors==!0})} z-[-10] w-full" src="../images/landing page/header-1.png" alt="Header Image">
                <img class="${S({hidden:this.withDoors==!1,block:this.withDoors==!0})} z-[-10] w-full" src="../images/newsroom/newsroom-doors-desktop.png" alt="Header Image">
                <div class="absolute w-full flex justify-between items-center select-none bg-transparent xl:mt-4">
                    <a class="xl:hidden ml-7" href="./index.html">
                        <img class="w-[200px] xl:hidden" src="../images/icons/T&P-Logo-Funding-long-text-white.svg" alt="T&P Funding logo">
                    </a>
                    <a class="hidden xl:block ml-[4%]" href="./index.html">
                        <img class="w-[145px]" src="../images/icons/T&Pfunding-logo-desktop-white.svg" alt="">             
                    </a>
                    <nav id="header-nav" class="flex flex-row justify-around xl:justify-center items-center w-[70%] h-full font-jose-400-it text-base text-center text-white">    
                        <a class="desktop-header-nav-items border-white" href="./newsroom.html">Newsroom</a>
                        <a class="desktop-header-nav-items border-white" href="./services.html">Services</a>
                        <a class="desktop-header-nav-items border-white" href="./publications.html">Publications</a>
                        <a class="desktop-header-nav-items border-white" href="./why-us.html">Why Us</a>
                        <a class="desktop-header-nav-items border-white" href="./who-we-are.html">Who We Are</a>
                        <a class="desktop-header-nav-items xl:border-r-0" href="./contact.html">Contact</a>
                    </nav>
                </div>
                <div>
                    <h1 class="absolute bottom-0 w-full font-unna-700 text-[39px] xl:text-[50px] text-white leading-10 text-center p-2 xl:p-6">${this.title}</h1>
                </div>
            </div>


            <!-- MOBILE HEADER -->

            <div class="flex md:hidden justify-between items-center select-none md:bg-transparent pt-2 pb-2 md:pt-4 md:pb-4 xl:pt-7 xl:pb-7">
                <!-- <object class="w-[138px] h-[43px] ml-4" data="../images/icons/T&Pfunding-logo.svg" ></object> -->
                <a href="./index.html">
                    <img class="w-[138px] h-[43px] ml-4" src="../images/icons/T&Pfunding-logo.svg" alt="">
                </a>                
                <div id="mobile-menu-div" class="relative mr-3">
                    <div  @click=${this.toggleMenu} id="mobile-menu" class="select-none md:hidden">
                        <object data="../images/icons/mobile-menu-circle.svg" width="48" height="35"></object>
                        <div class="absolute top-0 flex flex-col w-full h-[35px] justify-center items-center">
                            <div class="mobile-menu-rectangle"></div>
                            <div class="mobile-menu-rectangle"></div>
                            <div class="mobile-menu-rectangle"></div>
                        </div>
                    </div>
                    <nav id="mobile-menu-nav" class="${S({hidden:this.showMenu==!1,block:this.showMenu==!0})} absolute z-20 w-[148px] md:w-[500px] h-[352px] md:h-full top-[-4px] right-0 flex-col justify-between border-primary border-[3px] rounded-lg rounded-tr-none md:border-none bg-white md:bg-transparent">    
                        <div @click=${this.toggleMenu} id="mobile-menu-close" class="ml-[85%] mt-0 font-nunito-400  text-primary text-lg md:hidden">x</div>
                        <ul class="flex flex-col md:flex-row justify-evenly h-[90%] ml-6 mb-3 font-jose-400-it text-primary-dark text-base">
                            <li><a href="./newsroom.html">Newsroom</a></li>
                            <li><a href="./services.html">Services</a></li>
                            <li><a href="./publications.html">Publications</a></li>
                            <li><a href="./why-us.html">Why Us</a></li>
                            <li><a href="./who-we-are.html">Who We Are</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        `}toggleMenu(){this.showMenu=!this.showMenu}};N([Nt()],_.prototype,"showMenu",2);N([W({type:Boolean,attribute:"with-img"})],_.prototype,"withImg",2);N([W({type:Boolean,attribute:"with-doors"})],_.prototype,"withDoors",2);N([W({type:String})],_.prototype,"title",2);_=N([A("my-header")],_);var Wt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Ft=(o,t,e,i)=>{for(var r=i>1?void 0:i?Bt(t,e):t,n=o.length-1,a;n>=0;n--)(a=o[n])&&(r=(i?a(t,e,r):a(r))||r);return i&&r&&Wt(t,e,r),r};let dt=class extends j(u){render(){return E`
    <footer>
        <!-- footer needs body with position relative and min-height 100vh (relative min-h-screen)
        and main with padding-bottom equal to footer height (pb-[164px]) -->


        <!-- MOBILE FOOTER -->
        <div class="absolute bottom-0 left-0 flex md:hidden flex-col justify-evenly items-center w-full h-[200px] bg-primary text-white">
            <div class="flex flex-row items-center justify-evenly pt-2" id="mobile-footer-btns">
                <a class="mobile-footer-btns font-unna-700-it" href="#">Newsletter</a>
                <a class="mobile-footer-btns font-unna-700-it" href="./contact.html">Contact</a>
            </div>

            <div class="font-jose-400 text-[11px] text-center leading-3 mt-2">
                <p>©2023 Time&Place Funding. <br/>A pillar of Time&Place Consulting. <br/>All rights reserved</p>
            </div>

            <ul class="w-full px-9 flex flex-row justify-around font-jose-700 text-[11px]">
                <li><a href="./terms-conditions.html">Terms & Conditions</a></li>
                <li>-</li>
                <li><a href="./cookie-use.html">Cookie Use</a></li>
                <li>-</li>
                <li><a href="./privacy-policy.html">Privacy Policy</a></li>
            </ul>
            <div class="flex flex-row justify-center mx-auto my-3 gap-2">
                <a href="" target="blank">
                    <img class="w-[22px]" src="../images/icons/facebook-footer.svg" alt="Facebook icon">
                </a>
                <a href="" target="blank">
                    <img class="w-[22px]" src="../images/icons/twitter-footer.svg" alt="Twitter icon">
                </a>
                <a href="" target="blank">
                    <img class="w-[22px]" src="../images/icons/youtube-footer.svg" alt="Youtube icon">
                </a>
                <a href="" target="blank">
                    <img class="w-[22px]" src="../images/icons/linkedln-footer.svg" alt="LinkedIn icon">
                </a>
            </div>
        </div>
        

        <!-- END MOBILE FOOTER -->

        


        <!-- TABLET FOOTER -->
        <div  class="absolute bottom-0 left-0 hidden md:flex xl:hidden flex-col justify-evenly items-center w-full h-[426px] bg-primary text-white">
            <div class="flex flex-row justify-around w-full h-[50%]">
                <div class="flex flex-col justify-center items-center" id="newsletter-desktop-tablet">
                    <h3 class="font-unna-400-it text-[28px]">Subscribe to our Newsletter!</h3>
                    <form class="flex flex-row justify-between items-center h-10 w-[416px] my-3" action="" method="">
                        <input class="mt-o bg-white/[.62] font-jose-400-it text-base h-full w-[281px] rounded-l-full pl-8" type="email" name="email" placeholder="email@gmail.com">
                        <input class="font-unna-700-it bg-white text-primary-dark2 text-[19px] h-full w-[130px] rounded-r-full" type="submit" value="SIGN ME UP!">
                    </form>
                    <p class="font-jose-400-it text-center text-sm">Stay up to date with our monthly newsletter <br/>on our publications, announcements and projects. <br/>Read our EU GDPR compliant policy.</p>
                </div>
                <div class="flex flex-col h-full">
                    <div class="w-[201px] h-10  mt-[77px]">
                        <a class="inline-block w-full h-full border-[1px] border-white rounded-full font-unna-700-it text-center text-[26px] hover:bg-white hover:text-primary" href="./contact.html">Contact</a>
                    </div>
                    <div class="flex flex-row justify-center mx-auto mt-7 gap-5">
                        <a href="" target="blank">
                            <img class="w-[35px]" src="../images/icons/facebook-footer.svg" alt="Facebook icon">
                        </a>
                        <a href="" target="blank">
                            <img class="w-[35px]" src="../images/icons/twitter-footer.svg" alt="Twitter icon">
                        </a>
                        <a href="" target="blank">
                            <img class="w-[35px]" src="../images/icons/youtube-footer.svg" alt="Youtube icon">
                        </a>
                        <a href="" target="blank">
                            <img class="w-[35px]" src="../images/icons/linkedln-footer.svg" alt="LinkedIn icon">
                        </a>
                    </div>
                </div>
            </div>
            <div id="tablet-footer-nav" class="flex flex-col justify-around w-[88%] h-[120px] px-2 py-1 border-y font-jose-400-it text-xl">
                <nav class="flex flex-row justify-around items-center ">
                    <a href="./newsroom.html">Newsroom</a>
                    <a href="./services.html">Services</a>
                    <a href="./publications.html">Publications</a>
                    <a href="./why-us.html">Why Us</a>
                    <a href="./who-we-are.html">Who We Are</a>
                </nav>
                <nav class="flex flex-row justify-around items-center ">
                    <a href="./terms-conditions.html">Terms & Conditions</a>
                    <a href="./cookie-use.html">Cookie Use</a>
                    <a href="./privacy-policy.html">Privacy Policy</a>
                </nav>
            </div>
            <div class="font-jose-200 text-xl text-center">
                <p>©2023 Time&Place Funding. All rights reserved. <br/>Time&Place Funding is a pillar of Time&Place Consulting.</p>
            </div>
        </div>
            
        

        <!-- END TABLET FOOTER -->



        <!-- DESKTOP FOOTER -->
        <div class="absolute bottom-0 left-0 hidden xl:flex flex-col w-full h-[360px] bg-primary text-white">
            <div class="flex flex-row justify-evenly items-center w-full h-4/5">
                <div class="grid grid-cols-3 w-[55%]">
                    <nav class="desktop-footer-navs">
                        <div class="desktop-footer-headings">Overview</div>
                        <a class="desktop-footer-items" href="./newsroom.html">Newsroom</a>
                        <a class="desktop-footer-items" href="./services.html">Services</a>
                        <a class="desktop-footer-items" href="./publications.html">Publications</a>
                        <a class="desktop-footer-items" href="./why-us.html">Why Us</a>
                        <a class="desktop-footer-items" href="./who-we-are.html">Who We Are</a>
                    </nav>
                    <ul class="desktop-footer-navs">
                        <li class="desktop-footer-headings">Contact us</li>
                        <li class="desktop-footer-items">info@fundingontap.com</li>
                        <li class="desktop-footer-items">+32 (0) 2 401 61 31</li>
                        <li class="desktop-footer-items">Sablon Tower, <br/>Rue Joseph Stevens 7 <br/>1000 Bruxelles <br/>Belgium</li>
                    </ul>
                    <nav class="desktop-footer-navs">
                        <div class="desktop-footer-headings">Privacy</div>
                        <a class="desktop-footer-items" href="./terms-conditions.html">Terms & Conditions</a>
                        <a class="desktop-footer-items" href="./cookie-use.html">Cookie Use</a>
                        <a class="desktop-footer-items" href="./privacy-policy.html">Privacy Policy</a>
                    </nav>
                </div>
                <div class="w-[45%]">
                    <div class="flex flex-row justify-around w-full h-[50%] pb-10 pl-9">
                        <div class="flex flex-col justify-center items-center" id="newsletter-desktop-tablet">
                            <h3 class="font-unna-400-it text-[28px]">Subscribe to our Newsletter!</h3>
                            <form class="flex flex-row justify-between items-center h-10 w-[416px] my-3" action="" method="">
                                <input class="mt-o bg-white/[.62] font-jose-400-it text-base h-full w-[281px] rounded-l-full pl-8" type="email" name="email" placeholder="email@gmail.com">
                                <input class="font-unna-700-it bg-white text-primary-dark2 text-[19px] h-full w-[130px] rounded-r-full" type="submit" value="SIGN ME UP!">
                            </form>
                            <p class="font-jose-400-it text-center text-sm">Stay up to date with our monthly newsletter <br/>on our publications, announcements and projects. <br/>Read our EU GDPR compliant policy.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-center items-center gap-8">
                <p class="font-unna-400-it text-[27px]">Follow us on social media!</p>
                <div class="flex flex-row justify-center items-center gap-5">
                    <a href="" target="blank">
                        <img class="w-[35px]" src="../images/icons/facebook-footer.svg" alt="Facebook icon">
                    </a>
                    <a href="" target="blank">
                        <img class="w-[35px]" src="../images/icons/twitter-footer.svg" alt="Twitter icon">
                    </a>
                    <a href="" target="blank">
                        <img class="w-[35px]" src="../images/icons/youtube-footer.svg" alt="Youtube icon">
                    </a>
                    <a href="" target="blank">
                        <img class="w-[35px]" src="../images/icons/linkedln-footer.svg" alt="LinkedIn icon">
                    </a>
                </div>
            </div>
        </div>
        

        <!-- END DESKTOP FOOTER -->



    </footer>
    `}};dt=Ft([A("my-footer")],dt);var Jt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,Gt=(o,t,e,i)=>{for(var r=i>1?void 0:i?Kt(t,e):t,n=o.length-1,a;n>=0;n--)(a=o[n])&&(r=(i?a(t,e,r):a(r))||r);return i&&r&&Jt(t,e,r),r};let mt=class extends j(u){render(){return E`
            <main>
                <h1 class="md:hidden text-center font-unna-700 text-xl my-2">TIME&PLACE FUNDING</h1>
                <p class="text-center font-jose-400-it text-sm md:text-[21px] xl:text-2xl my-5 md:my-7">Our presence, your opportunities</p>
                <p class="w-4/5 md:w-[70%] m-auto my-10 xl:my-20 font-unna-700 text-center text-xl md:text-[27px] xl:text-[31px] leading-6 md:leading-8 xl:leading-[42px]">
                    As big business, SME, entrepreneur, academic institution, NGO, government, local or regional body you can benefit from International, EU, national, regional and local funding schemes
                </p>
                <landing-page-list></landing-page-list>
                <a href="#" class="block mt-14 md:mt-24 xl:mt-40 mb-14 md:mb-24 xl:mb-40 font-unna-700 text-primary text-xl md:text-[25px] xl:text-[31px] text-center m-auto">Check out our international presence!</a>
                <landing-page-mobile-newsroom></landing-page-mobile-newsroom>
                <landing-page-big-newsroom></landing-page-big-newsroom>
            </main>           
        `}};mt=Gt([A("landing-page")],mt);var qt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Yt=(o,t,e,i)=>{for(var r=i>1?void 0:i?Vt(t,e):t,n=o.length-1,a;n>=0;n--)(a=o[n])&&(r=(i?a(t,e,r):a(r))||r);return i&&r&&qt(t,e,r),r};let ht=class extends j(u){render(){return E`
        <div class="flex flex-col items-center w-[90%] sm:w-[80%] md:w-[70%] xl:w-[60%] 2xl:w-[50%] m-auto">
            
            <style>
                ol {
                    counter-reset: ol;
                }
                ol li:before {
                    content: counter(ol);
                    counter-increment: ol;
                    position:absolute;
                    translate: -55px -6px;
                    font-style: normal;
                    font-size: 25px;
                    color: white;
                    background-color: #399AC2;
                    width: 35px;
                    height: 35px;
                    padding: 11px;
                    margin-bottom: 20px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    text-align: center;
                }
                ol li:first-child:before {
                    padding-left: 13px;
                }
                @media only screen and (min-width: 768px) {
                    ol li:before {
                        font-size: 30px;
                        width: 50px;
                        height: 50px;
                        translate: -68px -12px;
                        padding: 18px;
                    }
                    ol li:first-child:before {
                        padding-left: 19px;
                    }
                }
                @media only screen and (min-width: 1280px) {
                    ol li:before {
                        font-size: 38px;
                        width: 64px;
                        height: 64px;
                        translate: -90px -18px;
                        padding: 22px;
                    }
                    ol li:first-child:before {
                        padding-left: 25px;
                    }
                }
            </style>
            <ol class="relative font-unna-700-it text-[17px] md:text-[23px] leading-5 md:leading-7 pl-[60px] md:pl-[72px] xl:pl-[92px]">
                <li class="responsive-ordered-list-items">We <span class="text-primary">"walk and talk"</span> you through the Project Life Cycle.</li>
                <li class="responsive-ordered-list-items">We identify your <span class="text-primary">public funding and investment</span> opportunities.</li>
                <li class="responsive-ordered-list-items">We <span class="text-primary">build your proposal</span> and form your consortium.</li>
                <li class="responsive-ordered-list-items">We <span class="text-primary">coordinate the project</span> and run the consortium.</li>
                <li class="responsive-ordered-list-items">We provide <span class="text-primary">training on all stages</span> of the Project Life Cycle.</li>
            </ol>
        </div>
        `}};ht=Yt([A("landing-page-list")],ht);var Zt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,Xt=(o,t,e,i)=>{for(var r=i>1?void 0:i?Qt(t,e):t,n=o.length-1,a;n>=0;n--)(a=o[n])&&(r=(i?a(t,e,r):a(r))||r);return i&&r&&Zt(t,e,r),r};let ct=class extends j(u){render(){return E`
            <div class=" md:hidden mt-4 mb-4">
                <h1 class="font-unna-700 text-xl text-center">NEWSROOM</h1>               
                <p class="font-jose-400-it text-sm text-center my-9">What's trending:</p>
                <div class="flex flex-col mx-5 mt-4">
                    <div class="flex justify-center items-center relative h-[200px] my-[6px] bg-primary">   <!-- DEFAULT NEWS BLOCK -->
                        <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[15%] p-3 pr-5 bg-white font-unna-700-it text-base text-primary-dark2">T&P Insights</div>
                        <div class="absolute top-0 right-0 p-2 leading-4">
                            <p class="font-jose-600 text-[10px] uppercase text-white text-right">Portugal</p>
                            <p class="font-jose-300 text-[13px] text-white text-right">March 18, 2022</p>
                        </div>
                        <h3 class="p-6 font-unna-700 text-[21px] text-white leading-6">What is the EU Global Gateway initiative?</h3>
                        <a href="newsroom-article.html" class="absolute bottom-2 right-2 w-[87px] h-8 flex justify-center items-center pt-[2px] border-2 border-white rounded-full font-jose-600 text-white text-[10px] leading-3 hover:text-primary-dark2 hover:bg-white hover:border-white cursor-pointer">READ MORE</a>
                    </div>
                    <div class=" flex justify-center items-center relative h-[200px] my-[6px] ">   <!-- BACKGROUND PICTURE NEWS BLOCK -->
                        <img class="object-cover h-full w-full" src="../images/newsroom/newsroom-india.png" alt="">
                        <div class="newsroom-block-photo-layer absolute top-0 bottom-0 right-0 left-0"></div>
                        <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[15%] p-3 pr-5 bg-white font-unna-700-it text-base text-primary-dark2">T&P Insights</div>
                        <div class="absolute top-0 right-0 p-2 leading-4">
                            <p class="font-jose-600 text-[10px] uppercase text-white text-right">India</p>
                            <p class="font-jose-300 text-[13px] text-white text-right">March 18, 2022</p>
                        </div>
                        <h3 class="absolute p-6 font-unna-700 text-[21px] z-10 text-white leading-6">EU-India Trade Relations: Now and an even brighter future</h3>
                        <a href="newsroom-article.html" class="absolute bottom-2 right-2 w-[87px] h-8 flex justify-center items-center pt-[2px] border-2 border-white rounded-full font-jose-600 text-white text-[10px] leading-3 hover:text-primary-dark2 hover:bg-white hover:border-white cursor-pointer">READ MORE</a>
                    </div>
                    <div class="flex justify-center items-center relative h-[200px] my-[6px] border border-primary text-primary-dark2">   <!-- WHITE NEWS BLOCK -->
                        <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl h-[15%] p-[13px] pr-5 bg-white font-unna-700-it text-base text-primary-dark2">T&P Announcement</div>
                        <div class="absolute top-0 right-0 p-2 leading-4">
                            <p class="font-jose-600 text-[10px] uppercase text-right">Brussels</p>
                            <p class="font-jose-300 text-[13px] text-right">February 12, 2021</p>
                        </div>
                        <h3 class="p-6 font-unna-700 text-[21px] leading-6">Time&Place becomes official partner of the European Paralympic Committee.</h3>
                        <a href="newsroom-article.html" class="absolute bottom-2 right-2 w-[87px] h-8 flex justify-center items-center pt-[2px] border-2 border-primary rounded-full font-jose-600 text-[10px] leading-3 hover:text-white hover:bg-primary hover:border-primary cursor-pointer">READ MORE</a>
                    </div>
                </div>
                <div class="flex justify-center items-center pt-[2px] w-28 h-9 m-auto mt-6 mb-16 border-2 border-primary-dark2 rounded-full font-jose-600 text-primary-dark2 text-[10px] md:text-base cursor-pointer hover:text-white hover:bg-primary hover:border-primary">LOAD MORE</div> 
            </div>      
        `}};ct=Xt([A("landing-page-mobile-newsroom")],ct);var te=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,ie=(o,t,e,i)=>{for(var r=i>1?void 0:i?ee(t,e):t,n=o.length-1,a;n>=0;n--)(a=o[n])&&(r=(i?a(t,e,r):a(r))||r);return i&&r&&te(t,e,r),r};let xt=class extends j(u){render(){return E`
            <div class="hidden md:block">
                <h1 class="font-unna-700 text-xl md:text-[39px] xl:text-[50px] text-center mt-16 md:mt-20 xl:mt-28">NEWSROOM</h1>
                <p class="font-jose-400-it text-sm md:text-[21px] xl:text-2xl text-center my-9 md:my-12 xl:my-16">What's trending:</p>
                <div class="grid grid-rows-[35%_1fr] xl:block gap-4 mx-8 lg:mx-20 xl:mx-44 my-12">
                    <div class="xl:grid grid-cols-[1fr_40%_1fr] gap-4">
                        <div class="hidden xl:flex justify-center items-center relative h-[268px] xl:h-[328px] bg-primary">   <!-- DEFAULT NEWS BLOCK -->
                            <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                            <div class="absolute bottom-0 left-0 p-3 leading-4">
                                <p class="font-jose-600 text-xs text-white text-left uppercase">Portugal</p>
                                <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                            </div>
                            <h3 class="p-6 font-unna-700 text-[26px] text-white leading-6">What is the EU Global Gateway initiative?</h3>
                            <a href="newsroom-article.html" class="newsroom-btn-default">READ MORE</a>
                        </div>
                        <div class="relative h-[162px] xl:h-[328px] border-4 border-primary">   <!-- INTERACTIVE MAP NEWS BLOCK -->
                            <a href="./who-we-are.html">
                                <div class="relative w-2/5 xl:w-2/4 m-auto mt-24 xl:mt-48 z-10 flex justify-center text-center px-3 xl:px-4 py-2 xl:py-3 bg-primary-dark2/[.7] rounded-full font-jose-400 text-white text-base">Have a look at our interactive map!</div>
                            </a>
                            <img class="xl:hidden absolute top-0 right-0 object-cover h-full w-full" src="../../images/landing page/landing-page-map.png" alt="">
                            <img class="hidden xl:block absolute top-0 right-0 object-cover h-full w-full" src="../../images/landing page/landing-page-map-desktop.png" alt="">
                        </div>
                        <div class="hidden xl:flex justify-center items-center relative h-[268px] xl:h-[328px] bg-primary">   <!-- DEFAULT NEWS BLOCK -->
                            <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                            <div class="absolute bottom-0 left-0 p-3 leading-4">
                                <p class="font-jose-600 text-xs text-white text-left uppercase">Portugal</p>
                                <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                            </div>
                            <h3 class="p-6 font-unna-700 text-[26px] text-white leading-6">What is the EU Global Gateway initiative?</h3>
                            <a href="newsroom-article.html" class="newsroom-btn-default">READ MORE</a>
                        </div>                  
                    </div>
                    <div class="grid xl:hidden grid-cols-3 gap-4">
                        <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] bg-primary">   <!-- DEFAULT NEWS BLOCK -->
                            <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                            <div class="absolute bottom-0 left-0 p-3 leading-4">
                                <p class="font-jose-600 text-xs text-white text-left uppercase">Portugal</p>
                                <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                            </div>
                            <h3 class="p-6 font-unna-700 text-[26px] text-white leading-6">What is the EU Global Gateway initiative?</h3>
                            <a href="newsroom-article.html" class="newsroom-btn-default">READ MORE</a>
                        </div>
                        <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] border border-primary text-primary-dark2">   <!-- WHITE NEWS BLOCK -->
                            <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl h-[12%] p-[13px] pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Announcement</div>
                            <div class="absolute bottom-0 left-0 p-3 leading-4">
                                <p class="font-jose-600 text-xs text-left uppercase">European Union</p>
                                <p class="font-jose-300 text-xs text-left">February 12, 2021</p>
                            </div>
                            <h3 class="p-6 font-unna-700 text-[26px] leading-6">Time&Place becomes official partner of the European Paralympic Committee.</h3>
                            <a href="newsroom-article.html" class="newsroom-btn-white">READ MORE</a>
                        </div>
                        <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] ">   <!-- BACKGROUND PICTURE NEWS BLOCK -->
                            <img class="object-cover w-full h-full" src="../../images/newsroom/newsroom-india.png" alt="">
                            <div class="newsroom-block-photo-layer absolute top-0 bottom-0 right-0 left-0"></div>
                            <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                            <div class="absolute bottom-0 left-0 p-3 leading-4">
                                <p class="font-jose-600 text-xs text-white text-left uppercase">India</p>
                                <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                            </div>
                            <h3 class="absolute p-6 font-unna-700 text-[26px] z-10 text-white leading-6">EU-India Trade Relations: Now and an even brighter future</h3>
                            <a href="newsroom-article.html" class="newsroom-btn-pic">READ MORE</a>
                        </div>                        
                    </div>             
                </div>
                <a href="./newsroom.html">
                    <div class="flex justify-center items-center pt-[2px] w-36 xl:w-44 h-10 xl:h-11 m-auto mb-28 border-2 border-primary-dark2 rounded-full font-jose-600 text-primary-dark2 text-sm xl:text-base cursor-pointer hover:text-white hover:bg-primary hover:border-primary">FIND OUT MORE</div>
                </a>
            </div>
        `}};xt=ie([A("landing-page-big-newsroom")],xt);
