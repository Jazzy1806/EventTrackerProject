package com.skilldistillery.projects.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.projects.entities.Project;

public interface ProjectRepository extends JpaRepository<Project, Integer>{

}
