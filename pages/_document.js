import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head >
				<script src="https://widget.agentzee.ai/chat/widgets.js?agentId=4a065de0-58ce-4d33-9f0d-d28187d764cd"></script>
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
