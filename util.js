Array.prototype.clone=function(){ 
	return [].concat(this); 
}

//取两个数组的交集
Array.intersect = function () { 
	//当存在空数组时,说明存在属性未选择,此时返回并集
	if(arguments[0].length == 0){
    	return arguments[1];
    } 
    if(arguments[1].length == 0){
    	return arguments[0];
    } 
    var result = new Array();
    var obj = {};
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {  
            var str = arguments[i][j];  
            if (!obj[str]) {  
                obj[str] = 1;  
            }  
            else {  
                obj[str]++;  
                if (obj[str] == arguments.length)  
                {  
                    result.push(str);  
                }  
            } 
        } 
    } 
    return result;  
} 

//获取除当前坐标外的其他数组 返回一个数组
function getOtherArr(arr,cur_index){
	var temp = new Array();
	for(var i= 0 ; i < arr.length ; i++){
		if(i != cur_index){
			temp.push(arr[i]);
		}
	}
	return temp;
}

//获取二维数组内,各个数组的交集返回一个新的数组
function getIntersection(arrs){
	//console.log(arrs);
	if(arrs.length == 1){
		return arrs[0];
	}else{
		var result = Array.intersect(arrs[0],arrs[1]);
		for(var i = 2; i < arrs.length ; i++){
			result = Array.intersect(arrs[i],result);
		}
		return result;
	}
}

//判断数组是否包含指定内容
function isConSku(sku1,skuIds){
	for(var i = 0 ; i < skuIds.length ; i++){
		//console.log(skuIds[i] + " ==  " + sku1);
		if(skuIds[i] == sku1){
			return true;
		}
	}
	return false;
}