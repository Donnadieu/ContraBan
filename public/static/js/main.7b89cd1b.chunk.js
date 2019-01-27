(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,t,a){e.exports=a(334)},194:function(e,t,a){},201:function(e,t,a){},334:function(e,t,a){"use strict";a.r(t);var n=a(344),r=a(0),c=a.n(r),l=a(30),o=a.n(l),i=a(3),s=(a(194),a(196),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function u(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var m=a(171),d=a.n(m)()(),p=a(19),E=a(20),b=a(22),h=a(21),f=a(23),g=(a(201),a(343)),v=a(341),y=a(204),O=a(342),C=Object(O.a)(Object(i.b)(function(e){return{currentUser:e.currentUser}})(function(e){var t=e.component,a=e.rest,n=e.currentUser;return c.a.createElement(y.a,Object.assign({},a,{render:function(e){return n.is_authenticated?c.a.createElement(t,e):c.a.createElement(v.a,{to:{pathname:"/login",state:{from:e.location}}})}}))})),_=a(4),N=a(47),U=a.n(N),w=a(86),j=a.n(w);a(335);j.a.initializeApp({apiKey:"AIzaSyAJET3MCEXa6uOodPctCRa7fE6b3OJm3Tw",authDomain:"contraban-228c2.firebaseapp.com",databaseURL:"https://contraban-228c2.firebaseio.com",projectId:"contraban-228c2",storageBucket:"contraban-228c2.appspot.com",messagingSenderId:"888173034506"});j.a.storage();var T=function(e){return function(t){return t({type:"LOGGIN_ATTEMPT"}),U()("/api/auth/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{email:e.email,password:e.password}})}).then(function(e){return 200!==e.status?e.json().then(function(e){t({type:"UNSUCCESSFUL_USER_LOGIN",payload:e})}):e.json().then(function(e){var a=Object.assign({},e,{is_authenticated:!0}),n="Succesfully Logged in as ".concat(e.email);t({type:"SUCCESSFUL_USER_LOGIN",payload:{currentUser:a,message:n}})})})}},S=function(e){return function(t){return t({type:"LOGGING_USER_OUT"}),U()("/api/auth/logout",{method:"delete",headers:{"Content-Type":"application/json","X-User-Email":e.email,"X-User-Token":e.authentication_token},body:JSON.stringify({user:{email:e.email}})}).then(t({type:"USER_LOGOUT",payload:{message:"Succesfully logged out"}}))}},R=function(e){return function(t){return t({type:"SIGNUP_ATTEMPT"}),U()("/api/auth/users",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{email:e.email,password:e.password}})}).then(function(e){201!==e.status?e.json().then(function(e){t({type:"UNSUCCESSFUL_USER_SIGNUP",payload:e})}):e.json().then(function(e){var a=Object.assign({},e,{is_authenticated:!0}),n="Succesfully Created an account as ".concat(e.email);t({type:"SUCCESSFUL_USER_SIGNUP",payload:{currentUser:a,message:n}})}),d.push("/dashboard")})}},k=function(){return function(e){return e({type:"LOADING_CONTRACTS"}),U()("/api/auth/contracts",{}).then(function(t){200===t.status?t.json().then(function(t){var a=t.slice(0);e({type:"FETCH_CONTRACTS",allContracts:a})}):t.json().then(function(t){e({type:"FETCH_CONTRACTS",message:t})})})}},A=function(e,t,a,n){return function(a){return a({type:"TRANSFERING_CONTRACT"}),U()("/api/auth/contracts/".concat(n.blockchain_id),{method:"PATCH",headers:{"Content-Type":"application/json","X-User-Email":t.email,"X-User-Token":t.authentication_token},body:JSON.stringify({owner:{email:t.email},new_owner:{email:e.email},contract:{price:e.price}})}).then(function(e){200===e.status?e.json().then(function(e){a({type:"TRANSFER_CONTRACT",payload:{currentUser:e}})}):e.json().then(function(e){a({type:"TRANSFER_CONTRACT",payload:{message:e}})}),d.push("/dashboard")})}},L=function(){return function(e){return e({type:"LOADING_CONTRACTS"}),e({type:"TOGGLE_CONTRACTS"})}},G=function(e){return function(t){return t({type:"ADDING_URL"}),j.a.storage().ref("images").child(e.blockchain_id).getDownloadURL().then(function(a){console.log(a),t({type:"ADD_URL_TO_CONTRACT",payload:{contract:e,url:a}}),d.push("/contracts/".concat(e.blockchain_id))})}},I=a(255),x=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.addUrlToContract(a.props.contract)},a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contract;return c.a.createElement("p",null,t.product_name," ",c.a.createElement("button",{onClick:function(){return e.handleClick(t.blockchain_id)}},"Show"))}}]),t}(r.Component),D=Object(O.a)(Object(i.b)(null,function(e){return Object(_.bindActionCreators)({addUrlToContract:G},e)})(x)),P=Object(O.a)(Object(i.b)(function(e,t){return"/dashboard"===t.location.pathname?{currentUser:e.currentUser,contracts:e.currentUser.current_contracts}:{currentUser:e.currentUser,contracts:e.allContracts}},function(e){return Object(_.bindActionCreators)({fetchContracts:k},e)})(function(e){var t=e.contracts,a=e.currentUser,n=e.history,r=e.location,l=t.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(D,{contract:e,history:n,currentUser:a}))});return c.a.createElement("div",null,"/dashboard"===r.pathname&&c.a.createElement("h1",null,"Your Contracts"),c.a.createElement("ul",null,l))})),F=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){return a.props.history.push(e.target.attributes.href.value)},a.renderContracts=function(){a.props.toggleContracts()},a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchContracts()}},{key:"render",value:function(){var e=this,t=this.props,a=t.currentUser,n=t.isHidden;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-offset col-md-12 col-lg-offset-3 col-lg-6"},c.a.createElement("div",{className:"well profile"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"col-lg-12",align:"left"},c.a.createElement("h1",{align:"center"},"Welcome ",a.email)),c.a.createElement("div",{className:"col-xs-12 divider text-center"},c.a.createElement("div",{className:"col-xs-12 emphasis"},c.a.createElement("h2",null,c.a.createElement("strong",null,a.current_contracts.length)),c.a.createElement("p",null,"Number of Contracts"),c.a.createElement("div",{className:"dropdown"},c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.renderContracts()}},c.a.createElement("span",{className:"\tglyphicon glyphicon-off"})," My Contracts "),c.a.createElement("button",{type:"button",className:"btn btn-danger dropdown-toggle","data-toggle":"dropdown"},c.a.createElement("span",{className:"sr-only"},"Toggle Dropdown")),c.a.createElement("div",{className:"dropdown-menu"},c.a.createElement(I.a,{className:"dropdown-item",to:"/contracts/new"},"New Contract"))))))),!1===n&&c.a.createElement(P,null))))}}]),t}(r.Component),H=Object(O.a)(Object(i.b)(function(e){return{currentUser:e.currentUser,isHidden:!e.currentUser.isHidden}},function(e){return Object(_.bindActionCreators)({fetchContracts:k,toggleContracts:L},e)})(F)),M=a(338),J=a(337),q=a(339),W=function(e){var t=e.input,a=e.label,n=e.type,r=e.meta,l=r.touched,o=r.error,i=r.warning;return c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("strong",null,a)),c.a.createElement("input",Object.assign({},t,{placeholder:a,type:n,className:"form-control input-md"})),l&&(o&&c.a.createElement(q.a,{bsStyle:"danger"},c.a.createElement("strong",null,o))||i&&c.a.createElement("span",null,i)))},X=Object(O.a)(Object(i.b)()(Object(J.a)({form:"LoginUser",loginUser:T,validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<7&&(t.password="Must be greater than 7"):t.password="Required",t}})(function(e){e.values;var t=e.handleSubmit,a=e.dispatch;e.location;return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"container-login"},c.a.createElement("div",{className:"stencil"},c.a.createElement("div",{className:"line"},c.a.createElement("div",{className:"line"}))),c.a.createElement("div",{className:"border-triangle"}),c.a.createElement("div",{className:"content-triangle"}),c.a.createElement("div",{className:"enter-triangle-one"}),c.a.createElement("div",{className:"enter-triangle-two"}),c.a.createElement("form",{onSubmit:t(function(e){a(T(e))})},c.a.createElement("div",null,c.a.createElement("label",null,"LOGIN")),c.a.createElement("div",{className:"input-inform"},c.a.createElement(M.a,{name:"email",component:W,type:"text",placeholder:"Email",label:"Email"}),c.a.createElement(M.a,{name:"password",component:W,type:"password",placeholder:"Password",label:"Password"})),c.a.createElement("div",{className:"enter"},c.a.createElement("button",{type:"submit",label:"submit",className:"btn-lg btn-info"},"Login")),c.a.createElement("div",{className:"form-links"},c.a.createElement("span",{className:"glyphicon glyphicon-user text-primary"})," ",c.a.createElement(I.a,{to:"/signup",className:"btn-lg btn btn-light"},"Signup")))))}))),B=function(e){var t=e.input,a=e.label,n=e.type,r=e.meta,l=r.touched,o=r.error,i=r.warning;return c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("strong",null,a)),c.a.createElement("input",Object.assign({},t,{placeholder:a,type:n,className:"form-control input-md"})),l&&(o&&c.a.createElement(q.a,{bsStyle:"danger"},c.a.createElement("strong",null,"Required"))||i&&c.a.createElement("span",null,o)))},Z=Object(O.a)(Object(i.b)()(Object(J.a)({form:"SignupUser",signupUser:R,validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<7&&(t.password="Must be greater than 7"):t.password="Required",t}})(function(e){e.values;var t=e.handleSubmit,a=e.dispatch;e.location;return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"container-login"},c.a.createElement("div",{className:"stencil"},c.a.createElement("div",{className:"line"},c.a.createElement("div",{className:"line"}))),c.a.createElement("div",{className:"border-triangle"}),c.a.createElement("div",{className:"content-triangle"}),c.a.createElement("div",{className:"enter-triangle-one"}),c.a.createElement("div",{className:"enter-triangle-two"}),c.a.createElement("form",{onSubmit:t(function(e){a(R(e))})},c.a.createElement("div",null,c.a.createElement("label",null,"SIGNUP")),c.a.createElement("div",{className:"input-inform"},c.a.createElement(M.a,{name:"email",component:B,type:"text",placeholder:"Email",label:"Email"}),c.a.createElement(M.a,{name:"password",component:B,type:"password",placeholder:"Password",label:"Password"})),c.a.createElement("div",{className:"enter"},c.a.createElement("button",{type:"submit",label:"submit",className:"btn-lg btn-info"},"Sigup")),c.a.createElement("div",{className:"form-links"},c.a.createElement("span",{className:"glyphicon glyphicon-user text-primary"})," ",c.a.createElement(I.a,{className:"btn-lg btn btn-light",to:"/login"},"Login")))))}))),z=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.location;return"/login"===e.pathname?c.a.createElement(X,null):"/signup"===e.pathname?c.a.createElement(Z,null):void 0}}]),t}(r.Component),$=Object(O.a)(Object(i.b)()(z)),K=a(70),Q=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).onChange=a.onChange.bind(Object(K.a)(Object(K.a)(a))),a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"onChange",value:function(e){var t=this.props.input.onChange;t(e.target.files[0])}},{key:"render",value:function(){return c.a.createElement("input",{type:"file",onChange:this.onChange})}}]),t}(r.Component),Y=function(e){var t=e.input,a=e.label,n=e.type,r=e.meta,l=r.touched,o=r.error,i=r.warning;return c.a.createElement("div",null,c.a.createElement("strong",null,c.a.createElement("label",null,a)),c.a.createElement("div",null,c.a.createElement("input",Object.assign({},t,{placeholder:a,type:n})),l&&(o&&c.a.createElement("span",null,o)||i&&c.a.createElement("span",null,i))))},V=function(e){var t=e.input,a=e.label,n=e.type,r=e.meta,l=r.touched,o=r.error,i=r.warning;return c.a.createElement("div",null,c.a.createElement("strong",null,c.a.createElement("label",null,a)),c.a.createElement("div",null,c.a.createElement("textarea",Object.assign({},t,{placeholder:a,type:n})),l&&(o&&c.a.createElement("span",null,c.a.createElement("strong",null,o))||i&&c.a.createElement("span",null,i))))},ee=Object(O.a)(Object(i.b)(function(e){return{currentUser:e.currentUser}})(Object(J.a)({form:"ContractNew",validate:function(e){var t={};return e.name||(t.name="Required"),e.details||(t.details="Required"),t}})(function(e){e.values,e.dispatch;var t=e.handleSubmit,a=e.currentUser;return c.a.createElement("div",{className:"center-container"},c.a.createElement("div",{className:"main"},c.a.createElement("h1",{className:"w3layouts_head"},"Create a New Contract"),c.a.createElement("div",{className:"w3layouts_main_grid"},c.a.createElement("form",{onSubmit:t(function(e,t){t(function(e,t){return function(a){var n=new FormData;return n.append("product_name",e.name),n.append("product_info",e.details),n.append("price",e.price),a({type:"CREATING_CONTRACT"}),U()("/api/auth/contracts",{method:"post",headers:{"X-User-Email":t.email,"X-User-Token":t.authentication_token},body:n}).then(function(n){201===n.status?n.json().then(function(n){j.a.storage().ref("images/".concat(n.blockchain_id)).put(e.image).then(function(){a({type:"CREATE_CONTRACT",payload:{contract:n,currentUser:t}}),d.push("/contracts/".concat(n.blockchain_id))})}):n.json().then(function(e){a({type:"CREATE_CONTRACT",payload:{message:e}})})})}}(e,a))}),className:"w3_form_post"},c.a.createElement("div",{className:"w3_agileits_main_grid w3l_main_grid"},c.a.createElement("span",{className:"agileits_grid"},c.a.createElement(M.a,{name:"name",component:Y,type:"text",placeholder:"Name",label:"Name"}))),c.a.createElement("div",{className:"w3_agileits_main_grid w3l_main_grid"},c.a.createElement("span",{className:"agileits_grid"},c.a.createElement(M.a,{name:"details",component:V,type:"text",placeholder:"Details",label:"Details"}))),c.a.createElement("div",{className:"w3_agileits_main_grid w3l_main_grid"},c.a.createElement("span",{className:"agileits_grid"},c.a.createElement("label",null,c.a.createElement("strong",null,"Image")),c.a.createElement(M.a,{type:"file",name:"image",component:Q}))),c.a.createElement("div",{className:"w3_agileits_main_grid w3l_main_grid"},c.a.createElement("span",{className:"agileits_grid"},c.a.createElement("label",null,c.a.createElement("strong",null,"Price")),c.a.createElement(M.a,{name:"price",component:Y,type:"number",placeholder:"Price",normalize:function(e){if(null===e||""===e||void 0===e)return"";var t=e.toString().replace(/[^\d.]/g,"");return t=t.slice(0,t.indexOf(".")>=0?t.indexOf(".")+3:void 0),parseFloat(t)}}))),c.a.createElement("div",{className:"w3_main_grid"},c.a.createElement("div",{className:"w3_main_grid_right"},c.a.createElement("input",{type:"submit",value:"Submit"})))))))}))),te=a(179),ae=a.n(te),ne=Object(O.a)(Object(i.b)(function(e,t){var a=e.allContracts.find(function(e){return e.blockchain_id===t.match.params.contractId});return a?{contract:a}:{contract:{}}})(function(e){var t=e.contract;e.self;return c.a.createElement("div",{align:"center"},c.a.createElement("h2",null,"Click on Code to Download"),c.a.createElement("br",null),c.a.createElement(ae.a,{size:200,onClick:function(e){return function(e){var a=e.currentTarget,n=document.createElement("a");n.download="".concat(t.blockchain_id),n.href=a.toDataURL("image/png;base64"),n.click()}(e)},value:window.location.href.split("/")[0]+"//"+window.location.href.split("/")[2]+"/contracts/"+t.blockchain_id}))})),re=a(96),ce=Object(O.a)(Object(i.b)(function(e){return{currentUser:e.currentUser}})(Object(J.a)({form:"TransferContract",transferContract:A})(function(e){e.values,e.dispatch;var t=e.handleSubmit,a=e.currentUser,n=e.contract;return c.a.createElement("div",null,c.a.createElement("h2",null,"Transfer"),c.a.createElement("form",{onSubmit:t(function(e,t){t(A(e,a,0,n))})},c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("strong",null,"Email")),c.a.createElement("br",null),c.a.createElement(M.a,{name:"email",component:"input",type:"text",placeholder:"Email"})),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("strong",null,"Transfer Price")),c.a.createElement("br",null),c.a.createElement(M.a,{name:"price",component:"input",type:"number",placeholder:"Price",normalize:function(e){if(null===e||""===e||void 0===e)return"";var t=e.toString().replace(/[^\d.]/g,"");return t=t.slice(0,t.indexOf(".")>=0?t.indexOf(".")+3:void 0),parseFloat(t)}})),c.a.createElement("br",null),c.a.createElement("button",{type:"submit",label:"submit"},"Transfer Ownership")))}))),le=a(180),oe=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={copied:!1},a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.contract,n=t.ownContract,r=[];if(void 0!==a.histories){r=a.histories.map(function(e){return Object.assign({},e)});for(var l=0;l<r.length;l++)r[l].id=l+1}return c.a.createElement("div",{align:"center"},c.a.createElement("h1",null,"Contract ID: ",a.blockchain_id),c.a.createElement("img",{src:a.url,alt:"logo",height:"250",width:"250"}),n&&c.a.createElement(ce,{contract:a}),c.a.createElement("h2",null,"Contract information"),c.a.createElement("p",null,c.a.createElement("strong",null,"Price:")," ",a.price),c.a.createElement("p",null,c.a.createElement("strong",null,"Product name: "),a.product_name),c.a.createElement("p",null,c.a.createElement("strong",null,"Product details: ")),c.a.createElement("p",null,a.product_info),c.a.createElement(le.CopyToClipboard,{text:window.location.href.split("/")[0]+"//"+window.location.href.split("/")[2]+"/contracts/"+window.location.href.split("/")[window.location.href.split("/").length-1],onCopy:function(){return e.setState({copied:!0})}},c.a.createElement("button",null,"Copy Link to Clipboard")),this.state.copied?c.a.createElement("div",null,c.a.createElement("span",{style:{color:"red"}},"Copied.")):null,c.a.createElement("button",{onClick:function(){return window.open("/contracts/".concat(a.blockchain_id,"/code"),"_blank")}},"Generate QR Code"),n&&c.a.createElement("div",null,c.a.createElement("h3",null,"History"),r!==[]?c.a.createElement("h4",null,"No Transfers Have Been Made"):c.a.createElement(re.BootstrapTable,{data:r},c.a.createElement(re.TableHeaderColumn,{isKey:!0,dataField:"id"},"Transfer ID"),c.a.createElement(re.TableHeaderColumn,{dataField:"transfer_price",dataFormat:function(e,t){return"$".concat(e)}},"Transfer Price"))))}}]),t}(r.Component),ie=Object(O.a)(Object(i.b)(function(e,t){var a=t.location.pathname.split("/")[t.location.pathname.split("/").length-1],n=e.currentUser.current_contracts.find(function(e){return e.blockchain_id===a});return n?{contract:n,currentUser:e.currentUser,ownContract:!0}:{contract:e.allContracts.find(function(e){return e.blockchain_id===a}),currentUser:e.currentUser,ownContract:!1}})(oe)),se=Object(O.a)(Object(i.b)()(function(e){var t=e.currentUser;e.location,e.match;return function(e){return e.is_authenticated?c.a.createElement(g.a,null,c.a.createElement(v.a,{from:"/",exact:!0,to:"/dashboard"}),c.a.createElement(v.a,{from:"/login",to:"/dashboard"}),c.a.createElement(v.a,{from:"/signup",to:"/dashboard"}),c.a.createElement(C,{exact:!0,path:"/dashboard",component:H}),c.a.createElement(C,{exact:!0,path:"/contracts/new",component:ee}),c.a.createElement(y.a,{exact:!0,path:"/contracts",component:P}),c.a.createElement(y.a,{exact:!0,path:"/contracts/:contractId",component:ie}),c.a.createElement(y.a,{exact:!0,path:"/contracts/:contractId/code",component:ne})):c.a.createElement(g.a,null,c.a.createElement(v.a,{from:"/",exact:!0,to:"/login"}),c.a.createElement(v.a,{from:"/dashboard",exact:!0,to:"/login"}),c.a.createElement(y.a,{exact:!0,path:"/login",component:$}),c.a.createElement(y.a,{exact:!0,path:"/signup",component:$}))}(t)})),ue=a(336),me=Object(O.a)(Object(i.b)(null,function(e){return Object(_.bindActionCreators)({logoutUser:S},e)})(function(e){var t=e.currentUser,a=e.logoutUser,n=function(){return a(t)};return function(e){return e.is_authenticated?c.a.createElement("nav",{className:"navbar navbar-default"},c.a.createElement("div",{id:"navbarCollapse",className:"collapse navbar-collapse"},c.a.createElement("ul",{className:"nav navbar-nav"},c.a.createElement("li",null,c.a.createElement(ue.a,{to:"/dashboard"},"DASHBOARD")),c.a.createElement("li",null,c.a.createElement(ue.a,{to:"/contracts"},"CONTRACTS")),c.a.createElement("li",null,c.a.createElement(ue.a,{to:"/login",onClick:n},"LOG OUT"))))):c.a.createElement("nav",{className:"navbar navbar-default"})}(t)})),de=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(me,{currentUser:this.props.currentUser}),c.a.createElement(se,{currentUser:this.props.currentUser}))}}]),t}(r.Component),pe=Object(O.a)(Object(i.b)(function(e){return{currentUser:e.currentUser}})(de)),Ee=a(181),be=a(46),he=a(340),fe=a(125),ge=a(182),ve=a.n(ge),ye=a(183),Oe={key:"root",storage:ve.a,blacklist:["form"]},Ce=Object(_.combineReducers)({allContracts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CONTRACTS":return t.allContracts;case"USER_LOGOUT":return[];case"CREATE_CONTRACT":var a=t.payload.contract;return void 0!==a?(a.url=t.payload.url,Object(be.a)(e).concat([a])):e;case"ADD_URL_TO_CONTRACT":var n=Object(be.a)(e).filter(function(e){return e.blockchain_id!==t.payload.contract.blockchain_id}),r=Object(be.a)(e).find(function(e){return t.payload.contract.blockchain_id===e.blockchain_id});return r.url=t.payload.url,Object(be.a)(n).concat([r]);default:return e}},currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{is_authenticated:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESSFUL_USER_LOGIN":return!0===t.payload.currentUser.is_authenticated?Object.assign({},t.payload.currentUser):e;case"USER_LOGOUT":return Object.assign({},{is_authenticated:!1});case"SUCCESSFUL_USER_SIGNUP":return!0===t.payload.currentUser.is_authenticated?Object.assign({},t.payload.currentUser):Object.assign({},e,t.payload);case"CREATE_CONTRACT":var a=t.payload.contract;if(void 0!==a){var n=Object.assign({},t.payload.currentUser,{message:"Succesfully created a contract"});return n.current_contracts.push(a),n}return Object.assign({},e,t.payload);case"TRANSFER_CONTRACT":return void 0===t.payload.currentUser?Object.assign({},e,t.payload):Object.assign({},e,t.payload.currentUser,{message:"Succesfully transfered ownership"});case"TOGGLE_CONTRACTS":return Object.assign({},e,{isHidden:!e.isHidden});case"ADD_URL_TO_CONTRACT":var r=Object(be.a)(e.current_contracts).find(function(e){return t.payload.contract.blockchain_id===e.blockchain_id});return r?(r.url=t.payload.url,Object.assign({},e,t.payload.currentUser)):e;default:return e}},form:he.a,contractNew:he.a,message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESSFUL_USER_LOGIN":return t.payload.message;case"UNSUCCESSFUL_USER_LOGIN":return t.payload.message?t.payload.message:t.payload.error;case"USER_LOGOUT":return t.payload.message;case"UNSUCCESSFUL_USER_SIGNUP":return t.payload.message?t.payload.message:t.payload.error;case"SUCCESSFUL_USER_SIGNUP":return t.payload.message;default:return e}}}),_e=Object(fe.a)(Oe,Ce),Ne=[Ee.a],Ue=Object(_.createStore)(_e,Object(ye.composeWithDevTools)(_.applyMiddleware.apply(void 0,Ne))),we=Object(fe.b)(Ue),je=a(184);o.a.render(c.a.createElement(i.a,{store:Ue},c.a.createElement(je.PersistGate,{persistor:we},c.a.createElement(n.a,{history:d},c.a.createElement(pe,null)))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");s?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):u(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):u(e)})}}()}},[[186,2,1]]]);
//# sourceMappingURL=main.7b89cd1b.chunk.js.map