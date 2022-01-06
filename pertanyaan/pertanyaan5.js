function pertanyaan5(){
        Swal.fire({
            icon: 'question',
            title: ' Ojek apa yang nggak bisa ngebut?',
            text: 'Aku Kasih Sedikit Bocoran Deh ,Jawaban terdiri Dari 2 Kata',
            input: 'text',
            inputLabel: '',
            confirmButtonText: 'Jawab',
            showDenyButton: true,
            denyButtonText: 'Nyerah',
            inputValidator: (value) => {
            if (!value){ 
            return 'Dijawab Dulu Kak!';
            } else if (!(value =='Ojek Payung' || value=='ojek payung' || value=='Ojek payung' ||value=='OJEK PAYUNG')) {
                return 'Jawaban Kamu Salah :D'
            }
        }
    }).then((result)=>{
        if (result.isConfirmed){
            //Berhasil Jawab Pertanyaan Ke -5
            score++
            console.log(score);
            Swal.fire({
                icon: 'success',
                title: 'Yap Betul Ojek Payung'
            }).then(function(){
                if (score == 5 ){
                    Swal.fire({
                        icon: 'success',
                        title: 'Hebat Kamu Berhasil Menjawab Semua Pertanyaan'
                    }).then(function(){
                        Swal.fire({
                            icon: 'info',
                            title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                            confirmButtonText:'Bye',
                        }).then(function(){
                            sessionStorage.setItem('score',score);
                            location.reload();
                        })
                    })
                
                }else if ( score > 2 && score < 5){
                    Swal.fire({
                        icon : 'info',
                        title : 'Not Bad , Kamu Berhasil Menjawab '+score+' dari '+totalpertanyaan+' Pertanyaan',
                    }).then(function(){
                        Swal.fire({
                            icon: 'info',
                            title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                            confirmButtonText:'Bye',
                        }).then(function(){
                            sessionStorage.setItem('score',score);
                            location.reload();
                        })
                    })
                } else if (score > 0 && score <= 2){
                    Swal.fire({
                        icon: 'info',
                        title: 'Payah, Kamu Cuman Berhasil Menjawab '+score+' dari '+totalpertanyaan+' Pertanyaan',
                    }).then(function(){
                        Swal.fire({
                            icon: 'info',
                            title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                            confirmButtonText:'Bye',
                        }).then(function(){
                            sessionStorage.setItem('score',score);
                            location.reload()
                        })
                    })
                } else {
                    Swal.fire({
                        icon: 'question',
                        title: 'Apakah Pertanyaanya Terlalu Sulit Sehingga Tidak Ada Satupun Yang Terjawab?',
                        text: 'Coba Lagi Lain Waktu Ya Wkwk :D'
                    }).then(function(){
                        Swal.fire({
                            icon: 'info',
                            title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                            confirmButtonText:'Bye',
                        }).then(function(){
                            sessionStorage.setItem('score',score);
                            location.reload();
                        })
                    })
                }

            })
        } else if (result.isDenied){
            //Gagal Jawab Pertanyaan Ke -5
            Swal.fire({
                title : 'Yey Akhirnya Nyerah Juga',
                text: 'Wkwkwkwk'
            }).then(function(){
                Swal.fire({
                    icon: 'info',
                    title: 'Jawabannya "Ojek Payung"',
                    text: 'Bwahahahaha :D'
                    }).then(function(){
                        if (score == 5 ){
                            Swal.fire({
                                icon: 'success',
                                title: 'Hebat Kamu Berhasil Menjawab Semua Pertanyaan'
                            }).then(function(){
                                Swal.fire({
                                    icon: 'info',
                                    title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                                    confirmButtonText:'Bye',
                                }).then(function(){
                                    sessionStorage.setItem('score',score);
                                    location.reload();
                                })
                            })
                        }else if ( score > 2 && score < 5){
                            Swal.fire({
                                icon : 'info',
                                title : 'Not Bad , Kamu Berhasil Menjawab '+score+' dari '+totalpertanyaan+' Pertanyaan',
                            }).then(function(){
                                Swal.fire({
                                    icon: 'info',
                                    title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                                    confirmButtonText:'Bye',
                                }).then(function(){
                                    sessionStorage.setItem('score',score);
                                    location.reload();
                                })
                            })
                        } else if (score > 0 && score <= 2){
                            Swal.fire({
                                icon: 'info',
                                title: 'Payah, Kamu Cuman Berhasil Menjawab '+score+' dari '+totalpertanyaan+' Pertanyaan',
                            }).then(function(){
                                Swal.fire({
                                    icon: 'info',
                                    title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                                    confirmButtonText:'Bye',
                                }).then(function(){
                                    sessionStorage.setItem('score',score);
                                    location.reload();
                                })
                            })
                        } else {
                            Swal.fire({
                                icon: 'question',
                                title: 'Apakah Pertanyaanya Terlalu Sulit Sehingga Tidak Ada Satupun Yang Terjawab?',
                                text: 'Coba Lagi Lain Waktu Ya Wkwk :D'
                            }).then(function(){
                                Swal.fire({
                                    icon: 'info',
                                    title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                                    confirmButtonText:'Bye',
                                }).then(function(){
                                    sessionStorage.setItem('score',score);
                                    location.reload();
                                })
                            })
                        } 
                    })
            })
        }
    })
    
}