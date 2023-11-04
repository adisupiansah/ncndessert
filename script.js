document.addEventListener('DOMContentLoaded', function () {
    // Menangani pengiriman formulir
    document.getElementById('commentForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var comment = document.getElementById('comment').value;

        // Menyimpan komentar ke penyimpanan lokal
        var comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push({ id: Date.now(), name: name, comment: comment });
        localStorage.setItem('comments', JSON.stringify(comments));

        // Menampilkan komentar
        displayComments();

        // Mengosongkan formulir
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    });

    // Menampilkan komentar yang tersimpan di penyimpanan lokal
    function displayComments() {
        var comments = JSON.parse(localStorage.getItem('comments')) || [];
        var commentsDiv = document.getElementById('comments');

        // Mengosongkan konten sebelum menambahkan ulang
        commentsDiv.innerHTML = '';

        // ...
        for (var i = 0; i < comments.length; i++) {
            var commentDiv = document.createElement('div');
            commentDiv.className = 'comment';  // Menambahkan kelas 'comment'
            commentDiv.innerHTML = '<strong>' + comments[i].name + ':</strong> ' + comments[i].comment;
            commentDiv.innerHTML += ' <button onclick="editComment(' + comments[i].id + ')">Edit</button>';
            commentDiv.innerHTML += ' <button onclick="deleteComment(' + comments[i].id + ')">Delete</button>';
            commentsDiv.appendChild(commentDiv);
        }
        // ...

    }

    // Memanggil fungsi untuk menampilkan komentar saat halaman dimuat
    displayComments();
});

function editComment(id) {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    var comment = comments.find(c => c.id === id);

    if (comment) {
        var newName = prompt('Edit nama:', comment.name);
        var newComment = prompt('Edit komentar:', comment.comment);

        if (newName !== null && newComment !== null) {
            comment.name = newName;
            comment.comment = newComment;
            localStorage.setItem('comments', JSON.stringify(comments));
            displayComments();
        }
    }
}

function deleteComment(id) {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    var index = comments.findIndex(c => c.id === id);

    if (index !== -1) {
        comments.splice(index, 1);
        localStorage.setItem('comments', JSON.stringify(comments));
        displayComments();
    }
}
