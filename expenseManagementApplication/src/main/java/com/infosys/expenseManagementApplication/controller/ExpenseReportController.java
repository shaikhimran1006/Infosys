package com.infosys.expenseManagementApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.infosys.expenseManagementApplication.bean.Customer;
import com.infosys.expenseManagementApplication.bean.Expense;
import com.infosys.expenseManagementApplication.dao.ExpenseDao;
import com.infosys.expenseManagementApplication.dao.CustomerDao;
import com.infosys.expenseManagementApplication.service.ExpenseUserService;

@RestController
@RequestMapping("/exp-mng/")
@CrossOrigin(origins = "http://localhost:5656")
public class ExpenseReportController {

    @Autowired
    private ExpenseDao expenseDao;

    @Autowired
    private CustomerDao customerDao;

    @Autowired
    private ExpenseUserService service;


@PostMapping ("/expense")
public void save(@RequestBody Expense expense) {
expenseDao.save(expense);
}

@PutMapping ("/expense")
public void update(@RequestBody Expense expense) {
expenseDao.save(expense);
}

@GetMapping("/expense")
public List<Expense> getAllExpenses() {
    return expenseDao.getAllExpenses();
}

@GetMapping("/expense/{id}")
public Expense getExpenseById(@PathVariable String id) { 
	return expenseDao.getExpenseById(id);
}

@DeleteMapping ("/expense/{id}")
public void deleteExpenseById(@PathVariable String id) {
	expenseDao.deleteExpenseById(id);
}

@GetMapping("/expense-cat")
public List<Expense> getExpensesByCategory(Long categoryId){
	return expenseDao.getExpensesByCategory(categoryId);
}

@GetMapping("/expense-cust")
public List<Expense> getExpensesByCustomer(){
	String userId=service.getUserId();
	Customer customer=customerDao.getCustomerByUsername(userId);
	String customerId=customer.getCustomerId();
	return expenseDao.getExpensesByCustomer(customerId);
}

@GetMapping("/expense-cust/{id}")
public List<Expense> getExpensesByCustomer(@PathVariable String id){
	return expenseDao.getExpensesByCustomer(id);
}

@GetMapping("/expense-id")
public String generateExpenseId() {
	return expenseDao.generateExpenseId();
}
}