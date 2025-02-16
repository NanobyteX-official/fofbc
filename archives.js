//Bible Studey Lessons Archives Functionality
document.addEventListener("DOMContentLoaded", () => {
	const buttons = document.querySelectorAll(".year-button");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const year = button.textContent;
			window.location.href = `lessons.${year}.html`;
		});
	});
});