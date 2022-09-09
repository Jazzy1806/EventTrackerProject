window.addEventListener('load', function() {
	console.log('script.js loaded');
	run();
});

function run() {
	loadAllProjects();
}

function loadAllProjects() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/projects');
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if (xhr.status === 200) {
				displayProjects(JSON.parse(xhr.responseText));
			}
			else {
				console.error('Error loading events: ' + xhr.status);
			}
		}
	};
	xhr.send();
}

function displayProjects(projectList) {
	let dataDiv = document.getElementById('projectList');
	dataDiv.textContent = '';
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	for (let project of projectList) {
		let li = document.createElement('li');
		li.textContent = project.name;
		ul.appendChild(li);
	}
}