

/* *** gallery ***
 ***************  */

const filteritem = document.querySelector(".items");
const filterimg = document.querySelectorAll(".img-gall");

window.onload = ()=>{
  filteritem.onclick = (selecteditem)=>{
    if(selecteditem.target.classList.contains("item")){
        filteritem.querySelector(".active").classList.remove("active");
        selecteditem.target.classList.add("active");
        let filterName = selecteditem.target.getAttribute("data-name");
        filterimg.forEach((image)=>{
          let filterimgs = image.getAttribute("data-name");
          if((filterimgs == filterName) || filterName == "all"){
            image.classList.remove("hide");
            image.classList.add("show");
          }else{
            image.classList.add("hide");
            image.classList.remove("show");
          }
        });
    }

  }
  for(let index = 0; index < filterimg.length; index++){
    filterimg[index].setAttribute("onclick","preview(this)");
  }
}

const previewbox = document.querySelector(".preview-box"),
previewimg = previewbox.querySelector("img"),
categoryname = previewbox.querySelector(".title p"),
closeicon = previewbox.querySelector("#icon"),
shadow = document.querySelector(".shadow");

function preview(element){
  document.querySelector("body").style.overflow = "hidden";
  let slectedpreviewimg = element.querySelector("img").src;
  let selectedimgcategory = element.getAttribute("data-name");
  categoryname.textContent = selectedimgcategory;
  previewimg.src = slectedpreviewimg;
   previewbox.classList.add("show");
   shadow.classList.add("show");
   closeicon.onclick = ()=>{
    previewbox.classList.remove("show");
    shadow.classList.remove("show");
    document.querySelector("body").style.overflow = "scroll";
    
   }
}