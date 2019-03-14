var num=$(".n_ipt").val();
console.log(num)
$(".n_btn_1").on("click",function(){
	num++;
	$(".n_ipt").val(num);
	// console.log(num++)
});
$(".n_btn_2").on("click",function(){
	num--;	
	if(num<1){
		num=1; 
	}
	$(".n_ipt").val(num);
});


var $choice=$(".des_choice>ul li");
// console.log($choice);
$choice.on("click",function(){
	$(this).siblings().removeClass("checked");
	$(this).addClass("checked");
})

var shop={
	totalnum:0,
	totalprice:0,
	list:[],
}
var $team_list=$(".team_list");
console.log($team_list);


	
$(".team_list").each(function(index,el){
	var price=$(".price span:last",this).text().split("￥")[1]-0;
	shop.list.push({
		price:price,
	})
	console.log(price);
})

$.each($(".checkbox input"),function(index){
	if ($(".checkbox input")[index].checked==true) {
		shop.totalprice+=shop.list[index].price;
		show();
	}

})

$(".checkbox input").on("click",function(){
	shop.totalprice=0;
	$(".checkbox input").each(function(index,el){
		var input=$(".checkbox input")[index];
		console.log(input);
		if($(".checkbox input")[index].checked==true){
			shop.totalprice+=shop.list[index].price;
			console.log(shop.totalprice);
		}
	})
	show();
})

function show(){
	var totalp=$(".team_sum span");
	totalp.text(shop.totalprice);
	console.log($(".team_sum span").text());
}

var num=$(".team_sum input").val();
console.log(num);
$(".team_sum input").on("change",function(index){
	var num1=$(".team_sum input").val();
	shop.totalprice=shop.totalprice*num1;
	show();
})





