(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b861f16"],{"3d6a":function(e,t,r){},"598b":function(e,t,r){"use strict";var s=r("3d6a"),n=r.n(s);n.a},a55b:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"d-flex justify-content-center align-items-center",attrs:{fluid:"",id:"loginMain"}},[r("b-row",{staticClass:"d-flex justify-content-around align-items-center"},[r("h1",[e._v("Noteify")]),r("b-form",{staticClass:"d-flex flex-column justify-content-center align-items-center",on:{submit:function(t){return t.preventDefault(),e.noteifyFirebaseAuth()}}},[r("div",{staticClass:"form-input-wrapper d-flex flex-column justify-content-center align-items-center"},[r("label",{attrs:{for:"emailInput"}},[e._v("E-mail")]),r("b-form-input",{attrs:{id:"emailInput",placeholder:"Enter your e-mail...",required:!0},model:{value:e.userCreds.email,callback:function(t){e.$set(e.userCreds,"email",t)},expression:"userCreds.email"}})],1),r("div",{staticClass:"form-input-wrapper d-flex flex-column justify-content-center align-items-center"},[r("label",{attrs:{for:"passwordInput"}},[e._v("Password")]),r("b-form-input",{attrs:{id:"passwordInput",placeholder:"Enter your password...",type:"password",required:!0},model:{value:e.userCreds.password,callback:function(t){e.$set(e.userCreds,"password",t)},expression:"userCreds.password"}})],1),0!=e.error.length?r("div",{staticClass:"login-error"},[r("p",{attrs:{id:"loginErrorMessage"}},[e._v(e._s(e.error))])]):e._e(),r("button",{staticClass:"d-flex justify-content-center align-items-center",attrs:{id:"loginButton"}},[e._v(" Login "),r("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"}})])])])],1)],1)},n=[],a=(r("96cf"),r("1da1")),i=r("5530"),o=r("8aa5"),l=r.n(o),u=(r("ea7b"),r("2f62")),c={data:function(){return{userCreds:{email:"",password:""},error:""}},methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])({setUser:"userFirebaseAuth/setUser"})),{},{noteifyFirebaseAuth:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.userCreds.email,r=this.userCreds.password,e.next=4,l.a.auth().signInWithEmailAndPassword(t,r).then((function(e){s.error="";var t={email:e.email,uID:e.uid,token:e.xa};s.setUser(t),localStorage.setItem("firebaseToken",t.token)})).catch((function(e){console.log(e),s.error=e.message,s.setUser({email:null,uID:null,token:null})}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})},d=c,f=(r("598b"),r("2877")),p=Object(f["a"])(d,s,n,!1,null,"29c89f2b",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-4b861f16.cb942a20.js.map