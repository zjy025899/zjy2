$(function () {
    $(".top").load("http://localhost/1911-zjy/land.html .topW")
    $("header").load("http://localhost/1911-zjy/land.html .header")
    $("footer").load("http://localhost/1911-zjy/land.html .footer")
    $("#family").mouseover(function () {
        // $(this).parent().nextSibling().addClass("active");
        $(this).parent().parent().next().addClass("active");
        $(this)[0].style.background = "#ff3c3c";
    })
    $("#family").mouseout(function () {
        // $(this).parent().nextSibling().addClass("active");
        $(this).parent().parent().next().removeClass("active");
        $(this)[0].style.background = "red";
    })
    $("#classify").mouseover(function () {
        $(this).addClass("active");
    })
    $("#classify").mouseout(function () {   
        $(this).removeClass("active");
    })
    // console.log(localStorage.getItem("msg"));
    class Load{
        constructor(options){
            this.tbody = document.getElementById("tbody");
            this.url = options.url;
            this.load();
            this.addEvent();
            this.input();
        }
        load(){
            var that = this;
            ajaxGet(this.url,(res)=>{
                that.res = JSON.parse(res);
                that.getLocalStorage();
            });
        }
        getLocalStorage(){
            this.msg = JSON.parse(localStorage.getItem("msg"));
            // console.log(this.msg);
            this.display();    
        }
        display(){
            var str = "";
            // console.log(this.res);
            for(var i = 0;i < this.res.length;i++){
                for(var j = 0;j < this.msg.length;j++){
                    if(this.res[i].goodsId === this.msg[j].id){
                        str +=
                         `<tr index="${this.res[i].goodsId}">
                            <td><img src="${this.res[i].img}" alt=""></td>
                            <td>${this.res[i].name}</td>
                            <td id="price">${this.res[i].price}</th>
                            <td><input type="number" min="1" value="${this.msg[j].num}" class="change"/></th>
                            <td id="addPrice">￥${this.res[i].price.slice(1) * this.msg[j].num}.00</th>
                            <td id="delete">删除</th>
                        </tr>`
                    }
                }
            }
            this.tbody.innerHTML = str;       
        }
        addEvent(){
            this.tbody.addEventListener("click",(e)=>{
                if(e.target.id === "delete"){
                    // 判定当点击到的元素是删除的时候，移除整个父元素
                    e.target.parentNode.remove();
                    var number = e.target.parentNode.getAttribute("index");
                    // console.log(number);
                    var arr = JSON.parse(localStorage.msg);
                    // console.log(arr);
                    for(var i = 0;i < arr.length;i++){
                        if(arr[i].id == number){
                            arr.splice(i, 1);
                            localStorage.setItem("msg", JSON.stringify(arr));
                        }
                    }
                }
            })
        }
        input(){
            // console.log(this.res);
            var that = this;
            this.tbody.addEventListener("input",(e)=>{
                if(e.target.className === "change"){
                    var number = e.target.parentNode.parentNode.getAttribute("index");
                    var arr = JSON.parse(localStorage.msg);
                    // console.log(arr);
                    // console.log(e.target)
                    for(var i = 0;i < arr.length;i++){
                        if(arr[i].id === number){
                        //    console.log(arr[i].num)
                        //    console.log(e.target.value);
                           arr[i].num = e.target.value;
                           localStorage.setItem("msg", JSON.stringify(arr));
                        }
                    }
                    e.target.parentNode.nextSibling.innerHTML = "￥" + ($('#addPrice').prev().children('input').val()) * ($('#addPrice').prev().prev()[0].innerHTML.slice(1)) + ".00";
                }
            })
        }
    }
    new Load({
        url: "http://localhost/1911-zjy/goods1.json"
    });
})