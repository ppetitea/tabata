(this.webpackJsonptabata=this.webpackJsonptabata||[]).push([[0],{103:function(e){e.exports=JSON.parse('{"timeDirection":"DECREMENT","timerBeep":"https://lasonotheque.org/UPLOAD/mp3/2061.mp3"}')},144:function(e){e.exports=JSON.parse('{"env":"ENV_PROD"}')},157:function(e,t,n){},262:function(e){e.exports=JSON.parse("{}")},263:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var i,r=n(2),a=n(0),o=n(11),c=n.n(o),u=(n(157),n(60)),l=n(13),s=n(266),d=n(311),m=n(297),j=n(300),b=n(302),f=n(64),g=n(136),h=n.n(g),p=n(303),O=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{},leftButtonContainer:{flex:1},title:{flexGrow:1,textAlign:"center"},right:{flex:1}}})),v=Object(l.g)((function(e){var t=e.title,n=e.backIcon,i=e.history,a=O();return Object(r.jsx)("div",{className:a.root,children:Object(r.jsx)(j.a,{position:"static",children:Object(r.jsxs)(b.a,{children:[n&&Object(r.jsx)("div",{className:a.leftButtonContainer,children:Object(r.jsx)(p.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"back",onClick:function(){return i.goBack()},children:Object(r.jsx)(h.a,{})})}),Object(r.jsx)(f.a,{variant:"h6",className:a.title,children:t}),n&&Object(r.jsx)(f.a,{className:a.title,children:" "})]})})})})),x=n(309),y=n(304),I=n(23),T=n.n(I),S=n(306),C=n(305),N=n(52),B=n.n(N),D=Object(m.a)((function(e){return{root:{},time:{textAlign:"end"}}})),R=function(e){var t=D(),n=e.title,i=e.time,a=e.onPress,o=void 0===a?function(){}:a,c=e.onDelete,u=void 0===c?function(){}:c;return Object(r.jsxs)(y.a,{button:!0,onClick:o,children:[Object(r.jsx)(C.a,{primary:n}),Object(r.jsx)(C.a,{className:t.time,primary:"".concat(i/1e3,"s")}),Object(r.jsx)(S.a,{children:Object(r.jsx)(p.a,{edge:"end","aria-label":"comments",onClick:u,children:Object(r.jsx)(B.a,{})})})]})},E=n(19),L=n(316),A=n(307),w=n(308),k=n(313),P=n(310),W=n(40),q=n(22),_=n(27),V=n(7),M=n(18),F=n(315),G=function(e){return{fromLastState:function(t){return Object.assign(e,t),e},re:function(t){return Object.assign(e,t),e},fromCollection:function(t,n){return e.re(t.find((function(t){return n(e.re(t))})))},fromCollectionById:function(t,n){return e.fromCollection(t,(function(e){return e.getId()===n}))},fromCollectionByKey:function(t,n){return e.fromCollection(t,(function(e){return e.getKey()===n}))}}},K=function(e){return{getTitle:function(){return e.title},setTitle:function(t){return e.title=t,e}}},J=function(e){return{getId:function(){return e.id},setId:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(F.a)();return e.id=t,e}}},z=function(e){return{setVisible:function(t){return e.visible=t,e},hide:function(){return e.setVisible(!1)},show:function(){return e.setVisible(!0)}}},U=function(e){return{getDuration:function(){return e.duration},setDuration:function(t){return e.duration=t,e}}},H=function(e){return{getCollection:function(t){return e[t]},getFirst:function(t){return e[t].length>=1?e[t][0]:null},getLast:function(t){var n=e[t].length;return n>=1?e[t][n-1]:null},setCollection:function(t,n){return e[t]=n,e},getItemById:function(t,n){var i,r=Object(_.a)(e[t]);try{for(r.s();!(i=r.n()).done;){var a=i.value;if(a.getId()===n)return a}}catch(o){r.e(o)}finally{r.f()}},getItemByKey:function(t,n){var i,r=Object(_.a)(e[t]);try{for(r.s();!(i=r.n()).done;){var a=i.value;if(a.getKey()===n)return a}}catch(o){r.e(o)}finally{r.f()}},addItem:function(t,n){return e[t]?e[t]=[].concat(Object(M.a)(e[t]),[n]):e[t]=[n],e},addItemStart:function(t,n){return e[t]=[n].concat(Object(M.a)(e[t])),e},delItemById:function(t,n){return e[t]=e[t].filter((function(e){return e.getId()!==n})),e},delItemByIndex:function(t,n){return e[t]=e[t].filter((function(e,t){return t!==n})),e},delItemByKey:function(t,n){return e[t]=e[t].filter((function(e){return e.getKey()!==n})),e},modItemById:function(t,n){return e[t]=e[t].map((function(e){return e.id===n.id?n:e})),e},modItemByIndex:function(t,n,i){return e[t]=e[t].map((function(e,t){return t===i?n:e})),e},modItemByKey:function(t,n){return e[t]=e[t].map((function(e){return e.getKey()===n.getKey()?n:e})),e}}},Q=function(e){return{belongRange:function(e,t,n){return e<=n&&n<=t},belongRangeMax:function(e,t,n){return e<n&&n<=t},belongRangeMin:function(e,t,n){return e<=n&&n<t},outRange:function(e,t,n){return n<=e&&t<=n}}},X=function(){var e={};return Object.assign(e,function(e){return Object(V.a)({},Q(e))}(e)),e}(),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(V.a)({},e),n=function(e){return Object(V.a)(Object(V.a)(Object(V.a)(Object(V.a)(Object(V.a)({},J(e)),K(e)),U(e)),z(e)),G(e))};return Object.assign(t,n(t)),t},Z=function(e){return{getStepByTimeWithRange:function(t){var n=0,i=0,r=0;return{item:e.items.find((function(e){return n=i,i+=e.duration,r++,X.belongRangeMin(n,i,t)})),min:n,max:i,index:r}},getStepByTime:function(t){return e.getStepByTimeWithRange(t).item},getStepIndex:function(t){return e.getStepByTimeWithRange(t).index},getStepInstant:function(t){var n=e.getStepByTimeWithRange(t),i=n.item,r=n.min,a=r?t-r:t;return{item:i,time:a,percent:i?a/i.duration:0}},getStepTime:function(t){return e.getStepInstant(t).time},getStepTimeDecrement:function(t){var n=e.getStepInstant(t),i=n.item,r=n.time;return i.duration-r},getStepPercent:function(t){return e.getStepInstant(t).percent},getDuration:function(){var t=0;return e.items.map((function(e){return t+=e.duration})),t},getPercent:function(t){return t/e.getDuration()},isEnded:function(t){return t>=e.getDuration()},getRemainingSteps:function(t){var n=e.getStepByTimeWithRange(t).index;return e.items.filter((function(e,t){return t>=n}))},getStepStartTime:function(t){var n,i=0,r=Object(_.a)(e.items);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(a.id===t)break;i+=a.duration}}catch(o){r.e(o)}finally{r.f()}return i},isStepEnded:function(t){var n=e.getStepInstant(t);return n.time===n.item.duration},isStepStarted:function(t){return 0===e.getStepInstant(t).time}}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(V.a)({},e),n=function(e){return Object(V.a)(Object(V.a)(Object(V.a)(Object(V.a)(Object(V.a)({},J(e)),K(e)),H(e)),Z(e)),G(e))};return Object.assign(t,n(t)),t},ee="CURR_TRAINING_STEP_SET",te="CURR_TRAINING_SET",ne="TRAINING_LIST_SET",ie="TRAINING_ADD",re="TRAINING_MOD",ae="TRAINING_DEL",oe="TRAINING_MOVE",ce=function(e){return{type:re,payload:e}},ue=function(e){return{type:te,payload:e}},le=Object(m.a)((function(e){return{root:{}}})),se=Object(E.b)((function(e){return{training:e.currTraining}}))((function(e){var t=le(),n=e.dispatch,i=e.training,a=e.open,o=e.handleClose,c=q.b({title:q.c("Entrer le nom de l'exercice").min(3,"Le nom doit faire minimum 3 caracteres").required("Le nom est requis"),duration:q.a("Entrer le nombre de secondes").required("requis").positive("superieur ou egal a 0").integer("nombre entier").default(30),reposDuration:q.a("Entrer le nombre de secondes").required("requis").min(0,"minimum 0").integer("nombre entier").default(30)}),u=Object(W.a)({initialValues:{title:""},validationSchema:c,onSubmit:function(e){var t=$(i),r=1e3*e.duration,a=1e3*e.reposDuration,o=Y().setId(t.items.length);if(o.setTitle(e.title).setDuration(r).show(),t.addItem("items",o),"0"!==e.reposDuration){var c=Y().setId(t.items.length);c.setTitle("Repos").setDuration(a).hide(),t.addItem("items",c)}n(ue(t))}});return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(L.a,{open:a,onClose:o,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:Object(r.jsxs)("form",{onSubmit:u.handleSubmit,children:[Object(r.jsx)(A.a,{id:"form-dialog-title",children:"Nouvel exercice"}),Object(r.jsxs)(w.a,{children:[Object(r.jsx)(k.a,{autoFocus:!0,margin:"dense",id:"title",name:"title",label:"Nom de l'exercice",type:"text",fullWidth:!0,value:u.values.title,onChange:u.handleChange,error:u.touched.title&&Boolean(u.errors.title),helperText:u.touched.title&&u.errors.title}),Object(r.jsx)(k.a,{margin:"dense",id:"duration",name:"duration",label:"Duree de l'exercice",type:"text",fullWidth:!0,value:u.values.duration,onChange:u.handleChange,error:u.touched.duration&&Boolean(u.errors.duration),helperText:u.touched.duration&&u.errors.duration}),Object(r.jsx)(k.a,{margin:"dense",id:"reposDuration",name:"reposDuration",label:"Duree du repos apres l'exercice",type:"text",fullWidth:!0,value:u.values.reposDuration,onChange:u.handleChange,error:u.touched.reposDuration&&Boolean(u.errors.reposDuration),helperText:u.touched.reposDuration&&u.errors.reposDuration})]}),Object(r.jsx)(P.a,{children:Object(r.jsx)(d.a,{variant:"outlined",color:"secondary",startIcon:Object(r.jsx)(T.a,{}),fullWidth:!0,type:"submit",children:"Ajouter l'exercice"})})]})})})})),de="ENV_DEV",me="ENV_PROD",je="INCREMENT",be="DECREMENT",fe=function(e){return{isDevEnv:function(){return e.env===de},isProdEnv:function(){return e.env===me},setDevEnv:function(){return e.env=de,e},setProdEnv:function(){return e.env=me,e},setTimeDirection:function(t){return e.timeDirection=t,e},setTimeDirectionIncrement:function(){return e.setTimeDirection(je)},setTimeDirectionDecrement:function(){return e.setTimeDirection(be)},isTimerIncrement:function(){return e.timeDirection===je},isTimerDecrement:function(){return e.timeDirection===be},setTimerBeep:function(t){return e.timerBeep=t,e},init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.env&&(e.env=t.env),t.timeDirection&&(e.timeDirection=t.timeDirection),e}}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(V.a)({env:de,timeDirection:be,timerBeep:"https://lasonotheque.org/UPLOAD/mp3/2061.mp3"},e),n=function(e){return Object(V.a)({},fe(e))};return Object.assign(t,n(t)),t},he=(n(262),n(144)),pe=n(103),Oe=ge({env:he.env,timeDirection:pe.timeDirection,timerBeep:pe.timerBeep}),ve=function(e){return{type:ee,payload:e}},xe=Object(m.a)((function(e){return{root:{}}})),ye=Object(E.b)((function(e){return{training:e.currTraining,trainingStep:e.currTrainingStep}}))((function(e){var t=xe(),n=e.dispatch,i=e.training,a=e.trainingStep,o=e.open,c=e.handleClose,u=q.b({title:q.c("Donner un nom a votre entrainement").min(3,"Le nom doit faire minimum 3 caracteres").required("Le nom est requis"),duration:q.a("Entrer le nombre de secondes").required("requis").positive("superieur ou egal a 0").integer("nombre entier").default(30)}),l=Object(W.a)({initialValues:{title:a.title?a.title:"",duration:a.duration/1e3},validationSchema:u,onSubmit:function(e){var t=Y(a);t.setTitle(e.title),t.setDuration(1e3*e.duration),n(ve(t));var r=$(i);r.modItemById("items",t),n(ue(r)),n(ce(r))}});return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(L.a,{open:o,onClose:c,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:Object(r.jsxs)("form",{onSubmit:l.handleSubmit,children:[Object(r.jsx)(A.a,{id:"form-dialog-title",children:"Modifier l'entrainement"}),Object(r.jsxs)(w.a,{children:[Object(r.jsx)(k.a,{autoFocus:!0,margin:"dense",id:"title",name:"title",label:"Nom de l'entrainement",type:"text",fullWidth:!0,value:l.values.title,onChange:l.handleChange,error:l.touched.title&&Boolean(l.errors.title),helperText:l.touched.title&&l.errors.title}),Object(r.jsx)(k.a,{margin:"dense",id:"duration",name:"duration",label:"Duree de l'exercice",type:"text",fullWidth:!0,value:l.values.duration,onChange:l.handleChange,error:l.touched.duration&&Boolean(l.errors.duration),helperText:l.touched.duration&&l.errors.duration})]}),Object(r.jsx)(P.a,{children:Object(r.jsx)(d.a,{variant:"outlined",color:"secondary",startIcon:Object(r.jsx)(T.a,{}),fullWidth:!0,type:"submit",children:"Modifier l'entrainement"})})]})})})})),Ie=n(26),Te=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a.useState)(e),n=Object(Ie.a)(t,2),i=n[0],r=n[1],o=function(){return r(!0)},c=function(){return r(!1)},u=function(){return r(!i)};return{visible:i,show:o,hide:c,toggleVisibility:u}},Se=Object(m.a)((function(e){return{root:{},paper:{margin:10},list:{justifyContent:"center"},iconContainer:{justifyContent:"flex-end"},endListButton:{marginLeft:"auto",marginRight:"auto"},trainingButtonContainer:{position:"absolute",display:"flex",width:"100%",bottom:10},trainingButton:{flex:1,marginLeft:10,marginRight:10}}})),Ce=Object(E.b)((function(e){return{training:$(e.currTraining)}}))((function(e){var t=e.dispatch,n=e.training,i=Se(),a=Te(),o=Te();return Object(r.jsxs)("div",{className:i.root,children:[Object(r.jsx)(v,{title:n.title,backIcon:!0}),Object(r.jsx)(s.a,{variant:"outlined",className:i.paper,children:Object(r.jsxs)(x.a,{className:i.list,children:[n.items.map((function(e,i){var a=Y(e);return Object(r.jsx)(R,{title:a.title,time:a.duration,onPress:function(){t(ve(a)),o.show()},onDelete:function(){var e=$(n);e.delItemByIndex("items",i),t(ue(e))}},i)})),Object(r.jsx)(y.a,{children:Object(r.jsx)(d.a,{variant:"outlined",color:"secondary",onClick:a.show,startIcon:Object(r.jsx)(T.a,{}),className:i.endListButton,children:"Ajouter"})})]})}),Object(r.jsx)("div",{className:i.trainingButtonContainer,children:Object(r.jsx)(d.a,{variant:"contained",color:"primary",href:Oe.isProdEnv()?"#/training-run":"/training-run",className:i.trainingButton,disabled:0===n.items.length,children:"Entrainement"})}),a.visible&&Object(r.jsx)(se,{open:a.visible,handleClose:a.hide}),o.visible&&Object(r.jsx)(ye,{open:o.visible,handleClose:o.hide})]})})),Ne=n(312),Be=function(e){var t={};return Object.assign(t,function(e){return Object(V.a)(Object(V.a)({},G(e)),function(e){return Object(V.a)(Object(V.a)({},function(e){return{getActions:function(){return e.actions},setActions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.actions=t,e},can:function(t){return!(!e.actions||!e.actions.find((function(e){return e===t})))}}}(e)),{},{initTimer:function(){return e.time=0,e.isRunning=!1,e.actions=["play"],e},setTime:function(t){return e.time=t,e},increment:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return isNaN(e.time)&&(e.time=0),e.time+=t,e},decrement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return e.time-t>=0?e.time-=t:e.time=0,e},play:function(){return e.isRunning=!0,e.actions=["pause","stop"],e},replay:function(){return e.time=0,e.isRunning=!0,e.actions=["pause","stop"],e},pause:function(){return e.isRunning=!1,e.actions=["play","replay"],e},stop:function(){return e.time=0,e.isRunning=!1,e.actions=["play"],e}})}(e))}(t)),e&&t.fromLastState(e),t},De=function(){var e=Object(a.useState)(Be().initTimer()),t=Object(Ie.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){n&&n.isRunning&&i(Object(V.a)({},Be(n).increment()))}),1e3);return function(){return clearInterval(e)}}),[n]),{timer:n,play:function(){return i(Object(V.a)({},Be(n).play()))},replay:function(){return i(Object(V.a)({},Be(n).replay()))},pause:function(){return i(Object(V.a)({},Be(n).pause()))},stop:function(){return i(Object(V.a)({},Be(n).stop()))},setTime:function(e){return i(Object(V.a)({},Be(n).setTime(e)))}}},Re=Object(m.a)((function(e){return{root:{},body:{display:"flex",flexDirection:"column",height:"100%",alignItems:"center"},title:{paddingTop:50,paddingBottom:50,textAlign:"center",maxHeight:"10%","overflow-y":"scroll"},progressArea:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"6rem"},circleOutBg:{color:e.palette.grey["light"===e.palette.type?200:700]},circleOut:{marginTop:"-16rem"},circleInBg:{marginTop:"-14.5rem",color:e.palette.grey["light"===e.palette.type?200:700]},circleIn:{marginTop:"-13rem"},timer:{marginTop:"-8.5rem"},paper:{marginTop:30,margin:10,width:"90%",height:"20%","overflow-y":"scroll"},list:{justifyContent:"center"},iconContainer:{justifyContent:"flex-end"},endListButton:{marginLeft:"auto",marginRight:"auto"},trainingButtonContainer:{position:"absolute",display:"flex",justifyContent:"center",width:"100%",bottom:10},trainingButton:{width:"90%",marginLeft:10,marginRight:10},time:{textAlign:"end"}}})),Ee=Object(E.b)((function(e){return{training:$(e.currTraining)}}))((function(e){var t=Re(),n=e.training,o=(e.dispatch,De()),c=o.timer,u=o.play,l=o.replay,m=o.pause,j=o.stop,b=o.setTime,g=function(e){var t=Object(a.useState)(new Audio(e)),n=Object(Ie.a)(t,1)[0],i=Object(a.useState)(!1),r=Object(Ie.a)(i,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){o?n.play():n.pause()}),[o]),Object(a.useEffect)((function(){return n.addEventListener("ended",(function(){return c(!1)})),function(){n.removeEventListener("ended",(function(){return c(!1)}))}}),[]),{playing:o,toggle:function(){return c(!o)},play:function(){return c(!0)},pause:function(){return c(!1)}}}(Oe.timerBeep),h=c?c.time:0;n.isEnded(h)&&j();var p=n.getStepIndex(h);return c.isRunning&&n.isStepStarted(h)&&i!==p&&(g.play(),i=p),Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(v,{title:n.title,backIcon:!0}),Object(r.jsxs)("div",{className:t.body,children:[Object(r.jsx)(f.a,{className:t.title,variant:"h3",color:"secondary",children:n.getStepByTime(h).title}),Object(r.jsxs)("div",{className:t.progressArea,children:[Object(r.jsx)(Ne.a,{variant:"determinate",value:100,size:"16rem",className:t.circleOutBg}),Object(r.jsx)(Ne.a,{variant:"determinate",value:100*n.getPercent(h),size:"16rem",className:t.circleOut}),Object(r.jsx)(Ne.a,{variant:"determinate",value:100,size:"13rem",className:t.circleInBg,color:"secondary"}),Object(r.jsx)(Ne.a,{variant:"determinate",value:100*n.getStepPercent(h),size:"13rem",className:t.circleIn,color:"secondary"}),Object(r.jsxs)(f.a,{className:t.timer,variant:"h2",color:"secondary",children:[Oe.isTimerIncrement()?n.getStepTime(h)/1e3:n.getStepTimeDecrement(h)/1e3,"s"]})]}),Object(r.jsx)(s.a,{variant:"outlined",className:t.paper,children:Object(r.jsx)(x.a,{className:t.list,children:n.getRemainingSteps(h).map((function(e,i){return Object(r.jsxs)(y.a,{button:!0,onClick:function(){return b(n.getStepStartTime(e.id))},children:[Object(r.jsx)(C.a,{primary:e.title}),Object(r.jsx)(C.a,{primary:"".concat(e.duration/1e3,"s"),className:t.time})]},"".concat(i))}))})}),Object(r.jsxs)("div",{className:t.trainingButtonContainer,children:[Object(r.jsx)(d.a,{disabled:!c.can("play"),variant:"contained",color:"primary",onClick:function(){return u()},className:t.trainingButton,children:"Play"}),Object(r.jsx)(d.a,{disabled:!c.can("pause"),variant:"contained",color:"primary",onClick:function(){return m()},className:t.trainingButton,children:"Pause"}),Object(r.jsx)(d.a,{disabled:!c.can("stop"),variant:"contained",color:"primary",onClick:function(){return j()},className:t.trainingButton,children:"Stop"}),Object(r.jsx)(d.a,{disabled:!c.can("replay"),variant:"contained",color:"primary",onClick:function(){return l()},className:t.trainingButton,children:"Replay"})]})]})]})})),Le=Object(m.a)((function(e){return{root:{}}})),Ae=Object(E.b)((function(e){return{}}))((function(e){var t=Le(),n=e.dispatch,i=e.open,a=e.handleClose,o=q.b({title:q.c("Donner un nom a votre entrainement").min(3,"Le nom doit faire minimum 3 caracteres").required("Le nom est requis")}),c=Object(W.a)({initialValues:{title:""},validationSchema:o,onSubmit:function(e){var t=$();t.setId().setTitle(e.title).setCollection("items",[]),n({type:ie,payload:t})}});return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(L.a,{open:i,onClose:a,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:Object(r.jsxs)("form",{onSubmit:c.handleSubmit,children:[Object(r.jsx)(A.a,{id:"form-dialog-title",children:"Nouvel entrainement"}),Object(r.jsx)(w.a,{children:Object(r.jsx)(k.a,{autoFocus:!0,margin:"dense",id:"title",name:"title",label:"Nom de l'entrainement",type:"text",fullWidth:!0,value:c.values.title,onChange:c.handleChange,error:c.touched.title&&Boolean(c.errors.title),helperText:c.touched.title&&c.errors.title})}),Object(r.jsx)(P.a,{children:Object(r.jsx)(d.a,{variant:"outlined",color:"secondary",startIcon:Object(r.jsx)(T.a,{}),fullWidth:!0,type:"submit",children:"Ajouter le nouvel entrainement"})})]})})})})),we=Object(m.a)((function(e){return{root:{}}})),ke=Object(E.b)((function(e){return{training:e.currTraining}}))((function(e){var t=we(),n=e.dispatch,i=e.training,a=e.open,o=e.handleClose,c=q.b({title:q.c("Donner un nom a votre entrainement").min(3,"Le nom doit faire minimum 3 caracteres").required("Le nom est requis")}),u=Object(W.a)({initialValues:{title:i.title?i.title:""},validationSchema:c,onSubmit:function(e){var t=$(i);t.setTitle(e.title),n(ce(t))}});return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(L.a,{open:a,onClose:o,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:Object(r.jsxs)("form",{onSubmit:u.handleSubmit,children:[Object(r.jsx)(A.a,{id:"form-dialog-title",children:"Modifier l'entrainement"}),Object(r.jsx)(w.a,{children:Object(r.jsx)(k.a,{autoFocus:!0,margin:"dense",id:"title",name:"title",label:"Nom de l'entrainement",type:"text",fullWidth:!0,value:u.values.title,onChange:u.handleChange,error:u.touched.title&&Boolean(u.errors.title),helperText:u.touched.title&&u.errors.title})}),Object(r.jsx)(P.a,{children:Object(r.jsx)(d.a,{variant:"outlined",color:"secondary",startIcon:Object(r.jsx)(T.a,{}),fullWidth:!0,type:"submit",children:"Modifier l'entrainement"})})]})})})})),Pe=n(145),We=n.n(Pe),qe=Object(m.a)((function(e){return{root:{},paper:{margin:10},list:{justifyContent:"center"},endListButton:{marginLeft:"auto",marginRight:"auto"}}})),_e=Object(E.b)((function(e){return{trainingList:e.trainingList,currTraining:$(e.currTraining)}}))((function(e){var t=qe(),n=e.trainingList,i=e.dispatch,a=(e.currTraining,Te()),o=Te(),c=Object(l.f)();return Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(v,{title:"Training"}),Object(r.jsx)(s.a,{variant:"outlined",className:t.paper,children:Object(r.jsxs)(x.a,{className:t.list,children:[n.list.map((function(e,t){var n=$(e);return Object(r.jsxs)(y.a,{button:!0,onClick:function(){i(ue(n)),c.push("/training")},children:[Object(r.jsx)(C.a,{primary:e.title}),Object(r.jsxs)(S.a,{children:[Object(r.jsx)(p.a,{edge:"end","aria-label":"comments",onClick:function(){i({type:ae,payload:n})},children:Object(r.jsx)(B.a,{})}),Object(r.jsx)(p.a,{edge:"end","aria-label":"comments",onClick:function(){i(ue(n)),o.show()},children:Object(r.jsx)(We.a,{})})]})]},t)})),Object(r.jsx)(y.a,{children:Object(r.jsx)(d.a,{variant:"outlined",color:"secondary",onClick:a.show,startIcon:Object(r.jsx)(T.a,{}),className:t.endListButton,children:"Ajouter"})})]})}),a.visible&&Object(r.jsx)(Ae,{open:a.visible,handleClose:a.hide}),o.visible&&Object(r.jsx)(ke,{open:o.visible,handleClose:o.hide})]})}));function Ve(){var e=Oe.isProdEnv()?u.b:u.a,t=Oe.isProdEnv()?"/tabata/":"/";return Object(r.jsx)(e,{basename:t,children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",children:Object(r.jsx)(_e,{})}),Object(r.jsx)(l.a,{path:"/training",children:Object(r.jsx)(Ce,{})}),Object(r.jsx)(l.a,{path:"/training-run",children:Object(r.jsx)(Ee,{})})]})})}n(263);var Me=n(137),Fe=function(){return $().setId("default").setCollection("items",[])},Ge=function(){return Y().setId().setTitle("Bidibou <3").setDuration(30)},Ke=$();Ke.setId("default").setCollection("items",[]);var Je=function(){return{list:[Ke]}},ze=Object(Me.b)({trainingList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:var n=Object(V.a)(Object(V.a)({},e),{},{list:Object(M.a)(t.payload)});return n;case ie:var i=[].concat(Object(M.a)(e.list),[t.payload]),r=Object(V.a)(Object(V.a)({},e),{},{list:i});return r;case re:var a=Object(V.a)({},t.payload),o=e.list.map((function(e){var t=$(e);return t.getId()===a.getId()?a:t})),c=Object(V.a)(Object(V.a)({},e),{},{list:o});return c;case ae:var u=Object(V.a)({},t.payload),l=e.list.filter((function(e){return $(e).getId()!==u.getId()})),s=Object(V.a)(Object(V.a)({},e),{},{list:l});return s;case oe:var d=t.payload,m=d.indexA,j=d.indexB,b=Object(M.a)(e.list),f=b[m];b[m]=b[j],b[j]=f;var g=Object(V.a)(Object(V.a)({},e),{},{list:b});return g;default:return e}},currTraining:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:var n=Object(V.a)({},t.payload);return n;default:return e}},currTrainingStep:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:var n=Object(V.a)({},t.payload);return n;default:return e}}});var Ue=Object(Me.c)(ze,function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}());Ue.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(n){console.warn(n)}}(Ue.getState())}));var He=function(){return Object(r.jsx)(E.a,{store:Ue,children:Object(r.jsx)("div",{id:"app",children:Object(r.jsx)(Ve,{})})})},Qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,318)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))};c.a.render(Object(r.jsx)(He,{}),document.getElementById("root")),Qe()}},[[264,1,2]]]);
//# sourceMappingURL=main.26302311.chunk.js.map