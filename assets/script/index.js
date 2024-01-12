let divAll=document.querySelector(".s-divs");

fetch("http://localhost:3000/Busin")
.then(res=>res.json())
.then(data=>{
data.forEach(element => {
    divAll.innerHTML+=`
    <div class="div3">
    <div class="img">
        <img src="${element.image}" alt="">
    </div>
    <h3>${element.name}</h3>
    <p>${element.des}</p>
    <div class="btn">
<button onclick="Delete(${element.id})">Delete</button>
<button  onclick="Fav(${element.id})">Fav</button>
<button>Update</button>
<button  onclick="Details(${element.id})">Details</button>
</div>
</div>

    `
});
})

function Fav(id){
    axios.get("http://localhost:3000/Busin/"+id)
    .then(res=>{
        axios.post("http://localhost:3000/Fav", res.data)
        .then(window.location="./fav.html")
    })
}

function Delete (id){
axios.delete("http://localhost:3000/Busin/"+id)
.then(res=>window.location="./index.html")
}

function Details(id){
    window.location=`./details.html?id=${id}`
}