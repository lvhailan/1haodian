var $phone=$(".tableItem input:first");
console.log($phone);
var $psw=$(".tableItem input:eq(2)");
console.log($psw);
var $mima=$(".tableItem input:eq(3)");
console.log($mima);
var reg=/^1[3578]\d{9}$/;
var regs=/^\w{6,10}$/;
var num=60;
var timer=null;

$(".tableText").on("click",fncli = function(){
	$(this).off('click');
	timer=setInterval(fn,1000);
})

function fn() {
	num--;
	if(num<=0){
		clearInterval(timer);
		$(".tableText").text("获取验证码");
		$(".tableText").on("click",fncli);
		
			num=60;
	}else {
		$(".tableText").text("("+num+")重发");
	}
}


$(".tableBtn").on("click",function(){
	if(!reg.test($phone.val())){
		alert("请输入正确的手机号！")
		return false;
	}else if(!regs.test($psw.val())){
		alert("请输入合法密码！")
		return false;
	}else if($psw.val()!=$mima.val()){
		alert("密码不一致，请重新输入！")
	}else {
		alert("注册成功！")
	}
})