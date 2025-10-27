-- # Problem: https://leetcode.com/problems/swap-salary/

update Salary 
SET sex =  case 
    when sex = 'f' then 'm'
    when sex = 'm' then 'f'
end
