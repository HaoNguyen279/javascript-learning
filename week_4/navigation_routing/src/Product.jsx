import { NavLink, useParams } from "react-router-dom"

function Product() {
    const { id } = useParams();
  return (
    <div>
        <h1>Product {id}</h1>
    </div>
  )
}

export default Product