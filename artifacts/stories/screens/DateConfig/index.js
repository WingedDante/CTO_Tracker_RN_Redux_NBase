import * as React from "react";
import { Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Subtitle } from "native-base";
class DateConfigPage extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, { style: { height: 200, backgroundColor: "#FFA000" } },
                React.createElement(Body, { style: { alignItems: "center" } },
                    React.createElement(Icon, { name: "calendar", style: { fontSize: 104 } }),
                    React.createElement(Title, null, "CTO Tracker"),
                    React.createElement(Subtitle, null, "Date Configuration"),
                    React.createElement(View, { padder: true },
                        React.createElement(Text, { style: { color: Platform.OS === "ios" ? "#000" : "#FFF" } }, " ")))),
            React.createElement(Content, null,
                this.props.dateForm,
                React.createElement(View, { padder: true },
                    React.createElement(Button, { block: true, onPress: () => this.props.onSubmit() },
                        React.createElement(Text, null, "Update"))))));
    }
}
export default DateConfigPage;
//# sourceMappingURL=index.js.map