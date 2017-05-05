package com.vcu.dbproj.repository;

import com.vcu.dbproj.domain.Operation;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Operation entity.
 */
@SuppressWarnings("unused")
public interface OperationRepository extends JpaRepository<Operation,Long> {

}
