-- # Problem: https://leetcode.com/problems/employee-bonus/
select name, bonus from Employee
left join Bonus on Employee.empId = Bonus.empId
where bonus <1000 or bonus is null