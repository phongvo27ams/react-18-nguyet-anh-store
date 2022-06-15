// Navigation Toggle on Mobile Devices
const navigationBackground = document.getElementById('navigationBackground');
const navigation = document.getElementById('navigation');
const navigationToggle = document.getElementById('navigationToggle');
const navigationClose = document.getElementById('navigationClose');

console.log(navigationToggle);

if(navigationToggle) {
	navigationToggle.addEventListener('click', () => {
		navigation.classList.add('show-menu');
		navigationBackground.classList.add('show-menu');
	});
}
if(navigationClose) {
	navigationClose.addEventListener('click', () => {
		navigation.classList.remove('show-menu');
		navigationBackground.classList.remove('show-menu');
	});
}