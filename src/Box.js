
/**
 * Props:
 * -backgroundColor
 * -width
 * -height
 *
 * States:
 * -none
  */
function Box({ backgroundColor, width, height }){

  console.log('rendering box');
  console.log('backgroundColor', backgroundColor);
  console.log('width', width);
  console.log('height', height);


  const style = {
    backgroundColor: `${backgroundColor}`,
    width: `${width}px`,
    height: `${height}px`
  }

  return (
    <div style={style}>
    </div>
  )
}

export default Box;