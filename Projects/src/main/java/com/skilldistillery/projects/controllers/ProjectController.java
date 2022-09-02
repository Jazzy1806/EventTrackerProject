package com.skilldistillery.projects.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.projects.entities.Project;
import com.skilldistillery.projects.services.ProjectService;

@RestController
@RequestMapping("api")
public class ProjectController {
	
	@Autowired
	private ProjectService projectServe;
	
	@GetMapping("projects")
	public List<Project> allProjects(HttpServletResponse resp) {
		List<Project> projects = projectServe.getAllProjects();
		if (projects == null) {
			resp.setStatus(404);
		}
		return projects;
	}
	
	
	@GetMapping("projects/{projectId}")
	public Project getProjectById(@PathVariable int projectId, HttpServletResponse resp) {
		Project project = projectServe.findByProjectId(projectId);
		if (project == null) {
			resp.setStatus(404);
		}
		return project;
	}
	
	@PostMapping("projects")
	public Project addProject(@RequestBody Project project, HttpServletRequest req, HttpServletResponse resp) {
		project = projectServe.addProject(project);
		if (project == null) {
			resp.setStatus(404);
		} else {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(project.getId());
			resp.setHeader("Location", url.toString());
		}
		return project;
	}
	
	
	@PutMapping("projects/{projectId}")
	public Project updateProject(@PathVariable int projectId, @RequestBody Project project, HttpServletResponse resp) {
		try {
			Project projectUpdate = projectServe.updateProject(projectId, project);
			if (projectUpdate == null) {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			project = null;
		}
		return project;
	}
	
	@DeleteMapping("projects/{projectId}")
	public void deleteProject(@PathVariable int projectId, HttpServletResponse resp) {
		try {
			if (projectServe.deleteProject(projectId)) {
				resp.setStatus(204);
			}
			else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
	}
}