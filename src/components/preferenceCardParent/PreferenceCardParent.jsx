import "./prefCardParent.scss";
import { preferences } from "./constants";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserPreferences,
  removeUserPreference,
} from "../../store/slices/UserSlice";
import { CheckOutlined } from "@ant-design/icons";

const PreferenceCardParent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const data = useSelector((state) => {
    return state?.users;
  });

  const user = data[0];

  const handleAddPreference = (pref) => {
    dispatch(addUserPreferences(pref));
  };

  const removeFromPreference = (pref) => {
    dispatch(removeUserPreference(pref.id));
  };

  const getIsAdded = (id) => {
    let result = false;

    user?.userPreferences.forEach((item) => {
      if (item.id === id) {
        result = true;
      }
    });
    return result;
  };

  const handleClickCard = (pref) => {
    if (!getIsAdded(pref.id)) {
      handleAddPreference(pref);
    } else {
      removeFromPreference(pref);
    }
  };

  return (
    <div className="pref-card-parent-container">
      <div className="pref-card-parent-header flex-row flex--space-between">
        <div>You Prefer</div>
        {!location.state && <div onClick={() => navigate("/home")}>Skip</div>}
      </div>
      <div className="flex-row flex--space-between flex--wrap">
        {preferences.map((pref) => (
          <>
            <div
              className={`pref-card ${getIsAdded(pref.id) && "pref-selected"}`}
              data-testid="pref-card"
            >
              <div
                onClick={() => {
                  handleClickCard(pref);
                }}
                className="pref-card-wrapper flex-column flex--justify-center flex--align-center"
              >
                {getIsAdded(pref.id) && (
                  <div data-testid="check">
                    <CheckOutlined />
                  </div>
                )}
                {pref.label}
              </div>
              <img src={pref.image} alt="genre" />
            </div>
          </>
        ))}
      </div>

      <div className="next-container flex-row flex--justify-end">
        <button
          onClick={() => {
            if (location.state && location.state.from === "profile") {
              navigate("/profile");
            } else {
              navigate("/home");
            }
          }}
        >
          {location.state && location.state.from === "profile"
            ? "Save"
            : "Next"}
        </button>
      </div>
    </div>
  );
};

export default PreferenceCardParent;
