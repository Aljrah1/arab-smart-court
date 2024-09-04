<?php
$servername = "localhost"; // عادةً ما يكون localhost
$username = "root"; // اسم المستخدم الافتراضي في XAMPP هو root
$password = ""; // كلمة المرور الافتراضية في XAMPP فارغة
$dbname = "arab_smart_court"; // اسم قاعدة البيانات التي أنشأتها

// إنشاء الاتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال بقاعدة البيانات: " . $conn->connect_error);
}
?>
