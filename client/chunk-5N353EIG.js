import{a as h,b as y,c as E,d as b,e as x,f as F,g as I,h as P,i as D,j as M,k as A,l as N}from"./chunk-2EMROIE4.js";import{a as R}from"./chunk-7RNCC635.js";import"./chunk-ZE63RY23.js";import{$ as g,H as S,O as f,Pa as p,Q as v,R as a,eb as s,ha as e,ia as t,ja as m,lb as l,na as C,wa as o}from"./chunk-TXYH6DN2.js";var c=class r{constructor(n,i){this.fb=n;this.toast=i}onSave=new S;profileForm;ngOnInit(){this.profileForm=this.fb.group({display:[],bio:[]})}saveProfile(){if(this.toast.Hide(),this.profileForm.valid){let n=this.profileForm.value;this.onSave.emit(n)}else this.toast.ShowError("INVALID_FORM")}static \u0275fac=function(i){return new(i||r)(v(P),v(M))};static \u0275cmp=a({type:r,selectors:[["cl-account-profile"]],outputs:{onSave:"onSave"},decls:32,vars:2,consts:[[1,"page"],[1,"container"],[1,"f3","spaced"],["routerLink","/account/posts"],[1,"row-spaced"],[1,"col","c-3"],[1,"col","c-9"],["novalidate","",3,"ngSubmit","formGroup"],[1,"spaced"],["placeholder","Display name"],["type","text","id","display","crinput","","formControlName","display",1,"cr-input","w100",3,"required"],["placeholder","Bio"],["id","bio","formControlName","bio","crinput","",1,"cr-input","w100","h-3"],["type","submit",1,"btn-rev"],[1,"f5","spaced"],[1,"small","light"],[1,"small"]],template:function(i,d){i&1&&(e(0,"div",0)(1,"div",1)(2,"h3",2),o(3," My profile | "),e(4,"a",3),o(5,"My ideas"),t()(),e(6,"div",4)(7,"div",5),o(8," image "),t(),e(9,"div",6)(10,"form",7),C("ngSubmit",function(){return d.saveProfile()}),e(11,"div",8)(12,"cr-input",9),m(13,"input",10),t()(),e(14,"div",8)(15,"cr-input",11),m(16,"textarea",12),t()(),e(17,"div",8)(18,"button",13),o(19,"Save"),t()()(),e(20,"h5",14),o(21,"Login settings"),t(),e(22,"div",15),o(23,"Email"),t(),e(24,"div",8),o(25,"email@address.com"),t(),e(26,"div",15),o(27,"Mobile number"),t(),e(28,"div",8),o(29,"+1234567890"),t(),e(30,"span",16),o(31,"To change login settings, contact administrator."),t()()()()()),i&2&&(f(10),g("formGroup",d.profileForm),f(3),g("required",!0))},dependencies:[p,l,s,D,b,h,y,E,I,x,F,A,N],encapsulation:2,changeDetection:0})};var u=class r{id;constructor(){}ngOnInit(){}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=a({type:r,selectors:[["ng-component"]],inputs:{id:"id"},decls:7,vars:0,consts:[[1,"page"],[1,"container"],[1,"f3","spaced"],["routerLink","/account"]],template:function(i,d){i&1&&(e(0,"div",0)(1,"div",1)(2,"h3",2)(3,"a",3),o(4,"My profile"),t(),o(5," | My ideas "),t(),m(6,"cl-post-list"),t()())},dependencies:[p,l,s,R],encapsulation:2,changeDetection:0})};var ie=[{path:"",component:c},{path:"posts",component:u}];export{ie as AccountRoutes};
