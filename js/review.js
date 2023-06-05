document.addEventListener('DOMContentLoaded', function() {
    const rform = document.getElementById('review');
    const rinput = document.getElementById('reviewInput');
    const rlist = document.getElementById('reviewList');
  
    rform.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const task = rinput.value.trim();
  
      if (task !== '') {
        addTask(task);
        rinput.value = '';
      }
    });
  
    function addTask(task) {
      const li = document.createElement('li');
      li.textContent = task;
      
     let likes = 0, dislikes = 0;

      const likeIcon = document.createElement('i');
      likeIcon.classList.add('far', 'fa-thumbs-up', 'like');
      likeIcon.addEventListener('click', () => {
      likes++;
      likeIcon.textContent = ` ${likes} `;
      likeIcon.classList.toggle('liked');
      });
  
      const dislikeIcon = document.createElement('i');
      dislikeIcon.classList.add('far', 'fa-thumbs-down', 'dislike');
      dislikeIcon.addEventListener('click', () => {
      dislikes++; 
      dislikeIcon.textContent = ` ${dislikes} `;
      dislikeIcon.classList.toggle('disliked');
      });
  
     const deleteIcon = document.createElement('i');
     deleteIcon.classList.add('fas', 'fa-trash-alt', 'delete');
     deleteIcon.addEventListener('click', () => {
     li.remove();
     });


      li.appendChild(likeIcon);
      li.appendChild(dislikeIcon);      
      li.appendChild(deleteIcon);
      
      rlist.appendChild(li);
    }
  });

 

  