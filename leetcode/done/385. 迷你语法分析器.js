var deserialize = function(s) {
  if (s[0] !== '[') {
      return new NestedInteger(parseInt(s));
  }
  const stack = [];
  let num = 0;
  let negative = false;
  for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === '-') {
          negative = true;
      } else if (isDigit(c)) {
          num = num * 10 + c.charCodeAt() - '0'.charCodeAt();
      } else if (c === '[') {
          stack.push(new NestedInteger());
      } else if (c === ',' || c === ']') {
          if (isDigit(s[i - 1])) {
              if (negative) {
                  num *= -1;
              }
              stack[stack.length - 1].add(new NestedInteger(num));
          }
          num = 0;
          negative = false;
          if (c === ']' && stack.length > 1) {
              const ni = stack.pop();
              stack[stack.length - 1].add(ni);
          }
      }
  }
  return stack.pop();
};

const isDigit = (ch) => {
  return parseFloat(ch).toString() === "NaN" ? false : true;
}
