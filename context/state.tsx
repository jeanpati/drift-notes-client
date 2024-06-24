import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getUserProfile } from "../data/auth";
import { useRouter } from "next/router";

export interface Profile {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface AppContextType {
  profile: Profile;
  token: string;
  cityCoordinates: [number, number];
  tripId: number | null;
  setProfile: (profile: Profile) => void;
  setToken: (token: string) => void;
  setCityCoordinates: (coordinates: [number, number]) => void;
  setTripId: (id: number | null) => void;
}

const AppContext = createContext<AppContextType>({
  profile: {
    id: 0,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  },
  token: "",
  cityCoordinates: [0, 0],
  tripId: null,
  setProfile: () => {},
  setToken: () => {},
  setCityCoordinates: () => {},
  setTripId: () => {},
});

// : is for type annotation - specifies type of a variable, function parameter, or function return value
// <> is for type assertion - explicity telling TS the type of a value

export function AppWrapper({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>({
    id: 0,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  const [token, setToken] = useState<string>("");
  const [cityCoordinates, setCityCoordinates] = useState<[number, number]>([
    0, 0,
  ]);
  const [tripId, setTripId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    // || "" returns an empty string if token is null or undefined
    setToken(localStorage.getItem("token") || "");
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      if (!("id" in profile)) {
        getUserProfile().then((profileData: Profile) => {
          if (profileData) {
            setProfile(profileData);
          }
        });
      }
    }
  }, [token]);

  return (
    <AppContext.Provider
      value={{
        profile,
        token,
        cityCoordinates,
        tripId,
        setToken,
        setProfile,
        setCityCoordinates,
        setTripId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
