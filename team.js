let id=localStorage.getItem("id");
const teamsData=[
    {
        "id":0,
        "name":"CSK",
        "logo":"./Assets/Teams/Chennai.jpg",
        "chamiponship count":4,
        "captain":"Mahendra Singh Dhoni",
        "top batsman":"Suresh Raina",
        "top bowler":"Ravichandran Ashwin",
        "color":"linear-gradient(160deg,rgb(5, 156, 194),rgb(250, 174, 9))",
        "players":[
            {
                "id": 0,
                "playerName": "MSDhoni",
                "player_Name":"Mahendra Singh Dhoni",
                "from": "CSK",
                "price": "5.1 Cr",
                "isPlaying": true,
                "description": "Batsman"
            },
            {
                "id": 1,
                "playerName": "RavindraJadeja",
                "player_Name": "Ravindra Jadeja",
                "from": "CSK",
                "price": "11.0 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
            {
                "id": 2,
                "playerName": "MoeenAli",
                "player_Name": "Moeen Ali",
                "from": "CSK",
                "price": "8.0 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
            {
                "id":3 ,
                "playerName": "RajvardhanHangargekar",
                "player_Name": "Rajvardhan Hangargekar",
                "from": "CSK",
                "price": "5.3 Cr",
                "isPlaying": true,
                "description": "Bowler"
            },
             {
                "id": 4,
                "playerName": "RuturajGaikwad",
                "player_Name": "Ruturaj Gaikwad",
                "from": "CSK",
                "price": "7.0 Cr",
                "isPlaying": true,
                "description": "Batsman"
            },
            {
                "id": 5,
                "playerName": "AmbatiRayudu",
                "player_Name": "Ambati Rayudu",
                "from": "CSK",
                "price": "13.0 Cr",
                "isPlaying": true,
                "description": "Batsman"
            },
             {
                "id": 6,
                "playerName": "DwainePretorius",
                "player_Name": "Dwaine Pretorius",
                "from": "CSK",
                "price": "4.5 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
             {
                "id": 7,
                "playerName": "BhagathVarma",
                "player_Name": "Bhagath Varma",
                "from": "CSK",
                "price": "5.0 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
             {
                "id": 8,
                "playerName": "SimarjeetSingh",
                "player_Name": "Simarjeet Singh",
                "from": "CSK",
                "price": "2.4 Cr",
                "isPlaying": true,
                "description": "Bowler"
            },
             {
                "id": 9,
                "playerName": "PrashantSolanki",
                "player_Name": "Prashant Solanki",
                "from": "CSK",
                "price": "5.1 Cr",
                "isPlaying": true,
                "description": "Bowler"
            },
             {
                "id": 10,
                "playerName": "ChrisJordan",
                "player_Name": "Chris Jordan",
                "from": "CSK",
                "price": "1.3 Cr",
                "isPlaying": true,
                "description": "Bowler"
            },
             {
                "id": 11,
                "playerName": "AdamMilne",
                "player_Name": "Adam Milne",
                "from": "CSK",
                "price": "30 Lakhs",
                "isPlaying": false,
                "description": "Bowler"
            },
            
        ],
    },
    {
        "id":1,
        "name":"DC",
        "logo":"./Assets/Teams/Delhi.jpg",
        "chamiponship count":0,
        "captain":"Shreyas Iyer",
        "top batsman":"Shreyas Iyer",
        "top bowler":"Kagiso Rabada",
        "color":"linear-gradient(160deg,rgb(12, 117, 236),rgb(253, 69, 23))",
        "players":[
            {
                "id": 0,
                "playerName": "DavidWarner",
                "player_Name": "David Warner",
                "from": "DC",
                "price": "23 Cr",
                "isPlaying": true,
                "description": "Batsman"
            },
            {
                "id": 1,
                "playerName": "PrithviShaw",
                "player_Name": "Prithvi Shaw",
                "from": "DC",
                "price": "10.0 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
            {
                "id": 2,
                "playerName": "MitchellMarsh",
                "player_Name": "Mitchell Marsh",
                "from": "DC",
                "price": "7.8 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
             {
                "id": 3,
                "playerName": "RishabhPant",
                "player_Name": "Rishabh Pant",
                "from": "DC",
                "price": "13.0 Cr",
                "isPlaying": true,
                "description": "Batsman"
            },
             {
                "id": 4,
                "playerName": "SarfarazKhan",
                "player_Name": "Sarfaraz Khan",
                "from": "DC",
                "price": "5.8 Cr",
                "isPlaying": true,
                "description": "Batsman"
            },
             {
                "id": 5,
                "playerName": "KuldeepYadav",
                "player_Name": "Kuldeep Yadav",
                "from": "DC",
                "price": "5.3 Cr",
                "isPlaying": true,
                "description": "Bowler"
            },
             {
                "id": 6,
                "playerName": "AxarPatel",
                "player_Name": "Axar Patel",
                "from": "DC",
                "price": "4.7 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
             {
                "id": 7,
                "playerName": "LungisaniNgidi",
                "player_Name": "Lungisani Ngidi",
                "from": "DC",
                "price": "7.9 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
             {
                "id": 8,
                "playerName": "UmeshYadav",
                "player_Name": "Umesh Yadav",
                "from": "DC",
                "price": "28 Lakhs",
                "isPlaying": true,
                "description": "Bowler"
            },
             {
                "id": 9,
                "playerName": "LalitYadav",
                "player_Name": "Lalit Yadav",
                "from": "DC",
                "price": "96 Lakhs",
                "isPlaying": true,
                "description": "Bowler"
            },
             {
                "id": 10,
                "playerName": "TimSeifert",
                "player_Name": "Tim Seifert",
                "from": "DC",
                "price": "1.3 Cr",
                "isPlaying": true,
                "description": "Bowler"
            },
             {
                "id": 11,
                "playerName": "YashDhull",
                "player_Name": "Yash Dhull",
                "from": "DC",
                "price": "30 Lakhs",
                "isPlaying": true,
                "description": "Bowler"
            },
            
        ]
    },
    {
        "id":2,
        "name":"KKR",
        "logo":"./Assets/Teams/Kolkata.jpg",
        "chamiponship count":2,
        "captain":"Eoin Morgan",
        "top batsman":"Shubman Gill",
        "top bowler":"Varun Chakravarthy",
        "color":"linear-gradient(160deg,rgb(3, 2, 97),rgb(201, 156, 10))",
        "players":[
            {
                "id": 0,
                "playerName": "VenkateshIyer",
                "player_Name": "Venkatesh Iyer",
                "from": "KKR",
                "price": "4.0 Cr",
                "isPlaying": true,
                "description": "Batsman"
            },
            {
                "id": 1,
                "playerName": "NitishRana",
                "player_Name": "Nitish Rana",
                "from": "KKR",
                "price": "10.0 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
            {
                "id": 2,
                "playerName": "AndreRussell",
                "player_Name": "Andre Russell",
                "from": "KKR",
                "price": "8.5 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
             {
                "id": 3,
                "playerName": "ShreyasIyer",
                "player_Name": "Shreyas Iyer",
                "from": "KKR",
                "price": "13.3 Cr",
                "isPlaying": true,
                "description": "Batsman"
            },
             {
                "id": 4,
                "playerName": "SunilNarine",
                "player_Name": "Sunil Narine",
                "from": "KKR",
                "price": "5.0 Cr",
                "isPlaying": true,
                "description": "Batsman",
                "players":[
                    {
                        "id": 0,
                        "playerName": "RohitSharma",
                        "player_Name": "Rohit Sharma",                        
                        "from": "MI",
                        "price": "5.1 Cr",
                        "isPlaying": true,
                        "description": "Batsman"
                    },
                    {
                        "id": 1,
                        "playerName": "IshanKisan",
                        "player_Name": "Ishan Kisan",                        
                        "from": "MI",
                        "price": "15.8 Cr",
                        "isPlaying": true,
                        "description": "Batsman"
                    },
                    {
                        "id": 2,
                        "playerName": "SuryakumarYadav",
                        "player_Name": "Suryakumar Yadav",                        
                        "from": "MI",
                        "price": "5.9 Cr",
                        "isPlaying": true,
                        "description": "Batsman"
                    },
                    {
                        "id": 3,
                        "playerName": "KieronPollard",
                        "player_Name": "Kieron Pollard",                        
                        "from": "MI",
                        "price": "9.0Cr",
                        "isPlaying": true,
                        "description": "All-rounder"
                    },
                    {
                        "id": 4,
                        "playerName": "JaspritBumrah",
                        "player_Name": "Jasprit Bumrah",                        
                        "from": "MI",
                        "price": "4.3 Cr",
                        "isPlaying": true,
                        "description": "Bowler"
                    },
                    {
                        "id": 5,
                        "playerName": "SanjayYadav",
                        "player_Name": "Sanjay Yadav",                        
                        "from": "MI",
                        "price": "34 Lakhs",
                        "isPlaying": true,
                        "description": "Batsman"
                    },
                    {
                        "id": 6,
                        "playerName": "ArjunTendulkar",
                        "player_Name": "Arjun Tendulkar",                        
                        "from": "MI",
                        "price": "1.0 Cr",
                        "isPlaying": true,
                        "description": "Batsman"
                    },
                    {
                        "id": 7,
                        "playerName": "TilakVerma",
                        "player_Name": "Tilak Verma",                        
                        "from": "MI",
                        "price": "1.2 Cr",
                        "isPlaying": true,
                        "description": "Bowler"
                    },
                    {
                        "id": 8,
                        "playerName": "AryanJuyal",
                        "player_Name": "Aryan Juyal",                        
                        "from": "MI",
                        "price": "3 Cr",
                        "isPlaying": true,
                        "description": "All-rounder"
                    },
                    {
                        "id": 9,
                        "playerName": "MuruganAshwin",
                        "player_Name": "Murugan Ashwin",                        
                        "from": "MI",
                        "price": "78 Lakhs",
                        "isPlaying": true,
                        "description": "Bowler"
                    },
                    {
                        "id": 10,
                        "playerName": "RamandeepSingh",
                        "player_Name": "Ramandeep Singh",                        
                        "from": "MI",
                        "price": "3.7 Cr",
                        "isPlaying": true,
                        "description": "Bolwer"
                    },
                    {
                        "id": 11,
                        "playerName": "TimDavid",
                        "player_Name": "Tim David",                        
                        "from": "MI",
                        "price": "45 Lakhs",
                        "isPlaying": true,
                        "description": "Bowler"
                    },
                ]
            },
             {
                "id": 5,
                "playerName": "TimSouthee",
                "player_Name": "Tim Southee",
                "from": "KKR",
                "price": "5.3 Cr",
                "isPlaying": true,
                "description": "Bowler"
            },
             {
                "id": 6,
                "playerName": "AshokSharma",
                "player_Name": "Ashok Sharma",
                "from": "KKR",
                "price": "4.9 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
             {
                "id": 7,
                "playerName": "MohammadNabi",
                "player_Name": "Mohammad Nabi",
                "from": "KKR",
                "price": "7.0 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
             {
                "id": 8,
                "playerName": "UmeshYadav",
                "player_Name": "Umesh Yadav",
                "from": "KKR",
                "price": "23 Lakhs",
                "isPlaying": true,
                "description": "Bowler"
            },
             {
                "id": 9,
                "playerName": "RasikhSalam",
                "player_Name": "Rasikh Salam",
                "from": "KKR",
                "price": "67 Lakhs",
                "isPlaying": true,
                "description": "Bowler"
            },
             {
                "id": 10,
                "playerName": "PrathamSingh",
                "player_Name": "Pratham Singh",
                "from": "KKR",
                "price": "1.3 Cr",
                "isPlaying": true,
                "description": "Bowler"
            },
             {
                "id": 11,
                "playerName": "AlexHales",
                "player_Name": "Alex Hales",
                "from": "KKR",
                "price": "38 Lakhs",
                "isPlaying": true,
                "description": "Bowler"
            },
            
        ]
    },
    {
        "id":3,
        "name":"MI",
        "logo":"./Assets/Teams/Mumbai.jpg",
        "chamiponship count":5,
        "captain":"Rohit Sharma",
        "top batsman":"Ishan Kishan",
        "top bowler":"Jasprit Bumrah",
        "color":"linear-gradient(160deg,rgb(255, 123, 0),rgb(255, 230, 0),rgb(158, 197, 18),rgb(13, 95, 13))",
        "players":[
            {
                "id": 0,
                "playerName": "RohitSharma",
                "player_Name": "Rohit Sharma",
                "from": "MI",
                "price": "5.1 Cr",
                "isPlaying": true,
                "description": "Batsman"
            },
            {
                "id": 1,
                "playerName": "ik",
                "player_Name": "Ishan Kisan",
                "from": "MI",
                "price": "15.8 Cr",
                "isPlaying": true,
                "description": "Batsman"
            },
            {
                "id": 2,
                "playerName": "SuryakumarYadav",
                "player_Name": "Suryakumar Yadav",
                "from": "MI",
                "price": "5.9 Cr",
                "isPlaying": true,
                "description": "Batsman"
            },
            {
                "id": 3,
                "playerName": "KieronPollard",
                "player_Name": "Kieron Pollard",
                "from": "MI",
                "price": "9.0Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
            {
                "id": 4,
                "playerName": "JaspritBumrah",
                "player_Name": "Jasprit Bumrah",
                "from": "MI",
                "price": "4.3 Cr",
                "isPlaying": true,
                "description": "Bowler"
            },
            {
                "id": 5,
                "playerName": "SanjayYadav",
                "player_Name": "Sanjay Yadav",
                "from": "MI",
                "price": "34 Lakhs",
                "isPlaying": true,
                "description": "Batsman"
            },
            {
                "id": 6,
                "playerName": "ArjunTendulkar",
                "player_Name": "Arjun Tendulkar",
                "from": "MI",
                "price": "1.0 Cr",
                "isPlaying": true,
                "description": "Batsman"
            },
            {
                "id": 7,
                "playerName": "TilakVerma",
                "player_Name": "Tilak Verma",
                "from": "MI",
                "price": "1.2 Cr",
                "isPlaying": true,
                "description": "Bowler"
            },
            {
                "id": 8,
                "playerName": "AryanJuyal",
                "player_Name": "Aryan Juyal",
                "from": "MI",
                "price": "3 Cr",
                "isPlaying": true,
                "description": "All-rounder"
            },
            {
                "id": 9,
                "playerName": "MuruganAshwin",
                "player_Name": "Murugan Ashwin",
                "from": "MI",
                "price": "78 Lakhs",
                "isPlaying": true,
                "description": "Bowler"
            },
            {
                "id": 10,
                "playerName": "RamandeepSingh",
                "player_Name": "Ramandeep Singh",
                "from": "MI",
                "price": "3.7 Cr",
                "isPlaying": true,
                "description": "Bolwer"
            },
            {
                "id": 11,
                "playerName": "TimDavid",
                "player_Name": "Tim David",
                "from": "MI",
                "price": "45 Lakhs",
                "isPlaying":false,
                "description": "Bowler"
            },
        ]
    },
    {
        "id":4,
        "name":"Punjab Kings",
        "logo":"./Assets/Teams/Punjab.jpg",
        "chamiponship count":0,
        "captain":"KL Rahul",
        "top batsman":"KL Rahul",
        "top bowler":"Mohammad Shami",
        "color":"linear-gradient(160deg,red,rgb(231, 124, 124))"
    },
    {
        "id":5,
        "name":"Rajasthan Royals",
        "logo":"./Assets/Teams/Rajasthan.jpg",
        "chamiponship count":1,
        "captain":"Steve Smith",
        "top batsman":"Sanju Samson",
        "top bowler":"Jofra Archer",
        "color":"linear-gradient(160deg,rgb(233, 66, 94),rgb(204, 134, 134))"
    },
    {
        "id":6,
        "name":"Royal Challengers Bangalore",
        "logo":"./Assets/Teams/Bangalore.jpg",
        "chamiponship count":0,
        "captain":"Virat Kohli",
        "top batsman":"Devdutt Padikkal",
        "top bowler":"Yuzvendra Chahal",
        "color":"linear-gradient(160deg,rgb(235, 220, 134),black)"
    },
    {
        "id":7,
        "name":"Sunrisers Hyderabad",
        "logo":"./Assets/Teams/Hyderabad.jpg",
        "chamiponship count":1,
        "captain":"David Warner",
        "top batsman":"David Warner",
        "top bowler":"Rashid Khanl",
        "color":"linear-gradient(160deg,rgb(228, 62, 62),rgb(255, 148, 9))"
    }
]

let left=document.getElementById('left');
let logo=document.getElementById("logo");
let count=document.getElementById("count");
let captain=document.getElementById("captain");
let batsman=document.getElementById("batsman");
let bowler=document.getElementById("bowler");

left.style.backgroundImage=teamsData[id]["color"];
logo.setAttribute("src",teamsData[id]["logo"]);
count.innerText=teamsData[id]["chamiponship count"];
captain.innerText=teamsData[id]["captain"];
batsman.innerText=teamsData[id]["top batsman"];
bowler.innerText=teamsData[id]["top bowler"];


let right=document.getElementById("right");

teamsData[id]["players"].forEach(player=>{
    let card=document.createElement('div');
    card.addEventListener('click',()=>{
        localStorage.setItem('playerId',player.id)
        window.open('./player.html','_self');
    })
    let image=document.createElement('img');
    image.setAttribute("src",`./Assets/Teams/${teamsData[id]["name"]}/${player.playerName}.jpeg`);
    card.appendChild(image);
    right.appendChild(card);
})