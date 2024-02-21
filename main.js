const img_cover = document.querySelector(".img_cover");
const img_wrapper = document.querySelector(".img_wrapper");
const img = document.querySelector(".img");
let imgeWrapperWidth = img_wrapper.offsetWidth;
let imgeWrapperHeight = img_wrapper.offsetHeight;
img_cover.addEventListener("mousemove", function(e){
    const Px = e.pageX;
    const Py = e.pageY;
    let imgeWidth = img.offsetWidth;
    let imgeHeight = img.offsetHeight;
    let sapceX = ( imgeWidth / 2 - imgeWrapperWidth) *1.9;
    imgeWidth = imgeWidth + sapceX;
    let sapceY = ( imgeHeight / 2 - imgeWrapperHeight) *1.9;
     imgeHeight = imgeHeight + sapceY;
    let ratioX = imgeWidth / imgeWrapperWidth / 2;
    let ratioY = imgeHeight/ imgeWrapperHeight / 2;
    let x = (Px - img_wrapper.offsetLeft)*ratioX ;
    let y = (Py - img_wrapper.offsetTop)*ratioY;
    img.style = "width: auto ; height: auto ; max-height: unset";
    img.style = `left:${-x}px; top: ${-y}px ; width:auto; height:auto; max-height: unset; transform:none;`;
})
img_cover.addEventListener('mouseleave', function(e)
{
    img.style = "";
})