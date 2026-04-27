// UI interactions
document.addEventListener('DOMContentLoaded', () => {
  // Inject Background Blobs
  const blobsContainer = document.createElement('div');
  blobsContainer.className = 'bg-blobs-container';
  blobsContainer.innerHTML = `
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
    <div class="bg-blob blob-3"></div>
    <div class="bg-blob blob-4"></div>
  `;
  document.body.prepend(blobsContainer);

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  const isHomepage = document.querySelector('.hero') !== null;
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (isHomepage) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });
  }

  // Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Search Toggle
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
      searchBar.classList.toggle('active');
      if (searchBar.classList.contains('active')) {
        document.getElementById('searchInput').focus();
      }
    });
  }

  // Search Submit via Enter key
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') doSearch();
    });
  }

  // Active Nav Link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Populate Grids on Homepage
  if (document.getElementById('featuredGrid')) {
    renderProductGrid('featuredGrid', getFeaturedProducts());
  }
  if (document.getElementById('trendingGrid')) {
    renderProductGrid('trendingGrid', getTrendingProducts());
  }

  // Dark Mode Toggle — Radial Ripple Reveal with Easter Eggs
  const navActions = document.querySelector('.nav-actions');
  let themeTransitioning = false;

  // 🎨 Easter Egg Pool — shown during theme transition
  const easterEggs = [
    { emoji: '🌙', text: 'Switching to the dark side...' },
    { emoji: '☀️', text: 'Let there be light!' },
    { emoji: '🎨', text: 'Every canvas begins blank.' },
    { emoji: '🖌️', text: 'Painting a new vibe...' },
    { emoji: '✨', text: 'Art is never finished, only abandoned.' },
    { emoji: '🌈', text: 'Colors are the smiles of nature.' },
    { emoji: '🦉', text: 'Night owl mode activated!' },
    { emoji: '🌻', text: 'Chase the sun!' },
    { emoji: '🎭', text: 'Two sides of every masterpiece.' },
    { emoji: '🧑‍🎨', text: 'You are the artist of your life.' },
    { emoji: '💡', text: 'Great ideas need great lighting.' },
    { emoji: '🌌', text: 'The universe is your canvas.' },
    { emoji: '☕', text: 'Coffee + Art = Perfection' },
    { emoji: '🔮', text: 'Seeing things in a new light...' },
    { emoji: '🐱', text: 'Even cats prefer the dark!' },
    { emoji: '🍕', text: 'Art is like pizza, even when bad, it\'s good.' },
    { emoji: '👀', text: 'Boo! Did we scare you?' },
    { emoji: '🫧', text: 'Pop! New perspective unlocked.' },
    { emoji: '🎵', text: 'If art were music, this is the beat drop.' },
    { emoji: '🪄', text: 'Abracadabra!' },
    { emoji: '🐸', text: 'It\'s not easy being green... or dark.' },
    { emoji: '🍩', text: 'Donut worry, be arty!' },
    { emoji: '🦄', text: 'Unicorns prefer dark mode. Trust us.' },
    { emoji: '🚀', text: 'Launching new vibes in 3... 2... 1...' },
    { emoji: '🧃', text: 'Sipping on some fresh aesthetics.' },
    // 50 NEW EASTER EGGS
    { emoji: '⚡', text: 'Blink and you miss it!' },
    { emoji: '🦋', text: 'A colorful metamorphosis...' },
    { emoji: '🌊', text: 'Riding the wave of inspiration.' },
    { emoji: '🦖', text: 'Rawr! (That means art in dinosaur).' },
    { emoji: '🛸', text: 'Abducting your old theme...' },
    { emoji: '🍄', text: 'Level up your visuals!' },
    { emoji: '🧊', text: 'Cooling things down...' },
    { emoji: '🔥', text: 'Heating things up!' },
    { emoji: '🌶️', text: 'Adding a little spice.' },
    { emoji: '🥑', text: 'Extra guac, extra art.' },
    { emoji: '🌮', text: 'Let\'s taco \'bout this new theme.' },
    { emoji: '🧩', text: 'The final piece of the puzzle.' },
    { emoji: '🎲', text: 'Rolling the dice on a new look.' },
    { emoji: '🎮', text: 'Player 1, get ready.' },
    { emoji: '🕹️', text: 'Press Start to continue.' },
    { emoji: '🎟️', text: 'Your ticket to a new gallery.' },
    { emoji: '🎪', text: 'Welcome to the main event!' },
    { emoji: '🎢', text: 'Enjoy the ride.' },
    { emoji: '🎡', text: 'What goes around comes around.' },
    { emoji: '🚀', text: 'To infinity and beyond!' },
    { emoji: '🛸', text: 'Beam me up!' },
    { emoji: '🌠', text: 'Make a wish.' },
    { emoji: '🎇', text: 'Sparks are flying!' },
    { emoji: '🎆', text: 'A grand finale for your eyes.' },
    { emoji: '🎉', text: 'Surprise!' },
    { emoji: '🎈', text: 'Lifting your spirits.' },
    { emoji: '🎀', text: 'Tying it all together.' },
    { emoji: '🎁', text: 'A little present for your screen.' },
    { emoji: '🏆', text: 'First place in aesthetics.' },
    { emoji: '🥇', text: 'Going for gold.' },
    { emoji: '🎨', text: 'Mixing the perfect palette.' },
    { emoji: '🧵', text: 'Weaving a new narrative.' },
    { emoji: '🧶', text: 'Unraveling the old theme.' },
    { emoji: '🧸', text: 'Snuggle up with a new look.' },
    { emoji: '🧸', text: 'Soft aesthetics incoming...' },
    { emoji: '🪀', text: 'Yo-yo-ing between themes.' },
    { emoji: '🪁', text: 'Flying high with new colors.' },
    { emoji: '🪄', text: 'A touch of magic.' },
    { emoji: '🔮', text: 'I predict a beautiful theme.' },
    { emoji: '🧿', text: 'Protecting your good vibes.' },
    { emoji: '📸', text: 'Capture the moment.' },
    { emoji: '🎥', text: 'Action!' },
    { emoji: '🎬', text: 'Scene two, take one.' },
    { emoji: '📺', text: 'Stay tuned for more art.' },
    { emoji: '📻', text: 'Broadcasting new frequencies.' },
    { emoji: '🎙️', text: 'Testing, testing, 1 2 3...' },
    { emoji: '🎧', text: 'Listen to the colors.' },
    { emoji: '🥁', text: 'Drumroll please...' },
    { emoji: '🎷', text: 'Smooth jazz for your eyes.' },
    { emoji: '🎺', text: 'Toot your own horn.' },
  ];
  let recentEggs = [];

  function getRandomEgg() {
    let idx;
    do { 
      idx = Math.floor(Math.random() * easterEggs.length); 
    } while (recentEggs.includes(idx));
    
    recentEggs.push(idx);
    if (recentEggs.length > 25) {
      recentEggs.shift();
    }
    
    return easterEggs[idx];
  }

  if (navActions) {
    const themeBtn = document.createElement('button');
    themeBtn.className = 'btn-icon theme-toggle-btn';
    themeBtn.id = 'themeToggle';
    themeBtn.title = 'Toggle Theme';
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    navActions.insertBefore(themeBtn, navActions.firstChild);
    
    // Check saved theme
    if (localStorage.getItem('coolcanvas_theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeBtn.addEventListener('click', (e) => {
      if (themeTransitioning) return;
      themeTransitioning = true;

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      const newIcon = isDark ? 'fa-moon' : 'fa-sun';

      // 1. Spin the toggle icon
      const icon = themeBtn.querySelector('i');
      icon.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
      icon.style.transform = 'rotate(360deg) scale(1.3)';

      // 2. Get button position for ripple origin
      const rect = themeBtn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // 3. Pick a random easter egg
      const egg = getRandomEgg();

      // 4. Create Liquid Water Waves
      // Wave 1: Soft translucent leading edge
      const wave1 = document.createElement('div');
      wave1.style.cssText = `position: fixed; left: ${x}px; top: ${y}px; width: 300vmax; height: 300vmax; transform: translate(-50%, -50%) scale(0) rotate(0deg); border-radius: 40% 60% 50% 50%; background: ${newTheme === 'dark' ? 'rgba(157, 78, 221, 0.3)' : 'rgba(255, 107, 157, 0.3)'}; z-index: 99997; pointer-events: none; transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);`;

      // Wave 2: Slightly darker translucent middle edge
      const wave2 = document.createElement('div');
      wave2.style.cssText = `position: fixed; left: ${x}px; top: ${y}px; width: 300vmax; height: 300vmax; transform: translate(-50%, -50%) scale(0) rotate(0deg); border-radius: 55% 45% 60% 40%; background: ${newTheme === 'dark' ? 'rgba(90, 24, 154, 0.4)' : 'rgba(255, 158, 187, 0.4)'}; z-index: 99998; pointer-events: none; transition: transform 0.85s cubic-bezier(0.4, 0, 0.2, 1);`;

      // Wave 3: Solid background
      const mainWave = document.createElement('div');
      mainWave.style.cssText = `position: fixed; left: ${x}px; top: ${y}px; width: 300vmax; height: 300vmax; transform: translate(-50%, -50%) scale(0) rotate(0deg); border-radius: 45% 55% 40% 60%; background: ${newTheme === 'dark' ? '#0a0015' : '#ffffff'}; z-index: 99999; pointer-events: none; transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);`;

      // 5. Create Easter Egg Container (Fixed to screen center)
      const eggContainer = document.createElement('div');
      eggContainer.style.cssText = `position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 100000; pointer-events: none; perspective: 1000px;`;
      
      const eggEl = document.createElement('div');
      eggEl.innerHTML = `
        <span class="egg-emoji">${egg.emoji}</span>
        <span class="egg-text">${egg.text}</span>
      `;
      eggEl.style.cssText = `
        display: flex; flex-direction: column; align-items: center; gap: 12px;
        opacity: 0; transform: scale(0.5) rotateX(20deg); 
        transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
      `;
      const emojiSpan = eggEl.querySelector('.egg-emoji');
      emojiSpan.style.cssText = 'font-size: 4rem; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));';
      const textSpan = eggEl.querySelector('.egg-text');
      textSpan.style.cssText = `
        font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 600; font-style: italic;
        color: ${newTheme === 'dark' ? '#c77dff' : '#9d4edd'};
        text-shadow: 0 2px 10px ${newTheme === 'dark' ? 'rgba(199,125,255,0.3)' : 'rgba(157,78,221,0.2)'};
        letter-spacing: 0.5px;
      `;

      eggContainer.appendChild(eggEl);
      document.body.appendChild(wave1);
      document.body.appendChild(wave2);
      document.body.appendChild(mainWave);
      document.body.appendChild(eggContainer);

      // 6. Trigger Liquid Wave Animations
      requestAnimationFrame(() => {
        // We spin them in opposite directions while they scale to create the "splashing water" effect
        wave1.style.transform = 'translate(-50%, -50%) scale(1) rotate(180deg)';
        wave2.style.transform = 'translate(-50%, -50%) scale(1) rotate(-135deg)';
        mainWave.style.transform = 'translate(-50%, -50%) scale(1) rotate(90deg)';
      });

      // 7. Show the easter egg early during expansion
      setTimeout(() => {
        eggEl.style.opacity = '1';
        eggEl.style.transform = 'scale(1) rotateX(0deg)';
      }, 250);

      // 8. Hide the easter egg VERY quickly
      setTimeout(() => {
        eggEl.style.opacity = '0';
        eggEl.style.transform = 'scale(0.8) rotateX(-20deg)';
      }, 550);

      // 9. Swap theme right after the egg disappears
      setTimeout(() => {
        if (newTheme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('coolcanvas_theme', newTheme);
        themeBtn.innerHTML = `<i class="fas ${newIcon}"></i>`;
      }, 700);

      // 10. Fade out the liquid waves smoothly
      setTimeout(() => {
        mainWave.style.transition = wave1.style.transition = wave2.style.transition = 'opacity 0.4s ease-out';
        mainWave.style.opacity = wave1.style.opacity = wave2.style.opacity = '0';
      }, 850);

      // 11. Clean up
      setTimeout(() => {
        wave1.remove(); 
        wave2.remove(); 
        mainWave.remove(); 
        eggContainer.remove();
        themeTransitioning = false;
      }, 1300);
    });
  }

  // Scroll Reveal Animation Setup
  window.scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        window.scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll('.section, .cat-card').forEach(el => {
    el.classList.add('reveal');
    window.scrollObserver.observe(el);
  });

  // Back to Top Button
  const backToTop = document.createElement('button');
  backToTop.id = 'backToTop';
  backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTop.title = "Back to Top";
  document.body.appendChild(backToTop);
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
});

function doSearch() {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerHTML = `<span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function subscribeNewsletter(e) {
  e.preventDefault();
  showToast('Thanks for subscribing! 🎨');
  e.target.reset();
}

function generateProductHTML(product) {
  const inWish = isInWishlist(product.id);
  const heartClass = inWish ? 'fas fa-heart' : 'far fa-heart';
  const heartColor = inWish ? 'color: var(--secondary);' : '';
  
  return `
    <div class="product-card">
      <div class="product-img">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.title}">
        </a>
        <div class="product-badges">
          ${product.isNew ? '<span class="badge badge-new">New</span>' : ''}
          ${product.isSold ? '<span class="badge badge-sold">Sold</span>' : ''}
        </div>
        <div class="product-actions">
          <button class="action-btn wishlist-btn" data-id="${product.id}" onclick="toggleWishlist(${product.id})">
            <i class="${heartClass}" style="${heartColor}"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-cat">${product.category}</span>
        <a href="product.html?id=${product.id}">
          <h3 class="product-title">${product.title}</h3>
        </a>
        <div class="product-artist"><i class="fas fa-brush"></i> ${product.artist}</div>
        <div class="product-bottom">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="add-cart-btn" onclick="addToCart(${product.id})" ${product.isSold ? 'disabled' : ''}>
            ${product.isSold ? 'Sold Out' : '<i class="fas fa-plus"></i> Add'}
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderProductGrid(containerId, productsList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  if (productsList.length === 0) {
    container.innerHTML = '<p class="empty-state">No artworks found.</p>';
    return;
  }
  
  container.innerHTML = productsList.map(generateProductHTML).join('');
  
  if (window.scrollObserver) {
    container.querySelectorAll('.product-card').forEach(el => {
      el.classList.add('reveal');
      window.scrollObserver.observe(el);
    });
  }
}
