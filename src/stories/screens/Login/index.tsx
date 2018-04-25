import * as React from "react";
import { Image, Platform, Linking } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
//import styles from "./styles";
export interface Props {
	loginForm: any;
	onLogin: Function;
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 200, backgroundColor: "#FFA000" }}>
					<Body style={{ alignItems: "center" }}>
						<Icon name="calendar" style={{ fontSize: 104 }} />
						<Title>CTO Tracker</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} > </Text>
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<View padder>
							<Text style={{ color: "#000" }}>Made with love by </Text><Text style={{color: '#ff9999'}} onPress={()=> Linking.openURL('https://github.com/WingedDante ')}>Logan Trecartin</Text>
						</View>
						
					</View>
				</Footer>
			</Container>
		);
	}
}

export default Login;
