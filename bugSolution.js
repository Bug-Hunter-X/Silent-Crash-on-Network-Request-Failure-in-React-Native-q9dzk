```javascript
// In a React Native component

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('some_url');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error); // Update state to indicate an error
      } finally {
        // Optional: Add cleanup logic here, e.g., aborting a fetch request
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  if (data === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {/* ... render data ... */}
    </View>
  );
};
```