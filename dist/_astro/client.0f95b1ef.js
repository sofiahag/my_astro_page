import{d,h as r,c as p,a as m,S as y}from"./runtime-dom.esm-bundler.f3ad4146.js";const i=()=>{},S=d({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:e,value:t,hydrate:s}){if(!t)return()=>null;let o=s?"astro-slot":"astro-static-slot";return()=>r(o,{name:e,innerHTML:t})}}),h=e=>async(t,s,o,{client:l})=>{if(delete s.class,!e.hasAttribute("ssr"))return;const c=t.name?`${t.name} Host`:void 0,u={};for(const[n,f]of Object.entries(o))u[n]=()=>r(S,{value:f,name:n==="default"?void 0:n});let a=r(t,s,u);if(A(t.setup)&&(a=r(y,null,a)),l==="only"){const n=p({name:c,render:()=>a});await i(),n.mount(e,!1)}else{const n=m({name:c,render:()=>a});await i(),n.mount(e,!0)}};function A(e){const t=e?.constructor;return t&&t.name==="AsyncFunction"}export{h as default};
