const username = 'AndersonCaj26'
const url = `https://api.github.com/users/${username}`

fetch(url)
  .then(response => response.json())
  .then(data => {
    const name = document.getElementById('name')
    const userName = document.getElementById('username')
    const userImage = document.getElementById('userimage')
    const userNameLink = document.getElementById('usernamelink')
    const about = document.getElementById('about')
    name.textContent = data.name
    userName.textContent = data.login
    userImage.setAttribute('src', data.avatar_url)
    userNameLink.setAttribute('href', data.html_url)
    about.textContent = data.bio
  })
