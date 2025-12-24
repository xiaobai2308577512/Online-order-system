document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const images = slides.getElementsByTagName('img');
    let currentIndex = 0;
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
    }
    
    function updateSlide() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    setInterval(nextSlide, 2000);

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
});

function logout() {
    localStorage.removeItem('isLoggedIn');
    alert('已退出登录');
    window.location.reload();
} 