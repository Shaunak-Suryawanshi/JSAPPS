const colors = ['red', 'blue', 'green'];

const buttonDiv =document.querySelector(".buttons")

colors.forEach((color,index) => {
    const button = document.createElement("button");
    button.className="color-btn";
    button.style.backgroundColor=color;
    button.innerText=color.toUpperCase();

    button.onclick=()=>{
        document.body.style.backgroundColor=color;
    }

    buttonDiv.appendChild(button);
    

  });
