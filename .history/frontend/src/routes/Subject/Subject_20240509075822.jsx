import Transition from '../../utils/Transition'
export default function Subject() {
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
			{/* The course 1/3 */}
			<div className = "flex w-1/4 flex-grow flex-col overflow-y-auto px-8 py-4">
				<h1 className="text-left align-middle text-[1.5rem] text-text_blue tracking-wider">
					List of registered subjects
				</h1>
				<div className = "flex w-full flex-col item-center justìy-evenly gap-4 rounded-2xl text-black p-2 px-3">
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
					<div className="rounded-lg bg-card_blue px-3 text-left">
						<h3 className="line-clamp-1"> Computer Architecture_G1_L1 </h3>
						<h3 className="text-text_gray">Dinh Duc Anh Vu</h3>
					</div>
				</div>
			</div>
			<div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-4">
				<div className = "flex w-1/3 flex-grow flex-col overflow-hidden px-8 py-4">
					<h1 className="text-left align-middle text-[2rem] text-text_blue tracking-wider">
						Grade
					</h1>
						<section className={styles.project} id="project">
							<Container className={styles.container}>
								<Row>
									<Col>
										<h2>PROJECTS</h2>
										<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Nav
											className={styles.nav}
											variant="pills"
											defaultActiveKey="first"
										>
										<Nav.Item className={styles.navItem}>
										<Nav.Link
											className={styles.navLink + " " + styles.tab1}
											eventKey="first"
										>
										Midterm
										</Nav.Link>
										</Nav.Item>
					<Nav.Item className={styles.navItem}>
					<Nav.Link
						className={styles.navLink + " " + styles.tab2}
						eventKey="second"
					>
						Mini
					</Nav.Link>
					</Nav.Item>
					<Nav.Item className={styles.navItem}>
					<Nav.Link
						className={styles.navLink + " " + styles.tab3}
						eventKey="third"
					>
						Other
					</Nav.Link>
					</Nav.Item>
				</Nav>
				<Tab.Content className={styles.tabContent}>
					<Tab.Pane className={styles.tabPane} eventKey="first">
					<Row>
						{constant.projects.map((project, index) => {
						return <ProjectCard key={index} {...project} />;
						})}
					</Row>
					</Tab.Pane>
					<Tab.Pane className={styles.tabPane} eventKey="second">
					<Row>
						{constant.projects_mini.map((project, index) => {
						return <ProjectCard key={index} {...project} />;
						})}
					</Row>
					</Tab.Pane>
					<Tab.Pane className={styles.tabPane} eventKey="third">
					<Row>
						{constant.projects_other.map((project, index) => {
						return <ProjectCard key={index} {...project} />;
						})}
					</Row>
					</Tab.Pane>
				</Tab.Content>
				</Tab.Container>
			</Col>
			</Row>
		</Container>
		</section>
				</div>
			</div>
		</Transition>
			
	)
}
