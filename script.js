     // Sample product data
        const products = [
            {
                id: 1,
                name: "Wireless Bluetooth Headphones",
                price: 89.99,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                description: "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
                category: "Electronics",
                rating: 4.5,
                stock: 15
            },
            {
                id: 2,
                name: "Smart Fitness Watch",
                price: 129.99,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                description: "Track your fitness goals with this smart watch featuring heart rate monitor and GPS.",
                category: "Electronics",
                rating: 4.7,
                stock: 8
            },
            {
                id: 3,
                name: "Premium Coffee Maker",
                price: 149.99,
                image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                description: "Brew the perfect cup of coffee with our premium coffee maker. Programmable and easy to use.",
                category: "Home",
                rating: 4.3,
                stock: 12
            },
            {
                id: 4,
                name: "Leather Wallet",
                price: 49.99,
                image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                description: "Genuine leather wallet with multiple card slots and a coin pocket.",
                category: "Accessories",
                rating: 4.8,
                stock: 20
            },
            {
                id: 5,
                name: "Running Shoes",
                price: 79.99,
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                description: "Lightweight running shoes with cushioned soles for maximum comfort during your runs.",
                category: "Footwear",
                rating: 4.6,
                stock: 10
            },
            {
                id: 6,
                name: "Smartphone Stand",
                price: 24.99,
                image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                description: "Adjustable smartphone stand for comfortable viewing at your desk or bedside.",
                category: "Accessories",
                rating: 4.2,
                stock: 25
            },
            {
                id: 7,
                name: "Cotton T-Shirt",
                price: 29.99,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                description: "Comfortable 100% cotton t-shirt available in multiple colors and sizes.",
                category: "Clothing",
                rating: 4.4,
                stock: 30
            },
            {
                id: 8,
                name: "Desk Lamp",
                price: 39.99,
                image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                description: "LED desk lamp with adjustable brightness and color temperature settings.",
                category: "Home",
                rating: 4.0,
                stock: 18
            }
        ];

        // Shopping cart
        let cart = [];

        // DOM Elements
        const pages = {
            home: document.getElementById('home-page'),
            products: document.getElementById('products-page'),
            productDetail: document.getElementById('product-detail-page'),
            cart: document.getElementById('cart-page'),
            checkout: document.getElementById('checkout-page'),
            confirmation: document.getElementById('confirmation-page')
        };

        const navLinks = document.querySelectorAll('.nav-link, .nav-icon, .logo');
        const cartCount = document.querySelector('.cart-count');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinksContainer = document.querySelector('.nav-links');
        const productsGrid = document.getElementById('products-grid');
        const featuredProducts = document.querySelector('.featured-products');
        const cartItemsContainer = document.getElementById('cart-items-container');
        const cartSubtotal = document.getElementById('cart-subtotal');
        const cartTax = document.getElementById('cart-tax');
        const cartTotal = document.getElementById('cart-total');
        const checkoutItems = document.getElementById('checkout-items');
        const checkoutSubtotal = document.getElementById('checkout-subtotal');
        const checkoutTax = document.getElementById('checkout-tax');
        const checkoutTotal = document.getElementById('checkout-total');
        const clearCartBtn = document.getElementById('clear-cart-btn');
        const checkoutBtn = document.getElementById('checkout-btn');
        const placeOrderBtn = document.getElementById('place-order-btn');
        const searchInput = document.getElementById('search-input');
        const sortSelect = document.getElementById('sort-select');

        // Initialize the app
        function init() {
            renderProducts();
            renderFeaturedProducts();
            updateCartCount();
            setupEventListeners();
        }

        // Render products on products page
        function renderProducts() {
            productsGrid.innerHTML = '';
            products.forEach(product => {
                productsGrid.innerHTML += createProductCard(product);
            });
            
            // Add event listeners to "Add to Cart" buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.dataset.id);
                    addToCart(productId);
                });
            });
            
            // Add event listeners to "View Details" buttons
            document.querySelectorAll('.view-details').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.dataset.id);
                    showProductDetail(productId);
                });
            });
        }

        // Render featured products on home page
        function renderFeaturedProducts() {
            // Get 4 random featured products
            const featured = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
            
            featuredProducts.innerHTML = '';
            featured.forEach(product => {
                featuredProducts.innerHTML += createProductCard(product);
            });
            
            // Add event listeners to "Add to Cart" buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.dataset.id);
                    addToCart(productId);
                });
            });
            
            // Add event listeners to "View Details" buttons
            document.querySelectorAll('.view-details').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.dataset.id);
                    showProductDetail(productId);
                });
            });
        }

        // Create product card HTML
        function createProductCard(product) {
            return `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <div class="product-rating">
                            ${createRatingStars(product.rating)}
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-outline view-details" data-id="${product.id}">Details</button>
                            <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Create rating stars HTML
        function createRatingStars(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;
            
            for (let i = 1; i <= 5; i++) {
                if (i <= fullStars) {
                    stars += '<i class="fas fa-star"></i>';
                } else if (i === fullStars + 1 && halfStar) {
                    stars += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            
            return stars;
        }

        // Show product detail page
        function showProductDetail(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            pages.productDetail.innerHTML = `
                <div style="max-width: 1000px; margin: 0 auto;">
                    <a href="#" class="btn btn-outline" style="margin-bottom: 20px;" data-page="products">
                        <i class="fas fa-arrow-left"></i> Back to Products
                    </a>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
                        <div>
                            <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: var(--border-radius);">
                        </div>
                        <div>
                            <h2>${product.name}</h2>
                            <div style="display: flex; align-items: center; gap: 10px; margin: 15px 0;">
                                <div class="product-rating">
                                    ${createRatingStars(product.rating)}
                                </div>
                                <span style="color: var(--gray);">(${product.rating.toFixed(1)})</span>
                            </div>
                            <div class="product-price" style="font-size: 1.8rem; margin: 20px 0;">$${product.price.toFixed(2)}</div>
                            
                            <p style="margin-bottom: 30px; color: var(--gray);">${product.description}</p>
                            
                            <div style="margin-bottom: 30px;">
                                <div><strong>Category:</strong> ${product.category}</div>
                                <div><strong>Availability:</strong> ${product.stock > 0 ? 'In Stock' : 'Out of Stock'}</div>
                            </div>
                            
                            <div class="product-actions">
                                <button class="btn btn-outline" style="flex: 0.5;">Wishlist</button>
                                <button class="btn btn-primary add-to-cart" style="flex: 1.5;" data-id="${product.id}">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Add event listener to "Add to Cart" button
            document.querySelector('.add-to-cart').addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.id);
                addToCart(productId);
                showPage('cart');
            });
            
            showPage('productDetail');
        }

        // Add product to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            updateCartCount();
            showNotification(`${product.name} added to cart!`);
        }

        // Update cart count in navbar
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = count;
        }

        // Render cart items
        function renderCartItems() {
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div style="text-align: center; padding: 40px 0;">
                        <i class="fas fa-shopping-cart" style="font-size: 3rem; color: var(--light-gray); margin-bottom: 20px;"></i>
                        <h3>Your cart is empty</h3>
                        <p style="margin-bottom: 20px;">Looks like you haven't added anything to your cart yet</p>
                        <a href="#" class="btn btn-primary" data-page="products">Browse Products</a>
                    </div>
                `;
                
                cartSubtotal.textContent = '$0.00';
                cartTax.textContent = '$0.00';
                cartTotal.textContent = '$0.00';
                return;
            }
            
            cartItemsContainer.innerHTML = '';
            
            cart.forEach(item => {
                const total = item.price * item.quantity;
                cartItemsContainer.innerHTML += `
                    <div class="cart-item">
                        <div>
                            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        </div>
                        <div class="cart-item-title">${item.name}</div>
                        <div>$${item.price.toFixed(2)}</div>
                        <div>
                            <div class="quantity-controls">
                                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="quantity-btn increase" data-id="${item.id}">+</button>
                            </div>
                        </div>
                        <div>
                            <span>$${total.toFixed(2)}</span>
                            <button class="btn btn-danger remove-item" data-id="${item.id}" style="margin-left: 10px;">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
            });
            
            // Calculate totals
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = 5.00;
            const tax = subtotal * 0.08;
            const total = subtotal + shipping + tax;
            
            cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
            cartTax.textContent = `$${tax.toFixed(2)}`;
            cartTotal.textContent = `$${total.toFixed(2)}`;
            
            // Add event listeners to quantity buttons
            document.querySelectorAll('.decrease').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.closest('.quantity-btn').dataset.id);
                    updateCartItemQuantity(productId, -1);
                });
            });
            
            document.querySelectorAll('.increase').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.closest('.quantity-btn').dataset.id);
                    updateCartItemQuantity(productId, 1);
                });
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.closest('.remove-item').dataset.id);
                    removeFromCart(productId);
                });
            });
        }

        // Update cart item quantity
        function updateCartItemQuantity(productId, change) {
            const itemIndex = cart.findIndex(item => item.id === productId);
            if (itemIndex === -1) return;
            
            cart[itemIndex].quantity += change;
            
            if (cart[itemIndex].quantity <= 0) {
                cart.splice(itemIndex, 1);
            }
            
            updateCartCount();
            renderCartItems();
        }

        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            renderCartItems();
            showNotification('Item removed from cart');
        }

        // Clear cart
        function clearCart() {
            cart = [];
            updateCartCount();
            renderCartItems();
            showNotification('Cart cleared');
        }

        // Render checkout items
        function renderCheckoutItems() {
            checkoutItems.innerHTML = '';
            
            cart.forEach(item => {
                const total = item.price * item.quantity;
                checkoutItems.innerHTML += `
                    <div class="checkout-item">
                        <div>
                            ${item.name} <span style="color: var(--gray);">x${item.quantity}</span>
                        </div>
                        <div>$${total.toFixed(2)}</div>
                    </div>
                `;
            });
            
            // Calculate totals
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = 5.00;
            const tax = subtotal * 0.08;
            const total = subtotal + shipping + tax;
            
            checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
            checkoutTax.textContent = `$${tax.toFixed(2)}`;
            checkoutTotal.textContent = `$${total.toFixed(2)}`;
        }

        // Place order
        function placeOrder() {
            // In a real app, you would send the order to a server here
            showPage('confirmation');
            cart = [];
            updateCartCount();
        }

        // Show notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.right = '20px';
            notification.style.backgroundColor = '#333';
            notification.style.color = 'white';
            notification.style.padding = '15px 25px';
            notification.style.borderRadius = 'var(--border-radius)';
            notification.style.zIndex = '10000';
            notification.style.boxShadow = 'var(--shadow)';
            notification.style.transform = 'translateY(100px)';
            notification.style.opacity = '0';
            notification.style.transition = 'all 0.3s ease';
            
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateY(0)';
                notification.style.opacity = '1';
            }, 10);
            
            // Animate out after 3 seconds
            setTimeout(() => {
                notification.style.transform = 'translateY(100px)';
                notification.style.opacity = '0';
                
                // Remove after animation
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Show page
        function showPage(pageName) {
            // Hide all pages
            Object.values(pages).forEach(page => {
                page.classList.remove('active');
            });
            
            // Show requested page
            if (pages[pageName]) {
                pages[pageName].classList.add('active');
            } else if (pages[pageName + 'Page']) {
                pages[pageName + 'Page'].classList.add('active');
            }
            
            // Render content for specific pages
            if (pageName === 'cart') {
                renderCartItems();
            } else if (pageName === 'checkout') {
                renderCheckoutItems();
            }
            
            // Close mobile menu
            navLinksContainer.classList.remove('active');
        }

        // Setup event listeners
        function setupEventListeners() {
            // Navigation
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const page = link.dataset.page;
                    showPage(page);
                });
            });
            
            // Mobile menu
            mobileMenuBtn.addEventListener('click', () => {
                navLinksContainer.classList.toggle('active');
            });
            
            // Clear cart button
            clearCartBtn.addEventListener('click', clearCart);
            
            // Checkout button
            checkoutBtn.addEventListener('click', () => {
                if (cart.length === 0) {
                    showNotification('Your cart is empty!');
                    return;
                }
                showPage('checkout');
            });
            
            // Place order button
            placeOrderBtn.addEventListener('click', placeOrder);
            
            // Search functionality
            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredProducts = products.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) || 
                    product.description.toLowerCase().includes(searchTerm)
                );
                
                productsGrid.innerHTML = '';
                filteredProducts.forEach(product => {
                    productsGrid.innerHTML += createProductCard(product);
                });
                
                // Reattach event listeners
                document.querySelectorAll('.add-to-cart').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const productId = parseInt(e.target.dataset.id);
                        addToCart(productId);
                    });
                });
                
                document.querySelectorAll('.view-details').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const productId = parseInt(e.target.dataset.id);
                        showProductDetail(productId);
                    });
                });
            });
            
            // Sort functionality
            sortSelect.addEventListener('change', () => {
                let sortedProducts = [...products];
                
                switch(sortSelect.value) {
                    case 'price-low':
                        sortedProducts.sort((a, b) => a.price - b.price);
                        break;
                    case 'price-high':
                        sortedProducts.sort((a, b) => b.price - a.price);
                        break;
                    case 'rating':
                        sortedProducts.sort((a, b) => b.rating - a.rating);
                        break;
                    default:
                        // Default order (original)
                        break;
                }
                
                productsGrid.innerHTML = '';
                sortedProducts.forEach(product => {
                    productsGrid.innerHTML += createProductCard(product);
                });
                
                // Reattach event listeners
                document.querySelectorAll('.add-to-cart').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const productId = parseInt(e.target.dataset.id);
                        addToCart(productId);
                    });
                });
                
                document.querySelectorAll('.view-details').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const productId = parseInt(e.target.dataset.id);
                        showProductDetail(productId);
                    });
                });
            });
        }

        // Initialize the app
        document.addEventListener('DOMContentLoaded', init);