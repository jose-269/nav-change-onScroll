
window.onscroll = () => {
    const navOne = document.getElementById('myFirstNav');
    const mySecondNav = document.getElementById('mySecondNav');
    if(document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280){
        navOne.classList.add('d-none');
        mySecondNav.classList.remove('custom-nav-hide');
        mySecondNav.classList.add('custom-nav-show');
    }else {
        navOne.classList.remove('d-none');
        navOne.classList.add('d-block');
        mySecondNav.classList.add('custom-nav-hide');
        mySecondNav.classList.remove('custom-nav-show');
    }
};