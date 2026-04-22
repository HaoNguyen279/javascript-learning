import Header from "./components/Header";
import Footer from "./components/Footer";
import { FiMenu, FiChevronUp, FiBookmark, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./SearchPage.css";
import searchresult from "./assets/searchresult.png";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const ratingRows = [5, 4, 3, 2, 1];
const MIN_TIME = 0;
const MAX_TIME = 120;

const saladRecipes = [
  {
    id: 1,
    title: "Cucumber salad, cherry tomatoes",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Italian-style tomato salad",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Potato Salad",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Salad with cabbage and shrimp",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Five-color salad",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Corn Salad",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Salad with cabbage and shrimp",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Lotus delight salad",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Avocado Salad",
    time: "32 minutes",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop",
  },
];

function RatingRow({ stars = 5, checked = false }) {
  return (
    <label className="rating-row">
      <input type="checkbox" defaultChecked={checked} />
      <span className="custom-check" />
      <span className="stars">
        {Array.from({ length: 5 }).map((_, i) =>
          i < stars ? <FaStar key={i} className="star fill" /> : <FaRegStar key={i} className="star empty" />
        )}
      </span>
    </label>
  );
}

function RecipeCard({ item }) {
  return (
    <article className="recipe-card">
      <img src={item.image} alt={item.title} className="recipe-thumb" />
      <div className="recipe-body">
        <div className="recipe-row">
          <h3>{item.title}</h3>
          <button className="bookmark-btn" aria-label="save recipe">
            <FiBookmark />
          </button>
        </div>
        <span className="recipe-time">{item.time}</span>
      </div>
    </article>
  );
}

export default function SearchPage() {
  const { searchtext = "" } = useParams();
  const keyword = decodeURIComponent(searchtext).toLowerCase().trim();

  const [minTime, setMinTime] = useState(30);
  const [maxTime, setMaxTime] = useState(50);

  const rangeStyle = useMemo(() => {
    const left = ((minTime - MIN_TIME) / (MAX_TIME - MIN_TIME)) * 100;
    const right = ((maxTime - MIN_TIME) / (MAX_TIME - MIN_TIME)) * 100;
    return { left: `${left}%`, width: `${right - left}%` };
  }, [minTime, maxTime]);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    setMinTime(Math.min(value, maxTime - 1));
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    setMaxTime(Math.max(value, minTime + 1));
  };

  const isSalad = keyword === "salad";
  const recipes = isSalad ? saladRecipes : [];

  return (
    <div className="search-page">
      <Header />

      <main className="search-main">
        <div className="search-container">
          {/* Sidebar */}
          <aside className="filters-card">
            <div className="filters-head">
              <FiMenu />
              <h3>FILTERS</h3>
            </div>

            <section className="filter-section">
              <div className="section-title">
                <h4>Type</h4>
                <FiChevronUp />
              </div>

              <div className="check-grid">
                {["Pan-fried", "Stir-fried", "Grilled", "Roasted", "Sauteed", "Baked", "Steamed", "Stewed"].map(
                  (item, idx) => (
                    <label key={item} className="check-item">
                      <input type="checkbox" defaultChecked={idx === 2 || idx === 3} />
                      <span className="custom-check" />
                      {item}
                    </label>
                  )
                )}
              </div>
            </section>

            <section className="filter-section">
              <div className="section-title">
                <h4>Time</h4>
                <FiChevronUp />
              </div>

              <div className="time-range">
                <div className="time-labels">
                  <span>{minTime} minutes</span>
                  <span>{maxTime} minutes</span>
                </div>

                <div className="range-slider" aria-label="Time range slider">
                  <div className="range-track" />
                  <div className="range-progress" style={rangeStyle} />

                  <input
                    type="range"
                    min={MIN_TIME}
                    max={MAX_TIME}
                    value={minTime}
                    onChange={handleMinChange}
                    className="thumb thumb--left"
                    aria-label="Minimum cooking time"
                  />
                  <input
                    type="range"
                    min={MIN_TIME}
                    max={MAX_TIME}
                    value={maxTime}
                    onChange={handleMaxChange}
                    className="thumb thumb--right"
                    aria-label="Maximum cooking time"
                  />
                </div>
              </div>
            </section>

            <section className="filter-section">
              <div className="section-title">
                <h4>Rating</h4>
                <FiChevronUp />
              </div>

              <div className="rating-list">
                {ratingRows.map((n, i) => (
                  <RatingRow key={n} stars={n} checked={i >= 2} />
                ))}
              </div>
            </section>

            <button className="apply-btn">Apply</button>
          </aside>

          {/* Content */}
          <section className="result-content">
            {isSalad ? (
              <>
                <div className="result-head">
                  <h2>Salad (32)</h2>
                  <select className="sort-select" defaultValue="a-z">
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                  </select>
                </div>

                <div className="recipes-grid">
                  {recipes.map((item) => (
                    <RecipeCard key={item.id} item={item} />
                  ))}
                </div>

                <div className="pagination">
                  <button className="page-btn icon">
                    <FiChevronLeft />
                  </button>
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <button className="page-btn">4</button>
                  <button className="page-btn">...</button>
                  <button className="page-btn">10</button>
                  <button className="page-btn">11</button>
                  <button className="page-btn icon">
                    <FiChevronRight />
                  </button>
                </div>
              </>
            ) : (
              <section className="empty-result">
                <h2>Sorry, no results were found for “{searchtext}”</h2>
                <div className="empty-icon">
                  <img src={searchresult} alt="No results" />
                </div>
              </section>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}