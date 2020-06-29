/*
This file is part of MakeHaus JS, the MakeHaus API for Node.js, released under AGPL-3.0 license.
(c) 2019, 2020 MakeProAudio GmbH and Node.js contributors. All rights reserved.
*/

(this["webpackJsonpglue-browser"]=this["webpackJsonpglue-browser"]||[]).push([[0],{57:function(e,t,a){e.exports=a(97)},62:function(e,t,a){},90:function(e,t){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(20),i=a.n(o),r=(a(62),a(6)),c=a(4),s=a(7),u=a(8),d=a(9),m=a(50),h=a.n(m),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.identifier,a=e.wrapperClasses,n=e.children;return l.a.createElement("div",{id:t,key:t,className:a},n)}}]),t}(n.Component),f=a(10),p=a(114),b=Object(f.a)({root:function(e){return{color:"rgb(255,255,255,1.0)",backgroundColor:e.assignedcolor,"&:hover":{backgroundColor:e.assignedcolor}}}})(p.a),g=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){var e=a.props,t=e.meta;e.socket.emit("tx",{widget:{name:t.widget.name,type:"BUTTON",event:"PRESS"}})};var n=e.meta.stack,l=n.color,o=n.value;return a.state={color:l,label:o.toString()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.props.socket.off("rx")}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.socket,n=t.meta;a.on("rx",(function(t){if(t.name===n.stack.name||t.stack===n.stack.name)switch(t.type){case"COLOR":e.setState({color:t.val});break;case"VALUE":void 0!==t.val&&["number","string","boolean"].includes(typeof t.val)&&e.setState({label:t.val.toString()})}}))}},{key:"render",value:function(){var e=this.props.meta;return l.a.createElement(b,{variant:"contained",key:e.widget.name,assignedcolor:this.state.color,onClick:this.handleClick},this.state.label?this.state.label:"")}}]),t}(l.a.Component),k=a(117),y=Object(f.a)({"@global":{".MuiSlider-root.MuiSlider-vertical":{padding:"0px",width:"100%",height:"80%"},".MuiSlider-vertical .MuiSlider-rail":{width:"100%",height:"80%"},".MuiSlider-vertical .MuiSlider-track":{width:"100%"},".MuiSlider-vertical .MuiSlider-thumb":{marginLeft:"0px",marginBottom:"-2px"}},root:function(e){return{color:e.assignedcolor,top:"calc(6%)"}},thumb:{height:"3.5%",width:"100%",filter:"brightness(120%)","&:focus,&:hover,&$active":{boxShadow:"inherit"},borderRadius:"0"},valueLabel:{left:"calc(35%)",top:-15,"& *":{background:"transparent",color:"ffffff",fontSize:"12pt",fontWeight:"bold"}},active:{},track:{filter:"brightness(60%)"},rail:{color:"transparent"}})(k.a),E=Object(f.a)({"@global":{},root:function(e){return{color:e.assignedcolor,padding:"0px 0px",height:"70%",top:-4,left:3}},thumb:{height:"100%",width:"5%",filter:"brightness(120%)","&:focus,&:hover,&$active":{boxShadow:"inherit"},borderRadius:"0",marginTop:"0px"},active:{},track:{height:"100%",filter:"brightness(60%)"},valueLabel:{left:"calc(-170%)",top:"calc(-35%)","& *":{background:"transparent",color:"ffffff",fontWeight:"bold",fontSize:"1rem"}},rail:{color:"transparent",height:"100%"}})(k.a),w=function(e){return{borderColor:e,borderWidth:0,boxShadow:"inset 0px 0px 0px 4px ".concat(e)}},x=function(e){return{borderColor:e,borderWidth:1,boxShadow:"inset 0px 0px 0px 0px ".concat(e)}},O=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChangeVertical=function(e,t){a.state.value!==t&&a.setState({value:t},(function(){var e=a.props,n=e.meta;e.socket.emit("tx",{widget:{name:n.widget.name,type:"SLIDER_VERTICAL",event:"CHANGE_ABSOLUTE",value:t}})}))},a.handleChangeHorizontal=function(e,t){a.state.value!==t&&a.setState({value:t},(function(){var e=a.props,n=e.meta;e.socket.emit("tx",{widget:{name:n.widget.name,type:"SLIDER_HORIZONTAL",event:"CHANGE_ABSOLUTE",value:t}})}))};var n=e.meta.stack,l=n.color,o=n.label,i=n.context,c=n.value,d=n.min,m=n.max;return a.state={color:l,label:o,context:i,style:x(l),value:c,min:d,max:m},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.props.socket.off("rx")}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.socket,n=t.meta;a.on("rx",(function(t){if(t.name===n.stack.name||t.stack===n.stack.name)switch(t.type){case"TOUCH":var a;a=t.val?w(e.state.color):x(e.state.color),e.setState({style:a});break;case"VALUE":void 0!==t.val&&"number"===typeof t.val&&e.setState({value:t.val});break;case"COLOR":e.setState({color:t.val},(function(){return e.setState({style:x(e.state.color)})}));break;case"CONTEXT":void 0!==t.val&&"string"===typeof t.val&&e.setState({context:t.val});break;case"LABEL":void 0!==t.val&&"string"===typeof t.val&&e.setState({label:t.val});break;case"TYPECHANGE":"NUMBER"===t.val.type&&e.setState({min:t.val.min,max:t.val.max})}}))}},{key:"render",value:function(){var e=this.props,t=e.meta,a=e.orientation;return l.a.createElement("div",{className:"labelable",style:this.state.style},l.a.createElement("div",{className:"label widget-label"},l.a.createElement("label",null,this.state.label)),l.a.createElement("div",{className:"label context-label"},l.a.createElement("label",null,this.state.context)),l.a.createElement("div",{className:"other-widget"},l.a.createElement("span",{className:"slider-value-label"},this.state.value),"VERTICAL"===a?l.a.createElement(y,{onChange:this.handleChangeVertical,defaultValue:this.state.value,key:t.widget.name,orientation:"vertical",min:this.state.min,max:this.state.max,value:this.state.value,assignedcolor:this.state.color,valueLabelDisplay:"off"}):l.a.createElement(E,{onChange:this.handleChangeHorizontal,defaultValue:this.state.value,key:t.widget.name,orientation:"horizontal",min:this.state.min,max:this.state.max,value:this.state.value,assignedcolor:this.state.color,valueLabelDisplay:"off"})))}}]),t}(l.a.Component),j=a(2),S=a(116),C=Object(f.a)((function(e){return{root:{alignItems:"center",width:42,height:26,padding:0,top:"calc(4px)"},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"lightgreen",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"red",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid grey",backgroundColor:"grey",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(j.a)(e,["classes"]);return l.a.createElement(S.a,Object.assign({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))})),N=function(e){function t(e){var a;Object(r.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e));var n=e.meta.stack,l=n.color,o=n.label,i=n.context,c=n.value,d=n.min,m=n.max;return a.state={color:l,label:o,context:i,style:x(l),value:c,min:d,max:m},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.props.socket.off("rx")}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.socket,n=t.meta;a.on("rx",(function(t){if(t.name===n.stack.name||t.stack===n.stack.name)switch(t.type){case"TOUCH":var a;a=t.val?w(e.state.color):x(e.state.color),e.setState({style:a});break;case"VALUE":void 0!==t.val&&"boolean"===typeof t.val&&e.setState({value:t.val});break;case"COLOR":e.setState({color:t.val},(function(){return e.setState({style:x(e.state.color)})}));break;case"CONTEXT":void 0!==t.val&&"string"===typeof t.val&&e.setState({context:t.val});break;default:break;case"LABEL":void 0!==t.val&&"boolean"===typeof t.val&&e.setState({label:t.val})}}))}},{key:"render",value:function(){var e=this.props.meta;return l.a.createElement("div",{className:"labelable",style:this.state.style},l.a.createElement("div",{className:"label widget-label"},l.a.createElement("label",null,this.state.label)),l.a.createElement("div",{className:"label context-label"},l.a.createElement("label",null,this.state.context)),l.a.createElement("div",{className:"other-widget"},l.a.createElement(C,{key:e.widget.name,assignedcolor:this.state.color,checked:this.state.value})))}}]),t}(l.a.Component),L=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.values;return l.a.createElement("div",{className:"horizontal-arrowed-list-container",style:{color:this.props.assignedcolor}},l.a.createElement("div",{className:"arrow-left",style:{visibility:T(t,a)}},"\u2190"),l.a.createElement("div",{className:"arrowed-list-item"},t),l.a.createElement("div",{className:"arrow-right",style:{visibility:A(t,a)}},"\u2192"))}}]),t}(n.Component),M=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={arrowHigh:!0,arrowLow:!0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.values;return l.a.createElement("div",{className:"vertical-arrowed-list-container",style:{color:this.props.assignedcolor}},l.a.createElement("div",{className:"arrow-up",style:{visibility:T(t,a)}},"\u2191"),l.a.createElement("div",{className:"arrowed-list-item"},t),l.a.createElement("div",{className:"arrow-down",style:{visibility:A(t,a)}},"\u2193"))}}]),t}(n.Component),T=function(e,t){return!!t&&(0===t.findIndex((function(t){return t===e}))?"hidden":"visible")},A=function(e,t){return!!t&&(t.findIndex((function(t){return t===e}))===t.length-1?"hidden":"visible")},R=function(e){function t(e){var a;Object(r.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e));var n=e.meta.stack,l=n.color,o=n.label,i=n.context,c=n.value,d=n.values;return a.state={color:l,label:o,context:i,style:x(l),value:c,values:d},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.props.socket.off("rx")}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.socket,n=t.meta;a.on("rx",(function(t){if(t.name===n.stack.name||t.stack===n.stack.name)switch(t.type){case"TOUCH":var a;a=t.val?w(e.state.color):x(e.state.color),e.setState({style:a});break;case"VALUE":void 0===t.val||"string"!==typeof t.val&&"number"!==typeof t.val||e.setState({value:t.val});break;case"COLOR":e.setState({color:t.val},(function(){return e.setState({style:x(e.state.color)})}));break;case"CONTEXT":void 0!==t.val&&"string"===typeof t.val&&e.setState({context:t.val});break;case"LABEL":void 0!==t.val&&"string"===typeof t.val&&e.setState({label:t.val});break;case"TYPECHANGE":"STRING_ARRAY"!==t.val.type&&"NUMBER_ARRAY"!==t.val.type||e.setState({values:t.val.values})}}))}},{key:"render",value:function(){var e=this.props,t=e.meta,a=e.orientation;return l.a.createElement("div",{className:"labelable",style:this.state.style},l.a.createElement("div",{className:"label widget-label"},l.a.createElement("label",null,this.state.label)),l.a.createElement("div",{className:"label context-label"},l.a.createElement("label",null,this.state.context)),l.a.createElement("div",{className:"other-widget"},"VERTICAL"===a?l.a.createElement(M,{defaultValue:this.state.value,key:t.widget.name,value:this.state.value,values:this.state.values,assignedcolor:this.state.color}):l.a.createElement(L,{defaultValue:this.state.value,key:t.widget.name,value:this.state.value,values:this.state.values,assignedcolor:this.state.color})))}}]),t}(l.a.Component),z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).widgetForMeta=function(e){var t=a.props.identifier,n=e.widget;return"BUTTON"===a.state.type?l.a.createElement("div",{className:"box"},l.a.createElement(g,{key:a.widgetIdentifier(t,n.idx,a.state.type),identifier:a.widgetIdentifier(t,n.idx,a.state.type),meta:e,socket:a.socket})):a.state.type.startsWith("SLIDER")?l.a.createElement("div",{className:"box"},l.a.createElement(O,{key:n.name,identifier:n.name,meta:e,socket:a.socket,orientation:a.state.type.split("_")[1]})):"TOGGLE"===a.state.type?l.a.createElement("div",{className:"box"},l.a.createElement(N,{key:n.name,identifier:n.name,meta:e,socket:a.socket})):a.state.type.startsWith("SELECTOR")?l.a.createElement("div",{className:"box"},l.a.createElement(R,{key:n.name,identifier:n.name,meta:e,socket:a.socket,orientation:a.state.type.split("_")[1]})):"EMPTY"===a.state.type?l.a.createElement("div",{className:"box"}):l.a.createElement(l.a.Fragment,null)},a.widgetIdentifier=function(e,t,a){return e+"-"+a+"-"+t},a.socket=e.socket,a.state={type:e.meta.widget.type},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.socket.on("rx",(function(t){e.props.meta.widget.name===t.name&&"widgetevent"===t.kind&&"TYPECHANGE"===t.type&&(e.setState({type:t.val}),window.location.reload(!0))}))}},{key:"render",value:function(){var e=this.props.meta;return this.widgetForMeta(e)}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.identifier,a=e.meta,n=e.classes,o=e.socket,i=e.weight;return l.a.createElement("div",{id:t,key:t,className:n,style:{flex:i}},a.map((function(e){return l.a.createElement(z,{meta:e,socket:o,key:e.widget.name})})))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).rowsOfWidgets=function(e){var t=[];return e.forEach((function(e){var a=[];e.stacks.forEach((function(e){e.widgets.forEach((function(t){a.push({stack:e,widget:t})}))})),t.push({name:e.name,meta:a,weight:e.weight})})),t},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.widgets,a=e.socket,n=this.rowsOfWidgets(t);return l.a.createElement(l.a.Fragment,null,n.map((function(e){return l.a.createElement(W,{classes:"row",socket:a,key:e.name,identifier:e.name,meta:e.meta,weight:e.weight})})))}}]),t}(n.Component),I=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.widgetRows,a=e.socket;return l.a.createElement(v,{wrapperClasses:"row-container"},l.a.createElement(U,{socket:a,widgets:t}))}}]),t}(l.a.Component),V=a(53),B=a(115);function D(e){return l.a.createElement(B.a,e,l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 1.92131 1.012",xmlnsXlink:"http://www.w3.org/1999/xlink"},l.a.createElement("defs",null),l.a.createElement("g",{id:"Layer_x0020_1"},l.a.createElement("metadata",{id:"CorelCorpID_0Corel-Layer"}),l.a.createElement("path",{className:"fil0",d:"M1.24847 0.513667l0 -0.458792c0,-0.0278306 -0.0225632,-0.0503938 -0.0503938,-0.0503938 -0.0278306,0 -0.0503938,0.0225632 -0.0503938,0.0503938l0 0.458792 0.100788 0z"}),l.a.createElement("path",{className:"fil0",d:"M1.14768 0.84392l0 0.11262c0,0.0278306 0.0225632,0.0503938 0.0503938,0.0503938 0.0278306,0 0.0503938,-0.0225632 0.0503938,-0.0503938l0 -0.11262 -0.100788 0z"}),l.a.createElement("path",{className:"fil0",d:"M1.46362 0.264116l0 -0.209241c0,-0.0278306 -0.0225632,-0.0503938 -0.0503938,-0.0503938 -0.0278306,0 -0.0503938,0.0225632 -0.0503938,0.0503938l0 0.209241 0.100788 0z"}),l.a.createElement("path",{className:"fil0",d:"M1.36283 0.594368l0 0.362171c0,0.0278306 0.0225632,0.0503938 0.0503938,0.0503938 0.0278306,0 0.0503938,-0.0225632 0.0503938,-0.0503938l0 -0.362171 -0.100788 0z"}),l.a.createElement("path",{className:"fil0",d:"M1.57795 0.755731l0 0.200809c0,0.0278306 0.0225632,0.0503938 0.0503938,0.0503938 0.0278306,0 0.0503938,-0.0225632 0.0503938,-0.0503938l0 -0.200809 -0.100788 0z"}),l.a.createElement("path",{className:"fil0",d:"M1.67874 0.425478l0 -0.370603c0,-0.0278306 -0.0225632,-0.0503938 -0.0503938,-0.0503938 -0.0278306,0 -0.0503938,0.0225632 -0.0503938,0.0503938l0 0.370603 0.100788 0z"}),l.a.createElement("path",{className:"fil0",d:"M1.79256 0.482515l0 0.474024c0,0.0278306 0.0225632,0.0503938 0.0503938,0.0503938 0.0278306,0 0.0503938,-0.0225632 0.0503938,-0.0503938l0 -0.474024 -0.100788 0z"}),l.a.createElement("path",{className:"fil0",d:"M1.89335 0.152262l0 -0.0973875c0,-0.0278306 -0.0225632,-0.0503938 -0.0503938,-0.0503938 -0.0278306,0 -0.0503938,0.0225632 -0.0503938,0.0503938l0 0.0973875 0.100788 0z"}),l.a.createElement("path",{className:"fil1",d:"M1.49157 0.512016c0,0.0157039 -0.012854,0.0285578 -0.0285578,0.0285578l-0.0995888 0c-0.0157039,0 -0.0285578,-0.012854 -0.0285578,-0.0285578l0 -0.165529c0,-0.0157039 0.012854,-0.0285775 0.0285578,-0.0285775l0.0995888 0c0.0157039,0 0.0285578,0.0128736 0.0285578,0.0285775l0 0.165529z"}),l.a.createElement("path",{className:"fil1",d:"M1.27643 0.761568c0,0.0157039 -0.012854,0.0285578 -0.0285775,0.0285578l-0.0995691 0c-0.0157235,0 -0.0285775,-0.012854 -0.0285775,-0.0285578l0 -0.165529c0,-0.0157039 0.012854,-0.0285578 0.0285775,-0.0285578l0.0995691 0c0.0157235,0 0.0285775,0.012854 0.0285775,0.0285578l0 0.165529z"}),l.a.createElement("path",{className:"fil1",d:"M1.70671 0.673359c0,0.0157235 -0.012854,0.0285775 -0.0285578,0.0285775l-0.0995888 0c-0.0157039,0 -0.0285578,-0.012854 -0.0285578,-0.0285775l0 -0.16551c0,-0.0157039 0.012854,-0.0285775 0.0285578,-0.0285775l0.0995888 0c0.0157039,0 0.0285578,0.0128736 0.0285578,0.0285775l0 0.16551z"}),l.a.createElement("path",{className:"fil1",d:"M1.92131 0.400144c0,0.0157039 -0.012854,0.0285775 -0.0285775,0.0285775l-0.0995691 0c-0.0157039,0 -0.0285775,-0.0128736 -0.0285775,-0.0285775l0 -0.16551c0,-0.0157235 0.0128736,-0.0285775 0.0285775,-0.0285775l0.0995691 0c0.0157235,0 0.0285775,0.012854 0.0285775,0.0285775l0 0.16551z"}),l.a.createElement("path",{className:"fil0",d:"M0.464413 0.539356c-0.022406,0 -0.0428466,-0.0150749 -0.0487429,-0.0377757l-0.11258 -0.438509c-0.00699696,-0.0269462 0.0091786,-0.0544426 0.0361248,-0.0614396 0.00414707,-0.00108099 0.00829415,-0.001592 0.0123823,-0.00163131l0.000530668 0c0.0223274,9.82719e-005 0.04265,0.0151339 0.0485267,0.0377757l0.11258 0.438509c0.00699696,0.0269462 -0.0091786,0.0544426 -0.0361248,0.0614396 -0.00424535,0.00110065 -0.00849069,0.00163131 -0.0126967,0.00163131z"}),l.a.createElement("path",{className:"fil0",d:"M0.449928 1.012c-0.099176,0 -0.164605,-0.036341 -0.205231,-0.0725836 -0.0609679,-0.0544426 -0.0864989,-0.125847 -0.0962868,-0.163583 -0.00632871,-0.0244107 -0.0924542,-0.259143 -0.145246,-0.401382 -0.00968961,-0.026101 0.00361641,-0.0551109 0.0297174,-0.0647808 0.0260814,-0.00970926 0.0550912,0.00361641 0.0647808,0.0296978 0.0230939,0.0622454 0.138819,0.374554 0.148312,0.41115 0.0204995,0.078991 0.0875013,0.20303 0.30596,0.146386 0.154641,-0.0400949 0.22294,-0.136008 0.208769,-0.293204 -0.00507083,-0.0561526 0.0437507,-0.24226 0.0588452,-0.29798 0.00727212,-0.0268479 0.0349651,-0.0427286 0.061813,-0.0354565 0.0268675,0.00727212 0.0427483,0.0349455 0.0354762,0.061813 -0.0285971,0.105564 -0.0580197,0.235971 -0.0557398,0.262563 0.0185341,0.205585 -0.0822929,0.347568 -0.283868,0.399829 -0.0475636,0.012343 -0.0898402,0.0175317 -0.127301,0.0175317z"}),l.a.createElement("path",{className:"fil0",d:"M0.298825 0.592324c-0.0225632,0.000353779 -0.0433379,-0.0145836 -0.0494308,-0.037363l-0.102812 -0.387604c-0.00721316,-0.0268872 0.0087462,-0.0545213 0.0356334,-0.0617148 0.0268872,-0.00721316 0.0545213,0.00876585 0.0617148,0.035653l0.102812 0.387604c0.00721316,0.0268675 -0.0087462,0.0545016 -0.0356334,0.0617148 -0.00410777,0.00108099 -0.00823519,0.00165097 -0.012284,0.00170993z"}),l.a.createElement("path",{className:"fil0",d:"M0.635367 0.508302c-0.0226418,0 -0.04322,-0.0153697 -0.0488804,-0.0383457l-0.100611 -0.393048c-0.00666284,-0.0270248 0.00984685,-0.0543247 0.0368716,-0.0609875 0.0270248,-0.00666284 0.0543444,0.00984685 0.0609875,0.0368716l0.100611 0.393029c0.00666284,0.0270248 -0.00984685,0.0543444 -0.0368716,0.0610072 -0.0040488,0.00100237 -0.00811726,0.00147408 -0.0121071,0.00147408z"}))))}var H=function(e){var t=e.socket,a=e.data,n=Object(V.useMediaQuery)({minWidth:768,maxWidth:1024});return l.a.createElement("div",{className:"screen-parent"},l.a.createElement("div",{className:"tb"},l.a.createElement("div",{className:"tbm"},a.title),l.a.createElement("div",{className:"tbr"},n&&l.a.createElement(D,{style:{fontSize:60}}),!n&&l.a.createElement(D,{style:{fontSize:40}}))),l.a.createElement(I,{widgetRows:a.rows,socket:t}))},P=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).initSocket=function(){e.socket=h()(e.state.endpoint),e.socket.on("connect",(function(){e.init(),e.socket.on("disconnect",(function(t){console.log("disconnected due to ".concat(t)),e.setState({ready:!1,data:{}})}))}))},e.exitSocket=function(){["data","client-ready","disconnect","connect"].forEach((function(t){e.socket.off(t)})),e.socket.close()},e.request=function(){e.socket.emit("client")},e.init=function(){e.request(),e.socket.on("client-ready",(function(t){e.clientId=t,e.socket.emit("data",e.clientId)})),e.socket.on("data",(function(t){e.setState({data:t,ready:!0})})),e.socket.on("brute-force-refresh",(function(){window.location.reload(!0)}))},e.handleUpdatePort=function(){e.state.editing?(e.setState({editing:!1}),e.setState({port:e.state.port,endpoint:"http://"+window.location.hostname+":"+e.state.port},(function(){console.log("updating port to ".concat(e.state.port)),e.exitSocket(),e.initSocket()}))):e.setState({editing:!0})},e.handleUpdatePortTextChange=function(t){e.setState({port:t.target.value})},e.state={editing:!1,port:8001,endpoint:"http://"+window.location.hostname+":8001",data:{},ready:!1},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.initSocket()}},{key:"render",value:function(){return this.state.ready?l.a.createElement(H,{data:this.state.data,socket:this.socket,clientId:this.clientId}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(D,{style:{fontSize:100}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("h1",null,"Waiting For Your Tiles Hub To Come Online")),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("h2",null,"Address: ",window.location.hostname)),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("h2",null,"Port:"),l.a.createElement("input",{onChange:this.handleUpdatePortTextChange,value:this.state.port,type:"text",style:{marginLeft:"10px",marginRight:"10px",backgroundColor:"transparent",border:"1px solid white",color:"white",fontSize:"1.5em ",fontWeight:"bold",maxWidth:"100px",textAlign:"center",borderRadius:"10px"},disabled:!this.state.editing}),l.a.createElement("button",{style:{marginLeft:"20px",backgroundColor:"transparent",border:"1px solid white",color:"white",fontSize:"1.5em ",fontWeight:"bold",maxWidth:"100px",borderRadius:"10px"},onClick:this.handleUpdatePort},this.state.editing?"DONE":"EDIT")))}}]),t}(l.a.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(l.a.createElement(P,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");_?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):G(t,e)}))}}()}},[[57,1,2]]]);
//# sourceMappingURL=main.4ef212b3.chunk.js.map