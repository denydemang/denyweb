var kesempatan = 3;
let angkabenar = Math.floor((Math.random()*10)+1)
$(document).ready(function(){
    $('.tombol1').hide();
    $('.kesempatan span').html(kesempatan);
    play('fadeout');
    $.keyframe.define([{
        name: 'dmk',
        '0%': {
            'transform': 'translate(1px, 1px) rotate(0deg)',
            'color': 'red',

        },
        '10%': {
            'transform': 'translate(-1px, -2px) rotate(-1deg) scale(1.1,1.1)',
            'color': 'red',
            // 'font-size': '3rem',
        },
        '20%': {
            'transform': 'translate(-3px, 0px) rotate(1deg) scale(1.1,1.1)',
            'color': 'red',
            // 'font-size': '3rem',
        },
        '30%': {
            'transform': 'translate(3px, 2px) rotate(0deg) scale(1.1,1.1)',
            'color': 'red',
            // 'font-size': '3rem',
        },
        '40%': {
            'transform': 'translate(1px, -1px) rotate(1deg) scale(1.1,1.1)',
            'color': 'red',
            // 'font-size': '3rem',
        },
        '50%': {
            'transform': 'translate(-1px, 2px) rotate(-1deg) scale(1.1,1.1)',
            'color': 'red',
            // 'font-size': '3rem',
        },
        '60%': {
            'transform': 'translate(-3px, 1px) rotate(0deg) ',
            'color': 'red',
            // 'font-size': '3rem',
        },
        '70%': {
            'transform': 'translate(3px, 1px) rotate(-1deg) ',
            'color': 'red',
            // 'font-size': '3rem',
        },
        '80%': {
            'transform': 'translate(-1px, -1px) rotate(1deg)',
            'color': 'red',
            // 'font-size': '3rem',
        },
        '90%': {
            'transform': 'translate(1px, 2px) rotate(0deg)',
            'color': 'red',
            // 'font-size': '3rem',
        },
        '100%': {
            'transform': 'translate(1px, 1px) rotate(0deg)',
            // 'color' : 'green',
            // 'font-size': '3rem',
        },
    }, {
        name: 'fadeout',
        '0%': {
            'transform': 'scale(0.8,0.8)',
        },
        '50%': {
            'transform': 'scale(1.3,1.3)',
        },
        '100%': {
            'transform': 'scale(0.8,0.8)',
        },
    }])
    
    function pause() {
        // freeze keyframe animation and kill callback
        $('.huruf').pauseKeyframe();
    }
    function resume() {
        // resume keyframe animation
        $('.huruf').resumeKeyframe();
    }

    function play(animation) {
        $('.huruf').resetKeyframe(function () {
            switch (animation) {
                case 'dmk':
                    $('.huruf').playKeyframe({
                        name: 'dmk',
                        duration: '0.5s',
                        // timingFunction: 'ease',
                        iterationCount: '1',
                        // direction: 'normal',
                        // fillMode: 'forwards',
                    })
                    break;
                case 'fadeout':
                    $('.huruf').playKeyframe({
                        name: 'fadeout',
                        duration: '0.8s',
                        timingFunction: 'linear',
                        iterationCount: 'infinite',
                        // direction: 'normal',
                        // fillMode: 'forwards',
                    })
            }
        })
    }
    $('.tombol1').on('click',function(){
        location.reload();
        
    })
    $('.tombol').on('click', function () {
        let input = parseInt($('#input').val());
        // console.log('angkabenar'+angkabenar);
        // console.log('input'+input);
        if (input > 10 || input === 0){
            pause();
            Swal.fire({
                icon: 'warning',
                title: 'Masukkan Angka 1-10'
            }).then(function(){
                resume();
            })
        }
        else if (!input ){
            pause();
            Swal.fire({
                icon: 'warning',
                title : 'Ooopps',
                text: 'Jawaban Tidak Boleh Kosong',
            }).then(function(){
                resume();
            })
            
        }
    
        else if (input === angkabenar){
            pause();
            Swal.fire({
                icon: 'success',
                title : 'Jawaban Kamu Benar',
                text: 'Jawabannya adalah '+angkabenar,
            }).then(function(){
                sessionStorage.setItem('udahMain','true');
                sessionStorage.setItem('SudahMainTebakAngka','true');
                $('#input').prop('disabled',true);
                $('.tombol').hide();
                $('.tombol1').show();
                $('.huruf').html(angkabenar);
                $('.huruf').css({"color": "blue", "font-size": "70px", "font-weight":"bolder"})
                resume();
            })
        }
        else if(input > angkabenar){
                kesempatan--
                
                $('.kesempatan span').html(kesempatan);
                if (kesempatan === 0){
                    pause();
                    Swal.fire ({
                        icon: 'warning',
                        title: 'Opppss',
                        text: 'Kesempatan Kamu Sudah Habis'
                    }).then(function(){
                        Swal.fire({
                            icon: 'info',
                            title: 'Jawaban Yang Benar Adalah '+angkabenar,
                            customClass: 'swal-wide',
                        }).then(function(){
                            sessionStorage.setItem('udahMain','true');
                            sessionStorage.setItem('SudahMainTebakAngka','true');
                            resume();
                            $('#input').prop('disabled',true);
                            $('.tombol').hide();
                            $('.tombol1').show();
                            $('.huruf').html(angkabenar);
                            $('.huruf').css({"color": "blue", "font-size": "70px", "font-weight":"bolder"})
                        })
                
                        
                    })
                    return false;
                }
                play('dmk');
                $('.keterangan').html('Jawaban Kamu Salah,tebakanmu melampaui jawaban yang benar<span>&#128513</span>');
                $('.keterangan').css('display','inline-block');
                setTimeout(function () {
                    $('.keterangan').css('display','none');
                }, 3000)
                
                setTimeout(function () {
                play('fadeout');
                }, 400)
                
            }
        else {
            kesempatan--
            
            $('.kesempatan span').html(kesempatan);
            if (kesempatan ===0){
                pause();
                Swal.fire ({
                    icon: 'warning',
                    title: 'Opppss',
                    text: 'Kesempatan Kamu Sudah Habis',

                }).then(function(){
                    Swal.fire({
                        icon: 'info',
                        title: 'Jawaban Yang Benar Adalah '+angkabenar,
                        customClass: 'swal-wide',
                    }).then(function(){
                        sessionStorage.setItem('udahMain','true');
                        sessionStorage.setItem('SudahMainTebakAngka','true');
                        resume();
                        // $('.tombol').prop('disabled',true);
                        $('#input').prop('disabled',true);
                        $('.tombol').hide();
                        $('.tombol1').show();
                        $('.huruf').html(angkabenar);
                        $('.huruf').css({"color": "blue", "font-size": "70px", "font-weight":"bolder"})
                    })
                    

                })
                return false;
                
            }
            play('dmk');
            $('.keterangan').html('Jawaban Kamu Salah, Tebakanmu Dibawah Dari Jawaban Yang Benar &#128513');
            $('.keterangan').css('display','inline-block');
            setTimeout(function () {
                $('.keterangan').css('display','none');
               }, 3000)
                 setTimeout(function () {
                 play('fadeout');
                }, 400)
                
        }
        
    })
    
})