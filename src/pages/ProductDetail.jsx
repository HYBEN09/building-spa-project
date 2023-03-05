import { Link, useParams } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productsId}</p>
      <p>
        {/* 이전에 활성이었던 경로와 라우트로 돌아가라 */}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
