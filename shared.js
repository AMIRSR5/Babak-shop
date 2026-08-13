function openDrawer(){
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeDrawer(){
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
  document.body.style.overflow='';
}
function toggleCats(){
  const el = document.getElementById('catList');
  if(el) el.classList.toggle('open');
}

// Clicking "خانه" while already on the homepage shouldn't reload the page —
// just close the drawer and scroll to top. On other pages it still navigates.
function goHome(event){
  const path = location.pathname;
  const onHome = path.endsWith('index.html') || path.endsWith('/');
  if(onHome){
    event.preventDefault();
    closeDrawer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  }
  return true;
}

// ---------- Dark mode ----------
function applyDarkMode(){
  const isDark = localStorage.getItem('babak-dark') === '1';
  document.body.classList.toggle('dark', isDark);
  const btn = document.getElementById('darkToggleBtn');
  if(btn) btn.textContent = isDark ? '☀️' : '🌙';
}
function toggleDarkMode(){
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('babak-dark', isDark ? '1' : '0');
  const btn = document.getElementById('darkToggleBtn');
  if(btn) btn.textContent = isDark ? '☀️' : '🌙';
}
applyDarkMode();
