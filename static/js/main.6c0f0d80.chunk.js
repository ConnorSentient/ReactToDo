(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),s=(n(15),n(8)),o=n(1),u=n(2),l=n(4),p=n(3),m=n(5),h=(n(16),function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).create=function(t){return r.a.createElement("li",{key:t.key,onClick:function(){return n.props.del(t.key)}},r.a.createElement("div",null,t.text))},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.items.map(this.create);return r.a.createElement("ul",null,t)}}]),e}(a.Component)),d=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.props.add},r.a.createElement("input",{placeholder:"New Task",ref:this.props.inputElement,value:this.props.current.text,onChange:this.props.input}),r.a.createElement("button",{tyep:"submit"},"Add Task"))))}}]),e}(a.Component),f=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).state={tasks:[],currentTask:{text:"",key:""}},n.input=function(t){var e={text:t.target.value,key:Date.now()};n.setState({currentTask:e})},n.add=function(t){t.preventDefault();var e=n.state.currentTask;if(""!==e.text){var a=[].concat(Object(s.a)(n.state.tasks),[e]);n.setState({tasks:a,currentTask:{text:"",key:""}})}},n.del=function(t){var e=n.state.tasks.filter(function(e){return e.key!==t});n.setState({tasks:e})},n.inputElement=r.a.createRef(),n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{class:"App"},r.a.createElement("h1",null,"Super Simple ToDo"),r.a.createElement("h4",null,r.a.createElement("sub",null,"Its about as basic as it comes")),r.a.createElement(d,{add:this.add,inputElement:this.inputElement,input:this.input,current:this.state.currentTask}),r.a.createElement(h,{items:this.state.tasks,del:this.del}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.6c0f0d80.chunk.js.map