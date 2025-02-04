const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await res.json();
        if (res.ok) {
          setUserData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  return userData ? (
    <div>
      <h2>Profile</h2>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <p>Joined: {new Date(userData.joinedDate).toLocaleDateString()}</p>
    </div>
  ) : <p>Loading...</p>;
};

export default App;
