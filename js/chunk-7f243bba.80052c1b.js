(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7f243bba"],{1681:function(t,e,a){},"777f":function(t,e,a){},"7a2e":function(t,e,a){"use strict";a("777f")},9636:function(t,e,a){"use strict";a.r(e);var s=a("8336"),i=a("b0af"),d=a("99d9"),o=a("62ad"),l=a("8fea"),n=a("169a"),r=a("ce7e"),c=a("132d"),u=a("891e"),h=a("0fd9"),p=a("b974"),m=a("8654"),g=a("a844"),f=(a("14d9"),a("ade3")),v=a("677a"),_=new class{constructor(){Object(f.a)(this,"BASE_URL","admin/GoodsManual/")}findAll(t,e,a=null){return v.a.doHttp(this.BASE_URL+"findAll","get",{page:t,pageSize:e,field:a})}find(t,e=null){return v.a.doHttp(this.BASE_URL+"find","get",{id:t,field:e})}create(t){return delete t.id,v.a.doHttp(this.BASE_URL+"create","post",t)}update(t){return v.a.doHttp(this.BASE_URL+"update","post",t)}delete(t){return v.a.doHttp(this.BASE_URL+"delete","post",{id:t})}},x=a("f2a1"),D={name:"GoodsManual",components:{},data:()=>({headers:[{text:"ID",value:"id",align:"center"},{text:"名称",value:"name",align:"center"},{text:"直营成本",value:"directly_cost",align:"center"},{text:"加盟成本",value:"join_cost",align:"center"},{text:"商贸成本",value:"business_cost",align:"center"},{text:"最后更新时间",value:"update_time",align:"center"},{text:"操作",value:"action",align:"center"}],items:[],pageConfig:{page:1,pageCount:1,totalDesserts:1},searchData:"",editedIndex:0,deleteDialogs:!1,editedDialogs:!1,editedData:{id:-1,name:"",step:[],directly_cost:0,join_cost:0,business_cost:0,other:""},goodsMaterials:[],editedStep:{goodsMaterialsId:0,num:0,other:""}}),created(){this.refresh()},mounted(){},methods:{refresh(){this.getAllGoodsMaterials(),this.findAll()},newCreate(){this.editedIndex=-1,this.editedData={id:-1,name:"",step:[],directly_cost:0,join_cost:0,business_cost:0,other:""},this.editedStep={goodsMaterialsId:0,num:0,other:""},this.editedDialogs=!0},find(t={}){this.editedIndex=this.items.indexOf(t),_.find(this.items[this.editedIndex].id).then(t=>{this.editedData=t.data;for(let e=0;e<this.editedData.step.length;e++)this.editedData.step[e].goodsMaterialsId=Number(this.editedData.step[e].goodsMaterialsId);this.editedDialogs=!0})},findAll(t=1,e=10){_.findAll(t,e).then(t=>{this.items=t.data.data,this.pageConfig={page:t.data.current_page,pageCount:t.data.last_page,totalDesserts:t.data.total}})},chickPage(t){this.findAll(t)},submit(){this.editedIndex>=0?_.update(this.editedData).then(t=>{Object.assign(this.items[this.editedIndex],t.data),this.editedDialogs=!1,this.$store.commit("snackBarShow",{message:"保存成功",color:"success"})}):_.create(this.editedData).then(t=>{this.items.push(t.data),this.editedDialogs=!1,this.$store.commit("snackBarShow",{message:"保存成功",color:"success"})})},doDelete(){_.delete(this.items[this.editedIndex].id).then(()=>{this.deleteDialogs=!1,this.items.splice(this.editedIndex,1),this.$store.commit("snackBarShow",{message:"删除成功",color:"success"})})},getAllGoodsMaterials(){x.a.findAll(1,9999).then(t=>{this.goodsMaterials=t.data.data})},updateCost(){let t=this;t.editedData.directly_cost=0,t.editedData.join_cost=0,t.editedData.business_cost=0,t.editedData.step.length>0&&t.editedData.step.forEach(e=>{let a=t.goodsMaterials.findIndex(t=>Number(t.id)===Number(e.goodsMaterialsId));a>=0&&(t.editedData.directly_cost=t.$math.format(t.$math.evaluate(t.editedData.directly_cost+" + "+e.num+" * "+t.goodsMaterials[a].directly_cost)),t.editedData.join_cost=t.$math.format(t.$math.evaluate(t.editedData.join_cost+" + "+e.num+" * "+t.goodsMaterials[a].join_cost)),t.editedData.business_cost=t.$math.format(t.$math.evaluate(t.editedData.business_cost+" + "+e.num+" * "+t.goodsMaterials[a].business_cost)))})},addStep(){this.editedStep.goodsMaterialsId<=0||null!=this.editedStep.num&&""!==this.editedStep.num&&(this.editedData.step.push(this.editedStep),this.updateCost(this.editedStep),this.editedStep={goodsMaterialsId:0,num:0,other:""})},delStep(t){let e=this.editedData.step.indexOf(t);this.editedData.step.splice(e,1),this.updateCost()}}},b=(a("7a2e"),a("2877")),C=Object(b.a)(D,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-column",attrs:{id:"GoodsManual"}},[e(l.a,{attrs:{headers:t.headers,items:t.items,page:t.pageConfig.page,"server-items-length":t.pageConfig.totalDesserts,"hide-default-footer":""},on:{"update:page":function(e){return t.$set(t.pageConfig,"page",e)},"page-count":function(e){t.pageConfig.pageCount=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e(d.c,[e("div",[e(s.a,{staticClass:"mr-5",attrs:{color:"success"},on:{click:t.newCreate}},[t._v("新增")]),e(s.a,{staticClass:"mr-5",attrs:{color:"info"},on:{click:t.refresh}},[t._v("刷新")])],1)])]},proxy:!0},{key:"item.action",fn:function({item:a}){return[e(s.a,{staticClass:"mr-2",attrs:{icon:""}},[e(c.a,{attrs:{small:""},on:{click:function(e){return t.find(a)}}},[t._v(" mdi-pencil ")])],1),e(s.a,{staticClass:"mr-2",attrs:{icon:""}},[e(c.a,{attrs:{small:""},on:{click:function(e){t.editedIndex=t.items.indexOf(a),t.deleteDialogs=!0}}},[t._v(" mdi-delete ")])],1)]}}])}),e("div",{staticClass:"mt-auto mb-10"},[e(u.a,{attrs:{length:t.pageConfig.pageCount,"total-visible":10},on:{input:t.chickPage},model:{value:t.pageConfig.page,callback:function(e){t.$set(t.pageConfig,"page",e)},expression:"pageConfig.page"}})],1),e("div",[e(n.a,{attrs:{persistent:"",width:"300px"},model:{value:t.deleteDialogs,callback:function(e){t.deleteDialogs=e},expression:"deleteDialogs"}},[e(i.a,[e(d.c,[t._v(" 提示 ")]),e(d.b,[t._v(" 确定要删除么 ")]),e(d.a,{staticClass:"d-flex justify-end"},[e(s.a,{staticClass:"mr-3",attrs:{color:"info"},on:{click:t.doDelete}},[t._v("确定")]),e(s.a,{on:{click:function(e){t.deleteDialogs=!1}}},[t._v("取消")])],1)],1)],1),e(n.a,{attrs:{persistent:"",width:"700"},model:{value:t.editedDialogs,callback:function(e){t.editedDialogs=e},expression:"editedDialogs"}},[e(i.a,[e(d.c,[t._v(" 详细信息 ")]),e(d.b,[e(h.a,[e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[e("div",[t._v("ID")])]),e(o.a,{attrs:{cols:"5"}},[e(m.a,{attrs:{dense:"",disabled:"","hide-details":"",outlined:""},model:{value:t.editedData.id,callback:function(e){t.$set(t.editedData,"id",e)},expression:"editedData.id"}})],1),e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[e("div",[t._v("名称")])]),e(o.a,{attrs:{cols:"5"}},[e(m.a,{attrs:{dense:"","hide-details":"",outlined:""},model:{value:t.editedData.name,callback:function(e){t.$set(t.editedData,"name",e)},expression:"editedData.name"}})],1)],1),e("div",{staticClass:"mt-5"},[t._v("操作步骤")]),e(r.a,{staticClass:"mb-5"}),t._l(t.editedData.step,(function(a,i){return e(h.a,{key:i},[e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[e("div",[t._v("原料")])]),e(o.a,{attrs:{cols:"5"}},[e(p.a,{attrs:{items:t.goodsMaterials,dense:"","hide-details":"","item-text":"name","item-value":"id",outlined:"",placeholder:"选择原料"},model:{value:a.goodsMaterialsId,callback:function(e){t.$set(a,"goodsMaterialsId",e)},expression:"item.goodsMaterialsId"}})],1),e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[e("div",[t._v("用量")])]),e(o.a,{attrs:{cols:"5"}},[e(m.a,{attrs:{dense:"","hide-details":"",outlined:"",type:"number"},model:{value:a.num,callback:function(e){t.$set(a,"num",e)},expression:"item.num"}})],1),e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[e("div",[t._v("操作说明")])]),e(o.a,{attrs:{cols:"9"}},[e(g.a,{attrs:{"clear-icon":"mdi-close-circle",clearable:"",dense:"","hide-details":"","no-resize":"",outlined:""},model:{value:a.other,callback:function(e){t.$set(a,"other",e)},expression:"item.other"}})],1),e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e(s.a,{staticClass:"mr-2",attrs:{color:"error",dark:"",fab:"",small:""},on:{click:function(e){return t.delStep(a)}}},[e(c.a,{attrs:{dark:""}},[t._v(" mdi-minus ")])],1),e(s.a,{attrs:{color:"success",dark:"",fab:"",small:""},on:{click:function(e){return t.updateCost(a)}}},[e(c.a,{attrs:{dark:""}},[t._v(" mdi-pencil ")])],1)],1)],1)})),e(h.a,[e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[e("div",[t._v("原料")])]),e(o.a,{attrs:{cols:"5"}},[e(p.a,{attrs:{items:t.goodsMaterials,dense:"","hide-details":"","item-text":"name","item-value":"id",outlined:"",placeholder:"选择原料"},model:{value:t.editedStep.goodsMaterialsId,callback:function(e){t.$set(t.editedStep,"goodsMaterialsId",e)},expression:"editedStep.goodsMaterialsId"}})],1),e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[e("div",[t._v("用量")])]),e(o.a,{attrs:{cols:"5"}},[e(m.a,{attrs:{dense:"","hide-details":"",outlined:"",type:"number"},model:{value:t.editedStep.num,callback:function(e){t.$set(t.editedStep,"num",e)},expression:"editedStep.num"}})],1),e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[e("div",[t._v("操作说明")])]),e(o.a,{attrs:{cols:"9"}},[e(g.a,{attrs:{"clear-icon":"mdi-close-circle",clearable:"",dense:"","hide-details":"","no-resize":"",outlined:""},model:{value:t.editedStep.other,callback:function(e){t.$set(t.editedStep,"other",e)},expression:"editedStep.other"}})],1),e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e(s.a,{staticClass:"ma-auto",attrs:{color:"success",dark:"",fab:"",small:""},on:{click:t.addStep}},[e(c.a,{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)],1)],1),e(r.a,{staticClass:"mt-5 mb-5"}),e(h.a,[e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[e("div",[t._v("直营成本")])]),e(o.a,{attrs:{cols:"3"}},[e(m.a,{attrs:{dense:"",disabled:"","hide-details":"",outlined:"",type:"number"},model:{value:t.editedData.directly_cost,callback:function(e){t.$set(t.editedData,"directly_cost",e)},expression:"editedData.directly_cost"}})],1),e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[e("div",[t._v("加盟成本")])]),e(o.a,{attrs:{cols:"3"}},[e(m.a,{attrs:{dense:"",disabled:"","hide-details":"",outlined:"",type:"number"},model:{value:t.editedData.join_cost,callback:function(e){t.$set(t.editedData,"join_cost",e)},expression:"editedData.join_cost"}})],1),e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[e("div",[t._v("商贸成本")])]),e(o.a,{attrs:{cols:"3"}},[e(m.a,{attrs:{dense:"",disabled:"","hide-details":"",outlined:"",type:"number"},model:{value:t.editedData.business_cost,callback:function(e){t.$set(t.editedData,"business_cost",e)},expression:"editedData.business_cost"}})],1)],1),e(h.a,[e(o.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[e("div",[t._v("备注")])]),e(o.a,{attrs:{cols:"11"}},[e(g.a,{attrs:{"clear-icon":"mdi-close-circle",clearable:"",dense:"","hide-details":"","no-resize":"",outlined:""},model:{value:t.editedData.other,callback:function(e){t.$set(t.editedData,"other",e)},expression:"editedData.other"}})],1)],1)],2),e(d.a,{staticClass:"d-flex justify-end"},[e(s.a,{staticClass:"mr-3",attrs:{color:"info"},on:{click:t.submit}},[t._v("确定")]),e(s.a,{on:{click:function(e){t.editedDialogs=!1}}},[t._v("取消")])],1)],1)],1)],1)],1)}),[],!1,null,"4d0607b0",null);e.default=C.exports},a844:function(t,e,a){"use strict";a("1681");var s=a("8654"),i=a("58df");const d=Object(i.a)(s.a);e.a=d.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s.a.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=s.a.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},f2a1:function(t,e,a){"use strict";var s=a("ade3"),i=a("677a");e.a=new class{constructor(){Object(s.a)(this,"BASE_URL","admin/GoodsMaterials/")}findAll(t,e,a=null){return i.a.doHttp(this.BASE_URL+"findAll","get",{page:t,pageSize:e,field:a})}find(t,e=null){return i.a.doHttp(this.BASE_URL+"find","get",{id:t,field:e})}create(t){return delete t.id,i.a.doHttp(this.BASE_URL+"create","post",t)}update(t){return i.a.doHttp(this.BASE_URL+"update","post",t)}delete(t){return i.a.doHttp(this.BASE_URL+"delete","post",{id:t})}}}}]);