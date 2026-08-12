import { useSelector, useDispatch } from "react-redux";
import { setPlatform } from "../features/platforms/platformSlice";

function PlatformSelector() {
  const { selectedPlatform, platforms } = useSelector(
    (state) => state.platform
  );
  const dispatch = useDispatch();
  const handlePlatformChange = (event) => {
    dispatch(setPlatform(event.target.value));
  };
  return (
    <div>
      <h2>Select Platform</h2>
      <select
        value={selectedPlatform}
        onChange={handlePlatformChange}
      >
        {platforms.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>

      <p>
        Selected Platform: <strong>{selectedPlatform}</strong>
      </p>
    </div>
  );
}
export default PlatformSelector;