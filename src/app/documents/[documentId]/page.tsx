import { Editor } from "./editor";

interface DocumentIdPageProps {
	params: {
		documentId: string;
	};
}

export default function DocumentIdPage({ params }: DocumentIdPageProps) {
	return (
		<div className="min-h-screen bg-[#fafbfd]">
			<Editor />
		</div>
	);
}
