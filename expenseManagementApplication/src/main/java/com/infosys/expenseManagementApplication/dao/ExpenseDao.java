package com.infosys.expenseManagementApplication.dao;

import java.util.List;
import com.infosys.expenseManagementApplication.bean.Expense;

public interface ExpenseDao {
	public Expense save (Expense expense);
	public List<Expense> getAllExpenses();
	public Expense getExpenseById(String id);
	public Expense deleteExpenseById(String id);
	public List<Expense> getExpenseByCategory(Long categoryId);
	public String generateExpenseId();
	
	public List<Expense> getExpenseByCustomer(String customerId);

	

}
