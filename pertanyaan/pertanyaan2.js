function pertanyaan2(){
    //pertanyaan ke-2
    Swal.fire({
        icon: 'question',
        title: 'Jika ada 1 kg batu dan ada 1 kg kapas, ketika dijatuhkan ke atas kaki, manakah yang lebih sakit?',
        text: 'Coba Dipahami dan dirasakan Betul2 Pertanyaanya :D',
        input: 'text',
        inputLabel: '',
        confirmButtonText: 'Jawab',
        showDenyButton: true,
        denyButtonText: 'Nyerah',
        inputValidator: (value) => {
            if (!value) {
            return 'Dijawab Dulu Kak !';
            } else if (!(value == 'kaki' || value =='Kaki' || value=='KAKI')){
            return 'Jawaban Kamu Salah :D '
            }
        }
    }).then((result)=>{
        if(result.isConfirmed){
            //Berhasil Jawab Pertanyaan Ke-2
            score++
            Swal.fire({
                icon: 'success',
                title: 'Jawaban Kamu Benar :D',
                text : 'Yap Betul Jawabannya Kaki',
                confirmButtonText: 'Lanjut',
            }).then((result)=>{
                if(result.isConfirmed){
                    
                    Swal.fire({
                        title: 'Lanjut Ke Pertanyaan Ke-3'
                    }).then(function(){
                        //Lanjut Ke Pertanyaan Ke -3
                        pertanyaan3();
                    })
                }
            })
        }else if(result.isDenied){
            //Gagal Jawab Pertanyaan Ke-2
            
            Swal.fire({
                title: 'Cie Nyerah nih yee :D'
            }).then(function(){
                Swal.fire({
                    icon: 'info',
                    title: 'Jawabanya Adalah "Kaki"',
                    text: 'Ya Jelas lah antara 1 Kg Kapas Sama 1Kg batu kalo dijatuhkan keatas kaki, yang ada kaki lu yang sakit bambang',
                    confirmButtonText: 'Lanjut',
                }).then((result)=>{
                    if(result.isConfirmed){
                        Swal.fire({
                            title: 'Lanjut Ke Pertanyaan Ke-3'
                        }).then(function(){
                            //Lanjut Ke Pertanyaan Ke -3
                            pertanyaan3();
                        })
                    
                    }
                })
            })
        }
    })

            

}