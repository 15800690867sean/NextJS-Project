(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{5058:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[eventId]",function(){return t(9781)}])},7347:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893);function i(){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",clipRule:"evenodd"})})}},3765:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893);function i(){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:[(0,s.jsx)("path",{d:"M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"}),(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z",clipRule:"evenodd"})]})}},9781:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return j},default:function(){return p}});var s=t(5893),i=t(7294),a=t(9252),c=t.n(a),r=t(3765),o=t(7347),l=t(1420),m=t.n(l);function d(e){let n=(0,i.useRef)(),t=(0,i.useRef)(),a=(0,i.useRef)();return(0,s.jsx)("div",{className:m().container,children:(0,s.jsxs)("form",{onSubmit:s=>{s.preventDefault();let i=n.current.value,c=t.current.value,r=a.current.value;e.onAddComment({email:i,name:c,text:r})},className:m().form,children:[(0,s.jsxs)("div",{className:m().firstRow,children:[(0,s.jsxs)("div",{className:m().inputWrapper,children:[(0,s.jsx)("label",{htmlFor:"email",children:"Your Email"}),(0,s.jsx)("input",{ref:n,id:"email",type:"email"})]}),(0,s.jsxs)("div",{className:m().inputWrapper,children:[(0,s.jsx)("label",{htmlFor:"name",children:"Your Name"}),(0,s.jsx)("input",{ref:t,id:"name",type:"text"})]})]}),(0,s.jsxs)("div",{className:m().secondRow,children:[(0,s.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,s.jsx)("textarea",{ref:a,id:"comment",rows:10})]}),(0,s.jsx)("button",{children:"Submit"})]})})}var u=t(9415),_=t.n(u);function h(e){return(0,s.jsx)("div",{className:_().container,children:e.comments.map(e=>(0,s.jsxs)("div",{className:_().comment,children:[(0,s.jsx)("div",{children:e.text}),(0,s.jsxs)("p",{children:["By ",e.name]})]},e._id))})}var x=t(8442),f=t.n(x);function v(e){let[n,t]=(0,i.useState)(!1),[a,c]=(0,i.useState)([]);return(0,i.useEffect)(()=>{n&&fetch("/api/comments/".concat(e.eventId)).then(e=>e.json()).then(e=>{c(e.comments)})},[n]),(0,s.jsxs)("div",{className:f().container,children:[(0,s.jsxs)("button",{className:f().button,onClick:()=>{t(e=>!e)},children:[n?"Hide":"Show"," Comments"]}),n&&(0,s.jsx)(d,{onAddComment:n=>{fetch("/api/comments/".concat(e.eventId),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>alert(e.message))}}),n&&(0,s.jsx)(h,{comments:a})]})}var j=!0;function p(e){let{event:n}=e;if(!n)return(0,s.jsx)("p",{children:"No Event Found!"});let{location:t,title:i,description:a,date:l,image:m}=n,d=new Date(l).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"});return(0,s.jsxs)("div",{className:c().container,children:[(0,s.jsxs)("div",{className:c().event,children:[(0,s.jsx)("h1",{children:i}),(0,s.jsxs)("div",{className:c().details,children:[(0,s.jsx)("img",{className:c().img,src:"/".concat(m),alt:i}),(0,s.jsxs)("div",{className:c().info,children:[(0,s.jsxs)("div",{className:c().singleRoll,children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)("time",{children:d})]}),(0,s.jsxs)("div",{className:c().singleRoll,children:[(0,s.jsx)(o.Z,{}),(0,s.jsx)("address",{children:t})]})]})]}),(0,s.jsx)("p",{children:a})]}),(0,s.jsx)(v,{eventId:e.event.id})]})}},9415:function(e){e.exports={container:"comment-list_container__4Afo0",comment:"comment-list_comment__KjhK_"}},8442:function(e){e.exports={container:"comments_container__NqOuK",button:"comments_button__9mUGv"}},1420:function(e){e.exports={container:"new-comment_container__vEZni",form:"new-comment_form__SKIJc",firstRow:"new-comment_firstRow__SH3_Q",inputWrapper:"new-comment_inputWrapper__NKgg7",secondRow:"new-comment_secondRow__V1h5D"}},9252:function(e){e.exports={container:"detailPage_container__NUqdz",event:"detailPage_event__b1dMR",singleRoll:"detailPage_singleRoll__Vz1Js",img:"detailPage_img__it_ti",info:"detailPage_info__gCzzG",details:"detailPage_details__GnJbg"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5058)}),_N_E=e.O()}]);