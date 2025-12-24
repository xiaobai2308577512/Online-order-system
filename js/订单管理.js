document.addEventListener('DOMContentLoaded', function() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderList = document.getElementById('orderList');
    const totalAmount = document.getElementById('totalAmount');
    const goPaymentBtn = document.getElementById('goPayment');
    
    function updateOrders() {
        orderList.innerHTML = '';
        let total = 0;
        
        orders.forEach((order, index) => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <span class="order-item-name">${order.name}</span>
                <span class="order-item-quantity">${order.quantity}</span>
                <span class="order-item-price">¥${order.total}</span>
                <span class="order-item-action">
                    <button class="delete-btn" data-index="${index}">删除</button>
                </span>
            `;
            orderList.appendChild(orderItem);
            total += order.total;
        });
        
        totalAmount.textContent = total;
        localStorage.setItem('orders', JSON.stringify(orders));
    }
    
    orderList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.dataset.index;
            orders.splice(index, 1);
            updateOrders();
        }
    });
    
    goPaymentBtn.addEventListener('click', function() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            alert('请先登录后再进行支付');
            window.location.href = '登录.html';
            return;
        }
        window.location.href = '支付.html';
    });
    
    updateOrders();
}); 