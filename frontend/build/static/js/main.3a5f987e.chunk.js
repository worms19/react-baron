(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),o=a.n(r),c=(a(54),a(2)),s=a(3),i=a(5),m=a(4),u=a(6),d=(a(55),a(24)),h=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"header-area"},l.a.createElement("div",{className:"oneMusic-main-menu"},l.a.createElement("div",{className:"classy-nav-container breakpoint-off"},l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"classy-navbar justify-content-between",id:"oneMusicNav"},l.a.createElement("a",{href:"",className:"nav-brand"},l.a.createElement("img",{src:"img/core-img/logobaronpetit3.png",alt:""})),l.a.createElement("div",{className:"classy-navbar-toggler"},l.a.createElement("span",{className:"navbarToggler"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("div",{className:"classy-menu"},l.a.createElement("div",{className:"classycloseIcon"},l.a.createElement("div",{className:"cross-wrap"},l.a.createElement("span",{className:"top"}),l.a.createElement("span",{className:"bottom"}))),l.a.createElement("div",{className:"classynav align-items-center"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.a,{exact:!0,to:"/react-baron"},"HOME")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/Mp3"},"VIDEOS")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/GalleryPhoto"},"PHOTOS")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/Events"},"TOUR")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/Contact"},"CONTACT")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://baroncrane.bigcartel.com/",className:"btn see-more-btn"},"SHOP")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://baroncrane.bandcamp.com/",className:"btn see-more-btn"},"MUSIC"))))))))))}}]),t}(l.a.Component),f=(a(58),function(e){var t=e.text1,a=e.text2,n=e.size;return l.a.createElement("section",{className:1===n?"breadcumb-area":"whitePage"},l.a.createElement("div",{className:"bradcumbContent "},l.a.createElement("p",null,t),l.a.createElement("h2",null,a)))}),E=function(){return l.a.createElement("footer",{className:"page-footer font-small black darken-2"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 py-0"},l.a.createElement("div",{className:"mb-5 flex-center"},l.a.createElement("a",{className:"fb-ic",target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/baroncrane/"},l.a.createElement("i",{className:"fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"}," ")),l.a.createElement("a",{className:"ins-ic",target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/baron.crane/"},l.a.createElement("i",{className:"fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"}," ")),l.a.createElement("a",{className:"you-ic",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/baroncrane"},l.a.createElement("i",{className:"fab fa-youtube fa-lg white-text fa-2x"},"  ")))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2018 Copyright:",l.a.createElement("a",{href:"https:/github.com/worms19"}," Worms19")))},g=function(){return l.a.createElement("div",{className:"col-12 col-md-6 col-lg-6"},l.a.createElement("div",{className:"single-event-area mb-5"},l.a.createElement("div",{className:"event-text"},l.a.createElement("h4",null,"ENGLISH VERSION "),l.a.createElement("div",{className:"event-meta-data"},l.a.createElement("a",{href:"#",className:"event-place"},"Bio"),l.a.createElement("a",{href:"#",className:"event-date"},"Reviews")),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"dummy/press-kit-baron-crane.pdf",className:"btn see-more-btn"},"Download"))))},b=function(){return l.a.createElement("div",{className:"col-12 col-md-6 col-lg-6"},l.a.createElement("div",{className:"single-event-area mb-5"},l.a.createElement("div",{className:"event-text"},l.a.createElement("h4",null,"VERSION FRANCAISE "),l.a.createElement("div",{className:"event-meta-data"},l.a.createElement("a",{href:"#",className:"event-place"},"Bio"),l.a.createElement("a",{href:"#",className:"event-date"},"Presse")),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"dummy/dossier-presse-baron-crane.pdf",className:"btn see-more-btn"},"T\xe9l\xe9charger"))))},v=a(7),p=(a(59),a(27)),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).sendMessage=function(e){a.setState({creating:!1});var t=a.state.NameOfMessage,n=a.state.EmailOfMessage,l=a.state.Message,r=p().format("MMM Do YY"),o={nom:t,mail:n,message:l,date:r};console.log(o);var c={query:'\n                mutation {\n                    createContactMessage(contactInput:{ nom: "'.concat(t,'", mail: "').concat(n,'", message: "').concat(l,'",date: "').concat(r,'"})\n                    {\n                        _id\n                    }\n                }\n            ')};fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).catch(function(e){console.log(e)}),a.setState({NameOfMessage:e.target.value,EmailOfMessage:e.target.value,PhoneOfMessage:e.target.value,Message:e.target.value})},a.handleNameOfMessage=a.handleNameOfMessage.bind(Object(v.a)(Object(v.a)(a))),a.handleEmailOfMessage=a.handleEmailOfMessage.bind(Object(v.a)(Object(v.a)(a))),a.handlePhoneOfMessage=a.handlePhoneOfMessage.bind(Object(v.a)(Object(v.a)(a))),a.handleMessage=a.handleMessage.bind(Object(v.a)(Object(v.a)(a))),a.state={SignatureOfGuest:"",EmailOfMessage:"",PhoneOfMessage:"",NameOfMessage:"",Message:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleNameOfMessage",value:function(e){this.setState({NameOfMessage:e.target.value}),console.log("damdam",e.target.value)}},{key:"handleEmailOfMessage",value:function(e){this.setState({EmailOfMessage:e.target.value}),console.log("damdam",e.target.value)}},{key:"handlePhoneOfMessage",value:function(e){this.setState({PhoneOfMessage:e.target.value}),console.log("damdam",e.target.value)}},{key:"handleMessage",value:function(e){this.setState({Message:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{id:"contact"},l.a.createElement("h3",null,"Quick Contact"),l.a.createElement("h4",null,"Contact us today, and get reply with in 24 hours!"),l.a.createElement("fieldset",null,l.a.createElement("input",{type:"text",onChange:this.handleNameOfMessage,className:"NameinputForm",value:this.state.NameOfMessage,placeholder:"Your name",tabIndex:"1",required:!0,autoFocus:!0})),l.a.createElement("fieldset",null,l.a.createElement("input",{type:"email",onChange:this.handleEmailOfMessage,className:"NameinputForm",value:this.state.EmailOfMessage,placeholder:"Your Email Address",tabIndex:"2",required:!0})),l.a.createElement("fieldset",null,l.a.createElement("input",{type:"text",onChange:this.handlePhoneOfMessage,className:"NameinputForm",value:this.state.PhoneOfMessage,placeholder:"Your name",tabIndex:"3",required:!0})),l.a.createElement("fieldset",null,l.a.createElement("textarea",{onChange:this.handleMessage,placeholder:"Type your Message Here....",value:this.state.Message,tabIndex:"5",required:!0,autoFocus:!0})),l.a.createElement("fieldset",null,l.a.createElement("button",{className:"submit",type:"submit",onClick:this.sendMessage},"Submit"))))}}]),t}(n.Component),y=function(){return l.a.createElement("div",{className:"ContactLarge"},l.a.createElement("div",{className:"col-12 "},l.a.createElement("div",{className:"single-event-area mb-5"},l.a.createElement("div",{className:"event-text"},l.a.createElement("h4",null,"BOOKING : Juliette Rambaud "),l.a.createElement("div",{className:"event-meta-data"},l.a.createElement("a",{href:"#",className:"event-place"},"booking.baroncrane@gmail.com  "),l.a.createElement("a",{href:"#",className:"event-date"},"0683736281"))))))},k=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container "},l.a.createElement(f,{text1:"See What NeWs",text2:"Get in touch",size:1}),l.a.createElement(N,null),l.a.createElement(y,null),l.a.createElement("section",{className:"breadcumb-area2"},l.a.createElement("div",{className:"bradcumbContent "},l.a.createElement("h2",null,"PressKit"))),l.a.createElement(g,null),l.a.createElement(b,null)),l.a.createElement(E,null))},O={position:"absolute",bottom:"30px",width:"50%",left:"40px"},L={position:"absolute",bottom:"30px",width:"40%",left:"70px"},w={position:"absolute",bottom:"30px",left:"110px"},x=function(){return l.a.createElement("div",{className:""},l.a.createElement("a",{className:"fac-ic",style:O,target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/baroncrane/"},l.a.createElement("i",{className:"fab fa-facebook-f fa-lg white-text fa-2x"}," ")),l.a.createElement("a",{className:"ins-ic",style:L,target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/baron.crane/"},l.a.createElement("i",{className:"fab fa-instagram fa-lg white-text fa-2x"}," ")),l.a.createElement("a",{className:"pin-ic",style:w,target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/baroncrane"},l.a.createElement("i",{className:"fab fa-youtube fa-lg white-text fa-2x"}," ")))},j=a(43),C=a(45),S=a.n(C),_=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={currentImage:0},e.closeLightbox=e.closeLightbox.bind(Object(v.a)(Object(v.a)(e))),e.openLightbox=e.openLightbox.bind(Object(v.a)(Object(v.a)(e))),e.gotoNext=e.gotoNext.bind(Object(v.a)(Object(v.a)(e))),e.gotoPrevious=e.gotoPrevious.bind(Object(v.a)(Object(v.a)(e))),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"openLightbox",value:function(e,t){this.setState({currentImage:t.index,lightboxIsOpen:!0})}},{key:"closeLightbox",value:function(){this.setState({currentImage:0,lightboxIsOpen:!1})}},{key:"gotoPrevious",value:function(){this.setState({currentImage:this.state.currentImage-1})}},{key:"gotoNext",value:function(){this.setState({currentImage:this.state.currentImage+1})}},{key:"render",value:function(){var e=[{src:"/dummy/large-gallery/13.jpg",width:3,height:2},{src:"/dummy/large-gallery/14.jpg",width:3,height:2},{src:"/dummy/large-gallery/15.jpg",width:3,height:2},{src:"/dummy/large-gallery/16.jpg",width:3,height:2},{src:"/dummy/large-gallery/17.jpg",width:3,height:2}];return l.a.createElement("div",{className:""},l.a.createElement(f,{text1:"See What\u2019s NeWs",text2:"Latests Photos",size:1}),l.a.createElement("div",{className:"gallery-photo"},l.a.createElement(j.a,{photos:e,direction:"column",columns:4,onClick:this.openLightbox}),l.a.createElement(S.a,{images:e,onClose:this.closeLightbox,onClickPrev:this.gotoPrevious,onClickNext:this.gotoNext,currentImage:this.state.currentImage,isOpen:this.state.lightboxIsOpen})),l.a.createElement(E,null))}}]),t}(l.a.Component),M=(a(105),l.a.createContext({token:null,userId:null,login:function(e,t,a){},logout:function(){}})),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={isLogin:!0},a.switchModeHandler=function(){a.setState(function(e){return{isLogin:!e.isLogin}})},a.submitHandler=function(e){e.preventDefault();var t=a.emailEl.current.value,n=a.passwordEl.current.value;if(0!==t.trim()&&0!==n.trim()){console.log(t,n);var l={query:'\n                query {\n                    login(email: "'.concat(t,'",password: "').concat(n,'"){\n                        userId\n                        token\n                        tokenExpiration\n                    }\n                }\n            ')};a.state.isLogin||(l={query:'\n                mutation {\n                createUser(userInput:{email: "'.concat(t,'",password: "').concat(n,'"})\n                {\n                _id\n                email\n                }\n                }')}),fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(e){e.data.login.token&&a.context.login(e.data.login.token,e.data.login.userId,e.data.tokenExpiration),console.log(e)}).catch(function(e){console.log(e)})}},a.emailEl=l.a.createRef(),a.passwordEl=l.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"form-background_"},l.a.createElement("form",{className:"auth-form_",onSubmit:this.submitHandler},l.a.createElement("div",{className:"form-control_"},l.a.createElement("label",{htmlFor:"email"},"E-mail"),l.a.createElement("input",{type:"email",id:"email",ref:this.emailEl})),"  ",l.a.createElement("div",{className:"form-control_"},l.a.createElement("label",{htmlFor:"password"},"password"),l.a.createElement("input",{type:"password",id:"password",ref:this.passwordEl})),l.a.createElement("div",{className:"form-action_"},l.a.createElement("button",{type:"submit"},"Submit"),l.a.createElement("button",{type:"button",onClick:this.switchModeHandler},"Switch to ",this.state.isLogin?"Sign Up":"Login"))))}}]),t}(n.Component);I.contextType=M;var T=I,F=(a(106),function(){return l.a.createElement("div",{className:"spinner"},l.a.createElement("div",{className:"lds-default"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))}),P=(a(22),{monthToString:function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][new Date(e).getMonth()]},sortDate:function(e){return e.sort(function(e,t){return new Date(e.date)-new Date(t.date)})}}),q=function(e){return l.a.createElement("div",{className:0==e.index?"col-12 col-md-6 col-lg-12":"col-12 col-md-6 {col-lg-6"},l.a.createElement("div",{className:"single-event-area  mb-1"},l.a.createElement("div",{className:"event-text"},l.a.createElement("div",{className:"dateLeft"},l.a.createElement("span",{className:"dateLeft-dateJour"},new Date(e.date).getDate()),l.a.createElement("br",null),console.log(e.date),l.a.createElement("span",{className:"dateLeft-dateJour2"},P.monthToString(new Date(e.date))," ",new Date(e.date).getFullYear()),l.a.createElement("br",null),l.a.createElement("span",{className:"dateLeft-dateJour2"},e.nomBar)),l.a.createElement("h4",null,e.nomEvenement),console.log(e.lienFb),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.lienFb,className:""==e.lienFb?"btn see-more-btn Eventdisabled":"btn see-more-btn "},""==e.lienFb?"COMING SOON":"SEE EVENT"),console.log("props.eventId ".concat(e.eventId)))))},D=a(27),R=function(e){var t=e.events.filter(function(e){return D(e.date).isBefore(D().endOf("day"))}).sort(function(e,t){return D(t.date).valueOf()-D(e.date).valueOf()}).map(function(e,t){return l.a.createElement(q,{date:e.date,nomBar:e.barName,nomEvenement:e.eventName,lienFb:e.fbLink,index:1,key:e._id,eventId:e._id})}),a=e.events.filter(function(e){return D(e.date).isAfter(D().endOf("day"))}).sort(function(e,t){return D(t.date).valueOf()-D(e.date).valueOf()}).map(function(e,t){return l.a.createElement(q,{date:e.date,nomBar:e.barName,nomEvenement:e.eventName,lienFb:e.fbLink,index:t,key:e._id,eventId:e._id})});return l.a.createElement("ul",{className:"event__list"},l.a.createElement("li",null,l.a.createElement(f,{text1:"See what\u2019s new",text2:"Latests SHOWS"})),l.a.createElement("li",null,l.a.createElement("section",{className:"displayBlock"},a)),l.a.createElement("li",null,l.a.createElement(f,{text1:"See what\u2019s new",text2:"Past SHOWS"})),l.a.createElement("li",null,l.a.createElement("section",null,t)))},J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={creating:!1,events:[],isLoading:!1,selectedEvent:null},a.fetchEvents=function(){a.setState({isLoading:!0});fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify({query:"\n                query {\n                    events\n                    {\n                        _id\n                        barName\n                        eventName                        \n                        fbLink\n                        date\n                    }\n                }\n            "}),headers:{"Content-Type":"application/json"}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(e){var t=e.data.events;console.log(t),a.setState({events:t,isLoading:!1})}).catch(function(e){console.log(e),a.setState({isLoading:!1})})},a.onDeleteEvent=function(e){var t={query:'\n                mutation {\n                    cancelEvent(eventId: "'.concat(e,'")\n                    {\n                        _id\n\n                    }\n                }\n            ')},n=a.context.token;fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(t){console.log(t),a.setState(function(t){var a=t.events.filter(function(t){return t._id!==e});return console.table(a),{events:a}})}).catch(function(e){console.log(e)})},a.barNameElRef=l.a.createRef(),a.eventNameElRef=l.a.createRef(),a.dateElRef=l.a.createRef(),a.fbLinkElRef=l.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchEvents()}},{key:"render",value:function(){return l.a.createElement("div",{className:"slide-img bg-img"},l.a.createElement("section",{className:"events-area "},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},this.state.isLoading?l.a.createElement(F,null):l.a.createElement(R,{events:this.state.events,authUserId:this.context.userId})))),l.a.createElement(E,null))}}]),t}(n.Component);J.contextType=M;var Y=J,H=a(18),B=(a(107),function(e){return l.a.createElement("div",{className:"modal_"},l.a.createElement("header",{className:"modal__header_"},l.a.createElement("h1",null," ",e.title)),l.a.createElement("section",{className:"modal__content_"},e.children),l.a.createElement("section",{className:"modal__actions_"},e.canCancel&&l.a.createElement("button",{className:"btn_",onClick:e.onCancel},"Cancel"),e.canConfirm&&l.a.createElement("button",{className:"btn_",onClick:e.onConfirm},e.confirmText)))}),A=(a(108),a(109),function(e){return l.a.createElement("div",{className:0===e.index?"col-12 col-md-6 col-lg-12":"col-12 col-md-6 col-lg-6"},l.a.createElement("div",{className:"single-event-area  mb-1"},l.a.createElement("div",{className:"event-text"},l.a.createElement("div",{className:"dateLeft"},l.a.createElement("span",{className:"dateLeft-dateJour"},new Date(e.date).getDate()),l.a.createElement("br",null),console.log(e.date),l.a.createElement("span",{className:"dateLeft-dateJour2"},P.monthToString(new Date(e.date))," ",new Date(e.date).getFullYear()),l.a.createElement("br",null),l.a.createElement("span",{className:"dateLeft-dateJour2"},e.nomBar)),l.a.createElement("h4",null,e.nomEvenement),console.log(e.lienFb),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.lienFb,className:""===e.lienFb?"btn see-more-btn Eventdisabled":"btn see-more-btn "},""===e.lienFb?"COMING SOON":"SEE EVENT"),console.log("props.eventId ".concat(e.eventId)),l.a.createElement("button",{onClick:e.deleteThisEvent.bind(void 0,e.eventId)},"X"))))}),W=function(e){var t=e.events.map(function(t,a){return l.a.createElement(A,{date:t.date,nomBar:t.barName,nomEvenement:t.eventName,lienFb:t.fbLink,index:a,key:t._id,eventId:t._id,deleteThisEvent:e.onDeleteEvent})});return l.a.createElement("ul",{className:"event__list"},t)},z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={creating:!1,events:[],isLoading:!1,selectedEvent:null},a.startCreateEventHandler=function(){a.setState({creating:!0})},a.modalConfirmHandler=function(){a.setState({creating:!1});var e=a.barNameElRef.current.value,t=a.dateElRef.current.value,n=a.eventNameElRef.current.value,l=a.fbLinkElRef.current.value;if(0!==e.trim().length&&0!==t.trim().length&&0!==n.trim().length&&0!==l.trim().length){var r={query:'\n                mutation {\n                    createEvent(eventInput:{ barName: "'.concat(e,'",eventName: "').concat(n,'",fbLink: "').concat(l,'",date: "').concat(t,'"})\n                    {\n                        _id\n                        barName\n                        eventName\n                        fbLink\n                        date\n                    }\n                }\n            ')},o=a.context.token;fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json",Authorization:"Bearer "+o}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(e){a.setState(function(t){var a=Object(H.a)(t.events);return a.push({_id:e.data.createEvent._id,barName:e.data.createEvent.barName,eventName:e.data.createEvent.eventName,date:e.data.createEvent.date,fbLink:e.data.createEvent.fbLink}),{events:a}})}).catch(function(e){console.log(e)})}},a.modalCancelHandler=function(){a.setState({creating:!1,selectedEvent:null})},a.fetchEvents=function(){a.setState({isLoading:!0});a.context.token;fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify({query:"\n                query {\n                    events\n                    {\n                        _id\n                        barName\n                        eventName                        \n                        fbLink\n                        date\n                    }\n                }\n            "}),headers:{"Content-Type":"application/json"}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(e){var t=e.data.events;console.table(t),P.sortDate(t),console.table(t),a.setState({events:t,isLoading:!1})}).catch(function(e){console.log(e),a.setState({isLoading:!1})})},a.onDeleteEvent=function(e){var t={query:'\n                mutation {\n                    cancelEvent(eventId: "'.concat(e,'")\n                    {\n                        _id\n\n                    }\n                }\n            ')},n=a.context.token;fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(t){console.log(t),a.setState(function(t){var a=t.events.filter(function(t){return t._id!==e});return console.table(a),{events:a}})}).catch(function(e){console.log(e)})},a.barNameElRef=l.a.createRef(),a.eventNameElRef=l.a.createRef(),a.dateElRef=l.a.createRef(),a.fbLinkElRef=l.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchEvents()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.creating&&l.a.createElement(B,{title:"Add Event",canConfirm:!0,canCancel:!0,onCancel:this.modalCancelHandler,onConfirm:this.modalConfirmHandler,confirmText:"Confirm"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-control_"},l.a.createElement("label",{htmlFor:"barName"},"nom du bar"),l.a.createElement("input",{type:"text",id:"barName",ref:this.barNameElRef})),l.a.createElement("div",{className:"form-control_"},l.a.createElement("label",{htmlFor:"eventName"},"nom de l'\xe9venement"),l.a.createElement("input",{type:"text",id:"eventName",ref:this.eventNameElRef})),l.a.createElement("div",{className:"form-control_"},l.a.createElement("label",{htmlFor:"date"},"Date"),l.a.createElement("input",{type:"date",id:"date",ref:this.dateElRef})),l.a.createElement("div",{className:"form-control_"},l.a.createElement("label",{htmlFor:"fbLink"},"lien facebook"),l.a.createElement("input",{type:"text",id:"fbLink",ref:this.fbLinkElRef})))),this.context.token&&l.a.createElement("div",{className:"events-control_"},l.a.createElement("p",null," Share your own event "),l.a.createElement("button",{className:"btn_",onClick:this.startCreateEventHandler}," Create Event")),this.state.isLoading?l.a.createElement(F,null):l.a.createElement(W,{events:this.state.events,authUserId:this.context.userId,onDeleteEvent:this.onDeleteEvent}))}}]),t}(n.Component);z.contextType=M;var G=z,U=a(129),V=(a(110),function(e){return l.a.createElement(M.Consumer,null,function(e){return l.a.createElement("header",{className:"main-navigation"},l.a.createElement("div",{className:"main_navigation__logo"},l.a.createElement("h1",null,"The Navbar")),l.a.createElement("nav",{className:"main-navigation__items"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(U.a,{to:"/eventpage"},"Events")),l.a.createElement("li",null,l.a.createElement(U.a,{to:"/contactPage"},"Bookings")),l.a.createElement("li",null,l.a.createElement(U.a,{to:"/youtubePage"},"Youtube")),l.a.createElement("li",null,l.a.createElement("button",{onClick:e.logout},"Logout")))))})}),X=(a(112),a(113),a(114),a(130)),K=a(132),Q=a(48),$=a(131),Z=function(e){return l.a.createElement("div",{className:"col-12 col-md-6 col-lg-12"},l.a.createElement("div",{className:"single-event-area  mb-1"},l.a.createElement("div",{className:"event-text"},l.a.createElement("p",null,"nom :",e.nom),l.a.createElement("p",null,"mail :",e.mail),l.a.createElement("p",null,"tel: ",e.phoneContact),l.a.createElement("p",null,"message: ",e.message),l.a.createElement("button",{onClick:e.onDeleteContact.bind(void 0,e.contactMessageId)},"X"))))},ee=function(e){var t=e.contacts.map(function(t,a){return l.a.createElement(Z,{nom:t.nom,mail:t.mail,phoneContact:t.phoneContact,message:t.message,index:a,key:t._id,contactMessageId:t._id,onDeleteContact:e.onDeleteContact})});return l.a.createElement("ul",{className:"contactMessage__list"},t)},te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={creating:!1,contactsMessages:[],isLoading:!0,selectedEvent:null},a.fetchContacts=function(){a.setState({isLoading:!0});fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify({query:"\n                query {\n                    contactsMessages\n                    {\n                        _id \n                        nom\n                        mail\n                        message\n                        date\n                    }\n                }\n            "}),headers:{"Content-Type":"application/json"}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(e){var t=e.data.contactsMessages;console.table("constact message Fetched ",t),a.setState({contactsMessages:t,isLoading:!1})}).catch(function(e){console.log(e),a.setState({isLoading:!1})})},a.deleteContact=function(e){var t={query:'\n                mutation {\n                    cancelMessage(messageId: "'.concat(e,'")\n                    {\n                        _id\n\n                    }\n                }\n            ')},n=a.context.token;fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(t){console.log(t),a.setState(function(t){var a=t.contactsMessages.filter(function(t){return t._id!==e});return console.table(a),{contactsMessages:a}})}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchContacts(),console.log("fetch termin\xe9")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.isLoading?l.a.createElement(F,null):l.a.createElement(ee,{contacts:this.state.contactsMessages,onDeleteContact:this.deleteContact}))}}]),t}(n.Component);te.contextType=M;var ae=te,ne=(a(41),a(42),function(e){return l.a.createElement("div",{className:"col-12 col-md-6 col-lg-12"},l.a.createElement("div",{className:"single-event-area  mb-1"},l.a.createElement("div",{className:"event-text"},l.a.createElement("p",null,"link : ",e.link),l.a.createElement("button",{onClick:e.deleteThisLink.bind(void 0,e.youtubeLinkId)},"X"))))}),le=function(e){var t=e.youtubeLinks.map(function(t){return l.a.createElement(ne,{link:t.link,key:t._id,youtubeLinkId:t._id,deleteThisLink:e.onDeleteYoutubeLink})});return l.a.createElement("ul",{className:"youtubeLink__list"},t)},re=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={creating:!1,youtubeLinks:[],isLoading:!1,selectedYoutubeLink:null},a.startCreateYoutubeLinkHandler=function(){a.setState({creating:!0})},a.modalConfirmHandler=function(){a.setState({creating:!1});var e=a.linkElRef.current.value,t={link:e};console.log(t);var n={query:'\n                mutation {\n                    createYoutubeLink(youtubeLinkInput:{ link: "'.concat(e,'"})\n                    {\n                        _id\n                        link\n                       \n                    }\n                }\n            ')},l=a.context.token;console.log("token = ".concat(l)),fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json",Authorization:"Bearer "+l}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(e){a.setState(function(t){var a=Object(H.a)(t.youtubeLinks);return a.push({_id:e.data.createYoutubeLink._id,link:e.data.createYoutubeLink.link}),{youtubeLinks:a}})}).catch(function(e){console.log(e)})},a.modalCancelHandler=function(){a.setState({creating:!1,selectedYoutubeLink:null})},a.fetchYoutubeLinks=function(){a.setState({isLoading:!0});var e=a.context.token;console.log("token = ".concat(e)),fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify({query:"\n                query {\n                    youtubeLinks\n                    {\n                        _id\n                        link\n                    }\n                }\n            "}),headers:{"Content-Type":"application/json"}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(e){var t=e.data.youtubeLinks;a.setState({youtubeLinks:t,isLoading:!1})}).catch(function(e){console.log(e),a.setState({isLoading:!1})})},a.onDeleteYoutubeLink=function(e){var t={query:'\n                mutation {\n                    cancelYoutubeLink(youtubeLinkId: "'.concat(e,'")\n                    {\n                        _id\n\n                    }\n                }\n            ')},n=a.context.token;fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(t){console.log(t),a.setState(function(t){var a=t.youtubeLinks.filter(function(t){return t._id!==e});return console.table(a),{youtubeLinks:a}})}).catch(function(e){console.log(e)})},a.linkElRef=l.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchYoutubeLinks()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.creating&&l.a.createElement(B,{title:"Add Event",canConfirm:!0,canCancel:!0,onCancel:this.modalCancelHandler,onConfirm:this.modalConfirmHandler,confirmText:"Confirm"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-control"},l.a.createElement("label",{htmlFor:"title"},"Link"),l.a.createElement("input",{type:"text",id:"title",ref:this.linkElRef})))),this.context.token&&l.a.createElement("div",{className:"events-control form-action_"},l.a.createElement("p",null," Liste de vid\xe9os youtube "),l.a.createElement("button",{className:"btn",onClick:this.startCreateYoutubeLinkHandler}," Create Videos")),this.state.isLoading?l.a.createElement(F,null):l.a.createElement(le,{youtubeLinks:this.state.youtubeLinks,authUserId:this.context.userId,onDeleteYoutubeLink:this.onDeleteYoutubeLink}))}}]),t}(n.Component);re.contextType=M;var oe=re,ce=a(23),se=function(e){return l.a.createElement("div",{className:"youtube-centered"},l.a.createElement(ce.a,{videoId:e.link}))},ie=function(e){var t=e.youtubeLinks.map(function(e,t){return l.a.createElement(se,{link:e.link})});return l.a.createElement("ul",{className:"sa"},t)},me=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={creating:!1,youtubeLinks:[],isLoading:!1,selectedYoutubeLink:null},a.fetchYoutubeLinks=function(){a.setState({isLoading:!0});var e=a.context.token;console.log("token = ".concat(e)),fetch("http://localhost:8000/graphql",{method:"POST",body:JSON.stringify({query:"\n                query {\n                    youtubeLinks\n                    {\n                        _id\n                        link\n                    }\n                }\n            "}),headers:{"Content-Type":"application/json"}}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(e){var t=e.data.youtubeLinks;a.setState({youtubeLinks:t,isLoading:!1})}).catch(function(e){console.log(e),a.setState({isLoading:!1})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchYoutubeLinks()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"slide-img bg-img"},l.a.createElement(f,{text1:"See What NeWs",text2:"Latests Videos",size:1}),l.a.createElement("div",{className:"background-grey"},this.state.isLoading?l.a.createElement(F,null):l.a.createElement(ie,{youtubeLinks:this.state.youtubeLinks}))),l.a.createElement(E,null))}}]),t}(n.Component);me.contextType=M;var ue=me,de=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={token:null,userId:null},a.login=function(e,t,n){a.setState({token:e,userId:t,tokenExpiration:n})},a.logout=function(){a.setState({token:null,userId:null})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(X.a,null,l.a.createElement("div",{className:"baron"},l.a.createElement(M.Provider,{value:{token:this.state.token,userId:this.state.userId,login:this.login,logout:this.logout}},this.state.token?l.a.createElement(V,null):l.a.createElement(h,null),l.a.createElement(K.a,null,l.a.createElement(Q.a,{exact:!0,path:"/react-baron",component:x}),l.a.createElement(Q.a,{path:"/Mp3",component:ue}),l.a.createElement(Q.a,{path:"/GalleryPhoto",component:_}),l.a.createElement(Q.a,{path:"/Events",component:Y}),!this.state.token&&l.a.createElement(Q.a,{path:"/auth",component:T}),this.state.token&&l.a.createElement(Q.a,{path:"/eventpage",component:G}),this.state.token&&l.a.createElement(Q.a,{path:"/youtubePage",component:oe}),this.state.token&&l.a.createElement($.a,{path:"/auth",to:"/eventpage",exact:!0}),this.state.token&&l.a.createElement(Q.a,{path:"/contactPage",component:ae}),l.a.createElement(Q.a,{path:"/Contact",component:k})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(de,null),document.getElementById("baronCrane")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},49:function(e,t,a){e.exports=a(127)},54:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.3a5f987e.chunk.js.map