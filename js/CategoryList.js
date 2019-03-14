//排序
var $listBox=$(".cate_list");
//排序的顺序  从大到小  从小到大
var isDesc=true;
//点击事件
$("#sortPrice").click(function(){
	//li 保存从小到大排列的数据
	//$listBox  保存从大到小排列的数据
	var list=$("li",$listBox).toArray();
    //true 从大到小
    //false 从小到大
	isDesc=!isDesc;//返回true或false

	list.sort(function(li1,li2){
     	var price1=$(".price span",li1).text().slice(1);
     	console.log(price1);
		var price2=$(".price span",li2).text().slice(1);
		console.log(price2);
		var diff=price1-price2;
		console.log(diff);

		return isDesc?-diff:diff;
	})
	$listBox.empty();
	$listBox.append(list);
	return false;
})