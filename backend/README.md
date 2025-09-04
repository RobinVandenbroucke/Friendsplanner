# Friendsplanner
## Uitwerking
Database maken met verschillende tabellen zoals: 
- User(id, email, password, display_name) 
- Group(id, name, description, created_by)
- GroupMember(group_id, user_id, role, status)
- Event(id, group_id, user_id, title, description, starts_at, ends_at, visibility)
- EventAttendee(event_id, user_id, status)
- Invitation(id, group_id, invited_email, expires_at, accepted_at)
- Notification(id, user_id, event_id, type, status)
...

## Opmerkingen
Als er nog veranderingen moet gebeuren dan word dit wel midden het project besproken

__Best alles in het Engels programmeren is makkelijker uitbreidbaar voor later!__