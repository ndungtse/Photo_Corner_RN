import * as Linking from "expo-linking";

const linking = {
	prefixes: [Linking.createURL("/")],
	config: {
		screens: {
			Root: {
				screens: {
					Home: {
						screens: {
							TabOneScreen: "one",
						},
					},
					Messages: {
						screens: {
							TabTwoScreen: "two",
						},
					},
					Notifications: {
						screens: {
							TabThreeScreen: "three",
						},
					},
                    Profile: {
                        screens: {
                            TabFourScreen: "four",
                        },
                    },
				},
			},
			Modal: "modal",
			NotFound: "*",
            Login: "login",
            Signup: "signup",
		},
	},
};

export default linking;
