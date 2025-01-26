import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentIdPageProps {
	params: {
		documentId: string;
	};
}

export default function DocumentIdPage({ params }: DocumentIdPageProps) {
	return (
		<div className="min-h-screen bg-[#fafbfd]">
			<Toolbar />
			<Editor />
		</div>
	);
}
