// Utilities
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const out = $("#output");
const preview = $("#preview");
const STORAGE_KEY = "code-editor";

const escapeHtml = s => 
    String(s).replace(/[&<>""]/g, c => ({
        '&': "&amp;",
        '<': "lt;", 
        ">": "&gt;", 
        '"': "&quot;",
    }[c]
));

