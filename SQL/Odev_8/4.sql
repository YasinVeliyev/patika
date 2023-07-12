DELETE FROM employee
WHERE id=1 OR name='Jon' OR (birthday='1993-05-01' AND name='Aleece') 
OR email='mwheatcroft121@dailymail.co.uk' OR name='Bryn';
