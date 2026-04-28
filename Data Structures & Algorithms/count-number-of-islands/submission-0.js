class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = new Set();
        let res = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
               if (grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
                    this.dfs(grid, r, c, visited);
                    res++;
               } 
            }
        }

        return res;
    }

    
    dfs(grid, r, c, visited) {
        const rows = grid.length;
        const cols = grid[0].length; 
        const key = `${r},${c}`
        if (r < 0 || c < 0 || visited.has(key) || r === rows || c === cols || grid[r][c] === '0') {
            return;
        }

        visited.add(key);
        this.dfs(grid, r + 1, c, visited);
        this.dfs(grid, r - 1, c, visited);
        this.dfs(grid, r, c + 1, visited);
        this.dfs(grid, r, c - 1,  visited);
    }
}
