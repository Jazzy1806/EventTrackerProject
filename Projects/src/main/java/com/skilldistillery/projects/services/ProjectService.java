package com.skilldistillery.projects.services;

import java.util.List;

import com.skilldistillery.projects.entities.Project;

public interface ProjectService {

	List<Project> getAllProjects();
	
	Project findByProjectId(int projectId);

	Project addProject(Project project);
	
	Project updateProject(Integer projectId, Project project);
	
	boolean deleteProject(Integer projectId);
}