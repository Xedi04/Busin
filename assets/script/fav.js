let divAll=document.querySelector(".s-divs");
let id=new URLSearchParams(window.location.search).get("id")


fetch("http://localhost:3000/Fav")
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
<button>Fav</button>
<button>Update</button>
<button  onclick="Details(${element.id})">Details</button>
</div>
</div>

    `
});
})

function Delete (id){
axios.delete("http://localhost:3000/Fav/"+id)
.then(res=>window.location="./fav.html")
}
