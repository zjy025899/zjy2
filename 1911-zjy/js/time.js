class CountDown{
    constructor(contact){
        //获取传入的页面元素
        this.day = contact.day;
        this.hour = contact.hour;
        this.minute = contact.minute;
        this.second = contact.second;
        //获取传入的截至日期
        this.send = contact.send;
        //函数内部拿不到函数外部的this，所以用变量保存
        var that = this;    
        //每1秒钟执行一次获取时间的函数
        setInterval(() => {
            that.setTime();
        }, 1000);
    }
    setTime(){
        //获取当前时间
        this.date = new Date();
        this.now = this.date.getTime();
        //设置截至时间
        this.endDate = new Date(this.send);
        this.end = this.endDate.getTime();
        //时间差
        this.sendTime = this.end - this.now;
        //保存倒计时时间
        if (this.sendTime >= 0) {
            this.d = Math.floor(this.sendTime / 1000 / 60 / 60 / 24);
            this.h = Math.floor(this.sendTime / 1000 / 60 / 60 % 24);
            this.m = Math.floor(this.sendTime / 1000 / 60 % 60);
            this.s = Math.floor(this.sendTime / 1000 % 60);
        }
        //调用渲染页面的方法
        this.display();
    }
    //渲染页面
    display(){
        this.day.innerHTML = this.d;
        this.hour.innerHTML = this.h;
        this.minute.innerHTML = this.m;
        this.second.innerHTML = this.s;
    }
}