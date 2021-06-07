let openSidebarButton = document.getElementById('open-sidebar');
openSidebarButton.addEventListener('click', openCloseSidebarAction);

let closeSidebarButton = document.getElementById('close-sidebar');
closeSidebarButton.addEventListener('click', openCloseSidebarAction);

let sideBarData = document.getElementById('sidebar');

let mainData = document.getElementById('main');

function openCloseSidebarAction() {
    sideBarData.classList.toggle('open-sidebar');
    mainData.classList.toggle('open-sidebar-main');
}
