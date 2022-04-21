import { Link } from "react-router-dom";
import "./DriveCard.css";
const DriveCard = ({ drive, cardType }) => {
	const { _id, companyName, role, roleDescription, ctc, lastDateToApply } =
		drive;
	return (
		<div className="card horizontal-card p-1">
			<div className="card-body">
				<h2 className="card-heading flex-hz-space-bw">
					<p>{role}</p>
					<p>{ctc}</p>
				</h2>

				<h3 className="card-subheading flex-hz-space-bw">
					<p>{companyName}</p>
					<p>{lastDateToApply}</p>
				</h3>
				<p className="typo-subtext line-clamp">{roleDescription}</p>
				<div className="card-footer-container">
					<div className="card-footer-btn">
						<Link to={`/drives/${_id}`} className="link-no-style">
							<button className="btn btn-text">Read More</button>
						</Link>
						{cardType === "simple_card" && (
							<button className="btn btn-text">Apply</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export { DriveCard };
