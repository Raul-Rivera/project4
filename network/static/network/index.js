function editpost(id){

    fetch(`/apipost/${id}`)
.then(response => response.json())
.then(blogpost => {
    cardbody = document.querySelector(`#card-body-${id}`);
    cardbody.innerHTML = `<form id="editform-${blogpost.id}"><div class="form-group"><label for="textarea">Edit your publication:</label>
    <textarea class="form-control" id="textarea-${blogpost.id}" rows="5">${blogpost.content}</textarea><br><button class="btn btn-primary" type="submit">Save</button></form>`;

    const form = document.querySelector(`#editform-${blogpost.id}`);
    form.onsubmit = () => {
        const textarea = document.querySelector(`#textarea-${blogpost.id}`).value;
        fetch(`/apipost/${blogpost.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                content: textarea,
                username: blogpost.username
            })
          })
        showcontent(`${blogpost.id}`);
        return false;
    }
});
}


function showcontent(id){
    cardbody = document.querySelector(`#card-body-${id}`);
    fetch(`/apipost/${id}`)
.then(response => response.json())
.then(blogpost => {
    cardbody.innerHTML = `<p>${blogpost.content}</p>`;
});
}


function likepost(id,likedby){
    console.log(`id:${id}\nliked by:${likedby}`)
    fetch(`/apipost/${id}`)
.then(response => response.json())
.then(blogpost => {
    console.log(blogpost);
    const likescount = blogpost.likes

    fetch(`/likesapi/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            "id":id,
            "likedby":likedby[0],
            "likes":likescount+1
        })
      })
      .then(response => response.json())
      .then(result => {
            console.log(result);
            likesdiv = document.querySelector(`#likes-${id}`)
            likesdiv.innerHTML = `<p><img class="unlikebtn" id="unlikebtn-${id}" src="https://img.icons8.com/color/48/000000/twitter.png"/> <b>${likescount+1}</b></p>`
            unlikebtn = document.querySelector(`#unlikebtn-${id}`)
            unlikebtn.onclick = ()=> {
                unlikepost(id,likedby)
                                       }
      });
});
    }


function unlikepost(id,unlikedby){
    console.log(`id: ${id}\nunlikedby: ${unlikedby}`)
    fetch(`/apipost/${id}`)
    .then(response => response.json())
    .then(bpost => {
                console.log(bpost.likes);
                const likescount = bpost.likes
                fetch(`/likesapi/${id}`, {
                    method: 'DELETE',
                    body: JSON.stringify({
                        "id": id,
                        "unlikedby": unlikedby[0],
                        "likes": likescount-1
                    })
                  })
                  .then(response => response.json())
      .then(result => {
          console.log(result);
          likesdiv = document.querySelector(`#likes-${id}`)
          likesdiv.innerHTML = `<p><img class="likebtn" id="likebtn-${id}" src="https://img.icons8.com/ios-filled/50/000000/twitter.png"/> <b>${likescount-1}</b></p>`
          likebtn = document.querySelector(`#likebtn-${id}`)
          likebtn.onclick = ()=> {
            likepost(id,unlikedby)
                                    }
      });
                    });
}
