document.addEventListener('DOMContentLoaded', function() {
    const minusButtons = document.querySelectorAll('.quantity-btn.minus');
    const plusButtons = document.querySelectorAll('.quantity-btn.plus');
    const addToOrderButtons = document.querySelectorAll('.add-to-order');

    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity-input');
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        });
    });

    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity-input');
            input.value = parseInt(input.value) + 1;
        });
    });

    
    addToOrderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);
            const quantity = parseInt(this.parentElement.querySelector('.quantity-input').value);

            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            
            const existingOrderIndex = orders.findIndex(order => order.name === name);
            
            if (existingOrderIndex !== -1) {

                orders[existingOrderIndex].quantity += quantity;
                orders[existingOrderIndex].total = orders[existingOrderIndex].quantity * price;
                alert(`成功添加：${name} ${quantity}份（当前共 ${orders[existingOrderIndex].quantity} 份）`);
            } else {
               
                orders.push({
                    name: name,
                    price: price,
                    quantity: quantity,
                    total: price * quantity
                });
                alert(`成功加入订单：${name} ${quantity}份`);
            }
            
            
            localStorage.setItem('orders', JSON.stringify(orders));
        });
    });

    const foodImages = document.querySelectorAll('.food-image');
    foodImages.forEach(img => {
        img.addEventListener('click', function() {
            const dishData = {
                name: this.dataset.name,
                category: this.dataset.category,
                price: this.dataset.price,
                taste: this.dataset.taste,
                ingredients: this.dataset.ingredients,
                image: this.src
            };
            
            sessionStorage.setItem('currentDish', JSON.stringify(dishData));
            
 
            window.location.href = '菜品详情.html';
        });
        
        img.style.cursor = 'pointer';
    });
}); 