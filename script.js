document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const correctPassword = "Habiba"; // ضع هنا كلمة السر التي تريدها
    const errorMessage = document.getElementById('error-message');

    // تحقق من كلمة السر
    if (password === correctPassword) {
        // الانتقال إلى صفحة أخرى (مثال: صفحة شكر أو صفحة داخلية)
        window.location.href = "M.html"; // استبدل "welcome.html" بعنوان الصفحة التي تريدها
    } else {
        // عرض رسالة الخطأ
        errorMessage.classList.remove('hidden');
    }
});
