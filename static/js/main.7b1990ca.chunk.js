(this.webpackJsonpmisso=this.webpackJsonpmisso||[]).push([[0],{65:function(n,t,e){"use strict";e.r(t);var c,o,a,i,r,s,l,d=e(0),u=e.n(d),b=e(32),p=e.n(b),h=e(13),j=e(2),x=e(8),f=e(9),g=e(15),m=e.n(g),O=e(18),v=e(21),w=e(33),y=e.n(w),k=e(1),S=f.a.div(c||(c=Object(x.a)(["\n  width: 250px;\n  height: 70px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.3);\n"]))),N=function(){var n=Object(d.useState)(!1),t=Object(v.a)(n,2),e=(t[0],t[1]),c=Object(d.useState)(null),o=Object(v.a)(c,2),a=(o[0],o[1]),i=Object(j.f)(),r=function(){var n=Object(O.a)(m.a.mark((function n(){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.get("http://18.135.104.137:5000/api/v1/auth/user",{withCredentials:!0}).catch((function(n){console.log("Not properly authenticated"),e(!1),a(null)}));case 2:(t=n.sent)&&t.data&&(console.log("User: ",t.data),e(!0),a(t.data),i.push("https://darivo84.github.io/missowebapp/#/welcome"));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=Object(O.a)(m.a.mark((function n(){var t,e;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=null,"http://18.135.104.137:5000/api/v1/login/google",(e=window.open("http://18.135.104.137:5000/api/v1/login/google","_blank","width=500,height=600"))&&(t=setInterval((function(){e.closed&&(console.log("Yay!!! We are authenticated!"),r(),t&&clearInterval(t))}),500));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(k.jsx)(h.b,{onClick:s,style:{color:"white",fontSize:"18px",fontFamily:"Nunito",fontWeight:"bold",textDecoration:"none",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"},children:Object(k.jsx)(S,{children:"Login"})})},I=f.a.div(o||(o=Object(x.a)(["\n  width: 100%;\n  height: 100vh;\n  background: #cbcbcb;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),W=f.a.h1(a||(a=Object(x.a)(["\n  color: #5c5858;\n  font-family: 'Nunito';\n  padding-bottom: 15px;\n"]))),z=f.a.div(i||(i=Object(x.a)(["\n  width: 50vw;\n  height: 60vh;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]))),C=f.a.p(r||(r=Object(x.a)(["\n  color: #5c5858;\n  font-size: 18px;\n  font-family: 'Nunito';\n  text-align: center;\n  padding-bottom: 15px;\n"]))),J=function(){return Object(k.jsxs)(I,{children:[Object(k.jsx)(W,{children:"Welcome to MISSO"}),Object(k.jsxs)(z,{children:[Object(k.jsx)(C,{children:" Please login to access our site"}),Object(k.jsx)(N,{})]})]})},M=f.a.div(s||(s=Object(x.a)(["\n  width: 100%;\n  height: 100vh;\n  background: #cbcbcb;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),B=f.a.h1(l||(l=Object(x.a)(["\n  color: #5c5858;\n  font-family: 'Nunito';\n  padding-bottom: 15px;\n"]))),D=function(){return Object(k.jsx)(M,{children:Object(k.jsx)(B,{children:"Welcome and thanks for logging in."})})};var E=function(){return Object(k.jsxs)(j.c,{children:[Object(k.jsx)(j.a,{exact:!0,path:"/",component:J}),Object(k.jsx)(j.a,{path:"/welcome",component:D})]})};p.a.render(Object(k.jsx)(u.a.StrictMode,{children:Object(k.jsx)(h.a,{basename:"/missowebapp",children:Object(k.jsx)(E,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.7b1990ca.chunk.js.map