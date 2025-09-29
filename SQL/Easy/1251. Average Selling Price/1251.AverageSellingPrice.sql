-- # Problem: https://leetcode.com/problems/average-selling-price/

select product_id, isnull(round(sum(average_price) * 1.0 / sum(units), 2), 0) as average_price
from (
 select p.product_id, units, units * price as average_price
 from UnitsSold as u
 right join Prices as p on p.product_id = u.product_id and u.purchase_date between p.start_date and p.end_date
) a
group by product_id
