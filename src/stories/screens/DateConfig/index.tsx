import * as React from "react";
import { Image, Platform, Linking } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Subtitle} from "native-base";

export interface Props {
	dateForm: any;
    onSubmit: Function;
    navigation: any;
}
export interface State {}

class DateConfigPage extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 200, backgroundColor: "#FFA000" }}>
					<Body style={{ alignItems: "center" }}>
						<Icon name="calendar" style={{ fontSize: 104 }} />
						<Title>CTO Tracker</Title>
                        <Subtitle>Date Configuration</Subtitle>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} > </Text>
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.dateForm}
					<View padder>
						<Button block onPress={() => this.props.onSubmit()}>
							<Text>Update</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

export default DateConfigPage; 