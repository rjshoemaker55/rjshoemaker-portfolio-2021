export const colors = (color, opacity) => {
  let a = 1
  if (opacity) {
    a = opacity
  }
  switch (color) {
    case 'red':
      return `rgba(255, 179, 173, ${a})`
    case 'yellow':
      return `rgba(255, 242, 133, ${a})`
    case 'green':
      return `rgba(170, 247, 125, ${a})`
    case 'blue':
      return `rgba(185, 249, 248, ${a})`
    case 'purple':
      return `rgba(221, 170, 255, ${a})`
  }
}
