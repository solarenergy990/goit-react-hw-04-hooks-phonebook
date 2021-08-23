(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__E55oc",input:"Filter_input__31n5t"}},13:function(t,e,n){t.exports={contacts:"ContactsLIst_contacts__1JG4b"}},14:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},2:function(t,e,n){t.exports={label:"ContactForm_label__2cr40",labelText:"ContactForm_labelText__eMbXU",input:"ContactForm_input__2awrW",button:"ContactForm_button__xInKn"}},22:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),o=(n(21),n(22),n(16)),i=n(4),l=n(5),u=n(7),b=n(6),m=n(12),d=n(2),j=n.n(d),h=n(0),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),(0,t.props.onSubmit)(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsx)("div",{children:Object(h.jsx)("form",{className:"form",onSubmit:this.handleSubmit,children:Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)("label",{className:j.a.label,children:[Object(h.jsx)("p",{className:j.a.labelText,children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:e,className:j.a.input})]}),Object(h.jsxs)("label",{className:j.a.label,children:[Object(h.jsx)("p",{className:j.a.labelText,children:"Number"}),Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:n,className:j.a.input})]}),Object(h.jsx)("button",{type:"submit",className:j.a.button,children:"Add contact"})]})})})}}]),n}(a.Component),f=n(8),x=n.n(f),C=function(t){var e=t.contactName,n=t.contactNumber,a=t.onClickRemove;return Object(h.jsxs)("li",{className:x.a.listItem,children:[Object(h.jsxs)("p",{className:x.a.listText,children:[e," : ",n]}),Object(h.jsx)("button",{type:"button",className:x.a.button,onClick:a,children:"Delete"})]})},O=n(13),v=n.n(O),_=function(t){var e=t.contacts,n=t.onContactDelete,a=t.children;return Object(h.jsxs)("div",{className:v.a.contacts,children:[a,Object(h.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsx)(C,{contactName:a,contactNumber:c,onClickRemove:function(){return n(e)}},e)}))})]})},N=n(10),g=n.n(N),y=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{children:[Object(h.jsx)("p",{className:g.a.label,children:"Find contacts by name"}),Object(h.jsx)("input",{className:g.a.input,type:"text",value:e,onChange:n})]})},S=y;y.defaultProps={value:""};var k=n(14),w=n(15),A=n.n(w),F=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:k,filter:""},t.addContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,r={id:A.a.generate(),name:n,number:a};c.map((function(t){return t.name.toLowerCase()})).includes(n.toLowerCase())?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[r])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(p,{onSubmit:this.addContact}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(S,{value:t,onChange:this.changeFilter}),Object(h.jsx)(_,{contacts:e,onContactDelete:this.deleteContact})]})}}]),n}(a.Component);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__2DHKS",listText:"ContactListItem_listText__3mmZc",button:"ContactListItem_button__LDXm3"}}},[[32,1,2]]]);
//# sourceMappingURL=main.ba0433f2.chunk.js.map