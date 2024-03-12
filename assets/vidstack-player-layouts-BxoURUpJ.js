function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/vidstack-DBhovyOa-1Rfq1wSe.js","assets/vidstack-D8vpzjIs-BTtv5vWE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var ie=Object.getPrototypeOf;var le=Reflect.get;var Z=(e,t,s)=>le(ie(e),s,t);import{c as g,p as Pt,e as T,b as Dt,o as P,i as R,C as re,u as h,f as Mt,g as ue,h as At,j as st,D as ce,k as at,l as k,n as de,m as x,q as Ot,r as nt,t as Vt,v as W,w as Lt,H as ot,x as G,y as pe,z as me,A as ve,B as wt,s as It,E as fe,F as be,G as $e,I as he,J as m,P as ge,K as ye,L as _e,N as Bt,O as Rt,d as it}from"./vidstack-D1JzjGR7-BMAk_Fyl.js";import{e as xe,c as we,t as Ct,A as Ce,l as lt,D as Te,x as n,o as ke,n as E,L as rt,i as Se,a as Ft}from"./vidstack-CbhL8rpf-C0Lj70YY.js";import{_ as Nt}from"./app-Cg3PHmbz.js";class Pe extends we{constructor(t){super(t),this.h=null,this.w=!1,this.ra=null,this.w=t.type===Ct.ATTRIBUTE||t.type===Ct.BOOLEAN_ATTRIBUTE}render(t){return t!==this.h&&(this.disconnected(),this.h=t,this.isConnected&&this.Si()),this.h?this.el(Pt(this.h)):Ce}reconnected(){this.Si()}disconnected(){var t;(t=this.ra)==null||t.call(this),this.ra=null}Si(){this.h&&(this.ra=T(this.o.bind(this)))}el(t){return this.w?lt(t):t}hl(t){this.setValue(this.el(t))}o(){var t;this.hl((t=this.h)==null?void 0:t.call(this))}}function i(e){return xe(Pe)(g(e))}class Et{constructor(t,s){this.Wj=t,this.Ca=s,this.elements=new Set,this.vf=Dt(this.ea.bind(this))}connect(){this.ea();const t=new MutationObserver(this.vf);t.observe(this.Wj,{childList:!0,subtree:!0}),P(()=>t.disconnect()),P(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,s){t instanceof Node?(s.textContent="",s.append(t)):Te(t,s),s.style.display||(s.style.display="contents");const a=s.firstElementChild;if(!a)return;const o=s.getAttribute("data-class");o&&a.classList.add(...o.split(" "))}ea(t){if(t&&!t.some(o=>o.addedNodes.length))return;let s=!1,a=this.Wj.querySelectorAll("slot");for(const o of a)!o.hasAttribute("name")||this.elements.has(o)||(this.elements.add(o),s=!0);s&&this.Ca(this.elements)}}let De=0,j="data-slot-id";class ut{constructor(t){this.Wj=t,this.vf=Dt(this.ea.bind(this)),this.slots=new Et(t,this.ea.bind(this))}connect(){this.slots.connect(),this.ea();const t=new MutationObserver(this.vf);t.observe(this.Wj,{childList:!0}),P(()=>t.disconnect())}ea(){for(const t of this.Wj.children){if(t.nodeType!==1)continue;const s=t.getAttribute("slot");if(!s)continue;t.style.display="none";let a=t.getAttribute(j);a||t.setAttribute(j,a=++De+"");for(const o of this.slots.elements){if(o.getAttribute("name")!==s||o.getAttribute(j)===a)continue;const l=document.importNode(t,!0);s.includes("-icon")&&l.classList.add("vds-icon"),l.style.display="",l.removeAttribute("slot"),this.slots.assign(l,o),o.setAttribute(j,a)}}}}function jt({name:e,class:t,state:s,paths:a,viewBox:o="0 0 32 32"}){return n`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="${o}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${lt(e??s)}
  >
    ${R(a)?ke(a):i(a)}
  </svg>`}class Me{constructor(t){this.Wj=t,this.Zj={},this.bk=!1,this.slots=new Et(t,this.ck.bind(this))}connect(){this.slots.connect(),P(this.disconnect.bind(this))}load(){this.xe().then(t=>{this.Zj=t,this.bk=!0,this.ck()})}disconnect(){for(const{slot:t}of this.dk())t.textContent=""}*dk(){for(const t of Object.keys(this.Zj)){const s=`${t}-icon`;for(const a of this.slots.elements)a.name===s&&(yield{icon:this.Zj[t],slot:a})}}ck(){if(this.bk)for(const{icon:t,slot:s}of this.dk())this.slots.assign(t,s)}}class Gt extends Me{connect(){super.connect();const t=this.Wj.parentElement;if(!t)return;let s,a=new IntersectionObserver(o=>{var l;(l=o[0])!=null&&l.isIntersecting&&(s==null||s(),s=void 0,this.load())});a.observe(t),s=P(()=>a.disconnect())}}const Wt=At();function d(){return st(Wt)}const Ae={customIcons:!1,disableTimeSlider:!1,menuGroup:"bottom",noGestures:!1,noKeyboardActionDisplay:!1,noModal:!1,noScrubGesture:!1,playbackRates:ce,seekStep:10,sliderChaptersMinWidth:325,smallWhen:!1,thumbnails:null,translations:null,when:!1};var Oe=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,ct=(e,t,s,a)=>{for(var o=a>1?void 0:a?Ve(t,s):t,l=e.length-1,r;l>=0;l--)(r=e[l])&&(o=(a?r(t,s,o):r(o))||o);return a&&o&&Oe(t,s,o),o};const yt=class yt extends re{constructor(){super(...arguments),this._m=g(()=>{const t=this.$props.when();return this.$m(t)}),this.Ym=g(()=>{const t=this.$props.smallWhen();return this.$m(t)}),this.menuContainer=null}get isMatch(){return this._m()}get isSmallLayout(){return this.Ym()}onSetup(){this.a=h(),this.setAttributes({"data-match":this._m,"data-size":()=>this.Ym()?"sm":null,"data-no-scrub-gesture":this.$props.noScrubGesture});const t=this;Mt(Wt,{...this.$props,when:this._m,smallWhen:this.Ym,get menuContainer(){return t.menuContainer}})}$m(t){return t!=="never"&&(ue(t)?t:g(()=>t(this.a.player.state))())}};yt.props=Ae;let I=yt;ct([at],I.prototype,"menuContainer",2);ct([at],I.prototype,"isMatch",1);ct([at],I.prototype,"isSmallLayout",1);function C(e,t){var s;return((s=e())==null?void 0:s[t])??t}function F({label:e,icon:t,hint:s}){return n`
    <media-menu-button class="vds-menu-button">
      <slot name="menu-arrow-left-icon" data-class="vds-menu-button-close-icon"></slot>
      ${t?n`<slot name="${t}-icon" data-class="vds-menu-button-icon"></slot>`:null}
      <span class="vds-menu-button-label">${i(e)}</span>
      <span class="vds-menu-button-hint" data-part="hint">${s?i(s):null} </span>
      <slot name="menu-arrow-right-icon" data-class="vds-menu-button-open-icon"></slot>
    </media-menu-button>
  `}function Le({value:e=null,options:t,hideLabel:s=!1,children:a=null,onChange:o=null}){function l(r){const{value:b,label:c}=r;return n`
      <media-radio class="vds-radio" value=${b}>
        <div class="vds-radio-check"></div>
        ${s?null:n`
              <span class="vds-radio-label" data-part="label">
                ${R(c)?c:i(c)}
              </span>
            `}
        ${nt(a)?a(r):a}
      </media-radio>
    `}return n`
    <media-radio-group
      class="vds-radio-group"
      value=${R(e)?e:e?i(e):""}
      @change=${o}
    >
      ${Lt(t)?t.map(l):i(()=>t().map(l))}
    </media-radio-group>
  `}function Ie(e){return Lt(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}const dt=["White","Yellow","Green","Cyan","Blue","Magenta","Red","Black"],pt=["0%","25%","50%","75%","100%"],Be={"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"},Re=["50%","75%","100%","150%","200%","300%","400%"],Fe=["None","Drop Shadow","Raised","Depressed","Outline"],mt=At();function Ne(){return i(()=>{const{hasCaptions:e}=k(),{translations:t}=d();return e()?(Mt(mt,{all:new Set}),n`
      <media-menu class="vds-font-menu vds-menu">
        ${F({label:()=>C(t,"Font Styles"),icon:"menu-font"})}
        <media-menu-items class="vds-menu-items">
          ${Ee()}${je()}${Ge()}${We()}${Ke()}
          ${qe()}${Ue()}${ze()}
          ${Ye()}${He()}
        </media-menu-items>
      </media-menu>
    `):null})}function Ee(){return O({label:"Font Family",options:Be,defaultValue:"pro-sans",cssVarName:"font-family",getCssVarValue(e,t){var a;const s=e==="capitals"?"small-caps":"";return(a=t.el)==null||a.style.setProperty("--media-user-font-variant",s),Qe(e)}})}function je(){return O({label:"Font Size",options:Re,defaultValue:"100%",cssVarName:"font-size",getCssVarValue:U})}function Ge(){return O({label:"Text Color",options:dt,defaultValue:"white",cssVarName:"text-color",getCssVarValue(e){return`rgb(${vt(e)} / var(--media-user-text-opacity, 1))`}})}function We(){return O({label:"Text Opacity",options:pt,defaultValue:"100%",cssVarName:"text-opacity",getCssVarValue:U})}function Ke(){return O({label:"Text Shadow",options:Fe,defaultValue:"none",cssVarName:"text-shadow",getCssVarValue:Ze})}function qe(){return O({label:"Background Color",options:dt,defaultValue:"black",cssVarName:"text-bg",getCssVarValue(e){return`rgb(${vt(e)} / var(--media-user-text-bg-opacity, 1))`}})}function Ue(){return O({label:"Background Opacity",options:pt,defaultValue:"100%",cssVarName:"text-bg-opacity",getCssVarValue:U})}function ze(){return O({label:"Display Background Color",options:dt,defaultValue:"black",cssVarName:"display-bg",getCssVarValue(e){return`rgb(${vt(e)} / var(--media-user-display-bg-opacity, 1))`}})}function Ye(){return O({label:"Display Background Opacity",options:pt,defaultValue:"0%",cssVarName:"display-bg-opacity",getCssVarValue:U})}function He(){const{translations:e}=d(),t=()=>C(e,"Reset"),s=st(mt);function a(){s.current?s.current():s.all.forEach(o=>o())}return n`
    <button class="vds-menu-button" role="menuitem" @click=${a}>
      <span class="vds-menu-button-label">${i(t)}</span>
    </button>
  `}function O({label:e,options:t,defaultValue:s,cssVarName:a,getCssVarValue:o}){const{player:l}=h(),{translations:r}=d(),b=st(mt),c=Ie(t),f=`${e.toLowerCase().replace(/\s/g,"-")}`,p=x(s),y=()=>C(r,e),_=()=>{var xt;const S=p(),B=((xt=c.find(oe=>oe.value===S))==null?void 0:xt.label)||"";return C(r,R(B)?B:B())},$=localStorage.getItem(`vds-player:${f}`);$&&D($);function D(S){var B;p.set(S),localStorage.setItem(`vds-player:${f}`,S),(B=l.el)==null||B.style.setProperty(`--media-user-${a}`,(o==null?void 0:o(S,l))??S)}b.all.add(V),P(()=>void b.all.delete(V));function V(){D(s)}function w(){b.current=V}function M(){b.current=void 0}return n`
    <media-menu class=${`vds-${f}-menu vds-menu`} @open=${w} @close=${M}>
      ${F({label:y,hint:_})}
      <media-menu-items class="vds-menu-items">
        ${Le({value:p,options:c,onChange({detail:S}){D(S)}})}
      </media-menu-items>
    </media-menu>
  `}function U(e){return(parseInt(e)/100).toString()}function vt(e){switch(e){case"white":return"255 255 255";case"yellow":return"255 255 0";case"green":return"0 128 0";case"cyan":return"0 255 255";case"blue":return"0 0 255";case"magenta":return"255 0 255";case"red":return"255 0 0";case"black":return"0 0 0"}}function Qe(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function Ze(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}function Kt({tooltip:e}){const{translations:t}=d(),{remotePlaybackState:s}=k(),a=i(()=>{const l=C(t,"AirPlay"),r=Vt(s());return`${l} ${r}`}),o=u(t,"AirPlay");return n`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${a}>
          <slot name="airplay-icon" data-class="vds-airplay-icon"></slot>
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${o}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function qt({tooltip:e}){const{translations:t}=d(),{remotePlaybackState:s}=k(),a=i(()=>{const l=C(t,"Google Cast"),r=Vt(s());return`${l} ${r}`}),o=u(t,"Google Cast");return n`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${a}>
          <slot name="google-cast-icon" data-class="vds-google-cast-icon"></slot>
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${o}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function z({tooltip:e}){const{translations:t}=d(),s=u(t,"Play"),a=u(t,"Pause");return n`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${u(t,"Play")}
        >
          <slot name="play-icon" data-class="vds-play-icon"></slot>
          <slot name="pause-icon" data-class="vds-pause-icon"></slot>
          <slot name="replay-icon" data-class="vds-replay-icon"></slot>
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ft({tooltip:e,ref:t=de}){const{translations:s}=d(),a=u(s,"Mute"),o=u(s,"Unmute");return n`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${u(s,"Mute")}
          ${E(t)}
        >
          <slot name="mute-icon" data-class="vds-mute-icon"></slot>
          <slot name="volume-low-icon" data-class="vds-volume-low-icon"></slot>
          <slot name="volume-high-icon" data-class="vds-volume-high-icon"></slot>
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${o}</span>
        <span class="vds-unmute-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function bt({tooltip:e}){const{translations:t}=d(),s=u(t,"Closed-Captions On"),a=u(t,"Closed-Captions Off");return n`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${u(t,"Captions")}
        >
          <slot name="cc-on-icon" data-class="vds-cc-on-icon"></slot>
          <slot name="cc-off-icon" data-class="vds-cc-off-icon"></slot>
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${a}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Je(){const{translations:e}=d(),t=u(e,"Enter PiP"),s=u(e,"Exit PiP");return n`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${u(e,"PiP")}
        >
          <slot name="pip-enter-icon" data-class="vds-pip-enter-icon"></slot>
          <slot name="pip-exit-icon" data-class="vds-pip-exit-icon"></slot>
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ut({tooltip:e}){const{translations:t}=d(),s=u(t,"Enter Fullscreen"),a=u(t,"Exit Fullscreen");return n`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${u(t,"Fullscreen")}
        >
          <slot name="fs-enter-icon" data-class="vds-fs-enter-icon"></slot>
          <slot name="fs-exit-icon" data-class="vds-fs-exit-icon"></slot>
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Tt({backward:e,tooltip:t}){const{translations:s,seekStep:a}=d(),o=e?"Seek Backward":"Seek Forward",l=u(s,o);return n`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${i(()=>(e?-1:1)*a())}
          aria-label=${l}
        >
          ${e?n`<slot name="seek-backward-icon"></slot>`:n`<slot name="seek-forward-icon"></slot>`}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${u(s,o)}
      </media-tooltip-content>
    </media-tooltip>
  `}function zt({orientation:e}={}){const{translations:t}=d(),s=u(t,"Volume");return n`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${lt(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function $t(){const e=x(void 0),t=x(0),{thumbnails:s,translations:a,sliderChaptersMinWidth:o,disableTimeSlider:l,seekStep:r,noScrubGesture:b}=d(),c=u(a,"Seek"),f=i(l),p=i(()=>t()<o()),y=i(s);return Ot(e,()=>{const _=e();_&&t.set(_.clientWidth)}),n`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${i(r)}
      ?disabled=${f}
      ?no-swipe-gesture=${i(b)}
      ${E(e.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${p}>
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
          .src=${y}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function Yt(){const{translations:e}=d(),{live:t}=k(),s=u(e,"Skip To Live"),a=u(e,"LIVE");return t()?n`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${a}</span>
        </media-live-button>
      `:null}function Xe(){return n`
    <div class="vds-time-group">
      ${i(()=>{const{duration:e}=k();return e()?[n`<media-time class="vds-time" type="current"></media-time>`,n`<div class="vds-time-divider">/</div>`,n`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function ts(){return i(()=>{const{live:e,duration:t}=k();return e()?Yt():t()?n`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function A(){return n`<div class="vds-controls-spacer"></div>`}function Ht(){return i(()=>{const{live:e}=k();return e()?Yt():Xe()})}function Qt(e,t){return n`
    <media-menu-portal .container=${e} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function ht(){return n`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}function Zt({placement:e,tooltip:t,portal:s}){const{viewType:a}=k(),{translations:o,thumbnails:l,menuContainer:r,noModal:b,menuGroup:c,smallWhen:f}=d(),p=g(()=>b()?W(e):f()?null:W(e)),y=g(()=>!f()&&c()==="bottom"&&a()==="video"?26:0),_=n`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${i(p)}
      offset=${i(y)}
    >
      <media-chapters-radio-group
        class="vds-chapters-radio-group vds-radio-group"
        .thumbnails=${i(l)}
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
    </media-menu-items>
  `;return n`
    <media-menu class="vds-chapters-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${u(o,"Chapters")}
          >
            <slot name="menu-chapters-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${nt(t)?i(t):t}
        >
          ${u(o,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?Qt(r,_):_}
    </media-menu>
  `}function Jt({placement:e,portal:t,tooltip:s}){return i(()=>{const{viewType:a,canSetPlaybackRate:o,canSetQuality:l,qualities:r,audioTracks:b,hasCaptions:c}=k(),{translations:f,menuContainer:p,noModal:y,menuGroup:_,smallWhen:$}=d(),D=g(()=>y()?W(e):$()?null:W(e)),V=g(()=>!$()&&_()==="bottom"&&a()==="video"?26:0);if(!g(()=>o()||!!(l()&&r().length)||!!b().length||c())())return null;const M=n`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${i(D)}
        offset=${i(V)}
      >
        ${[es(),ss(),as(),ns(),Ne()]}
      </media-menu-items>
    `;return n`
      <media-menu class="vds-settings-menu vds-menu">
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${u(f,"Settings")}
            >
              <slot name="menu-settings-icon" data-class="vds-rotate-icon"></slot>
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${nt(s)?i(s):s}
          >
            ${u(f,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${t?Qt(p,M):M}
      </media-menu>
    `})}function es(){const{translations:e}=d(),t=u(e,"Default");return n`
    <media-menu class="vds-audio-menu vds-menu">
      ${F({label:()=>C(e,"Audio"),icon:"menu-audio"})}
      <media-menu-items class="vds-menu-items">
        <media-audio-radio-group
          class="vds-audio-radio-group vds-radio-group"
          empty-label=${t}
        >
          <template>
            <media-radio class="vds-audio-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-audio-radio-group>
      </media-menu-items>
    </media-menu>
  `}function ss(){const{translations:e,playbackRates:t}=d(),s=u(e,"Normal");return n`
    <media-menu class="vds-speed-menu vds-menu">
      ${F({label:()=>C(e,"Speed"),icon:"menu-speed"})}
      <media-menu-items class="vds-menu-items">
        <media-speed-radio-group
          class="vds-speed-radio-group vds-radio-group"
          normal-label=${s}
          .rates=${i(t)}
        >
          <template>
            <media-radio class="vds-speed-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-speed-radio-group>
      </media-menu-items>
    </media-menu>
  `}function as(){const{translations:e}=d(),t=u(e,"Auto");return n`
    <media-menu class="vds-quality-menu vds-menu">
      ${F({label:()=>C(e,"Quality"),icon:"menu-quality"})}
      <media-menu-items class="vds-menu-items">
        <media-quality-radio-group
          class="vds-quality-radio-group vds-radio-group"
          auto-label=${t}
        >
          <template>
            <media-radio class="vds-quality-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
              <span class="vds-radio-hint" data-part="bitrate"></span>
            </media-radio>
          </template>
        </media-quality-radio-group>
      </media-menu-items>
    </media-menu>
  `}function ns(){const{translations:e}=d(),t=u(e,"Off");return n`
    <media-menu class="vds-captions-menu vds-menu">
      ${F({label:()=>C(e,"Captions"),icon:"menu-captions"})}
      <media-menu-items class="vds-menu-items">
        <media-captions-radio-group
          class="vds-captions-radio-group vds-radio-group"
          off-label=${t}
        >
          <template>
            <media-radio class="vds-caption-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-captions-radio-group>
      </media-menu-items>
    </media-menu>
  `}function Xt(e){let t=document.querySelector(`body > .${e}`);return t||(t=document.createElement("div"),t.style.display="contents",t.classList.add(e),document.body.append(t)),t}function u(e,t){return i(()=>C(e,t))}class te extends Gt{async xe(){const t=(await Nt(()=>import("./vidstack-DBhovyOa-1Rfq1wSe.js"),__vite__mapDeps([0,1]))).icons,s={};for(const a of Object.keys(t))s[a]=jt({name:a,paths:t[a]});return s}}var L;let os=(L=class extends I{},L.props={...Z(L,L,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576},L);function is(){return[n`<media-captions class="vds-captions"></media-captions>`,n`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Tt({backward:!0,tooltip:"top start"}),z({tooltip:"top"}),Tt({tooltip:"top"}),ls(),$t(),ts(),rs(),bt({tooltip:"top"}),us()]}
        </media-controls-group>
      </media-controls>
    `]}function ls(){return i(()=>{let e=x(void 0),t=x(!1),s=h(),{title:a,started:o,currentTime:l,ended:r}=k(),{translations:b}=d(),c=pe(e),f=()=>o()||l()>0;const p=()=>{const $=r()?"Replay":f()?"Continue":"Play";return`${C(b,$)}: ${a()}`};T(()=>{var $;c()&&document.activeElement===document.body&&(($=s.player.el)==null||$.focus())});function y(){const $=e(),D=!!$&&!c()&&$.clientWidth<$.children[0].clientWidth;$&&fe($,"vds-marquee",D),t.set(D)}function _(){return n`
        <span class="vds-title-text">
          ${i(p)}${i(()=>f()?ht():null)}
        </span>
      `}return Ot(e,y),a()?n`
          <span class="vds-title" title=${i(p)} ${E(e.set)}>
            ${[_(),i(()=>t()&&!c()?_():null)]}
          </span>
        `:A()})}function rs(){return i(()=>{const{pointer:e,muted:t}=k();if(e()==="coarse"&&!t())return null;const s=x(void 0),a=x(void 0),o=x(void 0),l=me(s),r=ve(a);return T(()=>{r()&&(wt(s,a,"trigger"),wt(s,o,"popper"))}),n`
      <div class="vds-volume" ?data-active=${i(l)} ${E(s.set)}>
        ${ft({tooltip:"top",ref:a.set})}
        <div class="vds-volume-popup" ${E(o.set)}>
          ${zt({orientation:"vertical"})}
        </div>
      </div>
    `})}function us(){const e="top end";return[Zt({tooltip:"top",placement:e,portal:!0}),Jt({tooltip:"top end",placement:e,portal:!0})]}const K=class K extends ot(rt,os){constructor(){super(...arguments),this.jn=x(!1)}onSetup(){this.forwardKeepAlive=!1,this.a=h(),this.classList.add("vds-audio-layout"),this.menuContainer=Xt("vds-audio-layout"),T(()=>{this.menuContainer&&It(this.menuContainer,"data-size",this.isSmallLayout&&"sm")});const{pointer:t}=this.a.$state;T(()=>{t()==="coarse"&&T(this.kn.bind(this))}),P(()=>{var s;return(s=this.menuContainer)==null?void 0:s.remove()})}onConnect(){var t;(t=this.a.player.el)==null||t.setAttribute("data-layout","audio"),P(()=>{var s;return(s=this.a.player.el)==null?void 0:s.removeAttribute("data-layout")}),T(()=>{this.$props.customIcons()?new ut(this).connect():new te(this).connect()})}render(){return n`${i(this._j.bind(this))}`}_j(){return this.isMatch?is():null}kn(){if(!this.jn()){G(this,"pointerdown",this.ln.bind(this),{capture:!0});return}G(this,"pointerdown",t=>t.stopPropagation()),G(window,"pointerdown",this.mn.bind(this))}ln(t){const{target:s}=t;s instanceof HTMLElement&&s.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.jn.set(!0))}mn(){this.jn.set(!1),this.removeAttribute("data-scrubbing")}};K.tagName="media-audio-layout",K.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let J=K;const N=class N extends I{};N.props={...Z(N,N,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:s})=>t<576||s<380};let X=N;function cs(){return i(()=>{const e=x(!1),t=h(),{noKeyboardActionDisplay:s}=d(),{lastKeyboardAction:a}=t.$state;if(s())return null;T(()=>{e.set(!!a());const p=setTimeout(()=>e.set(!1),500);return()=>{e.set(!1),window.clearTimeout(p)}});const o=g(()=>{var y;const p=(y=a())==null?void 0:y.action;return p&&e()?be(p):null}),l=g(()=>`vds-kb-action${e()?"":" hidden"}`),r=g(ds),b=g(ms),c=g(()=>{const p=ps();return p?$e(p):null});function f(){return c()?n`
            <div class="vds-kb-bezel" role="status" aria-label=${i(b)}>
              <div class="vds-kb-icon">${c()}</div>
            </div>
          `:null}return n`
      <div class=${i(l)} data-action=${i(o)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${i(r)}</div>
        </div>
        ${i(()=>Se(a(),f()))}
      </div>
    `})}function ds(){var s;const{$state:e}=h();switch((s=e.lastKeyboardAction())==null?void 0:s.action){case"toggleMuted":return e.muted()?"0%":kt(e.volume());case"volumeUp":case"volumeDown":return kt(e.volume());default:return""}}function kt(e){return`${Math.round(e*100)}%`}function ps(){var s;const{$state:e}=h();switch((s=e.lastKeyboardAction())==null?void 0:s.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function ms(){const e=vs(),{translations:t}=d();return e?C(t,e):null}function vs(){var a,o;const{$state:e}=h(),t=(a=e.lastKeyboardAction())==null?void 0:a.action,{translations:s}=d();switch(t){case"togglePaused":return e.paused()?"Pause":"Play";case"toggleFullscreen":return e.fullscreen()?"Enter Fullscreen":"Exit Fullscreen";case"togglePictureInPicture":return e.pictureInPicture()?"Enter PiP":"Exit PiP";case"toggleCaptions":return e.textTrack()?"Closed-Captions On":"Closed-Captions Off";case"toggleMuted":case"volumeUp":case"volumeDown":return e.muted()||e.volume()===0?"Mute":`${Math.round(e.volume()*100)}% ${((o=s())==null?void 0:o.Volume)??"Volume"}`;default:return null}}function fs(){return[ee(),Y(),cs(),n`<media-captions class="vds-captions"></media-captions>`,n`<div class="vds-scrim"></div>`,n`
      <media-controls class="vds-controls">
        ${[$s(),A(),n`<media-controls-group class="vds-controls-group"></media-controls-group>`,A(),n`
            <media-controls-group class="vds-controls-group">
              ${$t()}
            </media-controls-group>
          `,n`
            <media-controls-group class="vds-controls-group">
              ${[z({tooltip:"top start"}),ft({tooltip:"top"}),zt(),Ht(),ht(),bt({tooltip:"top"}),bs(),Kt({tooltip:"top"}),qt({tooltip:"top"}),Je(),Ut({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function bs(){return i(()=>{const{menuGroup:e}=d();return e()==="bottom"?gt():null})}function $s(){return n`
    <media-controls-group class="vds-controls-group">
      ${i(()=>{const{menuGroup:e}=d();return e()==="top"?[A(),gt()]:null})}
    </media-controls-group>
  `}function hs(){return[ee(),Y(),n`<media-captions class="vds-captions"></media-captions>`,n`<div class="vds-scrim"></div>`,n`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Kt({tooltip:"top start"}),qt({tooltip:"bottom start"}),A(),bt({tooltip:"bottom"}),gt(),ft({tooltip:"bottom end"})]}
        </media-controls-group>

        ${A()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[A(),z({tooltip:"top"}),A()]}
        </media-controls-group>

        ${A()}

        <media-controls-group class="vds-controls-group">
          ${[Ht(),ht(),Ut({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${$t()}
        </media-controls-group>
      </media-controls>
    `,ys()]}function gs(){return n`
    <div class="vds-load-container">
      ${[Y(),z({tooltip:"top"})]}
    </div>
  `}function ys(){return i(()=>{const{duration:e}=k();return e()===0?null:n`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function Y(){return n`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function gt(){const{menuGroup:e,smallWhen:t}=d(),s=()=>e()==="top"||t()?"bottom":"top",a=g(()=>`${s()} ${e()==="top"?"end":"center"}`),o=g(()=>`${s()} end`);return[Zt({tooltip:a,placement:o,portal:!0}),Jt({tooltip:a,placement:o,portal:!0})]}function ee(){return i(()=>{const{noGestures:e}=d();return e()?null:n`
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
    `})}const q=class q extends ot(rt,X){onSetup(){this.forwardKeepAlive=!1,this.a=h(),this.classList.add("vds-video-layout"),this.menuContainer=Xt("vds-video-layout"),T(()=>{this.menuContainer&&It(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),P(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){var t;(t=this.a.player.el)==null||t.setAttribute("data-layout","video"),P(()=>{var s;return(s=this.a.player.el)==null?void 0:s.removeAttribute("data-layout")}),T(()=>{this.$props.customIcons()?new ut(this).connect():new te(this).connect()})}render(){return n`${i(this._j.bind(this))}`}_j(){const{load:t}=this.a.$props,{canLoad:s,streamType:a}=this.a.$state;return this.isMatch?t()==="play"&&!s()?gs():a()==="unknown"?Y():this.isSmallLayout?hs():fs():null}};q.tagName="media-video-layout",q.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let tt=q;class _s extends Gt{async xe(){const t=(await Nt(()=>import("./vidstack-DXxIKXmd-Dge3KT8k.js"),__vite__mapDeps([]))).icons,s={};for(const a of Object.keys(t))s[a]=jt({name:a,paths:t[a],viewBox:"0 0 18 18"});return s}}function H(e,t){var s;return((s=e())==null?void 0:s[t])??t}function xs(){return ks()}function ws(){const e=h(),{load:t}=e.$props,{canLoad:s}=e.$state;return g(()=>t()==="play"&&!s())()?[se(),St()]:[Cs(),Ts(),St(),Ss(),Gs(),Ws()]}function se(){const e=h(),{translations:t}=m(),{title:s}=e.$state,a=i(()=>`${H(t,"Play")}, ${s()}`);return n`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${a}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function Cs(){const{controls:e}=m();return i(()=>e().includes("play-large")?se():null)}function Ts(){const{thumbnails:e,previewTime:t}=m();return n`
    <media-thumbnail
      .src=${i(e)}
      class="plyr__preview-scrubbing"
      time=${i(()=>t())}
    ></media-thumbnail>
  `}function St(){const e=h(),{poster:t}=e.$state,s=i(()=>`background-image: url("${t()}");`);return n`<div class="plyr__poster" style=${s}></div>`}function ks(){const e=new Set(["captions","pip","airplay","fullscreen"]),{controls:t}=m(),s=i(()=>t().filter(a=>!e.has(a)).map(ae));return n`<div class="plyr__controls">${s}</div>`}function Ss(){const{controls:e}=m(),t=i(()=>e().map(ae));return n`<div class="plyr__controls">${t}</div>`}function ae(e){switch(e){case"airplay":return Ps();case"captions":return Ds();case"current-time":return Es();case"download":return js();case"duration":return ne();case"fast-forward":return Bs();case"fullscreen":return Ms();case"mute":case"volume":case"mute+volume":return Fs(e);case"pip":return Os();case"play":return Vs();case"progress":return Rs();case"restart":return Ls();case"rewind":return Is();case"settings":return Ks();default:return null}}function Ps(){const{translations:e}=m();return n`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${v(e,"AirPlay")}</span>
    </media-airplay-button>
  `}function Ds(){const{translations:e}=m(),t=v(e,"Disable captions"),s=v(e,"Enable captions");return n`
    <media-caption-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="captions"
    >
      <slot name="captions-on-icon" data-class="icon--pressed"></slot>
      <slot name="captions-off-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${t}</span>
      <span class="label--not-pressed plyr__tooltip">${s}</span>
    </media-caption-button>
  `}function Ms(){const{translations:e}=m(),t=v(e,"Enter Fullscreen"),s=v(e,"Exit Fullscreen");return n`
    <media-fullscreen-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="fullscreen"
    >
      <slot name="enter-fullscreen-icon" data-class="icon--pressed"></slot>
      <slot name="exit-fullscreen-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-fullscreen-button>
  `}function As(){const{translations:e}=m(),t=v(e,"Mute"),s=v(e,"Unmute");return n`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}function Os(){const{translations:e}=m(),t=v(e,"Enter PiP"),s=v(e,"Exit PiP");return n`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}function Vs(){const{translations:e}=m(),t=v(e,"Play"),s=v(e,"Pause");return n`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}function Ls(){const{translations:e}=m(),{remote:t}=h(),s=v(e,"Restart");function a(o){Bt(o)&&!Rt(o)||t.seek(0,o)}return n`
    <button
      type="button"
      class="plyr__control"
      data-plyr="restart"
      @pointerup=${a}
      @keydown=${a}
    >
      <slot name="restart-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </button>
  `}function Is(){const{translations:e,seekTime:t}=m(),s=i(()=>`${H(e,"Rewind")} ${t()}s`),a=i(()=>-1*t());return n`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${a}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}function Bs(){const{translations:e,seekTime:t}=m(),s=i(()=>`${H(e,"Forward")} ${t()}s`),a=i(t);return n`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${a}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}function Rs(){let e=h(),{duration:t,viewType:s}=e.$state,{translations:a,markers:o,thumbnails:l,seekTime:r,previewTime:b}=m(),c=v(a,"Seek"),f=x(null),p=i(()=>{const w=f();return w?n`<span class="plyr__progress__marker-label">${Ft(w.label)}<br /></span>`:null});function y(w){b.set(w.detail)}function _(){f.set(this)}function $(){f.set(null)}function D(){const w=l(),M=i(()=>s()==="audio");return w?n`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${M}>
            <media-slider-thumbnail .src=${w} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${p}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:n`
          <span class="plyr__tooltip">
            ${p}
            <media-slider-value></media-slider-value>
          </span>
        `}function V(){var M;const w=t();return Number.isFinite(w)?(M=o())==null?void 0:M.map(S=>n`
        <span
          class="plyr__progress__marker"
          @mouseenter=${_.bind(S)}
          @mouseleave=${$}
          style=${`left: ${S.time/w*100}%;`}
        ></span>
      `):null}return n`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${i(r)}
          aria-label=${c}
          @media-seeking-request=${y}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${i(D)}${i(V)}
        </media-time-slider>
      </div>
    </div>
  `}function Fs(e){return i(()=>{const t=e==="mute"||e==="mute+volume",s=e==="volume"||e==="mute+volume";return n`
      <div class="plyr__controls__item plyr__volume">
        ${[t?As():null,s?Ns():null]}
      </div>
    `})}function Ns(){const{translations:e}=m(),t=v(e,"Volume");return n`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${t}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function Es(){const e=h(),{translations:t,invertTime:s,toggleTime:a,displayDuration:o}=m(),l=x(Pt(s));function r(c){!a()||o()||Bt(c)&&!Rt(c)||l.set(f=>!f)}function b(){return i(()=>o()?ne():null)}return i(()=>{const{streamType:c}=e.$state,f=v(t,"LIVE"),p=v(t,"Current time"),y=i(()=>!o()&&l());return c()==="live"||c()==="ll-live"?n`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${f}</span>
          </media-live-button>
        `:n`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${p}
            ?remainder=${y}
            @pointerup=${r}
            @keydown=${r}
          ></media-time>
          ${b()}
        `})}function ne(){const{translations:e}=m(),t=v(e,"Duration");return n`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${t}
    ></media-time>
  `}function js(){return i(()=>{const e=h(),{translations:t,download:s}=m(),{source:a}=e.$state,o=a(),l=s(),r=R(l)?l:l==null?void 0:l.url,b=(R(l)?null:l==null?void 0:l.filename)||"media",c=v(t,"Download");return r||ye(o)||_e(o)?n`
          <a
            class="plyr__controls__item plyr__control"
            href=${r||o.src+`?download=${b}`}
            download=${b}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${c}</span>
          </a>
        `:null})}function Gs(){return i(()=>{const{clickToPlay:e,clickToFullscreen:t}=m();return[e()?n`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,t()?n`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})}function Ws(){const e=h(),t=x(void 0),s=i(()=>{var a;return Ft((a=t())==null?void 0:a.text)});return T(()=>{const a=e.$state.textTrack();if(!a)return;function o(){t.set(a==null?void 0:a.activeCues[0])}return o(),G(a,"cue-change",o)}),n`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${s}</span>
    </div>
  `}function Ks(){const{translations:e}=m(),t=v(e,"Settings");return n`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${t}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[Us(),Qs(),Js(),Ys()]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}function Q({label:e,children:t}){const s=x(!1);return n`
    <media-menu @open=${()=>s.set(!0)} @close=${()=>s.set(!1)}>
      ${qs({label:e,open:s})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function qs({open:e,label:t}){const{translations:s}=m(),a=i(()=>`plyr__control plyr__control--${e()?"back":"forward"}`);function o(){const l=v(s,"Go back to previous menu");return i(()=>e()?n`<span class="plyr__sr-only">${l}</span>`:null)}return n`
    <media-menu-button class=${a} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${ta(e)}>
        ${v(s,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${o()}
    </media-menu-button>
  `}function Us(){return Q({label:"Audio",children:zs()})}function zs(){const{translations:e}=m();return n`
    <media-audio-radio-group empty-label=${v(e,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function Ys(){return Q({label:"Speed",children:Hs()})}function Hs(){const{translations:e,speed:t}=m();return n`
    <media-speed-radio-group .rates=${t} normal-label=${v(e,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function Qs(){return Q({label:"Captions",children:Zs()})}function Zs(){const{translations:e}=m();return n`
    <media-captions-radio-group off-label=${v(e,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function Js(){return Q({label:"Quality",children:Xs()})}function Xs(){const{translations:e}=m();return n`
    <media-quality-radio-group auto-label=${v(e,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function ta(e){return i(()=>e()?"true":"false")}function v(e,t){return i(()=>H(e,t))}const _t=class _t extends ot(rt,ge){onSetup(){this.forwardKeepAlive=!1,this.a=h()}onConnect(){var t;(t=this.a.player.el)==null||t.setAttribute("data-layout","plyr"),P(()=>{var s;return(s=this.a.player.el)==null?void 0:s.removeAttribute("data-layout")}),he(this,this.a),T(()=>{this.$props.customIcons()?new ut(this).connect():new _s(this).connect()})}render(){return n`${i(this._j.bind(this))}`}_j(){const{viewType:t}=this.a.$state;return t()==="audio"?xs():t()==="video"?ws():null}};_t.tagName="media-plyr-layout";let et=_t;it(J);it(tt);it(et);
