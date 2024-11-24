let changeButton = document.getElementById('changeButton');
let number = '0123456789ABCEF';
changeButton.onclick = () => {
    let color = "#";
  for(let i = 0; i< 6;i++){
    color += number[Math.floor(Math.random()*number.length)];
  }
  document.body.style.backgroundColor = color;
}
