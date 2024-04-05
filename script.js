function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let count = 0;
	s1=s1.toLowerCase();
	s2=s2.toLowerCase();
	for(let i =0; i < s1.length;i++){
		for(let j = 0; j<s2.length;j++){
			if(s1[i]===s2[j]){
				count++
			}
		}
	}
	return count-1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
