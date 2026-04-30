<?php
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars($_POST['nama']);
    $pesan = htmlspecialchars($_POST['pesan']);

    if (!empty($nama) && !empty($pesan)) {
        try {
            $sql = "INSERT INTO ekspresi (nama, pesan) VALUES (:nama, :pesan)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute(['nama' => $nama, 'pesan' => $pesan]);

            // Redirect kembali ke halaman utama setelah berhasil
            header("Location: index.html?status=sukses#ekspresi");
        } catch (PDOException $e) {
            echo "Gagal mengirim data: " . $e->getMessage();
        }
    } else {
        echo "Nama dan pesan tidak boleh kosong!";
    }
}
?>