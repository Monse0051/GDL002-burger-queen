(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(44)},30:function(e,t,n){},34:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(22),i=n.n(r),c=n(2),s=n(3),l=n(5),u=n(4),d=n(6),m=n(14),b=n(11),h=n(18),p=n(7),f=(n(30),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClick=n.onClick.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onClick",value:function(){this.props.onHandleOrder(this.props.food)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{className:"food btn btn-success btn-lg",onClick:this.onClick},this.props.food.descripcion," ",o.a.createElement("br",null)," $"+this.props.food.precio))}}]),t}(o.a.Component)),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("h2",null,"Total $ "+this.props.total)}}]),t}(o.a.Component),O=n(15),E=n.n(O),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClick=n.onClick.bind(Object(p.a)(n)),n.dataBase=null,n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=E.a.app();this.dataBase=e.firestore()}},{key:"onClick",value:function(){console.log("sending order...",this.props.order);var e={orderList:this.props.order,table:this.props.table,date:Date.now()};this.dataBase.collection("Ordenes").doc().set(e);this.props.onSend()}},{key:"render",value:function(){return o.a.createElement("button",{className:"send-to",onClick:this.onClick,disabled:!this.props.enabled},"Enviar a cocina")}}]),t}(o.a.Component),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onDelete=n.onDelete.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onDelete",value:function(){this.props.onClickRemove()}},{key:"render",value:function(){return o.a.createElement("div",{className:"OrderElement"},o.a.createElement("h3",null,this.props.food.descripcion,"  $",this.props.food.precio),o.a.createElement("button",{className:"btn btn-info btn-lg",onClick:this.onDelete},"Eliminar"))}}]),t}(o.a.Component),y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={orderList:[],tableNumber:0},n.onHandleOrder=n.onHandleOrder.bind(Object(p.a)(n)),n.onSend=n.onSend.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onHandleOrder",value:function(e){var t=this.state.orderList;t.push(e),this.setState({orderList:t})}},{key:"onRemove",value:function(e){var t=this.state.orderList,n=[].concat(Object(h.a)(t.slice(0,e)),Object(h.a)(t.slice(e+1)));this.setState({orderList:n})}},{key:"onSend",value:function(){console.log("DEBUG: Enviando a cocina"),this.setState({orderList:[]})}},{key:"render",value:function(){for(var e=this,t=[],n=0;n<this.props.menuList.length;n++){var a=this.props.menuList[n];t.push(o.a.createElement("div",null,o.a.createElement(f,{key:a.id,food:a,onHandleOrder:this.onHandleOrder})))}for(var r=0,i=0;i<this.state.orderList.length;i++){r+=this.state.orderList[i].precio}return o.a.createElement("div",{className:"MenuDisplay"},o.a.createElement("div",{className:"MenuList"},o.a.createElement("ol",null,t)),o.a.createElement("div",{className:"container"},o.a.createElement("ol",null,this.state.orderList.map(function(t,n){return o.a.createElement(k,{key:t.id+"_"+n.toString(),food:t,onClickRemove:function(){return e.onRemove(n)}})}),o.a.createElement(v,{total:r}),o.a.createElement(j,{order:this.state.orderList,table:this.state.tableNumber,enabled:r>0,onSend:this.onSend}))))}}]),t}(o.a.Component),C=(n(34),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e)))._addIdToList(n.props.menu.Desayunos,"desayuno"),n.menuList=n.props.menu.Desayunos,n.state={menuType:"desayuno"},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"_addIdToList",value:function(e,t){var n=this;e.forEach(function(e,a){e.id=n.props.id+t+a.toString()})}},{key:"_onClickSelectMenu",value:function(e,t){this.setState({menuType:t}),this._addIdToList(this.props.menu.Comidas,t),this.menuList=e}},{key:"onclickSelectDesayuno",value:function(){this._onClickSelectMenu(this.props.menu.Desayunos,"desayuno")}},{key:"onclickSelectComida",value:function(){this._onClickSelectMenu(this.props.menu.Comidas,"comida")}},{key:"render",value:function(){var e=this,t=o.a.createElement("button",{className:"menutype btn btn-outline-warning btn-lg",onClick:function(){e.onclickSelectDesayuno()}},"Desayunos"),n=o.a.createElement("button",{className:"menutype btn btn-outline-warning btn-lg",onClick:function(){e.onclickSelectComida()}},"Comidas");return o.a.createElement("div",{className:"MenuType"},t,n,o.a.createElement(y,{menuList:this.menuList}))}}]),t}(o.a.Component)),g=function(){return o.a.createElement("nav",null,o.a.createElement("h2",{className:"logo-link"},"Burguer Queen"),o.a.createElement("ul",{className:"nav-menu"},o.a.createElement("li",null,o.a.createElement(m.b,{className:"nav-menu__link",to:"/"},"Mesero ")," "),o.a.createElement("li",null,o.a.createElement(m.b,{className:"nav-menu__link",to:"/Cocina"},"Cocina "))))},L=(n(43),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"cocina"},o.a.createElement("h3",null,"Estamos en la cocina"),o.a.createElement("button",{className:"btn btn-info btn-lg"},"Eliminar"))}}]),t}(o.a.Component)),S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).ID="vMH5efLYsj23yjapA3rf",n.state={error:null,isLoaded:!1,menu:{}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.initializeApp({apiKey:"AIzaSyCjy0hWWi5gvz23Pm87OmnWA00vLSjx-SA",authDomain:"burguer-queen-24934.firebaseapp.com",databaseURL:"https://burguer-queen-24934.firebaseio.com",projectId:"burguer-queen-24934",storageBucket:"burguer-queen-24934.appspot.com",messagingSenderId:"338402146466",appId:"1:338402146466:web:deef35a2e34880bb"}).firestore().collection("Menu").doc(this.ID).get().then(function(t){t.exists?(console.log("Document data:",t.data()),e.setState({isLoaded:!0,menu:t.data()})):console.log("Menu not found in firebase!")},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.error,a=t.isLoaded,r=t.menu;return n?o.a.createElement("div",null,"Error: ",n.message):a?o.a.createElement(m.a,null,o.a.createElement("div",{className:"Burguer-Queen"},o.a.createElement(g,null),o.a.createElement("div",{className:"numero de mesa"}),o.a.createElement("div",{className:"Menus"},o.a.createElement(b.a,{exact:!0,path:"/",render:function(){return o.a.createElement(C,{menu:r,id:e.ID})}}),o.a.createElement(b.a,{path:"/Cocina",render:function(){return o.a.createElement(L,null)}})))):o.a.createElement("div",null,"Loading...")}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.16c6f2ed.chunk.js.map