/*

const matches = await User.find({
            _id: { $ne: currentUser._id }, // Exclude current user
            gender: currentUser.preference.gender,
            age: { $gte: currentUser.preference.minAge, $lte: currentUser.preference.maxAge },
            religion: currentUser.preference.religion,
            caste: currentUser.preference.caste,
            horoscope: currentUser.preference.horoscope,
            hobbies: { $in: currentUser.preference.hobbies },
            gotra: { $ne: currentUser.gotra }, // Avoid same gotra
            maritalStatus: currentUser.preference.maritalStatus,
            motherTongue: currentUser.preference.motherTongue,
        })

*/
