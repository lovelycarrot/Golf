webpackJsonp([11],{"6ctg":function(t,e){},"A/qo":function(t,e){},IPga:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("wo1D"),i=n("a3Yh"),r=n.n(i),s=n("3cXf"),o=n.n(s),h=n("L+q8");function u(t){return t<10?"0"+t:t}function l(t,e){return 0===e?{month:11,year:t-1}:{year:t,month:e-1}}function c(t,e){return 11===e?{month:0,year:t+1}:{year:t,month:e+1}}function d(t){return"number"==typeof t?t:"string"==typeof t?new Date(t.replace(/-/g,"/")).getTime():t.getTime()}function m(t,e,n,a,i){var r=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments[2],a=arguments[3],i=new Date;i.setHours(0,0,0,0),t&&(n=n?Math.max(i.getTime(),d(n)):i);e&&(a=a?Math.min(i.getTime(),d(a)):i);return{start:n,end:a}}(e,n,a,i),s=r.start,o=r.end;t=d(t);var h=!s||t>=d(s),u=!o||t<=d(o);return h&&u}function f(t){var e=t.year,n=t.month,a=t.value,i=(t.rangeBegin,t.rangeEnd,t.returnSixRows),r=void 0===i||i,s=Object(h.a)(new Date,"YYYY-MM-DD"),o=function(t){var e=t.split("-");return{year:parseInt(e[0],10),month:parseInt(e[1],10)-1,day:parseInt(e[2],10)}}(a||s);("number"!=typeof e||"number"!=typeof n||n<0)&&(e=o.year,n=o.month);var u,d=new Date(e,n,1).getDay(),m=new Date(e,n+1,0).getDate(),f=new Date(e,n,0).getDate(),v=0,y=[];for(u=1;u<=m;u++){var p=new Date(e,n,u).getDay();if(0===p)y[v]=[];else if(1===u){y[v]=[];for(var w=f-d+1,D=0;D<d;D++){var g=l(e,n);y[v].push({year:g.year,month:g.month,month_str:g.month+1,day:w,isLastMonth:!0}),w++}}var M=Object(h.a)(new Date(e+"/"+(n+1)+"/"+u),"YYYY/MM/DD"),x={year:e,month:n,month_str:n+1,day:u,isCurrent:a&&Object(h.a)(new Date(a),"YYYY/MM/DD")===M,isToday:Object(h.a)(new Date,"YYYY/MM/DD")===M};if(y[v].push(x),6===p)v++;else if(u===m)for(var _=1;p<6;p++){var b=c(e,n);y[v].push({year:b.year,month:b.month,month_str:b.month+1,day:_,isNextMonth:!0}),_++}}if(r&&5===y.length){var C=c(e,n),V=y[4][6].isNextMonth?y[4][6].day:0;y[5]=[];for(var k=0;k<7;k++){var Y=++V;y[5].push({year:C.year,month:C.month,month_str:C.month+1,day:Y,isNextMonth:!0})}}if(r&&4===y.length){var T=c(e,n),L=0;y[4]=[],y[5]=[];for(var S=0;S<7;S++){var j=++L;y[4].push({year:T.year,month:T.month,month_str:T.month+1,day:j,isNextMonth:!0}),j=++L,y[5].push({year:T.year,month:T.month,month_str:T.month+1,day:j,isNextMonth:!0})}}return{year:e,month:n,month_str:n+1,days:y.map(function(t){return t.map(function(t,e){return t.date=t.day,t.weekDay=e,t.isWeekend=0===e||6===e,t.formatedDate=Object(h.a)(new Date(t.year+"/"+t.month_str+"/"+t.date),"YYYY-MM-DD"),t}),t})}}var v=function(){return{value:{type:[String,Array],default:""},renderMonth:{type:Array,default:function(){return[null,null]}},startDate:{type:String},endDate:{type:String},showLastMonth:{type:Boolean,default:!0},showNextMonth:{type:Boolean,default:!0},highlightWeekend:{type:Boolean,default:!1},returnSixRows:{type:Boolean,default:!0},hideHeader:{type:Boolean,default:!1},hideWeekList:{type:Boolean,default:!1},replaceTextList:{type:Object,default:function(){return{}}},weeksList:{type:Array,validator:function(t){return!t||(7===t.length||0===t.length)}},renderFunction:{type:Function,default:function(){return""}},renderOnValueChange:{type:Boolean,default:!0},disablePast:{type:Boolean,default:!1},disableFuture:{type:Boolean,default:!1},disableWeekend:{type:Boolean,default:!1},disableDateFunction:Function,marks:{type:Array,default:function(){return[]}}}},y={methods:{isShowBottomDot:function(t){if(this.marks.length){var e=this.marks.filter(function(e){return e.date===t.formatedDate});return!(!e.length||!e[0].bottomDot)}},isShowTopTip:function(t,e){if(this.marks.length){var n=this.marks.filter(function(e){return e.date===t.formatedDate});if(n.length){var a=n[0];if(a.topTip)return"style"===e?{color:a.topTip.color}:"text"!==e||a.topTip.text}return!1}},getMarkStyle:function(t){if(this.marks.length){var e=this.marks.filter(function(e){return e.date===t.formatedDate}),n=t.formatedDate===this.currentValue;return e.length?{backgroundColor:n?"":e[0].backgroundColor,color:n?"":e[0].color,border:n?"":e[0].border}:void 0}}}},p=(v(),{name:"inline-calendar",mixins:[y],props:v(),data:function(){return{multi:!1,year:0,month:0,days:[],today:Object(h.a)(new Date,"YYYY-MM-DD"),months:["1","2","3","4","5","6","7","8","9","10","11","12"],currentValue:"",viewChangeEventCount:-1}},created:function(){if(this.currentValue=this.value,this.multi="[object Array]"===Object.prototype.toString.call(this.currentValue),this.multi)for(var t=0;t<this.currentValue.length;t++)this.$set(this.currentValue,t,this.convertDate(this.currentValue[t]));else this.currentValue=this.convertDate(this.currentValue);this.render(this.renderMonth[0],this.renderMonth[1]-1)},computed:{_weeksList:function(){return this.weeksList&&this.weeksList.length?this.weeksList:this.weeksList&&this.weeksList.length?void 0:["日","一","二","三","四","五","六"]},_replaceTextList:function(){var t={};for(var e in this.replaceTextList)t[this.convertDate(e)]=this.replaceTextList[e];return t},currentYearMonth:function(){return this.year+this.month}},watch:{value:function(t){this.currentValue=this.multi?t:this.convertDate(t)},currentValue:function(t,e){if(this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue),this.renderOnValueChange){if(t&&e&&t.slice(0,7)===e.slice(0,7))return;this.render(null,null,"value change")}},renderFunction:function(){this.render(this.year,this.month,this.currentValue)},renderMonth:function(t){t&&2===t.length&&this.render(t[0],t[1]-1)},returnSixRows:function(t){this.render(this.year,this.month)},startDate:function(t){this.render(this.year,this.month)},endDate:function(t){this.render(this.year,this.month)},disablePast:function(){this.render(this.year,this.month)},disableFuture:function(){this.render(this.year,this.month)},currentYearMonth:function(){var t=this.days[this.days.length-1],e=t[t.length-1],n=[];this.days.forEach(function(t){n=n.concat(t)}),n=n.filter(function(t){return!t.isLastMonth&&!t.isNextMonth}),this.viewChangeEventCount++,this.$emit("on-view-change",{year:this.year,month:this.month+1,firstDate:this.days[0][0].formatedDate,lastDate:e.formatedDate,firstCurrentMonthDate:n[0].formatedDate,lastCurrentMonthDate:n[n.length-1].formatedDate,allDates:this.days},this.viewChangeEventCount)}},methods:{processDateItem:function(t){var e=JSON.parse(o()(t));return e.isDisabled=this.isDisabled(t),e.isBetween=this.isBetween(t.formatedDate),e},isBetween:function(t){return m(t,this.disablePast,this.disableFuture,this.startDate,this.endDate)},isDisabled:function(t){var e=!this.isBetween(t.formatedDate);if(e=(e=e||t.isWeekend&&this.disableWeekend)||t.isNextMonth||t.isLastMonth,this.disableDateFunction){var n=this.disableDateFunction(t);return void 0===n?e:n}return e},switchViewToToday:function(){var t=new Date;this.render(t.getFullYear(),t.getMonth())},switchViewToCurrentValue:function(){if(this.currentValue&&(!this.multi||this.currentValue.length)){var t,e,n=("string"==typeof this.currentValue?this.currentValue:this.currentValue[0]).split("-");t=parseInt(n[0],10),e=parseInt(n[1],10),this.switchViewToMonth(t,e)}},switchViewToMonth:function(t,e){if(!t||!e)return this.switchViewToToday();this.render(t,e-1)},getDates:function(){return this.days},replaceText:function(t,e){var n=this._replaceTextList[e];return n||void 0!==n?n:t},convertDate:function(t){return"TODAY"===t?this.today:t},buildClass:function(t,e){var n=!1;return e.isLastMonth||e.isNextMonth||(n=this.multi&&this.currentValue.length>0?this.currentValue.indexOf(this.formatDate(this.year,this.month,e))>-1:this.currentValue===this.formatDate(this.year,this.month,e)),r()({current:n,"is-disabled":this.isDisabled(e),"is-today":e.isToday},"is-week-"+t,!0)},render:function(t,e){var n,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n=f({year:t,month:e,value:this.multi?this.currentValue[this.currentValue.length-1]:this.currentValue,rangeBegin:this.convertDate(this.startDate),rangeEnd:this.convertDate(this.endDate),returnSixRows:this.returnSixRows,disablePast:this.disablePast,disableFuture:this.disableFuture}),(this.year!==n.year||this.month!==n.month||a)&&(this.year=n.year,this.month=n.month,this.days=n.days)},formatDate:function(t,e,n){return[t,u(n.month+1),u(n.day)].join("-")},prev:function(){0===this.month?(this.month=11,this.year=this.year-1):this.month=this.month-1,this.render(this.year,this.month,!0)},next:function(){11===this.month?(this.month=0,this.year=this.year+1):this.month=this.month+1,this.render(this.year,this.month,!0)},go:function(t,e){this.render(t,e,!0)},select:function(t,e,n){if((!n.isLastMonth||this.showLastMonth)&&(!n.isNextMonth||this.showNextMonth)&&this.isBetween(n.formatedDate)){if(this.isDisabled(n)){if(!this.isBetween(n.formatedDate))return;if(this.disableDateFunction&&this.disableDateFunction(n))return;if(n.isWeekend&&this.disableWeekend)return}var a=null;if(n.isLastMonth||n.isNextMonth?a=[n.year,u(n.month+1),u(n.day)].join("-"):(this.days[t][e].current=!0,a=[this.year,u(this.month+1),u(this.days[t][e].day)].join("-")),this.multi){var i=this.currentValue.indexOf(a);i>-1?this.currentValue.splice(i,1):this.currentValue.push(a)}else this.currentValue=a,this.$emit("on-select-single-date",this.currentValue);if(this.multi)for(var r=0;r<this.currentValue.length;r++)this.$set(this.currentValue,r,this.convertDate(this.currentValue[r]));else this.currentValue=this.convertDate(this.currentValue);this.renderOnValueChange&&this.render(null,null)}},showChild:function(t,e,n){return!!this.replaceText(n.day,this.formatDate(t,e,n))&&(!n.isLastMonth&&!n.isNextMonth||n.isLastMonth&&this.showLastMonth||n.isNextMonth&&this.showNextMonth)}}}),w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inline-calendar",class:{"is-weekend-highlight":t.highlightWeekend}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.hideHeader,expression:"!hideHeader"}],staticClass:"calendar-header"},[n("div",{staticClass:"calendar-year"},[n("span",{on:{click:function(e){return t.go(t.year-1,t.month)}}},[n("a",{staticClass:"year-prev vux-prev-icon",attrs:{href:"javascript:"}})]),t._v(" "),n("a",{staticClass:"calendar-year-txt calendar-title",attrs:{href:"javascript:"}},[t._v(t._s(t.year))]),t._v(" "),n("span",{staticClass:"calendar-header-right-arrow",on:{click:function(e){return t.go(t.year+1,t.month)}}},[n("a",{staticClass:"year-next vux-next-icon",attrs:{href:"javascript:"}})])]),t._v(" "),n("div",{staticClass:"calendar-month"},[n("span",{on:{click:t.prev}},[n("a",{staticClass:"month-prev vux-prev-icon",attrs:{href:"javascript:"}})]),t._v(" "),n("a",{staticClass:"calendar-month-txt calendar-title",attrs:{href:"javascript:"}},[t._v(t._s(t.months[t.month]))]),t._v(" "),n("span",{staticClass:"calendar-header-right-arrow",on:{click:t.next}},[n("a",{staticClass:"month-next vux-next-icon",attrs:{href:"javascript:"}})])])]),t._v(" "),n("table",[n("thead",{directives:[{name:"show",rawName:"v-show",value:!t.hideWeekList,expression:"!hideWeekList"}]},[n("tr",t._l(t._weeksList,function(e,a){return n("th",{staticClass:"week",class:"is-week-list-"+a},[t._v(t._s(e||e))])}),0)]),t._v(" "),n("tbody",t._l(t.days,function(e,a){return n("tr",t._l(e,function(e,i){return n("td",{class:t.buildClass(i,e),attrs:{"data-date":t.formatDate(t.year,t.month,e),"data-current":t.currentValue},on:{click:function(n){return t.select(a,i,e)}}},[t._t("each-day",[n("span",{directives:[{name:"show",rawName:"v-show",value:t.showChild(t.year,t.month,e),expression:"showChild(year, month, child)"}],staticClass:"vux-calendar-each-date",style:t.getMarkStyle(e)},[t._v("\n              "+t._s(t.replaceText(e.day,t.formatDate(t.year,t.month,e)))+"\n              "),t.isShowTopTip(e)?n("span",{staticClass:"vux-calendar-top-tip",style:t.isShowTopTip(e,"style")},[n("span",[t._v(t._s(t.isShowTopTip(e,"text")))])]):t._e()]),t._v(" "),t.isShowBottomDot(e)?n("span",{staticClass:"vux-calendar-dot"}):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showChild(t.year,t.month,e),expression:"showChild(year, month, child)"}],domProps:{innerHTML:t._s(t.renderFunction(a,i,e))}})],{year:t.year,month:t.month,child:t.processDateItem(e),date:t.processDateItem(e),className:"vux-calendar-each-date",row:a,col:i,rawDate:t.formatDate(t.year,t.month,e),showDate:t.replaceText(e.day,t.formatDate(t.year,t.month,e)),isShow:t.showChild(t.year,t.month,e)})],2)}),0)}),0)])])},staticRenderFns:[]};var D=n("C7Lr")(p,w,!1,function(t){n("A/qo")},null,null).exports,g=n("eFjK"),M=(a.a,g.a,{name:"Activity",data:function(){return{show:!0,value:Object(g.a)(new Date,"YYYY-MM-DD"),activities:[],timelineShow:!0}},computed:{calendar:function(){return this.$store.state.activities}},methods:{onChange:function(t){this.activities=this.$store.getters.getTodoByDate(t),this.timelineShow=this.activities.length>0},buildSlotFn:function(t,e,n){return this.has=this.calendar.find(function(t){return t.date===n.formatedDate}),this.has?'<div class="circle"></div>':""}},components:{CommonHeader:a.a,InlineCalendar:D,dateFormat:g.a},mounted:function(){this.$store.dispatch("getActivities");var t=this;setTimeout(function(){t.value=Object(g.a)(new Date,"YYYY-MM-DD")},0)}}),x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"activity-wrapper"},[n("common-header",{attrs:{to:"/",title:"活动"}}),t._v(" "),n("div",{staticClass:"content"},[n("inline-calendar",{ref:"calendar",attrs:{show:t.show,"show-next-month":!1,"show-last-month":!1,"render-function":t.buildSlotFn},on:{"on-change":t.onChange,"update:show":function(e){t.show=e}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),t.timelineShow?n("div",{staticClass:"time-line"},t._l(t.activities,function(e){return n("router-link",{key:e.id,staticClass:"timeline-item",attrs:{tag:"div",to:{name:"detail",params:{id:e.id}}}},[n("span",{staticClass:"time"},[t._v(t._s(e.time))]),t._v(" "),n("span",{staticClass:"activity"},[t._v(t._s(e.name))])])}),1):t._e()],1)],1)},staticRenderFns:[]};var _=n("C7Lr")(M,x,!1,function(t){n("6ctg")},"data-v-0b1e0c10",null);e.default=_.exports},a3Yh:function(t,e,n){"use strict";e.__esModule=!0;var a,i=n("liLe"),r=(a=i)&&a.__esModule?a:{default:a};e.default=function(t,e,n){return e in t?(0,r.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}}});