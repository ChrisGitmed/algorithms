import { test, expect } from '@jest/globals';
import { countMatches } from'../solutions/1773.js';

test('Should count the number of items matching the rule.', () => {
    const items = [
        ["phone","blue","pixel"],
        ["computer","silver","lenovo"],
        ["phone","gold","iphone"]
    ];
    const ruleKey = 'color';
    const ruleValue = 'silver';
    expect(countMatches(items, ruleKey, ruleValue)).toBe(1);
});

test('Should count the number of items matching the rule.', () => {
    const items = [
        ["phone","blue","pixel"],
        ["computer","silver","phone"],
        ["phone","gold","iphone"]
    ];
    const ruleKey = 'type';
    const ruleValue = 'phone';
    expect(countMatches(items, ruleKey, ruleValue)).toBe(2);
});