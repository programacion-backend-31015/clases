const GoogleStrategy = require('passport-google-oauth2').Strategy
const UserModel = require('./user.model')

module.exports = passport => {
    passport.use(new GoogleStrategy({
        clientID: "10358342451-6r8ij39ql9qpva6usjba73r199cj0r1e.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8080/auth/google/callback"
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            let userExist = await UserModel.findOne({ 'google.id': profile.id })

            if (userExist) return done(null, userExist)
            console.log('Creating user...')

            const newUser = new UserModel({
                method: 'google',
                google: {
                    id: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value
                }
            })

            await newUser.save()
            return done(null, newUser)
        } catch (e) {
            return done(e, false)
        }
    }))

    passport.serializeUser((user, cb) => cb(null, user))
    passport.deserializeUser((obj, cb) => cb(null, obj))
}