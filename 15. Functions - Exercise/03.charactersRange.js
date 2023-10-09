function charactersRange(char1, char2) {
  let code1 = char1.charCodeAt(0);
  let code2 = char2.charCodeAt(0);

  let codeAsStr = "";

  let minCode = Math.min(code1, code2);
  let maxCode = Math.max(code1, code2);

  for (let i = minCode + 1; i < maxCode; i++) {
    let curChar = String.fromCharCode(i);
    codeAsStr += curChar + " ";
  }

  console.log(codeAsStr);
}
charactersRange("a", "d");
charactersRange("#", ":");
charactersRange("C", "#");
