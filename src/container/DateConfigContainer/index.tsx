import * as React from "react";
import DateConfigPage from "../../stories/screens/DateConfig";
export interface Props {
	navigation: any,
}
export interface State {}
export default class DateConfigContainer extends React.Component<Props, State> {
	render() {
		return <DateConfigPage dateForm={undefined} onSubmit={undefined} navigation={undefined}/>;
	}
}