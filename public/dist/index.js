webpackJsonp([0],[,,function(n,o){},function(n,o,t){"use strict";(function(n){t(2),n.ajax({url:"/fruit.action",method:"get",success:function(o){var t=o.map(function(n){return"<li>"+n+"</li>"}).join();n("#fruit").html(t)},error:function(n){console.log(n)}}),n.ajax({url:"/color.action",method:"post",data:JSON.stringify(["name","fm_BabyBear"]),success:function(o){var t=o.map(function(n){return"<li>"+n+"</li>"}).join();n("#color").html(t)},error:function(n){console.log(n)}})}).call(o,t(0))}],[3]);
//# sourceMappingURL=index.js.map