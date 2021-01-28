export const scrollAnimation = () => {
  const section = document.querySelector("#trips")
  console.log("section", section)
  let screenPosition
  let sectionPosition
  if (section !== null) {
    sectionPosition = section.getBoundingClientRect().top
    console.log("sectionPosition:", sectionPosition)
    screenPosition = window.innerHeight / 2
    console.log("screenPosition:", screenPosition)

    if (sectionPosition < screenPosition && sectionPosition > -screenPosition) {
      console.log("animation is runnning")
      return true
    } else if (sectionPosition < -screenPosition) {
      console.log("stop animation")
      return false
    }
  } else {
    console.log(new Date(), "no section found")
    console.log("document:", document)
  }
}
