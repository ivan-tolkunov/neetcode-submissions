class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const primeColor = image[sr][sc];

        if (color === primeColor) {
            return image;
        }

        const visited = new Set();

        this.dfs(image, sr, sc, color, primeColor, visited);
        
        return image;
    }

    dfs(image, r, c, color, primeColor, visited) {
        const rows = image.length;
        const cols = image[0].length;
        const key = `${r},${c}`;

        if (r < 0 || c < 0 || r === rows || c === cols || visited.has(key)) {
            return;
        }

        const currentColor = image[r][c];

        if (currentColor !== primeColor) {
            return;
        }

        visited.add(key);
        image[r][c] = color;

        this.dfs(image, r + 1, c, color, primeColor, visited);
        this.dfs(image, r - 1, c, color, primeColor, visited);
        this.dfs(image, r, c + 1, color, primeColor, visited);
        this.dfs(image, r, c - 1, color, primeColor, visited);
    }
}

//rules 
// out of bound
// other colors 
// already filled cells

// [2,2,2]
// [2,2,0]
// [2,0,1] 
