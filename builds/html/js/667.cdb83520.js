"use strict";(globalThis["webpackChunkzmores_dev"]=globalThis["webpackChunkzmores_dev"]||[]).push([[667],{2667:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var a=s(9835);const o={class:"q-pa-md q-gutter-sm txt-bcrumbs"},r={class:"justify-center row col"},l={class:"section-blog-page justify-center row col full-width q-mt-xl"},n=(0,a._)("div",{class:"txt-intro text-secondary"},[(0,a._)("p",{class:"q-ma-none bebasneue-font txt-talk"},"My Awesome Blogs")],-1);function c(e,t,s,c,i,u){const d=(0,a.up)("q-badge"),m=(0,a.up)("q-icon"),g=(0,a.up)("q-breadcrumbs-el"),b=(0,a.up)("q-breadcrumbs");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",o,[(0,a._)("div",r,[(0,a.Wm)(d,{outline:"",class:"desktop-hide badge-warning",color:"warning",label:"website under construction"})]),(0,a.Wm)(b,{class:"text-grey mobile-hide"},{separator:(0,a.w5)((()=>[(0,a.Wm)(m,{size:"1.0em",name:"arrow_forward",color:"grey"})])),default:(0,a.w5)((()=>[(0,a.Wm)(g,{class:"text-grey",label:"Home",to:"/"}),(0,a.Wm)(g,{class:"text-secondary",label:"Blogs"})])),_:1})]),(0,a._)("div",l,[n,((0,a.wg)(),(0,a.j4)((0,a.LL)(e.BlogList)))])],64)}var i=s(6970);const u={class:"section-blog-list self-start row col justify-center full-width text-white"},d={class:"text-center caption"};function m(e,t,s,o,r,l){const n=(0,a.up)("q-img"),c=(0,a.up)("q-card-section"),m=(0,a.up)("q-btn"),g=(0,a.up)("q-card-actions"),b=(0,a.up)("q-card"),p=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(p,{class:"flex"},{default:(0,a.w5)((()=>[(0,a._)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.blogs,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.url},[(0,a.Wm)(b,{class:"blog-cards col-3 q-ma-md",flat:"",bordered:"",dark:""},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{src:e.previewPhoto,class:"img-preview-photo"},null,8,["src"]),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a._)("div",d,(0,i.zw)(e.title),1)])),_:2},1024),(0,a.Wm)(g,{class:"row justify-center absolute-bottom q-pb-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{outline:"",rounded:"","no-caps":"",color:"secondary",label:"Read on Medium",size:"sm",type:"a",href:e.url},null,8,["href"])])),_:2},1024)])),_:2},1024)])))),128))])])),_:1})}const g=(0,a.aZ)({name:"BlogListPage",data(){return{blogs:[]}},async mounted(){await this.initBlogItems()},setup(){return{async initBlogItems(){const e="https://gist.githubusercontent.com/zmoresss/ecf2bc516ff5b5507b4e827cf44de4ad/raw/853c8a04930387ca6e081e7f2b69bc9a27d3b873/medium-rss.json",t=await fetch(e),s=await t.json();this.blogs=this.formatBlogs(s.items)},formatBlogs(e){return e.map((e=>{const{title:t,guid:s,date_published:a,preview_image:o}=e;return{title:t,url:s,publishedDate:a,previewPhoto:o}}))}}}});var b=s(1639),p=s(9885),w=s(7590),f=s(335),h=s(3190),v=s(1821),_=s(963),q=s(9984),y=s.n(q);const B=(0,b.Z)(g,[["render",m]]),Z=B;y()(g,"components",{QPage:p.Z,QCard:w.Z,QImg:f.Z,QCardSection:h.Z,QCardActions:v.Z,QBtn:_.Z});const x=(0,a.aZ)({name:"BlogsPage",components:[Z],data(){return{BlogList:Z}},setup(){}});var Q=s(990),W=s(2605),j=s(2857),k=s(8052);const z=(0,b.Z)(x,[["render",c]]),C=z;y()(x,"components",{QBadge:Q.Z,QBreadcrumbs:W.Z,QIcon:j.Z,QBreadcrumbsEl:k.Z})}}]);