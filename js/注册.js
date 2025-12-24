function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMsg = document.getElementById('errorMsg');

    if (!username || !password || !confirmPassword) {
        errorMsg.style.display = 'block';
        errorMsg.textContent = '信息不完整，请再次输入';
        return;
    }

    if (password !== confirmPassword) {
        errorMsg.style.display = 'block';
        errorMsg.textContent = '两次密码不一样，请重新输入';
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.some(user => user.username === username)) {
        errorMsg.style.display = 'block';
        errorMsg.textContent = '该用户名已被注册';
        return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    errorMsg.style.display = 'none';
    alert('注册成功！');
    window.location.href = '登录.html';
} 