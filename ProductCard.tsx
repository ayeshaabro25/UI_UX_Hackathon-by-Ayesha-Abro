import React from 'react';

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  department: string;
  originalPrice: string;
  discountPrice: string;
  colors: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  department,
  originalPrice,
  discountPrice,
  colors = [],
}) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={imageSrc} alt={imageAlt} className="product-image" />
      </div>
      <h4 className="product-title">{title}</h4>
      <p className="department">{department}</p>
      <p className="price">
        <span className="original-price">{originalPrice}</span>{" "}
        <span className="discount-price">{discountPrice}</span>
      </p>
      <div className="color-options">
        {colors.map((color, index) => (
          <span key={index} className="color-dot" style={{ backgroundColor: color }}></span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
