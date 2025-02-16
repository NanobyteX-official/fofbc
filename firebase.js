<script type= module>
import {initializeApp} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

const firebaseConfig = {
	apiKey: "AIzaSyDbnsSasx1twZwDGOlgJ5cSD_aPlHIVyQA",
	authDomain: "fofbc-comments-section.firebaseapp.com",
	databaseURL: "https://fofbc-comments-section-default-trdb.firebaseio.com",
	projectId: "fofbc-comments-section",
	storageBucket: "fofbc-comments-section.firebasestorage.app",
	messagingSenderId: "824733885969",
	appId: "1:824733885969:web:ac3cb1bcd3307f060733b0",
	measurementId: "G-HCTJBP9R0R"
};

const app = initializeApp(firebaseConfig);
const db = firebase.database();
const analytics = getAnalytics(app);
</script>