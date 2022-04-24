
window.onscroll = function() {
    const navOne = document.getElementById('myFirstNav');
    const mySecondNav = document.getElementById('mySecondNav');
    if(document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280){
        // navOne.classList.add('diseappea
        mySecondNav.classList.remove('d-none');
        navOne.classList.add('d-none');
    }else {
        mySecondNav.classList.add('d-none');
        navOne.classList.remove('d-none');
        navOne.classList.add('d-block');
    }
};