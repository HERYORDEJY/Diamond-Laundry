import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { _primary, _primary2 } from '../../utils/colors';
import { styles } from './style';
import moment from 'moment';

export default function InvoiceItemEntry({
	name,
	quantity,
	rate,
	amount,
	menu,
	others,
	delivery,
	deliveryType,
	deliveryFee,
}) {
	if (others && delivery) {
		return (
			<View style={styles.invoice_box_header_container}>
				<Text
					style={[
						styles.invoice_box_header_text,
						{
							borderRightWidth: RFValue(1),
							borderRightColor: _primary2,
							flex: 3.5,
						},
					]}
				>
					Delivery({deliveryType.toUpperCase()})
				</Text>
				<Text
					style={[
						styles.invoice_box_header_text,
						{
							flex: 2.5,
						},
					]}
				>
					{deliveryFee}
				</Text>
			</View>
		);
	}
	return (
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
				{name} ({menu})
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
				{quantity}
			</Text>
			<Text
				style={[
					styles.invoice_box_header_text,
					{
						flex: 2.5,
					},
				]}
			>
				{quantity * rate}
			</Text>
		</View>
	);
}

export function InvoiceInfoHeader({
	dateTime,
	service,
	order,
	paymentType,
	cardNumber,
}) {
	return (
		<View style={{ marginBottom: RFValue(15) }}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					borderBottomColor: _primary2,
					borderBottomWidth: RFValue(1),
					marginBottom: RFValue(5),
				}}
			>
				<View style={styles.service_invoice_category_header}>
					<Text style={styles.service_invoice_category_header_title}>
						Date:{' '}
					</Text>
					<Text style={styles.service_invoice_category_header_subtitle}>
						{moment(dateTime).format('ddd MMM D, YYYY')}
					</Text>
				</View>
				<View style={styles.service_invoice_category_header}>
					<Text style={styles.service_invoice_category_header_title}>
						Time:{' '}
					</Text>
					<Text style={styles.service_invoice_category_header_subtitle}>
						{moment(dateTime).format('hh:mm a')}
					</Text>
				</View>
			</View>

			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					borderBottomColor: _primary2,
					borderBottomWidth: RFValue(1),
					marginBottom: RFValue(5),
				}}
			>
				<View style={styles.service_invoice_category_header}>
					<Text style={styles.service_invoice_category_header_title}>
						Service type:{' '}
					</Text>
					<Text style={styles.service_invoice_category_header_subtitle}>
						{service}
					</Text>
				</View>
				<View style={styles.service_invoice_category_header}>
					<Text style={styles.service_invoice_category_header_title}>
						Order:{' '}
					</Text>
					<Text style={styles.service_invoice_category_header_subtitle}>
						#{order}
					</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					borderBottomColor: _primary2,
					borderBottomWidth: RFValue(1),
					marginBottom: RFValue(5),
				}}
			>
				<View style={styles.service_invoice_category_header}>
					<Text style={styles.service_invoice_category_header_title}>
						Payment type:{' '}
					</Text>
					<Text style={styles.service_invoice_category_header_subtitle}>
						{paymentType}
					</Text>
				</View>
				<View style={styles.service_invoice_category_header}>
					<Text style={styles.service_invoice_category_header_title}>
						Card:{' '}
					</Text>
					<Text style={styles.service_invoice_category_header_subtitle}>
						{cardNumber}
					</Text>
				</View>
			</View>
		</View>
	);
}

export function InvoiceSubtotalEntry({
	subtotalQuantity,
	subtotalAmount,
	listOfItems,
}) {
	function sumObj(obj) {
		Object.keys(obj).reduce((sum, key) => sum + parseFloat(obj[key] || 0), 0);
	}
	return (
		<View
			style={[
				styles.invoice_box_header_container,
				{
					paddingBottom: RFValue(5),
					borderBottomWidth: RFValue(1),
					borderBottomColor: _primary2,
				},
			]}
		>
			<Text
				style={[
					styles.invoice_box_header_text,
					{
						borderRightWidth: RFValue(1),
						borderRightColor: _primary2,
						flex: 2.5,
						fontFamily: 'Inter-Medium',
					},
				]}
			>
				Subtotal
			</Text>
			<Text
				style={[
					styles.invoice_box_header_text,
					{
						borderRightWidth: RFValue(1),
						borderRightColor: _primary2,
						flex: 1,
						fontFamily: 'Inter-Medium',
					},
				]}
			>
				{subtotalQuantity}
			</Text>
			<Text
				style={[
					styles.invoice_box_header_text,
					{
						flex: 2.5,
						fontFamily: 'Inter-Medium',
					},
				]}
			>
				{subtotalAmount}
			</Text>
		</View>
	);
}

export function InvoiceTotalEntry({ totalQuantity, totalAmount }) {
	return (
		<View
			style={[
				styles.invoice_box_header_container,
				{ borderBottomWidth: 0, paddingBottom: 0 },
			]}
		>
			<Text
				style={[
					styles.invoice_box_header_text,
					{
						borderRightWidth: RFValue(1),
						borderRightColor: _primary2,
						flex: 2.5,
						fontFamily: 'Inter-Bold',
						color: _primary,
					},
				]}
			>
				Total
			</Text>
			<Text
				style={[
					styles.invoice_box_header_text,
					{
						borderRightWidth: RFValue(1),
						borderRightColor: _primary2,
						flex: 1,
						fontFamily: 'Inter-Bold',
						color: _primary,
					},
				]}
			>
				{totalQuantity}
			</Text>
			<Text
				style={[
					styles.invoice_box_header_text,
					{
						flex: 2.5,
						fontFamily: 'Inter-Bold',
						color: _primary,
					},
				]}
			>
				{totalAmount}
			</Text>
		</View>
	);
}
