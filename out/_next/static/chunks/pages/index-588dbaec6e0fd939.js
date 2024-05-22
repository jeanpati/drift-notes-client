(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6209)}])},6836:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),s=n(9008),i=n.n(s),o=n(3271);function a(e){let{children:t}=e;return(0,r.jsx)(o.O,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Drift Notes"})}),(0,r.jsx)("main",{className:"container",children:t})]})})}},1641:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),s=n(1664),i=n.n(s),o=n(7294),a=n(3271),l=n(1163);function c(){let{token:e,setProfile:t}=(0,a.b)();(0,o.useRef)(null);let[n,s]=(0,o.useState)(!1),c=(0,l.useRouter)();return(0,o.useEffect)(()=>{e&&s(!0)},[e]),(0,r.jsxs)("nav",{className:"text-emerald-900 py-1 relative w-full",children:[(0,r.jsx)("div",{className:"m-3 container flex justify-between items-center px-1",children:(0,r.jsx)("h1",{className:"text-8xl bg-clip-text text-transparent bg-emerald-900",children:"drift notes."})}),(0,r.jsx)("div",{children:n?(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(i(),{href:"/",className:"text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline ml-5 mr-6 ",children:"home"}),(0,r.jsx)(i(),{href:"/dashboard",className:"text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline",children:"dashboard"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:()=>{t({id:0,username:"",first_name:"",last_name:"",email:""}),localStorage.removeItem("token"),s(!1),c.push("/login")},className:"mr-5 text-3xl text-black hover:text-red-500 transition duration-75 hover:underline",children:"log out"})})]}):(0,r.jsxs)("div",{children:[(0,r.jsx)(i(),{href:"/",className:"text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline ml-5 mr-6 ",children:"home"}),(0,r.jsx)(i(),{href:"/login",className:"text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline",children:"log in"})]})})]})}},3271:function(e,t,n){"use strict";n.d(t,{O:function(){return l},b:function(){return c}});var r=n(5893),s=n(7294),i=n(3409),o=n(1163);let a=(0,s.createContext)({profile:{id:0,username:"",first_name:"",last_name:"",email:""},token:"",setProfile:()=>{},setToken:()=>{}});function l(e){let{children:t}=e,[n,l]=(0,s.useState)({id:0,username:"",first_name:"",last_name:"",email:""}),[c,u]=(0,s.useState)("");return(0,o.useRouter)(),(0,s.useEffect)(()=>{u(localStorage.getItem("token")||"")},[]),(0,s.useEffect)(()=>{!c||(localStorage.setItem("token",c),"id"in n||(0,i.et)().then(e=>{e&&l(e)}))},[c]),(0,r.jsx)(a.Provider,{value:{profile:n,token:c,setToken:u,setProfile:l},children:t})}function c(){return(0,s.useContext)(a)}},3409:function(e,t,n){"use strict";n.d(t,{et:function(){return o},x4:function(){return s},z2:function(){return i}});var r=n(7136);function s(e){return(0,r.DI)("login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function i(e){return(0,r.DI)("register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function o(){let e=localStorage.getItem("token");return(0,r.DI)("profile",{headers:{Authorization:"Token ".concat(e)}})}},7136:function(e,t,n){"use strict";n.d(t,{DI:function(){return a},Gk:function(){return l}});let r="https://app.driftnotes.com",s=e=>{if(!e.ok){if(204===e.status)return;throw Error(e.status.toString())}return e},i=e=>{if(200===e.status||201===e.status)return e.json();throw Error(e.status.toString())},o=e=>{if("401"===e.message&&(window.location.href="/login"),"404"===e.message)throw Error(e.message);if("400"!==e.message)throw e},a=(e,t)=>fetch("".concat(r,"/").concat(e),t).then(i).catch(o),l=(e,t)=>fetch("".concat(r,"/").concat(e),t).then(s).catch(o)},6209:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893),s=n(6836),i=n(1641);function o(){return(0,r.jsx)("div",{className:"w-full pt-20 md:pt-40 bg-beige-100 min-h-screen flex items-center justify-center",children:(0,r.jsxs)("div",{className:"container mx-auto px-4 flex flex-col items-center",children:[(0,r.jsx)("img",{className:"object-cover mb-8 max-w-full h-auto mx-auto",src:"/images/1.png",alt:"Cover Image"}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h1",{className:"text-3xl md:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 hover:animate-bounce mb-4",children:"welcome to your travel notebook!"}),(0,r.jsx)("p",{className:"text-xl md:text-3xl lg:text-5xl text-orange-300 mb-12",children:"plan your days for worry-free trips"})]})]})})}o.getLayout=function(e){return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{}),e]})}}},function(e){e.O(0,[814,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);