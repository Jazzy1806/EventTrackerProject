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
	
	document.myForm.addProject.addEventListener('click', function(e) {
	e.preventDefault();
	console.log('adding project');
	let project = {
		name: myForm.name.value,
		description: myForm.description.value,
		category: myForm.category.value,
		status: myForm.status.value
	};
	console.log(project);
	addNewProject(project);
});

document.getElementById("updateForm").addEventListener("click",function(e) {
	e.preventDefault();
  if (e.target && e.target.name === "updateProject") {
	console.log('updating project');
	let project = {
		name: e.target.parentElement.name.value,
		description: e.target.parentElement.description.value,
		category: e.target.parentElement.category.value,
		status: e.target.parentElement.status.value
	};
	console.log(project);
	updateProject(e.target.id, project);
	}
});


document.getElementById("updateForm").addEventListener("click",function(e) {
	// e.target was the clicked element
    	e.preventDefault();
  if (e.target && e.target.name === "deleteProject") {
	console.log('deleting project');
	deleteProject(e.target.id);
}});
}

let projectDetails = function(e) {
	let hide=document.getElementById("fullList");
    hide.textContent= '';
	let listItems = document.getElementsByClassName('projById');
	for (let i of listItems) {
	  i.style.backgroundColor = 'white';
	}
	e.target.closest('tr').style.backgroundColor = '#9dd19f';
	
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `api/projects/${e.target.closest('tr').id}`);
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if (xhr.status === 200) {
				displayProject(JSON.parse(xhr.responseText));
			}
			else {
				console.error('Error loading project: ' + xhr.status);
			}
		}
	};
	xhr.send();
}

let displayProjects = function (projectList) {
	let listDiv = document.getElementById('fullList');
	listDiv.textContent = '';

	let listHeader = document.createElement('h1');
	listHeader.innerHTML = "There are " + projectList.length + " projects in the queue. The average time to complete a project is typically 6 hours." +
							"\n The estimated amount of time to complete all of the projects is " + (projectList.length * 6) + " hours.";
	listDiv.appendChild(listHeader);

  let table = document.createElement('table');
  let thead = document.createElement('thead');
    table.appendChild(thead);
  let row = document.createElement('tr');
    thead.appendChild(row);
  let col = document.createElement('th');
  	col.textContent = "Project Id";
  	row.appendChild(col);
  let col1 = document.createElement('th');
    col1.textContent = "Project Name";
    row.appendChild(col1);
  let col2 = document.createElement('th');
    col2.textContent = "Description";
    row.appendChild(col2);
  let col3 = document.createElement('th');
    col3.textContent = "Category";
    row.appendChild(col3);
  let col4 = document.createElement('th');
    col4.textContent = "Status";
    row.appendChild(col4);
  let col5 = document.createElement('th');
    col5.textContent = "Date Created";
    row.appendChild(col5);
  let tbody = document.createElement('tbody');
    table.appendChild(tbody);

   for (let project of projectList) {
	let tr = document.createElement('tr');
	tr.setAttribute('id', project.id);
	tr.setAttribute('class', 'projById');
	tr.addEventListener('click', projectDetails);

	let attributes = Object.getOwnPropertyNames(project);
	for (let i of attributes) {
		let col = document.createElement('td');
		col.textContent = project[i];
		tr.appendChild(col);
	}
	console.log(tr);
	tbody.appendChild(tr);
	}
  listDiv.appendChild(table);
}



function addNewProject(project) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/projects');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				console.log('Project created');
				displayProject(JSON.parse(xhr.responseText));
				loadAllProjects();
			}
			else if (xhr.status === 400) {
				displayError('Invalid data');
			}
			else {
				displayError('Error creating project: ' + xhr.status);
				
			}
		}
	} 
	let projectJSON = JSON.stringify(project);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(projectJSON);
}

function updateProject(projectId, project) {  
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', `api/projects/${projectId}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log('Project updated');
				displayProject(JSON.parse(xhr.responseText));
				loadAllProjects();
			}
			else if (xhr.status === 400) {
				displayError('Invalid data');
			}
			else {
				displayError('Error updating project: ' + xhr.status);
				
			}
		}
	} 
	let projectJSON = JSON.stringify(project);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(projectJSON);
}



function deleteProject(projectId) {  
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/projects/' + projectId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204 || xhr.status === 200) {
				console.log('Project deleted');
				loadAllProjects();
			}
			else if (xhr.status === 400) {
				displayError('Invalid data');
			}
			else {
				displayError('Error creating project: ' + xhr.status);
				
			}
		}
	} 
	xhr.send();
}



function displayProject(project) {
  let dataDiv = document.getElementById('projectDetails');
  dataDiv.textContent = '';
  let attributes = Object.getOwnPropertyNames(project);

  let name = document.createElement('h1');
  name.textContent = project.name;
  dataDiv.appendChild(name);

  let list = document.createElement('ul');
  for (let i=2; i < attributes.length; i++) {
	let item = document.createElement('li');
	item.textContent = project[attributes[i]];
	list.appendChild(item);
  }
  dataDiv.appendChild(list);
  
  //udpate Form
  let updateForm = document.getElementById('updateForm');
  	updateForm.textContent = '';
  	
  let form = document.createElement('form');
  	form.textContent = '';
  	updateForm.appendChild(form);
  
  let header = document.createElement('h1');
  	header.textContent = 'Update This Project:';
  	form.appendChild(header);
  	
  let label = document.createElement('label');
  	label.textContent = 'Project Name';
  	form.appendChild(label);
  let input = document.createElement('input');
	  input.setAttribute('type', 'text');
	  input.setAttribute('name', 'name');
	  input.setAttribute('value', project.name);
	  form.appendChild(input);

  label = document.createElement('label');
  	label.textContent = 'Description';
  	form.appendChild(label);
  input = document.createElement('input');
	  input.setAttribute('type', 'text');
	  input.setAttribute('name', 'description');
	  input.setAttribute('value', project.description);
	  form.appendChild(input);

  label = document.createElement('label');
  	label.textContent = 'Category';
  	form.appendChild(label);
  input = document.createElement('select');
	  input.setAttribute('name', 'category');
	  input.setAttribute('value', project.category);
	  form.appendChild(input);
  let option = document.createElement('option');
    option.setAttribute('value', 'Around The House');
  	option.textContent = "Around The House";
  	input.appendChild(option);
  option = document.createElement('option');
    option.setAttribute('value', 'Art');
  	option.textContent = "Art";
  	input.appendChild(option);
  option = document.createElement('option');
    option.setAttribute('value', 'Automotive');
  	option.textContent = "Automotive";
  	input.appendChild(option);
  option = document.createElement('option');
    option.setAttribute('value', 'Crafts');
  	option.textContent = "Crafts";
  	input.appendChild(option);
  option = document.createElement('option');
    option.setAttribute('value', 'Gardening');
  	option.textContent = "Gardening";
  	input.appendChild(option);
  option = document.createElement('option');
    option.setAttribute('value', 'Professional Development');
  	option.textContent = "Professional Development";
  	input.appendChild(option);

  label = document.createElement('label');
  	label.textContent = 'Status';
  	form.appendChild(label);
  input = document.createElement('select');
	  input.setAttribute('name', 'status');
	  input.setAttribute('value', project.status);
	  form.appendChild(input);
  option = document.createElement('option');
    option.setAttribute('value', 'One Day');
  	option.textContent = "One Day";
  	input.appendChild(option);
  option = document.createElement('option');
    option.setAttribute('value', 'In Progress');
  	option.textContent = "In Progress";
  	input.appendChild(option);
  option = document.createElement('option');
    option.setAttribute('value', 'Complete');
  	option.textContent = "Complete";
  	input.appendChild(option);

	let button = document.createElement('button');
		button.setAttribute('id', project.id);
		button.setAttribute('name', 'updateProject');
		button.innerHTML = "Edit Project";
		form.appendChild(button);


	button = document.createElement('button');
		button.setAttribute('id', project.id);
		button.setAttribute('name', 'deleteProject');
		button.innerHTML = "Delete Project";
		form.appendChild(button);

}
