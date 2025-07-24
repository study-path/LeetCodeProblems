-- # Problem: https://leetcode.com/problems/sales-person/

select name from SalesPerson 
where not  exists (select 1 from Orders 
                    join Company on Company.com_id = Orders.com_id and Company.name = 'RED'
                    where Orders.sales_id = SalesPerson.sales_id )