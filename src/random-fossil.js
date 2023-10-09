import axios from "axios";

console.log('Hello World');

const randomFossilBtn = document.getElementById("get-random-fossil")

randomFossilBtn.addEventListener("click", async () =>{
const responce = await axios.get('/random-fossil.jason')

const imgDive = document.querySelector('#')
imgDive.setAttribute(src, responce.data.img) 
})
