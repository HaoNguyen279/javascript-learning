import {
  FiGrid,
  FiFolder,
  FiUsers,
  FiPieChart,
  FiMessageSquare,
  FiCode,
  FiBell,
  FiHelpCircle,
  FiSearch,
  FiShoppingCart,
  FiDollarSign,
  FiUser,
  FiDownload,
  FiUpload,
  FiEdit2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import "./DashboardPage.css";

// Đổi path ảnh theo assets của bạn
import avatar from "./assets/react.svg";
import promoImg from "./assets/promo.png";

const rows = [
  { name: "Elizabeth Lee", company: "AvatarSystems", value: "$359", date: "10/07/2023", status: "New" },
  { name: "Carlos Garcia", company: "SmoozeShift", value: "$747", date: "24/07/2023", status: "New" },
  { name: "Elizabeth Bailey", company: "Prime Time Telecom", value: "$564", date: "08/08/2023", status: "In-progress" },
  { name: "Ryan Brown", company: "OmniTech Corporation", value: "$541", date: "31/08/2023", status: "In-progress" },
  { name: "Ryan Young", company: "DataStream Inc.", value: "$769", date: "01/05/2023", status: "Completed" },
  { name: "Hailey Adams", company: "FlowRush", value: "$922", date: "10/06/2023", status: "Completed" },
];

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="db-sidebar">
        <div className="db-logo">
          <span className="shape pink" />
          <span className="shape blue" />
          <span className="shape yellow" />
          <strong>Logo</strong>
        </div>

        <nav className="db-nav">
          <button className="db-nav-item active"><FiGrid /> Dashboard</button>
          <button className="db-nav-item"><FiFolder /> Projects</button>
          <button className="db-nav-item"><FiUsers /> Teams</button>
          <button className="db-nav-item"><FiPieChart /> Analytics</button>
          <button className="db-nav-item"><FiMessageSquare /> Messages</button>
          <button className="db-nav-item"><FiCode /> Integrations</button>
        </nav>

        <div className="db-promo">
          <img src={promoImg} alt="Promo" />
          <h4>V2.0 is available</h4>
          <button>Try now</button>
        </div>
      </aside>

      {/* Main */}
      <section className="db-main">
        {/* topbar */}
        <div className="db-topbar">
          <h1>Dashboard</h1>
          <div className="db-top-actions">
            <div className="db-search">
              <FiSearch />
              <input placeholder="Search..." />
            </div>
            <button className="icon-btn"><FiBell /></button>
            <button className="icon-btn"><FiHelpCircle /></button>
            <img src={avatar} alt="User" className="top-avatar" />
          </div>
        </div>

        {/* overview */}
        <div className="section-title"><FiGrid /> <h2>Overview</h2></div>

        <div className="cards">
          <article className="card pink">
            <div className="card-head">
              <span>Turnover</span>
              <button><FiShoppingCart /></button>
            </div>
            <h3>$92,405</h3>
            <p><b>▲ 5.39%</b> period of change</p>
          </article>

          <article className="card blue">
            <div className="card-head">
              <span>Profit</span>
              <button><FiDollarSign /></button>
            </div>
            <h3>$32,218</h3>
            <p><b>▲ 5.39%</b> period of change</p>
          </article>

          <article className="card gray">
            <div className="card-head">
              <span>New customer</span>
              <button><FiUser /></button>
            </div>
            <h3>298</h3>
            <p><b>▲ 6.84%</b> period of change</p>
          </article>
        </div>

        {/* report */}
        <div className="report-head">
          <div className="section-title"><FiGrid /> <h2>Detailed report</h2></div>
          <div className="report-actions">
            <button><FiDownload /> Import</button>
            <button><FiUpload /> Export</button>
          </div>
        </div>

        <div className="table-wrap">
          <table className="report-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>CUSTOMER NAME</th>
                <th>COMPANY</th>
                <th>ORDER VALUE</th>
                <th>ORDER DATE</th>
                <th>STATUS</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name}>
                  <td><input type="checkbox" /></td>
                  <td className="user-cell">
                    <img src={avatar} alt={r.name} />
                    <strong>{r.name}</strong>
                  </td>
                  <td>{r.company}</td>
                  <td>{r.value}</td>
                  <td>{r.date}</td>
                  <td>
                    <span className={`status ${r.status.toLowerCase()}`}>{r.status}</span>
                  </td>
                  <td><button className="edit-btn"><FiEdit2 /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>63 results</span>
          <div className="pagination">
            <button><FiChevronLeft /></button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>...</button>
            <button>10</button>
            <button>11</button>
            <button><FiChevronRight /></button>
          </div>
        </div>
      </section>
    </div>
  );
}