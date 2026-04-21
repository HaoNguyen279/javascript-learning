import Header from "./components/Header";
import Footer from "./components/Footer";
import { FiMenu, FiChevronUp } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./SearchPage.css";
import searchresult from "./assets/searchresult.png";
const ratingRows = [5, 4, 3, 2, 1];

function RatingRow({ stars = 5, checked = false }) {
  return (
    <label className="rating-row">
      <input type="checkbox" defaultChecked={checked} />
      <span className="custom-check" />
      <span className="stars">
        {Array.from({ length: 5 }).map((_, i) =>
          i < stars ? (
            <FaStar key={i} className="star fill" />
          ) : (
            <FaRegStar key={i} className="star empty" />
          )
        )}
      </span>
    </label>
  );
}

export default function SearchPage() {
  return (
    <div className="search-page">
      <Header />

      <main className="search-main">
        <div className="search-container">
          {/* Sidebar filter */}
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
                {[
                  "Pan-fried",
                  "Stir-fried",
                  "Grilled",
                  "Roasted",
                  "Sauteed",
                  "Baked",
                  "Steamed",
                  "Stewed",
                ].map((item, idx) => (
                  <label key={item} className="check-item">
                    <input type="checkbox" defaultChecked={idx === 2 || idx === 3} />
                    <span className="custom-check" />
                    {item}
                  </label>
                ))}
              </div>
            </section>

            <section className="filter-section">
              <div className="section-title">
                <h4>Time</h4>
                <FiChevronUp />
              </div>

              <div className="time-range">
                <div className="time-labels">
                  <span>30 minutes</span>
                  <span>50 minutes</span>
                </div>
                <div className="fake-slider">
                  <span className="line" />
                  <span className="line-active" />
                  {/* <span className="dot left" /> */}
                  <span className="dot right" />
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

          {/* Empty result */}
          <section className="empty-result">
            <h2>Sorry, no results were found for “cakescascsa”</h2>

            <div className="empty-icon">
                
            <img src={searchresult} alt="No results" />
            </div>

            <p>We have all your Independence Day sweets covered.</p>

            <div className="suggest-tags">
              <span>Sweet Cake</span>
              <span>Black Cake</span>
              <span>Pozole Verde</span>
              <span>Healthy food</span>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}