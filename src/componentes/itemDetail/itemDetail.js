const ItemDetail = ({id,name,img,category,description, stock,price}) => {
    return (
        <div>   
            <img src={img} />
            <h4>
                {name}
            </h4>
            <p>
                {price}
            </p>
            <p>
                {description}
            </p>
            <p>
                {stock}
            </p>

        </div>

    )
}
export default ItemDetail