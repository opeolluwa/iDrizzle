let input;
let output;
//initialize
function encodeRot13(str) {
 //CODE BLOCK 1
 str = input.value;
 str = str.toString();
 //make holder
 let strArr = [];
 //go over input
 for (let cntCipher = 0; cntCipher < str.length; cntCipher++) {
  //add each cipher to holder
  strArr.push(str.codePointAt([cntCipher]));
  //get char code, of each character, add to holder
  if (strArr[cntCipher] >= 97 && strArr[cntCipher] <=
   122) {
   //convert alphabet to uppercase

   strArr[cntCipher] -= 32;
  }
 }
 //CODE BLOCK 2
 //go over each holder element, translate cipher
 for (let cntCipher = 0; cntCipher < strArr.length; cntCipher++) {
  //translate N- z
  if (strArr[cntCipher] >= 78 && strArr[cntCipher] <= 90) {
   strArr[cntCipher] = String.fromCharCode(strArr[cntCipher] - 13);
  }
  //translate A - N
  else if (strArr[cntCipher] >= 65 && strArr[cntCipher] < 78) {
   strArr[cntCipher] = String.fromCharCode(strArr[cntCipher] + 13);
  }
  //translate other characters
  else {
   strArr[cntCipher] = String.fromCharCode(strArr[cntCipher]);
  }
 }


 //CODE BLOCK 3 
 let strArx = strArr[0]; //initializer
 //merge array to get string
 for (let cntCipher = 1; cntCipher < strArr.length; cntCipher++) {
  strArx += strArr[cntCipher];
 }
 //CODE BLOCK 4 | return
 str = strArx;
 output.innerHTML = str.toLowerCase();
}

//rot13("SERR PBQR PNZC");