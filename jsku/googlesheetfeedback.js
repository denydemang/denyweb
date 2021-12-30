

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzo8v58JAmoH5G9a1cdwnXwF_UTxZFpECM1K1MudB9VkFLNALJQ6-zRs26mA6mUqQcn/exec'
    const form = document.forms['feedback']

    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => Swal.fire('Feedback Berhasil Dikirim ! Suwun Lur :)','','success').then(function(){sessionStorage.clear(); location.reload();}))
        .catch(error => Swal.fire('Feedback Gagal Dikirim !' +error.message,'','warning').then(function(){sessionStorage.clear(); location.reload();}))
    })