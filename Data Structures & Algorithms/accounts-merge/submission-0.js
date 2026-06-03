class Union {
    constructor(n) {
        this.parents = [];
        this.size = [];

        for (let i = 0; i < n; i++) {
            this.parents.push(i);
            this.size.push(1);
        }
    }

    find(x) {
        if (x === this.parents[x]) {
            return this.parents[x];
        }

        this.parents[x] = this.find(this.parents[x]);

        return this.parents[x];
    }

    union(x, y) {
        const p1 = this.find(x);
        const p2 = this.find(y);

        if (p1 === p2) {
            return false;
        }

        if(this.size[p1] > this.size[p2]) {
            this.parents[p2] = p1;
            this.size[p1] += this.size[p2];
        } else {
            this.parents[p1] = p2;
            this.size[p2] += this.size[p1];
        }

        return true;
    }
}


class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const union = new Union(accounts.length);
        const emailToAccId = new Map();

        for (let i = 0; i < accounts.length; i++) {
            for (let j = 1; j < accounts[i].length; j++) {
                const email = accounts[i][j];

                if (emailToAccId.has(email)) {
                    union.union(i, emailToAccId.get(email));
                } else {
                    emailToAccId.set(email, i);
                }
            }
        }

        const groups = new Map();
        for (let [email, id] of emailToAccId.entries()) {
            const p = union.find(id);
            const emails = (groups.get(p) ?? []);
            emails.push(email);
            groups.set(p, emails);
        }

        const res = [];

        for (let [id, emails] of groups.entries()) {
            const name = accounts[id][0];
            res.push([name, ...emails]);
        }

        return res;
    }
}
