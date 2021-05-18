const UserProfile = require('../../models/UserProfile');

exports.getProfile = async (req, res, next) => {

    const {_id:user} = req.user;

    try {
        const profile = await UserProfile.findOne({
            user
        });

        res.json({
            success: true,
            data: profile
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.updateProfile = async (req, res, next) => {

    const {_id:user} = req.user;

    const {resume, employed, email, current_location, preferred_locations, preferred_joining_date, current_salary, current_company, previous_companies, education, skill_sets, years_of_experience, months_of_experience, awards, certifications, hobbies , mobile_number , dob , gender , username} = req.body;
    // console.log(req.body);

    try {
        await UserProfile.updateOne({
           user
        },{
            resume,employed, email, current_location, preferred_locations, preferred_joining_date, current_salary, current_company, previous_companies, education, skill_sets, years_of_experience, months_of_experience, awards, certifications, hobbies ,mobile_number , dob , gender , username
        });

        const profile = {resume,employed, email,current_location, preferred_locations, preferred_joining_date, current_salary, current_company, previous_companies, education, skill_sets, years_of_experience, months_of_experience, awards, certifications, hobbies ,mobile_number , dob , gender , username};

        res.json({
            success: true,
            data: profile
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};