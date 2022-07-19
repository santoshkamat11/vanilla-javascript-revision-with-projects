let interestLink = "//codewithharry.com/";


Array.from(document.links).forEach(function(element) {
    link = element.href;
    if(link.includes(interestLink)){
        console.log(element);
    }
});