// Cart & Wishlist Logic
let cart = JSON.parse(localStorage.getItem('coolcanvas_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('coolcanvas_wishlist')) || [];

function saveCart() {
  localStorage.setItem('coolcanvas_cart', JSON.stringify(cart));
  updateBadges();
}

function saveWishlist() {
  localStorage.setItem('coolcanvas_wishlist', JSON.stringify(wishlist));
  updateBadges();
  renderWishlistSidebar();
}

function updateBadges() {
  const cartBadge = document.getElementById('cartBadge');
  const wishlistBadge = document.getElementById('wishlistBadge');
  
  if (cartBadge) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
  }
  
  if (wishlistBadge) {
    wishlistBadge.textContent = wishlist.length;
    wishlistBadge.style.display = wishlist.length > 0 ? 'flex' : 'none';
  }
}

function addToCart(productId) {
  const product = getProductById(productId);
  if (!product || product.isSold) return;
  
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  saveCart();
  showToast(`Added ${product.title} to cart! 🛒`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  if (typeof renderCart === 'function') renderCart();
}

function updateQuantity(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;
  
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    if (typeof renderCart === 'function') renderCart();
  }
}

function toggleWishlist(productId) {
  const product = getProductById(productId);
  if (!product) return;
  
  const index = wishlist.findIndex(item => item.id === productId);
  if (index >= 0) {
    wishlist.splice(index, 1);
    showToast(`Removed ${product.title} from wishlist.`);
  } else {
    wishlist.push(product);
    showToast(`Added ${product.title} to wishlist! ❤️`);
  }
  
  saveWishlist();
  
  // Update heart icons on screen if present
  const btns = document.querySelectorAll(`.wishlist-btn[data-id="${productId}"] i`);
  btns.forEach(icon => {
    if (index >= 0) {
      icon.classList.remove('fas');
      icon.classList.add('far');
    } else {
      icon.classList.remove('far');
      icon.classList.add('fas');
    }
  });
}

function isInWishlist(productId) {
  return wishlist.some(item => item.id === productId);
}

// Wishlist Sidebar
function openWishlist() {
  document.getElementById('wishlistSidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('open');
  renderWishlistSidebar();
}

function closeWishlist() {
  document.getElementById('wishlistSidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

function renderWishlistSidebar() {
  const container = document.getElementById('wishlistItems');
  if (!container) return;
  
  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="far fa-heart"></i>
        <p>Your wishlist is empty</p>
        <a href="shop.html" class="btn-primary" style="margin-top:15px" onclick="closeWishlist()">Explore Art</a>
      </div>
    `;
    return;
  }
  
  container.innerHTML = wishlist.map(item => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.title}">
      <div class="wishlist-item-info">
        <h4>${item.title}</h4>
        <p>${formatPrice(item.price)}</p>
        <div class="wishlist-actions">
          <button class="add-cart-btn" onclick="addToCart(${item.id})" ${item.isSold ? 'disabled' : ''}>
            ${item.isSold ? 'Sold' : 'Add to Cart'}
          </button>
          <button class="action-btn" onclick="toggleWishlist(${item.id})" style="width:30px;height:30px">
            <i class="fas fa-trash" style="font-size:0.8rem"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  updateBadges();
  
  const wishlistNavBtn = document.getElementById('wishlistNavBtn');
  if (wishlistNavBtn) {
    wishlistNavBtn.addEventListener('click', openWishlist);
  }
});
