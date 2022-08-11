
const bar = document.getElementsByClassName("bar");
const val = document.getElementsByClassName("val");

const d = new Date();
let day = d.getDay();
bar[day-1].style.backgroundColor = "#76b5bd";


fetch("./data.json")
.then(response => {
   return response.json();
})
.then((jsondata) => {
  for(let i=0; i<7; i++){
    bar[i].style.height =jsondata[i]["amount"] *3 + "px";
    val[i].innerHTML = "$" + jsondata[i]["amount"];

    
  }
});

for(let i=0; i<7; i++){
  bar[i].addEventListener("mouseover", ()=>{
    val[i].style.visibility = "visible";
  })
  bar[i].addEventListener("mouseout", ()=>{
    val[i].style.visibility = "hidden";
  })
}











