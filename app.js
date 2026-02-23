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

  const facebookPosts = [
    {
      id: 1,
      title: "New Art Supplies Available 🎨",
      description: "Explore our latest collection of premium art supplies. Perfect for beginners and professional artists.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      likes: 120,
      comments: 25,
      shares: 10,
      date: "2026-02-20",
      username: "Fassam"
    },
 
  ];

  let storyStyle = document.getElementById("storiesBox")
  let postContainer = document.getElementById("postContainer")
  let closePop = document.getElementById("closePop")
  let postPop = document.getElementById("create-post-popop")
  let currentUserData = JSON.parse(localStorage.getItem("notLogin"))
  let createPostBtn = document.getElementById("createPost")


  

  

  storyStyle.innerHTML += stories.map((story)=>{
    return `  <div class="story" style="background-image: url(${story.storyImage});">
    <div class="story-profile" style="background-image: url(${story.profilePic});" >
    </div>
    <div class="story-title">
        <p>${story.username} </p>
    </div>

</div>`
  }).join("");

const postHtml = (post)=>{
  postContainer.innerHTML += ` <div class="post-box">
  <div class="top-post-box">
      <div class="top-post-left-box">
          <div class="profile" style="background-image: url(/assests/profile.jfif);">
          </div>
          <div class="flex column" style="margin-left: 5px; justify-content: center;">
              <p class="post-name">${post.username}</p>
              <p class="date">${post.date}</p>
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
      <p>${post.description}</p>
  </div>
  <!-- Post Image  -->
  <div class="post-image"
      style="background-image: url(${post.image});">
  </div>
  <div class="reactions-box">
      <div class="reactions">
          <div class="like-react"><i class="fa-regular fa-thumbs-up"></i></div>
          <div class="like-react"
              style="background-color: red; margin-left: -4px; z-index: 0;"><i
                  class="fa-regular fa-heart"></i></div>
      </div>
      <div class="flex space" style="color: gray;">
          <p>${post.likes} comments</p>
          <p>${post.shares} share</p>

      </div>
  </div>
  <!-- likes comments and shares  -->
  <div class="likes-comments-shares">
      <div><i class="fa-regular fa-thumbs-up"></i> <span>Like</span></div>
      <div><i class="fa-regular fa-comment"></i><span>Comments</span></div>
      <div><i class="fa-solid fa-share"></i><span>Share</span></div>
  </div>
</div>`

}
const createPost = ()=>{
  let postFromLS = JSON.parse(localStorage.getItem("posts"))
  let createPosts = postFromLS?.map((post)=>{
    return postHtml(post)
  })
  
}

createPost()

closePop.addEventListener("click",()=>{
  postPop.style.display = "none"

})
const showPop = ()=>{
  postPop.style.display = "flex"
  
}

createPostBtn.addEventListener("click", showPop)


const submitHandler = (e)=>{
  e.preventDefault()
  let caption = document.getElementById("caption")
  let image = document.getElementById("image")
  postCaption = caption.value
  postImage = image.value

  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  if(postCaption.trim() == "" ){
    alert("Please enter a caption for your post")
  }

  const newPost = {
    description: `${postCaption}`,
    image: `${postImage}`,
    likes: 0,
    comments: 0,
    username: `${currentUserData.firstName}`,
    date: new Date().toLocaleDateString(),
    shares: 0
  }
posts.unshift(newPost)

 caption.value = "";
 image.value = "";
 postPop.style.display = "none"




localStorage.setItem("posts",JSON.stringify(posts))

createPost()
 

  
 

}
 