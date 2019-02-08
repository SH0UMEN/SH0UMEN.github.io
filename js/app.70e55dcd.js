(function(e){function t(t){for(var i,l,r=t[0],o=t[1],d=t[2],p=0,c=[];p<r.length;p++)l=r[p],a[l]&&c.push(a[l][0]),a[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(c.length)c.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(i=!1)}i&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},a={app:0},s=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=n("bb71");n("da64");i["default"].use(a["a"],{iconfont:"md"});var s=n("ce5b"),l=n.n(s),r=n("c964"),o=n("4dd1"),d=n.n(o),u=n("8ed1"),p=n.n(u),c=(n("8da8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:e.nav,callback:function(t){e.nav=t},expression:"nav"}},[n("v-list",e._l(e.items,function(t){return n("div",{key:t.title},[t.items?n("v-list-group",{attrs:{"no-action":""}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.title))])],1)],1),e._l(t.items,function(t){return n("v-list-tile",{key:t.title,attrs:{href:t.href},on:{click:function(e){}}},[e._v("\n                        "+e._s(t.title)+"\n                    ")])})],2):n("v-list-tile",{attrs:{href:t.href}},[e._v("\n                    "+e._s(t.title)+"\n                ")])],1)}),0)],1),n("v-toolbar",{attrs:{dark:"",fixed:"",app:""}},[n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.nav=!e.nav}}}),n("v-toolbar-title",[e._v("Guide & Demo")])],1),n("v-content",[n("index")],1)],1)}),m=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[n("h1",[e._v("Vue Input Groups")]),n("section",{staticClass:"mb-5",attrs:{id:"example"}},[n("h2",{staticClass:"mt-2 mb-4"},[e._v("Example")]),n("input-group",{attrs:{fields:e.example.fields},on:{validated:function(t){e.example.isValid=t}},model:{value:e.example.value,callback:function(t){e.$set(e.example,"value",t)},expression:"example.value"}}),n("span",{staticClass:"d-block text-xs-center ma-auto mb-3"},[e._v("Validation result is: "+e._s(e.example.isValid))]),n("highlight-code",{staticClass:"mb-3",attrs:{lang:"javascript"}},[e._v('\n                        data() {\n                            return {\n                                isValid: \'\',\n                                value: {\n                                    fieldOne: "",\n                                    fieldTwo: ""\n                                }\n                                fields: {\n                                    fieldOne: {\n                                        type: "text",\n                                        placeholder: "Minimum 5 symbols",\n                                        validation: {\n                                            min: {\n                                                value: 5,\n                                                message: "Min is 5"\n                                            }\n                                        }\n                                    },\n                                    fieldTwo: {\n                                        type: "password",\n                                        placeholder: "Minimum 4 and max 20 symbols",\n                                        validation: {\n                                            min: {\n                                                value: 4,\n                                                message: "Min is 4"\n                                            },\n                                            max: {\n                                                value: 20,\n                                                message: "Max is 20"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        },\n                        components: {\n                            InputGroup\n                        }\n                    ')]),n("highlight-code",{attrs:{lang:"vue"}},[e._v('\n                       <input-group v-model="value"\n                                     @validated="isValid = $event"\n                                     :fields="fields">\n                        </input-group>\n                        Validation result is: { { isValid } }\n                    ')])],1),n("h1",[e._v("Guide")]),n("section",{staticClass:"mt-2",attrs:{id:"guide"}},[n("h2",{staticClass:"mb-2",attrs:{id:"installation"}},[e._v("Installation")]),n("highlight-code",{staticClass:"mt-2 mb-2"},[e._v("\n                        npm install --save vue-input-groups\n                    ")]),n("h2",{staticClass:"mt-2",attrs:{id:"quick-start"}},[e._v("Quick start")]),e._v("\n                    Import package into your project:\n                    "),n("highlight-code",{staticClass:"mt-3 mb-3",attrs:{lang:"javascript"}},[e._v('\n                        import InputGroup from "vue-input-groups"\n                    ')]),e._v('\n                    Then, add imported package into "components" and create a value container and fields description:\n                    '),n("highlight-code",{staticClass:"mt-3 mb-3",attrs:{lang:"javascript"}},[e._v('\n                        components: {\n                            InputGroup\n                        },\n                        data() {\n                            return {\n                                value: {\n                                    name: "",\n                                    password: ""\n                                },\n                                fields: {\n                                    //Keys in fields description have to be\n                                    //named as well as keys in value container\n                                    name: {\n                                        //Field type (list of currently supported types is in the API section)\n                                        type: "text",\n                                        //Placeholder\n                                        placeholder: "Enter your name"\n                                    },\n                                    password: {\n                                        type: "password",\n                                        placeholder: "Enter your password"\n                                    }\n                                }\n                            }\n                        }\n                    ')]),e._v("\n                    Simple usage example:\n                    "),n("highlight-code",{staticClass:"mt-3 mb-3",attrs:{lang:"vue"}},[e._v('\n                       <input-group v-model="value"\n                                     :fields="fields">\n                        </input-group>\n                    ')]),n("h2",{attrs:{id:"validation"}},[e._v("Validation")]),e._v("\n                    To enable validation, add this key in field description and describe the rules ("),n("a",{attrs:{href:"#"}},[e._v("full list of rules")]),e._v("):\n                    "),n("highlight-code",{staticClass:"mt-3 mb-3",attrs:{lang:"javascript"}},[e._v('\n                        data() {\n                            return {\n                                //...\n                                fields: {\n                                    someField: {\n                                        type: "text",\n                                        validation: {\n                                            required: "This field is required",\n                                            min: {\n                                                value: 5,\n                                                message: "Min is 5"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    ')]),n("h2",{attrs:{id:"validation-result"}},[e._v("Getting validation result")]),e._v('\n                    Event "Validated" returns result of input group validation. You can assign this value to some your variable:\n                    '),n("highlight-code",{staticClass:"mt-3 mb-3",attrs:{lang:"javascript"}},[e._v("\n                        data() {\n                            return {\n                                //...\n                                isValid: '',\n                                //...\n                            }\n                        },\n                    ")]),n("highlight-code",{staticClass:"mb-3",attrs:{lang:"vue"}},[e._v('\n                       <input-group @validated="isValid = $event">\n                        </input-group>\n                    ')]),n("h2",{staticClass:"mt-3",attrs:{id:"mobile"}},[e._v("Display on mobile")]),e._v("\n                    set up breakpoint to switch display of warnings on mobile:\n                    "),n("highlight-code",{staticClass:"mt-3 mb-3",attrs:{lang:"vue"}},[e._v('\n                       //show mobile version with window width 567 (default is 400)\n                        <input-group :breakpoint="567">\n                        </input-group>\n                    ')]),n("h2",{attrs:{id:"errors-display"}},[e._v("Changing the errors display position")]),e._v('\n                    To change the errors position create key "config" in field description. Then, specify warnY (Y-position)(top, center, bottom) or warnX (X-position)(left, right):\n                    '),n("highlight-code",{staticClass:"mt-3 mb-3",attrs:{lang:"javascript"}},[e._v('\n                        data() {\n                            return {\n                                //...\n                                fields: {\n                                    someField: {\n                                        type: "text",\n                                        config: {\n                                            warnY: "top",\n                                            warnX: "left"\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    ')]),n("h2",{attrs:{id:"delayed-display"}},[e._v("Delayed displaying errors")]),e._v('\n                    If you want errors to be shown only after some event (by example, after user submit a form), pass false in argument "showWarnings" and after event occurrence, change this value to true:\n                    '),n("highlight-code",{staticClass:"mt-3 mb-3",attrs:{lang:"javascript"}},[e._v("\n                        data() {\n                            return {\n                                //...\n                                showWarnings: false,\n                            }\n                        }\n                    ")]),n("highlight-code",{staticClass:"mt-3 mb-3",attrs:{lang:"vue"}},[e._v('\n                       <input-group :show-warnings="showWarnings">\n                        </input-group>\n                        <button @click="showWarnings=true">Show warnings</button>\n                    ')]),n("h2",{attrs:{id:"custom-warnings"}},[e._v("Custom warnings")]),e._v("\n                    If you wanna to display you custom messages, just add an array of these messages in field description:\n                    "),n("highlight-code",{staticClass:"mt-3 mb-3",attrs:{lang:"javascript"}},[e._v('\n                        data() {\n                            return {\n                                //...\n                                fields: {\n                                    someField: {\n                                        type: "text",\n                                        messages: [\n                                            "Wrong password"\n                                        ]\n                                    }\n                                }\n                            }\n                        }\n                    ')]),n("h2",{attrs:{id:"multiselect"}},[e._v("Using select and multiselect")]),e._v("\n                    Select field have been made with "),n("a",{attrs:{href:"https://www.npmjs.com/package/vue-multiselect"}},[e._v("vue-multiselect")]),e._v(". Here is the example of using this package in vue-input-group:\n                    "),n("highlight-code",{staticClass:"mt-3 mb-3",attrs:{lang:"javascript"}},[e._v('\n                        data() {\n                            return {\n                                //...\n                                fields: {\n                                    someField: {\n                                        type: "select",\n                                        placeholder: "Select something",\n                                        //Objects in options array have to contain keys \'label\' for display this option and \'id\' for tracking\n                                        options: [\n                                            {\n                                                label: "Item 1",\n                                                id: 1\n                                            }\n                                        ],\n                                        //In config you can specify properties for vue-multiselect\n                                        //Check out its readme to know about all of its properties\n                                        config: {\n                                            multiple: true,\n                                            selectLabel: "Select this",\n                                            selectedLabel: "It is selected"\n                                        },\n                                        validation: {\n                                            required: "Choose at least 1",\n                                            max: {\n                                                value: 10,\n                                                message: "Maximum 10 items"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    ')]),n("h2",{attrs:{id:"tel-input"}},[e._v("Using phone number field")]),e._v("\n                    Phone number field have been made with "),n("a",{attrs:{href:"https://www.npmjs.com/package/vue-multiselect"}},[e._v("vue-multiselect")]),e._v(". Here is the example of using this package in vue-input-group:\n                    "),n("highlight-code",{staticClass:"mt-3 mb-3",attrs:{lang:"javascript"}},[e._v('\n                        data() {\n                            return {\n                                //...\n                                fields: {\n                                    someField: {\n                                        type: "tel",\n                                        placeholder: "Enter your phone number",\n                                        //In config you can specify properties for vue-tel-input\n                                        //Check out its readme to know about all of its properties\n                                        config: {\n                                            defaultCountry: \'ru\'\n                                        },\n                                        validation: {\n                                            isPhone: "Incorrect phone number"\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    ')])],1),n("h1",{attrs:{id:"api"}},[e._v("API")]),n("section",[n("h2",{attrs:{id:"properties"}},[e._v("Properties")]),n("v-data-table",{staticClass:"elevation-1 mt-3 mb-3",attrs:{items:e.properties,"hide-actions":"",headers:e.propsHeaders},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.item.title))]),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.type))]),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.default))]),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.description))])]}}])}),n("h2",{attrs:{id:"types"}},[e._v("Supported field types")]),n("v-data-table",{staticClass:"elevation-1 mt-3 mb-3",attrs:{items:e.types,"hide-actions":"","hide-headers":""},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.item.type))]),n("td",{staticClass:"text-xs-right",domProps:{innerHTML:e._s(t.item.description)}})]}}])}),n("h2",{attrs:{id:"rules"}},[e._v("Validation rules")]),n("v-data-table",{staticClass:"elevation-1 mt-3 mb-3",attrs:{items:e.rules,"hide-actions":"","hide-headers":""},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.item.rule))]),n("td",{staticClass:"text-xs-right",domProps:{innerHTML:e._s(t.item.type)}}),n("td",{staticClass:"text-xs-right",domProps:{innerHTML:e._s(t.item.description)}})]}}])})],1)])],1)],1)],1)},h=[],f=n("ebbb"),g=n.n(f),b=(n("cedb"),{data:function(){return{rules:[{rule:"min",description:"Minimal value",type:"{ value: Number, message: String }"},{rule:"max",description:"Maximal value",type:"{ value: Number, message: String }"},{rule:"isEmail",description:"Set up the message which will be shown when a value is not an email address (only for email field)",type:"String"},{rule:"isPhone",description:"Set up the message which will be shown when a value is not a phone number (only for tel field)",type:"String"},{rule:"required",description:"Make a field required and set message which will be shown if field is empty",type:"String"}],types:[{type:"text",description:"Text field"},{type:"number",description:"Number field"},{type:"email",description:"Email field"},{type:"password",description:"Password field"},{type:"select",description:"Select field (made with <a target='_blank' href='https://www.npmjs.com/package/vue-multiselect'>Vue-multiselect</a>)"},{type:"tel",description:"Phone number field (made with <a target='_blank' href='https://www.npmjs.com/package/vue-tel-input'>Vue-tel-input</a>)"}],propsHeaders:[{text:"Name",align:"left",sortable:!1,value:"title"},{text:"Type",align:"right",sortable:!1,value:"type"},{text:"Default",align:"right",sortable:!1,value:"default"},{text:"Description",align:"right",sortable:!1,value:"description"}],properties:[{title:"fields",type:"Object",default:{},description:"Fields descriptions"},{title:"breakpoint",type:"Number",default:400,description:"Width of the window, after reaching which the mobile display will turn on"},{title:"show-warnings",type:"Boolean",default:"true",description:"Enable / Disable Error Display"}],example:{isValid:"",value:{fieldOne:"",fieldTwo:""},fields:{fieldOne:{type:"text",placeholder:"Minimum 5 symbols",validation:{min:{value:5,message:"Min is 5"}}},fieldTwo:{type:"password",placeholder:"Minimum 4 and max 20 symbols",validation:{min:{value:4,message:"Min is 4"},max:{value:20,message:"Max is 20"}}}}}}},components:{InputGroup:g.a}}),y=b,_=(n("a474"),n("2877")),w=n("6544"),x=n.n(w),C=n("b0af"),k=n("a523"),V=n("8fea"),j=n("0e8f"),T=n("a722"),S=Object(_["a"])(y,v,h,!1,null,null,null),M=S.exports;x()(S,{VCard:C["a"],VContainer:k["a"],VDataTable:V["a"],VFlex:j["a"],VLayout:T["a"]});var P={name:"App",components:{Index:M},data:function(){return{nav:!1,items:[{href:"#example",title:"Example"},{title:"Guide",items:[{href:"#installation",title:"installation"},{href:"#quick-start",title:"Quick start"},{href:"#validation",title:"Validation"},{href:"#validation-result",title:"Getting validation result"},{href:"#mobile",title:"Display on mobile"},{href:"#errors-display",title:"Changing the errors display position"},{href:"#delayed-display",title:"Delayed displaying errors"},{href:"#custom-warnings",title:"Custom warnings"},{href:"#multiselect",title:"Using select and multiselect"},{href:"#tel-input",title:"Using phone number field"}]},{title:"API",items:[{href:"#properties",title:"Properties"},{href:"#types",title:"Supported field types"},{href:"#rules",title:"Validation rules"}]}]}}},I=P,O=(n("cf25"),n("7496")),E=n("549c"),D=n("8860"),G=n("56b0"),L=n("ba95"),F=n("5d23"),q=n("f774"),H=n("71d9"),N=n("706c"),W=n("2a7f"),$=Object(_["a"])(I,c,m,!1,null,null,null),A=$.exports;x()($,{VApp:O["a"],VContent:E["a"],VList:D["a"],VListGroup:G["a"],VListTile:L["a"],VListTileContent:F["a"],VListTileTitle:F["b"],VNavigationDrawer:q["a"],VToolbar:H["a"],VToolbarSideIcon:N["a"],VToolbarTitle:W["a"]}),i["default"].use(r["a"],{languages:{javascript:d.a,vue:p.a}}),i["default"].use(l.a),i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(A)}}).$mount("#app")},a474:function(e,t,n){"use strict";var i=n("da9b"),a=n.n(i);a.a},bb93:function(e,t,n){},cf25:function(e,t,n){"use strict";var i=n("bb93"),a=n.n(i);a.a},da9b:function(e,t,n){}});
//# sourceMappingURL=app.70e55dcd.js.map