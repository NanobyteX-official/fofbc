const bibleStudies = [
{
	title: "Lesson 1 | How God gives His Holy Spirit",
	memoryVerse: "Luke 11:13 'If ye then, being evil, know how to give good gifts unto your children: how much more shall your Heavenly Father give the Holy Spirit to them that ask Him?'",
	scripture: "-",
	lessons: [
		"He comes upon us. Numbers 11:26, Judges 6:34, Luke 4:18, 1 Peter 4:14",
		"Filled with the Holy Spirit. Ephesians 5:18, Exodus 31:3, Acts 2:4",
		"Outpouring of the Holy Spirit. Proverbs 1:23, Isaiah 32:15, Joel 2:29",
		"We have or He has become part of us. 1 Corinthians 7:40, Ephesians 2:22, James 4:5"
		],
	motto:"One Family, One Faith."
},

{
	title: "Lesson 2 | How God gives His Holy Spirit Pt. 2",
	memoryVerse: "Luke 11:13 'If ye then, being evil, know how to give good gifts unto your children: how much more shall your Heavenly Father give the Holy Spirit to them that ask Him?'",
	scripture: "-",
	lessons: [
		"We are given or receive the Holy Spirit. Galatians 3:2, 1 Thessalonians 4:8, 1 Timothy 1:7",
		"Sealed with the Holy Spirit. 2 Corinthians, Ephesians 1:13, Ephesians 4:30",
		"Led by the Holy Spirit. Galatians 5:18, Luke 4:1, Rmans 8:14",
		"He abides with us. 1 John 3:24, Numbers 14:24",
		"He comes to fellowship with us. Philippians 2:1"
		],
	motto:"One Family, One Faith."
},

{
	title: "Lesson 3 | The Spirit of Lordship",
	memoryVerse: "Philippians 4:13 'I can do all things through Christ which strengtheneth me.'",
	scripture: "-",
	lessons: [
		"Lord over the creation. Genesis 1:26",
		"Lord over sin. Genesis 4:7",
		"Lord over your enemies. Esther 9:1, Psalm 110:2",
		"Lord over self. 1 Corinthians 9:27",
		"Lord over the devil. James 4:7, Romans 16:20"
		],
	motto:"One Family, One Faith."
},

{
	title: "Lesson 4 | The Spirit of Wisdom",
	memoryVerse: "Luke 2:52 'And Jesus increased in wisdom and stature, and in favour with God and man.'",
	scripture: "Isaiah 11:2",
	lessons: [
		"Wisdom of the heart. Exodus 28:3",
		"Wisdom that makes you excel in your profession. Exodus 31:3",
		"The Spirit of Wisdom can be imparted. Deuteronomy 34:9",
		"The Spirit of Wisdom gives us authority to rule. Daniel 5:11",
		"By Spirit of Wisdom you overcome opposition. Acts 6:10"
		],
	motto:"One Family, One Faith."
},

{
	title: "Lesson 5 | The Spirit of Understanding",
	memoryVerse: "Psalm 119:34 'Give me understanding, and I shall keep thy law; yea, I shall observe it with my whole heart.'",
	scripture: "Isaiah 11:2",
	lessons: [
		"Understanding is removing darkness or covering. Ephesians 1:18, Luke 24:45, Daniel 8:23, Job 17:4",
		"Understanding comes from the Word of God. Psalm 119:104, Psalm 119:130, Psalm 119:169, Job 32:8",
		"Understanding comes to those who likes advice. Proverbs 15:32, Deuteronomy 32:28",
		"Righteous living is a sign of understanding. Proverbs 15:21, Proverbs 14:29, Psalm 119:34",
		"Understanding is what produces wisdom. Proverbs 17:24, Proverbs 14:33, Proverbs 10:13"
		],
	motto:"One Family, One Faith."
},

{
	title: "Lesson 6 | The Spirit of Counsel",
	memoryVerse: "Job 12:13 'With him is wisdom and strength, he hath counsel and understanding.'",
	scripture: "Isaiah 11:2",
	lessons: [
		"Counsel originates from God. Proverbs 8:14, Psalm 16:7",
		"Only the counsel of God stands. Isaiah 46:10, Proverbs 19:21, Psalm 33:11",
		"The need to be surrounded by counselors. Proverbs 11:14, Proverbs 15:22, Proverbs 24:6",
		"The danger of self-counsel. Jeremiah 7:24, Job 18:7, Hosea 11:6",
		"Wise counsel gives peace and success in life. Proverbs 24:6, Proverbs 15:22, 1 Kings 1:12"
		],
	motto:"One Family, One Faith."
},

{
	title: "Lesson 7 | The Spirit of Might",
	memoryVerse: "Psalm 24:8 'Who is the King of glory? The LORD strong and mighty, the LORD mighty in battle.'",
	scripture: "Isaiah 11:2",
	lessons: [
		"The Spirit of might works on the inner man. Ephesians 3:16",
		"The Spiritof might to do more than the ordinary. Judges 14:6",
		"Might to defeat the enemy. Judges 15:14",
		"Mighty against sin. Micah 3:8",
		"Might to do the work of God. Zechariah 4:6",
		"Might to preach the gospel. Romans 15:19"
		],
	motto:"One Family, One Faith."
},

{
	title: "Lesson 8 | The Spirit of Knowledge",
	memoryVerse: "Proverbs 13:16 'Every prudent man dealeth with knowledge: but a fool layeth open his folly'",
	scripture: "Isaiah 11:2",
	lessons: [
		"Knowledge is of God. Proverbs 1:7, Job 36:4, 1 Samuel 2:3, Numbers 24:16",
		"Knowledge is related to particular work. 1 Kings 9:27, Exodus 31:3",
		"Knowledge must be searched for like it is not near. Job 36:3",
		"Knowledge is shown or revealed. Psalm 19:2",
		"Knowledge is better than riches. Proverbs 8:10",
		"You cannot get knowledge if you don't like instruction. Proverbs 12:1"
		],
	motto:"One Family, One Faith."
}

];

function showBibleStudy(week){
	const study = bibleStudies[week - 1];

	document.getElementById("study-title").textContent = study.title;
	document.getElementById("memory-verse").textContent = study.memoryVerse;
	document.getElementById("scripture").textContent = study.scripture;
	document.getElementById("description").textContent = study.description;

	const lessonsList = document.getElementById("lessons-list");
	lessonsList.innerHTML = "";
	study.lessons.forEach((lesson) => {
		const listItem = document.createElement("li");
		listItem.textContent = lesson;
		lessonsList.appendChild(listItem);
	});

	document.getElementById("motto").textContent = study.motto;
}
