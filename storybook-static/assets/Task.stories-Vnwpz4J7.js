import{f as o}from"./index-cNkFZXRj.js";import{j as t}from"./jsx-runtime-SKoiH9zj.js";import"./index-DJO9vBfz.js";function S({task:{id:e,title:c,state:a},onArchiveTask:v,onUnArchiveTask:_,onPinTask:y}){return t.jsxs("div",{className:`list-item ${a}`,children:[t.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[t.jsx("input",{type:"checkbox",name:"checked",id:`archiveTask-${e}`,checked:a==="TASK_ARCHIVED"}),t.jsx("span",{className:"checkbox-custom",onClick:()=>a==="TASK_INBOX"||a==="TASK_PINNED"?v(e):_(e)})]}),t.jsx("label",{htmlFor:"title","aria-label":c,className:"title",children:t.jsx("input",{type:"text",value:c,readOnly:!0,name:"title",placeholder:"Input title",style:{textOverflow:"ellipsis"}})}),a!=="TASK_ARCHIVED"&&t.jsx("button",{className:"pin-button",onClick:()=>y(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:t.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}S.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: string;
  title: string;
  state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:"'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'",elements:[{name:"literal",value:"'TASK_INBOX'"},{name:"literal",value:"'TASK_PINNED'"},{name:"literal",value:"'TASK_ARCHIVED'"}],required:!0}}]}},description:""},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onUnArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const E={title:"Task",component:S,parameters:{layout:"centered"},tags:["autodocs"],args:{onArchiveTask:o(),onUnArchiveTask:o(),onPinTask:o()}},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},n={args:{task:{id:"1",title:"Test Task",state:"TASK_PINNED"}}},r={args:{task:{id:"1",title:"Test Task",state:"TASK_ARCHIVED"}}},K="This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!",i={args:{task:{id:"1",title:K,state:"TASK_INBOX"}}};var l,u,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(k=r.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var A,I,N;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: longTitleString,
      state: 'TASK_INBOX'
    }
  }
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const b=["Default","Pinned","Archived","LongTitle"];export{r as Archived,s as Default,i as LongTitle,n as Pinned,b as __namedExportsOrder,E as default};
