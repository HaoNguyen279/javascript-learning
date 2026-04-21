import Header from "./components/Header";
import Footer from "./components/Footer";
import { FiBookmark, FiChevronRight, FiShare2, FiChevronLeft } from "react-icons/fi";
import "./HomePage.css";
import { useState } from "react";

// Đổi ảnh theo assets của bạn nếu muốn
const recipes = [
  { id: 1, title: "Italian-style tomato salad", time: "14 minutes", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Vegetable and shrimp spaghetti", time: "15 minutes", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Lotus delight salad", time: "20 minutes", image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Snack cakes", time: "21 minutes", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Salad with cabbage and shrimp", time: "32 minutes", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Bean, shrimp, and potato salad", time: "32 minutes", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=800&auto=format&fit=crop" },
  { id: 7, title: "Sunny-side up fried eggs", time: "32 minutes", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" },
  { id: 8, title: "Lotus delight salad", time: "32 minutes", image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=800&auto=format&fit=crop" },
];

export default function HomePage() {
      const [openLogin, setOpenLogin] = useState(true);
  return (
    <div className="home-page">
      <Header />
      {/* <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} /> */}
      <main className="home-main">
        <div className="container">
          {/* breadcrumb */}
          <div className="breadcrumb">
            <span>Home</span>
            <FiChevronRight />
            <span className="active">Your Recipe Box</span>
          </div>

          {/* profile */}
          <section className="profile-box">
            <h1>Emma Gonzalez&apos;s Recipe Box</h1>

            <div className="profile-row">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                alt="Emma"
                className="profile-avatar"
              />

              <div className="profile-info">
                <p>
                  Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor
                  at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks
                  and food publications. Originally from East Los Angeles, Emma now resides in New York City, where
                  she explores a wide range of culinary delights.
                </p>

                <div className="profile-actions">
                  <span className="subs">6.5k Subscribes</span>
                  <button className="share-btn">
                    Share <FiShare2 />
                  </button>
                </div>
              </div>
            </div>

            <div className="tabs">
              <button className="tab active">Saved Recipes</button>
              <button className="tab">Folders</button>
              <button className="tab">Recipes by Genevieve</button>
            </div>
          </section>

          {/* cards */}
          <section className="recipe-grid">
            {recipes.map((item) => (
              <article className="recipe-card" key={item.id}>
                <img src={item.image} alt={item.title} className="recipe-image" />
                <div className="recipe-content">
                  <div className="title-row">
                    <h3>{item.title}</h3>
                    <button className="bookmark-btn" aria-label="Save">
                      <FiBookmark />
                    </button>
                  </div>
                  <span className="time-pill">{item.time}</span>
                </div>
              </article>
            ))}
          </section>

          {/* pagination */}
          <div className="pagination">
            <button className="page-nav"><FiChevronLeft /></button>
            <button className="page-item active">1</button>
            <button className="page-item">2</button>
            <button className="page-item">3</button>
            <button className="page-item">4</button>
            <button className="page-item">...</button>
            <button className="page-item">10</button>
            <button className="page-item">11</button>
            <button className="page-nav"><FiChevronRight /></button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}