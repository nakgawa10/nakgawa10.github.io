import "./image_center.css";

function ImageCenter(props: { border: string; imageName: string }) {
  const path:string = "./images/" + props.imageName;
  let classes = "image ";
  switch (props.border) {
    case "blue": {
      classes = classes + "back-blue";
      break;
    }
    case "grey": {
      classes = classes + "back-grey";
      break;
    }
    case "green": {
        classes = classes + "back-green";
        break;
      }
    case "orange": {
      classes = classes + "back-orange";
      break;
    }
    case "light-blue": {
      classes = classes + "back-light-blue";
      break;
    }

  }

  return (
    <div className={classes}>
      <img src={path} alt="nakul" />
    </div>
  );
}

export default ImageCenter;
