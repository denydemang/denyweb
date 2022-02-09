function pertanyaan3(){
    //Pertanyaan Ke-3
        Swal.fire({
            icon: 'question',
            title: 'Kalau saja ada sekolah yang berisi semua jenis hewan, siapa yang sering terlambat?',
            text: '*Clue Jawaban: "Terdiri Dari 2 Kata, Hewannya Agak Menggelikan"',
            input: 'text',
            inputLabel: '',
            confirmButtonText: 'Jawab',
            showDenyButton: true,
            denyButtonText: 'Nyerah',
            inputValidator: (value) => {
            if (!value){ 
            return 'Dijawab Dulu Kak!';
            } else if (!(value =='Kaki Seribu' || value=='kaki seribu' || value=='Kaki seribu')) {
                return 'Jawaban Kamu Salah :D'
            }
        }
    }).then((result)=>{
        if (result.isConfirmed){
            //Berhasil Jawab Pertanyaan Ke-3
            scoretebakan++;
            Swal.fire ({
                icon: 'success',
                title: 'Yap Betul Jawabanya Kaki Seribu',
                text: 'Karena Kaki Seribu kakinya banyak makanya kalo pake sepatu lama :D',
                confirmButtonText:'Lanjut'
            }).then((result)=>{
                if (result.isConfirmed){
                    Swal.fire({
                        title: 'Lanjut Ke Pertanyaan Ke-4'
                    }).then(function(){
                        //Lanjut Ke Pertanyaan Ke -4
                        pertanyaan4();
                    })
                }
            })
        }else if (result.isDenied){
            //Gagal Jawab Pertanyaan Ke -3
        
            Swal.fire ({
                title: 'Cemen Gitu Aja Nyerah :V',
                confirmButtonText: 'Ya Ben',
            }).then(function(){
                Swal.fire({
                    icon: 'info',
                    title: 'Jawabannya Adalah "Kaki Seribu"',
                    text: 'Karena Kakinya Banyak ,jadi kalo pakai sepatu lama, wkwk',
                    confirmButtonText: 'Lanjut'
                }).then((result)=>{
                    if (result.isConfirmed){
                        Swal.fire({
                            title: 'Lanjut Ke Pertanyaan Ke-4'
                        }).then(function(){
                            //Lanjut Ke Pertanyaan Ke -4
                            pertanyaan4();
                        })
                    }
                })
            })
        }
    })
}