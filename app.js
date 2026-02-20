let notLog = JSON.parse(localStorage.getItem("notLogin"))

if(notLog == null){
    localStorage.setItem("notLogin",JSON.stringify(notLog))
    window.location.href = '/login'


}

const stories = [
    {
      id: 1,
      username: "Ali Khan",
      profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
      storyImage: "https://picsum.photos/id/1011/400/700",
    },
    {
      id: 2,
      username: "Sara Ahmed",
      profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
      storyImage: "https://picsum.photos/id/1025/400/700",
    },
    {
      id: 3,
      username: "Usman Tariq",
      profilePic: "https://randomuser.me/api/portraits/men/76.jpg",
      storyImage: "https://picsum.photos/id/1005/400/700",
    },
    {
      id: 4,
      username: "Ayesha Malik",
      profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
      storyImage: "https://picsum.photos/id/1012/400/700",
    },
    {
      id: 5,
      username: "Hamza Sheikh",
      profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
      storyImage: "https://picsum.photos/id/1035/400/700",
    },
    {
      id: 6,
      username: "Zainab Noor",
      profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
      storyImage: "https://picsum.photos/id/1041/400/700",
    },
    {
      id: 7,
      username: "Bilal Hussain",
      profilePic: "https://randomuser.me/api/portraits/men/54.jpg",
      storyImage: "https://picsum.photos/id/1062/400/700",
    },
    {
      id: 8,
      username: "Hira Salman",
      profilePic: "https://randomuser.me/api/portraits/women/33.jpg",
      storyImage: "https://picsum.photos/id/1074/400/700",
    }
  ];

  let storyStyle = document.getElementById("storiesBox")
  let postContainer = document.getElementById("postContainer")

  storyStyle.innerHTML += stories.map((story)=>{
    return `  <div class="story" style="background-image: url(${story.storyImage});">
    <div class="story-profile" style="background-image: url(${story.profilePic});" >
    </div>
    <div class="story-title">
        <p>${story.username} </p>
    </div>

</div>`
  }).join("");

  postContainer.innerHTML += ` <div class="post-box">
  <div class="top-post-box">
      <div class="top-post-left-box">
          <div class="profile" style="background-image: url(/assests/profile.jfif);">
          </div>
          <div class="flex column" style="margin-left: 5px; justify-content: center;">
              <p class="post-name">Muhammad Fassam</p>
              <p class="date">01/2/2025 20:56pm</p>
          </div>
      </div>
      <div class="flex space">
          <div>
              <i class="fa-solid fa-ellipsis"></i>
          </div>
          <div>
              <i class="fa-solid fa-x"></i>
          </div>
      </div>
  </div>
  <!-- Captions  -->
  <div class="post-caption">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum fugiat
          similique
          earum quo asperiores, aspernatur reprehenderit nisi sint aut corporis harum vel
          laborum
          sequi aliquid porro doloremque voluptas. Inventore et autem labore. Architecto
          aspernatur eaque adipisci voluptates magnam deleniti sequi tenetur, molestias,
          maiores
          facilis minus ipsa, sunt ullam excepturi.</p>
  </div>
  <!-- Post Image  -->
  <div class="post-image"
      style="background-image: url(https://picsum.photos/1080/1080?nature);">
  </div>
  <div class="reactions-box">
      <div class="reactions">
          <div class="like-react"><i class="fa-regular fa-thumbs-up"></i></div>
          <div class="like-react"
              style="background-color: red; margin-left: -4px; z-index: 0;"><i
                  class="fa-regular fa-heart"></i></div>
      </div>
      <div class="flex space" style="color: gray;">
          <p>2 comments</p>
          <p>1 share</p>

      </div>
  </div>
  <!-- likes comments and shares  -->
  <div class="likes-comments-shares">
      <div><i class="fa-regular fa-thumbs-up"></i> <span>Like</span></div>
      <div><i class="fa-regular fa-comment"></i><span>Comments</span></div>
      <div><i class="fa-solid fa-share"></i><span>Share</span></div>
  </div>
</div>`
