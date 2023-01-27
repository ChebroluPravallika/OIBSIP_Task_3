let id = 0;
function onChangeIn(){
    var inerror = document.getElementById("in");
    inerror.innerHTML = ""
}

function onChangeDesc(){
    var descerror = document.getElementById("des");
    descerror.innerHTML = ""
}

function save() {
    id += 1;
    var todo = document.getElementById("add");
    var title = document.getElementById("title").value;
    var description = document.getElementById("desc").value;
    // console.log(title);
    var div = document.createElement("div");
    var text = document.createElement("p");
    var des = document.createElement("p");
    var img = document.createElement("img");
    var inerror = document.getElementById("in");
    var descerror = document.getElementById("des");
    img.src = "https://thumbs.dreamstime.com/b/flat-square-mark-red-icon-button-cross-symbol-isolated-white-background-vector-eps-flat-square-mark-red-icon-button-cross-143476708.jpg";
    img.classList.add("cross-image");
    if (title==="" || description===""){
        if (title=="" && description == ""){
            inerror.innerHTML = "*Required";
            descerror.innerHTML = "*Required";
        }
        else if(title==""){
            inerror.innerHTML = "*Required";
        }
        else if (description == ""){
            descerror.innerHTML = "*Required";
        }
    }
    else{
        inerror.innerHTML = "";
        descerror.innerHTML = "";
        text.innerHTML = title;
        des.innerHTML = description;
        div.appendChild(text);
        div.appendChild(des);
        div.appendChild(img);
        div.setAttribute("id",id);
        div.classList.add("todo-item");
        var main = document.getElementById("add");
        document.getElementById("title").value="";
        document.getElementById("desc").value="";
        main.appendChild(div);
    }
    
    img.onclick= ("click", (event) => {
        let s = document.getElementById(div.id);
        s.remove()
    })
}