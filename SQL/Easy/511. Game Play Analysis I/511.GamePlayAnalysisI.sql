-- # Problem: https://leetcode.com/problems/game-play-analysis-i/
select player_id , Min(event_date) as first_login from Activity
where player_id = player_id 
group by player_id