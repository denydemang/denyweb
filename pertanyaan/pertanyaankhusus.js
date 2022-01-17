function pertanyaankhusus(){
    Swal.fire ({
        icon : 'warning',
        title : 'Eitsss tunggu dulu',
        text: 'Sebelum Ke Pertanyaan Tebak-tebakkan Ada Pertanyaan Yang Harus Kamu Jawab Nih',
        confirmButtonText: 'Oke Siap'
    }).then(function(){
        Swal.fire({
            icon: 'question',
            title: 'Dek Amel Sayang Mas Deny Gak Yoo?',
            confirmButtonText: 'Sayang Dong',
            showDenyButton: true,
            denyButtonText: 'Nggak',
        }).then((result)=>{
            if (result.isConfirmed){
                sayang();
            } else if (result.isDenied){
                Swal.fire({
                    icon: 'error',
                    title: 'Yaaah, Kenapa Dek? Apa Salah Mas?',
                    text : 'Kalau Mas Ada Salah, Mas Minta Maaf Ya :(, Bagaimanapun Juga Mas Tetep Sayang Adek',
                    confirmButtonText: 'Sayang Kok Sayang',
                    showDenyButton:true,
                    denyButtonText: 'Bodo Amat'
                }).then((result)=>{
                    if (result.isConfirmed){
                        sessionStorage.setItem('syg','ragudiawal');
                        sayang();
                    } else if (result.isDenied){
                        sessionStorage.setItem('syg','nggaksayang');
                        Swal.fire({
                            icon: 'error',
                            title: 'Maaf Mas Gak Bisa Buat Adek Bahagia :(',
                        })
                    }
                })
            }
        })
    })
};
function sayang(){
    Swal.fire({
        title: 'Seberapa Sayang Coba',
        icon: 'question',
        input: 'range',
        inputLabel: 'Rate 1 - 100',
        inputAttributes: {
            min: 0,
            max: 100,
            step: 10
    },
    inputValue: 50
    }).then((value)=>{
        var nilai = Object.values(value);
        nilai = parseInt(nilai[3]);
        if (nilai == 100){
            Swal.fire({
                title: 'Terima Kasih Dek Amel , Mas Deny Juga Sayang Dek Amel Banyak-Banyak , sebanyak 1 juta kali lipat dari 100 :D',
                icon: 'info'
            }).then(function(){
                ulangtahun()
            })
        }else if (nilai > 80 && nilai < 100) {
            Swal.fire({
                title: 'Terima Kasih Dek Amel , Mas Deny Juga Sayang Dek Amel Banyak-Banyak :D',
                icon: 'info'
            }).then(function(){
                ulangtahun()
            })
        }
        else if (nilai <=80 && nilai > 60){
            Swal.fire ({
                title: 'Terima Kasih Dek Amel',
                text: 'Meskipun Tidak Seratus Persen Sayang Mas Deny , Tapi Mas Deny sayang dek Amel 100% ',
                icon: 'info'
            }).then(function(){
                ulangtahun()
            })
        }
        else if (nilai <=60){
            Swal.fire({
                title: 'Terima Kasih Dek Amel , Mas Deny Juga Sayang Dek Amel Banyak-Banyak',
                text : 'Meskipun Dek Amel Tidak Sepenuhnya Sayang Mas, Karena Mas Tahu Nomor 1 Di Hati Dek Amel Hanya Mas Septian Seorang :D',
                icon: 'info'
            }).then(function(){
                ulangtahun()
            })
        }
        sessionStorage.setItem('nilaisayang',nilai);
        
    })
}
function ulangtahun(){
    Swal.fire({
        title: 'Lanjut Ke-Pertanyaan Selanjutnya'
    }).then(function(){
        Swal.fire({
            icon : 'question',
            title: 'Berapakah Tanggal Ulang Tahun Mas Deny?',
            text: 'Masukkan Tanggal(angka) Dan Nama Bulan Saja, Contoh: 1 Januari',
            input: 'text',
            confirmButtonText: 'Jawab',
            showDenyButton:true,
            denyButtonText: 'Nggak Tahu Lupa',
            inputValidator: (value) => {
                var nilai = value.toLowerCase();
                if (!nilai) {
                    return 'Jawab Dulu Dek Oyyy'
                } else if(!(nilai == '14 november')){
                    return 'Ups Jawaban Kamu Salah, Masa Lupa Sih wkwkwk'
                }
            }
        }).then((result)=>{
            if (result.isConfirmed){
                sessionStorage.setItem('ulangtahun','ingat')
                Swal.fire({
                    icon: 'success',
                    title: 'Hebaat, Jawaban Kamu Benar ',
                    text : ' Yap Betul 14 November , tepatnya aku lahir tgl 14 November 1999, Siapa Tahu Ada Yang Mau Ngado :D'
                }).then(function(){
                    Swal.fire({
                        title : 'Saatnya Masuk Ke Sesi Tebak-Tebakkan Yeeayy'
                    }).then(function(){
                        Swal.fire({
                            title : 'Masuk Ke Pertanyaan Tebak-tebakan Pertama'
                        }).then(function(){
                            pertanyaan1();
                        })
                    })
                })
            }else if (result.isDenied){
                sessionStorage.setItem('ulangtahun','lupa')
                Swal.fire({
                    icon: 'error',
                    title: 'Yahhhh Payah, Masa Lupa Sama Ulang Tahunnya Mas, Dek :(',
                }).then(function(){
                    Swal.fire({
                        icon: 'info',
                        title: 'Ulang Tahun Mas Tgl 14 November Looohh',
                        text: 'Diinget-inget lagi loh jgn sampe lupa :(',
                    }).then(function(){
                        Swal.fire({
                            title : 'Saatnya Masuk Ke Sesi Tebak-Tebakkan Yeeayy'
                        }).then(function(){
                            Swal.fire({
                                title : 'Masuk Ke Pertanyaan Tebak-tebakan Pertama'
                            }).then(function(){
                                pertanyaan1();
                            })
                        })
                    })
                })
            }
        })
    })
}