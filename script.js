function showMore(event) {
    event.preventDefault()
    event.target.previousSibling.previousSibling.classList.remove('post-para')
}

function likes() {
    i = document.getElementsByClassName('likes-counter')[0]   
    i.innerHTML = Number(i.innerHTML) + 1
}

function follow(event) {
    if (event.target.innerHTML === "Following") {
        event.target.innerHTML = "+ Follow"
        fcount = document.getElementById('follower-count')
        fcount.innerHTML = Number(fcount.innerHTML) - 2
    } else
        event.target.innerHTML = "Following"
        fcount = document.getElementById('follower-count')
        fcount.innerHTML = Number(fcount.innerHTML) + 1

}