voteApp = {};

candidateInfo = ["Jan, Werthers, Right is Right, Downtown, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet blandit felis. In euismod varius libero, vel dignissim dolor iaculis non. Sed lacinia tempor nunc scelerisque pharetra. Sed aliquam lobortis sem, nec scelerisque nibh ultrices eget. Sed bibendum nisi ut porta pretium. Quisque ullamcorper nisl fringilla, sodales arcu quis, pellentesque massa. Cras pharetra libero vitae cursus consequat. Etiam ullamcorper tortor at libero ultricies, in molestie mi posuere.",
"Alphonse, D’Costa, Green Green Green, Uptown, Ut ac enim vulputate, feugiat dolor non, hendrerit massa. Phasellus odio nunc, lobortis quis ante vitae, ornare dapibus enim. Pellentesque velit est, molestie eu congue et, consectetur eget sapien. Curabitur pulvinar consequat ex ac consequat. Cras sem tellus, semper quis justo imperdiet, gravida lacinia justo. Donec turpis metus, ornare in auctor at, imperdiet sodales risus. Fusce quis volutpat velit. Nam id urna porttitor, cursus quam eget, finibus lectus. Etiam pellentesque quam varius felis venenatis, nec pellentesque ipsum rhoncus. Nulla ornare non tortor vitae lobortis. Aliquam non scelerisque orci, vel cursus augue. Vestibulum quis bibendum est, in elementum massa. Sed fermentum mauris id ligula semper gravida. Duis egestas auctor mi, pretium ultricies risus.", "Gita, Sing, Middle Folk, Suburbia, Praesent pellentesque justo lectus, faucibus eleifend libero bibendum ac. Curabitur at tellus dolor. Duis ultricies mi eget suscipit euismod. Fusce elementum pulvinar fringilla. Suspendisse et est dictum, vulputate ex at, pharetra odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut convallis, augue tempus tempus dictum, urna mauris gravida purus, sed mattis ex nulla vel ante. Aliquam erat volutpat. Aliquam erat volutpat. ", 
"Earl, Bendy, Red Red Red, Inner City, Ut tempor, tellus in imperdiet finibus, lectus turpis facilisis erat, non faucibus nisl mauris non augue. Aliquam ultrices velit tortor, vel laoreet tellus varius tincidunt. Suspendisse rhoncus eros ac enim aliquet, ut consequat justo maximus. Nullam condimentum aliquam metus nec scelerisque. Sed risus felis, interdum a eros et, egestas sagittis eros. Cras vel nisl quis dui ultrices malesuada sit amet a dolor. Nunc ut justo dignissim, euismod odio vitae, commodo erat. Donec posuere, tellus sit amet commodo efficitur, metus ante ultricies sem, a mollis odio odio nec velit.",
"Betty, Bodner, Lefties, Uptown, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet blandit felis. In euismod varius libero, vel dignissim dolor iaculis non. Sed lacinia tempor nunc scelerisque pharetra. Sed aliquam lobortis sem, nec scelerisque nibh ultrices eget. Sed bibendum nisi ut porta pretium. Quisque ullamcorper nisl fringilla, sodales arcu quis, pellentesque massa. Cras pharetra libero vitae cursus consequat. Etiam ullamcorper tortor at libero ultricies, in molestie mi posuere. Ut ac enim vulputate, feugiat dolor non, hendrerit massa. Phasellus odio nunc, lobortis quis ante vitae, ornare dapibus enim. Pellentesque velit est, molestie eu congue et, consectetur eget sapien. Curabitur pulvinar consequat ex ac consequat. Cras sem tellus, semper quis justo imperdiet, gravida lacinia justo. Donec turpis metus, ornare in auctor at, imperdiet sodales risus. Fusce quis volutpat velit. Nam id urna porttitor, cursus quam eget, finibus lectus. Etiam pellentesque quam varius felis venenatis, nec pellentesque ipsum rhoncus. Nulla ornare non tortor vitae lobortis. Aliquam non scelerisque orci, vel cursus augue. Vestibulum quis bibendum est, in elementum massa. Sed fermentum mauris id ligula semper gravida. Duis egestas auctor mi, pretium ultricies risus. Praesent pellentesque justo lectus, faucibus eleifend libero bibendum ac. Curabitur at tellus dolor. Duis ultricies mi eget suscipit euismod. Fusce elementum pulvinar fringilla. Suspendisse et est dictum, vulputate ex at, pharetra odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut convallis, augue tempus tempus dictum, urna mauris gravida purus, sed mattis ex nulla vel ante. Aliquam erat volutpat. Aliquam erat volutpat.  Ut tempor, tellus in imperdiet finibus, lectus turpis facilisis erat, non faucibus nisl mauris non augue. Aliquam ultrices velit tortor, vel laoreet tellus varius tincidunt. Suspendisse rhoncus eros ac enim aliquet, ut consequat justo maximus. Nullam condimentum aliquam metus nec scelerisque. Sed risus felis, interdum a eros et, egestas sagittis eros. Cras vel nisl quis dui ultrices malesuada sit amet a dolor. Nunc ut justo dignissim, euismod odio vitae, commodo erat. Donec posuere, tellus sit amet commodo efficitur, metus ante ultricies sem, a mollis odio odio nec velit.  Sed diam lacus, dignissim non lorem eget, tempus sollicitudin erat. In ut tincidunt nisi, eget tincidunt quam. Integer tempor pretium cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor ac mauris viverra maximus semper ac erat. Maecenas gravida ligula nibh, et luctus mi elementum ac. Sed dignissim libero arcu, non ultricies tellus gravida in. Aenean placerat fringilla ligula, nec pellentesque erat consectetur at. Fusce vel neque blandit, commodo est eget, pharetra arcu. Nam iaculis ligula nec sodales vulputate. Donec vehicula elit quis lorem bibendum tempus. Vivamus vitae mauris non orci egestas porta id id orci. Nulla rutrum nisi a tincidunt tempor. Nunc dictum arcu in vestibulum semper. Etiam tincidunt ante sed sagittis sodales. "];

voteApp.candidates = [];

voteApp.init = function () {
    voteApp.getCandidates(candidateInfo);
    voteApp.listCandidates();
    voteApp.events();
};

voteApp.getCandidates = function () {
    // first_name, last_name, party, electoral_district, bio
    candidateData = [];
    for (let candidate in candidateInfo){
        candidatesFixed = [];
        candidateList = candidateInfo[candidate].split(',');
        for (let i = 0; i < 5; i++){
            if (i < 4) {
                candidatesFixed.push(candidateList[i]);
            }
            else {
                speech = '';
                for (let i = 4; i < candidateList.length; i++) {
                    speech += candidateList[i]+',';
                }
                candidatesFixed.push(speech.substring(0, speech.length-1));
            }
        }
        candidateData.push(candidatesFixed)
    }
    voteApp.candidates = candidateData;
}

voteApp.listCandidates = function(){
    for (let index in voteApp.candidates) {
        $('ul').append(`<li id=${index}>` 
            + `<button class=seeMore>${voteApp.candidates[index][0]} ${voteApp.candidates[index][1]}</button>` 
            + '</li>');
    }
}

voteApp.events = function () {
    $('button.seeMore').on('click', function (e) {
        e.preventDefault();

        const parentID = $(this).parent().attr('id');
        $('.modal').empty();
        $('.modal').append(`<div id=${parentID}>`
            + `<h4>` + voteApp.candidates[parentID][0] + ' ' + voteApp.candidates[parentID][1] +
            `</h4>`
            + `<h5>` + voteApp.candidates[parentID][2] + ',' + voteApp.candidates[parentID][3]
            + `</h5>`
            + '<p>' + voteApp.candidates[parentID][4] + '</p>'
            + `<button class=vote id=${parentID}>Vote now for this candidate</button>`
            + `<button class=close>Close</button>`
            + '</div>');
        
        voteApp.events();
        $('.modal').toggleClass('hidden');
    });

    $('button.close').on('click', function (e) {
        e.preventDefault();
        console.log('close');
        $('.modal').toggleClass('hidden');
        voteApp.events();
    });
    $('button.vote').on('click', function (e) {
        e.preventDefault();
        const voteID = $(this).attr('id');
        console.log('vote');
        $('.modal').empty();
        $('.modal').append(`<div id=${voteID}>`
            + `<h4> You voted for ` + voteApp.candidates[voteID][0] + ' ' + voteApp.candidates[voteID][1] +
            `</h4>`
            + `<h5>Thank you for voting!</h5>`
            + '</div>');
    });
}



$(voteApp.init());