package com.infosys.expenseManagementApplication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.*;

import com.infosys.expenseManagementApplication.bean.ExpenseUser;
import com.infosys.expenseManagementApplication.dao.ExpenseUserRepository;


@Service
public class ExpenseUserService implements UserDetailsService {
	@Autowired
	private ExpenseUserRepository repository;
	
	private String userId,category,email;
	
	private void save(ExpenseUser user) {
		repository.save(user);
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	    ExpenseUser user = repository.findById(username)
	            .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));

	    this.userId = user.getUsername();
	    this.category = user.getCategory();
	    this.email = user.getEmail();
	    return user;
	}


	public String getUserId() {
	    return userId;
	}


	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
	}
