package com.tvs.bike.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tvs.bike.models.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long> {

}
