/**
 * Created by fm on 2017/3/25.
 */
$.ajax({
    url:"/fruit.action",
    method:"get",
    success:function(arr){
        let data=arr.map(function (ele) {
            return "<li>"+ele+"</li>"
        }).join();
        $("#fruit").html(data);
    },
    error:function (error) {
        console.log(error);
    }
})
$.ajax({
    url:"/color.action",
    method:"post",
    data: JSON.stringify(["name","fm_BabyBear"]),
    success:function(arr){
        let data=arr.map(function (ele) {
            return "<li>"+ele+"</li>"
        }).join();
        $("#color").html(data);
    },
    error:function (error) {
        console.log(error);
    }
})