let url = "https://cataas.com/api/cats?limit=10&skip=0";
let catUrl = "https://api.thecatapi.com/v1/images/search?limit=10"

let btn = document.querySelector('#get')
let img = document.querySelector('#cat-img')

async function getCat(){
  try{
    let res = await axios.get(catUrl);
    // console.log(res)
    return res.data[0].url
  }
  catch(err){
    console.log("Error = ", err)
  }
}

btn.addEventListener('click', async()=>{
  let myImg = await getCat();
  img.src = myImg
})