
-- # Problem: https://leetcode.com/problems/product-sales-analysis-i/
select product_name, year,  price from Sales
inner join Product on Sales.product_id  = Product.product_id
 



 