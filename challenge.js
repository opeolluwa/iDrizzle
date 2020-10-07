//CODE BLOCK I| define overrides and global variables;
let current;
let initial = 3;
var feedArr = [];
var valArr = [];
//initialize settings value
current = prompt(`initial setting is ${initial},\nenter the next setting \(1-5\) or -1 to stop`, '');

//CODE BLOCK II | update  values, 
while (current !== -1 && current >= 1 && current <= 5) {
    initial = current;
 current = prompt(`current setting is ${current},\nenter the next setting \(1-5\) or -1 to stop`, '');
 feedBack = (current > initial) ? `Positive change\: ${initial} to ${current}` : (current < initial) ? `Negative change\: ${initial} to ${current}` : (current == initial) ? `No change\: ${initial} to ${current}` : '';
 console.log(feedBack);
 feedArr.push(feedBack);
 console.log(current);
 valArr.push(current);
}


//CODE.BLOCK III | generate summary
let
 one = 0,two = 0,three = 0,four = 0,five = 0, pv=0, nv=0,nn=0,eq=0;

for (let cnt in valArr) {
 (valArr[cnt] == 1) ? one++: one += 0;
 (valArr[cnt] == 2) ? two++: two += 0;
 (valArr[cnt] == 3) ? three++:three +=0;
 (valArr[cnt] == 4) ? four++: four += 0;
 (valArr[cnt] == 5) ? five++: five += 0;
}

for (let cnt in feedArr) {
 (/^\N\o/.test(feedArr[cnt])) ? eq++: eq += 0;
 (/^\N\e/.test(feedArr[cnt])) ? nv++: nv += 0;
 (/^\P\o/.test(feedArr[cnt])) ? pv++: pv += 0;
}
console.log(
 `1 was choosen ${one} times.\n\v2 was choosen ${two} times.\n\v3 was choosen ${three} times.\n\v4 was choosen ${four} times.\n\v5 was choosen ${five} times.\n\vPositive change:${pv}\n\vNegative change:${nv}\n\vNo change:${eq}
    `)