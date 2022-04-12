import { useState, useEffect } from "react";
import { useAppContext } from "../../context/Contex";
import { getAllVideos } from "../../api/apicalls";
import { DriveCard } from "../../components";
import "./AllDrives.css";
const AllDrives = () => {
	const { appState, appDispatch } = useAppContext();
	const [loading, setLoading] = useState(false);
	const getVideos = async () => {
		const response = await getAllVideos();
		if (response.success) {
			appDispatch({ type: "SET_DRIVES", payload: response.videos });
		} else {
			alert("ERROR, check console");
		}
	};
	useEffect(() => {
		setLoading(true);
		getVideos();
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<div className="page-container">
			<p className="typo-title flex-hz-center">All Drives</p>
			<div className="flex-vt-center g-1">
				{loading ? (
					<h1>Loading</h1>
				) : (
					appState.drives.map((item, index) => {
						return (
							<div key={index}>
								<DriveCard drive={item} />
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default AllDrives;
