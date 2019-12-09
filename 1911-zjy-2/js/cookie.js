function setCookie(key,val,options){
    options = options || {};
    var path = options.path ? ";path="+options.path : "";
    if(options.expires){
        var d = new Date();
        d.setDate(d.getDate()+options.expires);
        var exp = ";expires="+d;
    }else{
        var exp = "";
    }
    document.cookie = key + "=" + val + path + exp;
}


function removeCookie(key,options){
    options = options || {};
    options.expires = -1;
    setCookie(key,null,options);
}


function getCookie(key){
    var data = document.cookie;
    var arr = data.split("; ");
    for(var i=0;i<arr.length;i++){
        if(arr[i].split("=")[0] === key){
            return arr[i].split("=")[1];
        }
    }
    return "";
}