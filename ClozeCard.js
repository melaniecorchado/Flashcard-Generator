// Constructor function for the 'Cloze Card'.
function ClozeCard(cloze, question ) {
    this.cloze = cloze;
    this.question = question;

    this.displayQuestion = question.replace(cloze, "...");
        //yomama
    
};


module.exports = ClozeCard;