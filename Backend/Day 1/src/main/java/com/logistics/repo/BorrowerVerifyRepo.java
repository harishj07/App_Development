package com.logistics.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.logistics.entities.BorrowerVerifyEntity;


@Repository
public interface BorrowerVerifyRepo extends JpaRepository<BorrowerVerifyEntity, Integer> {

}

