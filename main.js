let contain = document.getElementById("container");

fetch("https://coffee.alexflipnote.dev/random.json")
.then((response) => response.json())
.then((data) => {
        let img = document.createElement("img");
        img.src = data.file;
        contain.appendChild(img);
})

setTimeout(function(){
   window.location.reload(1);
}, 3000);