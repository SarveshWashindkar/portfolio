const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
}

skills = [
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'Flutter Developer',
    'Python Developer',
]

writeAnimation = async ()=>{
    let text = document.querySelector('.highlited-text');

    for (let i = 0; i < skills.length; i++) {
        await new Promise((resolve,reject)=>{
            let j = 0
            let interval = setInterval(() => {
                if(j < skills[i].length){
                    text.insertAdjacentText('beforeend', skills[i][j])
                    j++;
                }else{
                    clearInterval(interval);
                    
                    setTimeout(() => {
                        interval = setInterval(() => {
                            if(text.innerText){
                                text.innerText = text.innerText.slice(0,-1);
                            }else{
                                clearInterval(interval);
                                resolve()
                            }
                        }, 50);
                    }, 1200);
                }
            }, 80);
        });
        
    }

    writeAnimation()
}

setTimeout(() => {
    writeAnimation()
    
}, 3000);
