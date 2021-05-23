export default (function (_a) {
    var put = _a.put;
    return function save(account) {
        return put("/api/accounts/" + account.userId, account);
    };
});
