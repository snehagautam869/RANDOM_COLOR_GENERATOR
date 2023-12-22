const container =document.querySelector(".container");
const refreshBtn =document.querySelector(".refresh-btn");

const maxPaletteBoxes = 12;

const generatePalette = () =>
{
    container.innerHTML = "";//clearing the container
    for(let i=0;i<maxPaletteBoxes;i++)
    {
        //generate a randm hex color
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;

        //creating a new 'li' element and inserting it to thr container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="react-box" style ="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`;
        
        //adding click event to current li element to copy the color
        color.addEventListener("click",()=> copyColor(color,randomHex));
        container.appendChild(color);
    }

}
generatePalette();
const copyColor = (elem,hexval) => 
{
    const colorElement = elem.querySelector(".hex-value");
    //copying the hex value ,updating the text to copied
    //and changing text back to original hex value after 1 second
    navigator.clipboard.writeText(hexval).then(() => 
    {
        colorElement.innerText ="Copied";
        setTimeout(()=> colorElement.innerText = hexval,1000);
    }).catch(()=> alert("Failed to copy the color Code!"));//showing alert if color cant copy
}
refreshBtn.addEventListener("click",generatePalette);