function add(x) {
	return function (y) {
	  return x + y;
	};
  }
  
  var add5 = add(5);
  var add10 = add(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12