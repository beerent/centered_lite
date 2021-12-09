import { UserProfile } from "src/components/user/UserProfile";
import { useAppDispatch } from "src/redux/Hooks";
import { clearUser } from "src/redux/user/UserSlice";

export const Home = () => {
    const dispatch = useAppDispatch();

    const onLogout = () => {
        dispatch(clearUser());
        alert("You have successfully logged out.");
    }

    return (
        <div>
            <UserProfile onLogout={() => onLogout()} />
        </div>
    )
};