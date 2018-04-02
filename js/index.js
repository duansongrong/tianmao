//banner
{
    let imgs=document.querySelectorAll(".banner_img");
    let pagers=document.querySelectorAll(".banner_pager li");
    let banner=document.querySelector("#banner");
    pagers.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    })
    var n=0;
    let t=setInterval(move,3000);
    function move(){
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            pagers[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }
    banner.onmouseenter=function(){
        clearInterval(t);
    }
    banner.onmouseleave=function(){
        t=setInterval(move,3000);
    }
}
//分类
{
    let labels=document.querySelectorAll(".banner_fenlei li");
    let menus=document.querySelectorAll(".menu");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    });
}
//疯抢
{
    let content=document.querySelectorAll(".market_pro_bottom .market_pro_content");
    let pagers=document.querySelectorAll(".market_pro1");
    var n=0;
    function move(){
        n++;
        if(n>=2){
            n=0;
        }
        for(var i=0;i<pagers.length;i++){
            pagers[i].classList.remove("active");
            content[i].classList.remove("active");
        }
        content[n].classList.add("active");
        pagers[n].classList.add("active");
    }
    setInterval(move,2000);
}

//顶部
{
    let xianshi=document.querySelector(".topbar");
    let leftBar=document.querySelector(".floatbar");
    window.onscroll=function(){
        let st=document.documentElement.scrollTop;
        if(st>750){
            leftBar.style.display="block";
        }else{
            leftBar.style.display="none";
        }

        if(st>800){
            xianshi.style.display="block";
        }else{
            xianshi.style.display="none";
        }
    }

}
//左侧浮动
{
    let tips=document.querySelectorAll(".floatbar_item9");
    let containers=document.querySelectorAll(".container");
    // let flag=true;
    tips.forEach(function(ele,index){
        ele.onclick=function(){
            // flag=false;
            let ot=containers[index].offsetTop-50;
            document.documentElement.scrollTop=ot;
            let now=document.documentElement.scrollTop;
            let speed=(ot-now)/8;
            let time=0;
            let t=setInterval(function(){
                time+=25;
                now+=speed;
                if(time===200){
                    clearInterval(t);
                    // flag=true;
                }
                document.documentElement.scrollTop=now;
            },25)
        }
    });
    window.addEventListener("scroll",function(){
        // if(flag){
        let st=document.documentElement.scrollTop;
        for(i=0;i<containers.length;i++){
            if(st>containers[i].offsetTop-530){
                for(let j=0;j<tips.length;j++){
                    tips[j].classList.remove("active");
                }
                tips[i].classList.add("active");

            }
        }
        // }
    });
    let totop=document.querySelector(".float_totop");
    totop.onclick=function(){
        let st=document.documentElement.scrollTop;
        let t=setInterval(function(){
            st-=200;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },25);
    }
}

//右侧
{

    // let box=$(".side_bian1");
    // let bottom=$(".side_bottom");
    // box.each(function(index,value){
    //     $(this).mouseenter(function(){
    //         bottom.animate({left:-90}, 500);
    //         bottom.css("display","block");
    //     });
    //     $(this).mouseleave(function(){
    //         bottom.css("display","none");
    //     });
    // })

    let box=document.querySelectorAll(".side_geren");
    let bottom=document.querySelectorAll(".side_bottom");
    //let big=document.querySelectorAll("side_bian1");
    box.forEach(function(ele,index){
        ele.onmouseenter=function(){
            bottom[index].style.opacity="1";
            bottom[index].style.left="-90px";
            bottom[index].style.transition="all 0.5s";
        }
        ele.onmouseleave=function(){
            bottom[index].style.opacity="0";
            bottom[index].style.left="-130px";
        }
    })
    let box3=document.querySelectorAll(".side_yijian");
    let bottom3=document.querySelectorAll(".side_bottom2");
    box3.forEach(function(ele,index){
        ele.onmouseenter=function(){
            bottom3[index].style.opacity="1";
            bottom3[index].style.left="-90px";
            bottom3[index].style.transition="all 0.5s";
        }
        ele.onmouseleave=function(){
            bottom3[index].style.opacity="0";
            bottom3[index].style.left="-130px";
        }
    })
    let box1=document.querySelectorAll(".side_geren2");
    let bottom1=document.querySelectorAll(".side_bottom1");
    box1.forEach(function(ele,index){
        ele.onmouseenter=function(){
            bottom1[index].style.opacity="1";
            bottom1[index].style.left="-90px";
            bottom1[index].style.transition="all 0.5s";
        }
        ele.onmouseleave=function(){
            bottom1[index].style.opacity="0";
            bottom1[index].style.left="-130px";
        }
    })
    let totop=document.querySelector(".side_bian2");
    totop.onclick=function(){
        let st=document.documentElement.scrollTop;
        let t=setInterval(function(){
            st-=200;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },25);
    }

    let box2=document.querySelectorAll(".side_bian3");
    let bottom2=document.querySelectorAll(".side_erwei");
    box2.forEach(function(ele,index){
        ele.onmouseenter=function(){
            bottom2[index].style.display="block";
        }
        ele.onmouseleave=function(){
            bottom2[index].style.display="none";
        }
    })
}
