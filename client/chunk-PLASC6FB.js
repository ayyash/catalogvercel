import{a as d,d as A}from"./chunk-5AG4EMNI.js";import{e as s,g as b}from"./chunk-O2YGMG24.js";import{A as S,_a as C,a as g,e as m,g as l,i as h,ib as y,m as p,n as v,p as I,w as c,z as a}from"./chunk-FKNLQJGV.js";var F=()=>S(o).loadAppConfig(),o=class i{constructor(t,e){this.http=t;this.localConfig=e;_seqlog("ConfigService")}_getUrl=s.API.config.local;config=new m(s);config$=this.config.asObservable();static _config;static get Config(){return this._config||s}NewInstance(t,e){let r=g(g({},s),t);return r.Cache=g({},r.Cache),r.isServed=!0,r.withErrors=e,i._config=r,this.config.next(r),r}loadAppConfig(){return _seqlog("LoadAppConfig"),this.localConfig?(this.NewInstance(this.localConfig,!0),l(!0)):this.http.get(this._getUrl).pipe(h(t=>(this.NewInstance(t,!1),_seqlog("config next"),!0)),v(t=>(this.NewInstance(s,!0),_debug(t,"Error in resolve","e"),l(!0))))}static \u0275fac=function(e){return new(e||i)(a(C),a("localConfig",8))};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})};var u=class i{constructor(t){this.configService=t;this._setResetKey()}get ourStorage(){return localStorage}getKey(t,e=!1){return`${o.Config.Cache.Key}${e?"."+b.language:""}.${t}`}_setResetKey(){this.configService.config$.pipe(I(t=>t.isServed),d("config")).subscribe(t=>{let e=this.getKey(t.Cache.ResetKey),r=this.ourStorage.getItem(e);(!r||r!=="true")&&(this.clear(),this.ourStorage.setItem(e,"true"))})}setItem(t,e,r=o.Config.Cache.Timeout,f=!1){let n={value:e,timestamp:Date.now(),expiresin:r};this.ourStorage.setItem(this.getKey(t,f),JSON.stringify(n))}getItem(t,e=!1){let r=this.getKey(t,e),f=this.ourStorage.getItem(r);if(f){let n=JSON.parse(f);return Date.now()-n.timestamp>n.expiresin*36e5?(this.removeItem(r),null):n.value}return null}removeItem(t,e=!1){this.ourStorage.removeItem(this.getKey(t,e))}setCache(t,e,r=o.Config.Cache.Timeout){this.setItem(t,e,r,!0)}getCache(t){return this.getItem(t,!0)}removeCache(t){this.removeItem(t,!0)}clear(){let t=[];for(let e=0;e<this.ourStorage.length;e++){let r=this.ourStorage.key(e);r?.indexOf(o.Config.Cache.Key)===0&&t.push(r)}t.forEach(e=>this.ourStorage.removeItem(e))}static \u0275fac=function(e){return new(e||i)(a(o))};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})};var k=class i extends A{constructor(e,r,f){super();this.configService=e;this.localStorage=r;this.router=f;this.configService.config$.pipe(p(n=>n.isServed)).subscribe({next:()=>{let n=this._GetUser();this.CheckAuth(n)?this.SetState(n):this.Logout(!1)}})}get redirectUrl(){return this.localStorage.getItem(s.Auth.redirectKey)}set redirectUrl(e){this.localStorage.setItem(s.Auth.redirectKey,e)}_SaveUser(e){this.localStorage.setItem(o.Config.Auth.userAccessKey,e,e.expiresAt)}_RemoveUser(){this.localStorage.removeItem(o.Config.Auth.userAccessKey)}_GetUser(){let e=this.localStorage.getItem(o.Config.Auth.userAccessKey);return e&&e.accessToken?e:null}SaveSession(e){return e.accessToken?(this._SaveUser(e),this.SetState(e),e):(this._RemoveUser(),this.RemoveState(),null)}UpdateSession(e){let r=this._GetUser();r?(r.accessToken=e.accessToken,this._SaveUser(r),this.UpdateState(e)):(this._RemoveUser(),this.RemoveState())}CheckAuth(e){return!(!e||!e.accessToken||Date.now()>e.expiresAt)}Logout(e=!1){this.RemoveState(),this._RemoveUser(),e&&this.router.navigateByUrl(s.Auth.loginRoute)}GetToken(){let e=this.currentItem;return this.CheckAuth(e)?e.accessToken:null}static \u0275fac=function(r){return new(r||i)(a(o),a(u),a(y))};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})};export{F as a,o as b,k as c};
