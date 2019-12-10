$(function () {
    if(getCookie("data")){
        $(".top").load("http://localhost/1911-zjy/land.html .topW",function(){
            // console.log(getCookie("data").split(",")[0]);
            $(".login")[0].innerHTML = "欢迎" + getCookie("data").split(",")[0] + "用户";
            $(".login")[0].onclick = function(){
                location.href = "./index.html";
            }
            $(".login").parent().next()[0].innerHTML = "注销";
            $(".login").parent().next()[0].onclick = function(){
                removeCookie("data");
                location.href = "./index.html"
            }
        })
    }else{
        $(".top").load("http://localhost/1911-zjy/land.html .topW")
    }
    $("header").load("http://localhost/1911-zjy/land.html .header")
    $("footer").load("http://localhost/1911-zjy/land.html .footer")
    // $("nav").load("http://localhost/1911-zjy/land.html .nav")
    var btn = document.querySelectorAll(".btn");
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            autoplay: true,
            delay: 2000,
        }
    })
    mySwiper.el.onmouseover = () => {
        mySwiper.autoplay.stop();
        for (var i = 0; i < btn.length; i++) {
            btn[i].style.display = "block";
        }
        // console.log("鼠标进去")
    };
    mySwiper.el.onmouseout = () => {
        mySwiper.autoplay.start();
        for (var i = 0; i < btn.length; i++) {
            btn[i].style.display = "none";
        }
    }
    $("aside").hide();
    $(window).scroll(() => {
        if ($(document).scrollTop() > 500) {
            $("aside").show();
        } else {
            $("aside").hide();
        }
    })

    $("aside ul li").click(function () {
        $("html").animate({
            scrollTop: $("#shop .Box").eq($(this).index()).offset().top
        })
    })
    $("aside p").click(function () {
        $("html").animate({
            scrollTop: 0
        })
    })

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
                        </a></li>`
            }
            this.ul.innerHTML = str;           
        }
    } 
    new shopList({
        url: "http://localhost/1911-zjy/goods.json",
        ul: document.getElementById("shopList")
    })
    new CountDown({
        send:"2019/12/12 00:00:00",      //传入想要截至的日期
        //传入要渲染的页面元素 ↓
        day:document.getElementById("day"),
        hour: document.getElementById("hour"),
        minute: document.getElementById("minute"),
        second: document.getElementById("second"),
    });
});




