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

  storyStyle.innerHTML += stories.map((story)=>{
    return `  <div class="story" style="background-image: url(${story.storyImage});">
    <div class="story-profile" style="background-image: url(${story.profilePic});" >
    </div>
    <div class="story-title">
        <p>${story.username} </p>
    </div>

</div>`
  }).join("")
