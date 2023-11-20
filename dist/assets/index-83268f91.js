import{aO as o,aP as l,aQ as t,d as C,c as g,r as I,aR as w,aS as i,aX as e,ax as b,a_ as k,aU as L,b9 as V,aT as y,bF as M}from"./index-8c69de81.js";import{_ as S}from"./web-site-link.vue_vue_type_script_setup_true_lang-d5a63462.js";import{_ as U}from"./Input-69237b4c.js";import{_ as j,c as A}from"./Popover-44056fde.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./Suffix-7ae83bbd.js";import"./use-merged-state-d261b855.js";import"./get-0ac91a3f.js";import"./format-length-c9d165c6.js";import"./cssr-80e4794b.js";import"./use-compitable-36e68cbd.js";import"./next-frame-once-7035a838.js";const F={width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"prefix__prefix__feather prefix__prefix__feather-cast"},N=t("path",{d:"M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 20M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6M2 20h.01"},null,-1),O=[N];function P(u,a){return o(),l("svg",F,O)}const R={name:"local-cast",render:P},T={class:"inline-block",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},X=t("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"},null,-1),z=[X];function H(u,a){return o(),l("svg",T,z)}const Q={name:"local-activity",render:H},q={key:0,class:"grid grid-cols-9 h-auto overflow-auto"},D=["onClick"],G=C({name:"IconSelect",__name:"icon-select",props:{value:{},icons:{},emptyIcon:{default:"mdi:apps"}},emits:["update:value"],setup(u,{emit:a}){const d=u,r=g({get(){return d.value},set(n){a("update:value",n)}}),m=g(()=>r.value||d.emptyIcon),_=I(""),x=g(()=>d.icons.filter(n=>n.includes(_.value)));function h(n){r.value=n}return(n,p)=>{const v=V,s=U,f=j,B=A;return o(),w(B,{placement:"bottom-end",trigger:"click"},{trigger:i(()=>[e(s,{value:r.value,"onUpdate:value":p[0]||(p[0]=c=>r.value=c),readonly:"",placeholder:"点击选择图标"},{suffix:i(()=>[e(v,{icon:m.value,class:"text-30px p-5px"},null,8,["icon"])]),_:1},8,["value"])]),header:i(()=>[e(s,{value:_.value,"onUpdate:value":p[1]||(p[1]=c=>_.value=c),placeholder:"搜索图标"},null,8,["value"])]),default:i(()=>[x.value.length>0?(o(),l("div",q,[(o(!0),l(b,null,k(x.value,c=>(o(),l("span",{key:c,onClick:ce=>h(c)},[e(v,{icon:c,class:L(["border-1px border-#d9d9d9 text-30px m-2px p-5px cursor-pointer",{"border-primary":r.value===c}])},null,8,["icon","class"])],8,D))),128))])):(o(),w(f,{key:1,class:"w-306px",description:"你什么也找不到"}))]),_:1})}}});const J=E(G,[["__scopeId","data-v-8ba73208"]]),$=["mdi:emoticon","mdi:ab-testing","ph:alarm","ph:android-logo","ph:align-bottom","ph:archive-box-light","uil:basketball","uil:brightness-plus","uil:capture","mdi:apps-box","mdi:alert","mdi:airballoon","mdi:airplane-edit","mdi:alpha-f-box-outline","mdi:arm-flex-outline","ic:baseline-10mp","ic:baseline-access-time","ic:baseline-brightness-4","ic:baseline-brightness-5","ic:baseline-credit-card","ic:baseline-filter-1","ic:baseline-filter-2","ic:baseline-filter-3","ic:baseline-filter-4","ic:baseline-filter-5","ic:baseline-filter-6","ic:baseline-filter-7","ic:baseline-filter-8","ic:baseline-filter-9","ic:baseline-filter-9-plus"],K={class:"h-full"},W={class:"grid grid-cols-10"},Y={class:"mt-50px"},Z=t("h1",{class:"mb-20px text-18px font-500"},"Icon图标选择器",-1),ee=t("div",{class:"pb-12px text-16px"}," 在src/assets/svg-icon文件夹下的svg文件，通过在template里面以 icon-local-{文件名} 直接渲染, 其中icon-local为.env文件里的 VITE_ICON_LOCAL_PREFIX ",-1),te={class:"grid grid-cols-10"},oe={class:"mt-5px flex-x-center"},ne={class:"mt-5px flex-x-center"},se=t("div",{class:"py-12px text-16px"},"通过SvgIcon组件动态渲染, 菜单通过meta的localIcon属性渲染自定义图标",-1),le={class:"grid grid-cols-10"},ge=C({__name:"index",setup(u){const a=I(""),d=["custom-icon","activity","at-sign","cast","chrome","copy","wind"];return(r,m)=>{const _=V,x=J,h=S,n=M,p=Q,v=R;return o(),l("div",K,[e(n,{title:"Icon组件示例",bordered:!1,class:"rounded-8px shadow-sm"},{footer:i(()=>[e(h,{label:"iconify地址：",link:"https://icones.js.org/",class:"mt-10px"})]),default:i(()=>[t("div",W,[(o(!0),l(b,null,k(y($),s=>(o(),l("div",{key:s,class:"mt-5px flex-x-center"},[e(_,{icon:s,class:"text-30px"},null,8,["icon"])]))),128))]),t("div",Y,[Z,e(x,{value:a.value,"onUpdate:value":m[0]||(m[0]=s=>a.value=s),icons:y($)},null,8,["value","icons"])])]),_:1}),e(n,{title:"自定义图标示例",bordered:!1,class:"mt-10px rounded-8px shadow-sm"},{default:i(()=>[ee,t("div",te,[t("div",oe,[e(p,{class:"text-40px text-success"})]),t("div",ne,[e(v,{class:"text-20px text-error"})])]),se,t("div",le,[(o(),l(b,null,k(d,(s,f)=>t("div",{key:f,class:"mt-5px flex-x-center"},[e(_,{"local-icon":s,class:"text-30px text-primary"},null,8,["local-icon"])])),64))])]),_:1})])}}});export{ge as default};
