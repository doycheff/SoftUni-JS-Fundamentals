function extractEmails(text) {
    let match = text.match(
        /(?<=\s)([a-z0-9]+[\._-]?\w+@([a-z]+(-?[a-z]+(\.[a-z]+)+)+))(\b|(?=\s))/gi
    );

    if (match) {
        Object.values(match).forEach((email) => {
            console.log(email);
        });
    }
}
extractEmails("Please contact us at: support@github.com.");
extractEmails(
    "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information."
);
extractEmails(
    "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de."
);
