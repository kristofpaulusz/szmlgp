window.addEventListener("load", init);

let kifejez = "";
let eredmeny = 0;
let muvjel = "";
let muvCount = 0;

function $(elem) {
    return document.querySelectorAll(elem);
}
function ID(elem) {
    return document.getElementById(elem);
}
function digits() {
    // buttons create
    let txt = "";
    for (let i = 0; i < 10; i++) {
        txt += '<button id="'+i+'">'+i+'</button>';
    }
    $(".szamok")[0].innerHTML = txt;
    
    // event listener
    for (let i = 0; i < $(".szamok button").length; i++) {
        $(".szamok button")[i].addEventListener("click", function() {
            if (eredmeny != 0) {
                eredmeny = 0;
                clear();
            }
            kifejez += this.id;
            $(".kifejezes")[0].innerHTML = kifejez;
        })
        
    }
}
function clear() {
    muvCount = 0;
    muvjel = "";
    kifejez = "";
    $(".kifejezes")[0].innerHTML = kifejez;
}
function operations() {
    for (let i = 0; i < 4; i++) {
        $(".muvjelek button")[i].addEventListener("click", function() {
            if (eredmeny != 0) {
                eredmeny = 0;
                clear();
            }
            if (kifejez != "") {
                kifejez += this.textContent;
                $(".kifejezes")[0].innerHTML = kifejez;
                muvjel = this.textContent;
                muvCount += 1;
            }
            if (muvCount > 1) {
                muvCount = 0;
                clear();
            }
            
        })}
        ID(".").addEventListener("click", function () {
            kifejez += ".";
            $(".kifejezes")[0].innerHTML = kifejez;
        })
        ID("torles").addEventListener("click", clear)
        ID("egyenlo").addEventListener("click", function () {
            muvCount = 0;
            let numbers = kifejez.split(muvjel);
            for (let i = 0; i < numbers.length; i++) {
                numbers[i] = parseFloat(numbers[i]);
            }
            console.log(numbers);
            if (numbers.length == 2) {
                switch (muvjel) {
                    case "+":
                    eredmeny = numbers[0]+numbers[1];
                    $(".kifejezes")[0].innerHTML = eredmeny;    
                        break;
                    case "-":
                    eredmeny = numbers[0]-numbers[1];
                    $(".kifejezes")[0].innerHTML = eredmeny;
                        break;
                    case "*":
                    eredmeny = numbers[0]*numbers[1];
                    $(".kifejezes")[0].innerHTML = eredmeny;
                        break;
                    case "/":
                    eredmeny = numbers[0]/numbers[1];
                    $(".kifejezes")[0].innerHTML = eredmeny;
                        break;
                    default:
                    console.log("Helytelen bevitel")
                    clear();
                        break;
                }
            }
            else {
                clear();
            }
            
        })
    
}


function init() {
    digits();
    operations();
    document.getElementsByTagName("footer")[0].innerHTML = "Paulusz Kristóf";
}