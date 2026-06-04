document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 40) {
            header.style.background = "rgba(7, 16, 47, 0.95)";
            header.style.boxShadow = "0 14px 38px rgba(0,0,0,0.38)";
        } else {
            header.style.background = "rgba(7, 16, 47, 0.82)";
            header.style.boxShadow = "none";
        }
    });

    const teams = {
        karasuno: {
            theme: "karasuno-theme",
            icon: "🦅",
            code: "PLAYER 01",
            name: "烏野高中",
            intro: "速度、爆發力、永不放棄的主角隊伍。曾經飛不起來的烏鴉，重新展翅挑戰全國舞台。",
            color: "橘色 × 黑色",
            players: "日向翔陽、影山飛雄",
            type: "高速進攻型",
            attack: "95%",
            defense: "78%",
            strategy: "82%",
            tags: ["主角隊伍", "怪人快攻", "再次飛翔"]
        },

        nekoma: {
            theme: "nekoma-theme",
            icon: "🐱",
            code: "PLAYER 02",
            name: "音駒高中",
            intro: "防守、接球、連結每一球的穩定隊伍。像貓一樣冷靜，最大特色是讓球永遠不落地。",
            color: "紅色 × 黑色",
            players: "孤爪研磨、黑尾鐵朗",
            type: "防守連結型",
            attack: "78%",
            defense: "96%",
            strategy: "94%",
            tags: ["防守型", "垃圾場決戰", "連結的貓"]
        },

        aoba: {
            theme: "aoba-theme",
            icon: "🌿",
            code: "PLAYER 03",
            name: "青葉城西",
            intro: "成熟、穩定、擅長控場的宮城強豪。以及川徹為核心，擅長觀察對手並掌控比賽節奏。",
            color: "青綠色 × 白色",
            players: "及川徹、岩泉一",
            type: "戰術控場型",
            attack: "84%",
            defense: "82%",
            strategy: "96%",
            tags: ["戰術型", "及川徹", "控場"]
        },

        shiratorizawa: {
            theme: "shiratorizawa-theme",
            icon: "🦅",
            code: "PLAYER 04",
            name: "白鳥澤",
            intro: "全國級王者隊伍，代表絕對力量。以牛島若利為核心，用高度與重砲壓制對手。",
            color: "紫色 × 白色",
            players: "牛島若利、天童覺",
            type: "力量突破型",
            attack: "98%",
            defense: "86%",
            strategy: "80%",
            tags: ["王者", "牛島若利", "力量突破"]
        },

        inarizaki: {
            theme: "inarizaki-theme",
            icon: "🦊",
            code: "PLAYER 05",
            name: "稻荷崎",
            intro: "全國頂尖強校，打法華麗又充滿壓迫感。宮侑與宮治讓比賽節奏變得難以預測。",
            color: "金色 × 黑色",
            players: "宮侑、宮治",
            type: "技巧變化型",
            attack: "94%",
            defense: "84%",
            strategy: "90%",
            tags: ["全國強校", "宮兄弟", "華麗技巧"]
        },

        kamomedai: {
            theme: "kamomedai-theme",
            icon: "🌊",
            code: "PLAYER 06",
            name: "鷗台高中",
            intro: "高度、攔網與紀律防線的代表隊伍。與小巨人的命題有深刻連結。",
            color: "藍色 × 白色",
            players: "星海光來、晝神幸郎",
            type: "高度攔網型",
            attack: "86%",
            defense: "92%",
            strategy: "88%",
            tags: ["攔網型", "高度防線", "小巨人"]
        }
    };

    const buttons = document.querySelectorAll(".select-card");

    const teamScreen = document.getElementById("teamScreen");
    const teamIcon = document.getElementById("teamIcon");
    const teamCode = document.getElementById("teamCode");
    const teamName = document.getElementById("teamName");
    const teamIntro = document.getElementById("teamIntro");
    const teamColor = document.getElementById("teamColor");
    const teamPlayers = document.getElementById("teamPlayers");
    const teamType = document.getElementById("teamType");
    const teamTags = document.getElementById("teamTags");

    const attackBar = document.getElementById("attackBar");
    const defenseBar = document.getElementById("defenseBar");
    const strategyBar = document.getElementById("strategyBar");

    function updateTeam(teamKey) {
        const team = teams[teamKey];

        teamScreen.className = "team-screen " + team.theme;

        teamIcon.textContent = team.icon;
        teamCode.textContent = team.code;
        teamName.textContent = team.name;
        teamIntro.textContent = team.intro;
        teamColor.textContent = team.color;
        teamPlayers.textContent = team.players;
        teamType.textContent = team.type;

        attackBar.style.width = team.attack;
        defenseBar.style.width = team.defense;
        strategyBar.style.width = team.strategy;

        teamTags.innerHTML = "";

        team.tags.forEach(function (tag) {
            const span = document.createElement("span");
            span.textContent = tag;
            teamTags.appendChild(span);
        });
    }

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const teamKey = button.dataset.team;

            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            updateTeam(teamKey);
        });
    });

    updateTeam("karasuno");

});