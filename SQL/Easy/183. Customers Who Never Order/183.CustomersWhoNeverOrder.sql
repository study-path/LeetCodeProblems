-- # Problem: https://leetcode.com/problems/customers-who-never-order/

select name as Customers from  Customers
left join Orders on Customers.id = Orders.customerId  
where orders.id is null