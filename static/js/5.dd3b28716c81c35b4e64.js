webpackJsonp([5],{"5a07":function(t,e){t.exports=function(t,e,r){if(t.filter)return t.filter(e,r);if(void 0===t||null===t)throw new TypeError;if("function"!=typeof e)throw new TypeError;for(var i=[],a=0;a<t.length;a++)if(n.call(t,a)){var s=t[a];e.call(r,s,a,t)&&i.push(s)}return i};var n=Object.prototype.hasOwnProperty},"95WP":function(t,e){},GgHc:function(t,e){},JRhT:function(t,e){t.exports=function(t,e){if(t.map)return t.map(e);for(var r=[],i=0;i<t.length;i++){var a=t[i];n.call(t,i)&&r.push(e(a,i,t))}return r};var n=Object.prototype.hasOwnProperty},bpO5:function(t,e){},dQgk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("3cXf"),i=n.n(r),a=n("dJYW"),s=n("Q/W4"),l=n("hRKE"),u=n.n(l),o=n("tJWq"),c=(Number,String,String,String,String,String,{name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){var t={"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction};return t}}}),h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===this.orient,"vux-flex-row":"horizontal"===this.orient},style:this.styles},[this._t("default")],2)},staticRenderFns:[]};var p=n("C7Lr")(c,h,!1,function(t){n("bpO5")},null,null).exports,d=(Number,String,Number,String,["-moz-box-","-webkit-box-",""]),f={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var n=0;n<d.length;n++)t[d[n]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-flexbox-item",style:this.style},[this._t("default")],2)},staticRenderFns:[]},v=n("C7Lr")(f,m,!1,null,null,null).exports,g=n("AA3o"),x=n.n(g),b=n("xSur"),y=n.n(b),C=n("5a07"),_=n.n(C),w=function(){function t(e,n,r){x()(this,t),this.data=e,this.count=n,r&&(this.fixedColumns=r)}return y()(t,[{key:"getChildren",value:function(t){return _()(this.data,function(e){return e.parent===t})}},{key:"getFirstColumn",value:function(){return _()(this.data,function(t){return!t.parent||0===t.parent||"0"===t.parent})}},{key:"getPure",value:function(t){return JSON.parse(i()(t))}},{key:"getColumns",value:function(t){var e=this;t.length>0&&(this.getPure(this.data).filter(function(n){return e.getPure(t).indexOf(n.value)>-1}).length<this.getPure(t).length&&(t=[]));for(var n=[],r=this.fixedColumns||8,i=0;i<r;i++)if(0===i)n.push(this.getFirstColumn());else if(t[i])n.push(this.getChildren(t[i-1]));else{if(void 0===n[i-1][0])break;var a=n[i-1][0].value;n.push(this.getChildren(a))}var s=n.filter(function(t){return t.length>0});return this.count=s.length,s}}]),t}(),k=n("JRhT"),S=n.n(k),V=n("qZvt"),$=n.n(V),T=function(t,e,n){if(t&&!e.length)return"";n||(n=" ");var r=S()(t,function(t,n){return e.length&&"[object Array]"===Object.prototype.toString.call(e[0])?$()(e[n],function(e){return e.value===t}):$()(e,function(e){return e.value===t})});return r=r.filter(function(t){return void 0!==t}),S()(r,function(t){return t.name}).join(n).replace("--","")},D=(Array,Number,Number,Array,String,Array,{name:"picker",components:{Flexbox:p,FlexboxItem:v},created:function(){if(0!==this.columns){var t=this.columns;this.store=new w(this.data,t,this.fixedColumns||this.columns),this.currentData=this.store.getColumns(this.value)}},mounted:function(){var t=this;this.uuid=Math.random().toString(36).substring(3,8),this.$nextTick(function(){t.render(t.currentData,t.currentValue)})},props:{data:Array,columns:{type:Number,default:0},fixedColumns:{type:Number,default:0},value:Array,itemClass:{type:String,default:"scroller-item"},columnWidth:Array},methods:{getNameValues:function(){return T(this.currentValue,this.data)},getId:function(t){return"#vux-picker-"+this.uuid+"-"+t},render:function(t,e){this.count=this.currentData.length;var n=this;if(t&&t.length){var r=this.currentData.length;if(e.length<r)for(var i=0;i<r;i++)this.$set(n.currentValue,i,t[i][0].value||t[i][0]);for(var a=function(r){if(!document.querySelector(n.getId(r)))return{v:void 0};n.scroller[r]&&n.scroller[r].destroy(),n.scroller[r]=new o.a(n.getId(r),{data:t[r],defaultValue:e[r]||t[r][0].value,itemClass:n.itemClass,onSelect:function(t){n.$set(n.currentValue,r,t),(!this.columns||this.columns&&n.getValue().length===n.store.count)&&n.$nextTick(function(){n.$emit("on-change",n.getValue())}),0!==n.columns&&n.renderChain(r+1)}}),n.currentValue&&n.scroller[r].select(e[r])},s=0;s<t.length;s++){var l=a(s);if("object"===(void 0===l?"undefined":u()(l)))return l.v}}},renderChain:function(t){if(this.columns&&!(t>this.count-1)){var e=this,n=this.getId(t);this.scroller[t].destroy();var r=this.store.getChildren(e.getValue()[t-1]);this.scroller[t]=new o.a(n,{data:r,itemClass:e.item_class,onSelect:function(n){e.$set(e.currentValue,t,n),e.$nextTick(function(){e.$emit("on-change",e.getValue())}),e.renderChain(t+1)}}),r.length?(this.$set(this.currentValue,t,r[0].value),this.renderChain(t+1)):this.$set(this.currentValue,t,null)}},getValue:function(){for(var t=[],e=0;e<this.currentData.length;e++){if(!this.scroller[e])return[];t.push(this.scroller[e].value)}return t},emitValueChange:function(t){(!this.columns||this.columns&&t.length===this.store.count)&&this.$emit("on-change",t)}},data:function(){return{scroller:[],count:0,uuid:"",currentData:this.data,currentValue:this.value}},watch:{value:function(t){i()(t)!==i()(this.currentValue)&&(this.currentValue=t)},currentValue:function(t,e){if(this.$emit("input",t),0!==this.columns)t.length>0?i()(t)!==i()(e)&&(this.currentData=this.store.getColumns(t),this.$nextTick(function(){this.render(this.currentData,t)})):this.render(this.currentData,[]);else if(t.length)for(var n=0;n<t.length;n++)this.scroller[n]&&this.scroller[n].value!==t[n]&&this.scroller[n].select(t[n]);else this.render(this.currentData,[])},data:function(t){i()(t)!==i()(this.currentData)&&(this.currentData=t)},currentData:function(t){var e=this;if("[object Array]"===Object.prototype.toString.call(t[0]))this.$nextTick(function(){e.render(t,e.currentValue),e.$nextTick(function(){e.emitValueChange(e.getValue()),i()(e.getValue())!==i()(e.currentValue)&&(!e.columns||e.columns&&e.getValue().length===e.store.count)&&(e.currentValue=e.getValue())})});else if(0!==this.columns){if(!t.length)return;var n=this.columns;this.store=new w(t,n,this.fixedColumns||this.columns),this.currentData=this.store.getColumns(this.currentValue)}}},beforeDestroy:function(){for(var t=0;t<this.count;t++)this.scroller[t]&&this.scroller[t].destroy(),this.scroller[t]=null}}),N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-picker"},[n("flexbox",{attrs:{gutter:0}},t._l(t.currentData,function(e,r){return n("flexbox-item",{key:r,staticStyle:{"margin-left":"0"},attrs:{span:t.columnWidth&&t.columnWidth[r]}},[n("div",{staticClass:"vux-picker-item",attrs:{id:"vux-picker-"+t.uuid+"-"+r}})])}),1)],1)},staticRenderFns:[]};var P=n("C7Lr")(D,N,!1,function(t){n("pqOo")},null,null).exports,j=n("0+Q0"),A=n("C5VE"),O=(String,String,String,Boolean,{name:"popup-header",props:{leftText:String,rightText:String,title:String,showBottomBorder:{type:Boolean,default:!0}}}),F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-popup-header",class:t.showBottomBorder?"vux-1px-b":""},[n("div",{staticClass:"vux-popup-header-left",on:{click:function(e){return t.$emit("on-click-left")}}},[t._t("left-text",[t._v(t._s(t.leftText))])],2),t._v(" "),n("div",{staticClass:"vux-popup-header-title"},[t._t("title",[t._v(t._s(t.title))])],2),t._v(" "),n("div",{staticClass:"vux-popup-header-right",on:{click:function(e){return t.$emit("on-click-right")}}},[t._t("right-text",[t._v(t._s(t.rightText))])],2)])},staticRenderFns:[]};var W=n("C7Lr")(O,F,!1,function(t){n("rqWf")},null,null).exports,B=n("4a+h"),H=function(t){return 1===t.length?t[0]:t.join(" ")},I=n("fwhU"),Y=n("uiKT"),M=(Y.a,I.a,j.a,A.a,B.a,String,String,String,String,Array,String,Number,Number,Array,Boolean,String,Number,Array,Object,Boolean,Boolean,Boolean,Function,Boolean,Array,Object,String,Boolean,function(t){return JSON.parse(i()(t))}),R={name:"popup-picker",directives:{TransferDom:Y.a},created:function(){void 0!==this.show&&(this.showValue=this.show)},mixins:[I.a],components:{Picker:P,Cell:j.a,Popup:A.a,PopupHeader:W,Flexbox:p,FlexboxItem:v,InlineDesc:B.a},filters:{array2string:H,value2name:T},props:{valueTextAlign:{type:String,default:"right"},title:String,cancelText:String,confirmText:String,data:{type:Array,default:function(){return[]}},placeholder:String,columns:{type:Number,default:0},fixedColumns:{type:Number,default:0},value:{type:Array,default:function(){return[]}},showName:Boolean,inlineDesc:[String,Number,Array,Object,Boolean],showCell:{type:Boolean,default:!0},show:Boolean,displayFormat:Function,isTransferDom:{type:Boolean,default:!0},columnWidth:Array,popupStyle:Object,popupTitle:String,disabled:Boolean},computed:{labelStyles:function(){return{display:"block",width:this.$parent&&(this.$parent.labelWidth||this.$parent.$parent.labelWidth)||"auto",textAlign:this.$parent&&(this.$parent.labelAlign||this.$parent.$parent.labelAlign),marginRight:this.$parent&&(this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight)}},labelClass:function(){return{"vux-cell-justify":this.$parent&&("justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign)}}},methods:{value2name:T,getNameValues:function(){return T(this.currentValue,this.data)},onClick:function(){this.disabled||(this.showValue=!0)},onHide:function(t){this.showValue=!1,t&&(this.closeType=!0,this.currentValue=M(this.tempValue)),t||(this.closeType=!1,this.value.length>0&&(this.tempValue=M(this.currentValue)))},onPopupShow:function(){this.closeType=!1,this.$emit("on-show")},onPopupHide:function(t){this.value.length>0&&(this.tempValue=M(this.currentValue)),this.$emit("on-hide",this.closeType)},onPickerChange:function(t){if(i()(this.currentValue)!==i()(t)&&this.value.length){var e=i()(this.data);e!==this.currentData&&"[]"!==this.currentData&&(this.tempValue=M(t)),this.currentData=e}var n=M(t);this.$emit("on-shadow-change",n,T(n,this.data).split(" "))}},watch:{value:function(t){i()(t)!==i()(this.tempValue)&&(this.tempValue=M(t),this.currentValue=M(t))},currentValue:function(t){this.$emit("input",M(t)),this.$emit("on-change",M(t))},show:function(t){this.showValue=t},showValue:function(t){this.$emit("update:show",t)}},data:function(){return{onShowProcess:!1,tempValue:M(this.value),closeType:!1,currentData:i()(this.data),showValue:!1,currentValue:this.value}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-cell-box"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showCell,expression:"showCell"}],staticClass:"weui-cell vux-tap-active",class:{"weui-cell_access":!t.disabled},on:{click:t.onClick}},[n("div",{staticClass:"weui-cell__hd"},[t._t("title",[t.title?n("label",{staticClass:"weui-label",class:t.labelClass,style:t.labelStyles,domProps:{innerHTML:t._s(t.title)}}):t._e()],{labelClass:"weui-label",labelStyle:t.labelStyles,labelTitle:t.title}),t._v(" "),t.inlineDesc?n("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()],2),t._v(" "),n("div",{staticClass:"vux-cell-primary vux-popup-picker-select-box"},[n("div",{staticClass:"vux-popup-picker-select",style:{textAlign:t.valueTextAlign}},[t.displayFormat||t.showName||!t.value.length?t._e():n("span",{staticClass:"vux-popup-picker-value vux-cell-value"},[t._v(t._s(t._f("array2string")(t.value)))]),t._v(" "),!t.displayFormat&&t.showName&&t.value.length?n("span",{staticClass:"vux-popup-picker-value vux-cell-value"},[t._v(t._s(t._f("value2name")(t.value,t.data)))]):t._e(),t._v(" "),t.displayFormat&&t.value.length?n("span",{staticClass:"vux-popup-picker-value vux-cell-value"},[t._v(t._s(t.displayFormat(t.value,t.value2name(t.value,t.data))))]):t._e(),t._v(" "),!t.value.length&&t.placeholder?n("span",{staticClass:"vux-popup-picker-placeholder vux-cell-placeholder",domProps:{textContent:t._s(t.placeholder)}}):t._e()])]),t._v(" "),n("div",{staticClass:"weui-cell__ft"})]),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom",value:t.isTransferDom,expression:"isTransferDom"}]},[n("popup",{staticClass:"vux-popup-picker",attrs:{id:"vux-popup-picker-"+t.uuid,"popup-style":t.popupStyle},on:{"on-hide":t.onPopupHide,"on-show":t.onPopupShow},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"vux-popup-picker-container"},[n("popup-header",{attrs:{"left-text":t.cancelText||"取消","right-text":t.confirmText||"完成",title:t.popupTitle},on:{"on-click-left":function(e){return t.onHide(!1)},"on-click-right":function(e){return t.onHide(!0)}}}),t._v(" "),n("picker",{attrs:{data:t.data,columns:t.columns,"fixed-columns":t.fixedColumns,container:"#vux-popup-picker-"+t.uuid,"column-width":t.columnWidth},on:{"on-change":t.onPickerChange},model:{value:t.tempValue,callback:function(e){t.tempValue=e},expression:"tempValue"}})],1)])],1)])},staticRenderFns:[]};var J=n("C7Lr")(R,E,!1,function(t){n("GgHc")},null,null).exports,L=n("KiN3"),q=n("eFjK"),z=n("5I+0"),K=function(t){return Object(z.a)("post","/api/goodsSubmit",t)},G=(a.a,s.a,L.a,{name:"OrderConfirm",data:function(){return{orderTime:this.getNow(),minutes:["00","15","30","45"],list1:[[1,2,3,4,5]],numbers:[1],phone:this.getPhoneNumber(),remark:""}},components:{Datetime:a.a,Group:s.a,PopupPicker:J,XInput:L.a},computed:{foods:function(){return JSON.parse(localStorage.getItem("carts"))},totalPrice:function(){return this.foods.reduce(function(t,e,n,r){return t+e.price*e.number},0)},startDate:function(){return Object(q.a)(new Date,"YYYY-MM-DD")}},methods:{getNow:function(){return Object(q.a)(new Date,"YYYY-MM-DD HH:mm")},handleSubmit:function(){var t=this,e=i()({telephone:this.phone,count:this.numbers[0],time:this.orderTime,remark:this.remark,goods:this.foods,totalPrice:this.totalPrice});K(e).then(function(e){console.log(e),200===e.data.code&&(t.$emit("submitOrder"),t.$router.push("/pay/"+e.data.orderId))})},getPhoneNumber:function(){return JSON.parse(localStorage.getItem("userInfo")).telephone},handleHide:function(){this.$emit("hideConfirm")}}}),Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"confirm"},[n("h2",{staticClass:"title"},[n("i",{staticClass:"iconfont",on:{click:t.handleHide}},[t._v("")]),t._v(" 确认订单")]),t._v(" "),n("div",{staticClass:"form-container"},[n("group",{staticClass:"group"},[n("datetime",{attrs:{placeholder:"请选择时间","min-year":2019,"max-year":2020,"min-hour":8,"max-hour":20,"start-date":t.startDate,format:"YYYY-MM-DD HH:mm","minute-list":t.minutes,title:"预定时间"},model:{value:t.orderTime,callback:function(e){t.orderTime=e},expression:"orderTime"}})],1),t._v(" "),n("group",{staticClass:"group"},[n("popup-picker",{attrs:{title:"选择人数",data:t.list1},model:{value:t.numbers,callback:function(e){t.numbers=e},expression:"numbers"}})],1),t._v(" "),n("group",{staticClass:"group"},[n("x-input",{attrs:{title:"联系电话",mask:"999 9999 9999",max:13,"is-type":"china-mobile",placeholder:"请输入您的电话号码","show-clear":!1},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),n("ul",{staticClass:"food-list"},t._l(t.foods,function(e){return n("li",{key:e.id,staticClass:"list-item"},[n("img",{staticClass:"left-img",attrs:{src:e.imgUrl,alt:"food.title"}}),t._v(" "),n("div",{staticClass:"item-right"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[n("span",[t._v("￥"+t._s(e.price))]),t._v(" "),n("span",{staticClass:"number"},[t._v("x"+t._s(e.number))])])])])}),0),t._v(" "),n("group",{staticClass:"group"},[n("x-input",{attrs:{title:"备注",placeholder:"如需要,请输入备注","show-clear":!1},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),t._v(" "),n("footer",[n("span",{staticClass:"total-price"},[t._v("实付款: ￥"+t._s(t.totalPrice))]),t._v(" "),n("span",{staticClass:"submit-btn",on:{click:t.handleSubmit}},[t._v("提交订单")])])])},staticRenderFns:[]};var U=n("C7Lr")(G,Q,!1,function(t){n("95WP")},"data-v-0d5b7f8a",null);e.default=U.exports},pqOo:function(t,e){},rqWf:function(t,e){}});