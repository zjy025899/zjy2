class Login{
    constructor(){
        this.cookie = document.cookie.split("=")[1].split(",");
        // console.log(this.cookie);
        this.user = document.getElementById("user");
        this.pass = document.getElementById("pass");
        this.sub = document.getElementById("sub");
        this.landing = document.querySelector(".landing")
        // console.log(this.sub);
        this.init();
    }
    init(){
        var that = this;
        this.sub.onclick = function(){
            that.u = that.user.value;
            that.p = that.pass.value;
            console.log(1);
            console.log(that.u,that.p,that.cookie[0],that.cookie[1])
            if(that.u === that.cookie[0] && that.p === that.cookie[1]){
                alert("登陆成功，跳转至首页")
                location.href = "./index.html";
            }else{
                alert("用户名或密码不正确，请确认后再登陆！");
            }
        }
    }
}  
new Login;