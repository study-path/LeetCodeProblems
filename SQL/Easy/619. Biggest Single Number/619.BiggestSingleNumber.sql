
-- # Problem: https://leetcode.com/problems/biggest-single-number/
# Write your MySQL query statement below

 select MAX(num) as num from (
    select num from MyNumbers 
    group by num
    HAVING Count(num) < 2
 ) as res


 



 