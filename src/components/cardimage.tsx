type CardImageProps = {
    image?: string;
    imageAlt?: string;
    badge?: string;
}

export default function CardImage({
    image = "",
    imageAlt = "",
    badge = "",
}: CardImageProps) {
    return (
        <div className="card" style={{ position: "relative" }}>
            {badge && (
                <span
                    style={{
                        position: "absolute",
                        top: 40,
                        left: 40,
                        background: "#fff",
                        color: "#b88b7a",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        borderRadius: "8px",
                        padding: "0.3rem 1rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        fontFamily: "Poppins, sans-serif",
                        zIndex: 2,
                    }}
                >
                    {badge}
                </span>
            )}
            <img
                src={image}
                alt={imageAlt}
                className="card-image"
                style={{ width: "40rem", height: "auto", borderRadius: "16px", objectFit: "cover" }}
            />
        </div>
    );
}


