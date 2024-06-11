import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const MatchesDisplay = ({ matches, setClickedUser }) => {
  const [matchedProfiles, setMatchedProfiles] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userId = cookies.UserId;

  const matchedUserIds = matches.map(({ user_id }) => user_id);

  const getMatches = async () => {
    try {
      const response = await axios.get("https://tinder-swipe-right.onrender.com/users", {
        params: { userIds: JSON.stringify(matchedUserIds) },
      });
      setMatchedProfiles(response.data);
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  };

  useEffect(() => {
    getMatches();
  }, [matches]);

  const filteredMatchedProfiles = matchedProfiles.filter(
    (matchedProfile) =>
      matchedProfile.matches.filter((profile) => profile.user_id === userId)
  );

  return (
    <div className="matches-display">
      {filteredMatchedProfiles.map((match, index) => (
        <div
          key={index}
          className="match-card"
          onClick={() => setClickedUser(match)}
        >
          <div className="img-container">
            <img src={match?.url} alt={match?.first_name + " profile"} />
          </div>
          <h3>{match?.first_name}</h3>
        </div>
      ))}
    </div>
  );
};

export default MatchesDisplay;
