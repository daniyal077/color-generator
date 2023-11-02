const btn = document.getElementById('btn');
const demo=document.querySelector('.demo')

const getColor = () => {
    let randomNumber = Math.floor(Math.random()*16777215);
    let randomCode = '#' + randomNumber.toString(16)
    document.body.style.backgroundColor=randomCode
    demo.innerText=randomCode
    console.log(randomNumber,randomCode);
}

btn.addEventListener('click', getColor);

getColor()