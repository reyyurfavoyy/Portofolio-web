function confirmDelete() {
    let confirmation = confirm("Yakin ingin hapus?");
    if (confirmation) {
        document.querySelector(".intro2").remove();
        alert("Data berhasil dihapus!");
    } else {
        alert("Penghapusan dibatalkan.");
    }
}
