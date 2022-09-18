import AuthProvider from "./contexts/AuthContext";
import { store } from "./contexts/Redux/store";
import { Provider } from "react-redux";
import React from "react";
import Entry from "./Entry";
import { MessageProvider } from "./contexts/MessageContext";
import { PostProvider } from "./contexts/PostContext";

export default function App() {
	return (
		<Provider store={store}>
			<AuthProvider>
				<PostProvider>
					<MessageProvider>
						<Entry />
					</MessageProvider>
				</PostProvider>
			</AuthProvider>
		</Provider>
	);
}
