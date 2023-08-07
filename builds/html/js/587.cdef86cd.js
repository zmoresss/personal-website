(globalThis["webpackChunkzmores_dev"]=globalThis["webpackChunkzmores_dev"]||[]).push([[587,940],{8036:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>B});var n=s(9835);const o={class:"section-blog-page justify-center row col full-width q-mt-xl"},a=(0,n._)("div",{class:"txt-intro text-secondary"},[(0,n._)("p",{class:"q-ma-none bebasneue-font txt-talk"},"My Awesome Blogs")],-1);function l(e,t,s,l,r,i){return(0,n.wg)(),(0,n.iD)("div",o,[a,((0,n.wg)(),(0,n.j4)((0,n.LL)(e.BlogList)))])}var r=s(6970);const i={class:"section-blog-list self-start row col justify-center full-width text-white q-py-md"},c={class:"text-center caption"};function d(e,t,s,o,a,l){const d=(0,n.up)("q-img"),u=(0,n.up)("q-card-section"),m=(0,n.up)("q-btn"),g=(0,n.up)("q-card-actions"),p=(0,n.up)("q-card"),w=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(w,{class:"flex"},{default:(0,n.w5)((()=>[(0,n._)("div",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.blogs,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.url},[(0,n.Wm)(p,{class:"blog-cards col-3 q-ma-sm",flat:"",bordered:"",dark:""},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{src:e.previewPhoto,class:"img-preview-photo"},null,8,["src"]),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n._)("div",c,(0,r.zw)(e.title),1)])),_:2},1024),(0,n.Wm)(g,{class:"row justify-center absolute-bottom q-pb-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{outline:"",rounded:"","no-caps":"",color:"secondary",label:"Read on Medium",size:"sm",type:"a",href:e.url},null,8,["href"])])),_:2},1024)])),_:2},1024)])))),128))])])),_:1})}const u=(0,n.aZ)({name:"BlogListPage",data(){return{blogs:[]}},async mounted(){await this.initBlogItems()},setup(){return{async initBlogItems(){const e="https://gist.githubusercontent.com/zmoresss/ecf2bc516ff5b5507b4e827cf44de4ad/raw/853c8a04930387ca6e081e7f2b69bc9a27d3b873/medium-rss.json",t=await fetch(e),s=await t.json();this.blogs=this.formatBlogs(s.items)},formatBlogs(e){return e.map((e=>{const{title:t,guid:s,date_published:n,preview_image:o}=e;return{title:t,url:s,publishedDate:n,previewPhoto:o}}))}}}});var m=s(1639),g=s(9885),p=s(7590),w=s(335),b=s(3190),f=s(1821),h=s(2334),v=s(9984),q=s.n(v);const _=(0,m.Z)(u,[["render",d]]),y=_;q()(u,"components",{QPage:g.Z,QCard:p.Z,QImg:w.Z,QCardSection:b.Z,QCardActions:f.Z,QBtn:h.Z});const Z=(0,n.aZ)({name:"BlogsPage",components:[y],data(){return{BlogList:y}},setup(){}}),x=(0,m.Z)(Z,[["render",l]]),B=x},4587:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>P});var n=s(9835);function o(e,t,s,o,a,l){return(0,n.wg)(),(0,n.iD)(n.HY,null,[((0,n.wg)(),(0,n.j4)((0,n.LL)(e.AboutMe))),((0,n.wg)(),(0,n.j4)((0,n.LL)(e.BlogsPage)))],64)}var a=s(6970),l=s(2897),r=s.n(l);const i={class:"section-about-me self-start row col full-width q-py-lg q-mt-lg"},c={class:"col-xs-12 img-photo-self desktop-hide q-pa-md q-mt-lg"},d={class:"txt-intro col-6 col-md-6 col-xs-12 self-center"},u=(0,n._)("div",{class:"txt-intro text-secondary"},[(0,n._)("p",{class:"typed-out q-ma-none bebasneue-font"}," Hi, I'm Zsannen Mariano. ")],-1),m=["textContent"],g={class:"btn-dl-cv q-py-md"},p={class:"col-6 col-md-6 img-photo-self q-pa-lg mobile-hide"};function w(e,t,s,o,l,w){const b=(0,n.up)("q-badge"),f=(0,n.up)("q-img"),h=(0,n.up)("q-btn"),v=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(v,{class:"flex"},{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n.Wm)(b,{outline:"",class:"desktop-hide badge-warning",color:"warning",label:"website under construction"}),(0,n._)("div",c,[(0,n.Wm)(f,{src:r()})]),(0,n._)("div",d,[u,(0,n._)("div",{class:"txt-about caption raleway-font",textContent:(0,a.zw)(e.shortDescription)},null,8,m),(0,n._)("div",g,[(0,n.Wm)(h,{outline:"",rounded:"","no-caps":"",color:"secondary",label:"Let's connect on LinkedIn",size:"md",class:"dense",type:"a",target:"_blank",href:"https://www.linkedin.com/in/zmars"})])]),(0,n._)("div",p,[(0,n.Wm)(f,{src:r()})])])])),_:1})}const b=(0,n.aZ)({name:"AboutMePage",data(){return{shortDescription:"A passionate and driven software engineer who is highly committed to advocating for servant leadership and women empowerment. A strong believer in creating a welcoming and inclusive culture in the tech industry."}},mounted(){},setup(){}});var f=s(1639),h=s(9885),v=s(990),q=s(335),_=s(2334),y=s(9984),Z=s.n(y);const x=(0,f.Z)(b,[["render",w]]),B=x;Z()(b,"components",{QPage:h.Z,QBadge:v.Z,QImg:q.Z,QBtn:_.Z});var k=s(8036);const L=(0,n.aZ)({name:"IndexPage",components:[B,k["default"]],data(){return{AboutMe:B,BlogsPage:k["default"]}},setup(){}}),j=(0,f.Z)(L,[["render",o]]),P=j},2897:(e,t,s)=>{e.exports=s.p+"img/programmer.5c4fcc04.svg"}}]);