# Battleship

Created using:

- HTML/CSS (with Grid and flexbox)/JavaScript
- TDD Principles, tesing units written using Jest
- Webpack / Babel transpiling

The current version allows for a single player (versus computer) game of the classic board game, Battleship. The player places their "ships," either horizontally or vertically, on the left game board. Once the game begins, the player may "fire" upon the enemy's game board on the right. The space will turn light blue for a "miss", or red for a "hit". The player alternates turns with the computer, attempting to sink one anothers' ships. Upon successfully sinking a ship, all the spaces for that ship will turn yellow with an asterisk placed inside of them. Each of these outcomes is accompanied by appropriate sound effects.

The most challenging aspect of this application was developing a quasi- "AI", in that the computer player will attempt to shoot adjacent spots upon finding a hit spot on the player's board. In its current iteration, the computer player will first attempt to shoot spaces horizontally adjacent, and will proceed vertically if this proves unsuccessful. Once the computer "knows" which direction the ship is likely pointed, it will proceed shooting in that direction.

For future versions, it may be wise to use drag-and-drop for ship placement, rather than the current mouseover events that show a preview of the ship's placement. This would allow the application to scale to mobile more successfully than it currently does. Also, it would be better to have a "new game" reset all of the game's info, rather than simply refreshing the browser, as it currently does.
