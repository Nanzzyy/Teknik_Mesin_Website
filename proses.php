<?php
include 'koneksi.php'; //

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars($_POST['nama']);
    $pesan = htmlspecialchars($_POST['pesan']);

    if (!empty($nama) && !empty($pesan)) {
        try {
            // Gunakan prepared statements untuk keamanan[cite: 3]
            $sql = "INSERT INTO ekspresi (nama, pesan) VALUES (:nama, :pesan)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute(['nama' => $nama, 'pesan' => $pesan]);

            // Redirect ke index.php agar halaman otomatis "refresh" dan menunjukkan status sukses
            header("Location: index.php?status=sukses#ekspresi");
            exit(); // Penting: hentikan eksekusi script setelah redirect
        } catch (PDOException $e) {
            die("Gagal mengirim data: " . $e->getMessage());
        }
    } else {
        header("Location: index.php?status=error#ekspresi");
        exit();
    }
}
?>