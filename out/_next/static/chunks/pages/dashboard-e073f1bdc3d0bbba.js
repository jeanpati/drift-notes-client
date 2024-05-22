(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{528:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(9476)}])},8062:function(e,t,n){"use strict";n.d(t,{II:function(){return s},Ph:function(){return a}});var r=n(5893);function s(e){let{id:t,type:n="text",placeholder:s="",defaultValue:a="",refEl:l,label:i,onChangeEvent:o,addlClass:c="",children:d}=e;return(0,r.jsxs)("div",{className:"field ".concat(c," text-2xl"),children:[i&&(0,r.jsx)("label",{className:"label",children:i}),(0,r.jsx)("div",{className:"control",children:(0,r.jsx)("input",{id:t,placeholder:s,className:"input",type:n,defaultValue:a,ref:l,onChange:o})}),d]})}function a(e){let{id:t,refEl:n,options:s,title:a,label:l,addlClass:i=""}=e;return(0,r.jsxs)("div",{className:"text-2xl",children:[l&&(0,r.jsx)("label",{className:"label",children:l}),(0,r.jsx)("div",{className:"control",children:(0,r.jsxs)("select",{id:t,ref:n,className:"input p-1.5",children:[(0,r.jsx)("option",{value:"0",children:a}),s.map(e=>(0,r.jsx)("option",{value:e.id,className:"",children:e.name},e.id))]})})]})}n(7294)},6836:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),s=n(9008),a=n.n(s),l=n(3271);function i(e){let{children:t}=e;return(0,r.jsx)(l.O,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"Drift Notes"})}),(0,r.jsx)("main",{className:"container",children:t})]})})}},7856:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),s=n(7294);function a(e){let{showModal:t,setShowModal:n,title:a,children:l}=e,i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{function e(e){i.current&&!i.current.contains(e.target)&&n(!1)}return t?(document.body.style.overflow="hidden",document.addEventListener("mousedown",e)):(document.body.style.overflow="auto",document.removeEventListener("mousedown",e)),()=>{document.body.style.overflow="auto",document.removeEventListener("mousedown",e)}},[t,n]),(0,r.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:(0,r.jsxs)("div",{ref:i,className:"outline outline-orange-500 bg-rose-100 rounded-lg shadow-lg p-6 w-full max-w-xl",children:[(0,r.jsxs)("header",{className:"flex justify-end items-center border-b pb-3",children:[(0,r.jsx)("button",{className:"text-2xl text-black hover:text-red-500","aria-label":"close",onClick:()=>n(!1),children:"close"}),(0,r.jsx)("p",{className:"text-xl font-semibold",children:a})]}),(0,r.jsx)("section",{className:"mt-4",children:l})]})})}},1641:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),s=n(1664),a=n.n(s),l=n(7294),i=n(3271),o=n(1163);function c(){let{token:e,setProfile:t}=(0,i.b)();(0,l.useRef)(null);let[n,s]=(0,l.useState)(!1),c=(0,o.useRouter)();return(0,l.useEffect)(()=>{e&&s(!0)},[e]),(0,r.jsxs)("nav",{className:"text-emerald-900 py-1 relative w-full",children:[(0,r.jsx)("div",{className:"m-3 container flex justify-between items-center px-1",children:(0,r.jsx)("h1",{className:"text-8xl bg-clip-text text-transparent bg-emerald-900",children:"drift notes."})}),(0,r.jsx)("div",{children:n?(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(a(),{href:"/",className:"text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline ml-5 mr-6 ",children:"home"}),(0,r.jsx)(a(),{href:"/dashboard",className:"text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline",children:"dashboard"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:()=>{t({id:0,username:"",first_name:"",last_name:"",email:""}),localStorage.removeItem("token"),s(!1),c.push("/login")},className:"mr-5 text-3xl text-black hover:text-red-500 transition duration-75 hover:underline",children:"log out"})})]}):(0,r.jsxs)("div",{children:[(0,r.jsx)(a(),{href:"/",className:"text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline ml-5 mr-6 ",children:"home"}),(0,r.jsx)(a(),{href:"/login",className:"text-3xl text-black hover:text-emerald-600 transition duration-75 hover:underline",children:"log in"})]})})]})}},3271:function(e,t,n){"use strict";n.d(t,{O:function(){return o},b:function(){return c}});var r=n(5893),s=n(7294),a=n(3409),l=n(1163);let i=(0,s.createContext)({profile:{id:0,username:"",first_name:"",last_name:"",email:""},token:"",setProfile:()=>{},setToken:()=>{}});function o(e){let{children:t}=e,[n,o]=(0,s.useState)({id:0,username:"",first_name:"",last_name:"",email:""}),[c,d]=(0,s.useState)("");return(0,l.useRouter)(),(0,s.useEffect)(()=>{d(localStorage.getItem("token")||"")},[]),(0,s.useEffect)(()=>{!c||(localStorage.setItem("token",c),"id"in n||(0,a.et)().then(e=>{e&&o(e)}))},[c]),(0,r.jsx)(i.Provider,{value:{profile:n,token:c,setToken:d,setProfile:o},children:t})}function c(){return(0,s.useContext)(i)}},3409:function(e,t,n){"use strict";n.d(t,{et:function(){return l},x4:function(){return s},z2:function(){return a}});var r=n(7136);function s(e){return(0,r.DI)("login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function a(e){return(0,r.DI)("register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function l(){let e=localStorage.getItem("token");return(0,r.DI)("profile",{headers:{Authorization:"Token ".concat(e)}})}},7136:function(e,t,n){"use strict";n.d(t,{DI:function(){return i},Gk:function(){return o}});let r="https://app.driftnotes.com",s=e=>{if(!e.ok){if(204===e.status)return;throw Error(e.status.toString())}return e},a=e=>{if(200===e.status||201===e.status)return e.json();throw Error(e.status.toString())},l=e=>{if("401"===e.message&&(window.location.href="/login"),"404"===e.message)throw Error(e.message);if("400"!==e.message)throw e},i=(e,t)=>fetch("".concat(r,"/").concat(e),t).then(a).catch(l),o=(e,t)=>fetch("".concat(r,"/").concat(e),t).then(s).catch(l)},9036:function(e,t,n){"use strict";n.d(t,{B7:function(){return l},Er:function(){return s},IR:function(){return o},Rt:function(){return i},s0:function(){return a}});var r=n(7136);function s(e){return(0,r.DI)("trips",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},body:JSON.stringify(e)})}function a(e){return(0,r.DI)("trips/".concat(e),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}})}function l(){return(0,r.DI)("trips",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}})}function i(e){return(0,r.Gk)("trips/".concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},body:JSON.stringify(e)})}function o(e){return(0,r.Gk)("trips/".concat(e),{method:"DELETE",headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}})}},9476:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),s=n(7294),a=n(6836),l=n(1641),i=n(202),o=n(777),c=n(8029),d=n(9036),u=n(1664),x=n.n(u),h=n(1163);function m(){let e=(0,i.NL)(),{data:t,isLoading:n}=(0,o.a)({queryKey:["trips"],queryFn:d.B7}),s=(0,h.useRouter)(),{mutateAsync:a}=(0,c.D)({mutationFn:d.IR,onError:e=>{500===e.response.status?(console.error("Server error: ",e.response.data),window.alert("Users can only delete trips they have created o>o")):console.error("Error deleting trip:",e)},onSuccess:()=>{e.invalidateQueries({queryKey:["trips"]})}});if(n)return(0,r.jsx)("div",{children:"Loading..."});let l=e=>{let[t,n,r]=e.split("-");return"".concat(n,"/").concat(r,"/").concat(t)},u=new Date,m=(null==t?void 0:t.filter(e=>new Date(e.end_date)>=u))||[],f=(null==t?void 0:t.filter(e=>new Date(e.end_date)<u))||[],p=async e=>{window.confirm("Are you sure you want to delete this trip?")&&(await a(e),s.push("/dashboard"))};return(0,r.jsxs)("div",{className:"bg-white shadow overflow-hidden sm:rounded-md",children:[(0,r.jsx)("div",{className:"px-6 py-8 sm:px-8",children:(0,r.jsx)("h3",{className:"text-3xl leading-8 font-bold text-orange-500",children:"upcoming trips"})}),(0,r.jsx)("ul",{className:"divide-y divide-gray-200",children:0===m.length?(0,r.jsx)("div",{className:"px-6 py-8 sm:px-8 text-2xl",children:"no upcoming trips"}):m.map(e=>(0,r.jsx)("div",{className:"bg-green-50 p-6 rounded-lg shadow-md mb-4 mx-5",children:(0,r.jsx)("li",{className:"px-6 py-6 sm:px-8",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(x(),{href:"/trips/".concat(e.id),children:(0,r.jsx)("div",{className:"text-wrap text-2xl font-bold text-green-800 truncate hover:text-rose-300",children:(0,r.jsxs)(r.Fragment,{children:[e.title," - ",e.city," (",l(e.start_date)," -"," ",l(e.end_date),")"]})})}),(0,r.jsx)("div",{className:"mt-4 space-x-4",children:(0,r.jsx)("button",{onClick:()=>{p(e.id)},className:"outline outline-red-500 hover:bg-rose-100 text-red-500 font-bold py-2 px-4 rounded text-lg",children:"delete"})})]})})},e.id))}),(0,r.jsx)("div",{className:"px-6 py-8 sm:px-8",children:(0,r.jsx)("h3",{className:"text-3xl leading-8 font-bold text-orange-600",children:"past trips"})}),(0,r.jsx)("ul",{className:"divide-y divide-gray-200",children:0===f.length?(0,r.jsx)("div",{className:"px-6 py-8 sm:px-8 text-2xl",children:"no past trips"}):f.map(e=>(0,r.jsx)("div",{className:"bg-slate-100 p-6 rounded-lg shadow-md mb-4 mx-5",children:(0,r.jsx)("li",{className:"px-6 py-6 sm:px-8",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(x(),{href:"/trips/".concat(e.id),children:(0,r.jsx)("div",{className:"text-wrap text-2xl font-bold text-slate-800 truncate hover:text-slate-500",children:(0,r.jsxs)(r.Fragment,{children:[e.title," - ",e.city," (",l(e.start_date)," -"," ",l(e.end_date),")"]})})}),(0,r.jsx)("div",{className:"mt-4 space-x-4",children:(0,r.jsx)("button",{onClick:()=>{p(e.id)},className:"outline outline-red-500 hover:bg-rose-100 text-red-500 font-bold py-2 px-4 rounded text-lg",children:"delete"})})]})})},e.id))})]})}var f=n(7856),p=n(9198),j=n.n(p);n(3794);var v=n(8062);function g(e){let{id:t,label:n,selected:s,onChangeEvent:a}=e;return(0,r.jsxs)("div",{className:"field text-2xl",children:[(0,r.jsx)("label",{className:"label",children:n}),(0,r.jsx)("div",{className:"control",children:(0,r.jsx)(j(),{id:t,selected:s,onChange:a,dateFormat:"MM/dd/yyyy",className:"input"})})]})}function b(){let[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)({title:"",city:"",start_date:null,end_date:null}),l=(0,h.useRouter)(),o=(0,i.NL)(),u=async e=>{var t,n;return await (0,d.Er)({...e,start_date:null===(t=e.start_date)||void 0===t?void 0:t.toLocaleDateString("en-US"),end_date:null===(n=e.end_date)||void 0===n?void 0:n.toLocaleDateString("en-US")})},{mutate:x,isPending:m}=(0,c.D)({mutationFn:u,onSuccess:e=>{o.invalidateQueries({queryKey:["trips"]}),a({title:"",city:"",start_date:null,end_date:null}),t(!1),l.push("/trips/".concat(e.id))},throwOnError:!0}),p=(e,t)=>{a(n=>({...n,[e]:t}))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{className:"bg-emerald-800 hover:bg-rose-200 text-white font-bold py-3 px-6 rounded-lg text-xl self-end",onClick:()=>t(!0),children:"create a trip"}),e&&(0,r.jsx)("div",{className:"",children:(0,r.jsx)(f.Z,{showModal:e,setShowModal:t,title:"",children:(0,r.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),!n.title||!n.city||!n.start_date||!n.end_date){alert("Please fill in all fields.");return}x(n)},className:"space-y-6",children:[(0,r.jsx)(v.II,{id:"title",label:"Title",placeholder:"Trip Title",defaultValue:n.title,onChangeEvent:e=>p("title",e.target.value)}),(0,r.jsx)(v.II,{id:"city",label:"City",placeholder:"City",defaultValue:n.city,onChangeEvent:e=>p("city",e.target.value)}),(0,r.jsx)(g,{id:"start_date",label:"Start Date",selected:n.start_date,onChangeEvent:e=>p("start_date",e)}),(0,r.jsx)(g,{id:"end_date",label:"End Date",selected:n.end_date,onChangeEvent:e=>p("end_date",e)}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)("button",{type:"submit",className:"bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-xl",disabled:m,children:m?"Creating your trip...":"Submit"})})]})})})]})}function y(){return(0,r.jsx)("div",{className:"w-full flex flex-col min-h-screen items-center justify-between pt-40",children:(0,r.jsx)("div",{className:"max-w-8xl w-full px-4 sm:px-6 lg:px-8",children:(0,r.jsx)("div",{className:"py-6",children:(0,r.jsx)("div",{className:"flex flex-col md:flex-row gap-6",children:(0,r.jsxs)("div",{className:" md:flex-1 rounded-lg shadow-lg p-6 w-full",children:[(0,r.jsx)("h2",{className:"text-7xl font-bold mb-4 text-center text-orange-500",children:"trip list"}),(0,r.jsx)("div",{className:"flex-row mb-8 justify-items-end",children:(0,r.jsx)(b,{})}),(0,r.jsx)(m,{})]})})})})})}y.getLayout=function(e){return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{}),e]})}}},function(e){e.O(0,[814,393,888,774,179],function(){return e(e.s=528)}),_N_E=e.O()}]);