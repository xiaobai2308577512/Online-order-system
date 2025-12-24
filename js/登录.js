let registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const errorMsg = document.getElementById('loginErrorMsg');


    if (!username || !password) {
        errorMsg.style.display = 'block';
        errorMsg.textContent = '用户名和密码不能为空';
        return;
    }


    const user = registeredUsers.find(u => u.username === username && u.password === password);
    
    if (user) {
      
        localStorage.setItem('isLoggedIn', 'true');
        errorMsg.style.display = 'none';
        alert('登录成功！');
        window.location.href = '首页.html';
    } else {
      
        errorMsg.style.display = 'block';
        errorMsg.textContent = '用户名或密码错误，请重新输入';
    }
} 