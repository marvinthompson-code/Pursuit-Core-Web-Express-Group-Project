document.addEventListener("DOMContentLoaded", () =>{

    let divProfilePic = document.querySelector("#profile_pic")
    let  divAlbums = document.querySelector("#albums")
    let divUserInfo = document.querySelector("#users_info")
    let divUserPost = document.querySelector("#users_post")

    const profilePic = async () =>{
        try{
          let res = await axios.get("http://localhost:3000/albums/5");
        // debugger
        let ppic = res.data.album[0].picture_url

        let img = document.createElement("img")
        img.src =ppic
        divProfilePic.appendChild(img)
        } 
          catch(err) {
              console.log(err)
              debugger
          }
      }

      const userInfo = async () =>{
        try{
          let res = await axios.get("http://localhost:3000/users/5");
        // debugger
        let userKeys = Object.keys(res.data.user)
        let usersi = Object.values(res.data.user)

        let ul = document.querySelector("#info")
        
        
        // for(let key of usersi){
        //     let i = 0;
        //     // debugger
        //     let label = document.createElement("label")
        //     label.innerText = userKeys[i]
        //     let p = document.createElement("p")
        //     p.innerText =  key 
        //     let li = document.createElement("li")
        //     li.innerText = key 
        //     // debugger
        //     divUserInfo.appendChild(label)
        //     i++

            
        //     // ul.appendChild(li)
        // }

        for(let i =0; i < userKeys.length; i++){
            let label = document.createElement("label")
            if(userKeys[i] === "orientation"){
                label.innerText = "What im looking for:"
                
            }else {
                label.innerText = userKeys[i] + ":"
            }
            
            let p = document.createElement("p")
            p.innerText =  usersi[i] 
            divUserInfo.appendChild(label)
            divUserInfo.appendChild(p)
            let br =document.createElement("br")
            divUserInfo.appendChild(br)
        }
        // divUserInfo.appendChild(ul)
        } 
          catch(err) {
              console.log(err)
              debugger
          }
      }

      const userPost = async () =>{
        try{
          let res = await axios.get("http://localhost:3000/posts/5");
        // debugger
        let usersi = res.data.userPosts[0].body
        
        let p = document.createElement("p")
        p.innerText = usersi 
        // debugger
        divUserPost.appendChild(p)
        
        } 
          catch(err) {
              console.log(err)
              debugger
          }
      }


   
profilePic()
userInfo()
userPost()
})