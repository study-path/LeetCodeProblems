-- # Problem: https://leetcode.com/problems/user-activity-for-the-past-30-days-i/description/

 select DISTINCT  activity_date as day, count( distinct user_id) as active_users from Activity
 where activity_date BETWEEN  DATEADD(DAY, -30, '2019-07-28') and  '2019-07-28'
 group by activity_date