(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5041],{62023:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(63366),s=n(87462),i=n(67294),o=(n(45697),n(86010)),a=n(71993),c=n(11496),l=n(33616),d=n(15773);function u(e){return(0,d.Z)("MuiCardActions",e)}(0,n(88858).Z)("MuiCardActions",["root","spacing"]);var x=n(85893);const h=["disableSpacing","className"],m=(0,c.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,s.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var f=i.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:i=!1,className:c}=n,d=(0,r.Z)(n,h),f=(0,s.Z)({},n,{disableSpacing:i}),p=(e=>{const{classes:t,disableSpacing:n}=e,r={root:["root",!n&&"spacing"]};return(0,a.Z)(r,u,t)})(f);return(0,x.jsx)(m,(0,s.Z)({className:(0,o.Z)(p.root,c),ownerState:f,ref:t},d))}))},44267:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(87462),s=n(63366),i=n(67294),o=(n(45697),n(86010)),a=n(71993),c=n(11496),l=n(33616),d=n(15773);function u(e){return(0,d.Z)("MuiCardContent",e)}(0,n(88858).Z)("MuiCardContent",["root"]);var x=n(85893);const h=["className","component"],m=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var f=i.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:i,component:c="div"}=n,d=(0,s.Z)(n,h),f=(0,r.Z)({},n,{component:c}),p=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},u,t)})(f);return(0,x.jsx)(m,(0,r.Z)({as:c,className:(0,o.Z)(p.root,i),ownerState:f,ref:t},d))}))},53184:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(87462),s=n(63366),i=n(67294),o=(n(45697),n(86010)),a=n(71993),c=n(44063),l=n(33616),d=n(11496),u=n(15773);function x(e){return(0,u.Z)("MuiTableHead",e)}(0,n(88858).Z)("MuiTableHead",["root"]);var h=n(85893);const m=["className","component"],f=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),p={variant:"head"},j="thead";var Z=i.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiTableHead"}),{className:i,component:d=j}=n,u=(0,s.Z)(n,m),Z=(0,r.Z)({},n,{component:d}),v=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},x,t)})(Z);return(0,h.jsx)(c.Z.Provider,{value:p,children:(0,h.jsx)(f,(0,r.Z)({as:d,className:(0,o.Z)(v.root,i),ref:t,role:d===j?null:"rowgroup",ownerState:Z},u))})}))},26280:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(63366),s=n(87462),i=n(71993),o=n(86010),a=(n(45697),n(67294)),c=n(49990),l=n(82066),d=n(85893),u=(0,l.Z)((0,d.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),x=n(11496),h=n(33616),m=n(98216),f=n(15773);function p(e){return(0,f.Z)("MuiTableSortLabel",e)}var j=(0,n(88858).Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]);const Z=["active","children","className","direction","hideSortIcon","IconComponent"],v=(0,x.ZP)(c.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.active&&t.active]}})((({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,[`& .${j.icon}`]:{opacity:.5}},[`&.${j.active}`]:{color:e.palette.text.primary,[`& .${j.icon}`]:{opacity:1,color:e.palette.text.secondary}}}))),g=(0,x.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,t[`iconDirection${(0,m.Z)(n.direction)}`]]}})((({theme:e,ownerState:t})=>(0,s.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},"desc"===t.direction&&{transform:"rotate(0deg)"},"asc"===t.direction&&{transform:"rotate(180deg)"})));var b=a.forwardRef((function(e,t){const n=(0,h.Z)({props:e,name:"MuiTableSortLabel"}),{active:a=!1,children:c,className:l,direction:x="asc",hideSortIcon:f=!1,IconComponent:j=u}=n,b=(0,r.Z)(n,Z),w=(0,s.Z)({},n,{active:a,direction:x,hideSortIcon:f,IconComponent:j}),y=(e=>{const{classes:t,direction:n,active:r}=e,s={root:["root",r&&"active"],icon:["icon",`iconDirection${(0,m.Z)(n)}`]};return(0,i.Z)(s,p,t)})(w);return(0,d.jsxs)(v,(0,s.Z)({className:(0,o.Z)(y.root,l),component:"span",disableRipple:!0,ownerState:w,ref:t},b,{children:[c,f&&!a?null:(0,d.jsx)(g,{as:j,className:(0,o.Z)(y.icon),ownerState:w})]}))}))},6707:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/analytics",function(){return n(90736)}])},10359:function(e,t,n){"use strict";n.d(t,{k:function(){return r}});var r=(0,n(5152).default)((function(){return Promise.all([n.e(5279),n.e(7229)]).then(n.bind(n,47229))}),{loadableGenerated:{webpack:function(){return[47229]},modules:["../components/chart.tsx -> react-apexcharts"]},ssr:!1})},84115:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var r=n(85893),s=(0,n(82066).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight")},85637:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var r=n(85893),s=(0,n(82066).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})}),"ChevronUp")},52567:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(85893),s=(0,n(82066).Z)((0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,r.jsx)("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),(0,r.jsx)("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"})]}),"ExternalLink")},97315:function(e,t,n){"use strict";n.d(t,{C:function(){return s}});var r=n(85893),s=(0,n(82066).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"InformationCircleOutlined")},195:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var r=n(85893),s=(0,n(82066).Z)((0,r.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V7.414C15.9999 6.88361 15.7891 6.37499 15.414 6L12 2.586C11.625 2.2109 11.1164 2.00011 10.586 2H6ZM8 12C8 11.7348 7.89464 11.4804 7.70711 11.2929C7.51957 11.1054 7.26522 11 7 11C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12V15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16C7.26522 16 7.51957 15.8946 7.70711 15.7071C7.89464 15.5196 8 15.2652 8 15V12ZM10 9C10.2652 9 10.5196 9.10536 10.7071 9.29289C10.8946 9.48043 11 9.73478 11 10V15C11 15.2652 10.8946 15.5196 10.7071 15.7071C10.5196 15.8946 10.2652 16 10 16C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9ZM14 8C14 7.73478 13.8946 7.48043 13.7071 7.29289C13.5196 7.10536 13.2652 7 13 7C12.7348 7 12.4804 7.10536 12.2929 7.29289C12.1054 7.48043 12 7.73478 12 8V15C12 15.2652 12.1054 15.5196 12.2929 15.7071C12.4804 15.8946 12.7348 16 13 16C13.2652 16 13.5196 15.8946 13.7071 15.7071C13.8946 15.5196 14 15.2652 14 15V8Z"})}),"Reports")},90736:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return re}});var r=n(85893),s=n(67294),i=n(9008),o=n(87357),a=n(27948),c=n(86886),l=n(15861),d=n(11057),u=n(50135),x=n(18972),h=n(1998),m=n(26736),f=n(66242),p=n(67720),j=n(62023),Z=n(87952),v=n(2734),g=n(41796),b=n(84115),w=n(52336),y=n(85637),C=n(10359),S=function(){var e={chart:{background:"transparent",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#2F3EB1"],dataLabels:{enabled:!1},fill:{opacity:1},grid:{show:!1},stroke:{width:3},theme:{mode:(0,v.Z)().palette.mode},tooltip:{enabled:!1},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1}};return(0,r.jsx)(C.k,{options:e,series:[{data:[0,60,30,60,0,30,10,30,0]}],type:"line",width:120})},k=function(){var e={chart:{background:"transparent",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#2F3EB1"],dataLabels:{enabled:!1},fill:{opacity:1},grid:{show:!1},states:{normal:{filter:{type:"none",value:0}}},stroke:{width:0},theme:{mode:(0,v.Z)().palette.mode},tooltip:{enabled:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1}},yaxis:{show:!1}};return(0,r.jsx)(C.k,{options:e,series:[{data:[10,20,30,40,50,60,5]}],type:"bar",width:120})},P=function(){return(0,r.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,r.jsx)(c.ZP,{item:!0,md:3,sm:6,xs:12,children:(0,r.jsxs)(f.Z,{children:[(0,r.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",px:3,py:2},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{color:"textSecondary",variant:"body2",children:"Impressions"}),(0,r.jsx)(l.Z,{sx:{mt:1},variant:"h5",children:"1.9M"})]}),(0,r.jsx)(S,{})]}),(0,r.jsx)(p.Z,{}),(0,r.jsx)(j.Z,{children:(0,r.jsx)(d.Z,{endIcon:(0,r.jsx)(b.o,{fontSize:"small"}),children:"See all visits"})})]})}),(0,r.jsx)(c.ZP,{item:!0,md:3,sm:6,xs:12,children:(0,r.jsxs)(f.Z,{children:[(0,r.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",px:3,py:2},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{color:"textSecondary",variant:"body2",children:"Spent"}),(0,r.jsx)(l.Z,{sx:{mt:1},variant:"h5",children:"$41.2K"})]}),(0,r.jsx)(S,{})]}),(0,r.jsx)(p.Z,{}),(0,r.jsxs)(j.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,r.jsx)(Z.Z,{sx:{backgroundColor:function(e){return(0,g.Fq)(e.palette.success.main,.08)},color:"success.main",height:36,width:36},children:(0,r.jsx)(y.K,{fontSize:"small"})}),(0,r.jsx)(l.Z,{color:"textSecondary",sx:{ml:1},variant:"caption",children:"12% more then last month"})]})]})}),(0,r.jsx)(c.ZP,{item:!0,md:3,sm:6,xs:12,children:(0,r.jsxs)(f.Z,{children:[(0,r.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",px:3,py:2},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{color:"textSecondary",variant:"body2",children:"Engagements"}),(0,r.jsx)(l.Z,{sx:{mt:1},variant:"h5",children:"36,6K"})]}),(0,r.jsx)(S,{})]}),(0,r.jsx)(p.Z,{}),(0,r.jsxs)(j.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,r.jsx)(Z.Z,{sx:{backgroundColor:function(e){return(0,g.Fq)(e.palette.error.main,.08)},color:"error.main",height:36,width:36},children:(0,r.jsx)(w._,{fontSize:"small"})}),(0,r.jsx)(l.Z,{color:"textSecondary",sx:{ml:1},variant:"caption",children:"30% less then last month"})]})]})}),(0,r.jsx)(c.ZP,{item:!0,md:3,sm:6,xs:12,children:(0,r.jsxs)(f.Z,{children:[(0,r.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",px:3,py:2},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{color:"textSecondary",variant:"body2",children:"Conversions"}),(0,r.jsx)(l.Z,{sx:{mt:1},variant:"h5",children:"131,3K"})]}),(0,r.jsx)(k,{})]}),(0,r.jsx)(p.Z,{}),(0,r.jsxs)(j.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,r.jsx)(Z.Z,{sx:{backgroundColor:function(e){return(0,g.Fq)(e.palette.success.main,.08)},color:"success.main",height:36,width:36},children:(0,r.jsx)(y.K,{fontSize:"small"})}),(0,r.jsx)(l.Z,{color:"textSecondary",sx:{ml:1},variant:"caption",children:"12% more then last month"})]})]})})]})},R=n(92077),M=n.n(R),I=n(78445),L=n(30479),O=n(7906),V=n(53184),z=n(68509),_=n(53252),N=n(295),T=n(52567),A=n(97315),B=n(56807),E=[{bounceRate:16,uniqueVisits:8584,url:"/",visitors:95847},{bounceRate:5,uniqueVisits:648,url:"/authentication/login",visitors:7500},{bounceRate:2,uniqueVisits:568,url:"/dashboard",visitors:85406},{bounceRate:12,uniqueVisits:12322,url:"/blog/top-5-react-frameworks",visitors:75050},{bounceRate:10,uniqueVisits:11645,url:"/blog/understand-programming-principles",visitors:68003},{bounceRate:8,uniqueVisits:10259,url:"/blog/design-patterns",visitors:49510}],F=function(){return(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(I.Z,{title:"Most Visited Pages",action:(0,r.jsx)(L.Z,{title:"Refresh rate is 24h",children:(0,r.jsx)(A.C,{sx:{color:"action.active"}})})}),(0,r.jsx)(B.L,{children:(0,r.jsxs)(O.Z,{sx:{minWidth:600},children:[(0,r.jsx)(V.Z,{children:(0,r.jsxs)(z.Z,{children:[(0,r.jsx)(_.Z,{children:"Page Name"}),(0,r.jsx)(_.Z,{children:"Visitors"}),(0,r.jsx)(_.Z,{children:"Unique page visits"}),(0,r.jsx)(_.Z,{children:"Bounce rate"})]})}),(0,r.jsx)(N.Z,{children:E.map((function(e){return(0,r.jsxs)(z.Z,{sx:{"&:last-child td":{border:0}},children:[(0,r.jsx)(_.Z,{children:(0,r.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,r.jsx)(T.d,{sx:{color:"action.active",cursor:"pointer"}}),(0,r.jsx)(l.Z,{sx:{ml:2},variant:"body2",children:e.url})]})}),(0,r.jsx)(_.Z,{children:M()(e.visitors).format("0,0")}),(0,r.jsx)(_.Z,{children:M()(e.uniqueVisits).format("0,0")}),(0,r.jsxs)(_.Z,{children:[e.bounceRate,"%"]})]},e.url)}))})]})})]})},q=n(44267),D={series:[{color:"rgba(86, 100, 210, 0.5)",data:10,label:"Linkedin"},{color:"#FFB547",data:10,label:"Facebook"},{color:"#7BC67E",data:20,label:"Instagram"},{color:"#64B6F7",data:10,label:"Twitter"},{color:"#455a64",data:70,label:"Other"}]},J=function(){var e=(0,v.Z)(),t={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:D.series.map((function(e){return e.color})),dataLabels:{enabled:!1},fill:{opacity:1},labels:D.series.map((function(e){return e.label})),legend:{show:!1},stroke:{width:0},theme:{mode:e.palette.mode}},n=D.series.map((function(e){return e.data}));return(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(I.Z,{title:"Social Media Sources",action:(0,r.jsx)(L.Z,{title:"Widget25 source by Social Media platforms",children:(0,r.jsx)(A.C,{sx:{color:"action.active"}})})}),(0,r.jsx)(p.Z,{}),(0,r.jsxs)(q.Z,{children:[(0,r.jsx)(C.k,{height:200,options:t,series:n,type:"donut"}),(0,r.jsx)(c.ZP,{container:!0,children:D.series.map((function(e){return(0,r.jsxs)(c.ZP,{item:!0,sx:{alignItems:"center",display:"flex",p:1},xs:6,children:[(0,r.jsx)(o.Z,{sx:{border:3,borderColor:e.color,borderRadius:"50%",height:16,mr:1,width:16}}),(0,r.jsx)(l.Z,{variant:"subtitle2",children:e.label})]},e.label)}))})]}),(0,r.jsx)(p.Z,{}),(0,r.jsx)(j.Z,{children:(0,r.jsx)(d.Z,{endIcon:(0,r.jsx)(b.o,{fontSize:"small"}),children:"See all visits"})})]})},H=n(26280);function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=[{flag:"/static/icons/us_flag.svg",name:"United States",seo:40,visits:31200},{flag:"/static/icons/uk_flag.svg",name:"United Kingdom",seo:47,visits:12700},{flag:"/static/icons/ru_flag.svg",name:"Russia",seo:65,visits:10360},{flag:"/static/icons/ca_flag.svg",name:"Canada",seo:23,visits:5749},{flag:"/static/icons/de_flag.svg",name:"Germany",seo:45,visits:2932},{flag:"/static/icons/es_flag.svg",name:"Spain",seo:56,visits:200}],$=function(e){var t=(0,s.useState)("desc"),n=t[0],i=t[1],a=function(e,t){return e.sort((function(e,n){return"asc"===t?e.visits<n.visits?-1:1:e.visits>n.visits?-1:1}))}(W,n);return(0,r.jsxs)(f.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){K(e,t,n[t])}))}return e}({},e,{children:[(0,r.jsx)(I.Z,{title:"Keywords by country",action:(0,r.jsx)(L.Z,{title:"Refresh rate is 24h",children:(0,r.jsx)(A.C,{sx:{color:"action.active"}})})}),(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(V.Z,{children:(0,r.jsxs)(z.Z,{children:[(0,r.jsx)(_.Z,{children:"Country"}),(0,r.jsx)(_.Z,{sortDirection:n,children:(0,r.jsx)(H.Z,{active:!0,direction:n,onClick:function(){i((function(e){return"asc"===e?"desc":"asc"}))},children:"Value"})}),(0,r.jsx)(_.Z,{children:"SEO"})]})}),(0,r.jsx)(N.Z,{children:a.map((function(e){return(0,r.jsxs)(z.Z,{sx:{"&:last-child td":{border:0}},children:[(0,r.jsx)(_.Z,{children:(0,r.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,r.jsx)(o.Z,{sx:{height:16,width:16,"& img":{height:16,width:16}},children:(0,r.jsx)("img",{alt:e.name,src:e.flag})}),(0,r.jsx)(l.Z,{sx:{ml:1},variant:"subtitle2",children:e.name})]})}),(0,r.jsx)(_.Z,{children:M()(e.visits).format("0,0")}),(0,r.jsxs)(_.Z,{children:[e.seo,"%"]})]},e.name)}))})]}),(0,r.jsx)(p.Z,{}),(0,r.jsx)(j.Z,{children:(0,r.jsx)(d.Z,{endIcon:(0,r.jsx)(b.o,{fontSize:"small"}),children:"See more"})})]}))},U=n(69368);function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Q={series:[{color:"#4CAF50",data:[3350,1840,2254,5780,9349,5241,2770,2051,3764,2385,5912,8323],name:"Organic"},{color:"#FF9800",data:[35,41,62,42,13,18,29,37,36,51,32,35],name:"Referral"},{color:"#0C7CD5",data:[100,122,50,300,250,400,312,200,10,60,90,400],name:"Social Media"}],xaxis:{dataPoints:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]}},Y=function(e){var t=(0,v.Z)(),n=(0,s.useState)(["Organic","Referral","Social Media"]),i=n[0],a=n[1],c=Q.series.filter((function(e){return i.includes(e.name)})),d={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:c.map((function(e){return e.color})),dataLabels:{enabled:!1},fill:{opacity:1},grid:{borderColor:t.palette.divider,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},legend:{show:!1},markers:{hover:{size:void 0,sizeOffset:2},radius:2,shape:"circle",size:4,strokeWidth:0},stroke:{curve:"smooth",lineCap:"butt",width:3},theme:{mode:t.palette.mode},xaxis:{axisBorder:{color:t.palette.divider},axisTicks:{color:t.palette.divider,show:!0},categories:Q.xaxis.dataPoints,labels:{style:{colors:t.palette.text.secondary}}},yaxis:[{axisBorder:{color:t.palette.divider,show:!0},axisTicks:{color:t.palette.divider,show:!0},labels:{style:{colors:t.palette.text.secondary}}},{axisTicks:{color:t.palette.divider,show:!0},axisBorder:{color:t.palette.divider,show:!0},labels:{style:{colors:t.palette.text.secondary}},opposite:!0}]};return(0,r.jsxs)(f.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){G(e,t,n[t])}))}return e}({},e,{children:[(0,r.jsx)(I.Z,{title:"Traffic Sources",action:(0,r.jsx)(L.Z,{title:"Widget25 Source by channel",children:(0,r.jsx)(A.C,{sx:{color:"action.active"}})})}),(0,r.jsx)(p.Z,{}),(0,r.jsx)(o.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",mt:4,px:2},children:Q.series.map((function(e){return(0,r.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex",mr:2},children:[(0,r.jsx)(U.Z,{checked:i.some((function(t){return t===e.name})),onChange:function(t){return function(e,t){e.target.checked?a(X(i).concat([t])):a(i.filter((function(e){return e!==t})))}(t,e.name)}}),(0,r.jsx)(o.Z,{sx:{border:3,borderColor:i.some((function(t){return t===e.name}))?e.color:(0,g.Fq)(e.color,.4),borderRadius:"50%",height:16,mr:1,width:16}}),(0,r.jsx)(l.Z,{sx:{color:i.some((function(t){return t===e.name}))?"textPrimary":(0,g.Fq)(t.palette.text.primary,.4)},variant:"subtitle2",children:e.name})]},e.name)}))}),(0,r.jsx)(C.k,{height:400,options:d,series:c,type:"line"})]}))},ee=n(195),te=n(59084),ne=function(){return(0,s.useEffect)((function(){te.w.push({event:"page_view"})}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"Dashboard: Analytics | Material Kit Pro"})}),(0,r.jsx)(o.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,r.jsxs)(a.Z,{maxWidth:"xl",children:[(0,r.jsx)(o.Z,{sx:{mb:4},children:(0,r.jsxs)(c.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,r.jsx)(c.ZP,{item:!0,children:(0,r.jsx)(l.Z,{variant:"h4",children:"Analytics"})}),(0,r.jsxs)(c.ZP,{item:!0,sx:{alignItems:"center",display:"flex",m:-1},children:[(0,r.jsx)(d.Z,{startIcon:(0,r.jsx)(ee.A,{fontSize:"small"}),sx:{m:1},variant:"outlined",children:"Reports"}),(0,r.jsxs)(u.Z,{defaultValue:"week",label:"Period",select:!0,size:"small",sx:{m:1},children:[(0,r.jsx)(x.Z,{value:"week",children:"Last week"}),(0,r.jsx)(x.Z,{value:"month",children:"Last month"}),(0,r.jsx)(x.Z,{value:"year",children:"Last year"})]})]})]})}),(0,r.jsx)(P,{}),(0,r.jsx)(o.Z,{sx:{mt:4},children:(0,r.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,r.jsx)(c.ZP,{item:!0,md:8,xs:12,children:(0,r.jsx)(Y,{sx:{height:"100%"}})}),(0,r.jsx)(c.ZP,{item:!0,md:4,xs:12,children:(0,r.jsx)($,{})}),(0,r.jsx)(c.ZP,{item:!0,md:8,xs:12,children:(0,r.jsx)(F,{})}),(0,r.jsx)(c.ZP,{item:!0,md:4,xs:12,children:(0,r.jsx)(J,{})})]})})]})})]})};ne.getLayout=function(e){return(0,r.jsx)(h.a,{children:(0,r.jsx)(m.c,{children:e})})};var re=ne}},function(e){e.O(0,[9774,2180,5464,2169,135,7637,8005,8619,7521,2719,2177,2453,9306,9764,2888,179],(function(){return t=6707,e(e.s=t);var t}));var t=e.O();_N_E=t}]);