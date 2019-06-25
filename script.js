/*
Solution of assignment 4:

Expected output shoul be:

Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function() {
    var names1 = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names1.length; i++) {
        var firstLetter = names1[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names1[i]);
        } else {
            helloSpeaker.speak(names1[i]);
        }
    }
})();
