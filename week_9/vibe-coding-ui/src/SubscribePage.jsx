import Header from "./components/Header";
import Footer from "./components/Footer";
import { FiChevronRight, FiCheckCircle, FiPackage } from "react-icons/fi";
import "./SubscribePage.css";
import subscribeHero from "./assets/subscribe.png"; // đổi sang ảnh phù hợp nếu có

const benefits = [
  "20,000+ recipes to suit all tastes and skill levels",
  "Filter for diets, cook times, and more",
  "Personal Recipe Box for favorites",
  "Gain exclusive access to our subscriber-only mobile app.",
];

const accessItems = [
  {
    title: "Cooking",
    desc: "Enjoy recipes, advice and inspiration for any occasion.",
  },
  {
    title: "Wirecutter",
    desc: "Explore independent reviews for thousands of products.",
  },
  {
    title: "Games",
    desc: "Unwind with Spelling Bee, Wordle, The Crossword",
  },
  {
    title: "The Athletic",
    desc: "Discover in-depth, personalized sports journalism.",
  },
];

export default function SubscribePage() {
  return (
    <div className="subscribe-page">
      <Header />

      <main className="subscribe-main">
        <div className="subscribe-container">
          {/* breadcrumb */}
          <div className="subscribe-breadcrumb">
            <span>Recipes</span>
            <FiChevronRight />
            <span className="active">Subscribe</span>
          </div>

          {/* hero */}
          <section className="subscribe-hero">
            <div className="subscribe-left">
              <p className="exclusive-text">
                This recipe is exclusively available to subscribers
              </p>

              <h1>Join now to access effortless, hassle-free recipes</h1>

              <ul className="benefit-list">
                {benefits.map((item) => (
                  <li key={item}>
                    <FiCheckCircle />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="price-box">
                <h2>0.25USD / Week</h2>
                <p>Billed as $1 every 4 weeks for the first year</p>
              </div>

              <button className="subscribe-btn">
                <FiPackage />
                <span>Subscribe Now</span>
              </button>

              <p className="cancel-text">Cancel or Pause anytime</p>
            </div>

            <div className="subscribe-right">
              <img
                src={subscribeHero}
                alt="Subscription hero"
              />
            </div>
          </section>

          {/* all access */}
          <section className="all-access">
            <h2>An All Access subscription includes</h2>

            <div className="access-grid">
              {accessItems.map((item) => (
                <article className="access-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* pricing block */}
          <section className="subscribe-plan">
            <p className="plan-brand">Chefify</p>
            <h2>Subscribe to Chefify Cooking only</h2>
            <p className="plan-desc">
              Enjoy thousands of delicious recipes for every taste, plus advice
              and inspiration daily.
            </p>

            <div className="plan-options">
              <label className="plan-option active ">
                <input type="radio" name="plan" defaultChecked />
                <span>$2/month (Billed every 4 weeks)</span>
              </label>

              <label className="plan-option">
                <input type="radio" name="plan" />
                <span>$20/year (Billed one annually)</span>
              </label>
            </div>

            <button className="subscribe-btn center">
              <FiPackage />
              <span>Subscribe Now</span>
            </button>

            <p className="cancel-text">Cancel or Pause anytime</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}