-- # Problem: https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/
select teacher_id, count(DISTINCT (subject_id)) as cnt from Teacher
group by teacher_id