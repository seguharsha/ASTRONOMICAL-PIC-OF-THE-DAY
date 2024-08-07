let apikey="your_api_key";
let link="https://api.nasa.gov/planetary/apod?"
let x=document.getElementById("imageget");
let y=document.getElementById("hdimageget");
x.addEventListener("click",()=>{
    fetchuser("normal");
})
y.addEventListener("click",()=>{
    fetchuser("hd");
})
function fetchuser(content){
    let imageContainer = document.querySelector(".image-container");
  imageContainer.remove();
let container=document.querySelector('.container');
    let newimagediv=document.createElement('div');
    newimagediv.classList.add("image-container");
    container.append(newimagediv);

    let val=document.getElementById('calendar');
    let ui=(val.value);

    let p=ui.split("-");
    
    let u=`${p[0]}-${p[1]}-${p[2]}`;
  alert(u)
    let xmlrequest=new XMLHttpRequest();
    xmlrequest.open("get",link + "date=" + u + "&api_key=" + apikey,true);
    xmlrequest.send();
    xmlrequest.onload=function(){
        if(xmlrequest.status==200){
            let da=JSON.parse(xmlrequest.responseText);
            let imager;
            if (content === "hd") {
                imager = da.hdurl;
              } else {
                imager = da.url;
              } 
              let image = document.createElement("img");
              image.src = imager;
              newimagediv.append(image);
            } else {
              window.alert("Please enter the date in correct format.");
            }
        }
        }
