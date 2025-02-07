let url = "https://world.openfoodfacts.net/api/v2/product";

async function getFood(){

    const  config = {headers:{Accept : "application/json"}}
    let response = await axios.get(url,config)
    console.log(response)
}