function pertanyaan1(){
    //pertanyaan ke-1
    sessionStorage.setItem('sudahMain','true');
    sessionStorage.setItem('udahMain','true') ;
    Swal.fire({
        icon: 'question',
        title: 'Jika ada 10 pejuang Indonesia yang berperang, lalu ada satu orang yang gugur, ada berapa orang yang akan kembali ke markas?',
        text: 'Jawab dengan angka',
        input: 'text',
        inputLabel: '',
        confirmButtonText: 'Jawab',
        showDenyButton: true,
        denyButtonText: 'Nyerah',
        inputValidator: (value) => {
        if (!value){
        return 'Dijawab Dulu Kak!';
        } else if (value !== '1009'){
        return 'Jawaban Kamu Salah :D '
        }
        }
    }).then((result) =>{
        if (result.isConfirmed){
            //Berhasil Jawab Pertanyaan ke-1
            score++
            Swal.fire({
                icon: 'success',
                title: 'Jawaban Kamu Benar :D',
                text : 'Yap Betul Jawabannya 1009, karena mati satu tumbuh seribu.',
                confirmButtonText: 'Lanjut',
            }).then((result)=>{
                if (result.isConfirmed){
                    Swal.fire({
                        title: 'Lanjut Ke Pertanyaan Ke-2 '
                    }).then(function(){
                        //Lanjut Ke Pertanyaan 2
                        pertanyaan2();
                    })
                }
            })
        }else if (result.isDenied){
            //Gagal Jawab Pertanyaan ke-1
            Swal.fire({
                title: 'WKWKWK Nyerah Nih Yeee :V'
            }).then(function(){
                Swal.fire({
                    icon: 'info',
                    title: 'Jawaban nya adalah "1009"',
                    text:  'Mati satu tumbuh seribu, jadi 10-1+1000 = 1009 :D ',
                    confirmButtonText: 'Lanjut',
                }).then((result)=>{
                    if (result.isConfirmed){
                        Swal.fire({
                            title: 'Lanjut Ke Pertanyaan Ke-2 '
                        }).then(function(){
                            //Lanjut Ke Pertanyaan Ke 2
                            pertanyaan2();
                        })
                    }
                })
            })
                
        }
    })
}