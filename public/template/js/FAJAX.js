var AJAX = {
    get:function(url,data,callback){
        var query = ""
        for(var i in data){
            query += i + "=" + data[i] + "&";
        }
        query = query.slice(0,-1);
        var xhr = null
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest()
        }else if(window.ActiveXObject){
            xhr = new ActiveXObject("Microsoft.XMLHttp");
        }else{
            throw new Error("浏览器版本较低！")
        }
        xhr.onreadystatechange = function(data){
            if(xhr.readyState === 4){
                var obj = JSON.parse(xhr.responseText);
                callback(obj);
            }
        }
        xhr.open("get",url + "?" + query ,true)
        xhr.send();
    },
    post:function(url,data,callback){
        var query = ""
        for(var i in data){
            query += i + "=" + data[i] + "&";
        }
        query = query.slice(0,-1);
        var xhr = null
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest()
        }else if(window.ActiveXObject){
            xhr = new ActiveXObject("Microsoft.XMLHttp");
        }else{
            throw new Error("浏览器版本较低！")
        }
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                var obj = JSON.parse(xhr.responseText);
                callback(obj);
            }
        }
        xhr.open("post",url,true)
        xhr.setRequestHeader("content-type" ,"application/x-www-form-urlencoded;charset=utf-8")
        xhr.send(query);
    }
    
}
