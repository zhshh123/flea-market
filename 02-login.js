document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "test" && password === "1234") {
        alert("登录成功！");
        window.location.href = './01-index.html'; // 登录成功后跳转到首页
    } else {
        alert("账号或密码错误，请重新输入！");
    }
});
