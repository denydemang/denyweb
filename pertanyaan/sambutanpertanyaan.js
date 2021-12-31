function sambutanpertanyaan(){
    Swal.fire({
        icon: 'success',
        title: 'Hai '  +nama,
        text: 'Selamat Datang Ke Game Tebak Tebakan'
    }).then(function(){
        Swal.fire({
            icon: 'warning',
            title: 'Ada 5 Pertanyaan Yang Harus Kamu Jawab', 
            confirmButtonText: 'Siap',
            showDenyButton: true,
            denyButtonText : 'Nggak Dulu Deh'
        }).then((result)=>{
            if (result.isConfirmed){
                Swal.fire({
                    title: 'Masuk ke Pertanyaan Pertama'
                }).then(function(){
                    // Masuk Ke Pertanyaan Pertama
                    sessionStorage.setItem('udahMain','true');
                    pertanyaan1();
                })
            } else if (result.isDenied){
                Swal.fire({
                    title:"Yaahh Yaudahhh deh Bye"
                })
            }
        })
    })
}