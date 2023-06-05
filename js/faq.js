function createTaskElement(task) {
    const li = document.createElement("li");

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.textContent = task.description;
    li.appendChild(taskElement);

    const commentsElement = document.createElement("div");
    commentsElement.classList.add("comments");
    for (const comment of task.comments) {
        const commentElement = document.createElement("p");
        commentElement.textContent = comment;
        commentsElement.appendChild(commentElement);
    }
    li.appendChild(commentsElement);

    const likeDislikeElement = document.createElement("div");
    likeDislikeElement.classList.add("like-dislike");

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('far', 'fa-thumbs-up');
    likeIcon.textContent = ` ${task.likes} | `;
    likeIcon.addEventListener("click", () => {
        task.likes++;
        likeIcon.textContent = ` ${task.likes} | `;
        likeIcon.classList.toggle('liked');
    });
    
    likeDislikeElement.appendChild(likeIcon);

    const dislikeIcon = document.createElement('i');
    dislikeIcon.classList.add('far', 'fa-thumbs-down');
    dislikeIcon.textContent = ` ${task.dislikes}`;
    dislikeIcon.addEventListener("click", () => {
        task.dislikes++;
        dislikeIcon.textContent = ` ${task.dislikes}`;
        dislikeIcon.classList.toggle('disliked');
    });

    likeDislikeElement.appendChild(dislikeIcon);

    li.appendChild(likeDislikeElement);

    return li;
}

function displayTasks(tasks) {
    const faq = document.getElementById("faq");
    for (const task of tasks) {
        const taskElement = createTaskElement(task);
        faq.appendChild(taskElement);
    }
}

const tasks = [
    {
        description: "What data are affected by Live Updates?",
        comments: ["The following data are updated during Live Updates.It's important to note that with the exception of Live Update Ratings, data for players and managers that you already own will not be updated"],
        likes: 4,
        dislikes: 0
    },
    {
        description: "Lately I'm losing a lot of PvP matches due to disconnects. How can I avoid this issue?",
        comments: ["Keep in mind that frequently disconnecting from matches may result in restrictions being placed on your account."],
        likes: 2,
        dislikes: 1
    },
    {
        description: "How can I report malicious activities?",
        comments: [" If you notice someone violating the Terms of Use or being disrespectful to others, you can contact us through the Report function.Find the person you wish to report by going to [Extras] > [User Information] > [Match History], then you can send a report by going to that person's [User Details]."],
        likes: 1,
        dislikes: 0
    },
    {
        description: "Why can't I complete Campaign Objectives?",
        comments: ["Please note that for Campaign Objectives with match-related conditions, your achievement status may not be counted if the matches played were concluded abnormally."],
        likes: 3,
        dislikes: 2
    },
    {
        description: "When searching for a Match Room in Friend Match, the message No corresponding Match Room found. is displayed even though the Match Room No. entered was correct. Why is this happening?",
        comments: [" Friend Match mode is available in both Authentic Team and Dream Team. However, be aware that matches cannot be played between Authentic Teams and Dream Teams. As such, please check under which mode the Match Room was created in, and make sure you are searching under the correct mode."],
        likes: 1,
        dislikes: 2
    }
];

displayTasks(tasks);
