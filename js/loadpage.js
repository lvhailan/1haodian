var $name_=$(".userHead").next();
var $psw=$(".userLock").next();
var reg=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}|^1[3578]\d{9}$|^[\u4e00-\u9fa5]{2,4}$/;
var regs=/^\w{6,10}$/;
$(".tableBtn").on("click",function(){
  if (!reg.test($name_.val())) {
  	alert("请书写邮箱、以13、15、18开头的电话或者是2~4个汉字")
  	return false;
  }else if(!regs.test($psw.val())){
  	alert("请输入合法密码！")
  	return false;
  }else {
  	alert("注册成功！")
  	return true;
  }
})