/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

class Solution {
    constructor() {
        this.max = 0;
    }
    /**
     * @param {NestedInteger[]} nestedList
     * @return {number}
     */
    depthSumInverse(nestedList) {
        this.maxDepth(nestedList, 0);
        return this.calc(nestedList, 0); 
    }

    calc(nestedList, count) {
        let acc = 0;
        count++;
        for (let list of nestedList) {
            if (!list.isInteger()) {
                acc += this.calc(list.getList(), count);
            } else {
               acc += list.getInteger() * ((this.max - count) + 1);
            }
        }

        return acc;
    }

    maxDepth(nestedList, count) {
        count++;
        for (let list of nestedList) {
            if (!list.isInteger()) {
               this.maxDepth(list.getList(), count);
            }
        }

        this.max = Math.max(this.max, count);
    }
}
