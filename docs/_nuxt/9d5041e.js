(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{369:function(t,e,n){"use strict";n.r(e);n(24);var r=n(11),o=(n(77),n(46),n(23),n(50),{name:"GroupsMenu",data:function(){return{groups:[]}},mounted:function(){this.getGroups()},methods:{getGroups:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content({deep:!0}).only(["dir"]).fetch();case 2:n=e.sent,t.groups=n.map((function(t){return{path:t.dir,name:t.dir.replace("/","").toUpperCase()}}));case 4:case"end":return e.stop()}}),e)})))()}}}),c=n(59),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.groups.length>0?e("ul",t._l(t.groups,(function(n){return e("li",{key:n.path},[e("NuxtLink",{attrs:{to:n.path}},[t._v("\n        "+t._s(n.name)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},397:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(77),{name:"IndexPage",components:{GroupsMenu:n(369).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("linux",{deep:!0}).only(["title","description","createdAt","slug","path"]).fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Статьи про Linux",meta:[{hid:"description",name:"description",content:"Статьи про Linux"}]}}}),c=n(59),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.articles.length>0?e("ul",t._l(t.articles,(function(article){var n;return e("li",{key:article.path+article.slug},[e("NuxtLink",{attrs:{to:article.path}},[t._v("\n        "+t._s(null!==(n=article.title)&&void 0!==n?n:article.slug)+"\n      ")])],1)})),0):t._e(),t._v(" "),e("p",[t._v("----------")]),t._v(" "),e("GroupsMenu")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GroupsMenu:n(369).default})}}]);