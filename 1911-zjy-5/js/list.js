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
    class shopList {
        constructor(options) {
            this.url = options.url;
            this.ul = options.ul;
            this.load();
        }
        load() {
            var that = this
            ajaxGet(this.url, (res) => {
                that.res = JSON.parse(res);
                that.display();
            })
        }
        display() {
            var str = "";
            for (var i = 0; i < this.res.length; i++) {
                str += `<li><a href="./details.html?id=${this.res[i].goodsId}" target="_blank">
                            <img src="${this.res[i].img}" alt="">
                            <p>${this.res[i].name}</p>
                            <p class="price">
                                <span class="price">${this.res[i].price}</span>
                                <span class="oPrice">${this.res[i].oPrice}</span>
                            </p>
                            <input type="button" value="查看详情" id="input">
                        </a></li>`
            }
            this.ul.innerHTML = str;        
        }
    } 
    new shopList({
        url: "http://localhost/1911-zjy/goods1.json",
        ul: document.getElementById("shopList")
    })
})