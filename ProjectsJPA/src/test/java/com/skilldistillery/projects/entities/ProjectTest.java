package com.skilldistillery.projects.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ProjectTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Project project;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("ProjectsJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		project = em.find(Project.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		project = null;
	}

	@Test
	void test_Project_name_mapping() {
		assertNotNull(project);
		assertEquals("Faerie Pot", project.getName());
	}
	
	@Test
	void test_Project_category_mapping() {
		assertNotNull(project);
		assertEquals("Crafts", project.getCategory());
	}
	@Test
	void test_Project_status_mapping() {
		assertNotNull(project);
		assertEquals("One Day", project.getStatus());
	}

}
