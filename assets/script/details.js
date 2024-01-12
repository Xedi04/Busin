let divAll=document.querySelector(".s-divs");
let id=new URLSearchParams(window.location.search).get("id")

fetch("http://localhost:3000/Busin/"+id)
.then(res=>res.json())
.then(data=>{
    divAll.innerHTML+=`
    <div class="div3">
    <div class="img">
        <img src="${data.image}" alt="">
    </div>
    <h3>${data.name}</h3>
    <p>${data.des}</p>
    <div class="btn">
<button >Delete</button>
<button>Fav</button>
<button>Update</button>
<button>Details</button>
</div>
</div>
    `
})