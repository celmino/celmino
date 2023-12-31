

export function getListId() {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/list\/([^\/]+)\//;

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
    var regexPattern = /\/document\/([^\/]+)\//;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];

    } else {
        return;
    }

}