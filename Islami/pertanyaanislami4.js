function pertanyaanislami4(){
    Swal.fire({
        title: 'Masuk Ke Pertanyaan Ke-4'
    }).then(function(){
        Swal.fire({
            icon: 'question',
            title: "Di Mana Nabi Muhammad SAW menerima wahyu dari Allah pertama kali?",
            text: 'Pilih Jawaban',
            input: 'radio',
            inputOptions: {
                1 : 'Gua Hira',
                2 : 'Gua Tsur',
                3 : 'Padang Arafah',
                4 : 'Masjidil Haram',
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
            if (jwbn == 1){
                scoreislami++;
                Swal.fire({
                    icon: 'success',
                    title: 'Jawaban Kamu Benar',
                    text: "Di Gua Hira tersebut Nabi Muhammad SAW menerima wahyu pertama kali dari Allah SWT berupa Alquran yang disampaikan melalui Malaikat Jibril berupa Surat Al Alaq. Gua Hira, terletak di Gunung Jabal Nur. Letak Jabal Nur berada di kawasan Hejaz berjarak sekitar 7 kilometer dari Masjidil Haram "
                }).then(function(){
                    pertanyaanislami5();
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Jawaban Kamu Salah',
                    text : 'Jawaban Yang Benar Adalah "Gua Hira", Di Gua Hira tersebut Nabi Muhammad SAW menerima wahyu pertama kali dari Allah SWT berupa Alquran yang disampaikan melalui Malaikat Jibril berupa Surat Al Alaq'
                }).then(function(){
                    pertanyaanislami5();
                })
            }
        })
    })
}