<?php
$host = "localhost";
$user = "root"; // Default XAMPP
$pass = "";     // Default XAMPP kosong
$db   = "db_tpm_smkn1";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    // Set mode error PDO ke Exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Koneksi database gagal: " . $e->getMessage());
}
?>