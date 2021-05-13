package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.example.demo.model.Advertisement;

@Repository
public interface AdRepository extends JpaRepository<Advertisement, Long>{

    List<Advertisement> findByUserId(long userId);
    public List<Advertisement> findByCompanyNameAndStatus(String companyName,String status);


    //List<String> findDistinctByCompanyName();
}