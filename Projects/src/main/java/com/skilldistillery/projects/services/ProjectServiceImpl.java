package com.skilldistillery.projects.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.projects.entities.Project;
import com.skilldistillery.projects.repositories.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService{
	
	@Autowired
	private ProjectRepository projectRepo;

	
	@Override
	public List<Project> getAllProjects() {
		return projectRepo.findAll();
	}

	
	@Override
	public Project findByProjectId(int projectId) {
		if (! projectRepo.existsById(projectId)) {
			return null;
		} else {
			Project project = (projectRepo.findById(projectId)).get();
			return project;
		}
	}

	
	@Override
	public Project addProject(Project project) {
		if (project != null) {
			project = projectRepo.saveAndFlush(project);
			return project;
		}
		return null;
	}

	
	@Override
	public Project updateProject(Integer projectId, Project project) {
	    Optional<Project> projectOpt = projectRepo.findById(projectId);
	    Project updated = null;
	
	    if (projectOpt.isPresent()) {
	        updated = projectOpt.get();
	        if(project.getName() != null) {
	            updated.setName(project.getName());
	        }
	        if(project.getDescription() != null) {
	        	updated.setDescription(project.getDescription());
	        }
	        if(project.getCategory() != null) {
	            updated.setCategory(project.getCategory());
	        }
	        if(project.getStatus() != null) {
	            updated.setStatus(project.getStatus());
	        }
	         projectRepo.saveAndFlush(updated);
	    }
	    return updated;
	}


	@Override
	public boolean deleteProject(Integer projectId) {
		Optional<Project> project = projectRepo.findById(projectId);
		if (project.isPresent()) {
			projectRepo.deleteById(projectId);
		}
		return ! projectRepo.existsById(projectId);
		}
	}