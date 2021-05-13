package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    public User findByEmailId(String emailId);

    @Query("select distinct companyName from User ")
    List<String> findDistinctCompanyName();
}