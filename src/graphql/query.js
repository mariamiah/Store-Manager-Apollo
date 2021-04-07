function feed() {
    const { loading, error, data } = useQuery(GET_DOGS);
    if(error) return <Error />
    if(loading || !data) return <Fetching />
    return <DogList dogs={data.dogs} />
}