function pertanyaanislami1(){
    sessionStorage.setItem('udahMain','true');
    sessionStorage.setItem('udahMainIslami','true');
    Swal.fire({
        title: 'Masuk Ke Pertanyaan Pertama'
    }).then(function(){
        Swal.fire({
            icon: 'question',
            title: 'Hari Dimana Amal Baik Dan Jahat Dari Setiap Manusia Diperhitungkan Dan Ditimbang Dinamakan?',
            text: 'Pilih Jawaban Mu',
            input: 'radio',
            inputOptions: {
                1 : 'Yaumul Mizan',
                2 : 'Yaumul Hisab',
                3 : 'Yaumul Baas',
                4 : 'Yaumul Kiamat',
            },
            inputValidator: (value)=>{
                if (!value){
                    return "Silakan Dijawab Dulu!"
                }
            },
            confirmButtonText: 'Jawab'
        }).then((value)=>{
            var jwbn = Object.values(value);
            jwbn = parseInt(jwbn[3]);
            if (jwbn == 2){
                scoreislami++;
                Swal.fire({
                    icon: 'success',
                    title: 'Jawaban Kamu Benar',
                    text: 'Yaumul Hisab adalah hari di mana semua amal manusia akan diperhitungkan. Sekecil apapun perbuatan manusia, baik maupun buruk akan diperhitungkan oleh Allah SWT dan diberi balasan yang setimpal.'
                }).then(function(){
                    pertanyaanislami2();
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Jawaban Kamu Salah',
                    text : 'Jawaban Yang Benar Adalah "Yaumul Hisab"'
                }).then(function(){
                    pertanyaanislami2();
                })
            }
        })
    })
}