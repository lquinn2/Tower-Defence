

// For map and path
let canvas = document.getElementById("canvas");
let canvas2 = document.getElementById("canvas2");
let canvas3 = document.getElementById("canvas3");
let canvas4 = document.getElementById("canvas4");

// For entities
let ctx = canvas.getContext("2d");
let ctx2 = canvas2.getContext("2d");
let ctx3 = canvas3.getContext("2d");
let ctx4 = canvas4.getContext("2d");

function drawBoard(backgroundColor, gridColor, pathColor) {
    var boardWidth = 1200;
    var boardHeight = 850;
    canvas.style.backgroundColor = backgroundColor;

    // Horizontal grid lines
    for (var y = 0; y < boardHeight; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(boardWidth, y);
        ctx.strokeStyle = gridColor;
        ctx.stroke();
        ctx.closePath();
    }

    // Vertical grid lines
    for (var x = 0; x < boardWidth; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, boardHeight);
        ctx.strokeStyle = gridColor;
        ctx.stroke();
        ctx.closePath();
    }

    // Path
    var mapPath = [
        ctx2.beginPath(),
        ctx2.moveTo(175, -25),
        ctx2.lineTo(175, 225),
        ctx2.lineTo(375, 225),
        ctx2.lineTo(375, 375),
        ctx2.lineTo(175, 375),
        ctx2.lineTo(175, 775),
        ctx2.lineTo(525, 775),
        ctx2.lineTo(525, 275),
        ctx2.lineTo(825, 275),
        ctx2.lineTo(825, 125.1),
        ctx2.lineTo(825, 125),
        ctx2.lineTo(1175, 125),
        ctx2.lineTo(1175, 125.1),
        ctx2.lineTo(1175, 575),
        ctx2.lineTo(975, 575),
        ctx2.lineTo(975, 425),
        ctx2.lineTo(725, 425),
        ctx2.lineTo(725, 775),
        ctx2.lineTo(1075, 775),
        ctx2.lineTo(1200, 775),
        ctx2.lineWidth = 50,
        ctx2.strokeStyle = pathColor,
        ctx2.stroke(),
        ctx2.closePath()
    ];
}

// Map Waypoints
let waypoints = [{x: 145, y: -5, direction: "down"}, {x: 145, y: 195, direction: "right"}, {x: 345, y: 195, direction: "down"},
{x: 345, y: 345, direction: "left"}, {x: 145, y: 345, direction: "down"}, {x: 145, y: 745, direction: "right"}, 
{x: 495, y: 745, direction: "up"}, {x: 495, y: 245, direction: "right"}, {x: 795, y: 245, direction: "up"},
{x: 795, y: 95, direction: "right"}, {x: 1145, y: 95, direction: "down"}, {x: 1145, y: 545, direction: "left"}, 
{x: 945, y: 545, direction: "up"}, {x: 945, y: 395, direction: "left"}, {x: 695, y: 395, direction: "down"}, 
{x: 695, y: 745, direction: "right"}, {x: 1145, y: 745, direction: "right"}];
for(var i = 0; i < waypoints.length; i++){
    waypoints[i].x = waypoints[i].x + 5;
    waypoints[i].y = waypoints[i].y + 5;
    // // Uncomment next two lines to reveal waypoints
    // ctx3.fillStyle = "rgba(50, 150, 50, 0.7)";
    // ctx3.fillRect(waypoints[i].x, waypoints[i].y, 50, 50);
}

// Hover color for towers in UI
let uiGreenTower = document.getElementById("greenTower");
let uiPurpleTower = document.getElementById("purpleTower");
let uiBlueTower = document.getElementById("blueTower");
let uiGoldTower = document.getElementById("goldTower");
function setUITowerPositions(){
    uiGreenTower.style.top = "8px";
    uiGreenTower.style.left = "50px";
    uiPurpleTower.style.top = "88px";
    uiPurpleTower.style.left = "50px";
    uiBlueTower.style.top = "8px";
    uiBlueTower.style.left = "120px";
    uiGoldTower.style.top = "88px";
    uiGoldTower.style.left = "120px";
}
setUITowerPositions();

// function shadeBackground() {
//     var background = document.createElement('div');
//     background.id = "uiTowerbackground";
//     document.appendChild(background);
//     document.insertBefore(background, this);
// }

// uiGreenTower.addEventListener("mouseover", shadeBackground);
// uiPurpleTower.addEventListener("mouseover", shadeBackground);
// uiBlueTower.addEventListener("mouseover", shadeBackground);
// uiGoldTower.addEventListener("mouseover", shadeBackground);


//////////////// START PRICES AND LIVES ////////////////

var money = 250;
var lives = 25;
var moneyNumber = document.getElementById('moneyNumber');
var livesNumber = document.getElementById('livesNumber');
moneyNumber.innerText = money;
livesNumber.innerText = lives;

//////////////// END PRICES AND LIVES ///////////////


//////////////// START DRAG AND DROP ////////////////

{
var currentlySelected = null;
var currentlySelectedX;
var currentlySelectedY;
var somethingIsSelected = false;

var greenX = "50px";
var greenY = "8px";
var purpleX = "50px";
var purpleY = "88px";
var blueX = "120px";
var blueY = "8px";
var goldX = "120px";
var goldY = "88px";

var selectedTowerId;
var fullScreenWidth = document.body.clientWidth;
var currentScreenWidth;


function setCurrentlySelected(element){
    if (somethingIsSelected == false){
        currentlySelected = element;
    }
}
 
function draggable(element){
    element.onmousedown = setCurrentlySelected(element);
    element.onmousedown = clickDown;
}

function clickDown(e){
    e = e || window.event;
    somethingIsSelected = true;
    document.onmouseup = clickUp;
    document.onmousemove = drag;
    mouseX = event.clientX;
    mouseY = event.clientY;
    console.log(mouseX);
    console.log(mouseY);
    selectedTowerId = e.target.id;
    currentScreenWidth = document.body.clientWidth;
}

function drag(e){
    e = e || window.event;
    // currentlySelected.style.top = e.clientY - 135 + "px";
    // currentlySelected.style.left = e.clientX - 1335 + "px";
    switch(selectedTowerId) {
        case "greenTower":
            currentlySelected.style.top = e.clientY - mouseY + 5 + "px";
            currentlySelected.style.left = e.clientX - mouseX + 43 + "px";
            break;
        case "purpleTower":
            currentlySelected.style.top = e.clientY - mouseY + 85 + "px";
            currentlySelected.style.left = e.clientX - mouseX + 43 + "px";
            break;
        case "blueTower":
            currentlySelected.style.top = e.clientY - mouseY + 5 + "px";
            currentlySelected.style.left = e.clientX - mouseX + 113 + "px";
            break;
        case "goldTower":
            currentlySelected.style.top = e.clientY - mouseY + 85 + "px";
            currentlySelected.style.left = e.clientX - mouseX + 115 + "px";
            break;
    }

    // console.log("X - " + e.clientX);
    // console.log("Y - " + e.clientY);
    shadeCellUnderCursor(e);
}

function clickUp(){
    currentlySelected.style.top = currentlySelectedY;
    currentlySelected.style.left = currentlySelectedX;
    somethingIsSelected = false;
    document.onmouseup = null;
    document.onmousemove = null;
    console.log(event.target.id);
    setUITowerPositions();
    switch (event.target.id) {
        case "greenTower":
            if (money >= 150) {
                money -= 150;
                moneyNumber.innerText = money;
                placeTowerUnderCursor();
            }
            break;
        case "purpleTower":
            if (money >= 200) {
                money -= 200;
                moneyNumber.innerText = money;
                placeTowerUnderCursor();
            }
            break;
        case "blueTower":
            if (money >= 200) {
                money -= 200;
                moneyNumber.innerText = money;
                placeTowerUnderCursor();
            }
            break;
        case "goldTower":
            if (money >= 250) {
                money -= 200;
                moneyNumber.innerText = money;
                placeTowerUnderCursor();
            }
            break;
    }
    
    selectedTowerId = null;    
}

draggable(uiGreenTower);
draggable(uiPurpleTower);
draggable(uiBlueTower);
draggable(uiGoldTower);

// Create array of grid squares
var horizontalSquareCount = 24;
var verticalSquareCount = 17;
var xHelper = 0;
var yHelper = 0;
var gridArray = [];
for (var i = 0; i < (horizontalSquareCount * verticalSquareCount); i++) {
    var posX = xHelper * 50;
    var posY = yHelper * 50;
    if (posX >= 1150) {
        xHelper = -1;
        yHelper++;
    }
    gridArray.push({x: posX, y: posY});
    xHelper++;
}


// Grid shade on hover
function shadeCellUnderCursor(e){
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var closestCell;
    var cellChanged = false;
    for (var i = 0; i < gridArray.length; i++) {
        cell = gridArray[i];
        if ((e.clientX + ((fullScreenWidth - currentScreenWidth) / 2) - 60 > cell.x && e.clientX + ((fullScreenWidth - currentScreenWidth) / 2) - 60 < (cell.x + 50)) && (e.clientY - 35 > cell.y && e.clientY - 35 < (cell.y + 50))) {
            if (closestCell != cell) {
                
                closestCell = cell;
                cellChanged = true;
            }
        }
    }
    ctx.fillStyle = "rgba(50, 50, 50, 0.5)";
    if (cellChanged == true) {
        ctx.fillRect(closestCell.x, closestCell.y, 50, 50);
        cellChanged = false;
    }
    drawBoard('dodgerblue', 'black', "rgb(200, 200, 200)");
    ctx.restore(); 
}

// Place tower on mouse up
function placeTowerUnderCursor(){
    e = event;
    cursorX = e.clientX;
    cursorY = e.clientY;
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard('dodgerblue', 'black', "rgb(200, 200, 200)");
    ctx.restore();
    for (var i = 0; i < towerArray.length; i++) {
        if (!((cursorX > towerArray[i].x) && (cursorX < towerArray[i].x + towerArray[i].width) &&
            (cursorY > towerArray[i].y) && (cursorY < towerArray[i].y + towerArray[i].height))) {
                var closestCell;
                for (var i = 0; i < gridArray.length; i++) {
                    cell = gridArray[i];
                    if ((e.clientX + ((fullScreenWidth - currentScreenWidth) / 2) - 60 > cell.x && e.clientX + ((fullScreenWidth - currentScreenWidth) / 2) - 60 < (cell.x + 50)) && (e.clientY - 35 > cell.y && e.clientY - 35 < (cell.y + 50))) {
                        if (closestCell != cell) {
                            closestCell = cell;
                        }
                    }
                }
                switch(currentlySelected.id) {
                    case "greenTower":
                        var greenTower = new GreenTower(1);
                        greenTower.draw(closestCell.x, closestCell.y);
                        break;
                    case "purpleTower":
                        var purpleTower = new PurpleTower(1);
                        purpleTower.draw(closestCell.x, closestCell.y);
                        break;
                    case "blueTower":
                        var blueTower = new BlueTower(1);
                        blueTower.draw(closestCell.x, closestCell.y);
                        break;
                    case "goldTower":
                        var goldTower = new GoldTower(1);
                        goldTower.draw(closestCell.x, closestCell.y);
                        break;
                }
            }
        }
}

}
//// Adding Event Listeners to towers ////
var towerArray = [];
var descriptionHolder = document.getElementById('descriptionHolder');
var descriptionName = document.getElementById('descriptionName');
var descriptionDamage = document.getElementById('descriptionDamage');
var descriptionRange = document.getElementById('descriptionRange');
var upgradeButton = document.getElementById('upgrade');
var sellButton = document.getElementById('sell');

canvas4.addEventListener('click', function(event){
    var cursorX = event.offsetX;
    var cursorY = event.offsetY;
    console.log(cursorX, cursorY);
    var foundTower = false;

    var baseUpgradeInnerHTML = "Upgrade";
    var baseSellInnerHTML = "Sell";

    function upgradeTower() {
        var tower = towerArray[upgradeButton.className];
        if (money >= tower.upgradeCost) {
            money = money - tower.upgradeCost;
            moneyNumber.innerText = money;
            if (tower.level < 4) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawBoard('dodgerblue', 'black', "rgb(200, 200, 200)");
                tower.levelUp();
                tower.drawRange(true);
                descriptionName.innerHTML = "<span class='descriptionTextHeader' style='color: " + tower.color + "'>" + tower.name + "</span>";
                descriptionDamage.innerHTML = "<span class='descriptionTextHeader'> Damage: &nbsp; &nbsp; </span>" + tower.damage;
                descriptionRange.innerHTML = "<span class='descriptionTextHeader'> Range: &nbsp; &nbsp; </span>" + tower.range;
                console.log("LEVEL: " + towerArray[upgradeButton.className].level);
                
                if (tower.upgradeCost != null) {
                    upgradeButton.innerHTML = baseUpgradeInnerHTML + "<div style='color: cyan;'>[" + tower.upgradeCost + "]</div>";
                    sellButton.innerHTML = baseSellInnerHTML + "<div style='color: lime;'>[" + tower.price / 2 + "]</div>";
                } else {
                    upgradeButton.innerHTML = "MAX LEVEL";
                    sellButton.innerHTML = baseSellInnerHTML + "<div style='color: lime;'>[" + tower.price / 2 + "]</div>";
                }
            }
            console.log(tower.price);
        }
    }

    function sellTower() {
        console.log("selling: " + towerArray[upgradeButton.className]);
        var tower = towerArray[upgradeButton.className];
        ctx2.clearRect(tower.x - 1, tower.y - 1, tower.width + 2, tower.height + 2);
        towerArray.splice(upgradeButton.className, 1);

        money += tower.price / 2;
        moneyNumber.innerText = money;

        upgradeButton.className = "";

        setTimeout(hideDescriptionHolder, 10);
        function hideDescriptionHolder() {
            descriptionHolder.style.visibility = "hidden";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBoard('dodgerblue', 'black', "rgb(200, 200, 200)");
        }
    }
    
    for (var i = 0; i < towerArray.length; i++) {
        if ((cursorX > towerArray[i].x) && (cursorX < towerArray[i].x + towerArray[i].width) &&
            (cursorY > towerArray[i].y) && (cursorY < towerArray[i].y + towerArray[i].height)) {
                foundTower = true;    
                
                upgradeButton.removeEventListener('click', upgradeTower);
                // Replaces the node to remove all event listeners and classNames
                var oldElement = document.getElementById('upgrade');
                var newElement = oldElement.cloneNode(true);
                oldElement.parentNode.replaceChild(newElement, oldElement);
                upgradeButton = document.getElementById('upgrade');
                sellButton = document.getElementById('sell');

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawBoard('dodgerblue', 'black', "rgb(200, 200, 200)"); 
                towerArray[i].drawRange(true);
                descriptionHolder.style.visibility = "visible";
                descriptionName.innerHTML = "<span class='descriptionTextHeader' style='color: " + towerArray[i].color + "'>" + towerArray[i].name + "</span>";
                descriptionDamage.innerHTML = "<span class='descriptionTextHeader'> Damage: &nbsp; &nbsp; </span>" + towerArray[i].damage;
                descriptionRange.innerHTML = "<span class='descriptionTextHeader'> Range: &nbsp; &nbsp; </span>" + towerArray[i].range;
                
                upgradeButton.className = i;
                upgradeButton.addEventListener('click', upgradeTower);

                console.warn("Tower Price :  " + towerArray[i].price);

                if (towerArray[i].upgradeCost != null) {
                    upgradeButton.innerHTML = baseUpgradeInnerHTML + "<div style='color: cyan;'>[" + towerArray[i].upgradeCost + "]</div>";
                    sellButton.innerHTML = baseSellInnerHTML + "<div style='color: lime;'>[" + towerArray[i].price / 2 + "]</div>";
                } else {
                    upgradeButton.innerHTML = "MAX LEVEL";
                    sellButton.innerHTML = baseSellInnerHTML + "<div style='color: lime;'>[" + towerArray[i].price / 2 + "]</div>";                    
                }

                sellButton.addEventListener('click', sellTower);
            }
    }

    if (foundTower == false) {
        descriptionHolder.style.visibility = "hidden";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBoard('dodgerblue', 'black', "rgb(200, 200, 200)");

        upgradeButton.removeEventListener('click', upgradeTower);
        // Replaces the node to remove all event listeners and classNames
        var oldElement = document.getElementById('upgrade');
        var newElement = oldElement.cloneNode(true);
        newElement.id = "upgrade";
        newElement.className = "";
        oldElement.parentNode.replaceChild(newElement, oldElement); 
        
        sellButton.removeEventListener('click', sellTower);
        // Replaces sell node
        oldElement = document.getElementById('sell');
        newElement = oldElement.cloneNode(true);
        newElement.id = "sell";
        newElement.className = "";
        oldElement.parentNode.replaceChild(newElement, oldElement);
    }
});



//////////////// END DRAG AND DROP ////////////////


//////////////// START TOWERS ////////////////

//--// TOWERS //--//
class Tower {
    constructor(color, level) {
        this.level = level;
        this.experience = 0;
        this.width = 21;
        this.height = 21;
        this.backgroundColor = 'black';
        this.color = color;
        this.x = 0;
        this.y = 0;
    };

    draw(x, y) {
        x = x + 2;
        y = y + 2;
        this.x = x;
        this.y = y;
        // Shape
        ctx2.beginPath();
        ctx2.rect(x, y, this.width, this.height);
        ctx2.fillStyle = this.backgroundColor;
        ctx2.fill();
        ctx2.closePath();
        ctx2.beginPath();
        ctx2.strokeStyle = this.color;
        ctx2.strokeRect(x, y, this.width, this.height);
        ctx2.closePath();
    }
}

//-- Green Tower --//
class GreenTower extends Tower {
    constructor(level) {
        super(level);
        this.name = "Green Tower";
        this.experience = 0;
        this.level = level;
        this.width = 46;
        this.height = 46;
        this.backgroundColor = 'black';
        this.color = "lime";
        this.x = 0;
        this.y = 0;
        this.range = 125;
        this.damage = 1;
        this.price = 150;
        this.upgradeCost = 300;
    }

    draw(x, y) {
        x = x + 2;
        y = y + 2;
        this.x = x;
        this.y = y;
        amountOfTowers++;
        towerArray.push(this);
        // Shape
        ctx2.beginPath();
        ctx2.rect(x, y, this.width, this.height);
        ctx2.fillStyle = this.backgroundColor;
        ctx2.fill();
        ctx2.closePath();
        ctx2.beginPath();
        ctx2.lineWidth = 1;
        ctx2.strokeStyle = this.color;
        ctx2.strokeRect(x, y, this.width, this.height);
        // Decal
        switch (this.level) {
            case 1:
                // Create Range
                this.createRange(this.level);
                // level 1 decal
                ctx2.moveTo(x + (this.width / 3), y + (this.height / 3));
                ctx2.lineTo(x + 2 * (this.width / 3), y + 2 * (this.height / 3));
                ctx2.stroke();
                ctx2.moveTo(x + (this.width / 3), y + 2 * (this.height / 3));
                ctx2.lineTo(x + 2 * (this.width / 3), y + (this.height / 3));
                ctx2.stroke();
                ctx2.closePath();
                break;
            case 2:
                // Create Range
                this.createRange(this.level);
                // level 1 decal
                ctx2.moveTo(x + (this.width / 3), y + (this.height / 3));
                ctx2.lineTo(x + 2 * (this.width / 3), y + 2 * (this.height / 3));
                ctx2.stroke();
                ctx2.moveTo(x + (this.width / 3), y + 2 * (this.height / 3));
                ctx2.lineTo(x + 2 * (this.width / 3), y + (this.height / 3));
                ctx2.stroke();
                // level 2 decal
                ctx2.moveTo(x + (this.width / 3), y + (this.height / 3));
                ctx2.lineTo(x + (this.width / 3), y + 2*(this.height / 3));
                ctx2.stroke();
                ctx2.moveTo(x + 2*(this.width / 3), y + (this.height / 3));
                ctx2.lineTo(x + 2*(this.width / 3), y + 2*(this.height / 3));
                ctx2.stroke();
                ctx2.closePath();
                break;
            case 3:
                // Create Range
                this.createRange(this.level);
                ctx2.moveTo(x + (this.width / 3), y + (this.height / 3));
                ctx2.lineTo(x + 2 * (this.width / 3), y + 2 * (this.height / 3));
                ctx2.stroke();
                ctx2.moveTo(x + (this.width / 3), y + 2 * (this.height / 3));
                ctx2.lineTo(x + 2 * (this.width / 3), y + (this.height / 3));
                ctx2.stroke();
                // level 2 decal
                ctx2.moveTo(x + (this.width / 4), y + (this.height / 4));
                ctx2.lineTo(x + (this.width / 4), y + 3*(this.height / 4));
                ctx2.stroke();
                ctx2.moveTo(x + 3*(this.width / 4), y + (this.height / 4));
                ctx2.lineTo(x + 3*(this.width / 4), y + 3*(this.height / 4));
                ctx2.stroke();
                // level 3 decal
                ctx2.moveTo(x + (this.width / 4), y + (this.height / 4));
                ctx2.lineTo(x + 3*(this.width / 4), y + (this.height / 4));
                ctx2.stroke();
                ctx2.moveTo(x + (this.width / 4), y + 3*(this.height / 4));
                ctx2.lineTo(x + 3*(this.width / 4), y + 3*(this.height / 4));
                ctx2.stroke();
                ctx2.closePath();
                break;
            case 4:
                // Create Range
                this.createRange(this.level);
                ctx2.moveTo(x + (this.width / 3), y + (this.height / 3));
                ctx2.lineTo(x + 2 * (this.width / 3), y + 2 * (this.height / 3));
                ctx2.stroke();
                ctx2.moveTo(x + (this.width / 3), y + 2 * (this.height / 3));
                ctx2.lineTo(x + 2 * (this.width / 3), y + (this.height / 3));
                ctx2.stroke();
                // level 2 decal
                ctx2.moveTo(x + (this.width / 4), y + (this.height / 4));
                ctx2.lineTo(x + (this.width / 4), y + 3*(this.height / 4));
                ctx2.stroke();
                ctx2.moveTo(x + 3*(this.width / 4), y + (this.height / 4));
                ctx2.lineTo(x + 3*(this.width / 4), y + 3*(this.height / 4));
                ctx2.stroke();
                // level 3 decal
                ctx2.moveTo(x + (this.width / 4), y + (this.height / 4));
                ctx2.lineTo(x + 3*(this.width / 4), y + (this.height / 4));
                ctx2.stroke();
                ctx2.moveTo(x + (this.width / 4), y + 3*(this.height / 4));
                ctx2.lineTo(x + 3*(this.width / 4), y + 3*(this.height / 4));
                ctx2.stroke();
                // level 4 decal
                ctx2.moveTo(x, y);
                ctx2.lineTo(x + this.width, y + this.height);
                ctx2.stroke();
                ctx2.moveTo(x, y + this.width);
                ctx2.lineTo(x + this.width, y);
                ctx2.stroke();
                ctx2.closePath();
                break;
        }
    }

    createRange(level) {
        switch (level) {
            case 1:
                this.name = "Green Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
            case 2:
                this.damage = 2;
                this.range = 150;
                this.value = 300;
                this.name = "Green Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
            case 3:
                this.damage = 3.5;
                this.range = 175;
                this.value = 800;
                this.name = "Green Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
            case 4:
                this.damage = 5;
                this.range = 200;
                this.value = 1500;
                this.name = "Green Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
        }
    }

    checkIfEnemyIsInRange() {
        var targetedEnemy;
        for (var i = 0; i < enemyArray.length; i++) {
            if (enemyArray[i]) {
                var xDistance = this.x - enemyArray[i].coordinate.x;
                var yDistance = this.y - enemyArray[i].coordinate.y;
                var distance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
    
                if (distance < this.range + 25) {
                    if (!targetedEnemy) {
                        targetedEnemy = enemyArray[i];
                        this.fire(enemyArray[i].coordinate.x, enemyArray[i].coordinate.y);
                    }
                    // Switches to next enemy if targeted enemy dies
                    if (targetedEnemy) {
                        if (targetedEnemy.health <= 0) {
                            targetedEnemy = null;
                        }
                    }
                }
            }
        }
    }

    fire(x, y) {
        ctx4.beginPath();
        ctx4.moveTo(this.x + this.width / 2, this.y + this.height / 2);
        ctx4.lineTo(x + 25, y + 25);
        ctx4.lineWidth = 2.5;
        ctx4.strokeStyle = "lime";
        ctx4.stroke();
        ctx4.closePath();
        for (var i = 0; i < enemyArray.length; i++) {
            var enemy = enemyArray[i];
            if (enemy) {
                if ((x >= enemy.coordinate.x && x <= enemy.coordinate.x + 40) && (y >= enemy.coordinate.y && y <= enemy.coordinate.y + 40)) {
                    switch (enemy.color) {
                        case "green":
                            enemy.health = enemy.health - (this.damage * 1.5);
                            break;
                        case "purple":
                            enemy.health = enemy.health - (this.damage * 0.75);
                            break;
                        case "blue":
                            enemy.health = enemy.health - this.damage;
                            break;
                        case "gold":
                            enemy.health = enemy.health - this.damage;
                            break;
                    }
                }
            }
        }
    }

    levelUp() {
        if (this.level < 4) {
            this.level++;
            ctx2.clearRect(this.x - 1, this.y - 1, 49, 49);
            var x = this.x;
            var y = this.y;

            // Shape
            ctx2.beginPath();
            ctx2.rect(x, y, this.width, this.height);
            ctx2.fillStyle = this.backgroundColor;
            ctx2.fill();
            ctx2.closePath();
            ctx2.beginPath();
            ctx2.lineWidth = 1;
            ctx2.strokeStyle = this.color;
            ctx2.strokeRect(x, y, this.width, this.height);
            switch (this.level) {
                case 1:
                    // Create Range
                    this.createRange(this.level);
                    // level 1 decal
                    ctx2.moveTo(x + (this.width / 3), y + (this.height / 3));
                    ctx2.lineTo(x + 2 * (this.width / 3), y + 2 * (this.height / 3));
                    ctx2.stroke();
                    ctx2.moveTo(x + (this.width / 3), y + 2 * (this.height / 3));
                    ctx2.lineTo(x + 2 * (this.width / 3), y + (this.height / 3));
                    ctx2.stroke();
                    ctx2.closePath();
                    break;
                case 2:
                    this.upgradeCost = 750;
                    this.price += 300;
                    // Create Range
                    this.createRange(this.level);
                    // level 1 decal
                    ctx2.moveTo(x + (this.width / 3), y + (this.height / 3));
                    ctx2.lineTo(x + 2 * (this.width / 3), y + 2 * (this.height / 3));
                    ctx2.stroke();
                    ctx2.moveTo(x + (this.width / 3), y + 2 * (this.height / 3));
                    ctx2.lineTo(x + 2 * (this.width / 3), y + (this.height / 3));
                    ctx2.stroke();
                    // level 2 decal
                    ctx2.moveTo(x + (this.width / 3), y + (this.height / 3));
                    ctx2.lineTo(x + (this.width / 3), y + 2*(this.height / 3));
                    ctx2.stroke();
                    ctx2.moveTo(x + 2*(this.width / 3), y + (this.height / 3));
                    ctx2.lineTo(x + 2*(this.width / 3), y + 2*(this.height / 3));
                    ctx2.stroke();
                    ctx2.closePath();
                    break;
                case 3:
                    this.upgradeCost = 1500;
                    this.price += 750;
                    // Create Range
                    this.createRange(this.level);
                    ctx2.moveTo(x + (this.width / 3), y + (this.height / 3));
                    ctx2.lineTo(x + 2 * (this.width / 3), y + 2 * (this.height / 3));
                    ctx2.stroke();
                    ctx2.moveTo(x + (this.width / 3), y + 2 * (this.height / 3));
                    ctx2.lineTo(x + 2 * (this.width / 3), y + (this.height / 3));
                    ctx2.stroke();
                    // level 2 decal
                    ctx2.moveTo(x + (this.width / 4), y + (this.height / 4));
                    ctx2.lineTo(x + (this.width / 4), y + 3*(this.height / 4));
                    ctx2.stroke();
                    ctx2.moveTo(x + 3*(this.width / 4), y + (this.height / 4));
                    ctx2.lineTo(x + 3*(this.width / 4), y + 3*(this.height / 4));
                    ctx2.stroke();
                    // level 3 decal
                    ctx2.moveTo(x + (this.width / 4), y + (this.height / 4));
                    ctx2.lineTo(x + 3*(this.width / 4), y + (this.height / 4));
                    ctx2.stroke();
                    ctx2.moveTo(x + (this.width / 4), y + 3*(this.height / 4));
                    ctx2.lineTo(x + 3*(this.width / 4), y + 3*(this.height / 4));
                    ctx2.stroke();
                    ctx2.closePath();
                    break;
                case 4:
                    this.upgradeCost = null; 
                    this.price += 1500;
                    // Create Range
                    this.createRange(this.level);
                    ctx2.moveTo(x + (this.width / 3), y + (this.height / 3));
                    ctx2.lineTo(x + 2 * (this.width / 3), y + 2 * (this.height / 3));
                    ctx2.stroke();
                    ctx2.moveTo(x + (this.width / 3), y + 2 * (this.height / 3));
                    ctx2.lineTo(x + 2 * (this.width / 3), y + (this.height / 3));
                    ctx2.stroke();
                    // level 2 decal
                    ctx2.moveTo(x + (this.width / 4), y + (this.height / 4));
                    ctx2.lineTo(x + (this.width / 4), y + 3*(this.height / 4));
                    ctx2.stroke();
                    ctx2.moveTo(x + 3*(this.width / 4), y + (this.height / 4));
                    ctx2.lineTo(x + 3*(this.width / 4), y + 3*(this.height / 4));
                    ctx2.stroke();
                    // level 3 decal
                    ctx2.moveTo(x + (this.width / 4), y + (this.height / 4));
                    ctx2.lineTo(x + 3*(this.width / 4), y + (this.height / 4));
                    ctx2.stroke();
                    ctx2.moveTo(x + (this.width / 4), y + 3*(this.height / 4));
                    ctx2.lineTo(x + 3*(this.width / 4), y + 3*(this.height / 4));
                    ctx2.stroke();
                    // level 4 decal
                    ctx2.moveTo(x, y);
                    ctx2.lineTo(x + this.width, y + this.height);
                    ctx2.stroke();
                    ctx2.moveTo(x, y + this.width);
                    ctx2.lineTo(x + this.width, y);
                    ctx2.stroke();
                    ctx2.closePath();
                    break;
            }
        }
    }

    drawRange(bool) {
        switch (bool) {
            case true:
                // Range Circle
                ctx.beginPath();
                ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();
                break;
            case false:
                ctx.clearRect(this.x - (this.range / 2), this.y - (this.range / 2), this.range, this.range);
                drawBoard('dodgerblue', 'black', "rgb(200, 200, 200)");
                break;
        }
    }
}

//-- Purple Tower --//
class PurpleTower extends Tower {
    constructor(level) {
        super(level);
        this.name = "Purple Tower";
        this.experience = 0;
        this.level = level;
        this.width = 46;
        this.height = 46;
        this.backgroundColor = 'black';
        this.color = "rgb(255, 13, 255)";
        this.x = 0;
        this.y = 0;
        this.range = 175;
        this.damage = 1;
        this.price = 200;
        this.upgradeCost = 500;
    }

    draw(x, y) {
        x = x + 2;
        y = y + 2;
        this.x = x;
        this.y = y;
        amountOfTowers++;
        towerArray.push(this);
        // Shape
        ctx2.beginPath();
        ctx2.rect(x, y, this.width, this.height);
        ctx2.fillStyle = this.backgroundColor;
        ctx2.fill();
        ctx2.closePath();
        ctx2.beginPath();
        ctx2.lineWidth = 1;
        ctx2.strokeStyle = this.color;
        ctx2.strokeRect(x, y, this.width, this.height);
        // Decal
        switch(this.level){
            case 1:
                // Create Range
                this.createRange(this.level);
                // level 1 decal
                ctx2.moveTo(x + this.width/2, y + 2*this.height/6);
                ctx2.lineTo(x + 4*this.width/6, y + 4*this.height/6);
                ctx2.lineTo(x + 2*this.width/6, y + 4*this.height/6);
                ctx2.lineTo(x + this.width/2, y + 2*this.height/6);
                ctx2.stroke();
                ctx2.closePath();
                break;
            case 2:
                // Create Range
                this.createRange(this.level);
                // level 2 decal
                ctx2.moveTo(x + this.width/6, y + 2*this.height/8);
                ctx2.lineTo(x + this.width/6, y + 6*this.height/8);
                ctx2.lineTo(x + 3.5*this.width/8, y + this.height/2);
                ctx2.lineTo(x + this.width/6, y + 2*this.height/8);
                ctx2.stroke();
                ctx2.moveTo(x + 5*this.width/6, y + 2*this.height/8);
                ctx2.lineTo(x + 5*this.width/6, y + 6*this.height/8);
                ctx2.lineTo(x + 4.5*this.width/8, y + this.height/2);
                ctx2.lineTo(x + 5*this.width/6, y + 2*this.height/8);
                ctx2.stroke();
                ctx2.closePath();
                break;
            case 3:
                // Create Range
                this.createRange(this.level);
                // level 3 decal
                ctx2.lineWidth = 1.5;
                ctx2.moveTo(x + 2.5*this.width/8, y + 6.2*this.width/8);
                ctx2.lineTo(x + this.width/2, y + 4.7*this.width/8);
                ctx2.lineTo(x + 5*this.width/8, y + 6.2*this.width/8);
                ctx2.lineTo(x + 2.5*this.width/8, y + 6.2*this.width/8);
                ctx2.stroke();
                ctx2.moveTo(x + 3.5*this.width/8, y + 3.7*this.width/8);
                ctx2.lineTo(x + 1.5*this.width/8, y + 3.2*this.width/8);
                ctx2.lineTo(x + 3 *this.width/8, y + 1.7*this.width/8);
                ctx2.lineTo(x + 3.5*this.width/8, y + 3.2*this.width/8);
                ctx2.stroke();
                ctx2.moveTo(x + 4.5*this.width/8, y + 3.7*this.width/8);
                ctx2.lineTo(x + 6.5*this.width/8, y + 3.2*this.width/8);
                ctx2.lineTo(x + 5*this.width/8, y + 1.7*this.width/8);
                ctx2.lineTo(x + 4.5*this.width/8, y + 3.7*this.width/8);
                ctx2.stroke();
                ctx2.lineWidth = 1;
                ctx2.closePath();
                break;
            case 4:
                // Create Range
                this.createRange(this.level);
                // level 2 decal
                ctx2.moveTo(x + 0.8*this.width/6, y + 2*this.height/8);
                ctx2.lineTo(x + 0.8*this.width/6, y + 6*this.height/8);
                ctx2.lineTo(x + 3*this.width/8, y + this.height/2);
                ctx2.lineTo(x + 0.8*this.width/6, y + 2*this.height/8);
                ctx2.stroke();
                ctx2.moveTo(x + 5.2*this.width/6, y + 2*this.height/8);
                ctx2.lineTo(x + 5.2*this.width/6, y + 6*this.height/8);
                ctx2.lineTo(x + 5*this.width/8, y + this.height/2);
                ctx2.lineTo(x + 5.2*this.width/6, y + 2*this.height/8);
                ctx2.stroke();
                // level 4 decal
                ctx2.moveTo(x + 2*this.width/8, y + this.height/8);
                ctx2.lineTo(x + this.width/2, y + 3*this.height/8);
                ctx2.lineTo(x + 6*this.width/8, y + this.height/8);
                ctx2.lineTo(x + 2*this.width/8, y + this.height/8);
                ctx2.stroke();
                ctx2.moveTo(x + 2*this.width/8, y + 7*this.height/8);
                ctx2.lineTo(x + this.width/2, y + 5*this.height/8);
                ctx2.lineTo(x + 6*this.width/8, y + 7*this.height/8);
                ctx2.lineTo(x + 2*this.width/8, y + 7*this.height/8);
                ctx2.stroke();
                ctx2.closePath();
                break;
        }
    }

    createRange(level) {
        switch (level) {
            case 1:
                this.name = "Purple Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
            case 2:
                this.range = 200; 
                this.name = "Purple Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
            case 3:
                this.range = 230;
                this.name = "Purple Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
            case 4:
                this.range = 275;
                this.name = "Purple Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
        }
    }

    checkIfEnemyIsInRange() {
        var targetedEnemy;
        for (var i = 0; i < enemyArray.length; i++) {
            if (enemyArray[i]) {
                var xDistance = this.x - enemyArray[i].coordinate.x;
                var yDistance = this.y - enemyArray[i].coordinate.y;
                var distance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
    
                if (distance < this.range + 25) {
                    if (!targetedEnemy) {
                        targetedEnemy = enemyArray[i];
                        this.fire(enemyArray[i].coordinate.x, enemyArray[i].coordinate.y);
                    }
                    // Switches to next enemy if targeted enemy dies
                    if (targetedEnemy) {
                        if (targetedEnemy.health <= 0) {
                            targetedEnemy = null;
                        }
                    }
                }
            }
        }
    }

    fire(x, y) {
        ctx4.beginPath();
        ctx4.moveTo(this.x + this.width / 2, this.y + this.height / 2);
        ctx4.lineTo(x + 25, y + 25);
        ctx4.lineWidth = 2.5;
        ctx4.strokeStyle = "rgb(255, 13, 255)";
        ctx4.stroke();
        ctx4.closePath();
        for (var i = 0; i < enemyArray.length; i++) {
            var enemy = enemyArray[i];
            if (enemy) {
                if ((x >= enemy.coordinate.x && x <= enemy.coordinate.x + 40) && (y >= enemy.coordinate.y && y <= enemy.coordinate.y + 40)) {
                    switch (enemy.color) {
                        case "green":
                            enemy.health = enemy.health - (this.damage * 0.7);
                            break;
                        case "purple":
                            enemy.health = enemy.health - (this.damage * 1.75);
                            break;
                        case "blue":
                            enemy.health = enemy.health - this.damage;
                            break;
                        case "gold":
                            enemy.health = enemy.health - this.damage;
                            break;
                    }
                }
            }
        }
    }

    levelUp() {
        if (this.level < 4) {
            this.level++;
            ctx2.clearRect(this.x - 1, this.y - 1, 49, 49);
            var x = this.x;
            var y = this.y;

            // Shape
            ctx2.beginPath();
            ctx2.rect(x, y, this.width, this.height);
            ctx2.fillStyle = this.backgroundColor;
            ctx2.fill();
            ctx2.closePath();
            ctx2.beginPath();
            ctx2.lineWidth = 1;
            ctx2.strokeStyle = this.color;
            ctx2.strokeRect(x, y, this.width, this.height);
            // Decal
            switch(this.level){
                case 1:
                    // Create Range
                    this.createRange(this.level);
                    // level 1 decal
                    ctx2.moveTo(x + this.width/2, y + 2*this.height/6);
                    ctx2.lineTo(x + 4*this.width/6, y + 4*this.height/6);
                    ctx2.lineTo(x + 2*this.width/6, y + 4*this.height/6);
                    ctx2.lineTo(x + this.width/2, y + 2*this.height/6);
                    ctx2.stroke();
                    ctx2.closePath();
                    break;
                case 2:
                    this.upgradeCost = 1000;
                    this.price += 500;
                    // Create Range
                    this.createRange(this.level);
                    // level 2 decal
                    ctx2.moveTo(x + this.width/6, y + 2*this.height/8);
                    ctx2.lineTo(x + this.width/6, y + 6*this.height/8);
                    ctx2.lineTo(x + 3.5*this.width/8, y + this.height/2);
                    ctx2.lineTo(x + this.width/6, y + 2*this.height/8);
                    ctx2.stroke();
                    ctx2.moveTo(x + 5*this.width/6, y + 2*this.height/8);
                    ctx2.lineTo(x + 5*this.width/6, y + 6*this.height/8);
                    ctx2.lineTo(x + 4.5*this.width/8, y + this.height/2);
                    ctx2.lineTo(x + 5*this.width/6, y + 2*this.height/8);
                    ctx2.stroke();
                    ctx2.closePath();
                    break;
                case 3:
                    this.upgradeCost = 2000;
                    this.price += 1000;
                    // Create Range
                    this.createRange(this.level);
                    // level 3 decal
                    ctx2.lineWidth = 1.5;
                    ctx2.moveTo(x + 2.5*this.width/8, y + 6.2*this.width/8);
                    ctx2.lineTo(x + this.width/2, y + 4.7*this.width/8);
                    ctx2.lineTo(x + 5*this.width/8, y + 6.2*this.width/8);
                    ctx2.lineTo(x + 2.5*this.width/8, y + 6.2*this.width/8);
                    ctx2.stroke();
                    ctx2.moveTo(x + 3.5*this.width/8, y + 3.7*this.width/8);
                    ctx2.lineTo(x + 1.5*this.width/8, y + 3.2*this.width/8);
                    ctx2.lineTo(x + 3 *this.width/8, y + 1.7*this.width/8);
                    ctx2.lineTo(x + 3.5*this.width/8, y + 3.2*this.width/8);
                    ctx2.stroke();
                    ctx2.moveTo(x + 4.5*this.width/8, y + 3.7*this.width/8);
                    ctx2.lineTo(x + 6.5*this.width/8, y + 3.2*this.width/8);
                    ctx2.lineTo(x + 5*this.width/8, y + 1.7*this.width/8);
                    ctx2.lineTo(x + 4.5*this.width/8, y + 3.7*this.width/8);
                    ctx2.stroke();
                    ctx2.lineWidth = 1;
                    ctx2.closePath();
                    break;
                case 4:
                    this.upgradeCost = null;
                    this.price += 2000;
                    // Create Range
                    this.createRange(this.level);
                    // level 2 decal
                    ctx2.moveTo(x + 0.8*this.width/6, y + 2*this.height/8);
                    ctx2.lineTo(x + 0.8*this.width/6, y + 6*this.height/8);
                    ctx2.lineTo(x + 3*this.width/8, y + this.height/2);
                    ctx2.lineTo(x + 0.8*this.width/6, y + 2*this.height/8);
                    ctx2.stroke();
                    ctx2.moveTo(x + 5.2*this.width/6, y + 2*this.height/8);
                    ctx2.lineTo(x + 5.2*this.width/6, y + 6*this.height/8);
                    ctx2.lineTo(x + 5*this.width/8, y + this.height/2);
                    ctx2.lineTo(x + 5.2*this.width/6, y + 2*this.height/8);
                    ctx2.stroke();
                    // level 4 decal
                    ctx2.moveTo(x + 2*this.width/8, y + this.height/8);
                    ctx2.lineTo(x + this.width/2, y + 3*this.height/8);
                    ctx2.lineTo(x + 6*this.width/8, y + this.height/8);
                    ctx2.lineTo(x + 2*this.width/8, y + this.height/8);
                    ctx2.stroke();
                    ctx2.moveTo(x + 2*this.width/8, y + 7*this.height/8);
                    ctx2.lineTo(x + this.width/2, y + 5*this.height/8);
                    ctx2.lineTo(x + 6*this.width/8, y + 7*this.height/8);
                    ctx2.lineTo(x + 2*this.width/8, y + 7*this.height/8);
                    ctx2.stroke();
                    ctx2.closePath();
                    break;
            }
        }
    }
    drawRange(bool) {
        switch (bool) {
            case true:
                // Range Circle
                ctx.beginPath();
                ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();
                break;
            case false:
                ctx.clearRect(this.x - (this.range / 2), this.y - (this.range / 2), this.range, this.range);
                drawBoard('dodgerblue', 'black', "rgb(200, 200, 200)");
                break;
        }
    }
}

//-- Blue Tower --//
class BlueTower extends Tower {
    constructor(level) {
        super(level);
        this.name = "Blue Tower";
        this.experience = 0;
        this.level = level;
        this.width = 46;
        this.height = 46;
        this.backgroundColor = 'black';
        this.color = "rgb(0, 190, 255)";
        this.x = 0;
        this.y = 0;
        this.range = 100;
        this.damage = 1;
        this.price = 200;
        this.upgradeCost = 500;
    }

    draw(x, y) {
        x = x + 2;
        y = y + 2;
        this.x = x;
        this.y = y;
        amountOfTowers++;
        towerArray.push(this);
        // Shape
        ctx2.beginPath();
        ctx2.rect(x, y, this.width, this.height);
        ctx2.fillStyle = this.backgroundColor;
        ctx2.fill();
        ctx2.closePath();
        ctx2.beginPath();
        ctx2.lineWidth = 1;
        ctx2.strokeStyle = this.color;
        ctx2.strokeRect(x, y, this.width, this.height);
        ctx2.closePath();
        // Decal
        switch(this.level){
            case 1:
                // Create Range
                this.createRange(this.level);
                // level 1 decal
                ctx2.strokeRect(x + this.width/3, y + this.height/3, this.width/3, this.height/3);
                ctx2.closePath();
                break;
            case 2:
                // Create Range
                this.createRange(this.level);
                // level 2 decal
                ctx2.lineWidth = 2;
                ctx2.strokeRect(x + this.width/4, y + this.height/4, 2*this.width/4, 2*this.height/4);
                ctx2.closePath();
                ctx2.lineWidth = 1;
                break;
            case 3:
                // Create Range
                this.createRange(this.level);
                // level 3 decal
                ctx2.lineWidth = 5;
                ctx2.strokeRect(x + this.width/4, y + this.height/4, 2*this.width/4, 2*this.height/4);
                ctx2.closePath();
                ctx2.lineWidth = 1;
                break;
            case 4:
                // Create Range
                this.createRange(this.level);
                // level 4 decal
                ctx2.lineWidth = 8;
                ctx2.strokeRect(x + this.width/4, y + this.height/4, 2*this.width/4, 2*this.height/4);
                ctx2.closePath();
                ctx2.lineWidth = 1;
                break;
        }
    }

    createRange(level) {
        switch (level) {
            case 1:
                this.name = "Blue Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
            case 2:
                this.range = 115;
                this.name = "Blue Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
            case 3:
                this.range = 130;
                this.name = "Blue Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
            case 4:
                this.range = 150;
                this.name = "Blue Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
        }
    }

    checkIfEnemyIsInRange() {
        var targetedEnemy;
        for (var i = 0; i < enemyArray.length; i++) {
            if (enemyArray[i]) {
                var xDistance = this.x - enemyArray[i].coordinate.x;
                var yDistance = this.y - enemyArray[i].coordinate.y;
                var distance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
    
                if (distance < this.range + 25) {
                    if (!targetedEnemy) {
                        targetedEnemy = enemyArray[i];
                        this.fire(enemyArray[i].coordinate.x, enemyArray[i].coordinate.y);
                    }
                    // Switches to next enemy if targeted enemy dies
                    if (targetedEnemy) {
                        if (targetedEnemy.health <= 0) {
                            targetedEnemy = null;
                        }
                    }
                }
            }
        }
    }

    fire(x, y) {
        ctx4.beginPath();
        ctx4.moveTo(this.x + this.width / 2, this.y + this.height / 2);
        ctx4.lineTo(x + 25, y + 25);
        ctx4.lineWidth = 2.5;
        ctx4.strokeStyle = "rgb(0, 190, 255)";
        ctx4.stroke();
        ctx4.closePath();
        for (var i = 0; i < enemyArray.length; i++) {
            var enemy = enemyArray[i];
            if (enemy) {
                if ((x >= enemy.coordinate.x && x <= enemy.coordinate.x + 40) && (y >= enemy.coordinate.y && y <= enemy.coordinate.y + 40)) {
                    switch (enemy.color) {
                        case "green":
                            enemy.health = enemy.health - this.damage;
                            break;
                        case "purple":
                            enemy.health = enemy.health - this.damage;
                            break;
                        case "blue":
                            enemy.health = enemy.health - (this.damage * 1.75);
                            break;
                        case "gold":
                            enemy.health = enemy.health - (this.damage * 0.7);
                            break;
                    }
                }
            }
        }
    }

    levelUp() {
        if (this.level < 4) {
            this.level++;
            ctx2.clearRect(this.x - 1, this.y - 1, 49, 49);
            var x = this.x;
            var y = this.y;

            // Shape
            ctx2.beginPath();
            ctx2.rect(x, y, this.width, this.height);
            ctx2.fillStyle = this.backgroundColor;
            ctx2.fill();
            ctx2.closePath();
            ctx2.beginPath();
            ctx2.lineWidth = 1;
            ctx2.strokeStyle = this.color;
            ctx2.strokeRect(x, y, this.width, this.height);
            ctx2.closePath();
            // Decal
            switch(this.level){
                case 1:
                    // Create Range
                    this.createRange(this.level);
                    // level 1 decal
                    ctx2.strokeRect(x + this.width/3, y + this.height/3, this.width/3, this.height/3);
                    ctx2.closePath();
                    break;
                case 2:
                    this.upgradeCost = 1000;
                    this.price += 500;
                    // Create Range
                    this.createRange(this.level);
                    // level 2 decal
                    ctx2.lineWidth = 2;
                    ctx2.strokeRect(x + this.width/4, y + this.height/4, 2*this.width/4, 2*this.height/4);
                    ctx2.closePath();
                    ctx2.lineWidth = 1;
                    break;
                case 3:
                    this.upgradeCost = 2000;
                    this.price += 1000
                    // Create Range
                    this.createRange(this.level);
                    // level 3 decal
                    ctx2.lineWidth = 5;
                    ctx2.strokeRect(x + this.width/4, y + this.height/4, 2*this.width/4, 2*this.height/4);
                    ctx2.closePath();
                    ctx2.lineWidth = 1;
                    break;
                case 4:
                    this.upgradeCost = null;
                    this.price += 2000;
                    // Create Range
                    this.createRange(this.level);
                    // level 4 decal
                    ctx2.lineWidth = 8;
                    ctx2.strokeRect(x + this.width/4, y + this.height/4, 2*this.width/4, 2*this.height/4);
                    ctx2.closePath();
                    ctx2.lineWidth = 1;
                    break;
            }
        }
    }

    drawRange(bool) {
        switch (bool) {
            case true:
                // Range Circle
                ctx.beginPath();
                ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();
                break;
            case false:
                ctx.clearRect(this.x - (this.range / 2), this.y - (this.range / 2), this.range, this.range);
                drawBoard('dodgerblue', 'black', "rgb(200, 200, 200)");
                break;
        }
    }
}

//-- Gold Tower --//
class GoldTower extends Tower {
    constructor(level) {
        super(level);
        this.name = "Gold Tower";
        this.experience = 0;
        this.level = level;
        this.width = 46;
        this.height = 46;
        this.backgroundColor = 'black';
        this.color = "gold";
        this.x = 0;
        this.y = 0;
        this.range = 140;
        this.damage = 1;
        this.price = 250;
        this.upgradeCost = 750;
    }

    draw(x, y) {
        x = x + 2;
        y = y + 2;
        this.x = x;
        this.y = y;
        amountOfTowers++;
        towerArray.push(this);
        // Shape
        ctx2.beginPath();
        ctx2.rect(x, y, this.width, this.height);
        ctx2.fillStyle = this.backgroundColor;
        ctx2.fill();
        ctx2.closePath();
        ctx2.beginPath();
        ctx2.lineWidth = 1;
        ctx2.strokeStyle = this.color;
        ctx2.strokeRect(x, y, this.width, this.height);
        ctx2.closePath();
        // Decal
        switch(this.level){
            case 1:
                // Create Range
                this.createRange(this.level);
                // level 1 decal
                ctx2.arc(x + this.width/2, y + this.height/2, 4, Math.PI, 4*Math.PI);
                ctx2.stroke();
                ctx2.closePath();
                break;
            case 2:
                // Create Range
                this.createRange(this.level);
                // level 1 decal with fill
                ctx2.arc(x + this.width/2, y + this.height/2, 2, 2*Math.PI, 4*Math.PI);
                ctx2.fillStyle = "gold";
                ctx2.fill();
                ctx2.stroke();
                ctx2.closePath();
                // level 2 decal
                ctx2.beginPath();
                ctx2.arc(x + this.width/2, y + this.height/2, 8, 0*Math.PI, 4*Math.PI);
                ctx2.stroke();
                ctx2.closePath();
                break;
            case 3:
                // Create Range
                this.createRange(this.level);
                // level 1 decal with fill
                ctx2.arc(x + this.width/2, y + this.height/2, 2, 2*Math.PI, 4*Math.PI);
                ctx2.fillStyle = "gold";
                ctx2.fill();
                ctx2.stroke();
                ctx2.closePath();
                // level 2 decal
                ctx2.beginPath();
                ctx2.arc(x + this.width/2, y + this.height/2, 7, 0*Math.PI, 4*Math.PI);
                ctx2.stroke();
                ctx2.closePath();
                // level 32 decal
                ctx2.beginPath();
                ctx2.arc(x + this.width/2, y + this.height/2, 12, 0*Math.PI, 4*Math.PI);
                ctx2.closePath();
                ctx2.stroke();
                break;
            case 4:
                // Create Range
                this.createRange(this.level);
                ctx2.lineWidth = 1;
                // level 3 decal
                ctx2.beginPath();
                ctx2.arc(x + this.width/2, y + this.height/2, 2, 0*Math.PI, 4*Math.PI);
                ctx2.fill();
                ctx2.stroke();
                ctx2.closePath();
                ctx2.beginPath();
                ctx2.arc(x + this.width/2, y + this.height/2, 7, 0*Math.PI, 4*Math.PI);
                ctx2.closePath();
                ctx2.stroke();
                ctx2.beginPath();
                ctx2.arc(x + this.width/2, y + this.height/2, 12, 0*Math.PI, 4*Math.PI);
                ctx2.closePath();
                ctx2.stroke();
                // level 4 decal
                ctx2.beginPath();
                ctx2.arc(x + this.width/2, y + this.height/2, 17, 0*Math.PI, 4*Math.PI);
                ctx2.closePath();
                ctx2.stroke();
                break;
        }
    }

    createRange(level) {
        switch (level) {
            case 1:
                this.name = "Gold Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
            case 2:
                this.range = 160;
                this.name = "Gold Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
            case 3:
                this.range = 180;
                this.name = "Gold Tower level " + this.level;
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
            case 4:
                this.range = 215;
                this.name = "Gold Tower level " + this.level;            
                // // Range Circle
                // ctx.beginPath();
                // ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                // ctx.stroke();
                // ctx.closePath();
                break;
        }
    }

    checkIfEnemyIsInRange() {
        var targetedEnemy;
        for (var i = 0; i < enemyArray.length; i++) {
            if (enemyArray[i]) {
                var xDistance = this.x - enemyArray[i].coordinate.x;
                var yDistance = this.y - enemyArray[i].coordinate.y;
                var distance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
    
                if (distance < this.range + 25) {
                    if (!targetedEnemy) {
                        targetedEnemy = enemyArray[i];
                        this.fire(enemyArray[i].coordinate.x, enemyArray[i].coordinate.y);
                    }
                    // Switches to next enemy if targeted enemy dies
                    if (targetedEnemy) {
                        if (targetedEnemy.health <= 0) {
                            targetedEnemy = null;
                        }
                    }
                }
            }
        }
    }

    fire(x, y) {
        ctx4.beginPath();
        ctx4.moveTo(this.x + this.width / 2, this.y + this.height / 2);
        ctx4.lineTo(x + 25, y + 25);
        ctx4.lineWidth = 2.5;
        ctx4.strokeStyle = "gold";
        ctx4.stroke();
        ctx4.closePath();
        for (var i = 0; i < enemyArray.length; i++) {
            var enemy = enemyArray[i];
            if (enemy) {
                if ((x >= enemy.coordinate.x && x <= enemy.coordinate.x + 40) && (y >= enemy.coordinate.y && y <= enemy.coordinate.y + 40)) {
                    switch (enemy.color) {
                        case "green":
                            enemy.health = enemy.health - this.damage;
                            break;
                        case "purple":
                            enemy.health = enemy.health - this.damage;
                            break;
                        case "blue":
                            enemy.health = enemy.health - (this.damage * 0.65);
                            break;
                        case "gold":
                            enemy.health = enemy.health - (this.damage * 2);
                            break;
                    }
                }
            }
        }
    }

    levelUp() {
        if (this.level < 4) {
            this.level++;
            ctx2.clearRect(this.x - 1, this.y - 1, 49, 49);
            var x = this.x;
            var y = this.y;

            // Shape
            ctx2.beginPath();
            ctx2.rect(x, y, this.width, this.height);
            ctx2.fillStyle = this.backgroundColor;
            ctx2.fill();
            ctx2.closePath();
            ctx2.beginPath();
            ctx2.lineWidth = 1;
            ctx2.strokeStyle = this.color;
            ctx2.strokeRect(x, y, this.width, this.height);
            ctx2.closePath();
            // Decal
            switch(this.level){
                case 1:
                    // Create Range
                    this.createRange(this.level);
                    // level 1 decal
                    ctx2.arc(x + this.width/2, y + this.height/2, 4, Math.PI, 4*Math.PI);
                    ctx2.stroke();
                    ctx2.closePath();
                    break;
                case 2:
                    this.upgradeCost = 1200;
                    this.price += 750;
                    // Create Range
                    this.createRange(this.level);
                    // level 1 decal with fill
                    ctx2.arc(x + this.width/2, y + this.height/2, 2, 2*Math.PI, 4*Math.PI);
                    ctx2.fillStyle = "gold";
                    ctx2.fill();
                    ctx2.stroke();
                    ctx2.closePath();
                    // level 2 decal
                    ctx2.beginPath();
                    ctx2.arc(x + this.width/2, y + this.height/2, 8, 0*Math.PI, 4*Math.PI);
                    ctx2.stroke();
                    ctx2.closePath();
                    break;
                case 3:
                    this.upgradeCost = 2500;
                    this.price += 1200;
                    // Create Range
                    this.createRange(this.level);
                    // level 1 decal with fill
                    ctx2.arc(x + this.width/2, y + this.height/2, 2, 2*Math.PI, 4*Math.PI);
                    ctx2.fillStyle = "gold";
                    ctx2.fill();
                    ctx2.stroke();
                    ctx2.closePath();
                    // level 2 decal
                    ctx2.beginPath();
                    ctx2.arc(x + this.width/2, y + this.height/2, 7, 0*Math.PI, 4*Math.PI);
                    ctx2.stroke();
                    ctx2.closePath();
                    // level 32 decal
                    ctx2.beginPath();
                    ctx2.arc(x + this.width/2, y + this.height/2, 12, 0*Math.PI, 4*Math.PI);
                    ctx2.closePath();
                    ctx2.stroke();
                    break;
                case 4:
                    this.upgradeCost = null;
                    this.price += 2500;
                    // Create Range
                    this.createRange(this.level);
                    ctx2.lineWidth = 1;
                    // level 3 decal
                    ctx2.beginPath();
                    ctx2.arc(x + this.width/2, y + this.height/2, 2, 0*Math.PI, 4*Math.PI);
                    ctx2.fill();
                    ctx2.stroke();
                    ctx2.closePath();
                    ctx2.beginPath();
                    ctx2.arc(x + this.width/2, y + this.height/2, 7, 0*Math.PI, 4*Math.PI);
                    ctx2.closePath();
                    ctx2.stroke();
                    ctx2.beginPath();
                    ctx2.arc(x + this.width/2, y + this.height/2, 12, 0*Math.PI, 4*Math.PI);
                    ctx2.closePath();
                    ctx2.stroke();
                    // level 4 decal
                    ctx2.beginPath();
                    ctx2.arc(x + this.width/2, y + this.height/2, 17, 0*Math.PI, 4*Math.PI);
                    ctx2.closePath();
                    ctx2.stroke();
                    break;
            }
        }
    }

    drawRange(bool) {
        switch (bool) {
            case true:
                // Range Circle
                ctx.beginPath();
                ctx.arc(this.x + (this.width / 2), this.y + (this.height / 2), this.range, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();
                break;
            case false:
                ctx.clearRect(this.x - (this.range / 2), this.y - (this.range / 2), this.range, this.range);
                drawBoard('dodgerblue', 'black', "rgb(200, 200, 200)");
                break;
        }
    }
}

//////////////// END TOWERS ////////////////

function drawRotated(degrees, image, positionx, positiony, initialDirection, enemyColor) {
    var x = positionx;
    var y = positiony;
    switch(enemyColor){
        case "green":
            // Switch case for green enemies
            switch(initialDirection){
                case "up":
                // console.warn("POS X: " + x);
                // console.warn("    POS Y: " + y);
                    x = x + 8;
                    y = y + 48;
                    break;
                case "down":
                    x = x + 42;
                    y = y + 0;
                    break;
                case "right":
                    x = x;
                    y = y;
                    break;
                case "left":
                    x = x + 48;
                    y = y + 42;
                    break;
            }
            break;
        case "purple":
            // Switch case for purple enemies
            switch(initialDirection){
                case "up":
                    x = x + 8;
                    y = y + 48;
                    break;
                case "down":
                    x = x + 42;
                    y = y + 0;
                    break;
                case "right":
                    x = x;
                    y = y;
                    break;
                case "left":
                    x = x + 48;
                    y = y + 34;
                    break;
            }
            break;
        case "blue":
            // Switch case for blue enemies
            switch(initialDirection){
                case "up":
                    x = x + 15;
                    y = y + 48;
                    break;
                case "down":
                    x = x + 35;
                    y = y + 0;
                    break;
                case "right":
                    x = x;
                    y = y;
                    break;
                case "left":
                    x = x + 48;
                    y = y + 34;
                    break;
            }
            break;
        case "gold":
            // Switch case for gold enemies
            switch(initialDirection){
                case "up":
                    x = x + 8;
                    y = y + 48;
                    break;
                case "down":
                    x = x + 42;
                    y = y + 0;
                    break;
                case "right":
                    x = x;
                    y = y + 2;
                    break;
                case "left":
                    x = x + 48;
                    y = y + 33;
                    break;
            }
            break;
    }
    ctx3.translate(x, y);
    ctx3.rotate(degrees*Math.PI/180);
    ctx3.drawImage(image,-image.width/2,-image.width/2);
}

//////////////// START ENEMIES ////////////////

//--// ENEMY //--//
class Enemy {
    constructor(health, money){
        this.health = health;
        this.money = money;
        this.waypoint = 0;
        this.coordinate = {x: waypoints[this.waypoint].x, y: waypoints[this.waypoint].y};
        this.direction = "down";
        this.speed = 1;
    }

    create(){}

    draw(){}

    move(){}

    checkIfShouldChangeDirection(){}
    
    chagneDirection(){}

    special(){}
}

//-- Green Enemy --//
class GreenEnemy extends Enemy {
    constructor(health, money, id, speed){
        super(health, money);
        this.color = "green";
        this.waypoint = 0;
        this.coordinate = {x: waypoints[this.waypoint].x, y: waypoints[this.waypoint].y};
        this.direction = "down";
        this.speed =  speed * 1.1;
        var thisEnemy = document.createElement("IMG");
        thisEnemy.setAttribute("src", "Graphics/45w/Green Enemy.png");
        thisEnemy.setAttribute("id", id);
        thisEnemy.setAttribute("width", 0);
        thisEnemy.setAttribute("height", "auto");
        thisEnemy.setAttribute("style", "display: none;");
        document.body.appendChild(thisEnemy);
        this.img = document.getElementById(id);
        this.initalHealth = (this.health * 0.8333);
    }

    create(){
        ctx3.save();
        drawRotated(90, this.img, this.coordinate.x, this.coordinate.y);
        ctx3.restore();
        console.log("//////////////// ENEMY ////////////////");
        console.log("Green Enemy created");
        console.log("Green Enemy Health: " + this.health);
        console.log("Green Enemy Value: " + this.money);
    }

    draw(){
        // Draw body
        switch(this.direction){
            case "up":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);
                drawRotated(270, this.img, this.coordinate.x, this.coordinate.y, "up", "green");
                ctx3.restore();

                // Draw health bar
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 3, this.coordinate.y);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x + 46.5, this.coordinate.y);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 3, this.coordinate.y);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x + 2 + 1 * ((37.5/(1/this.health)) / this.initalHealth), this.coordinate.y);
                ctx3.stroke();
                ctx3.closePath();
                break;
            case "down":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);
                drawRotated(90, this.img, this.coordinate.x, this.coordinate.y, "down", "green");
                ctx.restore();

                // Draw health bar
                ctx3.beginPath();
                ctx3.rotate(90 * Math.PI / 180);
                ctx3.moveTo(this.coordinate.x - this.coordinate.x - 4.5, this.coordinate.y - this.coordinate.y + 5);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x - this.coordinate.x + 39, this.coordinate.y - this.coordinate.y + 5);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x - this.coordinate.x + 39, this.coordinate.y - this.coordinate.y + 5);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x - this.coordinate.x + 37 + 1 * -((34.5/(1/this.health)) / this.initalHealth), this.coordinate.y - this.coordinate.y + 5);
                ctx3.stroke();
                ctx3.closePath();
                break;
            case "left":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);
                drawRotated(180, this.img, this.coordinate.x, this.coordinate.y, "left", "green");
                ctx3.restore();

                // Draw health bar
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 4, this.coordinate.y + 3.5);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x + 48, this.coordinate.y + 3.5);
                ctx3.stroke();
                ctx3.closePath();
                // Draw Health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 4, this.coordinate.y + 3.5);                
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x + 4 + 1 * ((38.5/(1/this.health)) / this.initalHealth), this.coordinate.y + 3.5);
                ctx3.stroke();
                ctx3.closePath();
                break;
            case "right":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);
                ctx3.drawImage(this.img, this.coordinate.x, this.coordinate.y + 7);
                ctx3.restore();

                // Draw health bar
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x, this.coordinate.y + 3.5);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x + 44, this.coordinate.y + 3.5);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x, this.coordinate.y + 3.5);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x + 1 * ((38.5/(1/this.health)) / this.initalHealth), this.coordinate.y + 3.5);
                ctx3.stroke();
                ctx3.closePath();
                break;
        }
    }

    move(){
        this.checkIfShouldChangeDirection();
        switch(this.direction){
            case "up":
                this.coordinate.y -= this.speed;
                this.draw();
                break;
            case "down":
                this.coordinate.y += this.speed;
                this.draw();
                break;
            case "left":
                this.coordinate.x -= this.speed;
                this.draw();
                break;
            case "right":
                this.coordinate.x += this.speed;
                this.draw();
                break;
        }
    }

    checkIfShouldChangeDirection(){
        switch(this.direction){
            case "up":
                if (this.coordinate.y <= waypoints[this.waypoint + 1].y){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
            case "down":
                if (this.coordinate.y >= waypoints[this.waypoint + 1].y){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
            case "left":
                if (this.coordinate.x <= waypoints[this.waypoint + 1].x){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
            case "right":
                if (this.coordinate.x >= waypoints[this.waypoint + 1].x){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
        }
    }

    changeDirection(direction){
        switch(direction){
            case "up":
                this.direction = "up";
                break;
            case "down":
                this.direction = "down";
                break;
            case "left":
                this.direction = "left";
                break;
            case "right":
                this.direction = "right";
                break;
        }
    }

    checkHealth(){
        if (this.health <= 0) {
            money += this.money;
            return false;
        } else {
            return true;
        }
    }

    special(){

    }
}

//-- Purple Enemy --//
class PurpleEnemy extends Enemy {
    constructor(health, money, speed){
        super(health * 2, money);
        this.color = "purple";
        this.waypoint = 0;
        this.coordinate = {x: waypoints[this.waypoint].x, y: waypoints[this.waypoint].y};
        this.direction = "down";
        this.speed = speed * 0.7;
        this.img = document.getElementById("purpleEnemy");
        this.initalHealth = (this.health * 0.571);

    }

    create(){
        ctx3.save();
        drawRotated(90, this.img, this.coordinate.x, this.coordinate.y);
        ctx3.restore();
        console.log("//////////////// ENEMY ////////////////");
        console.log("Purple Enemy created");
        console.log("Purple Enemy Health: " + this.health);
        console.log("Purple Enemy Value: " + this.money);
    }

    draw(){
        switch(this.direction){
            case "up":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);
                drawRotated(270, this.img, this.coordinate.x, this.coordinate.y, "up", "purple");
                ctx3.restore();

                // Draw health bar
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 3, this.coordinate.y);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x + 46.5, this.coordinate.y);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 3, this.coordinate.y);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x + 3 + 1 * ((25/(1/this.health)) / this.initalHealth), this.coordinate.y);
                ctx3.stroke();
                ctx3.closePath();
                break;
            case "down":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);
                drawRotated(90, this.img, this.coordinate.x, this.coordinate.y, "down", "purple");
                ctx.restore();

                // Draw health bar
                ctx3.beginPath();
                ctx3.rotate(90 * Math.PI / 180);
                ctx3.moveTo(this.coordinate.x - this.coordinate.x - 4.5, this.coordinate.y - this.coordinate.y + 5);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x - this.coordinate.x + 39, this.coordinate.y - this.coordinate.y + 5);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x - this.coordinate.x + 38.5, this.coordinate.y - this.coordinate.y + 5);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x - this.coordinate.x + 38.5 + 1 * -((24.5/(1/this.health)) / this.initalHealth), this.coordinate.y - this.coordinate.y + 5);
                ctx3.stroke();
                ctx3.closePath();
                break;
            case "left":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);
                drawRotated(180, this.img, this.coordinate.x, this.coordinate.y + 7, "left", "purple");
                ctx3.restore();

                // Draw health bar
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x, this.coordinate.y + 3);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x + 44, this.coordinate.y + 3);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x, this.coordinate.y + 3);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x + 1 + 1 * ((24.5/(1/this.health)) / this.initalHealth), this.coordinate.y + 3);
                ctx3.stroke();
                ctx3.closePath();
                break;
            case "right":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);
                ctx3.drawImage(this.img, this.coordinate.x, this.coordinate.y + 7);
                ctx3.restore();
                
                // Draw health bar
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x, this.coordinate.y + 3);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x + 44, this.coordinate.y + 3);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x, this.coordinate.y + 3);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x + 2 + 1 * ((24.5/(1/this.health)) / this.initalHealth), this.coordinate.y + 3);
                ctx3.stroke();
                ctx3.closePath();
                break;
        }
    }

    move(){
        this.checkIfShouldChangeDirection();
        switch(this.direction){
            case "up":
                this.coordinate.y -= this.speed;
                this.draw();
                break;
            case "down":
                this.coordinate.y += this.speed;
                this.draw();
                break;
            case "left":
                this.coordinate.x -= this.speed;
                this.draw();
                break;
            case "right":
                this.coordinate.x += this.speed;
                this.draw();
                break;
        }
    }

    checkIfShouldChangeDirection(){
        switch(this.direction){
            case "up":
                if (this.coordinate.y <= waypoints[this.waypoint + 1].y){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
            case "down":
                if (this.coordinate.y >= waypoints[this.waypoint + 1].y){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
            case "left":
                if (this.coordinate.x <= waypoints[this.waypoint + 1].x){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
            case "right":
                if (this.coordinate.x >= waypoints[this.waypoint + 1].x){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
        }
    }

    changeDirection(direction){
        switch(direction){
            case "up":
                this.direction = "up";
                break;
            case "down":
                this.direction = "down";
                break;
            case "left":
                this.direction = "left";
                break;
            case "right":
                this.direction = "right";
                break;
        }
    }

    checkHealth(){
        if (this.health <= 0) {
            money += this.money;
            return false;
        } else {
            return true;
        }
    }

    special(){}
}

//-- Blue Enemy --//
class BlueEnemy extends Enemy {
    constructor(health, money, speed){
        super(health * 0.9, money);
        this.color = "blue";
        this.waypoint = 0;
        this.coordinate = {x: waypoints[this.waypoint].x, y: waypoints[this.waypoint].y};
        this.direction = "down";
        this.speed = speed * 1.3;
        this.img = document.getElementById("blueEnemy");
        this.initalHealth = (this.health * 0.4);

    }

    create(){
        ctx3.save();
        drawRotated(90, this.img, this.coordinate.x, this.coordinate.y);
        ctx3.restore();
        console.log("//////////////// ENEMY ////////////////");
        console.log("Blue Enemy created");
        console.log("Blue Enemy Health: " + this.health);
        console.log("Blue Enemy Value: " + this.money);
    }

    draw(){
        console.log(this.initalHealth);
        switch(this.direction){
            case "up":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);                
                drawRotated(270, this.img, this.coordinate.x, this.coordinate.y, "up", "blue");
                ctx3.restore();
                
                // Draw health bar
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 3, this.coordinate.y - 3.5);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x + 46.5, this.coordinate.y - 3.5);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 3, this.coordinate.y - 3.5);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x + 3 + 1 * ((17.5/(1/this.health)) / this.initalHealth), this.coordinate.y - 3.5);
                ctx3.stroke();
                ctx3.closePath();
                break;
            case "down":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55)
                drawRotated(90, this.img, this.coordinate.x, this.coordinate.y, "down", "blue");
                ctx.restore();

                // Draw health bar
                ctx3.beginPath();
                ctx3.rotate(90 * Math.PI / 180);
                ctx3.moveTo(this.coordinate.x - this.coordinate.x + 32, this.coordinate.y - this.coordinate.y + 5);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x - this.coordinate.x - 11.5, this.coordinate.y - this.coordinate.y + 5);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x - this.coordinate.x + 32, this.coordinate.y - this.coordinate.y + 5);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x - this.coordinate.x + 33 + 1 * -((18/(1/this.health)) / this.initalHealth), this.coordinate.y - this.coordinate.y + 5);
                ctx3.stroke();
                ctx3.closePath();
                break;
            case "left":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55)
                drawRotated(180, this.img, this.coordinate.x, this.coordinate.y, "left", "blue");
                ctx3.restore();

                // Draw health bar
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 3, this.coordinate.y + 7);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x + 46.5, this.coordinate.y + 7);
                ctx3.stroke();
                ctx3.closePath();
                // Draw Health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 3, this.coordinate.y + 7);                
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x + 3 + 1 * ((18/(1/this.health)) / this.initalHealth), this.coordinate.y + 7);
                ctx3.stroke();
                ctx3.closePath();
                break;
            case "right":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 2, this.coordinate.y - 5, 55, 55);
                ctx3.drawImage(this.img, this.coordinate.x, this.coordinate.y + 14);
                ctx3.restore();
                
                // Draw health bar
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 1, this.coordinate.y + 7);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x + 44.5, this.coordinate.y + 7);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x, this.coordinate.y + 7);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x + 1 * ((18/(1/this.health)) / this.initalHealth), this.coordinate.y + 7);
                ctx3.stroke();
                ctx3.closePath();
                break;
        }
    }

    move(){
        this.checkIfShouldChangeDirection();
        switch(this.direction){
            case "up":
                this.coordinate.y -= this.speed;
                this.draw();
                break;
            case "down":
                this.coordinate.y += this.speed;
                this.draw();
                break;
            case "left":
                this.coordinate.x -= this.speed;
                this.draw();
                break;
            case "right":
                this.coordinate.x += this.speed;
                this.draw();
                break;
        }
    }

    checkIfShouldChangeDirection(){
        switch(this.direction){
            case "up":
                if (this.coordinate.y <= waypoints[this.waypoint + 1].y){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
            case "down":
                if (this.coordinate.y >= waypoints[this.waypoint + 1].y){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
            case "left":
                if (this.coordinate.x <= waypoints[this.waypoint + 1].x){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
            case "right":
                if (this.coordinate.x >= waypoints[this.waypoint + 1].x){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
        }
    }

    changeDirection(direction){
        switch(direction){
            case "up":
                this.direction = "up";
                break;
            case "down":
                this.direction = "down";
                break;
            case "left":
                this.direction = "left";
                break;
            case "right":
                this.direction = "right";
                break;
        }
    }

    checkHealth(){
        if (this.health <= 0) {
            money += this.money;
            return false;
        } else {
            return true;
        }
    }

    special(){

    }
}

//-- Gold Enemy --//
class GoldEnemy extends Enemy {
    constructor(health, money, speed){
        super(health * 0.75, money);
        this.color = "gold";
        this.waypoint = 0;
        this.coordinate = {x: waypoints[this.waypoint].x, y: waypoints[this.waypoint].y};
        this.direction = "down";
        this.speed = speed * 2.1;
        this.img = document.getElementById("goldEnemy");
        this.initalHealth = (this.health * 0.29);
    }

    create(){
        ctx3.save();
        drawRotated(90, this.img, this.coordinate.x, this.coordinate.y);
        ctx3.restore();
        console.log("//////////////// ENEMY ////////////////");
        console.log("Gold Enemy created");
        console.log("Gold Enemy Health: " + this.health);
        console.log("Gold Enemy Value: " + this.money);
    }

    draw(){
        console.log(this.initalHealth);
        switch(this.direction){
            case "up":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);
                drawRotated(270, this.img, this.coordinate.x, this.coordinate.y, "up", "gold");
                ctx3.restore();
                
                // Draw health bar
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 3, this.coordinate.y);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x + 46.5, this.coordinate.y);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x + 3, this.coordinate.y);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x + 3 + 1 * ((12.5/(1/this.health)) / this.initalHealth), this.coordinate.y);
                ctx3.stroke();
                ctx3.closePath();
                break;
            case "down":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);
                drawRotated(90, this.img, this.coordinate.x, this.coordinate.y, "down", "gold");
                ctx.restore();

                // Draw health bar
                ctx3.beginPath();
                ctx3.rotate(90 * Math.PI / 180);
                ctx3.moveTo(this.coordinate.x - this.coordinate.x - 4.5, this.coordinate.y - this.coordinate.y + 5);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x - this.coordinate.x + 39, this.coordinate.y - this.coordinate.y + 5);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x - this.coordinate.x + 39, this.coordinate.y - this.coordinate.y + 5);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x - this.coordinate.x + 39 + 1 * -((12.5/(1/this.health)) / this.initalHealth), this.coordinate.y - this.coordinate.y + 5);
                ctx3.stroke();
                ctx3.closePath();
                break;
            case "left":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);
                drawRotated(180, this.img, this.coordinate.x, this.coordinate.y + 7, "left", "gold");
                ctx3.restore();

                // Draw health bar
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x, this.coordinate.y + 4.5);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x + 44, this.coordinate.y + 4.5);
                ctx3.stroke();
                ctx3.closePath();
                // Draw Health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x, this.coordinate.y + 4.5);                
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x + 1 * ((12.5/(1/this.health)) / this.initalHealth), this.coordinate.y + 4.5);
                ctx3.stroke();
                ctx3.closePath();
                break;
            case "right":
                ctx3.save();
                ctx3.clearRect(this.coordinate.x - 5, this.coordinate.y - 5, 55, 55);
                ctx3.drawImage(this.img, this.coordinate.x, this.coordinate.y + 7);
                ctx3.restore(); 
                
                // Draw health bar
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x, this.coordinate.y + 3.5);
                ctx3.lineWidth = 3;
                ctx3.strokeStyle = "red";
                ctx3.lineTo(this.coordinate.x + 44, this.coordinate.y + 3.5);
                ctx3.stroke();
                ctx3.closePath();
                // Draw health
                ctx3.beginPath();
                ctx3.moveTo(this.coordinate.x, this.coordinate.y + 3.5);
                ctx3.strokeStyle = "green";
                ctx3.lineTo(this.coordinate.x + 1 * ((12.5/(1/this.health)) / this.initalHealth), this.coordinate.y + 3.5);
                ctx3.stroke();
                ctx3.closePath();
                break;
        }
    }

    move(){
        this.checkIfShouldChangeDirection();
        switch(this.direction){
            case "up":
                this.coordinate.y -= this.speed;
                this.draw();
                break;
            case "down":
                this.coordinate.y += this.speed;
                this.draw();
                break;
            case "left":
                this.coordinate.x -= this.speed;
                this.draw();
                break;
            case "right":
                this.coordinate.x += this.speed;
                this.draw();
                break;
        }
    }

    checkIfShouldChangeDirection(){
        switch(this.direction){
            case "up":
                if (this.coordinate.y <= waypoints[this.waypoint + 1].y + 1){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
            case "down":
                if (this.coordinate.y >= waypoints[this.waypoint + 1].y){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
            case "left":
                if (this.coordinate.x <= waypoints[this.waypoint + 1].x + 0.5){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
            case "right":
                if (this.coordinate.x >= waypoints[this.waypoint + 1].x - 0.5){
                    this.changeDirection(waypoints[this.waypoint + 1].direction);
                    if (this.waypoint != 15) {
                        this.waypoint += 1;
                    }
                }
                break;
        }
    }

    changeDirection(direction){
        switch(direction){
            case "up":
                this.direction = "up";
                break;
            case "down":
                this.direction = "down";
                break;
            case "left":
                this.direction = "left";
                break;
            case "right":
                this.direction = "right";
                break;
        }
    }

    checkHealth(){
        if (this.health <= 0) {
            money += this.money;
            return false;
        } else {
            return true;
        }
    }

    special(){}
}

//////////////// END ENEMIES ////////////////


//////////////// START CLICK EVENTS ////////////////



//////////////// END CLICK EVENTS ////////////////


//////////////// START ROUNDS ////////////////

var currentRound = 0;

var rounds = [
    round1 = {
        y: 0,
        b: 0,
        g: 10,
        p: 0,
        baseHealth: 175,
        baseMoney: 20,
        baseSpeed: 1,
        count: function() {
            return (this.g + this.p + this.b + this.y);
        }
    },
    round2 = {
        y: 0,
        b: 0,
        g: 0,
        p: 10,
        baseHealth: 300,
        baseMoney: 30,
        baseSpeed: 1,
        count: function() {
            return (this.g + this.p + this.b + this.y);
        }
    },
    round3 = {
        y: 0,
        b: 10,
        g: 0,
        p: 0,
        baseHealth: 450,
        baseMoney: 40,
        baseSpeed: 1,
        count: function() {
            return (this.g + this.p + this.b + this.y);
        }
    },
    round4 = {
        y: 10,
        b: 0,
        g: 0,
        p: 0,
        baseHealth: 750,
        baseMoney: 50,
        baseSpeed: 1,
        count: function() {
            return (this.g + this.p + this.b + this.y);            
        }
    },
    round5 = {
        y: 2,
        b: 0,
        g: 10,
        p: 0,
        baseHealth: 900,
        baseMoney: 60,
        baseSpeed: 1.25,
        count: function() {
            return (this.g + this.p + this.b + this.y); 
        }
    },
    round6 = {
        y: 0,
        b: 7,
        g: 0,
        p: 7,
        baseHealth: 1200,
        baseMoney: 65,
        baseSpeed: 1.25,
        count: function() {
            return (this.g + this.p + this.b + this.y); 
        }
    },
    round7 = {
        y: 4,
        b: 4,
        g: 4,
        p: 4,
        baseHealth: 1500,
        baseMoney: 70,
        baseSpeed: 1.25,
        count: function() {
            return (this.g + this.p + this.b + this.y); 
        }
    },
    round8 = {
        y: 10,
        b: 0,
        g: 10,
        p: 0,
        baseHealth: 2000,
        baseMoney: 80,
        baseSpeed: 1.25,
        count: function() {
            return (this.g + this.p + this.b + this.y); 
        }
    },
    round9 = {
        y: 0,
        b: 12,
        g: 0,
        p: 12,
        baseHealth: 2500,
        baseMoney: 90,
        baseSpeed: 1.25,
        count: function() {
            return (this.g + this.p + this.b + this.y); 
        }
    },
    round10 = {
        y: 10,
        b: 10,
        g: 10,
        p: 10,
        baseHealth: 3200,
        baseMoney: 100,
        baseSpeed: 1.5,
        count: function() {
            return (this.g + this.p + this.b + this.y); 
        }
    }
];

var deadEnemies = [];
var lastEnemyCreated = false;

function checkWaveComplete() {
    deadEnemies = [];

    for (var i = 0; i < enemyArray.length; i++) {
        if (!enemyArray[i]) {
            deadEnemies.push("dead");
        }
    }
    if (lastEnemyCreated) {
        if (deadEnemies.length == enemyArray.length) {
            return true;
        }
    }
}

//////////////// END ROUNDS ////////////////

// Set inital out of bounds tower to start of tower array to remove bug
var greenTower = new GreenTower(1);
greenTower.draw(-350, -150);

drawBoard('dodgerblue', 'black', "rgb(200, 200, 200)");

// Play Button
let playButton = document.getElementById("play");
function startWave(){
    if (waveStarted == false) {
        console.log("**************** WAVE STARTED ****************");
        waveStarted = true;
        
        // Start game loop
        var gameLoop = setInterval(updateCanvas, 10);

        function updateCanvas() {
            // Clear canvas board to remove any anomalies
            ctx4.clearRect(0, 0, canvas.width, canvas.height);
            ctx3.clearRect(0, 0, canvas.width, canvas.height);

            // Update game values
            moneyNumber.innerText = money;
            livesNumber.innerText = lives;

            //console.log(enemyArray);
            for (var i = 0; i < towerArray.length; i++) {
                towerArray[i].checkIfEnemyIsInRange();
            }

            // Make each enemy move and check if enemy should be destroyed
            for (var i = 0; i < enemyArray.length; i++) {
                if (enemyArray[i]) {
                    ctx3.save();
                    enemyArray[i].move();
                    ctx3.restore();
                    if (enemyArray[i].checkHealth() == false) {
                        enemyArray.splice(i, 1);
                    }
                }
            }
            
            // Stop loop condition
            if(checkWaveComplete()) {
                // Clear last enemy off board
                ctx3.clearRect(0, 0, canvas.width, canvas.height);
                // Clear last tower shot from board
                ctx4.clearRect(0, 0, canvas.width, canvas.height);
                function stopRound(){
                    clearInterval(gameLoop);
                    console.log("!!!!!!!!!!!!!!!! WAVE COMPLETE !!!!!!!!!!!!!!!!");
                    waveStarted = false;
                    roundCreated = false;
                    currentRound++;
                }
                setTimeout(stopRound, 1);
            }
        }
    }
}
playButton.addEventListener('click', play);

var waveStarted = false;
var roundCreated = false;
var enemyArray = [];
var amountOfTowers = 0;
function play(){
    startWave();
    // Create round
    if (roundCreated == false) {
        console.info(currentRound + 1);
        console.warn(rounds[currentRound]);
        createRound(rounds[currentRound]);
        roundCreated = true;
    }
}

function createRound(round){
    console.log("TOWER ARRAY: " + towerArray);
    lastEnemyCreated = false;
    enemyArray = [];
    enemyArrayMap = [];
    var greens = round.g;
    var purples = round.p;
    var blues = round.b;
    var yellows = round.y;
    var health = round.baseHealth;
    var money = round.baseMoney;
    var speed = round.baseSpeed;
    var totalEnemies = round.count();

    // Sets UI view to display round and number of enemies in current round
    var roundNumber = document.getElementById('roundNumber');
    roundNumber.innerText = currentRound + 1;
    var greenNumber = document.getElementById('greenNumber');
    var purpleNumber = document.getElementById('purpleNumber');
    var blueNumber = document.getElementById('blueNumber');
    var goldNumber = document.getElementById('goldNumber');
    greenNumber.innerText = greens;
    purpleNumber.innerText = purples;
    blueNumber.innerText = blues;
    goldNumber.innerText = yellows;

    for (var i = 0; i < yellows; i++) {
        enemyArrayMap.push("yellow");
    }
    for (var i = 0; i < blues; i++) {
        enemyArrayMap.push("blue");
    }
    for (var i = 0; i < greens; i++) {
        enemyArrayMap.push("green");
    }
    for (var i = 0; i < purples; i++) {
        enemyArrayMap.push("purple");
    }

    var enemy = 0;
    console.log("Total enemies: " + totalEnemies);

    function createEnemy(){
        if (enemy <= totalEnemies) {
            console.log("Enemy#" + (enemy + 1));
            switch (enemyArrayMap[enemy]) {
                case "green":
                    enemyArray[enemy] = new GreenEnemy(health, money, enemy, speed);
                    break;
                case "purple":
                    enemyArray[enemy] = new PurpleEnemy(health, money, speed);   
                    break;
                case "blue":
                    enemyArray[enemy] = new BlueEnemy(health, money, speed);
                    break;
                case "yellow":
                    enemyArray[enemy] = new GoldEnemy(health, money, speed);
                    break;                
            }
            enemy++;
        } else {
            console.log(enemyArray);
            lastEnemyCreated = true;
            checkWaveComplete();
            clearInterval(enemyLoop);  
        }
    }
    
    createEnemy();
    var enemyLoop = setInterval(createEnemy, 1600);
}