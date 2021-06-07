"use strict";

var openSidebarButton = document.getElementById('open-sidebar');
openSidebarButton.addEventListener('click', openCloseSidebarAction);
var closeSidebarButton = document.getElementById('close-sidebar');
closeSidebarButton.addEventListener('click', openCloseSidebarAction);
var sideBarData = document.getElementById('sidebar');
var mainData = document.getElementById('main');

function openCloseSidebarAction() {
  sideBarData.classList.toggle('open-sidebar');
  mainData.classList.toggle('open-sidebar-main');
}