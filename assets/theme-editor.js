window.addEventListener('load', () => {

	document.addEventListener('shopify:section:load', function(event) {
		const section = event.target;

		if (typeof CartDrawer !== 'undefined') {
		  new CartDrawer();
		}
		if (typeof SlideShow !== 'undefined') {
			new SlideShow();
		}
		if ( section.classList.contains('product-section')) {
			window.dispatchEvent( new Event('resize') );
		}
	});
});
window.addEventListener('load', () => {
  // Існуючі дії
  document.addEventListener('shopify:section:load', function(event) {
    const section = event.target;

    if (typeof CartDrawer !== 'undefined') {
      new CartDrawer();
    }
    if (typeof SlideShow !== 'undefined') {
      new SlideShow();
    }
    if (section.classList.contains('product-section')) {
      window.dispatchEvent(new Event('resize'));
    }
  });

  // Новий функціонал для мобільного меню
  const mobileMenuToggle = document.querySelector('.mobile-toggle-wrapper');
  const mobileMenuDrawer = document.querySelector('.mobile-menu-drawer');

  if (mobileMenuToggle && mobileMenuDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuDrawer.classList.toggle('active');
      document.body.classList.toggle('no-scroll'); // Заборона прокручування при відкритому меню
    });
  }
});

function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-toggle-wrapper');
  const mobileMenuDrawer = document.querySelector('.mobile-menu-drawer');

  if (mobileToggle && mobileMenuDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isActive = mobileMenuDrawer.classList.contains('active');
      mobileMenuDrawer.classList.toggle('active', !isActive);
      document.body.classList.toggle('no-scroll', !isActive);
    });
  }
}

// Ініціалізація на сторінках
document.addEventListener('DOMContentLoaded', initMobileMenu);
document.addEventListener('shopify:section:load', initMobileMenu);