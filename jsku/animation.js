$(document).ready(function () {
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
    // $('.tombol').on('click', function () {
    //     play('dmk');
    //     setTimeout(function () {
    //         play('fadeout');
    //     }, 800)

    // })

})