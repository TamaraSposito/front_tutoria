import {
    useJWTAuth,
    useJWTAuthActions,
} from '../providers/auth';
export const useAuthUser = () => {
    const {user, isAuthenticated, isLoading} = useJWTAuth();
    return {
        isLoading,
        isAuthenticated,
        user: getUserFromJwtAuth(user),
    };
};
const getUserFromJwtAuth = (user) => {
    if (user)
        return {
            id: 1,
            uid: user.id,
            displayName: user.name,
            email: user.mail,
        };
    return user;
};
export const useAuthMethod = () => {
    const {signInUser, signUpUser, logout} = useJWTAuthActions();
    return {
        signInUser,
        logout,
        signUpUser,
    };
};