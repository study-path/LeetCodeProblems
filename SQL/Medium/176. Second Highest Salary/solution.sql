-- # Problem: https://leetcode.com/problems/second-highest-salary

select MAX(salary)  SecondHighestSalary
from Employee 
where Salary < (select max(salary) from Employee)
