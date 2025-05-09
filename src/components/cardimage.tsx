type CardImageProps ={
    image?: string;
    imageAlt?: string;
    title?: string;
    description?: string;
   
}
export default function CardImage({
    image="",
    imageAlt="",
    title="",
    description="",
   
}: CardImageProps){
    return(
        <div className="card">
            <img src={image} alt={imageAlt} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
       </div>
    )
}


