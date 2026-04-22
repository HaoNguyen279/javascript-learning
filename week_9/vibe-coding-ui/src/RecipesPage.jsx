import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FiHeart, FiChevronRight } from "react-icons/fi";
import "./RecipesPage.css";

const RecipesPage = () => {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Summer Recipes Data
  const summerRecipes = [
    {
      id: 1,
      title: "Italian-style tomato salad",
      duration: "14 mins",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Spaghetti with vegetables and shrimp",
      duration: "15 mins",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Lotus delight salad",
      duration: "20 mins",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Snack cakes",
      duration: "21 mins",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
    },
  ];

  // Video Recipes Data
  const videoRecipes = [
    {
      id: 5,
      title: "Salad with cabbage and shrimp",
      duration: "32 mins",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Salad of cove beans, shrimp and potatoes",
      duration: "32 mins",
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Sunny-side up fried egg",
      duration: "32 mins",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Lotus delight salad",
      duration: "32 mins",
      image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=800&auto=format&fit=crop",
    },
  ];

  // Editor's Pick Data
  const editorsPick = [
    {
      id: 9,
      title: "Stuffed sticky rice ball",
      author: "Jennifer King",
      duration: "45 mins",
      description: "Sticky rice or sticky rice, glutinous rice and delicious",
      image: "https://images.unsplash.com/photo-1604521209402-922f4e89590e?q=80&w=800&auto=format&fit=crop",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 10,
      title: "Strawberry smoothie",
      author: "Matthew Martinez",
      duration: "5 mins",
      description: "Smooth and creamy strawberry smoothie. Made with fresh strawberries, this smoothie offers a creamy flavor effect.",
      image: "https://images.unsplash.com/photo-1590621506255-a0f55f9e3f8e?q=80&w=800&auto=format&fit=crop",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 11,
      title: "Latte Art",
      author: "Sarah Hill",
      duration: "10 mins",
      description: "Latte art is the craft of creating captivating designs on the surface of a latte",
      image: "https://images.unsplash.com/photo-1579701111700-9cb3002b2b4d?q=80&w=800&auto=format&fit=crop",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 12,
      title: "Butter fried noodles",
      author: "Julia Lopez",
      duration: "25 mins",
      description: "Butter fried noodles. Silky noodles cooked in butter for a delicious and satisfying meal.",
      image: "https://images.unsplash.com/photo-1569718776414-36251ac4c0f1?q=80&w=800&auto=format&fit=crop",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
  ];

  // Featured Recipe
  const featuredRecipe = {
    title: "Salad Caprese",
    description:
      "Classic Italian Salad Caprese rose techniques, fresh mozzarella herbs, olive oil and balsamic vinegar create a refreshing dish for lunch or appetizer.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    duration: "10 mins",
    servings: "2 servings",
  };

  return (
    <div className="recipes-page">
      <Header />

      <main className="recipes-main">
        {/* Hero Section - Featured Recipe */}
        <section className="featured-section">
          <div className="featured-container">
            <div className="featured-image">
              <img src={featuredRecipe.image} alt={featuredRecipe.title} />
              <div className="featured-label">Dish of the day</div>
            </div>
            <div className="featured-content">
              <h2>{featuredRecipe.title}</h2>
              <p>{featuredRecipe.description}</p>
              <div className="featured-meta">
                <span>{featuredRecipe.duration}</span>
                <span>•</span>
                <span>{featuredRecipe.servings}</span>
              </div>
              <button className="cta-btn">View recipe</button>
            </div>
          </div>
        </section>

        <div className="container">
          {/* Summer Recipes Section */}
          <section className="recipes-section">
            <h2 className="section-title">This Summer Recipes</h2>
            <p className="section-subtitle">
              We have all your Independence Day sweets covered.
            </p>

            <div className="recipes-grid">
              {summerRecipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card">
                  <div className="recipe-image-wrapper">
                    <img src={recipe.image} alt={recipe.title} />
                    <button
                      className="like-btn"
                      onClick={() => toggleLike(recipe.id)}
                    >
                      <FiHeart
                        fill={liked[recipe.id] ? "#ef4b8f" : "none"}
                        color={liked[recipe.id] ? "#ef4b8f" : "#ef4b8f"}
                      />
                    </button>
                  </div>
                  <h3>{recipe.title}</h3>
                  <p className="recipe-duration">{recipe.duration}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Video Recipes Section */}
          <section className="recipes-section">
            <h2 className="section-title">Recipes With Videos</h2>
            <p className="section-subtitle">
              Cooking Up Culinary Creations with Step-by-Step Videos
            </p>

            <div className="recipes-grid">
              {videoRecipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card">
                  <div className="recipe-image-wrapper">
                    <img src={recipe.image} alt={recipe.title} />
                    <button
                      className="like-btn"
                      onClick={() => toggleLike(recipe.id)}
                    >
                      <FiHeart
                        fill={liked[recipe.id] ? "#ef4b8f" : "none"}
                        color={liked[recipe.id] ? "#ef4b8f" : "#ef4b8f"}
                      />
                    </button>
                  </div>
                  <h3>{recipe.title}</h3>
                  <p className="recipe-duration">{recipe.duration}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Editor's Pick Section */}
          <section className="recipes-section">
            <h2 className="section-title">Editor's pick</h2>
            <p className="section-subtitle">
              Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
            </p>

            <div className="editors-pick-grid">
              {editorsPick.map((item) => (
                <div key={item.id} className="editor-pick-card">
                  <div className="editor-pick-image">
                    <img src={item.image} alt={item.title} />
                    <button
                      className="like-btn"
                      onClick={() => toggleLike(item.id)}
                    >
                      <FiHeart
                        fill={liked[item.id] ? "#ef4b8f" : "none"}
                        color={liked[item.id] ? "#ef4b8f" : "#ef4b8f"}
                      />
                    </button>
                  </div>
                  <div className="editor-pick-content">
                    <h3>{item.title}</h3>
                    <div className="author-info">
                      <img
                        src={item.authorImage}
                        alt={item.author}
                        className="author-avatar"
                      />
                      <span className="author-name">{item.author}</span>
                    </div>
                    <p className="editor-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecipesPage;
