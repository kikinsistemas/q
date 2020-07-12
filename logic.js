function Calculate(){
	let m = parseInt(document.getElementById('metros').value);
let c = document.getElementById('tipo').value;
let r;
if(c=='Centimetros'){
r= m*100;
}

if(c=='Kilometros'){
r = m/1000;

}
if(c=='Pulgadas'){
r = m/0.0254

}
document.getElementById('result').innerHTML = `El total en ${c}es: ${r}`;
}
function reload(){
location.reload()
}
