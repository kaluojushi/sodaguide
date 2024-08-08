const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-DjhX0QGl-D6U2N1R0.js","assets/app-BuaBfjTv.js"])))=>i.map(i=>d[i]);
var ps=Object.defineProperty;var ms=Object.getPrototypeOf;var vs=Reflect.get;var me=e=>{throw TypeError(e)};var fs=(e,t,s)=>t in e?ps(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var P=(e,t,s)=>fs(e,typeof t!="symbol"?t+"":t,s),Gt=(e,t,s)=>t.has(e)||me("Cannot "+s);var v=(e,t,s)=>(Gt(e,t,"read from private field"),s?s.call(e):t.get(e)),b=(e,t,s)=>t.has(e)?me("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),D=(e,t,s,n)=>(Gt(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),h=(e,t,s)=>(Gt(e,t,"access private method"),s);var Nt=(e,t,s)=>vs(ms(e),s,t);import{L as x,M as at,N as ge,O as hs,Q as J,S as C,T as ye,U as _,V as $s,W as bs,X as gs,Y as w,Z as xe,_ as ys,$ as xs,a0 as st,a1 as g,a2 as ot,a3 as Ss,a4 as Ts,a5 as Se,a6 as ws,a7 as ks,a8 as Te,a9 as bt,aa as Yt,ab as Cs,ac as we,ad as As,ae as Ds,af as Ms,ag as V,ah as Is,ai as Os,aj as ke,ak as Lt,al as Ps,am as _s,an as Gs,ao as Ns,ap as Ce}from"./app-BuaBfjTv.js";import{A as R,T as Ls,D as ve,x as l,s as Bs,$ as Fs,L as Ae}from"./vidstack-B6YUXk6--Bp4ARBvF.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=e=>e??R;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},wt=e=>(...t)=>({_$litDirective$:e,values:t});let Xt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Rt=class extends Xt{constructor(t){if(super(t),this.et=R,t.type!==gt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||t==null)return this.ft=void 0,this.et=t;if(t===Ls)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const s=[t];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}};Rt.directiveName="unsafeHTML",Rt.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Et extends Rt{}Et.directiveName="unsafeSVG",Et.resultType=2;const Vs=wt(Et);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rs=e=>e.strings===void 0,Es={},Ws=(e,t=Es)=>e._$AH=t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=(e,t)=>{var s,n;const i=e._$AN;if(i===void 0)return!1;for(const o of i)(n=(s=o)._$AO)===null||n===void 0||n.call(s,t,!1),nt(o,t);return!0},yt=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},De=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Hs(t)}};function Ks(e){this._$AN!==void 0?(yt(this),this._$AM=e,De(this)):this._$AM=e}function Qs(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=s;o<n.length;o++)nt(n[o],!1),yt(n[o]);else n!=null&&(nt(n,!1),yt(n));else nt(this,e)}const Hs=e=>{var t,s,n,i;e.type==gt.CHILD&&((t=(n=e)._$AP)!==null&&t!==void 0||(n._$AP=Qs),(s=(i=e)._$AQ)!==null&&s!==void 0||(i._$AQ=Ks))};class Me extends Xt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),De(this),this.isConnected=t._$AU}_$AO(t,s=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)===null||n===void 0||n.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),s&&(nt(this,t),yt(this))}setValue(t){if(Rs(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}var G,lt,H,O,Wt,Kt,Ie,Oe;class Us extends Me{constructor(s){super(s);b(this,O);b(this,G,null);b(this,lt,!1);b(this,H,null);D(this,lt,s.type===gt.ATTRIBUTE||s.type===gt.BOOLEAN_ATTRIBUTE)}render(s){return s!==v(this,G)&&(this.disconnected(),D(this,G,s),this.isConnected&&h(this,O,Wt).call(this)),v(this,G)?h(this,O,Kt).call(this,ye(v(this,G))):R}reconnected(){h(this,O,Wt).call(this)}disconnected(){var s;(s=v(this,H))==null||s.call(this),D(this,H,null)}}G=new WeakMap,lt=new WeakMap,H=new WeakMap,O=new WeakSet,Wt=function(){v(this,G)&&D(this,H,_(h(this,O,Oe).bind(this)))},Kt=function(s){return v(this,lt)?Zt(s):s},Ie=function(s){this.setValue(h(this,O,Kt).call(this,s))},Oe=function(){var s;h(this,O,Ie).call(this,(s=v(this,G))==null?void 0:s.call(this))};function a(e){return wt(Us)(x(e))}var U,rt,St,ut,Qt;class Pe{constructor(t,s){b(this,ut);b(this,U);b(this,rt);P(this,"elements",new Set);b(this,St,ge(h(this,ut,Qt).bind(this)));D(this,U,t),D(this,rt,s)}connect(){h(this,ut,Qt).call(this);const t=new MutationObserver(v(this,St));for(const s of v(this,U))t.observe(s,{childList:!0,subtree:!0});at(()=>t.disconnect()),at(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,s){hs(t)?(s.textContent="",s.append(t)):(ve(null,s),ve(t,s)),s.style.display||(s.style.display="contents");const n=s.firstElementChild;if(!n)return;const i=s.getAttribute("data-class");i&&n.classList.add(...i.split(" "))}}U=new WeakMap,rt=new WeakMap,St=new WeakMap,ut=new WeakSet,Qt=function(t){if(t&&!t.some(i=>i.addedNodes.length))return;let s=!1,n=v(this,U).flatMap(i=>[...i.querySelectorAll("slot")]);for(const i of n)!i.hasAttribute("name")||this.elements.has(i)||(this.elements.add(i),s=!0);s&&v(this,rt).call(this,this.elements)};let zs=0,ht="data-slot-id";var z,Tt,q,$t;class _e{constructor(t){b(this,q);b(this,z);P(this,"slots");b(this,Tt,ge(h(this,q,$t).bind(this)));D(this,z,t),this.slots=new Pe(t,h(this,q,$t).bind(this))}connect(){this.slots.connect(),h(this,q,$t).call(this);const t=new MutationObserver(v(this,Tt));for(const s of v(this,z))t.observe(s,{childList:!0});at(()=>t.disconnect())}}z=new WeakMap,Tt=new WeakMap,q=new WeakSet,$t=function(){for(const t of v(this,z))for(const s of t.children){if(s.nodeType!==1)continue;const n=s.getAttribute("slot");if(!n)continue;s.style.display="none";let i=s.getAttribute(ht);i||s.setAttribute(ht,i=++zs+"");for(const o of this.slots.elements){if(o.getAttribute("name")!==n||o.getAttribute(ht)===i)continue;const r=document.importNode(s,!0);n.includes("-icon")&&r.classList.add("vds-icon"),r.style.display="",r.removeAttribute("slot"),this.slots.assign(r,o),o.setAttribute(ht,i)}}};function qs({name:e,class:t,state:s,paths:n,viewBox:i="0 0 32 32"}){return l`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="${i}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${Zt(e??s)}
  >
    ${J(n)?Vs(n):a(n)}
  </svg>`}var j,dt,W,Ge,Ht;class js{constructor(t){b(this,W);b(this,j,{});b(this,dt,!1);P(this,"slots");this.slots=new Pe(t,h(this,W,Ht).bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then(t=>{D(this,j,t),D(this,dt,!0),h(this,W,Ht).call(this)})}}j=new WeakMap,dt=new WeakMap,W=new WeakSet,Ge=function*(){for(const t of Object.keys(v(this,j))){const s=`${t}-icon`;for(const n of this.slots.elements)n.name===s&&(yield{icon:v(this,j)[t],slot:n})}},Ht=function(){if(v(this,dt))for(const{icon:t,slot:s}of h(this,W,Ge).call(this))this.slots.assign(t,s)};class Ys extends js{connect(){super.connect();const{player:t}=C();if(!t.el)return;let s,n=new IntersectionObserver(i=>{var o;(o=i[0])!=null&&o.isIntersecting&&(s==null||s(),s=void 0,this.load())});n.observe(t.el),s=at(()=>n.disconnect())}}const Bt=new WeakMap,kt=wt(class extends Me{render(e){return R}update(e,[t]){var s;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=(s=e.options)===null||s===void 0?void 0:s.host,this.ot(this.lt=e.element)),R}ot(e){var t;if(typeof this.G=="function"){const s=(t=this.dt)!==null&&t!==void 0?t:globalThis;let n=Bt.get(s);n===void 0&&(n=new WeakMap,Bt.set(s,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,s;return typeof this.G=="function"?(t=Bt.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.G):(s=this.G)===null||s===void 0?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Ne=Ts();function u(){return $s(Ne)}const Zs={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var ct,Y,B,pt,Ut;class Ct extends bs{constructor(){super(...arguments);b(this,pt);b(this,ct);b(this,Y,x(()=>{const s=this.$props.when();return h(this,pt,Ut).call(this,s)}));b(this,B,x(()=>{const s=this.$props.smallWhen();return h(this,pt,Ut).call(this,s)}))}get isMatch(){return v(this,Y).call(this)}get isSmallLayout(){return v(this,B).call(this)}onSetup(){D(this,ct,C()),this.setAttributes({"data-match":v(this,Y),"data-sm":()=>v(this,B).call(this)?"":null,"data-lg":()=>v(this,B).call(this)?null:"","data-size":()=>v(this,B).call(this)?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),gs(Ne,{...this.$props,when:v(this,Y),smallWhen:v(this,B),userPrefersAnnouncements:w(!0),userPrefersKeyboardAnimations:w(!0),menuPortal:w(null)})}onAttach(s){xe(s,this.$props.colorScheme)}}ct=new WeakMap,Y=new WeakMap,B=new WeakMap,pt=new WeakSet,Ut=function(s){return s!=="never"&&(ys(s)?s:x(()=>s(v(this,ct).player.state))())},P(Ct,"props",Zs);xs(Ct,["isMatch","isSmallLayout"]);function Le(e,t){_(()=>{const{player:s}=C(),n=s.el;return n&&st(n,"data-layout",t()&&e),()=>n==null?void 0:n.removeAttribute("data-layout")})}function k(e,t){var s;return((s=e())==null?void 0:s[t])??t}function Jt(){return a(()=>{const{translations:e,userPrefersAnnouncements:t}=u();return t()?l`<media-announcer .translations=${a(e)}></media-announcer>`:null})}function M(e,t=""){return l`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:""}`}
  ></slot>`}function vt(e){return e.map(t=>M(t))}function d(e,t){return a(()=>k(e,t))}function te({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:s}=g(),n=a(()=>{const o=k(t,"AirPlay"),r=Se(s());return`${o} ${r}`}),i=d(t,"AirPlay");return l`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${n}>
          ${M("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Be({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:s}=g(),n=a(()=>{const o=k(t,"Google Cast"),r=Se(s());return`${o} ${r}`}),i=d(t,"Google Cast");return l`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${n}>
          ${M("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function At({tooltip:e}){const{translations:t}=u(),s=d(t,"Play"),n=d(t,"Pause");return l`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${d(t,"Play")}
        >
          ${vt(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function fe({tooltip:e,ref:t=As}){const{translations:s}=u(),n=d(s,"Mute"),i=d(s,"Unmute");return l`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(s,"Mute")}
          ${kt(t)}
        >
          ${vt(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${i}</span>
        <span class="vds-unmute-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ee({tooltip:e}){const{translations:t}=u(),s=d(t,"Closed-Captions On"),n=d(t,"Closed-Captions Off");return l`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${d(t,"Captions")}
        >
          ${vt(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${n}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Xs(){const{translations:e}=u(),t=d(e,"Enter PiP"),s=d(e,"Exit PiP");return l`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${d(e,"PiP")}
        >
          ${vt(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Fe({tooltip:e}){const{translations:t}=u(),s=d(t,"Enter Fullscreen"),n=d(t,"Exit Fullscreen");return l`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${d(t,"Fullscreen")}
        >
          ${vt(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function he({backward:e,tooltip:t}){const{translations:s,seekStep:n}=u(),i=e?"Seek Backward":"Seek Forward",o=d(s,i);return l`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${a(()=>(e?-1:1)*n())}
          aria-label=${o}
        >
          ${M(e?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${d(s,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function Ve(){const{translations:e}=u(),{live:t}=g(),s=d(e,"Skip To Live"),n=d(e,"LIVE");return t()?l`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${n}</span>
        </media-live-button>
      `:null}function se(){return a(()=>{const{download:e,translations:t}=u(),s=e();if(ws(s))return null;const{source:n,title:i}=g(),o=n(),r=ks({title:i(),src:o,download:s});return r?l`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${d(t,"Download")}
                href=${r.url+`?download=${r.name}`}
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
        `:null})}function ne(){const{translations:e}=u();return l`
    <media-captions
      class="vds-captions"
      .exampleText=${d(e,"Captions look like this")}
    ></media-captions>
  `}function N(){return l`<div class="vds-controls-spacer"></div>`}function Re(e,t){return l`
    <media-menu-portal .container=${a(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function Ee(e,t,s,n){let i=J(t)?document.querySelector(t):t;i||(i=e==null?void 0:e.closest("dialog")),i||(i=document.body);const o=document.createElement("div");o.style.display="contents",o.classList.add(s),i.append(o),_(()=>{if(!o)return;const{viewType:p}=g(),c=n();st(o,"data-view-type",p()),st(o,"data-sm",c),st(o,"data-lg",!c),st(o,"data-size",c?"sm":"lg")});const{colorScheme:r}=u();return xe(o,r),o}function We({placement:e,tooltip:t,portal:s}){const{textTracks:n}=C(),{viewType:i,clipStartTime:o,clipEndTime:r}=g(),{translations:p,thumbnails:c,menuPortal:y,noModal:f,menuGroup:m,smallWhen:$}=u();if(x(()=>{var ce;const ds=o(),cs=r()||1/0,de=w(null);Te(n,"chapters",de.set);const _t=(ce=de())==null?void 0:ce.cues.filter(pe=>pe.startTime<=cs&&pe.endTime>=ds);return!(_t!=null&&_t.length)})())return null;const T=x(()=>f()?bt(e):$()?null:bt(e)),Q=x(()=>!$()&&m()==="bottom"&&i()==="video"?26:0),et=w(!1);function rs(){et.set(!0)}function us(){et.set(!1)}const ue=l`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${a(T)}
      offset=${a(Q)}
    >
      ${a(()=>et()?l`
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
  `;return l`
    <media-menu class="vds-chapters-menu vds-menu" @open=${rs} @close=${us}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${d(p,"Chapters")}
          >
            ${M("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${Yt(t)?a(t):t}
        >
          ${d(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?Re(y,ue):ue}
    </media-menu>
  `}function Ft(e){const{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}const ie={type:"color"},Js={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},tn={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null},en={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null},sn={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},xt={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},E=Object.keys(xt).reduce((e,t)=>({...e,[t]:w(xt[t])}),{});for(const e of Object.keys(E)){const t=localStorage.getItem(`vds-player:${ot(e)}`);J(t)&&E[e].set(t)}function nn(){for(const e of Object.keys(E)){const t=xt[e];E[e].set(t)}}let $e=!1,Vt=new Set;function an(){const{player:e}=C();Vt.add(e),at(()=>Vt.delete(e)),$e||(Ds(()=>{for(const t of Ms(E)){const s=E[t],n=xt[t],i=`--media-user-${ot(t)}`,o=`vds-player:${ot(t)}`;_(()=>{var y;const r=s(),p=r===n,c=p?null:on(e,t,r);for(const f of Vt)(y=f.el)==null||y.style.setProperty(i,c);p?localStorage.removeItem(o):localStorage.setItem(o,r)})}},null),$e=!0)}function on(e,t,s){var n;switch(t){case"fontFamily":const i=s==="capitals"?"small-caps":"";return(n=e.el)==null||n.style.setProperty("--media-user-font-variant",i),rn(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return ln(s);case"textColor":return`rgb(${Ft(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return un(s);case"textBg":return`rgb(${Ft(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${Ft(s)} / var(--media-user-display-bg-opacity, 1))`}}function ln(e){return(parseInt(e)/100).toString()}function rn(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function un(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}let dn=0;function I({label:e="",value:t="",children:s}){if(!e)return l`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const n=`vds-menu-section-${++dn}`;return l`
    <section class="vds-menu-section" role="group" aria-labelledby=${n}>
      <div class="vds-menu-section-title">
        <header id=${n}>${e}</header>
        ${t?l`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function ft({label:e,children:t}){return l`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function K({label:e,icon:t,hint:s}){return l`
    <media-menu-button class="vds-menu-item">
      ${M("menu-arrow-left","vds-menu-close-icon")}
      ${t?M(t,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${a(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?a(s):null} </span>
      ${M("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function cn({value:e=null,options:t,hideLabel:s=!1,children:n=null,onChange:i=null}){function o(r){const{value:p,label:c}=r;return l`
      <media-radio class="vds-radio" value=${p}>
        ${M("menu-radio-check")}
        ${s?null:l`
              <span class="vds-radio-label" data-part="label">
                ${J(c)?c:a(c)}
              </span>
            `}
        ${Yt(n)?n(r):n}
      </media-radio>
    `}return l`
    <media-radio-group
      class="vds-radio-group"
      value=${J(e)?e:e?a(e):""}
      @change=${i}
    >
      ${V(t)?t.map(o):a(()=>t().map(o))}
    </media-radio-group>
  `}function pn(e){return V(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function Dt(){return l`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function Mt(){return l`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function It({label:e=null,value:t=null,upIcon:s="",downIcon:n="",children:i,isMin:o,isMax:r}){const p=e||t,c=[n?M(n,"down"):null,i,s?M(s,"up"):null];return l`
    <div
      class=${`vds-menu-item vds-menu-slider-item${p?" group":""}`}
      data-min=${a(()=>o()?"":null)}
      data-max=${a(()=>r()?"":null)}
    >
      ${p?l`
            <div class="vds-menu-slider-title">
              ${[e?l`<div>${e}</div>`:null,t?l`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const mn={...tn,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},ae={...en,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function vn(){return a(()=>{const{hasCaptions:e}=g(),{translations:t}=u();return e()?l`
      <media-menu class="vds-font-menu vds-menu">
        ${K({label:()=>k(t,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[I({label:d(t,"Font"),children:[fn(),hn()]}),I({label:d(t,"Text"),children:[$n(),gn(),bn()]}),I({label:d(t,"Text Background"),children:[yn(),xn()]}),I({label:d(t,"Display Background"),children:[Sn(),Tn()]}),I({children:[wn()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function fn(){return L({label:"Family",option:Js,type:"fontFamily"})}function hn(){return L({label:"Size",option:mn,type:"fontSize"})}function $n(){return L({label:"Color",option:ie,type:"textColor"})}function bn(){return L({label:"Opacity",option:ae,type:"textOpacity"})}function gn(){return L({label:"Shadow",option:sn,type:"textShadow"})}function yn(){return L({label:"Color",option:ie,type:"textBg"})}function xn(){return L({label:"Opacity",option:ae,type:"textBgOpacity"})}function Sn(){return L({label:"Color",option:ie,type:"displayBg"})}function Tn(){return L({label:"Opacity",option:ae,type:"displayBgOpacity"})}function wn(){const{translations:e}=u();return l`
    <button class="vds-menu-item" role="menuitem" @click=${nn}>
      <span class="vds-menu-item-label">${a(()=>k(e,"Reset"))}</span>
    </button>
  `}function L({label:e,option:t,type:s}){const{player:n}=C(),{translations:i}=u(),o=E[s],r=()=>k(i,e);function p(){Os(),n.dispatchEvent(new Event("vds-font-change"))}if(t.type==="color"){let f=function(m){o.set(m.target.value),p()};return ft({label:a(r),children:l`
        <input
          class="vds-color-picker"
          type="color"
          .value=${a(o)}
          @input=${f}
        />
      `})}if(t.type==="slider"){let Q=function(et){o.set(et.detail+"%"),p()};const{min:f,max:m,step:$,upIcon:S,downIcon:T}=t;return It({label:a(r),value:a(o),upIcon:S,downIcon:T,isMin:()=>o()===f+"%",isMax:()=>o()===m+"%",children:l`
        <media-slider
          class="vds-slider"
          min=${f}
          max=${m}
          step=${$}
          key-step=${$}
          .value=${a(()=>parseInt(o()))}
          aria-label=${a(r)}
          @value-change=${Q}
          @drag-value-change=${Q}
        >
          ${Dt()}${Mt()}
        </media-slider>
      `})}const c=pn(t.values),y=()=>{var $;const f=o(),m=(($=c.find(S=>S.value===f))==null?void 0:$.label)||"";return k(i,J(m)?m:m())};return l`
    <media-menu class=${`vds-${ot(s)}-menu vds-menu`}>
      ${K({label:r,hint:y})}
      <media-menu-items class="vds-menu-items">
        ${cn({value:o,options:c,onChange({detail:f}){o.set(f),p()}})}
      </media-menu-items>
    </media-menu>
  `}function Ot({label:e,checked:t,defaultChecked:s=!1,storageKey:n,onChange:i}){const{translations:o}=u(),r=n?localStorage.getItem(n):null,p=w(!!(r??s)),c=w(!1),y=a(Fs(p)),f=d(o,e);n&&i(ye(p)),t&&_(()=>void p.set(t()));function m(T){(T==null?void 0:T.button)!==1&&(p.set(Q=>!Q),n&&localStorage.setItem(n,p()?"1":""),i(p(),T),c.set(!1))}function $(T){Is(T)&&m()}function S(T){T.button===0&&c.set(!0)}return l`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${f}
      aria-checked=${y}
      data-active=${a(()=>c()?"":null)}
      @pointerup=${m}
      @pointerdown=${S}
      @keydown=${$}
    ></div>
  `}function kn(){return a(()=>{const{translations:e}=u();return l`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${K({label:()=>k(e,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[I({children:[Cn(),An()]}),I({children:[vn()]})]}
        </media-menu-items>
      </media-menu>
    `})}function Cn(){const{userPrefersAnnouncements:e,translations:t}=u(),s="Announcements";return ft({label:d(t,s),children:Ot({label:s,storageKey:"vds-player::announcements",onChange(n){e.set(n)}})})}function An(){return a(()=>{const{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:s}=u(),{viewType:n}=g();if(x(()=>n()!=="video"||s())())return null;const o="Keyboard Animations";return ft({label:d(e,o),children:Ot({label:o,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(r){t.set(r)}})})})}function Dn(){return a(()=>{const{noAudioGain:e,translations:t}=u(),{audioTracks:s,canSetAudioGain:n}=g();return x(()=>!(n()&&!e())&&s().length<=1)()?null:l`
      <media-menu class="vds-audio-menu vds-menu">
        ${K({label:()=>k(t,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[Mn(),In()]}
        </media-menu-items>
      </media-menu>
    `})}function Mn(){return a(()=>{const{translations:e}=u(),{audioTracks:t}=g(),s=d(e,"Default");return x(()=>t().length<=1)()?null:I({children:l`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${K({label:()=>k(e,"Track")})}
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
      `})})}function In(){return a(()=>{const{noAudioGain:e,translations:t}=u(),{canSetAudioGain:s}=g();if(x(()=>!s()||e())())return null;const{audioGain:i}=g();return I({label:d(t,"Boost"),value:a(()=>Math.round(((i()??1)-1)*100)+"%"),children:[It({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:On(),isMin:()=>((i()??1)-1)*100<=Ke(),isMax:()=>((i()??1)-1)*100===Qe()})]})})}function On(){const{translations:e}=u(),t=d(e,"Boost"),s=Ke,n=Qe,i=Pn;return l`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${a(s)}
      max=${a(n)}
      step=${a(i)}
      key-step=${a(i)}
    >
      ${Dt()}${Mt()}
    </media-audio-gain-slider>
  `}function Ke(){const{audioGains:e}=u(),t=e();return V(t)?t[0]??0:t.min}function Qe(){const{audioGains:e}=u(),t=e();return V(t)?t[t.length-1]??300:t.max}function Pn(){const{audioGains:e}=u(),t=e();return V(t)?t[1]-t[0]||25:t.step}function _n(){return a(()=>{const{translations:e}=u(),{hasCaptions:t}=g(),s=d(e,"Off");return t()?l`
      <media-menu class="vds-captions-menu vds-menu">
        ${K({label:()=>k(e,"Captions"),icon:"menu-captions"})}
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
    `:null})}function Gn(){return a(()=>{const{translations:e}=u();return l`
      <media-menu class="vds-playback-menu vds-menu">
        ${K({label:()=>k(e,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[I({children:Nn()}),Ln(),Rn()]}
        </media-menu-items>
      </media-menu>
    `})}function Nn(){const{remote:e}=C(),{translations:t}=u(),s="Loop";return ft({label:d(t,s),children:Ot({label:s,storageKey:"vds-player::user-loop",onChange(n,i){e.userPrefersLoopChange(n,i)}})})}function Ln(){return a(()=>{const{translations:e}=u(),{canSetPlaybackRate:t,playbackRate:s}=g();return t()?I({label:d(e,"Speed"),value:a(()=>s()===1?k(e,"Normal"):s()+"x"),children:[It({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:Fn(),isMin:()=>s()===He(),isMax:()=>s()===Ue()})]}):null})}function He(){const{playbackRates:e}=u(),t=e();return V(t)?t[0]??0:t.min}function Ue(){const{playbackRates:e}=u(),t=e();return V(t)?t[t.length-1]??2:t.max}function Bn(){const{playbackRates:e}=u(),t=e();return V(t)?t[1]-t[0]||.25:t.step}function Fn(){const{translations:e}=u(),t=d(e,"Speed"),s=He,n=Ue,i=Bn;return l`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${a(s)}
      max=${a(n)}
      step=${a(i)}
      key-step=${a(i)}
    >
      ${Dt()}${Mt()}
    </media-speed-slider>
  `}function Vn(){const{remote:e,qualities:t}=C(),{autoQuality:s,canSetQuality:n,qualities:i}=g(),{translations:o}=u(),r="Auto";return x(()=>!n()||i().length<=1)()?null:ft({label:d(o,r),children:Ot({label:r,checked:s,onChange(c,y){c?e.requestAutoQuality(y):e.changeQuality(t.selectedIndex,y)}})})}function Rn(){return a(()=>{const{hideQualityBitrate:e,translations:t}=u(),{canSetQuality:s,qualities:n,quality:i}=g(),o=x(()=>!s()||n().length<=1),r=x(()=>Bs(n()));return o()?null:I({label:d(t,"Quality"),value:a(()=>{var m,$;const p=(m=i())==null?void 0:m.height,c=e()?null:($=i())==null?void 0:$.bitrate,y=c&&c>0?`${(c/1e6).toFixed(2)} Mbps`:null,f=k(t,"Auto");return p?`${p}p${y?` (${y})`:""}`:f}),children:[It({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:En(),isMin:()=>r()[0]===i(),isMax:()=>r().at(-1)===i()}),Vn()]})})}function En(){const{translations:e}=u(),t=d(e,"Quality");return l`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${t}>
      ${Dt()}${Mt()}
    </media-quality-slider>
  `}function ze({placement:e,portal:t,tooltip:s}){return a(()=>{const{viewType:n}=g(),{translations:i,menuPortal:o,noModal:r,menuGroup:p,smallWhen:c}=u(),y=x(()=>r()?bt(e):c()?null:bt(e)),f=x(()=>!c()&&p()==="bottom"&&n()==="video"?26:0),m=w(!1);an();function $(){m.set(!0)}function S(){m.set(!1)}const T=l`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${a(y)}
        offset=${a(f)}
      >
        ${a(()=>m()?[Gn(),kn(),Dn(),_n()]:null)}
      </media-menu-items>
    `;return l`
      <media-menu class="vds-settings-menu vds-menu" @open=${$} @close=${S}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${d(i,"Settings")}
            >
              ${M("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${Yt(s)?a(s):s}
          >
            ${d(i,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${t?Re(o,T):T}
      </media-menu>
    `})}function oe({orientation:e,tooltip:t}){return a(()=>{const{pointer:s,muted:n,canSetVolume:i}=g();if(s()==="coarse"&&!n())return null;if(!i())return fe({tooltip:t});const o=w(void 0),r=Cs(o);return l`
      <div class="vds-volume" ?data-active=${a(r)} ${kt(o.set)}>
        ${fe({tooltip:t})}
        <div class="vds-volume-popup">${Wn({orientation:e})}</div>
      </div>
    `})}function Wn({orientation:e}={}){const{translations:t}=u(),s=d(t,"Volume");return l`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${Zt(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function le(){const e=w(void 0),t=w(0),{thumbnails:s,translations:n,sliderChaptersMinWidth:i,disableTimeSlider:o,seekStep:r,noScrubGesture:p}=u(),c=d(n,"Seek"),y=a(o),f=a(()=>t()<i()),m=a(s);return we(e,()=>{const $=e();$&&t.set($.clientWidth)}),l`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${a(r)}
      ?disabled=${y}
      ?no-swipe-gesture=${a(p)}
      ${kt(e.set)}
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
  `}function Kn(){return l`
    <div class="vds-time-group">
      ${a(()=>{const{duration:e}=g();return e()?[l`<media-time class="vds-time" type="current"></media-time>`,l`<div class="vds-time-divider">/</div>`,l`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function Qn(){return a(()=>{const{live:e,duration:t}=g();return e()?Ve():t()?l`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function qe(){return a(()=>{const{live:e}=g();return e()?Ve():Kn()})}function je(){return a(()=>{const{textTracks:e}=C(),{title:t,started:s}=g(),n=w(null);return Te(e,"chapters",n.set),n()&&(s()||!t())?Ye():l`<media-title class="vds-chapter-title"></media-title>`})}function Ye(){return l`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class Ze extends Ys{async loadIcons(){const t=(await Ss(async()=>{const{icons:n}=await import("./vidstack-DjhX0QGl-D6U2N1R0.js");return{icons:n}},__vite__mapDeps([0,1]))).icons,s={};for(const n of Object.keys(t))s[n]=qs({name:n,paths:t[n]});return s}}var F;let Hn=(F=class extends Ct{},P(F,"props",{...Nt(F,F,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576}),F);function Un(){return[Jt(),ne(),l`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[he({backward:!0,tooltip:"top start"}),At({tooltip:"top"}),he({tooltip:"top"}),zn(),le(),Qn(),oe({orientation:"vertical",tooltip:"top"}),ee({tooltip:"top"}),se(),te({tooltip:"top"}),qn()]}
        </media-controls-group>
      </media-controls>
    `]}function zn(){return a(()=>{let e=w(void 0),t=w(!1),s=C(),{title:n,started:i,currentTime:o,ended:r}=g(),{translations:p}=u(),c=_s(e),y=()=>i()||o()>0;const f=()=>{const S=r()?"Replay":y()?"Continue":"Play";return`${k(p,S)}: ${n()}`};_(()=>{var S;c()&&document.activeElement===document.body&&((S=s.player.el)==null||S.focus({preventScroll:!0}))});function m(){const S=e(),T=!!S&&!c()&&S.clientWidth<S.children[0].clientWidth;S&&Gs(S,"vds-marquee",T),t.set(T)}function $(){return l`
        <span class="vds-title-text">
          ${a(f)}${a(()=>y()?Ye():null)}
        </span>
      `}return we(e,m),n()?l`
          <span class="vds-title" title=${a(f)} ${kt(e.set)}>
            ${[$(),a(()=>t()&&!c()?$():null)]}
          </span>
        `:N()})}function qn(){const e="top end";return[We({tooltip:"top",placement:e,portal:!0}),ze({tooltip:"top end",placement:e,portal:!0})]}var mt,Z,A,Xe,Je,ts,es,ss,ns;class zt extends ke(Ae,Hn){constructor(){super(...arguments);b(this,A);b(this,mt);b(this,Z,w(!1))}onSetup(){this.forwardKeepAlive=!1,D(this,mt,C()),this.classList.add("vds-audio-layout"),h(this,A,ts).call(this)}onConnect(){Le("audio",()=>this.isMatch),h(this,A,Je).call(this)}render(){return a(h(this,A,Xe).bind(this))}}mt=new WeakMap,Z=new WeakMap,A=new WeakSet,Xe=function(){return this.isMatch?Un():null},Je=function(){const{menuPortal:s}=u();_(()=>{if(!this.isMatch)return;const n=Ee(this,this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),i=n?[this,n]:[this];return(this.$props.customIcons()?new _e(i):new Ze(i)).connect(),s.set(n),()=>{n.remove(),s.set(null)}})},ts=function(){const{pointer:s}=v(this,mt).$state;_(()=>{s()==="coarse"&&_(h(this,A,es).bind(this))})},es=function(){if(!v(this,Z).call(this)){Lt(this,"pointerdown",h(this,A,ss).bind(this),{capture:!0});return}Lt(this,"pointerdown",s=>s.stopPropagation()),Lt(window,"pointerdown",h(this,A,ns).bind(this))},ss=function(s){const{target:n}=s;Ps(n)&&n.closest(".vds-time-slider")&&(s.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),v(this,Z).set(!0))},ns=function(){v(this,Z).set(!1),this.removeAttribute("data-scrubbing")},P(zt,"tagName","media-audio-layout"),P(zt,"attrs",{smallWhen:{converter(s){return s!=="never"&&!!s}}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jn=wt(class extends Xt{constructor(){super(...arguments),this.key=R}render(e,t){return this.key=e,t}update(e,[t,s]){return t!==this.key&&(Ws(e),this.key=t),s}}),it=class it extends Ct{};P(it,"props",{...Nt(it,it,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:s})=>t<576||s<380});let qt=it;function is(){return a(()=>{const e=C(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:s}=u();if(x(()=>t()||!s())())return null;const i=w(!1),{lastKeyboardAction:o}=e.$state;_(()=>{i.set(!!o());const m=setTimeout(()=>i.set(!1),500);return()=>{i.set(!1),window.clearTimeout(m)}});const r=x(()=>{var $;const m=($=o())==null?void 0:$.action;return m&&i()?ot(m):null}),p=x(()=>`vds-kb-action${i()?"":" hidden"}`),c=x(Yn),y=x(()=>{const m=Zn();return m?Ns(m):null});function f(){const m=y();return m?l`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${m}</div>
        </div>
      `:null}return l`
      <div class=${a(p)} data-action=${a(r)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${a(c)}</div>
        </div>
        ${a(()=>jn(o(),f()))}
      </div>
    `})}function Yn(){var n;const{$state:e}=C(),t=(n=e.lastKeyboardAction())==null?void 0:n.action,s=e.audioGain()??1;switch(t){case"toggleMuted":return e.muted()?"0%":be(e.volume(),s);case"volumeUp":case"volumeDown":return be(e.volume(),s);default:return""}}function be(e,t){return`${Math.round(e*t*100)}%`}function Zn(){var s;const{$state:e}=C();switch((s=e.lastKeyboardAction())==null?void 0:s.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function Xn(){return[Jt(),as(),Pt(),is(),ne(),l`<div class="vds-scrim"></div>`,l`
      <media-controls class="vds-controls">
        ${[ti(),N(),l`<media-controls-group class="vds-controls-group"></media-controls-group>`,N(),l`
            <media-controls-group class="vds-controls-group">
              ${le()}
            </media-controls-group>
          `,l`
            <media-controls-group class="vds-controls-group">
              ${[At({tooltip:"top start"}),oe({orientation:"horizontal",tooltip:"top"}),qe(),je(),ee({tooltip:"top"}),Jn(),te({tooltip:"top"}),Be({tooltip:"top"}),se(),Xs(),Fe({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function Jn(){return a(()=>{const{menuGroup:e}=u();return e()==="bottom"?re():null})}function ti(){return l`
    <media-controls-group class="vds-controls-group">
      ${a(()=>{const{menuGroup:e}=u();return e()==="top"?[N(),re()]:null})}
    </media-controls-group>
  `}function ei(){return[Jt(),as(),Pt(),ne(),is(),l`<div class="vds-scrim"></div>`,l`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[te({tooltip:"top start"}),Be({tooltip:"bottom start"}),N(),ee({tooltip:"bottom"}),se(),re(),oe({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${N()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[N(),At({tooltip:"top"}),N()]}
        </media-controls-group>

        ${N()}

        <media-controls-group class="vds-controls-group">
          ${[qe(),je(),Fe({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${le()}
        </media-controls-group>
      </media-controls>
    `,ni()]}function si(){return l`
    <div class="vds-load-container">
      ${[Pt(),At({tooltip:"top"})]}
    </div>
  `}function ni(){return a(()=>{const{duration:e}=g();return e()===0?null:l`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function Pt(){return l`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function re(){const{menuGroup:e,smallWhen:t}=u(),s=()=>e()==="top"||t()?"bottom":"top",n=x(()=>`${s()} ${e()==="top"?"end":"center"}`),i=x(()=>`${s()} end`);return[We({tooltip:n,placement:i,portal:!0}),ze({tooltip:n,placement:i,portal:!0})]}function as(){return a(()=>{const{noGestures:e}=u();return e()?null:l`
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
    `})}var X,tt,os,ls;class jt extends ke(Ae,qt){constructor(){super(...arguments);b(this,tt);b(this,X)}onSetup(){this.forwardKeepAlive=!1,D(this,X,C()),this.classList.add("vds-video-layout")}onConnect(){Le("video",()=>this.isMatch),h(this,tt,os).call(this)}render(){return a(h(this,tt,ls).bind(this))}}X=new WeakMap,tt=new WeakSet,os=function(){const{menuPortal:s}=u();_(()=>{if(!this.isMatch)return;const n=Ee(this,this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),i=n?[this,n]:[this];return(this.$props.customIcons()?new _e(i):new Ze(i)).connect(),s.set(n),()=>{n.remove(),s.set(null)}})},ls=function(){const{load:s}=v(this,X).$props,{canLoad:n,streamType:i,nativeControls:o}=v(this,X).$state;return!o()&&this.isMatch?s()==="play"&&!n()?si():i()==="unknown"?Pt():this.isSmallLayout?ei():Xn():null},P(jt,"tagName","media-video-layout"),P(jt,"attrs",{smallWhen:{converter(s){return s!=="never"&&!!s}}});Ce(zt);Ce(jt);
