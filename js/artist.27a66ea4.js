(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["artist"],{"0a17":function(t,i,s){t.exports=s.p+"img/search.403f1f98.svg"},"3df6":function(t,i,s){"use strict";var a=s("8515"),n=s.n(a);n.a},"64a3":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"artist-index"},[s("app-top"),s("back",{on:{back:t.handleBack}}),s("div",{staticClass:"logo-pos"},[s("logo")],1),s("search-button"),s("router-link",{staticClass:"ranking",attrs:{to:"/ranking/list/artist"}},[s("i"),t._v("云音乐歌手榜")]),s("h3",{staticClass:"title"},[t._v("热门歌手"),s("i",{staticClass:"total"},[t._v("第"+t._s(t.offset/t.limit+1)+"页 共"+t._s(t.total(t.hots,t.offset))+"名")])]),s("ul",{staticClass:"hots"},t._l(t.hots,(function(i,a){return s("li",{key:a,on:{click:function(s){return t.handleItemRoute({id:i.id})}}},[s("div",{staticClass:"inner"},[s("img",{attrs:{src:i.picUrl+"?param=200y200"}}),s("div",{staticClass:"wrap"},[s("label",{staticClass:"name"},[t._v(t._s(i.name))]),s("label",{staticClass:"count"},[s("i",{staticClass:"icon music"}),s("span",[t._v(t._s(i.musicSize))])]),s("label",{staticClass:"count"},[s("i",{staticClass:"icon album"}),s("span",[t._v(t._s(i.albumSize))])])])])])})),0),s("div",{staticClass:"more"},[s("a",{staticClass:"prev",class:{disabled:!t.offset},on:{click:function(i){t.offset&&t.handlePrev()}}},[t._v("上一页")]),s("a",{staticClass:"next",class:{disabled:!t.more},on:{click:function(i){t.more&&t.handleNext()}}},[t._v("下一页")])]),s("ul",{staticClass:"category"},t._l(t.$store.state.artist,(function(i,a){return s("li",{key:a,class:{c:a%3!=0,active:t.nav.value==i.value},on:{click:function(s){return t.handleNav(i.value,"")}}},[t._v(" "+t._s(i.name)+" ")])})),0),s("ul",{staticClass:"initial"},[t._l(t.initial,(function(i){return s("li",{key:i,class:{active:t.nav.initial==i},on:{click:function(s){return t.handleNav(t.nav.value,i)}}},[t._v(t._s(i.toUpperCase()))])})),s("li",{staticClass:"s",class:{active:"0"==t.nav.initial},on:{click:function(i){return t.handleNav(t.nav.value,"0")}}},[t._v("其他")]),s("li",{staticClass:"s",class:{active:""==t.nav.initial},on:{click:function(i){return t.handleNav(t.nav.value,"")}}},[t._v("默认")])],2),s("h3",{staticClass:"title"},[t._v(" "+t._s(t.nav.name)+" "),s("i",{staticClass:"start-char"},[t._v("（首字母"+t._s("0"!=t.nav.initial&&""!=t.nav.initial?t.nav.initial.toUpperCase():"0"==t.nav.initial?"其他":"默认")+"）")]),s("i",{staticClass:"total"},[t._v("第"+t._s(t.offset2/t.limit+1)+"页 共"+t._s(t.total(t.list,t.offset2))+"名")])]),s("ul",{staticClass:"list"},t._l(t.list,(function(i,a){return s("li",{key:a,on:{click:function(s){return t.handleItemRoute({id:i.id})}}},[s("div",{staticClass:"inner"},[s("img",{attrs:{src:i.picUrl+"?param=200y200"}}),s("div",{staticClass:"wrap"},[s("label",{staticClass:"name"},[t._v(t._s(i.name))]),s("label",{staticClass:"count"},[s("i",{staticClass:"icon music"}),s("span",[t._v(t._s(i.musicSize))])]),s("label",{staticClass:"count"},[s("i",{staticClass:"icon album"}),s("span",[t._v(t._s(i.albumSize))])])])])])})),0),s("div",{staticClass:"more"},[s("a",{staticClass:"prev",class:{disabled:!t.offset2},on:{click:function(i){t.offset2&&t.handlePrev2()}}},[t._v("上一页")]),s("a",{staticClass:"next",class:{disabled:!t.more2},on:{click:function(i){t.more2&&t.handleNext2()}}},[t._v("下一页")])])],1)},n=[],e=(s("7db0"),s("ac1f"),s("1276"),s("34b2")),c=s("66b7"),l=s("2241"),o=s("9f7a"),r={name:"ArtistIndex",components:{AppTop:e["a"],Back:c["a"],Logo:l["a"],SearchButton:o["a"]},data:function(){return{more:!0,more2:!0,offset:0,offset2:0,limit:20,hots:[],list:[],nav:{},initial:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]}},methods:{init:function(){this.fetchHot(),this.fetchList()},fetchHot:function(){var t=this;this.$api.artist.hot(this.offset,this.limit).then((function(i){t.more=i.more,t.hots=i.artists}))},fetchList:function(){var t=this,i="";this.$store.commit("setIsLoading",!0),this.nav=this.$store.state.artist.find((function(t){return t.active})),i=this.nav.value.split("_"),this.$api.artist.list(i[0],i[1],this.nav.initial,this.offset2,this.limit).then((function(i){t.more2=i.more,t.list=i.artists,t.$store.commit("setIsLoading",!1)}))},total:function(t,i){return 0==t.length?i:t.length==this.limit?i+this.limit:i+t.length},handleBack:function(){history.back()},handlePrev:function(){this.offset-=this.limit,this.fetchHot()},handleNext:function(){this.offset+=this.limit,this.fetchHot()},handlePrev2:function(){this.offset2-=this.limit,this.fetchList()},handleNext2:function(){this.offset2+=this.limit,this.fetchList()},handleItemRoute:function(t){var i=t.id;this.$router.push({name:"artistDetail",params:{id:i}})},handleNav:function(t,i){t==this.nav.value&&i==this.nav.initial||(this.$store.commit("setArtist",{value:t,initial:i}),this.offset2=0,this.fetchList())}},created:function(){this.init()}},u=r,f=(s("3df6"),s("2877")),h=Object(f["a"])(u,a,n,!1,null,"7aed1abc",null);i["default"]=h.exports},"66b7":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("a",{staticClass:"back",on:{click:function(i){return t.$emit("back")}}})},n=[],e={name:"Back"},c=e,l=(s("f114"),s("2877")),o=Object(l["a"])(c,a,n,!1,null,"2d086ee5",null);i["a"]=o.exports},6787:function(t,i,s){},"74ad":function(t,i,s){"use strict";var a=s("6787"),n=s.n(a);n.a},"7db0":function(t,i,s){"use strict";var a=s("23e7"),n=s("b727").find,e=s("44d2"),c="find",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),a({target:"Array",proto:!0,forced:l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),e(c)},8515:function(t,i,s){},"9f7a":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("transition",{attrs:{name:"zoom"}},[t.show?a("a",{staticClass:"search-button",on:{click:function(i){return t.$router.push({name:"searchIndex"})}}},[a("img",{attrs:{src:s("0a17")}})]):t._e()])},n=[],e={name:"SearchButton",data:function(){return{show:!1}},mounted:function(){this.show=!0}},c=e,l=(s("74ad"),s("2877")),o=Object(l["a"])(c,a,n,!1,null,"6ba87d5b",null);i["a"]=o.exports},bdfa:function(t,i,s){},f114:function(t,i,s){"use strict";var a=s("bdfa"),n=s.n(a);n.a}}]);