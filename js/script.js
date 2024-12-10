const btn_main = document.querySelector('#btn_main')
const btn_item = Array.from(btn_main.children);

const content_main = document.querySelector('#content_main')
const content_item = Array.from(content_main.children);

btn_item.map(item => {

    const show = document.querySelector('.show_default')
    show.click()

    item.addEventListener('click', function(e){
        content_item.map(content => {
            if(content.id == e.target.id){
                content.style.display = 'block'
            }
            else{
                content.style.display = 'none'
            }
        })
        btn_item.map(btn => {
            btn.classList.remove('active')
        })

        e.target.classList.add('active')
    });
    
});



