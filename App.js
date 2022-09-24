import AuthProvider from "./contexts/AuthContext";
import { store } from "./contexts/Redux/store";
import { Provider } from "react-redux";
import React from "react";
import Entry from "./Entry";
import { MessageProvider } from "./contexts/MessageContext";
import { PostProvider } from "./contexts/PostContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserProvider } from "./contexts/userContext";

export default function App() {
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<AuthProvider>
					<UserProvider>
						<PostProvider>
							<MessageProvider>
								<Entry />
							</MessageProvider>
						</PostProvider>
					</UserProvider>
				</AuthProvider>
			</Provider>
		</SafeAreaProvider>
	);
}
