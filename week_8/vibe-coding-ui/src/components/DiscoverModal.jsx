import "./DiscoverModal.css";

export default function DiscoverModal({ isOpen, onClose, onNext, onSkip }) {
  if (!isOpen) return null;

  return (
    <div className="discover-overlay" onClick={onClose}>
      <div className="discover-modal" onClick={(e) => e.stopPropagation()}>
        <button className="discover-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <h2 className="discover-title">Discover Chefify</h2>
        <p className="discover-subtitle">
          Easy and delicious cooking instructions right here. Start exploring now!
        </p>

        <div className="discover-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop"
            alt="Food"
            className="discover-image"
          />
        </div>

        <div className="discover-dots">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
        </div>

        <button className="discover-next" onClick={onNext}>
          Next
        </button>

        <button className="discover-skip" onClick={onSkip}>
          Skip
        </button>
      </div>
    </div>
  );
}