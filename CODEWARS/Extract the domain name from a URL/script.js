function domainName(url){
    let domainName = url.replace(/^https?:\/\//, '');
    domainName = domainName.replace(/^www\./, '');
    const parts = domainName.split('.');
    return parts[0];
    }