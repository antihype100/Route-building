import './GeoTable.scss'
import {useDispatch, useSelector} from 'react-redux';
import {setLocation} from '../../store/locationSlice';
import {useEffect} from 'react';

const list = [
    {id: 1, fromLat: 59.84660399, fromIng: 30.29496392, toLat: 59.82934196, toIng: 30.42423701},
    {id: 2, fromLat: 59.82934196, fromIng: 30.42423701, toLat: 59.82761295, toIng: 30.41705607},
    {id: 3, fromLat: 59.83567701, fromIng: 30.38064206, toLat: 59.84660399, toIng: 30.29496392},
    {id: 4, fromLat: 59.84660399, fromIng: 30.29496392, toLat: 59.82761295, toIng: 30.41705607},
    {id: 5, fromLat: 59.83567701, fromIng: 30.38064206, toLat: 59.84660399, toIng: 30.29496392},
]

const GeoTable = () => {

    const location = useSelector((state) => state.location)
    const dispatch = useDispatch()

    const setLocationParam = (e) => {
        const location = e.currentTarget.dataset.location.split(',')
        dispatch(setLocation(location))
    }

    useEffect(() => {
        console.log(location);
    }, [location])

    return (
        <table>
            <tr>
                <th>Номер заявки</th>
                <th>Координатцы ОТ lat</th>
                <th>Координатцы ОТ ing</th>
                <th>Координатцы ДО lat</th>
                <th>Координатцы ДО ing</th>
            </tr>
            {list.map(el => {
                return (
                    <tr onClick={(e) => setLocationParam(e)}
                        data-location={[el.fromLat, el.fromIng, el.toLat, el.toIng]}>
                        <td>{el.id}</td>
                        <td>{el.fromLat}</td>
                        <td>{el.fromIng}</td>
                        <td>{el.toLat}</td>
                        <td>{el.toIng}</td>
                    </tr>
                )}
            )}
        </table>
    )
}

export {GeoTable}