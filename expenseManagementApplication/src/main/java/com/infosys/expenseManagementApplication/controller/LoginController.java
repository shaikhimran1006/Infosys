package com.infosys.expenseManagementApplication.controller;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infosys.expenseManagementApplication.bean.ExpenseUser;
import com.infosys.expenseManagementApplication.config.EncoderConfig;
import com.infosys.expenseManagementApplication.service.ExpenseUserService;

@RestController
@RequestMapping("/exp-mng/")
@CrossOrigin(origins = "http://localhost:5656")
public class LoginController {
	@Autowired
	private ExpenseUserService service;
	
	@Autowired
	private EncoderConfig econfig;
	
	
	@Autowired
    private AuthenticationManager authenticationManager;
	
	@PostMapping("/login")
	public void registerNewUser(@RequestBody ExpenseUser user ) {
     
		PasswordEncoder bCrypt=econfig.passwordEncoder();
		String encodePassword=bCrypt.encode(user.getPassword());
		user.setPassword(encodePassword);
		service.save(user);
		
}
	@GetMapping("/login/{userId}/{password}")
	public String validateUser(@PathVariable String userId,@PathVariable String password) {
		String category="false";
		try {
			Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userId, password));
 	    category=service.getCategory();
        SecurityContextHolder.getContext().setAuthentication(authentication);
			
		}catch(Exception ex) {}
		return category;
		
	}
	
}