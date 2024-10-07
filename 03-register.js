document.querySelector('.register-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("两次输入的密码不一致，请重新输入！");
        return;
    }

    if (username && password && confirmPassword) {
        alert("注册成功！");
        window.location.href = './01-index.html'; // 注册成功后跳转到首页
    } else {
        alert("请完整填写账号和密码！");
    }
});
