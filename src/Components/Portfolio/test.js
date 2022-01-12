import { Link } from "react-router-dom";

<div class=" row   ">
  <div class="col-md-6  project-card border border p-0 rounded ">
    <div className="d-flex  justify-content-around bg-dark py-2  border-bottom ">
      <a
        href="https://bikersbd-f97ab.web.app/"
        style={{ textDecoration: "none" }}
        className="d-block"
      >
        Live
      </a>

      <Link
        className="d-block"
        style={{ textDecoration: "none" }}
        to="/projectdetail1"
      >
        Details
      </Link>
    </div>

    <div class="project   ">
      <img src={bikersbd} alt="" className="d-block w-100" />
    </div>
  </div>
</div>;
