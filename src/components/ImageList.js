import ImageShow from "./ImageShow";
import './imageList.css'

function ImageList({images}){
    const renderdImages = images.map((image)=>{
        return (
            <ImageShow key={image.id} image={image}/>
        ); 
    });

    return <div className="image-list">{renderdImages}</div>
}

export default ImageList;