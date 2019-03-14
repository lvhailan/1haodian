	$(".leftNav ul li").hover(function(){
	$(this).find('.zj').show();
},function(){
    $(this).find('.zj').hide();
})


//轮播
function Lb(){
	this.$img=$(".slide_box li");
	this.$li=$(".num li");
	this.$ul=$(".num");
	//下标
	this.num=0;
	//计时器
	this.timer=null;
}
Lb.prototype.auto=function(n){
	for (var j=0;j<this.$li.length;j++){
		$(this.$img[j]).hide();
		$(this.$li[j]).removeClass("active");
	}
	$(this.$img[n]).show();
	$(this.$li[n]).addClass("active");
}

//计时器
Lb.prototype.fn=function(){
	var that=this;
	this.timer=setInterval(function(){
		if(that.num>that.$li.length-1){
			that.num=0;
		}
		that.auto(that.num);
		that.num++;
	},1000)
}

//鼠标事件
Lb.prototype.in=function(){
	var that=this;
	for(var i = 0;i<this.$li.length;i++){
		this.$li[i].index=i;
		$(this.$li[i]).on("mouseenter",function(){
			that.auto(this.index);
			that.num=this.index;
		})
	}
	this.fn();
	$(this.$ul).on("mouseenter",function(){
		clearInterval(that.timer);
	})
	$(this.$ul).on("mouseleave",function(){
		that.fn();
	})
}
var tm=new Lb();
tm.in();

var timer=null;
var marginTop=0;
	//获取li的高
	var $li=$("#express li").innerHeight();
	function go(){
		timer=setInterval(function(){
			$("#express li:first").animate({"marginTop":marginTop--},50,function(){
				if(-marginTop>$li*($("#express li").length/2)){
					marginTop=0;
				}
			})
		},50)
	}
	go();
	$("#express").on("mouseenter",function(){
		clearInterval(timer);
	});
	$("#express").on("mouseleave",function(){
		go();
	});



//.购物车.on("click",func)
  $(".car_t").on("click",function(){
    	$(".last").show();
    	var index=$(".shop ul li").index();
    	console.log(index);
	   //获取每次点击input里面的值
	   var num = shopcar.list[index].num;
	   change(index,num)
	})

	   var shopcar = {
		//商品总价格
		totalprice:0,
		//商品总数量
		totalnum:0,
		list:[],
	}
	//数据初始化
	var $li=$(".shop ul li");
	console.log($li);
	//遍历jq对象元素
	$li.each(function(index,el){
	//获取每个li里的单价
	var price=$(".J_smallTotalPrice",this).text().split("￥")[1]-0;
	console.log(price);
	//获取每个li里的商品数量
	var num=$(".J_inputCount",this).val()-0;
	console.log(num);
			//总价等于单价乘以数量
			var totalp=price*num;
			//把获取到的值放到list里面
			shopcar.list.push({
				num:num,
				price:price,
				totalp:totalp
			});
			console.log(shopcar.list);
		}); 
    //点击+的时候
	$(".J_btnAddCount").on("click",function(){
	   //获取每个商品li的下标
	   var index=$(this).parents(".shop ul li").index();
	   console.log(index);
	   //获取每次点击input里面的值
	   var num = ++shopcar.list[index].num;
	   console.log(num);
	   //调用
       change(index,num);
	})


	
	function change(index,num){
		if (index>0) {
			//获取单价
			var price=shopcar.list[index].price;
		    //求出总价
		    var totalp=price*num;
		    console.log(totalp);
		    //赋值给list
		    shopcar.list[index]=({
		    	num:num,
		    	price:price,
		    	totalp:totalp
		    })
		}
			
		console.log(shopcar);
		shopcar.totalnum=0;
		shopcar.totalprice=0;
		$.each(shopcar.list,function(index,item){
			//list的index下标  item list中下标的值
			console.log(index,item);
			//总数量等于原来的总数加list中的num值(即input的值)
			shopcar.totalnum=shopcar.totalnum+item.num;
			//总介个等于原来的总结个加list中的totalp的值(即每个li的商品总价)
			shopcar.totalprice=shopcar.totalprice+item.totalp;
		})
		console.log(shopcar);
		show(index);
	}
	//展示到页面上
	function show(index){
		if (index>0) {
    	    //找到input
    		var $num=$(".shop ul li").eq(index).find(".J_inputCount");
    	    //找到单个商品总价
    	    var $totalp=$(".shop ul li").eq(index).find(".J_smallTotalPrice");
    	    //把list里面的值赋给num里面的值，展示到页面上
    	    $num.val(shopcar.list[index].num);
    	    //把list里面的单个商品总价赋给totalp，展示到页面上
    	    $totalp.text('￥'+shopcar.list[index].totalp);
    	}
    	
    	////把商品总价展示到页面上
    	$(".J_totalPrice").text('￥'+shopcar.totalprice);
    	//把商品总数量展示到页面上
    	$(".J_totalCount").text("("+shopcar.totalnum+")");
    }

    $(".close").on("click",function(){
    	var index=$(this).parents(".shop ul li").index();
    	del(index);
    });


    //点击-的时候
    $(".J_btnDelCount").on("click",function(){
    		//获取每个商品li的下标
    		var index=$(this).parents(".shop ul li").index();
    		//获取每次点击input里面的值
    		var num= --shopcar.list[index].num;
    		if(num<1){
    			del(index);
            }
            change(index,num);
        })

    function del(index){
    	var choose=confirm("确定删除吗？");
    	if(choose==true){
    		$(".shop ul li").eq(index).remove();
    	    // console.log($(this).find(".shop ul li"))
    	    shopcar.list.splice(index,1);
    	    change(index);
    	    if($(".shop ul li").length==0){
    	    	$(".noshop").show();
    	    	$(".option").hide();
    	    	$(".buy").hide();
    	    }
    	}


    }



