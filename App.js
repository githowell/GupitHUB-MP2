const themeToggleButton = document.querySelector('.theme-toggle');
const navbar = document.querySelector('.navbar');

themeToggleButton.addEventListener('click', () => {
    const body = document.body;

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    navbar.classList.toggle('navbar-dark');
    navbar.classList.toggle('navbar-light');

    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Light Mode';
    } else {
        themeToggleButton.textContent = 'Dark Mode';
    }
});



// cart overlay

$(document).ready(function() {
    let cart = [];
    let total = 0;

    $(".bag-btn").on("click", function() {
        let productId = $(this).data('id');
        let productName = $(this).prev().prev().text();
        let productPrice = parseFloat($(this).prev().text().replace('₱', '').trim());

        let foundProduct = cart.find(p => p.id === productId);

        if (foundProduct) {
            foundProduct.quantity += 1;
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            });
        }

        updateCartUI();
    });




    
    // Handlers for the "+" and "-" buttons
    $(document).on('click', '.increase-quantity', function() {
        let productId = $(this).data('id');
        let foundProduct = cart.find(p => p.id === productId);
        if (foundProduct) {
            foundProduct.quantity += 1;
            updateCartUI();
        }
    });

    $(document).on('click', '.decrease-quantity', function() {
        let productId = $(this).data('id');
        let foundProduct = cart.find(p => p.id === productId);
        if (foundProduct) {
            foundProduct.quantity -= 1;
            if (foundProduct.quantity <= 0) {
                let index = cart.indexOf(foundProduct);
                if (index > -1) {
                    cart.splice(index, 1);
                }
            }
            updateCartUI();
        }
    });

    function updateCartUI() {
        total = 0;
        let itemCount = 0;

        $('#cart-list').empty();
        for (let product of cart) {
            total += product.price * product.quantity;
            itemCount += product.quantity;
            
            $('#cart-list').append(`
                <div class="cart-item">
                    <div class="col-5 col-{breakpoint}-auto"><span>${product.name}</span></div>
                    <div class="col-4 container">
                        <button class="decrease-quantity arrow-button" data-id="${product.id}">-</button>
                        <span>${product.quantity}</span>
                        <button class="increase-quantity arrow-button" data-id="${product.id}">+</button>
                    </div "col-3 col-{breakpoint}-auto">
                    <span>₱${(product.price * product.quantity).toFixed(2)}</span>
                </div>
            `);
        }
        
        $('.cart-items').text(itemCount);
        $('#cart-total').text(total.toFixed(2));

        if (cart.length > 0) {
            $(".cart-overlay").show();
        }
    }





    // Close cart overlay
    $("#cart-close-btn").on("click", function() {
        $(".cart-overlay").hide();
    });

    // Show cart overlay when cart button is clicked
    $(".cart-btn").on("click", function() {
        $(".cart-overlay").toggle();
    });
});
