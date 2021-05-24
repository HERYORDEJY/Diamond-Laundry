import React, { Component } from 'react';

import { Text, TouchableHighlight, View } from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { paymentDetailsHtml } from '../api';
import ReactHtml from '../api/reactHtml';

export default class RNHtmlPdf extends Component {
	async createPDF() {
		let options = {
			html: paymentDetailsHtml,
			fileName: 'test',
			directory: 'Documents',
		};

		let file = await RNHTMLtoPDF.convert(options);
		// console.log(file.filePath);
		alert(file.filePath);
	}

	render() {
		return (
			<View>
				<TouchableHighlight onPress={this.createPDF}>
					<Text>Create PDF</Text>
				</TouchableHighlight>
			</View>
		);
	}
}
