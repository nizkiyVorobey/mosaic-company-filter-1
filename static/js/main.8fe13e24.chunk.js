(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=(a(10),a(2)),i=a(1),m=[{firstname:"\u0412\u0438\u043a\u0442\u043e\u0440",lastname:"\u041f\u0435\u0442\u0440\u043e\u0432",email:"test@test.com",phonenumber:"77777777777",birthday_contact:"1981-03-30",company:"Company 1"},{firstname:"\u0412\u0430\u0441\u044f",lastname:"\u041f\u0443\u043f\u043a\u0438\u043d",email:"test@test.com",phonenumber:"333333333333",birthday_contact:"2004-10-20",company:"Company 2"},{firstname:"\u0414\u0438\u043c\u0430",lastname:"\u041a\u043e\u0440\u0448\u0443\u043d\u043e\u0432",email:"test@test.com",phonenumber:"22222222222",birthday_contact:"1991-07-16",company:"Company 3"},{firstname:"\u0421\u0430\u043d",lastname:"\u0421\u0430\u043d\u044b\u0447",email:"test@test.com",phonenumber:"33333333333",birthday_contact:"1998-07-03",company:"Company 4"},{firstname:"\u0421\u0430\u043d1",lastname:"\u0421\u0430\u043d\u044b\u04471",email:"test@test.com",phonenumber:"33333333333",birthday_contact:"1998-03-13",company:"Company 5"}],o=function(e){var t=e.user;return r.a.createElement("div",{key:t.company,className:"user-list-item-row"},r.a.createElement("div",{className:"user-item"}," ",t.firstname," "),r.a.createElement("div",{className:"user-item"}," ",t.lastname," "),r.a.createElement("div",{className:"user-item"}," ",t.email," "),r.a.createElement("div",{className:"user-item"}," ",t.phonenumber," "),r.a.createElement("div",{className:"user-item"}," ",t.birthday_contact," "),r.a.createElement("div",{className:"user-item"}," ",t.company," "))},u=(a(11),function(e){var t=e.setUserSorted,a=(e.userSorted,e.setInputError),c=e.setEmptyList,l=e.initialUser,m=Object(n.useState)(""),o=Object(i.a)(m,2),u=o[0],d=o[1],p=Object(n.useState)(""),h=Object(i.a)(p,2),E=h[0],f=h[1];Object(n.useEffect)((function(){var e=y();v(e)?t(e):t([])}),[u,E]);var v=function(e){return u.length>2||E.length>2?(a(!0),c(!1),[]):0===u.length&&0===E.length?(c(!1),a(!1),Object(s.a)(l)):0===e.length?(c(!0),a(!1),[]):(c(!1),a(!1),e)},y=function(){return Object(s.a)(l).filter((function(e){return new Date(e.birthday_contact).getDate().toString().includes(u)})).filter((function(e){return(new Date(e.birthday_contact).getMonth()+1).toString().includes(E)}))};return r.a.createElement("form",{action:"",className:"filter-filed-wrapper"},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;d(t)},placeholder:"Filter day",value:u,className:"filter-filed"}),r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;f(t)},placeholder:"Filter month",value:E,className:"filter-filed"}))});a(12);var d=function(){var e=Object(n.useState)(Object(s.a)(m)),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),d=Object(i.a)(l,2),p=d[0],h=d[1],E=Object(n.useState)(!1),f=Object(i.a)(E,2),v=f[0],y=f[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Hello my mate!"),r.a.createElement(u,{setUserSorted:c,setInputError:h,setEmptyList:y,userSorted:a,initialUser:m}),r.a.createElement("div",{className:"user-list"},r.a.createElement("div",{className:"user-list-title"},r.a.createElement("div",{className:"user-list-title-item-row"},r.a.createElement("div",{className:"user-list-title-item-column"},"Name"),r.a.createElement("div",{className:"user-list-title-item-column"},"Surname"),r.a.createElement("div",{className:"user-list-title-item-column"},"Email"),r.a.createElement("div",{className:"user-list-title-item-column"},"phonenumber"),r.a.createElement("div",{className:"user-list-title-item-column"},"Birthday"),r.a.createElement("div",{className:"user-list-title-item-column"},"company"))),v?r.a.createElement("p",null,"Empty"):p?r.a.createElement("p",null,"Error"):r.a.createElement("div",null,a.map((function(e){return r.a.createElement(o,{user:e,key:e.company})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.8fe13e24.chunk.js.map