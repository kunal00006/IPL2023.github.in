# IPL team
 IPL team using HTML, CSS, JS
 

Problem Details:
●	The frontend application needs to be implemented using HTML, CSS, and JavaScript and for data handling use local storage.
●	You have to design the UI for all the web pages as well.
●	On the homepage show a card-based grid of all the teams. On the
team card, the click takes the user to the team details page.
●	Team Details Page will have following information:
○	Team Name
○	Team Icon
○	Player Count
○	Top Batsman
○	Top Bowler
○	Championship Won Count
○	Card grid with all the players. Player card should have the following
information:
➢	Full Name
➢	Photo
➢	Team
➢	Price
➢	Playing Status - Playing or On-bench
➢	Role - Batsman, Bowler, or All-rounder.
○	Player card click should take to the player details page. Player
the details page will have the same details as the card but with a
different design.

●	From the homepage, users can also search players from different
teams by entering a team name. For example - MI(Mumbai Indians),
RR(Rajasthan Royals) etc. You should return all players present in the
local storage from the same team searched by the user.
●	The top bar should have a button using which the users can add new
teams and new players inside the local storage. When a new
team/player is added, it should be visible on the screen as well.
Players Data should be in the given format:
 ```
 {
                "id": 0,
                "playerName": "MSDhoni",
                "player_Name":"Mahendra Singh Dhoni",
                "from": "CSK",
                "price": "5.1 Cr",
                "isPlaying": true,
                "description": "Batsman"
            }
 ```

 
 while opening the html page you will see the home page like below image. From 4 teams you can choose one to view players details.
![Screenshot from 2022-03-16 21-42-17](https://user-images.githubusercontent.com/101729212/158637169-7df057af-f43c-4ed9-92c5-f62f18f81211.png)

left side you can see the details of the team and main view you can see the all the player's images you can click on anyone you want to check the details of that player.
![Screenshot from 2022-03-16 21-43-23](https://user-images.githubusercontent.com/101729212/158637061-eeee3378-4b91-4fdb-abe3-fdc3bb77c15c.png)

once you clicked on profile image of players you will see the below page. 
![Screenshot from 2022-03-16 21-43-51](https://user-images.githubusercontent.com/101729212/158637127-860d42e7-d44b-47d6-a03b-433a5cd155db.png)
