// $('.keluar').click(function(){
//     sessionStorage.removeItem('login');
//     sessionStorage.removeItem('disabledTebakan');
//     sessionStorage.removeItem('disabledTebakAngka');
//     sessionStorage.removeItem('disabledWeton');
//     sessionStorage.removeItem('lastname');
//     if (!(sessionStorage.getItem('udahMain'))){
//         sessionStorage.removeItem('firstname');
//         sessionStorage.removeItem('lastname');
//     }
//     document.location.href="index.html";
// })
const scriptURL = 'https://script.google.com/macros/s/AKfycbzo8v58JAmoH5G9a1cdwnXwF_UTxZFpECM1K1MudB9VkFLNALJQ6-zRs26mA6mUqQcn/exec'
const form = document.forms['permainan']

    form.addEventListener('submit', e => {
    e.preventDefault()
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('disabledTebakan');
    sessionStorage.removeItem('disabledTebakAngka');
    sessionStorage.removeItem('disabledWeton');
    sessionStorage.removeItem('lastname');
    if (!(sessionStorage.getItem('udahMain'))){
        sessionStorage.removeItem('firstname');
        sessionStorage.removeItem('lastname');
        }
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('success') )
        .catch(error => Swal.fire('Feedback Gagal Dikirim !' +error.message,'','warning').then(function(){sessionStorage.clear(); location.reload();}))
        Swal.fire ({
            title: 'Thank You',
            timer: 1500
        })
        setTimeout(function(){
            document.location.href="index.html";  
        },1500)
        
    })