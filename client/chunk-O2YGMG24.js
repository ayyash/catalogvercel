var c={production:!0,vercel:!0,apiRoot:"https://api.website.com",localConfig:"localdata/config.prod.json"};var u={isServed:!1,Basic:{defaultRoute:"/",defaultSize:25,defaultDateFormt:"DD-MM-YYYY",defaultUploadSize:1048576,defaultUploadFormat:["gif","jpg","jpeg","png"],defaultToastTimeout:5e3,lockTimeout:100},Res:{languages:[{name:"en",display:"English"},{name:"ar",display:"\u0639\u0631\u0628\u064A"}],defaultLanguage:"en",cookieName:"ct-lang"},Auth:{userAccessKey:"catalog.user",redirectKey:"redirectUrl",loginRoute:"/login"},Cache:{Timeout:1,Key:"catalog.cache",ResetKey:"catalog.20250101"},API:{rootPath:"__root__",rootSpace:"management",apiRoot:c.apiRoot,apiVersion:1,data:{notdefined:"/data/notdefined"},auth:{login:"/user/login",sendCode:"/user/login"},profile:{details:"/user/profile"},config:{local:c.localConfig},space:{list:"/managed/query",details:"/managed/entry/space/Ayyash/__root__/Ayyash",create:"/managed/space"},resource:{query:"/managed/query",details:"/managed/entry/:resource/:space/:subpath?:options",create:"/managed/request",save:"/managed/request",delete:"/managed/request"},post:{list:"/posts/?:options",details:"/posts/:id",create:"/posts",save:"/posts/:id",delete:"/posts/:id"},comment:{list:"/posts/:id/comments",replies:"/posts/:id/comments/:cid/replies",create:"/posts/:id/comments",reply:"/posts/:id/comments/:cid/replies",delete:"/comments/:id",vote:"/posts/:id/votes"},vote:{change:"/posts/:id/votes"}}};var l=typeof globalThis<"u"&&globalThis||typeof globalThis<"u"&&globalThis||typeof window<"u"&&window,v=(e,t=!1)=>{let r=new URLSearchParams;return Object.keys(e).forEach(s=>{let n=e[s];if(n)if(n instanceof Array){if(n.length)if(t){let o=n.filter(a=>a&&a!=="").join(",");o&&r.append(s,o)}else n.filter(o=>o!=="").forEach(o=>r.append(s,o))}else r.append(s,n)}),r.toString()};var R=e=>e?isNaN(Date.parse(e))?null:new Date(e):null;var d=e=>{if(typeof e.source.flags=="string")return e.source.flags;{let t=[];return e.global&&t.push("g"),e.ignoreCase&&t.push("i"),e.multiline&&t.push("m"),e.sticky&&t.push("y"),e.unicode&&t.push("u"),t.join("")}},y=e=>{if(typeof e=="function")return e;let t=Array.isArray(e)?[]:{};for(let r in e){let s=e[r],n={}.toString.call(s).slice(8,-1);n=="Array"||n=="Object"?t[r]=y(s):n=="Date"?t[r]=new Date(s.getTime()):n=="RegExp"?t[r]=RegExp(s.source,d(s)):t[r]=s}return t};var p=class extends String{toString(){return l.cl?.resources.localeId||u.Res.defaultLanguage}};var f=class e{static get keys(){return l.cl?.resources.keys||{NoRes:""}}static get language(){return l.cl?.resources.language||u.Res.defaultLanguage}static Get(t,r){let s=e.keys;return s[t]?s[t]:r||s.NoRes}static Plural(t,r,s){let n=e.keys,o=n[t];if(!o)return s||n.NoRes;let a=Object.keys(o).sort((i,x)=>parseFloat(x)-parseFloat(i)),g=o[a[0]];for(let i=0;i<a.length;i++)if(r>=parseFloat(a[i])){g=o[a[i]];break}return g.replace("$0",r)}static Select(t,r,s){let n=e.keys;return n[t]&&n[t][r]||s||n.NoRes}};export{v as a,R as b,y as c,c as d,u as e,p as f,f as g};
