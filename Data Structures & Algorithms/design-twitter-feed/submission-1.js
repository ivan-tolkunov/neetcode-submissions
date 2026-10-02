class Twitter {
    constructor() {
        this.tweets = new Map();   // userId -> [{ tweetId, time }]
        this.follows = new Map();  // userId -> Set<followeeId>
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }

        this.tweets.get(userId).push({
            tweetId,
            time: this.time++
        });
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const heap = new MaxPriorityQueue(
            (item) => item.time
        );

        const users = new Set([userId]);

        if (this.follows.has(userId)) {
            for (const followeeId of this.follows.get(userId)) {
                users.add(followeeId);
            }
        }

        for (const id of users) {
            if (!this.tweets.has(id)) {
                continue;
            }

            const tweets = this.tweets.get(id);

            // Start from this user's latest tweet.
            const index = tweets.length - 1;

            if (index >= 0) {
                heap.enqueue({
                    userId: id,
                    index,
                    tweetId: tweets[index].tweetId,
                    time: tweets[index].time
                });
            }
        }

        const result = [];

        while (!heap.isEmpty() && result.length < 10) {
            const current = heap.dequeue();

            result.push(current.tweetId);

            const nextIndex = current.index - 1;

            if (nextIndex >= 0) {
                const nextTweet = this.tweets.get(current.userId)[nextIndex];

                heap.enqueue({
                    userId: current.userId,
                    index: nextIndex,
                    tweetId: nextTweet.tweetId,
                    time: nextTweet.time
                });
            }
        }

        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.follows.has(followerId)) {
            this.follows.set(followerId, new Set());
        }

        this.follows.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (!this.follows.has(followerId)) {
            return;
        }

        this.follows.get(followerId).delete(followeeId);
    }
}