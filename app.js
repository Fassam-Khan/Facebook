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
    {
      id: 2,
      title: "Sketching Essentials ✏️",
      description: "High quality sketchbooks, pencils and charcoal now in stock. Order today!",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      likes: 98,
      comments: 18,
      shares: 6,
      date: "2026-02-18",
      username: "Ali Khan"

    },
    {
      id: 3,
      title: "Acrylic Colors Sale 🔥",
      description: "Get up to 20% OFF on selected acrylic paints. Limited time offer!",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      likes: 210,
      comments: 40,
      shares: 22,
      date: "2026-02-15",
      username: "Sara Ahmed"
    },
    {
      id: 4,
      title: "Customer Artwork Feature 🖌️",
      description: "Check out this amazing artwork made using our supplies. Tag us to get featured!",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      likes: 175,
      comments: 30,
      shares: 12,
      date: "2026-02-12",
      username: "Sara Ahmed"

    },
    {
      id: 5,
      title: "Watercolor Collection 💧",
      description: "Premium watercolor sets now available. Perfect for landscapes and portraits.",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      likes: 134,
      comments: 20,
      shares: 8,
      date: "2026-02-10",
      username: "Sara Ahmed"

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
  let createPosts = facebookPosts.map((post)=>{
    return postHtml(post)
  })
  
}

createPost()
 