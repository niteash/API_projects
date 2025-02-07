let url = "https://world.openfoodfacts.org/api/v0/product/737628064502.json";

let btn = document.querySelector('#btn');
let ul = document.querySelector('#list');

let btnImg = document.querySelector('#img-btn');
let img  = document.querySelector('#img')

btn.addEventListener('click', async ()=>{
    let  results =  await getCategory();
   results.forEach(result => {
    let li = document.createElement('li');
    li.innerText = result;
    ul.appendChild(li);
   });
})

async function getCategory(){
try{

    let response = await axios.get(url)
    return response.data.product._keywords;
}
catch(err){
    console.log("Error - ", err)
    return [];
}
}

btnImg.addEventListener('click', async ()=>{
    let images = await getImage();
    img.src = images
})

async function getImage(){
    try{
        let output  = await axios.get(url);
       return output.data.product.selected_images.front.display.en;
    }

    catch(err){
        console.log("Error - ", err)
        return []
    }
}

