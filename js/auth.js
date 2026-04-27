// Simple mock auth system
let currentUser = JSON.parse(localStorage.getItem('coolcanvas_user')) || null;

function checkAuthStatus() {
  const guestLinks = document.getElementById('guestLinks');
  const authLinks = document.getElementById('authLinks');
  const vendorDashLink = document.getElementById('vendorDashLink');
  
  if (currentUser) {
    if (guestLinks) guestLinks.style.display = 'none';
    if (authLinks) authLinks.style.display = 'block';
    
    if (vendorDashLink) {
      if (currentUser.role === 'vendor') {
        vendorDashLink.style.display = 'block';
      } else {
        vendorDashLink.style.display = 'none';
      }
    }
  } else {
    if (guestLinks) guestLinks.style.display = 'block';
    if (authLinks) authLinks.style.display = 'none';
  }
}

function login(email, password) {
  // Mock login logic
  if (email === 'vendor@test.com' && password === 'password') {
    currentUser = { name: 'Vendor Artist', email, role: 'vendor' };
  } else if (email && password) {
    currentUser = { name: email.split('@')[0], email, role: 'user' };
  } else {
    return false;
  }
  
  localStorage.setItem('coolcanvas_user', JSON.stringify(currentUser));
  checkAuthStatus();
  return true;
}

function signup(name, email, password, role = 'user') {
  // Mock signup logic
  if (name && email && password) {
    currentUser = { name, email, role };
    localStorage.setItem('coolcanvas_user', JSON.stringify(currentUser));
    checkAuthStatus();
    return true;
  }
  return false;
}

function logout() {
  currentUser = null;
  localStorage.removeItem('coolcanvas_user');
  checkAuthStatus();
  showToast('Logged out successfully');
  // Redirect to home if on private page
  if (window.location.pathname.includes('vendor.html') || 
      window.location.pathname.includes('profile.html')) {
    setTimeout(() => { window.location.href = 'index.html'; }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  checkAuthStatus();
  
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      logout();
    });
  }
});
