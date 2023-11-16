import "./FeaturedProperties.css";

const HomeCard = ({ home }) => {
    return (
      <div className="home-card">
        <img src={home.imageUrl} alt={home.fpName} className="home-image" />
        <div className="card-details">
          <h3>{home.title}</h3>
          <p>{home.description}</p>
          <p>{home.fpCity}</p>
          <p>Price: ${home.price} per night</p>
          <button>9.5</button>
        </div>
      </div>
    );
  };
  
  const FeaturedProperties = ({ homes }) => {
    return (
      <div className="home-list">
        {homes.map((home, index) => (
          <HomeCard key={index} home={home} />
        ))}
      </div>
    );
  };

export default FeaturedProperties;