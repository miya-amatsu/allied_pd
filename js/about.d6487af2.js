(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"81a8":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collect"},[n("Play")],1)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("PlayVideo")]),n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t.id,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])},s=[],r=(n("c975"),{name:"YoutubeList",props:{},data:function(){return{str:window.location.href,id:""}},created:function(){-1==this.str.indexOf("?v=")&&console.log(-1),this.videoLink()},mounted:function(){},updated:function(){},computed:{},methods:{videoLink:function(){var t=this.str,e=t.substr(t.indexOf("?v=")+3,11),n=t.substr(0,t.indexOf("video"));return console.log(n),this.id=e,e}}}),a=r,c=n("2877"),u=Object(c["a"])(a,l,s,!1,null,null,null),d=u.exports,f={name:"collect",components:{Play:d}},p=f,h=Object(c["a"])(p,o,i,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=about.d6487af2.js.map