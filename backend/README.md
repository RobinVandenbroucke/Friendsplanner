# Friendsplanner
## Uitwerking
Database maken met verschillende tabellen zoals: 
- User(id, email, password, display_name) 
- Group(id, name, description, created_by)
- GroupMember(id, group_id, user_id, role, status, joinedAt)
- Event(id, group_id, user_id, title, description, starts_at, ends_at, visibility, location)
- EventAttendee(id, event_id, user_id, status)
- Invitation(id, group_id, invitedEmail, invitedBy, expires_at, accepted_at, createdAt, invitedUserId)
- Notification(id, user_id, event_id, type, subject, body, status, createdAt)
...

## Opmerkingen
Als er nog veranderingen moet gebeuren dan wordt dit wel midden het project besproken

__Best alles in het Engels programmeren is makkelijker uitbreidbaar voor later!__