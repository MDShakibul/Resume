import { SectionHeader } from '@/components/utils/SectionHeader';
import { Project } from './Project';
import styles from './projects.module.scss';

export const Projects = () => {
	return (
		<section className="section-wrapper" id="projects">
			<SectionHeader title="Projects" dir="r" />

			<div className={styles.projects}>
				{projects.map((project) => {
					return <Project key={project.title} {...project} />;
				})}
			</div>
		</section>
	);
};

const projects = [
	{
		title: 'Jomma',
		imgSrc: '/project-imgs/jomma.jpg',
		code: '#',
		projectLink: 'https://jomma.online',
		tech: ['React', 'Nextjs', 'Bootstrap', 'TypeScript', 'Nodejs', 'Expressjs'],
		description:
			'An Online Share Market System for managing and tracking stock portfolios',
		modalContent: (
			<>
				<p>
					Contributed as a front-end developer, designing interactive and
					reusable components tailored for a share market platform.
				</p>
				<p>
					Developed the user interface based on Next.js with custom BootStrap
					CSS, enabling smooth navigation and portfolio tracking. Integrated
					with a backend powered by Oracle, providing a secure and structured
					database connection for tracking stock information and user data.
				</p>
			</>
		),
	},
	{
		title: 'Mojaru',
		imgSrc: '/project-imgs/mojaru.JPG',
		code: '#',
		projectLink: 'https://mojaru.com/',
		tech: ['React', 'Laravel', 'MySQL'],
		description:
			'An E-learning platform designed to provide accessible and engaging educational content like online class, online exam, online attendance',
		modalContent: (
			<>
    <p>
      Contributed as a front-end developer, building dynamic and reusable components tailored for an e-learning environment. Integrated essential features such as online classes, exams, and attendance tracking to enhance the learning experience.
    </p>
    <p>
      The tech stack includes React with custom Styled Components, connected to a robust Laravel backend, with data stored in a MySQL database for reliable storage and access to course materials and user data.
    </p>
  </>
		),
	},
	{
		title: 'USDT Live Stack',
		imgSrc: '/project-imgs/web3.jpg',
		code: 'https://github.com/MDShakibul/web3',
		projectLink: 'https://cario.online/',
		tech: ['React', 'Nodejs', 'Block Chain', 'Etherjs', 'MetaMask', 'MySQL'],
		description:
			' decentralized application (dApp) that leverages blockchain technology for secure, transparent transactions and interactions.',
		modalContent: (
			<>
<p>
        Developed a Web 3.0 application focused on decentralized finance (DeFi) using blockchain technology. Contributed as a front-end developer, creating dynamic and reusable components and integrating MetaMask for secure user authentication and transaction management.
      </p>
      <p>
        The tech stack includes React for the user interface, Ether.js for blockchain interactions, and a Node.js backend. MySQL is used for storing off-chain data to support smooth and reliable user interactions.
      </p>
      <p>
        This project allowed me to deepen my understanding of blockchain technologies and explore Web 3.0 capabilities, including decentralized data handling and user engagement.
      </p>
  </>
		),
	},
	{
		title: 'Live Chat App',
		imgSrc: '/project-imgs/chart_app.JPG',
		code: 'https://github.com/MDShakibul/chat-app-client',
		// projectLink: "https://agency-iron-crm.herokuapp.com/",
		projectLink: '#',
		tech: ['React', 'Nodejs', 'MongoDB', 'Socket.io'],
		description:
			'A Live Chat Application enabling real-time messaging between users, built with React, Node.js, MongoDB, and Socket.io.',
		modalContent: (
			<>
				<p>
      Worked as a front-end developer on this live chat application, creating interactive and reusable components to enhance user engagement and real-time communication.
    </p>
    <p>
      Focused primarily on integrating Socket.io for instant messaging functionality and designing a user-friendly interface for seamless conversation flow.
    </p>
    <p>
      Collaborated with a team of three developers, contributing to both the frontend and backend, making this project a shared passion among us.
    </p>
			</>
		),
	},
	{
		title: 'Headphone Store',
		imgSrc: '/project-imgs/headphone.JPG',
		code: 'https://github.com/MDShakibul/headphone-shop',
		projectLink:
			'https://headphone-tcj.netlify.app/',
		tech: ['React', 'Tailwind', 'Frame Motion'],
		description:
			'An online headphone store showcasing a range of headphones with a responsive and interactive design.',
		modalContent: (
			<>
				<p>
      Developed a responsive and visually engaging headphone store using React and Tailwind CSS, focusing on creating a smooth and immersive shopping experience for users.
    </p>
    <p>
      Integrated Framer Motion for animations, enhancing user interactions and adding a dynamic feel to the product browsing experience.
    </p>
    <p>
      This project allowed me to experiment with modern UI/UX design practices and leverage Tailwind for rapid styling.
    </p>
			</>
		),
	},
	{
		title: 'Good Deal Motors',
		imgSrc: '/project-imgs/good_deal_motors.JPG',
		code: 'https://github.com/MDShakibul/Good-Deal-Motors-Client_Site',
		projectLink: 'https://good-deal-motors.web.app/login',
		tech: ['React', 'Tailwind', 'nodejs', 'MongoDB', 'Firebase'],
		description:
			'A car dealership application landing page, providing an interactive platform for users to explore car listings, features, and deals.',
		modalContent: (
			<>
				 <p>
      Developed an interactive landing page for Good Deal Motors, allowing users to explore various car listings and access detailed information about each vehicle.
    </p>
    <p>
      Utilized React for building dynamic UI components, styled with Tailwind CSS, and implemented Firebase for authentication and backend management.
    </p>
    <p>
      This project enabled me to work with Firebase authentication.
    </p>
			</>
		),
	},
	{
		title: 'Book Deals',
		imgSrc: '/project-imgs/book_store.JPG',
		code: 'https://github.com/MDShakibul/book-application-client',
		projectLink: 'https://inspiring-bublanina-4af5cf.netlify.app/',
		tech: ['React', 'Styled Components', 'Tailwind', 'MongoDB', 'Nodejs', 'Expressjs'],
		description: 'An online bookstore platform offering a variety of books with a focus on deals and discounts.',
		modalContent: (
			<>
				<p>
        Developed an interactive online bookstore platform where users can browse, search, and purchase books at competitive prices with special deals.
      </p>
      <p>
        Built with a MERN stack (MongoDB, Express.js, React, Node.js), using Styled Components and Tailwind for styling, creating a visually engaging and responsive user experience.
      </p>
      <p>
        This project enabled me to work with MongoDB for database management, and Express.js for server-side functionality, enhancing the platform's scalability and efficiency.
      </p>
			</>
		),
	}

];
