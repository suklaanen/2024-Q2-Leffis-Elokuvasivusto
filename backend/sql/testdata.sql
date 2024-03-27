INSERT INTO Users (username, userRole, hashedPassword) VALUES
-- 1 - 5
('Viilipytty', 'ROLE_USER', 'hashed_password_here'),
('Jankka', 'ROLE_USER', 'hashed_password_here'),
('komediaa82', 'ROLE_USER', 'hashed_password_here'),
('Eloton', 'ROLE_USER', 'hashed_password_here'),
('vainse', 'ROLE_ADMIN', 'hashed_password_here'),
-- 6 - 10
('jokaToka', 'ROLE_USER', 'hashed_password_here'),
('Mikk0', 'ROLE_USER', 'hashed_password_here'),
('dramaqueen', 'ROLE_USER', 'hashed_password_here'),
('kauhistus', 'ROLE_USER', 'hashed_password_here'),
('Jest4s', 'ROLE_USER', 'hashed_password_here'),
-- 11 - 15
('AaveMaria', 'ROLE_USER', 'hashed_password_here'),
('siippa5', 'ROLE_USER', 'hashed_password_here'),
('Pastilli', 'ROLE_USER', 'hashed_password_here'),
('Huutista', 'ROLE_USER', 'hashed_password_here'),
('salaakaton', 'ROLE_USER', 'hashed_password_here'),
-- 16 - 20
('Kan-Joni', 'ROLE_USER', 'hashed_password_here'),
('poikamies', 'ROLE_USER', 'hashed_password_here'),
('Misu01', 'ROLE_USER', 'hashed_password_here'),
('maitotee', 'ROLE_USER', 'hashed_password_here'),
('lipettiin', 'ROLE_USER', 'hashed_password_here'),
-- 21 - 23
('Jenna', 'ROLE_ADMIN', 'hashed_password_here'),
('Siilinpieru', 'ROLE_USER', 'hashed_password_here'),
('PaijaanSUA', 'ROLE_USER', 'hashed_password_here');

-- Testidatan ryhmät
INSERT INTO Groups_ (groupName, groupDescription, userId) VALUES
('Ryhmärämä', 'kuvaus', 1), -- Omistaja: Viilipytty
('komediahullut', 'kuvaus', 2), -- Omistaja: Jankka
('tosimiesklubi', 'kuvaus', 5), -- Omistaja: vainse
('Stadin Muuvissa', 'kuvaus', 9), -- Omistaja: kauhistus
('SOTA-leffat', 'kuvaus', 10), -- Omistaja: Jest4s
('Draamailijat', 'kuvaus', 3), -- Omistaja: komediaa82
('kauhalla kauhuu', 'kuvaus', 6), -- Omistaja: jokaToka
('Tampereen seudun leffailijat', 'kuvaus', 12), -- Omistaja: siippa5
('Leffatiistai', 'kuvaus', 13), -- Omistaja: Pastilli
('Vain-sarjoja', 'kuvaus', 7), -- Omistaja: Mikk0
('Suomalaista filmii', 'kuvaus', 16), -- Omistaja: Kan-Joni
('lastenleffat', 'kuvaus', 14), -- Omistaja: Huutista
('Äksönittäret', 'kuvaus', 1), -- Omistaja: Viilipytty
('Hevosaiheiset elokuvat', 'kuvaus', 8), -- Omistaja: dramaqueen
('Oulun oikeamieliset', 'kuvaus', 11); -- Omistaja: AaveMaria

-- Liitokset ryhmään 'Ryhmärämä'
-- Omistaja: 1 = Viilipytty
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(2, 1, 'accepted'),
(3, 1, 'pending'),  
(6, 1, 'accepted'), 
(8, 1, 'accepted'), 
(22, 1, 'accepted'), 
(9, 1, 'accepted'); 

-- Liitokset ryhmään 'komediahullut'
-- Omistaja: 2 = Jankka
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(1, 2, 'pending'),  
(4, 2, 'accepted'), 
(5, 2, 'accepted'), 
(7, 2, 'accepted'), 
(10, 2, 'pending'); 

-- Ryhmä 'tosimiesklubi'
-- Omistaja: 5 = vainse
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(1, 3, 'pending'),  
(2, 3, 'accepted'), 
(4, 3, 'accepted'), 
(6, 3, 'accepted'), 
(7, 3, 'accepted'), 
(8, 3, 'accepted'), 
(22, 3, 'accepted'), 
(9, 3, 'accepted'), 
(10, 3, 'pending'); 

-- Ryhmä 'Stadin Muuvissa'
-- Omistaja: 9 = kauhistus
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(2, 4, 'accepted'),  
(4, 4, 'accepted'),  
(6, 4, 'accepted'),  
(8, 4, 'accepted'), 
(10, 4, 'accepted'), 
(11, 4, 'pending'), 
(12, 4, 'pending'), 
(13, 4, 'pending'); 

-- Ryhmä 'SOTA-leffat'
-- Omistaja: 10 = Jest4s
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(3, 5, 'accepted'),  
(7, 5, 'accepted'),  
(9, 5, 'accepted'), 
(12, 5, 'pending'),  
(15, 5, 'pending'); 

-- Ryhmä 'Draamailijat'
-- Omistaja: 3 = komediaa82
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(5, 6, 'accepted'), 
(6, 6, 'accepted'), 
(21, 6, 'accepted'), 
(8, 6, 'pending'), 
(11, 6, 'pending'); 

-- Ryhmä 'kauhalla kauhuu'
-- Omistaja: 6 = jokaToka
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(1, 7, 'accepted'),  
(2, 7, 'pending'),  
(9, 7, 'accepted'), 
(10, 7, 'accepted'), 
(12, 7, 'pending'),
(14, 7, 'pending'); 

-- Ryhmä 'Tampereen seudun leffailijat'
-- Omistaja: 12 = siippa5
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(3, 8, 'accepted'),   
(5, 8, 'accepted'),  
(6, 8, 'accepted'),  
(7, 8, 'accepted'),
(9, 8, 'pending'),  
(11, 8, 'pending'); 

-- Ryhmä 'Leffatiistai'
-- Omistaja: 13 = Pastilli
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(1, 9, 'pending'),   
(2, 9, 'accepted'),
(4, 9, 'accepted'),  
(5, 9, 'accepted'), 
(6, 9, 'accepted'),   
(7, 9, 'accepted'), 
(8, 9, 'accepted'), 
(9, 9, 'accepted'), 
(11, 9, 'accepted'), 
(12, 9, 'accepted'); 

-- Ryhmä 'Vain-sarjoja'
-- Omistaja: 7 = Mikk0
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(1, 10, 'accepted'), 
(2, 10, 'pending'), 
(5, 10, 'accepted'), 
(6, 10, 'accepted'), 
(9, 10, 'pending'), 
(11, 10, 'accepted'),
(12, 10, 'accepted'); 

-- Ryhmä 'Suomalaista filmii'
-- Omistaja: 16 = Kan-Joni
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(3, 11, 'accepted'), 
(5, 11, 'accepted'),
(6, 11, 'accepted'), 
(9, 11, 'accepted'),
(11, 11, 'accepted'); 

-- Ryhmä 'lastenleffat'
-- Omistaja: 14 = Huutista
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(2, 12, 'accepted'),  
(5, 12, 'accepted'), 
(6, 12, 'accepted'), 
(10, 12, 'accepted'), 
(12, 12, 'accepted');  

-- Ryhmä 'Äksönittäret'
-- Omistaja: 1 = Viilipytty
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(1, 13, 'pending'),   
(2, 13, 'accepted'), 
(4, 13, 'accepted'),  
(5, 13, 'accepted'), 
(6, 13, 'accepted'),  
(7, 13, 'accepted'), 
(9, 13, 'accepted'), 
(11, 13, 'accepted'), 
(12, 13, 'accepted');  

-- Ryhmä 'Hevosaiheiset elokuvat'
-- Omistaja: 8 = dramaqueen
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(1, 14, 'accepted'), 
(2, 14, 'accepted'), 
(5, 14, 'accepted'),
(6, 14, 'accepted'), 
(8, 14, 'accepted'),  
(9, 14, 'accepted'), 
(10, 14, 'accepted'); 

-- Ryhmä 'Oulun oikeamieliset'
-- Omistaja: 11 = AaveMaria
INSERT INTO UsersToGroups (userId, groupId, status) VALUES
(1, 15, 'accepted'),
(2, 15, 'accepted'),
(4, 15, 'accepted'),
(6, 15, 'accepted'),
(8, 15, 'accepted'),
(9, 15, 'accepted'),
(10, 15, 'accepted');