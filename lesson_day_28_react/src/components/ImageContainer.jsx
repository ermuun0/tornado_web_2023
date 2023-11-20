function ImageContainer({ containerId, ImgSrc, altText }) {
    return (
        <div className="image-container" id={containerId}>
            <img src={ImgSrc} alt={altText} />
        </div>
    )
}
export default ImageContainer;