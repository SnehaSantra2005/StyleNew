import React from 'react';
import './CategoryShowcase.css';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate hook
import { Link } from 'react-router-dom';
import indianwearImg from '../Assets/IndianWare.png';
import westernwearImg from '../Assets/westernwear.png';
import FootwearImg from '../Assets/footwear.png';
import LingerieImg from '../Assets/Lingerie1.png';
import JewelleryImg from '../Assets/Jewellery1.png';
import BagsImg from '../Assets/Bags1.png';
import SunglassesImg from '../Assets/Sunglasses.png';

const categories = [
    { name: 'Indianwear', img: indianwearImg, path: '/category/Indianware' },
    { name: 'Westernwear', img: westernwearImg, path: '/category/westernwear' },
    { name: 'Footwear', img: FootwearImg, path: '/category/footwear' },
    { name: 'Lingerie', img: LingerieImg, path: '/category/lingerie' },
    { name: 'Jewellery', img: JewelleryImg, path: '/category/jewellery' },
    { name: 'Bags', img: BagsImg, path: 'category/bags' },
    { name: 'Sunglasses', img: SunglassesImg, path: '/category/sunglasses' },
];

const CategoryShowcase = () => {
    const navigate = useNavigate(); // ✅ Hook for navigation

    return (
        <div className="category-showcase">

            <div className="category-cards">
                {categories.map((cat, index) => (
                    <Link to={cat.path}
                        key={index}
                        className="category-card"
                        onClick={() => navigate(cat.path)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={cat.img} alt={cat.name} />
                        <p>{cat.name}</p>
                    </Link>

                ))}

            </div>
        </div>

    );
};

export default CategoryShowcase;
