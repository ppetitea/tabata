(this.webpackJsonptabata=this.webpackJsonptabata||[]).push([[0],{105:function(e){e.exports=JSON.parse('{"timeDirection":"DECREMENT","timerBeep":"https://lasonotheque.org/UPLOAD/mp3/2061.mp3","timerBeeps":["https://lasonotheque.org/UPLOAD/mp3/2061.mp3","https://lasonotheque.org/UPLOAD/mp3/2255.mp3"]}')},145:function(e){e.exports=JSON.parse('{"env":"ENV_PROD"}')},158:function(e,t,n){},263:function(e){e.exports=JSON.parse("{}")},264:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var i,r=n(2),a=n(0),o=n(11),c=n.n(o),u=(n(158),n(62)),s=n(14),l=n(6),d=n(267),j=n(312),m=n(298),b=n(301),f=n(303),g=n(66),p=n(138),h=n.n(p),O=n(304),v=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{},leftButtonContainer:{flex:1},title:{flexGrow:1,textAlign:"center"},right:{flex:1}}})),x=Object(s.g)((function(e){var t=e.title,n=e.backIcon,i=e.history,a=v();return Object(r.jsx)("div",{className:a.root,children:Object(r.jsx)(b.a,{position:"static",children:Object(r.jsxs)(f.a,{children:[n&&Object(r.jsx)("div",{className:a.leftButtonContainer,children:Object(r.jsx)(O.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"back",onClick:function(){return i.goBack()},children:Object(r.jsx)(h.a,{})})}),Object(r.jsx)(g.a,{variant:"h6",className:a.title,children:t}),n&&Object(r.jsx)(g.a,{className:a.title,children:" "})]})})})})),y=n(310),I=n(25),T=n.n(I),C=n(307),S=n(305),N=n(306),B=n(54),D=n.n(B),R=Object(m.a)((function(e){return{root:{},time:{textAlign:"end"}}})),E=function(e){var t=R(),n=e.title,i=e.time,a=e.onPress,o=void 0===a?function(){}:a,c=e.onDelete,u=void 0===c?function(){}:c;return Object(r.jsxs)(S.a,{button:!0,onClick:o,children:[Object(r.jsx)(N.a,{primary:n}),Object(r.jsx)(N.a,{className:t.time,primary:"".concat(i/1e3,"s")}),Object(r.jsx)(C.a,{children:Object(r.jsx)(O.a,{edge:"end","aria-label":"comments",onClick:u,children:Object(r.jsx)(D.a,{})})})]})},L=n(16),P=n(317),A=n(308),w=n(309),k=n(314),W=n(311),q=n(40),_=n(23),V=n(27),M=n(24),F=n(19),G=n(316),K=function(e){return{fromLastState:function(t){return Object.assign(e,t),e},re:function(t){return Object.assign(e,t),e},fromCollection:function(t,n){return e.re(t.find((function(t){return n(e.re(t))})))},fromCollectionById:function(t,n){return e.fromCollection(t,(function(e){return e.getId()===n}))},fromCollectionByKey:function(t,n){return e.fromCollection(t,(function(e){return e.getKey()===n}))}}},J=function(e){return{getTitle:function(){return e.title},setTitle:function(t){return e.title=t,e}}},U=function(e){return{getId:function(){return e.id},setId:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(G.a)();return e.id=t,e}}},z=function(e){return{setVisible:function(t){return e.visible=t,e},hide:function(){return e.setVisible(!1)},show:function(){return e.setVisible(!0)}}},H=function(e){return{getDuration:function(){return e.duration},setDuration:function(t){return e.duration=t,e}}},Q=function(e){return{getCollection:function(t){return e[t]},getFirst:function(t){return e[t].length>=1?e[t][0]:null},getLast:function(t){var n=e[t].length;return n>=1?e[t][n-1]:null},setCollection:function(t,n){return e[t]=n,e},getItemById:function(t,n){var i,r=Object(V.a)(e[t]);try{for(r.s();!(i=r.n()).done;){var a=i.value;if(a.getId()===n)return a}}catch(o){r.e(o)}finally{r.f()}},getItemByKey:function(t,n){var i,r=Object(V.a)(e[t]);try{for(r.s();!(i=r.n()).done;){var a=i.value;if(a.getKey()===n)return a}}catch(o){r.e(o)}finally{r.f()}},addItem:function(t,n){return e[t]?e[t]=[].concat(Object(F.a)(e[t]),[n]):e[t]=[n],e},addItemStart:function(t,n){return e[t]=[n].concat(Object(F.a)(e[t])),e},delItemById:function(t,n){return e[t]=e[t].filter((function(e){return e.getId()!==n})),e},delItemByIndex:function(t,n){return e[t]=e[t].filter((function(e,t){return t!==n})),e},delItemByKey:function(t,n){return e[t]=e[t].filter((function(e){return e.getKey()!==n})),e},modItemById:function(t,n){return e[t]=e[t].map((function(e){return e.id===n.id?n:e})),e},modItemByIndex:function(t,n,i){return e[t]=e[t].map((function(e,t){return t===i?n:e})),e},modItemByKey:function(t,n){return e[t]=e[t].map((function(e){return e.getKey()===n.getKey()?n:e})),e},justReorder:function(e,t,n){var i=Array.from(e),r=i.splice(t,1),a=Object(M.a)(r,1)[0];return i.splice(n,0,a),i},reorder:function(t,n,i){return e[t]=e.justReorder(e[t],n,i),e}}},X=function(e){return{belongRange:function(e,t,n){return e<=n&&n<=t},belongRangeMax:function(e,t,n){return e<n&&n<=t},belongRangeMin:function(e,t,n){return e<=n&&n<t},outRange:function(e,t,n){return n<=e&&t<=n}}},Y=function(){var e={};return Object.assign(e,function(e){return Object(l.a)({},X(e))}(e)),e}(),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(l.a)({},e),n=function(e){return Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)({},U(e)),J(e)),H(e)),z(e)),K(e))};return Object.assign(t,n(t)),t},$=function(e){return{getStepByTimeWithRange:function(t){var n=0,i=0,r=0,a=e.items.find((function(e){return n=i,i+=e.duration,r++,Y.belongRangeMin(n,i,t)}));return a||(a=e.items[e.items.length-1]),{item:a,min:n,max:i,index:r}},getStepByTime:function(t){return e.getStepByTimeWithRange(t).item},getStepIndex:function(t){return e.getStepByTimeWithRange(t).index},getStepInstant:function(t){var n=e.getStepByTimeWithRange(t),i=n.item,r=n.min,a=r?t-r:t;return{item:i,time:a,percent:i?a/i.duration:0}},getStepTime:function(t){return e.getStepInstant(t).time},getStepTimeDecrement:function(t){var n=e.getStepInstant(t),i=n.item,r=n.time;return i.duration-r},getStepPercent:function(t){return e.getStepInstant(t).percent},getDuration:function(){var t=0;return e.items.map((function(e){return t+=e.duration})),t},getPercent:function(t){return t/e.getDuration()},isEnded:function(t){return t>=e.getDuration()},getRemainingSteps:function(t){var n=e.getStepByTimeWithRange(t).index;return e.items.filter((function(e,t){return t>=n}))},getStepStartTime:function(t){var n,i=0,r=Object(V.a)(e.items);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(a.id===t)break;i+=a.duration}}catch(o){r.e(o)}finally{r.f()}return i},isStepEnded:function(t){var n=e.getStepInstant(t);return n.time===n.item.duration},isStepStarted:function(t){return 0===e.getStepInstant(t).time}}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(l.a)({},e),n=function(e){return Object(l.a)(Object(l.a)({},U(e)),Q(e))};return Object.assign(t,n(t)),t},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(l.a)({},e),n=function(e){return Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)({},U(e)),J(e)),Q(e)),$(e)),K(e))};return Object.assign(t,n(t)),t},ne="CURR_TRAINING_STEP_SET",ie="CURR_TRAINING_SET",re="TRAINING_LIST_SET",ae="TRAINING_ADD",oe="TRAINING_MOD",ce="TRAINING_DEL",ue="TRAINING_MOVE",se=function(e){return{type:oe,payload:e}},le=function(e){return{type:ie,payload:e}},de=Object(m.a)((function(e){return{root:{}}})),je=Object(L.b)((function(e){return{training:e.currTraining}}))((function(e){var t=de(),n=e.dispatch,i=e.training,a=e.open,o=e.handleClose,c=_.b({title:_.c("Entrer le nom de l'exercice").min(3,"Le nom doit faire minimum 3 caracteres").required("Le nom est requis"),duration:_.a("Entrer le nombre de secondes").required("requis").positive("superieur ou egal a 0").integer("nombre entier").default(30),reposDuration:_.a("Entrer le nombre de secondes").required("requis").min(0,"minimum 0").integer("nombre entier").default(30)}),u=Object(q.a)({initialValues:{title:""},validationSchema:c,onSubmit:function(e){var t=te(i),r=1e3*e.duration,a=1e3*e.reposDuration,o=Z().setId(t.items.length);if(o.setTitle(e.title).setDuration(r).show(),t.addItem("items",o),e.reposDuration&&"0"!==e.reposDuration){var c=Z().setId(t.items.length);c.setTitle("Repos").setDuration(a).hide(),t.addItem("items",c)}n(le(t)),n(se(t))}});return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(P.a,{open:a,onClose:o,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:Object(r.jsxs)("form",{onSubmit:u.handleSubmit,children:[Object(r.jsx)(A.a,{id:"form-dialog-title",children:"Nouvel exercice"}),Object(r.jsxs)(w.a,{children:[Object(r.jsx)(k.a,{autoFocus:!0,margin:"dense",id:"title",name:"title",label:"Nom de l'exercice",type:"text",fullWidth:!0,value:u.values.title,onChange:u.handleChange,error:u.touched.title&&Boolean(u.errors.title),helperText:u.touched.title&&u.errors.title}),Object(r.jsx)(k.a,{margin:"dense",id:"duration",name:"duration",label:"Duree de l'exercice",type:"text",fullWidth:!0,value:u.values.duration,onChange:u.handleChange,error:u.touched.duration&&Boolean(u.errors.duration),helperText:u.touched.duration&&u.errors.duration}),Object(r.jsx)(k.a,{margin:"dense",id:"reposDuration",name:"reposDuration",label:"Duree du repos apres l'exercice",type:"text",fullWidth:!0,value:u.values.reposDuration,onChange:u.handleChange,error:u.touched.reposDuration&&Boolean(u.errors.reposDuration),helperText:u.touched.reposDuration&&u.errors.reposDuration})]}),Object(r.jsx)(W.a,{children:Object(r.jsx)(j.a,{variant:"outlined",color:"secondary",startIcon:Object(r.jsx)(T.a,{}),fullWidth:!0,type:"submit",children:"Ajouter l'exercice"})})]})})})})),me="ENV_DEV",be="ENV_PROD",fe="INCREMENT",ge="DECREMENT",pe=function(e){return{isDevEnv:function(){return e.env===me},isProdEnv:function(){return e.env===be},setDevEnv:function(){return e.env=me,e},setProdEnv:function(){return e.env=be,e},setTimeDirection:function(t){return e.timeDirection=t,e},setTimeDirectionIncrement:function(){return e.setTimeDirection(fe)},setTimeDirectionDecrement:function(){return e.setTimeDirection(ge)},isTimerIncrement:function(){return e.timeDirection===fe},isTimerDecrement:function(){return e.timeDirection===ge},setTimerBeep:function(t){return e.timerBeep=t,e},init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.env&&(e.env=t.env),t.timeDirection&&(e.timeDirection=t.timeDirection),e}}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(l.a)({env:me,timeDirection:ge,timerBeep:"https://lasonotheque.org/UPLOAD/mp3/2061.mp3"},e),n=function(e){return Object(l.a)({},pe(e))};return Object.assign(t,n(t)),t},Oe=(n(263),n(145)),ve=n(105),xe=he({env:Oe.env,timeDirection:ve.timeDirection,timerBeep:ve.timerBeep}),ye=function(e){return{type:ne,payload:e}},Ie=Object(m.a)((function(e){return{root:{}}})),Te=Object(L.b)((function(e){return{training:e.currTraining,trainingStep:e.currTrainingStep}}))((function(e){var t=Ie(),n=e.dispatch,i=e.training,a=e.trainingStep,o=e.open,c=e.handleClose,u=_.b({title:_.c("Donner un nom a votre entrainement").min(3,"Le nom doit faire minimum 3 caracteres").required("Le nom est requis"),duration:_.a("Entrer le nombre de secondes").required("requis").positive("superieur ou egal a 0").integer("nombre entier").default(30)}),s=Object(q.a)({initialValues:{title:a.title?a.title:"",duration:a.duration/1e3},validationSchema:u,onSubmit:function(e){var t=Z(a);t.setTitle(e.title),t.setDuration(1e3*e.duration),n(ye(t));var r=te(i);r.modItemById("items",t),n(le(r)),n(se(r))}});return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(P.a,{open:o,onClose:c,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:Object(r.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(r.jsx)(A.a,{id:"form-dialog-title",children:"Modifier l'entrainement"}),Object(r.jsxs)(w.a,{children:[Object(r.jsx)(k.a,{autoFocus:!0,margin:"dense",id:"title",name:"title",label:"Nom de l'entrainement",type:"text",fullWidth:!0,value:s.values.title,onChange:s.handleChange,error:s.touched.title&&Boolean(s.errors.title),helperText:s.touched.title&&s.errors.title}),Object(r.jsx)(k.a,{margin:"dense",id:"duration",name:"duration",label:"Duree de l'exercice",type:"text",fullWidth:!0,value:s.values.duration,onChange:s.handleChange,error:s.touched.duration&&Boolean(s.errors.duration),helperText:s.touched.duration&&s.errors.duration})]}),Object(r.jsx)(W.a,{children:Object(r.jsx)(j.a,{variant:"outlined",color:"secondary",startIcon:Object(r.jsx)(T.a,{}),fullWidth:!0,type:"submit",children:"Modifier l'entrainement"})})]})})})})),Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a.useState)(e),n=Object(M.a)(t,2),i=n[0],r=n[1],o=function(){return r(!0)},c=function(){return r(!1)},u=function(){return r(!i)};return{visible:i,show:o,hide:c,toggleVisibility:u}},Se=n(47),Ne=Object(m.a)((function(e){return{root:{},paper:{margin:10},list:{justifyContent:"center"},iconContainer:{justifyContent:"flex-end"},endListButton:{marginLeft:"auto",marginRight:"auto"},endListButtonContainer:{display:"flex",justifyContent:"center",padding:5},trainingButtonContainer:{position:"absolute",display:"flex",width:"100%",bottom:10},trainingButton:{flex:1,marginLeft:10,marginRight:10}}})),Be=Object(L.b)((function(e){return{training:te(e.currTraining)}}))((function(e){var t=e.dispatch,n=e.training,i=Ne(),a=Ce(),o=Ce();return Object(r.jsxs)("div",{className:i.root,children:[Object(r.jsx)(x,{title:n.title,backIcon:!0}),Object(r.jsxs)(d.a,{variant:"outlined",className:i.paper,children:[Object(r.jsx)(Se.a,{onDragEnd:function(e){if(e.destination){var i=e.source.index,r=e.destination.index,a=te(n);a.reorder("items",i,r),t(le(a)),t(se(a))}},children:Object(r.jsx)(Se.c,{droppableId:"training",children:function(e,a){return Object(r.jsxs)(y.a,Object(l.a)(Object(l.a)({className:i.list},e.droppableProps),{},{ref:e.innerRef,children:[n.items.map((function(e,i){var a=Z(e),c="id"+e.id;return Object(r.jsx)(Se.b,{draggableId:c,index:i,children:function(e,c){return Object(r.jsx)("div",Object(l.a)(Object(l.a)(Object(l.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{style:e.draggableProps.style,children:Object(r.jsx)(E,{title:a.title,time:a.duration,onPress:function(){t(ye(a)),o.show()},onDelete:function(){var e=te(n);e.delItemByIndex("items",i),t(le(e))}},i)}))}},c)})),e.placeholder]}))}})}),Object(r.jsx)("div",{className:i.endListButtonContainer,children:Object(r.jsx)(j.a,{variant:"outlined",color:"secondary",onClick:a.show,startIcon:Object(r.jsx)(T.a,{}),className:i.endListButton,children:"Ajouter"})})]}),Object(r.jsx)("div",{className:i.trainingButtonContainer,children:Object(r.jsx)(j.a,{variant:"contained",color:"primary",href:xe.isProdEnv()?"#/training-run":"/training-run",className:i.trainingButton,disabled:0===n.items.length,children:"Entrainement"})}),a.visible&&Object(r.jsx)(je,{open:a.visible,handleClose:a.hide}),o.visible&&Object(r.jsx)(Te,{open:o.visible,handleClose:o.hide})]})})),De=n(313),Re=function(e){var t={};return Object.assign(t,function(e){return Object(l.a)(Object(l.a)({},K(e)),function(e){return Object(l.a)(Object(l.a)({},function(e){return{getActions:function(){return e.actions},setActions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.actions=t,e},can:function(t){return!(!e.actions||!e.actions.find((function(e){return e===t})))}}}(e)),{},{initTimer:function(){return e.time=0,e.isRunning=!1,e.actions=["play"],e},setTime:function(t){return e.time=t,e},increment:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return isNaN(e.time)&&(e.time=0),e.time+=t,e},decrement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return e.time-t>=0?e.time-=t:e.time=0,e},play:function(){return e.isRunning=!0,e.actions=["pause","stop"],e},replay:function(){return e.time=0,e.isRunning=!0,e.actions=["pause","stop"],e},pause:function(){return e.isRunning=!1,e.actions=["play","replay"],e},stop:function(){return e.time=0,e.isRunning=!1,e.actions=["play"],e}})}(e))}(t)),e&&t.fromLastState(e),t},Ee=function(){var e=Object(a.useState)(Re().initTimer()),t=Object(M.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){n&&n.isRunning&&i(Object(l.a)({},Re(n).increment()))}),1e3);return function(){return clearInterval(e)}}),[n]),{timer:n,play:function(){return i(Object(l.a)({},Re(n).play()))},replay:function(){return i(Object(l.a)({},Re(n).replay()))},pause:function(){return i(Object(l.a)({},Re(n).pause()))},stop:function(){return i(Object(l.a)({},Re(n).stop()))},setTime:function(e){return i(Object(l.a)({},Re(n).setTime(e)))}}},Le=Object(m.a)((function(e){return{root:{},body:{display:"flex",flexDirection:"column",height:"100%",alignItems:"center"},title:{paddingTop:50,paddingBottom:50,textAlign:"center",maxHeight:"10%","overflow-y":"scroll"},progressArea:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"6rem"},circleOutBg:{color:e.palette.grey["light"===e.palette.type?200:700]},circleOut:{marginTop:"-16rem"},circleInBg:{marginTop:"-14.5rem",color:e.palette.grey["light"===e.palette.type?200:700]},circleIn:{marginTop:"-13rem"},timer:{marginTop:"-8.5rem"},paper:{marginTop:30,margin:10,width:"90%",height:"20%","overflow-y":"scroll"},list:{justifyContent:"center"},iconContainer:{justifyContent:"flex-end"},endListButton:{marginLeft:"auto",marginRight:"auto"},trainingButtonContainer:{position:"absolute",display:"flex",justifyContent:"center",width:"100%",bottom:10},trainingButton:{width:"90%",marginLeft:10,marginRight:10},time:{textAlign:"end"}}})),Pe=Object(L.b)((function(e){return{training:te(e.currTraining)}}))((function(e){var t=Le(),n=e.training,o=(e.dispatch,Ee()),c=o.timer,u=o.play,s=o.replay,l=o.pause,m=o.stop,b=o.setTime,f=function(e){var t=Object(a.useState)(new Audio(e)),n=Object(M.a)(t,1)[0],i=Object(a.useState)(!1),r=Object(M.a)(i,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){o?n.play():n.pause()}),[o]),Object(a.useEffect)((function(){return n.addEventListener("ended",(function(){return c(!1)})),function(){n.removeEventListener("ended",(function(){return c(!1)}))}}),[]),{playing:o,toggle:function(){return c(!o)},play:function(){return c(!0)},pause:function(){return c(!1)}}}(xe.timerBeep),p=c?c.time:0;n.isEnded(p)&&(f.play(),m());var h=n.getStepIndex(p);return c.isRunning&&n.isStepStarted(p)&&i!==h&&(f.play(),i=h),Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(x,{title:n.title,backIcon:!0}),Object(r.jsxs)("div",{className:t.body,children:[Object(r.jsx)(g.a,{className:t.title,variant:"h3",color:"secondary",children:n.getStepByTime(p).title}),Object(r.jsxs)("div",{className:t.progressArea,children:[Object(r.jsx)(De.a,{variant:"determinate",value:100,size:"16rem",className:t.circleOutBg}),Object(r.jsx)(De.a,{variant:"determinate",value:100*n.getPercent(p),size:"16rem",className:t.circleOut}),Object(r.jsx)(De.a,{variant:"determinate",value:100,size:"13rem",className:t.circleInBg,color:"secondary"}),Object(r.jsx)(De.a,{variant:"determinate",value:100*n.getStepPercent(p),size:"13rem",className:t.circleIn,color:"secondary"}),Object(r.jsxs)(g.a,{className:t.timer,variant:"h2",color:"secondary",children:[xe.isTimerIncrement()?n.getStepTime(p)/1e3:n.getStepTimeDecrement(p)/1e3,"s"]})]}),Object(r.jsx)(d.a,{variant:"outlined",className:t.paper,children:Object(r.jsx)(y.a,{className:t.list,children:n.getRemainingSteps(p).map((function(e,i){return Object(r.jsxs)(S.a,{button:!0,onClick:function(){return b(n.getStepStartTime(e.id))},children:[Object(r.jsx)(N.a,{primary:e.title}),Object(r.jsx)(N.a,{primary:"".concat(e.duration/1e3,"s"),className:t.time})]},"".concat(i))}))})}),Object(r.jsxs)("div",{className:t.trainingButtonContainer,children:[Object(r.jsx)(j.a,{disabled:!c.can("play"),variant:"contained",color:"primary",onClick:function(){return u()},className:t.trainingButton,children:"Play"}),Object(r.jsx)(j.a,{disabled:!c.can("pause"),variant:"contained",color:"primary",onClick:function(){return l()},className:t.trainingButton,children:"Pause"}),Object(r.jsx)(j.a,{disabled:!c.can("stop"),variant:"contained",color:"primary",onClick:function(){return m()},className:t.trainingButton,children:"Stop"}),Object(r.jsx)(j.a,{disabled:!c.can("replay"),variant:"contained",color:"primary",onClick:function(){return s()},className:t.trainingButton,children:"Replay"})]})]})]})})),Ae=Object(m.a)((function(e){return{root:{}}})),we=Object(L.b)((function(e){return{}}))((function(e){var t=Ae(),n=e.dispatch,i=e.open,a=e.handleClose,o=_.b({title:_.c("Donner un nom a votre entrainement").min(3,"Le nom doit faire minimum 3 caracteres").required("Le nom est requis")}),c=Object(q.a)({initialValues:{title:""},validationSchema:o,onSubmit:function(e){var t=te();t.setId().setTitle(e.title).setCollection("items",[]),n({type:ae,payload:t})}});return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(P.a,{open:i,onClose:a,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:Object(r.jsxs)("form",{onSubmit:c.handleSubmit,children:[Object(r.jsx)(A.a,{id:"form-dialog-title",children:"Nouvel entrainement"}),Object(r.jsx)(w.a,{children:Object(r.jsx)(k.a,{autoFocus:!0,margin:"dense",id:"title",name:"title",label:"Nom de l'entrainement",type:"text",fullWidth:!0,value:c.values.title,onChange:c.handleChange,error:c.touched.title&&Boolean(c.errors.title),helperText:c.touched.title&&c.errors.title})}),Object(r.jsx)(W.a,{children:Object(r.jsx)(j.a,{variant:"outlined",color:"secondary",startIcon:Object(r.jsx)(T.a,{}),fullWidth:!0,type:"submit",children:"Ajouter le nouvel entrainement"})})]})})})})),ke=Object(m.a)((function(e){return{root:{}}})),We=Object(L.b)((function(e){return{training:e.currTraining}}))((function(e){var t=ke(),n=e.dispatch,i=e.training,a=e.open,o=e.handleClose,c=_.b({title:_.c("Donner un nom a votre entrainement").min(3,"Le nom doit faire minimum 3 caracteres").required("Le nom est requis")}),u=Object(q.a)({initialValues:{title:i.title?i.title:""},validationSchema:c,onSubmit:function(e){var t=te(i);t.setTitle(e.title),n(se(t))}});return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(P.a,{open:a,onClose:o,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:Object(r.jsxs)("form",{onSubmit:u.handleSubmit,children:[Object(r.jsx)(A.a,{id:"form-dialog-title",children:"Modifier l'entrainement"}),Object(r.jsx)(w.a,{children:Object(r.jsx)(k.a,{autoFocus:!0,margin:"dense",id:"title",name:"title",label:"Nom de l'entrainement",type:"text",fullWidth:!0,value:u.values.title,onChange:u.handleChange,error:u.touched.title&&Boolean(u.errors.title),helperText:u.touched.title&&u.errors.title})}),Object(r.jsx)(W.a,{children:Object(r.jsx)(j.a,{variant:"outlined",color:"secondary",startIcon:Object(r.jsx)(T.a,{}),fullWidth:!0,type:"submit",children:"Modifier l'entrainement"})})]})})})})),qe=n(146),_e=n.n(qe),Ve=Object(m.a)((function(e){return{root:{},paper:{margin:10},list:{justifyContent:"center"},endListButton:{},endListButtonContainer:{display:"flex",justifyContent:"center",padding:5}}})),Me=Object(L.b)((function(e){return{trainingList:ee(e.trainingList),currTraining:te(e.currTraining)}}))((function(e){var t=Ve(),n=e.trainingList,i=e.dispatch,a=(e.currTraining,Ce()),o=Ce(),c=Object(s.f)();return Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(x,{title:"Training"}),Object(r.jsxs)(d.a,{variant:"outlined",className:t.paper,children:[Object(r.jsx)(Se.a,{onDragEnd:function(e){if(e.destination){var t,r=e.source.index,a=e.destination.index,o=ee(n);o.reorder("list",r,a),i((t=o.list,{type:re,payload:t}))}},children:Object(r.jsx)(Se.c,{droppableId:"trainingList",children:function(e,a){return Object(r.jsxs)(y.a,Object(l.a)(Object(l.a)({className:t.list},e.droppableProps),{},{ref:e.innerRef,children:[n.list.map((function(e,t){var n=te(e),a=function(){i(le(n)),c.push("/training")},u=function(){i(le(n)),o.show()},s=function(){i({type:ce,payload:n})};return Object(r.jsx)(Se.b,{draggableId:e.id,index:t,children:function(n,i){return Object(r.jsx)("div",Object(l.a)(Object(l.a)(Object(l.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{style:n.draggableProps.style,children:Object(r.jsxs)(S.a,{button:!0,onClick:a,children:[Object(r.jsx)(N.a,{primary:e.title}),Object(r.jsxs)(C.a,{children:[Object(r.jsx)(O.a,{edge:"end","aria-label":"comments",onClick:s,children:Object(r.jsx)(D.a,{})}),Object(r.jsx)(O.a,{edge:"end","aria-label":"comments",onClick:u,children:Object(r.jsx)(_e.a,{})})]})]},t)}))}},e.id)})),e.placeholder]}))}})}),Object(r.jsx)("div",{className:t.endListButtonContainer,children:Object(r.jsx)(j.a,{variant:"outlined",color:"secondary",onClick:a.show,startIcon:Object(r.jsx)(T.a,{}),className:t.endListButton,children:"Ajouter"})})]}),a.visible&&Object(r.jsx)(we,{open:a.visible,handleClose:a.hide}),o.visible&&Object(r.jsx)(We,{open:o.visible,handleClose:o.hide})]})}));function Fe(){var e=xe.isProdEnv()?u.b:u.a,t=xe.isProdEnv()?"/tabata/":"/";return Object(r.jsx)(e,{basename:t,children:Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{exact:!0,path:"/",children:Object(r.jsx)(Me,{})}),Object(r.jsx)(s.a,{path:"/training",children:Object(r.jsx)(Be,{})}),Object(r.jsx)(s.a,{path:"/training-run",children:Object(r.jsx)(Pe,{})})]})})}n(264);var Ge=n(45),Ke=function(){return te().setId("default").setCollection("items",[])},Je=function(){return Z().setId().setTitle("Bidibou <3").setDuration(30)},Ue=function(){return ee({list:[]}).setId()},ze=Object(Ge.c)({trainingList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:var n=Object(l.a)(Object(l.a)({},e),{},{list:Object(F.a)(t.payload)});return n;case ae:var i=[].concat(Object(F.a)(e.list),[t.payload]),r=Object(l.a)(Object(l.a)({},e),{},{list:i});return r;case oe:var a=Object(l.a)({},t.payload),o=e.list.map((function(e){var t=te(e);return t.getId()===a.getId()?a:t})),c=Object(l.a)(Object(l.a)({},e),{},{list:o});return c;case ce:var u=Object(l.a)({},t.payload),s=e.list.filter((function(e){return te(e).getId()!==u.getId()})),d=Object(l.a)(Object(l.a)({},e),{},{list:s});return d;case ue:var j=t.payload,m=j.indexA,b=j.indexB,f=Object(F.a)(e.list),g=f[m];f[m]=f[b],f[b]=g;var p=Object(l.a)(Object(l.a)({},e),{},{list:f});return p;default:return e}},currTraining:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:var n=Object(l.a)({},t.payload);return n;default:return e}},currTrainingStep:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:var n=Object(l.a)({},t.payload);return n;default:return e}}});var He=Object(Ge.e)(ze,function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}());He.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(n){console.warn(n)}}(He.getState())}));var Qe=function(){return Object(r.jsx)(L.a,{store:He,children:Object(r.jsx)("div",{id:"app",children:Object(r.jsx)(Fe,{})})})},Xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,319)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))};c.a.render(Object(r.jsx)(Qe,{}),document.getElementById("root")),Xe()}},[[265,1,2]]]);
//# sourceMappingURL=main.5cea7f73.chunk.js.map