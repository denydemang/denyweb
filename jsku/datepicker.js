$(function() {
    $('.datetimepicker').keypress(function(event) {
    event.preventDefault();
    return false;
    });
    }); 
    
    $('.datetimepicker').datepicker({
        dateFormat: "DD, dd/mm/yy",
        changeYear: true,
        changeMonth: true,
        yearRange: '1945:2015',
        // defaultDate: '01/01/1999',
        dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
        dayNamesMin: ['Min','Sen','Sel','Rab','Kam','Jum','Sab'],
        monthNamesShort: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
        monthNamesMin: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agust','Sep','Okt','Nov','Des']
    });