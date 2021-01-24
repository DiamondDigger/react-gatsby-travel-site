export const slideFromBottomAnimation = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.target)
    console.log(entry.isIntersecting)
    if (entry.isIntersecting) {
      //   entry.target.style.animation =
      //     "3s easy-in .5s infinite alternate sideSlide"
      entry.target.style.animationDuration = "2s"
      entry.target.style.animationTimingFunction = "easy-out"
      entry.target.style.animationFillMode = "forwards"
      entry.target.style.animationName = "slideFromBottomButton "
    } else {
      entry.target.style.animation = "none"
    }
  })
})

export const slideFromRightAnimation = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.target)
    console.log(entry.isIntersecting)
    if (entry.isIntersecting) {
      //   entry.target.style.animation =
      //     "3s easy-in .5s infinite alternate sideSlide"
      entry.target.style.animationDuration = `${entry.target.dataset.duration}`
      entry.target.style.animationTimingFunction = "easy-out"
      entry.target.style.animationFillMode = "forwards"
      entry.target.style.animationName = "slideFromRight "
    } else {
      entry.target.style.animation = "none"
    }
  })
})
export const topAndBottomAnimation = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.target)
    console.log(entry.isIntersecting)
    if (entry.isIntersecting) {
      //   entry.target.style.animation =
      //     "3s easy-in .5s infinite alternate topAndBottomSlide"
      entry.target.style.animationDuration = "2s"
      entry.target.style.animationTimingFunction = "easy-out"
      entry.target.style.animationFillMode = "forwards"
      entry.target.style.animationName = "topAndBottomSlide "
    } else {
      entry.target.style.animation = "none"
    }
  })
})
export const combineAnimation = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.target)
    console.log(entry.isIntersecting)
    if (entry.isIntersecting) {
      //   entry.target.style.animation =
      //     "3s easy-in .5s infinite alternate combineSlide"
      entry.target.style.animationDuration = "2s"
      entry.target.style.animationTimingFunction = "easy-out"
      entry.target.style.animationFillMode = "forwards"
      entry.target.style.animationName = "combineSlide "
    } else {
      entry.target.style.animation = "none"
    }
  })
})
export const combineAnimationOtherSide = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.target)
    console.log(entry.isIntersecting)
    if (entry.isIntersecting) {
      //   entry.target.style.animation =
      //     "3s easy-in .5s infinite alternate combineSlide"
      entry.target.style.animationDuration = "1.5s"
      entry.target.style.animationTimingFunction = "easy-out"
      entry.target.style.animationFillMode = "forwards"
      entry.target.style.animationName = "combineSlideOtherSide "
    } else {
      entry.target.style.animation = "none"
    }
  })
})
