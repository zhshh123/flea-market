document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止默认提交行为

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 在这里处理表单数据，例如发送到服务器
    console.log("提交的表单数据：", { name, email, message });

    // 提交成功后给用户反馈
    alert("感谢您的留言，我们会尽快与您联系！");
    window.location.href = './01-index.html'; // 注册成功后跳转到首页
    
    // 重置表单
    this.reset();
});
