const sentence = "hello there from lighthouse labs";
let timer = 0;
for (const char of sentence) {
  
  setTimeout(() => {process.stdout.write(char);}, timer * 10);
  timer += 5;
}
console.log("");
