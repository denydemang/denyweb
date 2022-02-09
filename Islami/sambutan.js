function sambutanpertanyaanislami(){
    Swal.fire({
        icon: 'success',
        title: 'Hi '+nama,
        text: 'Selamat Datang Di Kuis Islami'
    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire({
                icon: 'question',
                title: 'Ada 5 Pertanyaan Yang Harus Kamu Jawab',
                text: 'Pertanyaan-pertanyaan Tersebut Berkaitan Dengan Agama Islam',
                showDenyButton: true,
                denyButtonText: 'Nggak Dulu Deh',
                confirmButtonText: 'Siap',
            }).then((result)=>{
                if(result.isConfirmed){
                    pertanyaanislami1();
                }
            })
        }
    })
}