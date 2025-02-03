package com.deleteProduct.deleteProduct.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
public class dbConfig {
    @Bean
    CommandLineRunner initPostgresTables(JdbcTemplate jdbcTemplate) {
        return args -> {
        };
    }
}

