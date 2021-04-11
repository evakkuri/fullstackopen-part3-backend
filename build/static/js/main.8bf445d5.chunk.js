(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r=t(17),c=t.n(r),o=t(8),a=t(4),s=t(2),u=t(0),i=function(e){var n=e.currFilter,t=e.onChangeFunction;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.messageObj;return null===n?null:Object(u.jsx)("div",{className:n.type,children:n.text})},d=function(e){var n=e.nameValue,t=e.nameChangeHandler,r=e.numberValue,c=e.numberChangeHandler,o=e.addPersonHandler;return Object(u.jsxs)("form",{onSubmit:o,children:[Object(u.jsxs)("p",{children:["name: ",Object(u.jsx)("input",{value:n,onChange:t})]}),Object(u.jsxs)("p",{children:["number: ",Object(u.jsx)("input",{value:r,onChange:c})]}),Object(u.jsx)("button",{type:"submit",children:"add"})]})},b=t(3),j=t.n(b),p=t(5),f=t(6),h=t.n(f),m="/api/persons",O={getAllPersons:function(){var e=Object(p.a)(j.a.mark((function e(){var n,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.a.get(m),e.next=3,n;case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createPerson:function(){var e=Object(p.a)(j.a.mark((function e(n){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.post(m,n),e.next=3,t;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),updatePerson:function(){var e=Object(p.a)(j.a.mark((function e(n,t){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=h.a.put("".concat(m,"/").concat(n),t),e.next=3,r;case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),deletePerson:function(){var e=Object(p.a)(j.a.mark((function e(n){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.delete("".concat(m,"/").concat(n)),e.next=3,t;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},x=function(e){var n=e.personToDelete,t=e.allPersons,r=e.setPersons,c=e.setMessageObj;return Object(u.jsx)("button",{type:"button",onClick:function(){console.log("Confirming deletion for person ".concat(n.id)),window.confirm("Delete ".concat(n.name,"?"))?(console.log("User confirmed deletion of person ".concat(n.id)),O.deletePerson(n.id).then(console.log("Person ".concat(n.id," deleted successfully"))).then(r(t.filter((function(e){return e.id!==n.id})))).catch((function(e){console.log(e),c({type:"errormsg",text:"Information of ".concat(n.name," has already been removed from server")}),setTimeout((function(){return c(null)}),5e3)}))):console.log("User cancelled deletion of person ".concat(n.id))},children:"delete"})},g=function(e){var n=e.person;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{children:n.name}),Object(u.jsx)("td",{children:n.number})]})},v=function(e){var n=e.currFilter,t=e.personsList,r=e.setPersons,c=e.setMessageObj,o=t.filter((function(e){return e.name.toLowerCase().includes(n)||e.number.includes(n)}));return Object(u.jsx)("table",{children:Object(u.jsx)("tbody",{children:o.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)(g,{person:e}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{personToDelete:e,allPersons:t,setPersons:r,setMessageObj:c})})]},e.id)}))})})},w=function(){var e=Object(s.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(s.useState)(""),b=Object(a.a)(c,2),j=b[0],p=b[1],f=Object(s.useState)(""),h=Object(a.a)(f,2),m=h[0],x=h[1],g=Object(s.useState)(""),w=Object(a.a)(g,2),P=w[0],y=w[1],C=Object(s.useState)(null),k=Object(a.a)(C,2),F=k[0],H=k[1];Object(s.useEffect)((function(){O.getAllPersons().then((function(e){r(e)}))}),[]);var S=function(e){return function(n){e(n.target.value)}};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(l,{messageObj:F}),Object(u.jsx)(i,{currFilter:P,onChangeFunction:S(y)}),Object(u.jsx)("h2",{children:"Add a new entry"}),Object(u.jsx)(d,{nameValue:j,nameChangeHandler:S(p),numberValue:m,numberChangeHandler:S(x),addPersonHandler:function(e){e.preventDefault();var n={name:j,number:m};t.map((function(e){return e.name})).includes(j)?function(e){if(console.log("Person with name ".concat(j," is already in phonebook, confirming number update")),window.confirm("".concat(e.name," is already added to phonebook, replace old phone number with the one?"))){console.log("User confirmed update for existing person ".concat(j)),console.log("Updating phone number for person ".concat(j," to ").concat(m));var n=t.find((function(e){return e.name===j})),c=Object(o.a)(Object(o.a)({},n),{},{number:m});O.updatePerson(n.id,e).then((function(){r(t.map((function(e){return e.id!==c.id?e:c}))),p(""),x("")}))}else console.log("User cancelled phone number update for person ".concat(j))}(n):(console.log("Creating new person",n),O.createPerson(n).then((function(e){console.log("New person created successfully:",e),r(t.concat(e)),H({type:"successmsg",text:"Added ".concat(j)}),setTimeout((function(){H(null)}),2500),p(""),x("")})))}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(v,{currFilter:P,personsList:t,setPersons:r,setMessageObj:H})]})};t(42);c.a.render(Object(u.jsx)(w,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.8bf445d5.chunk.js.map