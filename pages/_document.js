import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head >
				<script
					src="https://widget.agentzee.ai/chat/widgets.js?agentId=4a065de0-58ce-4d33-9f0d-d28187d764cd"
					async
					></script>
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
