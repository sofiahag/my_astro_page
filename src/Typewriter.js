let i = 0;
let text = "A CRO Analyst with a background in Life Science";
let speed = 100;

function typeWriter() {
    if(i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
