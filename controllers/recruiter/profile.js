const CompanyProfile = require('../../models/CompanyProfile');

exports.getProfile = async (req, res, next) => {

    const {_id:recruiter} = req.recruiter;

    try {
        const profile = await CompanyProfile.findOne({
            recruiter
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

    const {_id:recruiter} = req.recruiter;

    const {name, email_id, company_phone_number , description, website, company_logo, company_video, linkedin_url, facebook_url, mobile_no, company_images, cover_image} = req.body;
    // console.log(req.body);

    try {
        await CompanyProfile.updateOne({
            recruiter
        },{
            name, email_id, company_phone_number, description, website, company_logo, company_video, linkedin_url, facebook_url, mobile_no , company_images, cover_image
        });

        const profile = {name, email_id, company_phone_number, description, website, company_logo, company_video, linkedin_url, facebook_url , mobile_no , company_images, cover_image};

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