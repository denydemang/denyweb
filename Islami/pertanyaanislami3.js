function pertanyaanislami3(){
    Swal.fire({
        title: 'Masuk Ke Pertanyaan Ketiga'
    }).then(function(){
        Swal.fire({
            icon: 'question',
            title: "Shalat Sunnah Rawatib Ba'diyah Adalah Solat Yang Dilakukan Pada Saat...",
            text: 'Pilih Jawaban Mu',
            input: 'radio',
            inputOptions: {
                1 : 'Mengawali Sholat Fardhu',
                2 : 'Sesudah Sholat Fardhu',
                3 : 'Pada Dini Hari',
                4 : 'Melakukan Kesalahan Sholat',
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
                    text: "Sholat Rawatib Ba'diyah Adalah Sholat Sunah Yang Dilakukan Setelah Melaksanakan Sholat Fardhu,Adapun waktu pelaksanannya yaitu Dua rakaat sesudah sholat dzuhur, Dua rakaat sesudah sholat magrib, Dan Dua rakaat sesudah isya. "
                }).then(function(){
                    pertanyaanislami4();
                })
            } else if (jwbn == 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'Jawaban Kamu Salah',
                    text : 'Jawaban Yang Benar Adalah Sesudah Sholat Fardhu , Sedangkan Sholat Sunnah Yang Dilakukan Pada Saat Mengawali Sholat Fardhu dinamakan Sholat Sunnah Rawatib Qobliyah.'
                }).then(function(){
                    pertanyaanislami4();
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Jawaban Kamu Salah',
                    text : 'Jawaban Yang Benar Adalah Sesudah Sholat Fardhu'
                }).then(function(){
                    pertanyaanislami4();
                })
            }
        })
    })
}