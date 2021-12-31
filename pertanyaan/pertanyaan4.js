function pertanyaan4(){
        Swal.fire({
            icon: 'question',
            title: ' Siapa Gubernur yang suka nyanyi?',
            text: 'Tulis Jawaban Kamu di bawah (Clue Terdiri Dari 2 Kata)',
            input: 'text',
            inputLabel: '',
            confirmButtonText: 'Jawab',
            showDenyButton: true,
            denyButtonText: 'Nyerah',
            inputValidator: (value) => {
            if (!value){ 
            return 'Dijawab Dulu Kak!';
            } else if (!(value =='Biduan Kamil' || value=='biduan kamil' || value=='Biduan kamil' ||value=='BIDUAN KAMIL')) {
                return 'Jawaban Kamu Salah :D'
            }
        }
    }).then((result)=>{
        if (result.isConfirmed){
            //Berhasil Jawab Pertanyaan Ke-4
            score++
            Swal.fire ({
                icon: 'success',
                title: 'Betul Sekali "Biduan Kamil" :D',
                confirmButtonText:'Lanjut'
            }).then((result)=>{
                if (result.isConfirmed){
                    Swal.fire({
                        title: 'Lanjut ke-Pertanyaan Terakhir',
                        text:'Yang Terakhir ini Relatif Gampang Kok',
                    }).then(function(){
                        //Lanjut Ke Pertanyaan Ke -5
                        pertanyaan5();
                    })
                }
            })
                
        } else if (result.isDenied){
            //Gagal Jawab Pertanyaan Ke- 4
            
            Swal.fire({
                icon: 'question',
                title: 'Sudah Frustasikah Anda? wkwk'
            }).then(function(){
                Swal.fire({
                    icon: 'info',
                    title: 'Jawabannya Adalah "Biduan Kamil" :D',      
                    confirmButtonText: 'Lanjut'
                }).then((result)=>{
                    if (result.isConfirmed){
                        Swal.fire({
                            title: 'Lanjut ke-Pertanyaan Terakhir',
                            text:'Yang Terakhir ini Relatif Gampang Kok',
                        }).then(function(){
                            //Lanjut Ke Pertanyaan Ke -5
                            pertanyaan5();
                        })
                    }
                })
            })
                
        }
    })
}