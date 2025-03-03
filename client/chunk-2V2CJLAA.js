import{a as J}from"./chunk-IZQKZLSH.js";import{a as oe}from"./chunk-MCQOT6U2.js";import{a as W,b as z,c as K,d as Q,e as X,f as Y,g as Z,h as ee,i as te,j as ie,k as re,l as ne}from"./chunk-2EMROIE4.js";import{c as m}from"./chunk-4YEVYHIS.js";import{g as p}from"./chunk-ZE63RY23.js";import{$ as b,A as R,Ba as u,D as L,Da as d,E as N,O as r,Pa as q,Q as f,R as G,Va as x,W as U,a as v,b as T,da as k,db as P,e as M,ha as n,i as l,ia as s,ja as j,lb as $,ma as V,na as E,oa as I,ra as B,s as D,w as _,wa as h,xa as S,ya as H,z as c}from"./chunk-TXYH6DN2.js";var ae=()=>{let i=R(m),e=R(P);return i.stateItem$.pipe(l(t=>(t&&e.navigateByUrl(i.redirectUrl||p.Basic.defaultRoute),!0)))};var w=i=>{let e=i.records?.length?i.records[0]:null;return v(v({},e),e?.attributes)};var g=class{static NewInstance(e){return{email:e.email,username:e.shortname,displayname:oe.MapLanguage(e.displayname),type:e.type,isEmailVerified:e.is_email_verified,isMobileVerified:e.is_msisdn_verified,mobile:e.msisdn,roles:e.roles,forcePasswordChange:e.force_password_change}}};var C=class{static NewInstance(e){let t=JSON.parse(atob(e.access_token.split(".")[1]));return t?{accessToken:e.access_token,expiresAt:t.expires*1e3,payload:g.NewInstance(e)}:null}static PrepAccessToken(e,t){return{shortname:e,password:t}}static PrepReset(e,t){return{Code:t,Password:e}}static PrepSave(e){return`newPassword=${e.newPassword}&oldPassword=${e.password}`}static PrepForgot(e){return`email=${e}`}};var y=class i{constructor(e,t){this._http=e;this.authState=t}_detailsUrl=p.API.profile.details;GetProfile(e){return this._http.get(this._detailsUrl).pipe(l(t=>{let a=g.NewInstance(w(t)),o=T(v({},e),{payload:a});return this.authState.SaveSession(o),o}))}static \u0275fac=function(t){return new(t||i)(c(x),c(m))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})};var A=class i{constructor(e,t,a){this.http=e;this.authState=t;this.profileService=a;_seqlog("authservices construct")}_loginUrl=p.API.auth.login;SendCode(e){return this.http.post(p.API.auth.sendCode,{username:e}).pipe(l(t=>({code:1244})))}Login(e,t){let a=C.PrepAccessToken(e,t);return this.http.post(this._loginUrl,a).pipe(l(o=>{let O=C.NewInstance(w(o));return this.authState.SaveSession(O)}),D(o=>this.profileService.GetProfile(o)))}Logout(){}static \u0275fac=function(t){return new(t||i)(c(x),c(m),c(y))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})};function ue(i,e){if(i&1){let t=V();n(0,"form",3),E("submit",function(){L(t);let o=I();return N(o.sendCode())}),n(1,"h2",4),h(2),u(3,"translate"),s(),n(4,"div",5)(5,"cr-input",6),u(6,"translate"),j(7,"input",7),s()(),n(8,"div")(9,"button",8),h(10),u(11,"translate"),s()()()}if(i&2){let t=I();b("formGroup",t.codeForm),r(2),S(d(3,5,"Login","Login")),r(3),B("placeholder",d(6,8,"Email or mobile number","EmailOrMobileNo")),r(2),b("required",!0),r(3),S(d(11,11,"Login","Login"))}}function de(i,e){if(i&1){let t=V();n(0,"form",3),E("submit",function(){L(t);let o=I();return N(o.login())}),n(1,"h2",4),h(2),u(3,"translate"),s(),n(4,"div",5)(5,"p"),h(6),s(),n(7,"cr-input",6),u(8,"translate"),j(9,"input",9),s()(),n(10,"div")(11,"button",8),h(12),u(13,"translate"),s()()()}if(i&2){let t=I();b("formGroup",t.loginForm),r(2),S(d(3,6,"Submit","Submit")),r(4),H(" We have sent you a code to ",t.codeForm.value.username,". Please enter the code below. "),r(),B("placeholder",d(8,9,"Insert code","InsertCode")),r(2),b("required",!0),r(3),S(d(13,12,"Submit","Submit"))}}var F=class i{constructor(e,t,a,o,O){this.toast=e;this.fb=t;this.router=a;this.authState=o;this.authService=O}loginForm;codeForm;_credentials=new M({username:"",code:""});stage="login";ngOnInit(){this.codeForm=this.fb.group({username:[]}),this.loginForm=this.fb.group({code:[]})}sendCode(){if(this.toast.Hide(),this.loginForm.valid){let e=this.loginForm.value;this.stage="code",this._credentials.next({username:e.username,code:"1234"})}else this.toast.ShowError("INVALID_FORM")}login(){if(this.toast.Hide(),this.loginForm.valid){let e=this.loginForm.value,t=this._credentials.getValue();if(e.code!==t.code){this.toast.ShowError("INVALID_CODE");return}this.router.navigateByUrl(this.authState.redirectUrl||p.Basic.defaultRoute)}else this.toast.ShowError("INVALID_FORM")}static \u0275fac=function(t){return new(t||i)(f(ie),f(ee),f(P),f(m),f(A))};static \u0275cmp=G({type:i,selectors:[["ng-component"]],decls:4,vars:1,consts:[[1,"center-content"],[1,"container","md-6"],["novalidate","",3,"formGroup"],["novalidate","",3,"submit","formGroup"],[1,"f5","doublespaced","weight-bold"],[1,"doublespaced"],[3,"placeholder"],["type","text","id","username","crinput","","formControlName","username","autocomplete","username",1,"w100",3,"required"],["type","submit",1,"btn-rev","btn-colored","w100","btn-large"],["type","text","id","code","crinput","","formControlName","code",1,"w100",3,"required"]],template:function(t,a){t&1&&(n(0,"div",0)(1,"div",1),U(2,ue,12,14,"form",2)(3,de,14,15,"form",2),s()()),t&2&&(r(2),k(a.stage==="login"?2:3))},dependencies:[q,$,J,te,Q,W,z,K,Z,X,Y,re,ne],encapsulation:2,changeDetection:0})};var ot=[{path:"",redirectTo:"/dashboard",pathMatch:"full"},{path:"login",component:F,resolve:{login:ae}}];export{ot as PublicRoutes};
