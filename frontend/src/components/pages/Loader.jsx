const Loader = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-text dark:bg-background-dark dark:text-text-dark">
        <div
          className="animate-spin rounded-full h-32 w-32 border-t-4 border-primary dark:border-primary-dark"
          role="status"
        ></div>
      </div>
    );
  };
  
  export default Loader;
  