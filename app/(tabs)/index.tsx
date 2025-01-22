import { SafeAreaView, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import Offers from '../components/Offers';

function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<SafeAreaView style={styles.search}>
				<SearchBar />
			</SafeAreaView>
			<SafeAreaView style={styles.offers}>
				<Offers title="Frontend Developer" salary="£50,000" description="React, Angular, Vue" />
			</SafeAreaView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',	
	},
	search: {
		width: '80%',
		marginTop: 20,
		alignSelf: 'center',
	},
	offers: {
		flex: 1,
		marginTop: 50,
	},
});

export default Home;
