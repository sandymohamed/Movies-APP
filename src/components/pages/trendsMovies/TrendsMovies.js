import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyCard from "../../card/card";
import { getTrendsMovie, getTrendsTV, getTrendsAll } from "../../redux/actions/trendsMovies";
import Dropdown from 'react-bootstrap/Dropdown';
import Loader from "../../loader/loader";


const TrendsMovies = () => {

    const isLoading = useSelector((state) => state.loader.isLoading)

    const trends = useSelector((state) => state.trends.trendsMovies);
    const dispatch = useDispatch();

    const getData = useCallback((func) => {
        switch (func) {
            case "getTrendsAll":
                dispatch(getTrendsAll());
                break;
            case "getTrendsTV":
                dispatch(getTrendsTV());
                break;
            case "getTrendsMovie":
                dispatch(getTrendsMovie());
                break;
            default:
                dispatch(getTrendsAll());
                break;
        }
    }, [dispatch]);

    useEffect(() => {
        getData('test');
    }, [getData]);

    return (

        <div style={{ minHeight: '100vh' }}>
            <Dropdown onSelect={(e) => {
                getData(e)
            }}>
                <Dropdown.Toggle variant="warning m-2" id="dropdown-basic" style={{ 'z-index': 999999999 }}>
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="getTrendsAll">ALL</Dropdown.Item>
                    <Dropdown.Item eventKey="getTrendsTV">TV</Dropdown.Item>
                    <Dropdown.Item eventKey="getTrendsMovie">Movie</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <hr />
            <div className='cards-container'>
                {
                    isLoading ? <Loader /> :
                        trends?.map((item, i) => (
                            <MyCard item={item} key={i} />
                        ))
                }
            </div>

        </div>

    );
};

export default TrendsMovies;