const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('main > section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            link.classList.add('active'); 
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    }, 1000);
});