const navLinks = document.getElementsByClassName('nav-link');
const sideBar = document.getElementById('sidebar');
const content = document.getElementById('content');

function initial() {
    if (sideBar.className == 'sidebar-initial' && window.matchMedia('(min-width: 576px)').matches) {
        sideBar.className = 'sidebar';
        sideBar.style.zIndex = '1';
    }
    else if (sideBar.className == 'sidebar-initial' || sideBar.className == 'sidebar' && window.matchMedia('(max-width: 576px)').matches) {
        toggleSidebarMobile();
    }
}

for (var i = 0; i < navLinks.length; i++)
{
    navLinks[i].addEventListener('click', initial);
}

/* SIDEBAR TOGGLE */
const sideBarToggle = document.getElementById('sidebar-toggle');
const sideBarToggleMobile = document.getElementById('sidebar-toggle-m');

function toggleSidebar() {
    if (content.classList == 'content') {
        sideBarToggle.firstElementChild.classList = 'fas fa-angle-right';
        content.classList = 'content-f';
    }
    else {
        sideBarToggle.firstElementChild.classList = 'fas fa-angle-left';
        content.classList = 'content';
        content.style.zIndex = '100';
    }
}


function toggleSidebarMobile() {
    if (sideBar.classList == 'sidebar' || sideBar.classList == 'sidebar-initial') {
        sideBarToggleMobile.firstElementChild.classList = 'fas fa-angle-right';
        sideBar.classList = 'sidebar-m';
    }
    else {
        sideBarToggleMobile.firstElementChild.classList = 'fas fa-angle-left';
        sideBar.classList = 'sidebar';
    }
}

sideBarToggle.addEventListener('click', toggleSidebar);
sideBarToggleMobile.addEventListener('click', toggleSidebarMobile);