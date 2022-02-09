function pertanyaanislami5(){
    Swal.fire({
        title: 'Masuk Ke Pertanyaan Ke-5'
    }).then(function(){
        Swal.fire({
            icon: 'question',
            title: "وَلَا تَقْرَبُوا۟ ٱلزِّنَىٰٓ ۖ إِنَّهُۥ كَانَ فَٰحِشَةً وَسَآءَ سَبِيلً",
            text: 'Penggalan Ayat Tersebut Merupakan dari QS. Al-Isra Ayat Berapa? (Jawab Dengan Angka)',
            input: 'text',
            inputValidator: (value)=>{
                var ayat = parseInt(value);
                if (!ayat){
                    return "Silakan Dijawab Dulu!"
                } else if(!(ayat == 32)){
                    return "Ups, Jawaban Kamu Salah"
                }
            },
            confirmButtonText: 'Jawab',
            showDenyButton: true,
            denyButtonText: 'Nggak Tahu Nyerah',
        }).then((result)=>{
            if (result.isConfirmed){
                scoreislami++;
                Swal.fire({
                    icon: 'success',
                    title: 'Yaps Betul, Qs. Al-Isra Ayat 32',
                    text: 'Artinya: "Dan janganlah kamu mendekati zina, sesungguhnya zina adalah suatu perbuatan yang keji. Dan suatu jalan yang buruk."',
                }).then(function(){
                    if (scoreislami == 5 ){
                        Swal.fire({
                            icon: 'success',
                            title: 'Hebat Kamu Berhasil Menjawab Semua Pertanyaan',
                            text: 'Teruslah Istiqomah Menuju Kebaikan, Walaupun Istiqomah itu berat. Ya iyalah yang ringan namanya Istirahat :v'
                        }).then(function(){
                            Swal.fire({
                                icon: 'info',
                                title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                                confirmButtonText:'Bye',
                            }).then(function(){
                                sessionStorage.setItem('scoreislami',scoreislami);
                                location.reload();
                            })
                        })
                    
                    }else if ( scoreislami > 2 && scoreislami < 5){
                        Swal.fire({
                            icon : 'info',
                            title : 'Not Bad , Kamu Berhasil Menjawab '+scoreislami+' dari '+totalpertanyaan+' Pertanyaan',
                            text: 'Teruslah Istiqomah Menuju Kebaikan, Walaupun Istiqomah itu berat. Ya iyalah yang ringan namanya Istirahat :v'
                        }).then(function(){
                            Swal.fire({
                                icon: 'info',
                                title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                                confirmButtonText:'Bye',
                            }).then(function(){
                                sessionStorage.setItem('scoreislami',scoreislami);
                                location.reload();
                            })
                        })
                    } else if (scoreislami > 0 && scoreislami <= 2){
                        Swal.fire({
                            icon: 'info',
                            title: 'Payah, Kamu Cuman Berhasil Menjawab '+scoreislami+' dari '+totalpertanyaan+' Pertanyaan',
                            text: 'Teruslah Istiqomah Menuju Kebaikan, Walaupun Istiqomah itu berat. Ya iyalah yang ringan namanya Istirahat :v'
                        }).then(function(){
                            Swal.fire({
                                icon: 'info',
                                title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                                confirmButtonText:'Bye',
                            }).then(function(){
                                sessionStorage.setItem('scoreislami',scoreislami);
                                location.reload()
                            })
                        })
                    } else {
                        Swal.fire({
                            icon: 'question',
                            title: 'Apakah Anda Memang Seorang Muslim?',
                            text: 'Keislaman Anda Patut Dipertanyakan, Tidak Ada Satupun Pertanyaan Yang Terjawab'
                        }).then(function(){
                            Swal.fire({
                                icon: 'info',
                                title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                                confirmButtonText:'Bye',
                            }).then(function(){
                                sessionStorage.setItem('scoreislami',scoreislami);
                                location.reload();
                            })
                        })
                    }
                })
            }else if(result.isDenied){
                    Swal.fire({
                        icon: 'info',
                        title: 'Jawabannya Adalah Qs. Al-Isra Ayat 32',
                        text: 'Artinya: "Dan janganlah kamu mendekati zina, sesungguhnya zina adalah suatu perbuatan yang keji. Dan suatu jalan yang buruk."',
                    }).then(function(){
                        if (scoreislami == 5 ){
                            Swal.fire({
                                icon: 'success',
                                title: 'Hebat Kamu Berhasil Menjawab Semua Pertanyaan',
                                text: 'Teruslah Istiqomah Menuju Kebaikan, Walaupun Istiqomah itu berat. Ya iyalah yang ringan namanya Istirahat :v'
                            }).then(function(){
                                Swal.fire({
                                    icon: 'info',
                                    title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                                    confirmButtonText:'Bye',
                                }).then(function(){
                                    sessionStorage.setItem('scoreislami',scoreislami);
                                    location.reload();
                                })
                            })
                        
                        }else if ( scoreislami > 2 && scoreislami < 5){
                            Swal.fire({
                                icon : 'info',
                                title : 'Not Bad , Kamu Berhasil Menjawab '+scoreislami+' dari '+totalpertanyaan+' Pertanyaan',
                                text: 'Teruslah Istiqomah Menuju Kebaikan, Walaupun Istiqomah itu berat. Ya iyalah yang ringan namanya Istirahat :v'
                            }).then(function(){
                                Swal.fire({
                                    icon: 'info',
                                    title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                                    confirmButtonText:'Bye',
                                }).then(function(){
                                    sessionStorage.setItem('scoreislami',scoreislami);
                                    location.reload();
                                })
                            })
                        } else if (scoreislami > 0 && scoreislami <= 2){
                            Swal.fire({
                                icon: 'info',
                                title: 'Payah, Kamu Cuman Berhasil Menjawab '+scoreislami+' dari '+totalpertanyaan+' Pertanyaan',
                                text: 'Teruslah Istiqomah Menuju Kebaikan, Walaupun Istiqomah itu berat. Ya iyalah yang ringan namanya Istirahat :v'
                            }).then(function(){
                                Swal.fire({
                                    icon: 'info',
                                    title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                                    confirmButtonText:'Bye',
                                }).then(function(){
                                    sessionStorage.setItem('scoreislami',scoreislami);
                                    location.reload()
                                })
                            })
                        } else {
                            Swal.fire({
                                icon: 'question',
                                title: 'Apakah Anda Memang Seorang Muslim?',
                                text: 'Keislaman Anda Patut Dipertanyakan, Tidak Ada Satupun Pertanyaan Yang Terjawab'
                            }).then(function(){
                                Swal.fire({
                                    icon: 'info',
                                    title: 'Terima Kasih Sudah Meluangkan Waktunya, Have A Great Day :)',
                                    confirmButtonText:'Bye',
                                }).then(function(){
                                    sessionStorage.setItem('scoreislami',scoreislami);
                                    location.reload();
                                })
                            })
                        }
                    })
                
            }
        })
    })
}