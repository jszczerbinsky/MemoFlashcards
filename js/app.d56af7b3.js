(function(){"use strict";var e={8940:function(e,t,n){var i=n(9242),a=n(3396);const r=(0,a._)("div",{id:"logo"},"MemoFlashcards",-1);function s(e,t,n,i,s,o){const d=(0,a.up)("AddCards"),l=(0,a.up)("SetList"),c=(0,a.up)("CardView");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,"edit"===s.action?((0,a.wg)(),(0,a.j4)(d,{key:0})):(0,a.kq)("",!0),"menu"===s.action?((0,a.wg)(),(0,a.j4)(l,{key:1})):(0,a.kq)("",!0),"review"===s.action?((0,a.wg)(),(0,a.j4)(c,{key:2})):(0,a.kq)("",!0)],64)}n(560);var o=n(7139);const d=e=>((0,a.dD)("data-v-40efea73"),e=e(),(0,a.Cn)(),e),l={id:"container"},c={id:"overflow-container",ref:"overflowcontainer"},h=d((()=>(0,a._)("p",{class:"left lr"},"I don't remember",-1))),u=d((()=>(0,a._)("p",{class:"right lr"},"I remember",-1))),p={id:"content"},v={id:"button-container"};function b(e,t,n,r,s,d){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",l,[(0,a._)("div",c,[(0,a.Wm)(i.uT,{name:"flip",onEnter:d.onEnter},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)({cardbgback:s.flipped,cardbgfront:!s.flipped}),key:s.flipping,id:"card",ref:"card",onClick:t[0]||(t[0]=e=>d.cardClick()),onMousedown:t[1]||(t[1]=(...e)=>d.cardMouseDown&&d.cardMouseDown(...e)),onTouchstart:t[2]||(t[2]=(...e)=>d.cardTouchDown&&d.cardTouchDown(...e))},[h,u,(0,a._)("p",p,(0,o.zw)(s.flipped?s.backText:s.frontText),1)],34))])),_:1},8,["onEnter"])],512)]),(0,a._)("div",v,[(0,a._)("button",{className:"btn yellow-btn",onClick:t[3]||(t[3]=()=>{d.hideFor(1)})},"Hide for 1 day"),(0,a._)("button",{className:"btn yellow-btn",onClick:t[4]||(t[4]=()=>{d.hideFor(3)})},"Hide for 3 days"),(0,a._)("button",{className:"btn green-btn",onClick:t[5]||(t[5]=()=>{d.getCurrentCard().learned=!0,d.nextCard()})},"Mark as learned"),(0,a._)("button",{className:"btn red-btn",onClick:t[6]||(t[6]=()=>{e.$parent.action="menu"})},"Exit")])])}var f={name:"CardView",mounted(){this.shuffleCards(),this.nextCard()},data(){return{shown:!1,answer:null,currentCard:-1,dragging:!1,baseXPos:0,frontText:"",backText:"",flipping:!1,flipped:!1}},methods:{onEnter(){this.flipped=!this.flipped},hideFor(e){let t=new Date(Date.now());t.setDate(t.getDate()+e),this.getCurrentCard().hideUntil=t.toISOString(),this.nextCard()},shuffleCards(){this.$parent.getSelectedSet().cardlist.sort((()=>Math.random()-.5))},getCurrentCard(){return this.$parent.getSelectedSet().cardlist[this.currentCard]},isHidden(e){const t=new Date(e.hideUntil),n=new Date(Date.now());return n<t||e.learned},nextCard(){if(this.flipped=!1,this.$parent.syncData(),void 0===this.$parent.getSelectedSet().cardlist.find((e=>!this.isHidden(e))))return this.$parent.action="menu";do{this.currentCard++,this.currentCard===this.$parent.getSelectedSet().cardlist.length&&(this.currentCard=0,this.shuffleCards())}while(this.isHidden(this.getCurrentCard()));this.backText=this.getCurrentCard().invisible,this.frontText=this.getCurrentCard().visible,this.shown=!1},cardClick(){this.dragging||(this.flipping=!this.flipping)},getScreenCenter(){return window.innerWidth/2},handleMovement(e){let t=this.baseXPos-this.getScreenCenter(),n=e-150-t;this.$refs.card.style.left=n+"px";let i=this.getScreenCenter()-150-n;Math.abs(i)<1&&(i=1),this.$refs.card.style.opacity=1/(Math.abs(i)/50),Math.abs(i)>this.getScreenCenter()/2?this.answer=i>0?"left":"right":this.answer=null},mouseMove(e){this.handleMovement(e.clientX),this.dragging=!0},touchMove(e){var t="undefined"===typeof e.originalEvent?e:e.originalEvent;let n=t.touches[0]||t.changedTouches[0];this.handleMovement(n.pageX)},handleDown(){this.$refs.overflowcontainer.classList.remove("fadein"),this.$el.addEventListener("mousemove",this.mouseMove),this.$el.addEventListener("touchmove",this.touchMove),this.$el.addEventListener("mouseup",this.cardMouseUp),this.$el.addEventListener("touchend",this.cardMouseUp)},cardMouseDown(e){this.baseXPos=e.clientX,this.handleDown()},cardTouchDown(e){var t="undefined"===typeof e.originalEvent?e:e.originalEvent;let n=t.touches[0]||t.changedTouches[0];this.baseXPos=n.pageX,this.handleDown()},cardMouseUp(){this.$el.removeEventListener("mousemove",this.mouseMove),this.$el.removeEventListener("touchmove",this.touchMove),this.$el.removeEventListener("mouseup",this.cardMouseUp),null!==this.answer&&("left"===this.answer?this.getCurrentCard().wrong++:this.getCurrentCard().correct++,this.$refs.overflowcontainer.classList.add("fadein"),this.nextCard()),this.baseXPos=this.getScreenCenter(),this.handleMovement(this.getScreenCenter()),setTimeout((()=>this.dragging=!1))}}},g=n(89);const m=(0,g.Z)(f,[["render",b],["__scopeId","data-v-40efea73"]]);var w=m,C=n.p+"img/edit.2dd0abc5.svg";const S={id:"container"},y={className:"header-bar"},k=["onClick"],_={className:"button-container"},$=["onClick"],D=["onClick"],x=["onClick"];function N(e,t,n,i,r,s){return(0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("button",{className:"btn green-btn",id:"create-btn",onClick:t[0]||(t[0]=()=>{this.$parent.pushEmptySet()})},"Create new set"),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.$parent.appdata.sets,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{className:"set-container wnd",key:e.name},[(0,a._)("div",y,[(0,a._)("header",null,(0,o.zw)(e.name),1),(0,a._)("img",{onClick:()=>{s.editName(t)},src:C},null,8,k)]),(0,a._)("div",_,[(0,a._)("button",{className:"btn yellow-btn",onClick:()=>{s.editCards(t)}},"Edit cards",8,$),(0,a._)("button",{className:"btn red-btn",onClick:()=>{s.deleteSet(t)}},"Delete",8,D),(0,a._)("button",{className:"btn review-btn green-btn",onClick:()=>{s.reviewSet(t)}},"Review",8,x)])])))),128))])}var M={name:"SetList",mounted(){},data(){return{renaming:!1}},methods:{editCards(e){this.$parent.selectedSet=e,this.$parent.action="edit"},editName(e){const t=prompt("Change name",this.$parent.appdata.sets[e].name);null!==t&&(this.$parent.appdata.sets[e].name=t,this.$parent.syncData())},reviewSet(e){this.$parent.selectedSet=e,this.$parent.action="review"},deleteSet(e){window.confirm("Are you sure, that you want to delete '"+this.$parent.appdata.sets[e].name+"' set?")&&(this.$parent.appdata.sets.splice(e,1),this.$parent.syncData())}}};const E=(0,g.Z)(M,[["render",N],["__scopeId","data-v-08c3e7e2"]]);var O=E;const T={id:"container"},I={class:"main-button-container"},L={id:"cardlist"},U=["onClick"],j={class:"bold"},J=["onClick"],X=["onClick"],H=["onClick"];function V(e,t,n,r,s,d){return(0,a.wg)(),(0,a.iD)("div",T,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.visible=e),type:"textbox",placeholder:"Visible side"},null,512),[[i.nr,s.visible]]),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.invisible=e),type:"textbox",placeholder:"Invisible side"},null,512),[[i.nr,s.invisible]]),(0,a._)("div",I,[(0,a._)("button",{id:"exit-btn",class:"btn red-btn",onClick:t[2]||(t[2]=()=>{e.$parent.action="menu"})},"Exit"),(0,a._)("button",{id:"add-btn",class:"btn green-btn",onClick:t[3]||(t[3]=()=>{d.pushNewCard()})},"Add")]),(0,a._)("div",L,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.$parent.getSelectedSet().cardlist,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:e.name,class:"card wnd",onClick:()=>s.selectedIndex=t},[(0,a._)("header",j,(0,o.zw)(e.invisible),1),(0,a._)("header",{class:(0,o.C_)({nodisplay:s.selectedIndex!=t})},(0,o.zw)(e.visible),3),(0,a._)("div",{class:(0,o.C_)([{nodisplay:s.selectedIndex!=t},"button-container"])},[(0,a._)("button",{className:"btn yellow-btn",onClick:()=>{d.editVisible(t)}},"Edit visible",8,J),(0,a._)("button",{className:"btn yellow-btn",onClick:()=>{d.editInvisible(t)}},"Edit invisible",8,X),(0,a._)("button",{className:"btn red-btn delete-btn",onClick:()=>{d.deleteCard(t)}},"Delete",8,H)],2)],8,U)))),128))])])}const A={correct:0,wrong:0,hideUntil:new Date(0),learned:!1};var P={name:"AddCards",mounted(){},data(){return{invisible:"",visible:"",selectedIndex:0}},methods:{editVisible(e){const t=prompt("Change name",this.$parent.getSelectedSet().cardlist[e].visible);null!==t&&(this.$parent.getSelectedSet().cardlist[e].visible=t,this.$parent.syncData())},editInvisible(e){const t=prompt("Change name",this.$parent.getSelectedSet().cardlist[e].invisible);null!==t&&(this.$parent.getSelectedSet().cardlist[e].invisible=t,this.$parent.syncData())},deleteCard(e){window.confirm("Are you sure, that you want to delete this card?")&&(this.$parent.getSelectedSet().cardlist.splice(e,1),this.$parent.syncData())},pushNewCard(){let e=JSON.parse(JSON.stringify(A));e.invisible=this.invisible,e.visible=this.visible,this.invisible&&this.visible&&(this.$parent.getSelectedSet().cardlist.push(e),this.$parent.syncData())}}};const F=(0,g.Z)(P,[["render",V],["__scopeId","data-v-a1e2f16a"]]);var z=F;const Z={sets:[]},q={name:"Unnamed set",cardlist:[]};var Y={name:"App",created(){localStorage.config||(localStorage.config=JSON.stringify(Z)),this.appdata=JSON.parse(localStorage.config)},data(){return{action:"menu",selectedSet:0,appdata:JSON.parse(JSON.stringify(Z))}},methods:{pushEmptySet(){this.appdata.sets.push(JSON.parse(JSON.stringify(q))),this.syncData()},getSelectedSet(){return this.appdata.sets[this.selectedSet]},syncData(){localStorage.config=JSON.stringify(this.appdata)}},components:{CardView:w,SetList:O,AddCards:z}};const K=(0,g.Z)(Y,[["render",s]]);var W=K;(0,i.ri)(W).mount("#app")}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,r){if(!i){var s=1/0;for(c=0;c<e.length;c++){i=e[c][0],a=e[c][1],r=e[c][2];for(var o=!0,d=0;d<i.length;d++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[d])}))?i.splice(d--,1):(o=!1,r<s&&(s=r));if(o){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/MemoFlashcards/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,r,s=i[0],o=i[1],d=i[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(d)var c=d(n)}for(t&&t(i);l<s.length;l++)r=s[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},i=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8940)}));i=n.O(i)})();
//# sourceMappingURL=app.d56af7b3.js.map