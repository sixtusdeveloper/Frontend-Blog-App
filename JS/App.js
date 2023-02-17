const navItems = document.querySelector('.nav__items')
const openNavBtn = document.querySelector('#open__nav-btn')
const closeNavBtn = document.querySelector('#close__nav-btn')

// OPen Nav dropdown
const openNav = () => {
  navItems.style.display = 'flex'
  openNavBtn.style.display = 'none'
  closeNavBtn.style.display = 'inline-block'
}

// Close CloseNav
const closeNav = () => {
  navItems.style.display = 'none'
  openNavBtn.style.display = 'inline-block'
  closeNavBtn.style.display = 'none'
}
openNavBtn.addEventListener('click', openNav)
closeNavBtn.addEventListener('click', closeNav)

// Sidebar Buttons
const sideBar = document.querySelector('aside')
const openSideBarBtn = document.querySelector('#open__sidebar-btn')
const closeSideBarBtn = document.querySelector('#close__sidebar-btn')

// Open Side Bar on small devices
const openSideBar = () => {
  sideBar.style.left = '0'
  openSideBarBtn.style.display = 'none'
  closeSideBarBtn.style.display = 'inline-block'
}

// Close Side Bar on small devices
const closeSideBar = () => {
  sideBar.style.left = '-100%'
  openSideBarBtn.style.display = 'inline-block'
  closeSideBarBtn.style.display = 'none'
}

openSideBarBtn.addEventListener('click', openSideBar)
closeSideBarBtn.addEventListener('click', closeSideBar)
