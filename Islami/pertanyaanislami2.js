function pertanyaanislami2(){
    Swal.fire({
        title: 'Masuk Ke Pertanyaan Kedua'
    }).then(function(){
        Swal.fire({
            icon: 'question',
            title: 'Apa Hukum pelaksanaan Aqiqah?',
            text: 'Pilih Jawaban Mu',
            input: 'radio',
            inputOptions: {
                1 : 'Wajib',
                2 : 'Mubah',
                3 : 'Makruh',
                4 : 'Sunnah',
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
            if (jwbn == 4){
                scoreislami++;
                Swal.fire({
                    icon: 'success',
                    title: 'Jawaban Kamu Benar',
                    text: 'Berdasarkan tafsir sebagian besar ulama yang dinilai paling kuat, aqiqah hukumnya adalah sunnah muakad. Bila mampu untuk melakukannya, orangtua sangat dianjurkan untuk melakukan aqiqah anaknya saat masih bayi. Namun, bagi yang tidak mampu untuk melaksanakannya pun aqiqah boleh ditinggalkan tanpa berdosa'
                }).then(function(){
                    pertanyaanislami3();
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Jawaban Kamu Salah',
                    text : 'Hukum Aqiqah Adalah Sunah Muakad, Bila mampu untuk melakukannya, orangtua sangat dianjurkan untuk melakukan aqiqah anaknya saat masih bayi. Namun, bagi yang tidak mampu untuk melaksanakannya pun aqiqah boleh ditinggalkan tanpa berdosa'
                }).then(function(){
                    pertanyaanislami3();
                })
            }
        })
    })
}