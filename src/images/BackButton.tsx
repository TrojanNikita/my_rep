import * as React from 'react';

const BackButton = () => (
	<svg
		width="80"
		height="80"
		viewBox="0 0 80 80"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
			fill="var(--primary)"
		/>
		<path
			d="M48.3967 21.03L44.2667 16.9L21.1667 40L44.2667 63.1L48.3967 58.97L29.4267 40L48.3967 21.03Z"
			fill="var(--on-primary)"
		/>
	</svg>
);

export default BackButton;