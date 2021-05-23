var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
export default (function (_a) {
    var preventDefault = _a.preventDefault, save = _a.save;
    return function AccountComponent(_a) {
        var account = _a.value, onChange = _a.onChange;
        return React.createElement("form", { className: "container-fluid", onSubmit: function (e) { return preventDefault(e, function () { return save(__assign({}, account)); }); } },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-6 form-group" },
                    React.createElement("label", { htmlFor: "lastname" }, "Nom"),
                    React.createElement("input", { className: "form-control", value: account.lastName, onChange: function (e) { return onChange(__assign(__assign({}, account), { lastName: e.target.value })); }, id: "lastname" })),
                React.createElement("div", { className: "col-md-6 form-group" },
                    React.createElement("label", { htmlFor: "firstname" }, "Pr\u00E9nom"),
                    React.createElement("input", { className: "form-control", value: account.firstName, onChange: function (e) { return onChange(__assign(__assign({}, account), { firstName: e.target.value })); }, id: "firstname" })),
                React.createElement("div", { className: "col-md-6 form-group" },
                    React.createElement("label", { htmlFor: "street" }, "Adresse"),
                    React.createElement("input", { className: "form-control", value: account.street, onChange: function (e) { return onChange(__assign(__assign({}, account), { street: e.target.value })); }, id: "street" })),
                React.createElement("div", { className: "col-md-6 form-group" },
                    React.createElement("label", { htmlFor: "complement" }, "Compl\u00E9ment"),
                    React.createElement("input", { className: "form-control", value: account.complement, onChange: function (e) { return onChange(__assign(__assign({}, account), { complement: e.target.value })); }, id: "complement" })),
                React.createElement("div", { className: "col-md-2 form-group" },
                    React.createElement("label", { htmlFor: "zipCode" }, "Code postal"),
                    React.createElement("input", { className: "form-control", value: account.zipCode, onChange: function (e) { return onChange(__assign(__assign({}, account), { zipCode: e.target.value })); }, id: "zipCode" })),
                React.createElement("div", { className: "col-md-4 form-group" },
                    React.createElement("label", { htmlFor: "city" }, "Ville"),
                    React.createElement("input", { className: "form-control", value: account.city, onChange: function (e) { return onChange(__assign(__assign({}, account), { city: e.target.value })); }, id: "city" })),
                React.createElement("div", { className: "col-md-6 form-group" },
                    React.createElement("label", { htmlFor: "country" }, "Pays"),
                    React.createElement("input", { className: "form-control", value: account.country, onChange: function (e) { return onChange(__assign(__assign({}, account), { country: e.target.value })); }, id: "country" })),
                React.createElement("div", { className: "col-md-6 form-group" },
                    React.createElement("label", { htmlFor: "phone" }, "Tel"),
                    React.createElement("input", { className: "form-control", value: account.phone, onChange: function (e) { return onChange(__assign(__assign({}, account), { phone: e.target.value })); }, id: "phone" })),
                React.createElement("div", { className: "col-md-6 form-group" },
                    React.createElement("label", { htmlFor: "email" }, "Email"),
                    React.createElement("input", { className: "form-control", value: account.email, onChange: function (e) { return onChange(__assign(__assign({}, account), { email: e.target.value })); }, id: "email" })),
                React.createElement("div", { className: "col-md-6 form-group" },
                    React.createElement("label", { htmlFor: "siret" }, "Siret"),
                    React.createElement("input", { className: "form-control", value: account.siret, onChange: function (e) { return onChange(__assign(__assign({}, account), { siret: e.target.value })); }, id: "siret" })),
                React.createElement("div", { className: "col-md-6 form-group" },
                    React.createElement("label", { htmlFor: "numTva" }, "Num tva"),
                    React.createElement("input", { className: "form-control", value: account.numTva, onChange: function (e) { return onChange(__assign(__assign({}, account), { numTva: e.target.value })); }, id: "numTva" })),
                React.createElement("button", { type: "submit", className: "btn btn-primary full-width attention-hover", "data-content": "Enregistrer" }, "Enregistrer")));
    };
});
