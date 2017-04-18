
const path=require("path");
const ejs=require("ejs");
/*
* <% %> 逻辑运算
* <%- %> unscape 不会对包含的特殊字符进行转译，所以如果字符串包含js代码，则会直行。
* <%= %> escape XSS  会转译包含的代码块。
* */

const html=`hello 
            <%if(name=="babybear"){%>
            <%- name %>
            <% } %> 
            <%- include("test") %>`;
const f1=ejs.compile(html,{
    filename:path.resolve(__filename)
});
const str=f1({
    name:"babybear",
})
console.log(str);