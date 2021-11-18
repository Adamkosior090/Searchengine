const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngin = e => {
    const text = e.target.value.toLowerCase(); /// przechwytywanie treści wpisanej do input
    li.forEach(el => {
        const task = el.textContent;
        if(task.toLowerCase().indexOf(text) !== -1){
            el.style.display ="block";
        }else{
            el.style.display ="none";
        }
    })
}
search.addEventListener('keyup', searchEngin)