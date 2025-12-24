function updateNavStatus() {
    const loginStatus = document.getElementById('loginStatus');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'true') {
        loginStatus.innerHTML = `
            <button class="logout-btn" onclick="logout()">退出登录</button>
        `;
    } else {
        loginStatus.innerHTML = `
            <a href="登录.html" class="login-btn">登录</a>
            <a href="注册.html" class="register-btn">注册</a>
        `;
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    alert('已退出登录');
    updateNavStatus();

    if (window.location.href.includes('支付.html') || 
        window.location.href.includes('订单管理.html')) {
        window.location.href = '首页.html';
    }
}


document.addEventListener('DOMContentLoaded', updateNavStatus); 