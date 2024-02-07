export function isAppletSettings(appletId) {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/applet\/([^\/]+)\/settings/;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1] === appletId;

    } else {
        return;
    }

}

export function isAppletOnly(appletId) {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/applet\/([^\/]+)^\//;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1] === appletId;

    } else {
        return;
    }

}

export function getAppletId() {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/applet\/([^\/]+)/;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];

    } else {
        return;
    }

}


export function getListId() {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/list\/([^]+)/;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];

    } else {
        return;
    }

}

export function getViewId() {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/view\/([^]+)/;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];

    } else {
        return;
    }

}

export function getDocumentId() {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/document\/([^\/]+)/;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];

    } else {
        return;
    }

}

export function getWhiteboardId() {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/whiteboard\/([^\/]+)/;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];

    } else {
        return;
    }

}