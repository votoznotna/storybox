import{f as o}from"./index-BJGx-5rS.js";import{j as t}from"./jsx-runtime-DF2Pcvd1.js";function I({task:{id:e,title:l,state:a},onArchiveTask:v,onUnArchiveTask:N,onPinTask:y}){return t.jsxs("div",{className:`list-item ${a}`,children:[t.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[t.jsx("input",{type:"checkbox",name:"checked",id:`archiveTask-${e}`,checked:a==="TASK_ARCHIVED",readOnly:!0}),t.jsx("span",{className:"checkbox-custom",onClick:()=>a==="TASK_INBOX"||a==="TASK_PINNED"?v(e):N(e)})]}),t.jsx("label",{htmlFor:"title","aria-label":l,className:"title",children:t.jsx("input",{type:"text",value:l,readOnly:!0,name:"title",placeholder:"Input title",style:{textOverflow:"ellipsis"}})}),a!=="TASK_ARCHIVED"&&t.jsx("button",{className:"pin-button",onClick:()=>y(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:t.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}I.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: string;
  title: string;
  state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:"'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'",elements:[{name:"literal",value:"'TASK_INBOX'"},{name:"literal",value:"'TASK_PINNED'"},{name:"literal",value:"'TASK_ARCHIVED'"}],required:!0}}]}},description:""},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onUnArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const K={title:"Task",component:I,tags:["autodocs"],args:{onArchiveTask:o(),onUnArchiveTask:o(),onPinTask:o()}},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},n={args:{task:{id:"1",title:"Test Task",state:"TASK_PINNED"}}},r={args:{task:{id:"1",title:"Test Task",state:"TASK_ARCHIVED"}}},f="This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!",i={args:{task:{id:"1",title:f,state:"TASK_INBOX"}}};var c,u,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,T;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_PINNED'
    }
  }
}`,...(T=(m=n.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var g,k,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(h=(k=r.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var A,_,S;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: longTitleString,
      state: 'TASK_INBOX'
    }
  }
}`,...(S=(_=i.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const x=["Default","Pinned","Archived","LongTitle"],E=Object.freeze(Object.defineProperty({__proto__:null,Archived:r,Default:s,LongTitle:i,Pinned:n,__namedExportsOrder:x,default:K},Symbol.toStringTag,{value:"Module"}));export{s as D,I as T,E as a};
