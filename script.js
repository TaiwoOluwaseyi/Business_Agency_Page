// Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
  navbar.classList.toggle('change')
  menu.classList.toggle('change')
})
// End of Navbar

// section 2 video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i') 
const bar = document.querySelector('.video bar')

const playPause = () => {
  if(video.paused) {
    video.play()
    btn.className = 'far fa-pause-circle'
    video.style.pacity = '0.7'
  } else {
     video.pause()
    btn.className = 'far fa-play-circle'
    video.style.pacity = "0.3"
  }
}

btn.addEventListener('click', () => {
  playPause()
})
// End of section 2 video