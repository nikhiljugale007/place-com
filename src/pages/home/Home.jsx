import { Link } from "react-router-dom";
import "./Home.css";
import { interview } from "../../assets";
const Home = () => {
	return (
		<main>
			<div className="hero-section">
				<div className="grid grid-2x2">
					<div className="text-section">
						<div className="h1 text-bold">PlaceCom</div>
						<div className="typo-label">One stop for all placement queries</div>
						<p className="typo-subtext">
							Check all drives, check upcoming drives, see your applied drives,
							all in one place
						</p>
						<Link to="/drives" className="link-no-style">
							<button className="btn btn-primary">Explore now</button>
						</Link>
					</div>
					<div className="img-section">
						<img className="img-responsive" alt="hero" src={interview} />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
