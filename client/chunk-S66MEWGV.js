import{c as v}from"./chunk-4YEVYHIS.js";import{a as C}from"./chunk-7RNCC635.js";import{f as a,g as r,i as l}from"./chunk-ZE63RY23.js";import{Pa as u,Q as d,R as g,ha as n,ia as t,ja as f,lb as h,wa as o}from"./chunk-TXYH6DN2.js";var m=class c{constructor(e){this.authState=e}profile$;selectedLanguage=r.Res.languages.find(e=>e.name===l.language).display;otherLanguage=r.Res.languages.find(e=>e.name!==l.language);ngOnInit(){}changeLanguage(){let e=this.otherLanguage.name;return a.production&&!a.vercel?`/switchlang?lang=${e}&red=${this.authState.redirectUrl}`:(_attn(e,"Language change is disabled in development mode"),"")}switchLanguage(){let e=this.otherLanguage.name;a.vercel&&(this.setCookie(e,r.Res.cookieName,365),window.location.reload())}setCookie(e,i,p){let s=encodeURIComponent(i)+"="+encodeURIComponent(e)+";",P=new Date(new Date().getTime()+p*1e3*60*60*24);s+="expires="+P.toUTCString()+";",s+="path=/;",document.cookie=s}static \u0275fac=function(i){return new(i||c)(d(v))};static \u0275cmp=g({type:c,selectors:[["cl-profile-details"]],decls:15,vars:0,consts:[[1,"page"],[1,"container"],[1,"row-spaced","spaced"],[1,"col","c-3"],[1,"col","c-9"],[1,"f5","weight-normal"],[1,"spaced","light","small"],[1,"spaced"]],template:function(i,p){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),o(4," image "),t(),n(5,"div",4)(6,"h5",5),o(7," Abdelkareem Abdeljabbar "),t(),n(8,"div",6),o(9,"email@address.com | +0393999488383"),t(),n(10,"div",7),o(11," Project manager in section A Project manager in section AProject manager in section A "),t(),n(12,"strong"),o(13,"Administrator"),t()()(),f(14,"cl-post-list"),t()())},dependencies:[u,h,C],encapsulation:2,changeDetection:0})};var j=[{path:":id",component:m}];export{j as ProfileRoutes};
