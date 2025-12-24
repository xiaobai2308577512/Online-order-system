document.addEventListener('DOMContentLoaded', function() {
   
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        alert('请先登录后再进行支付');
        window.location.href = '登录.html';
        return;
    }


    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const total = orders.reduce((sum, order) => sum + order.total, 0);
    document.getElementById('payAmount').textContent = `¥${total}`;


    document.getElementById('paymentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        

        const formData = new FormData(this);
        const payMethod = formData.get('payMethod');
        const name = formData.get('name');
        const phone = formData.get('phone');
        const address = formData.get('address');
        
        if (!payMethod || !name || !phone || !address) {
            alert('请填写必填信息');
            return;
        }
       
        alert('支付成功！');
        
        localStorage.removeItem('orders');
        
        window.location.href = '首页.html';
    });
}); 