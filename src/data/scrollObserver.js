const sideAnimation = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.target)
    console.log(entry.isIntersecting)
    if (entry.isIntersecting) {
      entry.target.style.animation =
        "3s easy-in .5s infinite alternate sideSlide"
    } else {
      entry.target.style.animation = "none"
    }
  })
})
const topAndBottomAnimation = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.target)
    console.log(entry.isIntersecting)
    if (entry.isIntersecting) {
      entry.target.style.animation =
        "3s easy-in .5s infinite alternate topAndBottomSlide"
    } else {
      entry.target.style.animation = "none"
    }
  })
})
const combineAnimation = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.target)
    console.log(entry.isIntersecting)
    if (entry.isIntersecting) {
      entry.target.style.animation =
        "3s easy-in .5s infinite alternate combineSlide"
      entry.target.style.animationName = "combineSlide "
    } else {
      entry.target.style.animation = "none"
    }
  })
})

export const animateSections = (arg1, arg2, arg3) => {
  sideAnimation.observe(arg1)
  topAndBottomAnimation.observe(arg2)
  combineAnimation.observe(arg3)

  console.log("animateSection invoked")
}
