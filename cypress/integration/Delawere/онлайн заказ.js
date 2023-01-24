describe('Тестирование интернет магазин ', function () {
    it('Проверка на оформление заказа онлайн', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg > path').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg > path').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
         cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(5000);
         cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
         cy.get('.checkout-button').click();
         cy.get('#billing_first_name').type('Юлия');
         cy.get('#billing_last_name').type('Панферова');
         cy.get('#billing_address_1').type('Весенняя');
         cy.get('#billing_city').type('Самара');
         cy.get('#billing_state').type('Самарская');
         cy.get('#billing_postcode').type('123456');
         cy.get('#billing_phone').type('896342587485');
         cy.get('#billing_email').type('arabica85@MediaList.ru');
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.');
       })
    })
