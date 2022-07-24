import { works } from '../data/works';
import { caozinhos } from '../data/caozinhos';

const initialState = {
    works: works,
    caozinhos:caozinhos,
};

const Reducer = (state = initialState) => {
    return state;
};

export default Reducer;