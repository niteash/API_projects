let url = "https://api.potterdb.com/v1/characters";
let bookurl = "https://api.potterdb.com/v1/characters?page[number]=2";


let ul = document.querySelector("#list");
let btn = document.querySelector("#btn");
let bookBtn = document.querySelector("#bookbtn")
let Bookul = document.querySelector("#book")

btn.addEventListener("click", async () => {
    let names = await getDetails();
    names.forEach(name => {
        let li = document.createElement("li");
        li.innerText = name;
        ul.appendChild(li);
    });
});

async function getDetails() {
    try {
        let res = await axios.get(url);
        return res.data.data
            .slice(0, 100) 
            .map(char => char.attributes?.name) 
            .filter(name => name);
    } catch (err) {
        console.log("Error -", err);
        return [];
    }
};

bookBtn.addEventListener("click", async()=>{
   let books = await getBook();
   books.forEach(book =>{
        let myli = document. createElement('li')
        myli.innerText = book;
        Bookul.appendChild(myli);
   })
})


async function getBook(){
  try{
    let response = await axios.get(bookurl);
    return response.data.data
    .slice(0,100)
    .map(book => book.attributes?.name)
    .filter(name => name)
   

  }
  catch(err){
    console.log("Error - ", err)
  }
}