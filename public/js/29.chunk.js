(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"6DD4":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("Ty5D"),l=a("iae6"),c=a("R/WZ"),o=a("PUQp"),s=a("tVbE"),u=a("IsqK"),m=a("PsDL"),d=a("JQEk"),p=a("gd/W"),f=a("jjAL"),b=a("eD//"),g=a("wb2y"),E=a("ofer"),v=a("bXiM"),y=a("lO0E"),h=a("Ji2X"),N=a("Ti5m"),x=a.n(N),O=a("mYdW"),j=a.n(O),L=a("1iKp"),k=a.n(L),w=a("76vg"),I=a.n(w),S=a("MPUk"),A=a.n(S),C=a("/MKj"),M=a("55Ip"),P=a("iuhU"),D=a("wd/R"),T=a.n(D),z=a("BkRI"),F=a.n(z),W=a("h5fe"),R=a("AAZk"),H=a("uEep"),U=a("VMeU"),B=a("MjAp");function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function K(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var G=[H.Cb,H.c],Q=[{title:"2021 - 2025 წლების გეგმა",defaultExpanded:!0,list:[{title:"მიზნები",url:"/goals",permissions:G},{title:"ამოცანები",url:"/tasks",permissions:G},{title:"ინდიკატორები",url:"/indicators",permissions:G},{title:"მტკიცებულებები",url:"/evidences",permissions:G},{title:"წლის გეგმები",alwaysExpanded:!0,noActiveClassName:!0,url:"/activities",list:[{title:"აქტივობები",url:"/activities"}]}]},{title:"საკონტაქტო ინფორმაცია",url:"/contact-info"},{title:"სტატისტიკა",url:"/statistics"}],V=[{title:"პარამეტრები",url:"/parameters"},{title:"სამსახურების მართვა",url:"/manage-departments"},{title:"მომხმარებლების მართვა",url:"/manage-users"},{title:"ლოგი",url:"/logs"}],X=Object(c.a)((function(e){return{sidebar:{width:function(e){return e.isSidebarHidden?0:266},height:"100%",position:"fixed",zIndex:1,top:0,left:0,backgroundColor:"#fff",overflowY:"auto",borderRight:"1px solid rgba(0, 0, 0, 0.12)","& .MuiListItemText-primary":{fontFeatureSettings:"'case' on",textTransform:"uppercase"}},navbarLogoLink:{display:"flex",cursor:"pointer"},navbarLogo:{width:"230px",objectFit:"contain"},userName:{"&&":{maxWidth:"500px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},sidebarList:{},sidebarListItemWrapper:{display:"flex",alignItems:"center"},sidebarListNested:{paddingLeft:e.spacing(2)},sidebarAdminMenuHeader:{paddingLeft:e.spacing(2),paddingTop:e.spacing(2)},sidebarNavLink:{width:"100%",transition:"0.2s"},sidebarActiveNavLink:{backgroundColor:"#E5E7F5"},toolbarDefault:e.mixins.toolbar,toolbar:{"&&":{paddingLeft:"0",justifyContent:"space-between"}},navbarLeft:{display:"flex",alignItems:"center","& > * + *":{marginLeft:e.spacing(2)}},sidebarExpandIcon:{"&&":{transition:"0.2s"}},sidebarExpanded:{"&&":{transform:"rotate(180deg)"}},navbarRight:{display:"flex",alignItems:"center"},main:{marginLeft:function(e){return e.isSidebarHidden?0:266}},mainContainer:{"&&":{marginLeft:"unset"}},content:{padding:e.spacing(3)}}})),Y=function e(t){var a=t.item,i=t.list,l=(K(t,["item","list"]),J(Object(n.useState)(!!a.defaultExpanded),2)),c=l[0],o=l[1],p=X(),f=Object(n.useMemo)((function(){return!a.permissions||Object(U.a)(a.permissions)}),[]),b=!!i&&i.length>0,g=a.url?M.c:n.Fragment;return f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p.sidebarListItemWrapper},r.a.createElement(g,a.url?{to:a.url,activeClassName:a.noActiveClassName?null:p.sidebarActiveNavLink,className:p.sidebarNavLink}:{},r.a.createElement(s.a,{button:!0,onClick:function(){o((function(e){return!e}))}},r.a.createElement(u.a,{primary:a.title}),b&&!a.alwaysExpanded?r.a.createElement("div",{style:{paddingLeft:"8px"}},c?r.a.createElement(j.a,null):r.a.createElement(k.a,null)):null),a.editable&&r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(A.a,{fontSize:"small"}))))),b&&r.a.createElement(d.a,{in:a.alwaysExpanded||c,timeout:"auto",unmountOnExit:!0},r.a.createElement("div",{className:p.sidebarListNested},i.map((function(t,a){return r.a.createElement(e,{key:a,item:t,list:t.list})}))))):null},Z={logout:W.c,loadPlanName:function(){return{type:R.S.LOADING}}},$=Object(C.b)((function(e){return{userInfo:e.client.userInfo,planNameLoading:e.plans.loading,planName:e.plans.data}}),Z)((function(e){var t=e.logout,a=e.userInfo,i=e.planNameLoading,c=e.planName,o=e.loadPlanName,s=K(e,["logout","userInfo","planNameLoading","planName","loadPlanName"]),u=J(Object(n.useState)(null),2),d=u[0],N=u[1],O=J(Object(n.useState)(!1),2),j=O[0],L=O[1],k=X({isSidebarHidden:j}),w=Object(n.useMemo)((function(){return Object(U.a)(G)}),[]),S=Object(n.useMemo)((function(){var e=F()(Q);return e[0].title=c,e}),[c]),A=!!d,C=function(){N(null)},D=r.a.createElement(p.a,{anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},id:"navbar-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:A,onClose:C},r.a.createElement(M.b,{to:"/profile"},r.a.createElement(f.a,{onClick:C},"ჩემი პროფილი")),r.a.createElement(f.a,{onClick:function(){C(),t()}},"გასვლა"));return Object(n.useEffect)((function(){o()}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:k.sidebar},r.a.createElement("div",{className:k.toolbarDefault}),i?r.a.createElement("div",{style:{textAlign:"center",padding:"24px"}},r.a.createElement(l.a,null)):c?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:k.sidebarList},S.map((function(e,t){return r.a.createElement(Y,{key:t,item:e,list:e.list})}))),w&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null),r.a.createElement("div",{className:k.sidebarAdminMenuHeader},r.a.createElement(E.a,{variant:"subtitle1"},"ადმინისტრატორის სივრცე")),r.a.createElement(b.a,{className:k.sidebarList},V.map((function(e,t){return r.a.createElement(Y,{key:t,item:e,list:e.list})}))))):r.a.createElement("div",{style:{padding:"24px 8px"}},r.a.createElement(E.a,{variant:"body1"},"გეგმის სახელი ვერ ჩაიტვირთა"))),r.a.createElement(v.a,{position:"sticky",className:k.appBar},r.a.createElement(y.a,{className:k.toolbar},D,r.a.createElement("div",{className:k.navbarLeft},r.a.createElement(m.a,{onClick:function(){L((function(e){return!e}))},className:Object(P.a)(k.sidebarExpandIcon,j&&k.sidebarExpanded),color:"inherit"},r.a.createElement(I.a,{fontSize:"large"})),r.a.createElement(M.b,{to:"/",className:k.navbarLogoLink},r.a.createElement("img",{src:"/img/logo-navbar.png",className:k.navbarLogo})),r.a.createElement("div",null,r.a.createElement(E.a,null,"".concat(T()().format(B.a)," - ").concat(T()().quarter()," კვარტალი")))),r.a.createElement("div",{className:k.navbarRight},r.a.createElement(E.a,{variant:"body2",className:k.userName},a[H.S]),r.a.createElement(m.a,{edge:"end","aria-label":"account of current user","aria-controls":"navbar-account-menu","aria-haspopup":"true",onClick:function(e){N(e.currentTarget)},color:"inherit"},r.a.createElement(x.a,null))))),r.a.createElement("div",{className:k.main},r.a.createElement(h.a,{disableGutters:!0,maxWidth:!1,className:k.mainContainer},r.a.createElement("div",{className:k.content},s.children))))}));function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ee(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var te=Object(c.a)((function(e){var t;return{loading:(t={height:"calc(100vh - 56px - 48px)"},ee(t,e.breakpoints.up("sm"),{height:"calc(100vh - 64px - 48px)"}),ee(t,"width","100%"),ee(t,"display","flex"),ee(t,"justifyContent","center"),ee(t,"alignItems","center"),t)}})),ae=o.a.map((function(e){var t=e.page;return Object(n.lazy)((function(){return a("lBM6")("./".concat(t))}))})),ne=Object(n.lazy)((function(){return a.e(2).then(a.bind(null,"shTB"))}));t.default=function(e){_({},e);var t=te();return r.a.createElement($,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:t.loading},r.a.createElement(l.a,null))},r.a.createElement(i.d,null,o.a.map((function(e,t){var a=e.path;return r.a.createElement(i.b,{key:t,exact:!0,path:"/".concat(a),component:ae[t]})})),r.a.createElement(i.b,{component:ne}))))}}}]);