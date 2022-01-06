$('.keluar').click(function(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('disabledTebakan');
    sessionStorage.removeItem('disabledTebakAngka');
    sessionStorage.removeItem('disabledWeton');
    sessionStorage.removeItem('lastname');
    if (!(sessionStorage.getItem('udahMain'))){
        sessionStorage.removeItem('firstname');
        sessionStorage.removeItem('lastname');
    }
    document.location.href="index.html";
})