(function(){"use strict";var e={9015:function(e,t,n){var i=n(9242),r=n(3396);const s=(0,r._)("div",{id:"logo"},"MemoFlashcards",-1);function a(e,t,n,i,a,o){const d=(0,r.up)("AddCards"),l=(0,r.up)("SetList"),c=(0,r.up)("CardView");return(0,r.wg)(),(0,r.iD)(r.HY,null,[s,"edit"===a.action?((0,r.wg)(),(0,r.j4)(d,{key:0})):(0,r.kq)("",!0),"menu"===a.action?((0,r.wg)(),(0,r.j4)(l,{key:1})):(0,r.kq)("",!0),"review"===a.action?((0,r.wg)(),(0,r.j4)(c,{key:2})):(0,r.kq)("",!0)],64)}n(560);var o=n(7139);const d=e=>((0,r.dD)("data-v-9a242bc0"),e=e(),(0,r.Cn)(),e),l={id:"container"},c={id:"overflow-container",ref:"overflowcontainer"},h=d((()=>(0,r._)("p",{class:"left lr"},"I don't remember",-1))),u=d((()=>(0,r._)("p",{class:"right lr"},"I remember",-1))),p={id:"content"},v={id:"button-container"};function b(e,t,n,s,a,d){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",l,[(0,r._)("div",c,[(0,r.Wm)(i.uT,{name:"flip",onEnter:d.onEnter},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)({cardbgback:a.flipped,cardbgfront:!a.flipped}),key:a.flipping,id:"card",ref:"card",onClick:t[0]||(t[0]=e=>d.cardClick()),onMousedown:t[1]||(t[1]=(...e)=>d.cardMouseDown&&d.cardMouseDown(...e)),onTouchstart:t[2]||(t[2]=(...e)=>d.cardTouchDown&&d.cardTouchDown(...e))},[h,u,(0,r._)("p",p,(0,o.zw)(a.flipped?a.backText:a.frontText),1)],34))])),_:1},8,["onEnter"])],512)]),(0,r._)("div",v,[(0,r._)("button",{className:"btn green-btn",onClick:t[3]||(t[3]=()=>{d.getCurrentCard().learned=!0,d.nextCard()})},"Mark as learned"),(0,r._)("button",{className:"btn red-btn",onClick:t[4]||(t[4]=()=>{e.$parent.action="menu"})},"Exit")])])}var f={name:"CardView",mounted(){this.shuffleCards(),this.nextCard()},data(){return{shown:!1,answer:null,currentCard:-1,dragging:!1,baseXPos:0,frontText:"",backText:"",flipping:!1,flipped:!1}},methods:{onEnter(){this.flipped=!this.flipped},shuffleCards(){this.$parent.getSelectedSet().cardlist.sort((()=>Math.random()-.5))},getCurrentCard(){return this.$parent.getSelectedSet().cardlist[this.currentCard]},isHidden(e){return this.$parent.isHidden(e)},nextCard(){if(this.flipped=!1,this.$parent.syncData(),void 0===this.$parent.getSelectedSet().cardlist.find((e=>!this.isHidden(e))))return this.$parent.action="menu";do{this.currentCard++,this.currentCard===this.$parent.getSelectedSet().cardlist.length&&(this.currentCard=0,this.shuffleCards())}while(this.isHidden(this.getCurrentCard()));this.backText=this.getCurrentCard().invisible,this.frontText=this.getCurrentCard().visible,this.shown=!1},cardClick(){this.dragging||(this.flipping=!this.flipping)},getScreenCenter(){return window.innerWidth/2},handleMovement(e){let t=this.baseXPos-this.getScreenCenter(),n=e-150-t;this.$refs.card.style.left=n+"px";let i=this.getScreenCenter()-150-n;Math.abs(i)<1&&(i=1),this.$refs.card.style.opacity=1/(Math.abs(i)/50),Math.abs(i)>this.getScreenCenter()/2?this.answer=i>0?"left":"right":this.answer=null},mouseMove(e){this.handleMovement(e.clientX),this.dragging=!0},touchMove(e){var t="undefined"===typeof e.originalEvent?e:e.originalEvent;let n=t.touches[0]||t.changedTouches[0];this.handleMovement(n.pageX)},handleDown(){this.$refs.overflowcontainer.classList.remove("fadein"),this.$el.addEventListener("mousemove",this.mouseMove),this.$el.addEventListener("touchmove",this.touchMove),this.$el.addEventListener("mouseup",this.cardMouseUp),this.$el.addEventListener("touchend",this.cardMouseUp)},cardMouseDown(e){this.baseXPos=e.clientX,this.handleDown()},cardTouchDown(e){var t="undefined"===typeof e.originalEvent?e:e.originalEvent;let n=t.touches[0]||t.changedTouches[0];this.baseXPos=n.pageX,this.handleDown()},cardAdvance(){let e=new Date(Date.now());e.setDate(e.getDate()+this.getCurrentCard().level),this.getCurrentCard().hideUntil=e.toISOString(),this.getCurrentCard().correctStreak=0,this.getCurrentCard().level++},cardMouseUp(){if(this.$el.removeEventListener("mousemove",this.mouseMove),this.$el.removeEventListener("touchmove",this.touchMove),this.$el.removeEventListener("mouseup",this.cardMouseUp),null!==this.answer){const e=this.getCurrentCard();"left"===this.answer?(e.level=1,e.correctStreak=0):(e.correctStreak++,e.correctStreak>=3&&this.cardAdvance()),this.$refs.overflowcontainer.classList.add("fadein"),this.nextCard()}this.baseXPos=this.getScreenCenter(),this.handleMovement(this.getScreenCenter()),setTimeout((()=>this.dragging=!1))}}},g=n(89);const m=(0,g.Z)(f,[["render",b],["__scopeId","data-v-9a242bc0"]]);var C=m,w=n.p+"img/edit.2dd0abc5.svg";const S={id:"container"},y={className:"header-bar"},k=["onClick"],$={className:"button-container"},_=["onClick"],D=["onClick"],E=["onClick"];function x(e,t,n,i,s,a){return(0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("button",{className:"btn green-btn",id:"create-btn",onClick:t[0]||(t[0]=()=>{this.$parent.pushEmptySet()})},"Create new set"),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.$parent.appdata.sets,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{className:"set-container wnd",key:e.name},[(0,r._)("div",y,[(0,r._)("header",null,(0,o.zw)(e.name),1),(0,r._)("img",{onClick:()=>{a.editName(t)},src:w},null,8,k)]),(0,r._)("p",null,"Cards to review today: "+(0,o.zw)(e.cardlist.filter((e=>!a.isHidden(e))).length||"0"),1),(0,r._)("p",null,"Total cards: "+(0,o.zw)(e.cardlist.length||"0"),1),(0,r._)("div",$,[(0,r._)("button",{className:"btn yellow-btn",onClick:()=>{a.editCards(t)}},"Edit cards",8,_),(0,r._)("button",{className:"btn red-btn",onClick:()=>{a.deleteSet(t)}},"Delete",8,D),(0,r._)("button",{className:"btn review-btn green-btn",onClick:()=>{a.reviewSet(t)}},"Review",8,E)])])))),128))])}var M={name:"SetList",mounted(){},data(){return{renaming:!1}},methods:{isHidden(e){return this.$parent.isHidden(e)},editCards(e){this.$parent.selectedSet=e,this.$parent.action="edit"},editName(e){const t=prompt("Change name",this.$parent.appdata.sets[e].name);null!==t&&(this.$parent.appdata.sets[e].name=t,this.$parent.syncData())},reviewSet(e){this.$parent.selectedSet=e,this.$parent.action="review"},deleteSet(e){window.confirm("Are you sure, that you want to delete '"+this.$parent.appdata.sets[e].name+"' set?")&&(this.$parent.appdata.sets.splice(e,1),this.$parent.syncData())}}};const N=(0,g.Z)(M,[["render",x],["__scopeId","data-v-7836db2a"]]);var O=N;const T={id:"container"},I={class:"main-button-container"},L={id:"cardlist"},H=["onClick"],V={class:"bold"},U=["onClick"],j=["onClick"],A=["onClick"];function J(e,t,n,s,a,d){return(0,r.wg)(),(0,r.iD)("div",T,[(0,r.wy)((0,r._)("input",{ref:"visibleinput","onUpdate:modelValue":t[0]||(t[0]=e=>a.visible=e),type:"textbox",placeholder:"Visible side",onKeyup:t[1]||(t[1]=(0,i.D2)(((...e)=>d.onEnterVisible&&d.onEnterVisible(...e)),["enter"]))},null,544),[[i.nr,a.visible]]),(0,r.wy)((0,r._)("input",{ref:"invisibleinput","onUpdate:modelValue":t[2]||(t[2]=e=>a.invisible=e),type:"textbox",placeholder:"Invisible side",onKeyup:t[3]||(t[3]=(0,i.D2)(((...e)=>d.onEnterInvisible&&d.onEnterInvisible(...e)),["enter"]))},null,544),[[i.nr,a.invisible]]),(0,r._)("div",I,[(0,r._)("button",{id:"exit-btn",class:"btn red-btn",onClick:t[4]||(t[4]=()=>{e.$parent.action="menu"})},"Exit"),(0,r._)("button",{id:"add-btn",class:"btn green-btn",onClick:t[5]||(t[5]=()=>{d.pushNewCard()})},"Add")]),(0,r._)("div",L,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.$parent.getSelectedSet().cardlist,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:e.name,class:"card wnd",onClick:()=>a.selectedIndex=t},[(0,r._)("header",V,(0,o.zw)(e.visible),1),(0,r._)("header",{class:(0,o.C_)({nodisplay:a.selectedIndex!=t})},(0,o.zw)(e.invisible),3),(0,r._)("div",{class:(0,o.C_)([{nodisplay:a.selectedIndex!=t},"button-container"])},[(0,r._)("button",{className:"btn yellow-btn",onClick:()=>{d.editVisible(t)}},"Edit visible",8,U),(0,r._)("button",{className:"btn yellow-btn",onClick:()=>{d.editInvisible(t)}},"Edit invisible",8,j),(0,r._)("button",{className:"btn red-btn delete-btn",onClick:()=>{d.deleteCard(t)}},"Delete",8,A)],2)],8,H)))),128))])])}const X={correctStreak:0,level:1,hideUntil:new Date(0),learned:!1};var P={name:"AddCards",mounted(){},data(){return{invisible:"",visible:"",selectedIndex:0}},methods:{editVisible(e){const t=prompt("Change name",this.$parent.getSelectedSet().cardlist[e].visible);null!==t&&(this.$parent.getSelectedSet().cardlist[e].visible=t,this.$parent.syncData())},editInvisible(e){const t=prompt("Change name",this.$parent.getSelectedSet().cardlist[e].invisible);null!==t&&(this.$parent.getSelectedSet().cardlist[e].invisible=t,this.$parent.syncData())},deleteCard(e){window.confirm("Are you sure, that you want to delete this card?")&&(this.$parent.getSelectedSet().cardlist.splice(e,1),this.$parent.syncData())},pushNewCard(){let e=JSON.parse(JSON.stringify(X));e.invisible=this.invisible,e.visible=this.visible,this.invisible&&this.visible&&(this.$parent.getSelectedSet().cardlist.push(e),this.$parent.syncData()),this.invisible="",this.visible="",this.$refs.visibleinput.focus()},onEnterVisible(){this.$refs.invisibleinput.focus()},onEnterInvisible(){this.pushNewCard()}}};const z=(0,g.Z)(P,[["render",J],["__scopeId","data-v-a6774b90"]]);var K=z;const Z={sets:[]},q={name:"Unnamed set",cardlist:[]};var F={name:"App",created(){localStorage.config||(localStorage.config=JSON.stringify(Z)),this.appdata=JSON.parse(localStorage.config)},data(){return{action:"menu",selectedSet:0,appdata:JSON.parse(JSON.stringify(Z))}},methods:{isHidden(e){const t=new Date(e.hideUntil),n=new Date(Date.now());return n<t||e.learned},pushEmptySet(){this.appdata.sets.push(JSON.parse(JSON.stringify(q))),this.syncData()},getSelectedSet(){return this.appdata.sets[this.selectedSet]},syncData(){localStorage.config=JSON.stringify(this.appdata)}},components:{CardView:C,SetList:O,AddCards:K}};const Y=(0,g.Z)(F,[["render",a]]);var W=Y;(0,i.ri)(W).mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,s){if(!i){var a=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],s=e[c][2];for(var o=!0,d=0;d<i.length;d++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[d])}))?i.splice(d--,1):(o=!1,s<a&&(a=s));if(o){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/MemoFlashcards/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,s,a=i[0],o=i[1],d=i[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(d)var c=d(n)}for(t&&t(i);l<a.length;l++)s=a[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},i=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9015)}));i=n.O(i)})();
//# sourceMappingURL=app.9198fc47.js.map