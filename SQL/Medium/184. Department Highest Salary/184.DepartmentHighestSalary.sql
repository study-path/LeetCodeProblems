-- # Problem: https://leetcode.com/problems/department-highest-salary/description/

select d.name as Department , e.name as Employee , e.salary as Salary
from employee e
join (
    select departmentId,  Max(salary) maxSalary 
    from Employee 
    group by departmentId
) maxSalaryTable on maxSalaryTable.departmentId = e.departmentId and maxSalaryTable.maxSalary = e.salary
join Department as d on d.id = e.departmentId
