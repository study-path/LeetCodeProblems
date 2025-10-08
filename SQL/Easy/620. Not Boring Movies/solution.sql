-- # Problem: https://leetcode.com/problems/not-boring-movies/
select * from Cinema
where id % 2 != 0 and   not description = 'boring'
order by rating desc
