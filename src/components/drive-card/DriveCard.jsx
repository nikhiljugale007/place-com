import "./DriveCard.css";
const DriveCard = ({ drive }) => {
	const { companyName, role, roleDescription, ctc, lastDateToApply } = drive;
	return (
		<div class="card horizontal-card p-1">
			<div class="card-body">
				<h2 class="card-heading flex-hz-space-bw">
					<p>{role}</p>
					<p>{ctc}</p>
				</h2>

				<h3 class="card-subheading flex-hz-space-bw">
					<p>{companyName}</p>
					<p>{lastDateToApply}</p>
				</h3>
				<p class="typo-subtext line-clamp">{roleDescription}</p>
				<div class="card-footer-container">
					<div class="card-footer-btn">
						<button class="btn btn-text">Read More</button>
						<button class="btn btn-text">Apply</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export { DriveCard };
