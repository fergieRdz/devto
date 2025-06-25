const corazon = document.getElementById("corazon");
const contador1 = document.getElementById("count-corazon");
const comments = document.getElementById("comments");
const contador2 = document.getElementById("count-comments");
const favoritos = document.getElementById("favoritos");
const contador3 = document.getElementById("count-favoritos");
const compartir = document.getElementById("compartir");
const contador4 = document.getElementById("count-share");

function sumarLikes(element, contador){
    let i = 0;
        element.addEventListener("click", () => {
          console.log(i++);
          contador.innerHTML = i;
          console.log(i);
        });
} 
sumarLikes(corazon, contador1)
sumarLikes(comments, contador2)
sumarLikes(favoritos, contador3)
sumarLikes(compartir, contador4)

 const input = document.getElementById('comment');
const container = document.getElementById('comments-container');
let date = new Date();

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const text = input.value.trim();
      if (!text) return;

      // Create comment card
      const commentCard = document.createElement('div');
      commentCard.className = 'comment-card';
      commentCard.innerHTML = `
        <div class="comment">
          <img src="./profile.jpg" alt="profilepic" class="profileIMG" width="40">
          <div class="comment-content">
            <div class="flex">
              <h4 id="postUser">Fergie </h4>
              <p id="date">${date}</p>
            </div>
            <p id="postCommentss">${text}</p>
            <div class="comment-footer">
              <button class="icon-btn" onclick="increment(this)">❤️ <span>0</span></button>
              <button class="icon-btn" onclick="increment(this)">💬 <span>0</span></button>
            </div>
          </div>
        </div>
      `;

      container.prepend(commentCard);
      input.value = '';
    }
  });

  function increment(btn) {
    const countSpan = btn.querySelector('span');
    countSpan.textContent = parseInt(countSpan.textContent) + 1;
  }
