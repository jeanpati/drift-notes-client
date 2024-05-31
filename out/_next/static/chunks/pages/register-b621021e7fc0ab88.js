(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{9838:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(2609)}])},8062:function(e,t,n){"use strict";n.d(t,{II:function(){return s},Ph:function(){return l}});var r=n(5893);function s(e){let{id:t,type:n="text",placeholder:s="",defaultValue:l="",refEl:i,label:a,onChangeEvent:o,addlClass:u="",children:c}=e;return(0,r.jsxs)("div",{className:"field ".concat(u," text-2xl"),children:[a&&(0,r.jsx)("label",{className:"label",children:a}),(0,r.jsx)("div",{className:"control",children:(0,r.jsx)("input",{id:t,placeholder:s,className:"input",type:n,defaultValue:l,ref:i,onChange:o})}),c]})}function l(e){let{id:t,refEl:n,options:s,title:l,value:i,onChangeEvent:a,addlClass:o=""}=e;return(0,r.jsx)("div",{className:"text-2xl",children:(0,r.jsx)("div",{className:"control",children:(0,r.jsxs)("select",{id:t,ref:n,value:i,onChange:a,className:"input p-1.5",children:[(0,r.jsx)("option",{value:"0",children:l}),s.map(e=>(0,r.jsx)("option",{value:e.id,className:"",children:e.name},e.id))]})})})}n(7294)},6836:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),s=n(9008),l=n.n(s),i=n(3271);function a(e){let{children:t}=e;return(0,r.jsx)(i.O,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{children:(0,r.jsx)("title",{children:"Drift Notes"})}),(0,r.jsx)("main",{children:t})]})})}},1641:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),s=n(1664),l=n.n(s),i=n(7294),a=n(3271),o=n(1163);function u(){let{token:e,setProfile:t}=(0,a.b)();(0,i.useRef)(null);let[n,s]=(0,i.useState)(!1),u=(0,o.useRouter)();return(0,i.useEffect)(()=>{e&&s(!0)},[e]),(0,r.jsxs)("nav",{className:"text-emerald-900 py-1 relative w-full",children:[(0,r.jsx)("div",{className:"m-3 container flex justify-between items-center px-1",children:(0,r.jsx)("h1",{className:"text-8xl bg-clip-text text-transparent bg-emerald-900",children:"drift notes."})}),(0,r.jsx)("div",{children:n?(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(l(),{href:"/",className:"text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline ml-5 mr-6 ",children:"home"}),(0,r.jsx)(l(),{href:"/dashboard",className:"text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline",children:"dashboard"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:()=>{t({id:0,username:"",first_name:"",last_name:"",email:""}),localStorage.removeItem("token"),s(!1),u.push("/login")},className:"mr-5 text-3xl text-black hover:text-red-500 transition duration-75 hover:underline",children:"log out"})})]}):(0,r.jsxs)("div",{children:[(0,r.jsx)(l(),{href:"/",className:"text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline ml-5 mr-6 ",children:"home"}),(0,r.jsx)(l(),{href:"/login",className:"text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline",children:"log in"})]})})]})}},3271:function(e,t,n){"use strict";n.d(t,{O:function(){return o},b:function(){return u}});var r=n(5893),s=n(7294),l=n(3409),i=n(1163);let a=(0,s.createContext)({profile:{id:0,username:"",first_name:"",last_name:"",email:""},token:"",setProfile:()=>{},setToken:()=>{}});function o(e){let{children:t}=e,[n,o]=(0,s.useState)({id:0,username:"",first_name:"",last_name:"",email:""}),[u,c]=(0,s.useState)("");return(0,i.useRouter)(),(0,s.useEffect)(()=>{c(localStorage.getItem("token")||"")},[]),(0,s.useEffect)(()=>{!u||(localStorage.setItem("token",u),"id"in n||(0,l.et)().then(e=>{e&&o(e)}))},[u]),(0,r.jsx)(a.Provider,{value:{profile:n,token:u,setToken:c,setProfile:o},children:t})}function u(){return(0,s.useContext)(a)}},3409:function(e,t,n){"use strict";n.d(t,{et:function(){return i},x4:function(){return s},z2:function(){return l}});var r=n(7136);function s(e){return(0,r.DI)("login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function l(e){return(0,r.DI)("register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function i(){let e=localStorage.getItem("token");return(0,r.DI)("profile",{headers:{Authorization:"Token ".concat(e)}})}},7136:function(e,t,n){"use strict";n.d(t,{DI:function(){return a},Gk:function(){return o}});let r="https://app.driftnotes.com",s=e=>{if(!e.ok){if(204===e.status)return;throw Error(e.status.toString())}return e},l=e=>{if(200===e.status||201===e.status)return e.json();throw Error(e.status.toString())},i=e=>{if("401"===e.message&&(window.location.href="/login"),"404"===e.message)throw Error(e.message);if("400"!==e.message)throw e},a=(e,t)=>fetch("".concat(r,"/").concat(e),t).then(l).catch(i),o=(e,t)=>fetch("".concat(r,"/").concat(e),t).then(s).catch(i)},2609:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),s=n(1664),l=n.n(s),i=n(1163),a=n(7294),o=n(8062),u=n(6836),c=n(1641),d=n(3271),f=n(3409);function m(){let{setToken:e}=(0,d.b)(),t=(0,a.useRef)(null),n=(0,a.useRef)(null),s=(0,a.useRef)(null),u=(0,a.useRef)(null),c=(0,a.useRef)(null),m=(0,i.useRouter)(),x=async r=>{var l,i,a,o,d;r.preventDefault();let x={username:(null===(l=s.current)||void 0===l?void 0:l.value)||"",password:(null===(i=u.current)||void 0===i?void 0:i.value)||"",first_name:(null===(a=t.current)||void 0===a?void 0:a.value)||"",last_name:(null===(o=n.current)||void 0===o?void 0:o.value)||"",email:(null===(d=c.current)||void 0===d?void 0:d.value)||""};await (0,f.z2)(x).then(t=>{t.token&&(e(t.token),m.push("/"))})};return(0,r.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,r.jsx)("div",{className:"max-w-md w-full",children:(0,r.jsxs)("form",{className:"outline outline-orange-500 shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:x,children:[(0,r.jsx)("h1",{className:"text-3xl font-bold mb-6 text-center text-green-900",children:"happy to have you!"}),(0,r.jsx)(o.II,{id:"firstName",refEl:t,type:"text",label:"first name"}),(0,r.jsx)(o.II,{id:"lastName",refEl:n,type:"text",label:"last name"}),(0,r.jsx)(o.II,{id:"email",refEl:c,type:"text",label:"email"}),(0,r.jsx)(o.II,{id:"username",refEl:s,type:"text",label:"username"}),(0,r.jsx)(o.II,{id:"password",refEl:u,type:"password",label:"password"}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(l(),{href:"/login",children:(0,r.jsx)("button",{className:"mt-5 hover:underline text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"cancel"})}),(0,r.jsx)("button",{className:"mt-5 outline outline-emerald-800 hover:bg-rose-100 text-orange-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"submit"})]})]})})})}m.getLayout=function(e){return(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(c.Z,{}),e]})}}},function(e){e.O(0,[814,888,774,179],function(){return e(e.s=9838)}),_N_E=e.O()}]);