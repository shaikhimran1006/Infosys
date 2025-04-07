package com.infosys.expenseManagementApplication.dao;
import java.util.List;
import com.infosys.expenseManagementApplication.bean.Expense;

public interface ExpenseDao {
	public String generateExpenseNumber();
	public Expense save(Expense expense);
    public List<Expense> getAllExpenses();
    List<Expense> getExpensesByCustomer(String customerId);
    List<Expense> getExpensesByCategory(Long categoryId);
    
    public void deleteExpenseById(String id);
    public Expense getExpenseById(String id);
    
    List<Object[]> getTotalAmountByCategory(String customerId);
    List<Object[]> getTotalAmountByCategoryBetweenDates(String customerId, String startDate, String endDate);
    List<Object[]> fetchCategoryWiseTotal(String customerId);
    List<Object[]> fetchCategoryWiseTotalByDateRange(String customerId, String startDate, String endDate);



}
