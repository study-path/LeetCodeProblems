-- # Problem: https://leetcode.com/problems/rank-scores/

select score , DENSE_RANK() over ( ORDER BY score desc) as rank from Scores