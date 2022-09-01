import { AuthProvider } from "./contexts/AuthContext";
import { store } from "./contexts/Redux/store";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import Entry from "./Entry";
import { MessageProvider } from "./contexts/MessageContext";

export default function App() {
	return (
		<Provider store={store}>
			<AuthProvider>
				<MessageProvider>
					<Entry />
				</MessageProvider>
			</AuthProvider>
		</Provider>
	);
}
