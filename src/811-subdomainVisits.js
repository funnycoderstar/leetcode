/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let domainDict = {};

    for(let i = 0; i < cpdomains.length; i++) {
        var [count, domain] = cpdomains[i].split(' ');
        count = parseInt(count); 
        if(domainDict[domain]) {
            domainDict[domain]+=count;
        } else {
            domainDict[domain] = count;
        }
        const words = domain.split('.');
        if(words.length === 3) {
            const parentDomain = words.slice(1).join('.');
            if(domainDict[parentDomain]) {
                domainDict[parentDomain]+=count;
            } else {
                domainDict[parentDomain] = count;
            }
        }
        if (domainDict[words[words.length-1]] === undefined) {
            domainDict[words[words.length-1]] = count;  // 顶级域名
          } else {
            domainDict[words[words.length-1]] += count;
          }
      
    }
    for(let key in domainDict) {
        result.push([domainDict[key], key].join(' '));
    }
    return result;

};
