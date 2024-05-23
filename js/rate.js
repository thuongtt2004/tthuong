document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.querySelector('button');
    submitButton.addEventListener('click', function() {
        var reviews = [];
        var princesses = document.querySelectorAll('.princess');
        princesses.forEach(function(princess) {
            var name = princess.querySelector('h2').innerText;
            var rating = princess.querySelector('.rating').value;
            var review = princess.querySelector('.review').value;
            reviews.push({ name: name, rating: rating, review: review });
        });
        console.log(reviews);
        alert("Đánh giá của bạn đã được gửi. Cảm ơn!");
    });
});
