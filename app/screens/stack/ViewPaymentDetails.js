import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import { _primary, _primary2, _tertiary, _tertiary2 } from '../../utils/colors';
import Header from '../../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Container, Content } from 'native-base';
import ConfirmItem from '../../components/ConfirmItem';
import { _screenWidth } from '../../utils/dimension';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Diamond_ } from '../../components/Svg';
import InvoiceItemEntry, {
	InvoiceInfoHeader,
	InvoiceSubtotalEntry,
	InvoiceTotalEntry,
} from '../../components/InvoiceItemEntry';
import { _naira, _transactionList } from '../../api';
import { useGlobalHook } from '@devhammed/use-global-hook';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
import { paymentDetailsHtml } from '../../api';

export default function ViewPaymentDetails() {
	const [state, setState] = useState({
		delivery_type: 'normal',
		instructions: '',
	});

	const { transactionList, _setTransactionList, currentTrans } = useGlobalHook(
		'transactionListStore',
	);

	const navigation = useNavigation();

	const _transactionList_ = transactionList.filter(
		(trans) => trans.id === currentTrans,
	)[0];

	// To get combined menu subtotal
	const sumObj = (obj) =>
		Object.keys(obj).reduce((sum, key) => sum + parseFloat(obj[key] || 0), 0);

	// let subtotalQuantity = sumObj(guyCalc);
	// let subtotalAmount = sumObj(ladyCalc);

	async function printPDF() {
		const results = await RNHTMLtoPDF.convert({
			html: paymentDetailsHtml,
			fileName: 'diamond-laundry',
			base64: true,
			filePath: 'documents',
		});
		navigation.navigate('ViewPaymentDetails');
		await RNPrint.print({ filePath: results.filePath });
	}

	async function printRemotePDF() {
		await RNPrint.print({
			filePath: 'https://graduateland.com/api/v2/users/jesper/cv',
		});
	}

	

	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Payment Details'}
				leftComponent={'back'}
				goBack={() => navigation.goBack()}
			/>
			{/* Content Section */}
			<Content
				style={{ paddingHorizontal: _screenWidth > 450 ? RFValue(30) : 0 }}
				contentContainerStyle={styles.content}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
			>
				{/* Service Invoice */}
				<View style={styles.service_invoice_container}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							paddingBottom: RFValue(5),
							marginBottom: RFValue(15),
						}}
					>
						<Diamond_ height={RFValue(20)} width={RFValue(20)} />
						<Text
							style={{
								fontFamily: 'Inter-Black',
								fontSize: RFValue(14),
								color: _primary,
							}}
						>
							DIAMOND LAUNDRY
						</Text>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						></View>
					</View>
					<InvoiceInfoHeader
						service={_transactionList_.service.name}
						dateTime={_transactionList_.dateTime}
						cardNumber={_transactionList_.cardNumber}
						order={_transactionList_.serviceOrder}
						paymentType={_transactionList_.paymentType}
					/>
					<View style={styles.invoice_box_container}>
						<View style={styles.invoice_box_header_container}>
							<Text
								style={[
									styles.invoice_box_header_text,
									{
										borderRightWidth: RFValue(1),
										borderRightColor: _primary2,
										flex: 2.5,
									},
								]}
							>
								Item
							</Text>
							<Text
								style={[
									styles.invoice_box_header_text,
									{
										borderRightWidth: RFValue(1),
										borderRightColor: _primary2,
										flex: 1,
									},
								]}
							>
								Qty.
							</Text>
							<Text
								style={[
									styles.invoice_box_header_text,
									{
										flex: 2.5,
									},
								]}
							>
								Amount ({_naira})
							</Text>
						</View>
						{_transactionList_.items.map(({ ...props }, index) => (
							<InvoiceItemEntry key={index.toString()} {...props} />
						))}
						<InvoiceSubtotalEntry
							subtotalAmount={_transactionList_.subtotalAmount}
							subtotalQuantity={_transactionList_.subtotalQuantity}
						/>
						{_transactionList_.others.map(({ ...props }, index) => (
							<InvoiceItemEntry
								delivery={true}
								key={index.toString()}
								{...props}
								others={true}
							/>
						))}

						<InvoiceTotalEntry
							totalAmount={_transactionList_.totalAmount}
							totalQuantity={_transactionList_.subtotalQuantity}
						/>
					</View>
				</View>
				<View style={{ marginTop: RFValue(10) }}>
					<TouchableOpacity
						onPress={() => printPDF()}
						style={{
							backgroundColor: _primary2,
							padding: RFValue(10),
							borderRadius: RFValue(5),
							marginBottom: RFValue(20),
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								fontSize: RFValue(14),
								color: _tertiary,
								textAlign: 'center',
							}}
						>
							Print as PDF
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {}}
						style={{
							backgroundColor: _tertiary,
							padding: RFValue(10),
							borderRadius: RFValue(5),
							marginBottom: RFValue(10),
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								fontSize: RFValue(14),
								color: _primary2,
								textAlign: 'center',
							}}
						>
							Share
						</Text>
					</TouchableOpacity>
				</View>
			</Content>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: _screenWidth > 450 ? RFValue(30) : RFValue(20),
		paddingBottom: RFValue(10),
	},
	content: {
		paddingBottom: RFValue(20),
		marginBottom: RFValue(20),
		marginTop: RFValue(20),
	},
	service_invoice_container: {
		backgroundColor: _tertiary2,
		padding: RFValue(20),
		borderRadius: RFValue(5),
		marginBottom: RFValue(20),
	},
	service_invoice_category_header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	service_invoice_category_header_title: {
		color: _primary2,
		fontFamily: 'Inter-Regular',
		fontSize: RFValue(10),
	},
	service_invoice_category_header_subtitle: {
		color: _primary2,
		fontFamily: 'Inter-Bold',
		fontSize: RFValue(10),
	},
	invoice_box_container: {
		borderColor: _primary2,
		borderWidth: RFValue(1),
		borderRadius: RFValue(2.5),
		paddingBottom: RFValue(5),
	},
	invoice_box_header_container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: RFValue(5),
		marginBottom: RFValue(0),
		borderBottomWidth: RFValue(1),
		borderBottomColor: _primary2,
	},
	invoice_box_header_text: {
		fontFamily: 'Inter-Bold',
		fontSize: RFValue(10),
		color: _primary,
		textAlign: 'center',
	},
});
