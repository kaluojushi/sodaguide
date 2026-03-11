const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-BTigPj2h-BSRgNaSi.js","assets/vidstack-player-B2VsO34a.js","assets/app-f5P5DfmM.js"])))=>i.map(i=>d[i]);
import{c as h,o as V,a as Dt,i as me,u as T,b as I,p as Mt,e as A,s as N,d as ve,f as v,w as It,C as fe,g as he,h as g,j as $e,k as Ot,l as be,m as ge,n as ye,q as xe,r as _t,t as Se,v as Pt,x as Te,y as K,z as lt,A as we,B as ke,D as F,$ as Ae,E as Ce,F as M,G as De,H as Lt,I as Gt,J as et,K as Me,L as Ie,M as Oe,N as _e,O as Nt}from"./vidstack-player-B2VsO34a.js";import{_ as Pe}from"./app-f5P5DfmM.js";import{A as O,T as Le,D as Tt,x as o,s as Ge,L as Bt}from"./vidstack-CwTj4H1w-DiaEMxg6.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=e=>e??O;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H={ATTRIBUTE:1,CHILD:2,BOOLEAN_ATTRIBUTE:4},z=e=>(...t)=>({_$litDirective$:e,values:t});let ut=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends ut{constructor(t){if(super(t),this.et=O,t.type!==H.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===O||t==null)return this.ft=void 0,this.et=t;if(t===Le)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const s=[t];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}};at.directiveName="unsafeHTML",at.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends at{}ot.directiveName="unsafeSVG",ot.resultType=2;const Ne=z(ot);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=e=>e.strings===void 0,Ve={},Fe=(e,t=Ve)=>e._$AH=t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=(e,t)=>{var s,n;const i=e._$AN;if(i===void 0)return!1;for(const l of i)(n=(s=l)._$AO)===null||n===void 0||n.call(s,t,!1),B(l,t);return!0},Q=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},Vt=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),We(t)}};function Ee(e){this._$AN!==void 0?(Q(this),this._$AM=e,Vt(this)):this._$AM=e}function Re(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let l=s;l<n.length;l++)B(n[l],!1),Q(n[l]);else n!=null&&(B(n,!1),Q(n));else B(this,e)}const We=e=>{var t,s,n,i;e.type==H.CHILD&&((t=(n=e)._$AP)!==null&&t!==void 0||(n._$AP=Re),(s=(i=e)._$AQ)!==null&&s!==void 0||(i._$AQ=Ee))};class Ft extends ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),Vt(this),this.isConnected=t._$AU}_$AO(t,s=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)===null||n===void 0||n.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),s&&(B(this,t),Q(this))}setValue(t){if(Be(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}class Ke extends Ft{#t=null;#s=!1;#e=null;constructor(t){super(t),this.#s=t.type===H.ATTRIBUTE||t.type===H.BOOLEAN_ATTRIBUTE}render(t){return t!==this.#t&&(this.disconnected(),this.#t=t,this.isConnected&&this.#n()),this.#t?this.#i(Mt(this.#t)):O}reconnected(){this.#n()}disconnected(){this.#e?.(),this.#e=null}#n(){this.#t&&(this.#e=A(this.#o.bind(this)))}#i(t){return this.#s?rt(t):t}#a(t){this.setValue(this.#i(t))}#o(){this.#a(this.#t?.())}}function a(e){return z(Ke)(h(e))}class Et{#t;#s;elements=new Set;constructor(t,s){this.#t=t,this.#s=s}connect(){this.#n();const t=new MutationObserver(this.#e);for(const s of this.#t)t.observe(s,{childList:!0,subtree:!0});V(()=>t.disconnect()),V(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,s){me(t)?(s.textContent="",s.append(t)):(Tt(null,s),Tt(t,s)),s.style.display||(s.style.display="contents");const n=s.firstElementChild;if(!n)return;const i=s.getAttribute("data-class");i&&n.classList.add(...i.split(" "))}#e=Dt(this.#n.bind(this));#n(t){if(t&&!t.some(i=>i.addedNodes.length))return;let s=!1,n=this.#t.flatMap(i=>[...i.querySelectorAll("slot")]);for(const i of n)!i.hasAttribute("name")||this.elements.has(i)||(this.elements.add(i),s=!0);s&&this.#s(this.elements)}}let He=0,W="data-slot-id";class Rt{#t;slots;constructor(t){this.#t=t,this.slots=new Et(t,this.#e.bind(this))}connect(){this.slots.connect(),this.#e();const t=new MutationObserver(this.#s);for(const s of this.#t)t.observe(s,{childList:!0});V(()=>t.disconnect())}#s=Dt(this.#e.bind(this));#e(){for(const t of this.#t)for(const s of t.children){if(s.nodeType!==1)continue;const n=s.getAttribute("slot");if(!n)continue;s.style.display="none";let i=s.getAttribute(W);i||s.setAttribute(W,i=++He+"");for(const l of this.slots.elements){if(l.getAttribute("name")!==n||l.getAttribute(W)===i)continue;const r=document.importNode(s,!0);n.includes("-icon")&&r.classList.add("vds-icon"),r.style.display="",r.removeAttribute("slot"),this.slots.assign(r,l),l.setAttribute(W,i)}}}}function Qe({name:e,class:t,state:s,paths:n,viewBox:i="0 0 32 32"}){return o`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="${i}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${rt(e??s)}
  >
    ${I(n)?Ne(n):a(n)}
  </svg>`}class Ue{#t={};#s=!1;slots;constructor(t){this.slots=new Et(t,this.#n.bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then(t=>{this.#t=t,this.#s=!0,this.#n()})}*#e(){for(const t of Object.keys(this.#t)){const s=`${t}-icon`;for(const n of this.slots.elements)n.name===s&&(yield{icon:this.#t[t],slot:n})}}#n(){if(this.#s)for(const{icon:t,slot:s}of this.#e())this.slots.assign(t,s)}}class ze extends Ue{connect(){super.connect();const{player:t}=T();if(!t.el)return;let s,n=new IntersectionObserver(i=>{i[0]?.isIntersecting&&(s?.(),s=void 0,this.load())});n.observe(t.el),s=V(()=>n.disconnect())}}const st=new WeakMap,q=z(class extends Ft{render(e){return O}update(e,[t]){var s;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=(s=e.options)===null||s===void 0?void 0:s.host,this.ot(this.lt=e.element)),O}ot(e){var t;if(typeof this.G=="function"){const s=(t=this.dt)!==null&&t!==void 0?t:globalThis;let n=st.get(s);n===void 0&&(n=new WeakMap,st.set(s,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,s;return typeof this.G=="function"?(t=st.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.G):(s=this.G)===null||s===void 0?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Wt=Se();function u(){return ve(Wt)}const qe={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};class dt extends fe{static props=qe;#t;#s=h(()=>{const t=this.$props.when();return this.#n(t)});#e=h(()=>{const t=this.$props.smallWhen();return this.#n(t)});get isMatch(){return this.#s()}get isSmallLayout(){return this.#e()}onSetup(){this.#t=T(),this.setAttributes({"data-match":this.#s,"data-sm":()=>this.#e()?"":null,"data-lg":()=>this.#e()?null:"","data-size":()=>this.#e()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),he(Wt,{...this.$props,when:this.#s,smallWhen:this.#e,userPrefersAnnouncements:g(!0),userPrefersKeyboardAnimations:g(!0),menuPortal:g(null)})}onAttach(t){It(t,this.$props.colorScheme)}#n(t){return t!=="never"&&($e(t)?t:h(()=>t(this.#t.player.state))())}}const Kt=dt.prototype;Lt(Kt,"isMatch");Lt(Kt,"isSmallLayout");function Ht(e,t){A(()=>{const{player:s}=T(),n=s.el;return n&&N(n,"data-layout",t()&&e),()=>n?.removeAttribute("data-layout")})}function S(e,t){return e()?.[t]??t}function ct(){return a(()=>{const{translations:e,userPrefersAnnouncements:t}=u();return t()?o`<media-announcer .translations=${a(e)}></media-announcer>`:null})}function w(e,t=""){return o`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:""}`}
  ></slot>`}function E(e){return e.map(t=>w(t))}function d(e,t){return a(()=>S(e,t))}function pt({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:s}=v(),n=a(()=>{const l=S(t,"AirPlay"),r=_t(s());return`${l} ${r}`}),i=d(t,"AirPlay");return o`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${n}>
          ${w("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Qt({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:s}=v(),n=a(()=>{const l=S(t,"Google Cast"),r=_t(s());return`${l} ${r}`}),i=d(t,"Google Cast");return o`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${n}>
          ${w("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function j({tooltip:e}){const{translations:t}=u(),s=d(t,"Play"),n=d(t,"Pause");return o`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${d(t,"Play")}
        >
          ${E(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function wt({tooltip:e,ref:t=Te}){const{translations:s}=u(),n=d(s,"Mute"),i=d(s,"Unmute");return o`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(s,"Mute")}
          ${q(t)}
        >
          ${E(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${i}</span>
        <span class="vds-unmute-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function mt({tooltip:e}){const{translations:t}=u(),s=d(t,"Closed-Captions On"),n=d(t,"Closed-Captions Off");return o`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${d(t,"Captions")}
        >
          ${E(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${n}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function je(){const{translations:e}=u(),t=d(e,"Enter PiP"),s=d(e,"Exit PiP");return o`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${d(e,"PiP")}
        >
          ${E(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ut({tooltip:e}){const{translations:t}=u(),s=d(t,"Enter Fullscreen"),n=d(t,"Exit Fullscreen");return o`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${d(t,"Fullscreen")}
        >
          ${E(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function kt({backward:e,tooltip:t}){const{translations:s,seekStep:n}=u(),i=e?"Seek Backward":"Seek Forward",l=d(s,i);return o`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${a(()=>(e?-1:1)*n())}
          aria-label=${l}
        >
          ${w(e?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${d(s,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function zt(){const{translations:e}=u(),{live:t}=v(),s=d(e,"Skip To Live"),n=d(e,"LIVE");return t()?o`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${n}</span>
        </media-live-button>
      `:null}function vt(){return a(()=>{const{download:e,translations:t}=u(),s=e();if(ge(s))return null;const{source:n,title:i}=v(),l=n(),r=ye({title:i(),src:l,download:s});return I(r?.url)?o`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${d(t,"Download")}
                href=${xe(r.url,{download:r.name})}
                download=${r.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${d(t,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function ft(){const{translations:e}=u();return o`
    <media-captions
      class="vds-captions"
      .exampleText=${d(e,"Captions look like this")}
    ></media-captions>
  `}function C(){return o`<div class="vds-controls-spacer"></div>`}function qt(e,t){return o`
    <media-menu-portal .container=${a(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function jt(e,t,s,n){let i=I(t)?document.querySelector(t):t;i||(i=e?.closest("dialog")),i||(i=document.body);const l=document.createElement("div");l.style.display="contents",l.classList.add(s),i.append(l),A(()=>{if(!l)return;const{viewType:p}=v(),c=n();N(l,"data-view-type",p()),N(l,"data-sm",c),N(l,"data-lg",!c),N(l,"data-size",c?"sm":"lg")});const{colorScheme:r}=u();return It(l,r),l}function Yt({placement:e,tooltip:t,portal:s}){const{textTracks:n}=T(),{viewType:i,seekableStart:l,seekableEnd:r}=v(),{translations:p,thumbnails:c,menuPortal:$,noModal:f,menuGroup:m,smallWhen:b}=u();if(h(()=>{const ce=l(),pe=r(),xt=g(null);return Pt(n,"chapters",xt.set),!xt()?.cues.filter(St=>St.startTime<=pe&&St.endTime>=ce)?.length})())return null;const x=h(()=>f()?K(e):b()?null:K(e)),L=h(()=>!b()&&m()==="bottom"&&i()==="video"?26:0),G=g(!1);function re(){G.set(!0)}function ue(){G.set(!1)}const de=o`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${a(x)}
      offset=${a(L)}
    >
      ${a(()=>G()?o`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${a(c)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `:null)}
    </media-menu-items>
  `;return o`
    <media-menu class="vds-chapters-menu vds-menu" @open=${re} @close=${ue}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${d(p,"Chapters")}
          >
            ${w("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${lt(t)?a(t):t}
        >
          ${d(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${qt($,de)}
    </media-menu>
  `}function nt(e){const{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}const ht={type:"color"},Ye={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},Ze={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null},Je={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null},Xe={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},U={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},_=Object.keys(U).reduce((e,t)=>({...e,[t]:g(U[t])}),{});for(const e of Object.keys(_)){const t=localStorage.getItem(`vds-player:${F(e)}`);I(t)&&_[e].set(t)}function ts(){for(const e of Object.keys(_)){const t=U[e];_[e].set(t)}}let At=!1,it=new Set;function es(){const{player:e}=T();it.add(e),V(()=>it.delete(e)),At||(we(()=>{for(const t of ke(_)){const s=_[t],n=U[t],i=`--media-user-${F(t)}`,l=`vds-player:${F(t)}`;A(()=>{const r=s(),p=r===n,c=p?null:ss(e,t,r);for(const $ of it)$.el?.style.setProperty(i,c);p?localStorage.removeItem(l):localStorage.setItem(l,r)})}},null),At=!0)}function ss(e,t,s){switch(t){case"fontFamily":const n=s==="capitals"?"small-caps":"";return e.el?.style.setProperty("--media-user-font-variant",n),is(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return ns(s);case"textColor":return`rgb(${nt(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return as(s);case"textBg":return`rgb(${nt(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${nt(s)} / var(--media-user-display-bg-opacity, 1))`}}function ns(e){return(parseInt(e)/100).toString()}function is(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function as(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}let os=0;function k({label:e="",value:t="",children:s}){if(!e)return o`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const n=`vds-menu-section-${++os}`;return o`
    <section class="vds-menu-section" role="group" aria-labelledby=${n}>
      <div class="vds-menu-section-title">
        <header id=${n}>${e}</header>
        ${t?o`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function R({label:e,children:t}){return o`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function P({label:e,icon:t,hint:s}){return o`
    <media-menu-button class="vds-menu-item">
      ${w("menu-arrow-left","vds-menu-close-icon")}
      ${t?w(t,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${a(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?a(s):null} </span>
      ${w("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function ls({value:e=null,options:t,hideLabel:s=!1,children:n=null,onChange:i=null}){function l(r){const{value:p,label:c}=r;return o`
      <media-radio class="vds-radio" value=${p}>
        ${w("menu-radio-check")}
        ${s?null:o`
              <span class="vds-radio-label" data-part="label">
                ${I(c)?c:a(c)}
              </span>
            `}
        ${lt(n)?n(r):n}
      </media-radio>
    `}return o`
    <media-radio-group
      class="vds-radio-group"
      value=${I(e)?e:e?a(e):""}
      @change=${i}
    >
      ${M(t)?t.map(l):a(()=>t().map(l))}
    </media-radio-group>
  `}function rs(e){return M(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function Y(){return o`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function Z(){return o`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function J({label:e=null,value:t=null,upIcon:s="",downIcon:n="",children:i,isMin:l,isMax:r}){const p=e||t,c=[n?w(n,"down"):null,i,s?w(s,"up"):null];return o`
    <div
      class=${`vds-menu-item vds-menu-slider-item${p?" group":""}`}
      data-min=${a(()=>l()?"":null)}
      data-max=${a(()=>r()?"":null)}
    >
      ${p?o`
            <div class="vds-menu-slider-title">
              ${[e?o`<div>${e}</div>`:null,t?o`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const us={...Ze,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},$t={...Je,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function ds(){return a(()=>{const{hasCaptions:e}=v(),{translations:t}=u();return e()?o`
      <media-menu class="vds-font-menu vds-menu">
        ${P({label:()=>S(t,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[k({label:d(t,"Font"),children:[cs(),ps()]}),k({label:d(t,"Text"),children:[ms(),fs(),vs()]}),k({label:d(t,"Text Background"),children:[hs(),$s()]}),k({label:d(t,"Display Background"),children:[bs(),gs()]}),k({children:[ys()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function cs(){return D({label:"Family",option:Ye,type:"fontFamily"})}function ps(){return D({label:"Size",option:us,type:"fontSize"})}function ms(){return D({label:"Color",option:ht,type:"textColor"})}function vs(){return D({label:"Opacity",option:$t,type:"textOpacity"})}function fs(){return D({label:"Shadow",option:Xe,type:"textShadow"})}function hs(){return D({label:"Color",option:ht,type:"textBg"})}function $s(){return D({label:"Opacity",option:$t,type:"textBgOpacity"})}function bs(){return D({label:"Color",option:ht,type:"displayBg"})}function gs(){return D({label:"Opacity",option:$t,type:"displayBgOpacity"})}function ys(){const{translations:e}=u();return o`
    <button class="vds-menu-item" role="menuitem" @click=${ts}>
      <span class="vds-menu-item-label">${a(()=>S(e,"Reset"))}</span>
    </button>
  `}function D({label:e,option:t,type:s}){const{player:n}=T(),{translations:i}=u(),l=_[s],r=()=>S(i,e);function p(){De(),n.dispatchEvent(new Event("vds-font-change"))}if(t.type==="color"){let f=function(m){l.set(m.target.value),p()};return R({label:a(r),children:o`
        <input
          class="vds-color-picker"
          type="color"
          .value=${a(l)}
          @input=${f}
        />
      `})}if(t.type==="slider"){let f=function(G){l.set(G.detail+"%"),p()};const{min:m,max:b,step:y,upIcon:x,downIcon:L}=t;return J({label:a(r),value:a(l),upIcon:x,downIcon:L,isMin:()=>l()===m+"%",isMax:()=>l()===b+"%",children:o`
        <media-slider
          class="vds-slider"
          min=${m}
          max=${b}
          step=${y}
          key-step=${y}
          .value=${a(()=>parseInt(l()))}
          aria-label=${a(r)}
          @value-change=${f}
          @drag-value-change=${f}
        >
          ${Y()}${Z()}
        </media-slider>
      `})}const c=rs(t.values),$=()=>{const f=l(),m=c.find(b=>b.value===f)?.label||"";return S(i,I(m)?m:m())};return o`
    <media-menu class=${`vds-${F(s)}-menu vds-menu`}>
      ${P({label:r,hint:$})}
      <media-menu-items class="vds-menu-items">
        ${ls({value:l,options:c,onChange({detail:f}){l.set(f),p()}})}
      </media-menu-items>
    </media-menu>
  `}function X({label:e,checked:t,defaultChecked:s=!1,storageKey:n,onChange:i}){const{translations:l}=u(),r=n?localStorage.getItem(n):null,p=g(!!(r??s)),c=g(!1),$=a(Ae(p)),f=d(l,e);n&&i(Mt(p)),t&&A(()=>void p.set(t()));function m(x){x?.button!==1&&(p.set(L=>!L),n&&localStorage.setItem(n,p()?"1":""),i(p(),x),c.set(!1))}function b(x){Ce(x)&&m()}function y(x){x.button===0&&c.set(!0)}return o`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${f}
      aria-checked=${$}
      data-active=${a(()=>c()?"":null)}
      @pointerup=${m}
      @pointerdown=${y}
      @keydown=${b}
    ></div>
  `}function xs(){return a(()=>{const{translations:e}=u();return o`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${P({label:()=>S(e,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[k({children:[Ss(),Ts()]}),k({children:[ds()]})]}
        </media-menu-items>
      </media-menu>
    `})}function Ss(){const{userPrefersAnnouncements:e,translations:t}=u(),s="Announcements";return R({label:d(t,s),children:X({label:s,storageKey:"vds-player::announcements",onChange(n){e.set(n)}})})}function Ts(){return a(()=>{const{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:s}=u(),{viewType:n}=v();if(h(()=>n()!=="video"||s())())return null;const l="Keyboard Animations";return R({label:d(e,l),children:X({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(r){t.set(r)}})})})}function ws(){return a(()=>{const{noAudioGain:e,translations:t}=u(),{audioTracks:s,canSetAudioGain:n}=v();return h(()=>!(n()&&!e())&&s().length<=1)()?null:o`
      <media-menu class="vds-audio-menu vds-menu">
        ${P({label:()=>S(t,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[ks(),As()]}
        </media-menu-items>
      </media-menu>
    `})}function ks(){return a(()=>{const{translations:e}=u(),{audioTracks:t}=v(),s=d(e,"Default");return h(()=>t().length<=1)()?null:k({children:o`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${P({label:()=>S(e,"Track")})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${s}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})})}function As(){return a(()=>{const{noAudioGain:e,translations:t}=u(),{canSetAudioGain:s}=v();if(h(()=>!s()||e())())return null;const{audioGain:i}=v();return k({label:d(t,"Boost"),value:a(()=>Math.round(((i()??1)-1)*100)+"%"),children:[J({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:Cs(),isMin:()=>((i()??1)-1)*100<=Zt(),isMax:()=>((i()??1)-1)*100===Jt()})]})})}function Cs(){const{translations:e}=u(),t=d(e,"Boost"),s=Zt,n=Jt,i=Ds;return o`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${a(s)}
      max=${a(n)}
      step=${a(i)}
      key-step=${a(i)}
    >
      ${Y()}${Z()}
    </media-audio-gain-slider>
  `}function Zt(){const{audioGains:e}=u(),t=e();return M(t)?t[0]??0:t.min}function Jt(){const{audioGains:e}=u(),t=e();return M(t)?t[t.length-1]??300:t.max}function Ds(){const{audioGains:e}=u(),t=e();return M(t)?t[1]-t[0]||25:t.step}function Ms(){return a(()=>{const{translations:e}=u(),{hasCaptions:t}=v(),s=d(e,"Off");return t()?o`
      <media-menu class="vds-captions-menu vds-menu">
        ${P({label:()=>S(e,"Captions"),icon:"menu-captions"})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${s}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null})}function Is(){return a(()=>{const{translations:e}=u();return o`
      <media-menu class="vds-playback-menu vds-menu">
        ${P({label:()=>S(e,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[k({children:Os()}),_s(),Ns()]}
        </media-menu-items>
      </media-menu>
    `})}function Os(){const{remote:e}=T(),{translations:t}=u(),s="Loop";return R({label:d(t,s),children:X({label:s,storageKey:"vds-player::user-loop",onChange(n,i){e.userPrefersLoopChange(n,i)}})})}function _s(){return a(()=>{const{translations:e}=u(),{canSetPlaybackRate:t,playbackRate:s}=v();return t()?k({label:d(e,"Speed"),value:a(()=>s()===1?S(e,"Normal"):s()+"x"),children:[J({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:Ls(),isMin:()=>s()===Xt(),isMax:()=>s()===te()})]}):null})}function Xt(){const{playbackRates:e}=u(),t=e();return M(t)?t[0]??0:t.min}function te(){const{playbackRates:e}=u(),t=e();return M(t)?t[t.length-1]??2:t.max}function Ps(){const{playbackRates:e}=u(),t=e();return M(t)?t[1]-t[0]||.25:t.step}function Ls(){const{translations:e}=u(),t=d(e,"Speed"),s=Xt,n=te,i=Ps;return o`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${a(s)}
      max=${a(n)}
      step=${a(i)}
      key-step=${a(i)}
    >
      ${Y()}${Z()}
    </media-speed-slider>
  `}function Gs(){const{remote:e,qualities:t}=T(),{autoQuality:s,canSetQuality:n,qualities:i}=v(),{translations:l}=u(),r="Auto";return h(()=>!n()||i().length<=1)()?null:R({label:d(l,r),children:X({label:r,checked:s,onChange(c,$){c?e.requestAutoQuality($):e.changeQuality(t.selectedIndex,$)}})})}function Ns(){return a(()=>{const{hideQualityBitrate:e,translations:t}=u(),{canSetQuality:s,qualities:n,quality:i}=v(),l=h(()=>!s()||n().length<=1),r=h(()=>Ge(n()));return l()?null:k({label:d(t,"Quality"),value:a(()=>{const p=i()?.height,c=e()?null:i()?.bitrate,$=c&&c>0?`${(c/1e6).toFixed(2)} Mbps`:null,f=S(t,"Auto");return p?`${p}p${$?` (${$})`:""}`:f}),children:[J({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:Bs(),isMin:()=>r()[0]===i(),isMax:()=>r().at(-1)===i()}),Gs()]})})}function Bs(){const{translations:e}=u(),t=d(e,"Quality");return o`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${t}>
      ${Y()}${Z()}
    </media-quality-slider>
  `}function ee({placement:e,portal:t,tooltip:s}){return a(()=>{const{viewType:n}=v(),{translations:i,menuPortal:l,noModal:r,menuGroup:p,smallWhen:c}=u(),$=h(()=>r()?K(e):c()?null:K(e)),f=h(()=>!c()&&p()==="bottom"&&n()==="video"?26:0),m=g(!1);es();function b(){m.set(!0)}function y(){m.set(!1)}const x=o`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${a($)}
        offset=${a(f)}
      >
        ${a(()=>m()?[Is(),xs(),ws(),Ms()]:null)}
      </media-menu-items>
    `;return o`
      <media-menu class="vds-settings-menu vds-menu" @open=${b} @close=${y}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${d(i,"Settings")}
            >
              ${w("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${lt(s)?a(s):s}
          >
            ${d(i,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${qt(l,x)}
      </media-menu>
    `})}function bt({orientation:e,tooltip:t}){return a(()=>{const{pointer:s,muted:n,canSetVolume:i}=v();if(s()==="coarse"&&!n())return null;if(!i())return wt({tooltip:t});const l=g(void 0),r=be(l);return o`
      <div class="vds-volume" ?data-active=${a(r)} ${q(l.set)}>
        ${wt({tooltip:t})}
        <div class="vds-volume-popup">${Vs({orientation:e})}</div>
      </div>
    `})}function Vs({orientation:e}={}){const{translations:t}=u(),s=d(t,"Volume");return o`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${rt(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function gt(){const e=g(void 0),t=g(0),{thumbnails:s,translations:n,sliderChaptersMinWidth:i,disableTimeSlider:l,seekStep:r,noScrubGesture:p}=u(),c=d(n,"Seek"),$=a(l),f=a(()=>t()<i()),m=a(s);return Ot(e,()=>{const b=e();b&&t.set(b.clientWidth)}),o`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${a(r)}
      ?disabled=${$}
      ?no-swipe-gesture=${a(p)}
      ${q(e.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${f}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${m}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function Fs(){return o`
    <div class="vds-time-group">
      ${a(()=>{const{duration:e}=v();return e()?[o`<media-time class="vds-time" type="current"></media-time>`,o`<div class="vds-time-divider">/</div>`,o`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function Es(){return a(()=>{const{live:e,duration:t}=v();return e()?zt():t()?o`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function se(){return a(()=>{const{live:e}=v();return e()?zt():Fs()})}function ne(){return a(()=>{const{textTracks:e}=T(),{title:t,started:s}=v(),n=g(null);return Pt(e,"chapters",n.set),n()&&(s()||!t())?ie():o`<media-title class="vds-chapter-title"></media-title>`})}function ie(){return o`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class ae extends ze{async loadIcons(){const t=(await Pe(async()=>{const{icons:n}=await import("./vidstack-BTigPj2h-BSRgNaSi.js");return{icons:n}},__vite__mapDeps([0,1,2]))).icons,s={};for(const n of Object.keys(t))s[n]=Qe({name:n,paths:t[n]});return s}}let Rs=class extends dt{static props={...super.props,when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576}};function Ws(){return[ct(),ft(),o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[kt({backward:!0,tooltip:"top start"}),j({tooltip:"top"}),kt({tooltip:"top"}),Ks(),gt(),Es(),bt({orientation:"vertical",tooltip:"top"}),mt({tooltip:"top"}),vt(),pt({tooltip:"top"}),Hs()]}
        </media-controls-group>
      </media-controls>
    `]}function Ks(){return a(()=>{let e=g(void 0),t=g(!1),s=T(),{title:n,started:i,currentTime:l,ended:r}=v(),{translations:p}=u(),c=Ie(e),$=()=>i()||l()>0;const f=()=>{const y=r()?"Replay":$()?"Continue":"Play";return`${S(p,y)}: ${n()}`};A(()=>{c()&&document.activeElement===document.body&&s.player.el?.focus({preventScroll:!0})});function m(){const y=e(),x=!!y&&!c()&&y.clientWidth<y.children[0].clientWidth;y&&Oe(y,"vds-marquee",x),t.set(x)}function b(){return o`
        <span class="vds-title-text">
          ${a(f)}${a(()=>$()?ie():null)}
        </span>
      `}return Ot(e,m),n()?o`
          <span class="vds-title" title=${a(f)} ${q(e.set)}>
            ${[b(),a(()=>t()&&!c()?b():null)]}
          </span>
        `:C()})}function Hs(){const e="top end";return[Yt({tooltip:"top",placement:e,portal:!0}),ee({tooltip:"top end",placement:e,portal:!0})]}class Qs extends Gt(Bt,Rs){static tagName="media-audio-layout";static attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};#t;#s=g(!1);onSetup(){this.forwardKeepAlive=!1,this.#t=T(),this.classList.add("vds-audio-layout"),this.#i()}onConnect(){Ht("audio",()=>this.isMatch),this.#n()}render(){return a(this.#e.bind(this))}#e(){return this.isMatch?Ws():null}#n(){const{menuPortal:t}=u();A(()=>{if(!this.isMatch)return;const s=jt(this,this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),n=s?[this,s]:[this];return(this.$props.customIcons()?new Rt(n):new ae(n)).connect(),t.set(s),()=>{s.remove(),t.set(null)}})}#i(){const{pointer:t}=this.#t.$state;A(()=>{t()==="coarse"&&A(this.#a.bind(this))})}#a(){if(!this.#s()){et(this,"pointerdown",this.#o.bind(this),{capture:!0});return}et(this,"pointerdown",t=>t.stopPropagation()),et(window,"pointerdown",this.#l.bind(this))}#o(t){const{target:s}=t;Me(s)&&s.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.#s.set(!0))}#l(){this.#s.set(!1),this.removeAttribute("data-scrubbing")}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us=z(class extends ut{constructor(){super(...arguments),this.key=O}render(e,t){return this.key=e,t}update(e,[t,s]){return t!==this.key&&(Fe(e),this.key=t),s}});class zs extends dt{static props={...super.props,when:({viewType:t})=>t==="video",smallWhen:({width:t,height:s})=>t<576||s<380}}function oe(){return a(()=>{const e=T(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:s}=u();if(h(()=>t()||!s())())return null;const i=g(!1),{lastKeyboardAction:l}=e.$state;A(()=>{i.set(!!l());const m=setTimeout(()=>i.set(!1),500);return()=>{i.set(!1),window.clearTimeout(m)}});const r=h(()=>{const m=l()?.action;return m&&i()?F(m):null}),p=h(()=>`vds-kb-action${i()?"":" hidden"}`),c=h(qs),$=h(()=>{const m=js();return m?_e(m):null});function f(){const m=$();return m?o`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${m}</div>
        </div>
      `:null}return o`
      <div class=${a(p)} data-action=${a(r)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${a(c)}</div>
        </div>
        ${a(()=>Us(l(),f()))}
      </div>
    `})}function qs(){const{$state:e}=T(),t=e.lastKeyboardAction()?.action,s=e.audioGain()??1;switch(t){case"toggleMuted":return e.muted()?"0%":Ct(e.volume(),s);case"volumeUp":case"volumeDown":return Ct(e.volume(),s);default:return""}}function Ct(e,t){return`${Math.round(e*t*100)}%`}function js(){const{$state:e}=T();switch(e.lastKeyboardAction()?.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function Ys(){return[ct(),le(),tt(),oe(),ft(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        ${[Js(),C(),o`<media-controls-group class="vds-controls-group"></media-controls-group>`,C(),o`
            <media-controls-group class="vds-controls-group">
              ${gt()}
            </media-controls-group>
          `,o`
            <media-controls-group class="vds-controls-group">
              ${[j({tooltip:"top start"}),bt({orientation:"horizontal",tooltip:"top"}),se(),ne(),mt({tooltip:"top"}),Zs(),pt({tooltip:"top"}),Qt({tooltip:"top"}),vt(),je(),Ut({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function Zs(){return a(()=>{const{menuGroup:e}=u();return e()==="bottom"?yt():null})}function Js(){return o`
    <media-controls-group class="vds-controls-group">
      ${a(()=>{const{menuGroup:e}=u();return e()==="top"?[C(),yt()]:null})}
    </media-controls-group>
  `}function Xs(){return[ct(),le(),tt(),ft(),oe(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[pt({tooltip:"top start"}),Qt({tooltip:"bottom start"}),C(),mt({tooltip:"bottom"}),vt(),yt(),bt({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${C()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[C(),j({tooltip:"top"}),C()]}
        </media-controls-group>

        ${C()}

        <media-controls-group class="vds-controls-group">
          ${[se(),ne(),Ut({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${gt()}
        </media-controls-group>
      </media-controls>
    `,en()]}function tn(){return o`
    <div class="vds-load-container">
      ${[tt(),j({tooltip:"top"})]}
    </div>
  `}function en(){return a(()=>{const{duration:e}=v();return e()===0?null:o`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function tt(){return o`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function yt(){const{menuGroup:e,smallWhen:t}=u(),s=()=>e()==="top"||t()?"bottom":"top",n=h(()=>`${s()} ${e()==="top"?"end":"center"}`),i=h(()=>`${s()} end`);return[Yt({tooltip:n,placement:i,portal:!0}),ee({tooltip:n,placement:i,portal:!0})]}function le(){return a(()=>{const{noGestures:e}=u();return e()?null:o`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `})}class sn extends Gt(Bt,zs){static tagName="media-video-layout";static attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};#t;onSetup(){this.forwardKeepAlive=!1,this.#t=T(),this.classList.add("vds-video-layout")}onConnect(){Ht("video",()=>this.isMatch),this.#s()}render(){return a(this.#e.bind(this))}#s(){const{menuPortal:t}=u();A(()=>{if(!this.isMatch)return;const s=jt(this,this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),n=s?[this,s]:[this];return(this.$props.customIcons()?new Rt(n):new ae(n)).connect(),t.set(s),()=>{s.remove(),t.set(null)}})}#e(){const{load:t}=this.#t.$props,{canLoad:s,streamType:n,nativeControls:i}=this.#t.$state;return!i()&&this.isMatch?t()==="play"&&!s()?tn():n()==="unknown"?tt():this.isSmallLayout?Xs():Ys():null}}Nt(Qs);Nt(sn);
