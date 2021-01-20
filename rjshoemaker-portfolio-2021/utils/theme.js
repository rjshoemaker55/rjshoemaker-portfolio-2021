export const colors = (color, opacity) => {
  console.log(color)
  let a = 1
  if (opacity) {
    a = opacity
  }
  switch (color) {
    case 'denim':
      return `rgba(73, 112, 145, ${a})`
    case 'salmon':
      return `rgba(244, 158, 145, ${a})`
    case 'spruce':
      return `rgba(108, 197, 169, ${a})`
    case 'seagrass':
      console.log('here')
      return `rgba(224, 233, 206, ${a})`
    case 'aqua':
      return `rgba(39, 164, 221, ${a})`
    case 'olive':
      return `rgba(206, 184, 98, ${a})`
    case 'lime':
      return `rgba(154, 189, 59, ${a})`
    case 'hotpink':
      return `rgba(235, 69, 140, ${a})`
  }
}
