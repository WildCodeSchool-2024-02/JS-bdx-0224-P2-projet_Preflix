import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const CategoryContext = createContext();

export function TypeProvider({ children }) {
const [types, setTypes] = useState([{
    name: "Action",
    id: 18
  },
  {
    name: "Animation",
    id: 16
  },
  {
    name: "Aventure",
    id: 12
  },
  {
    name: "Comédie",
    id: 35
  },
  {
    name: "Documentaire",
    id: 99
  },
  {
    name: "Drame",
    id: 18
  },
  {
    name: "Enfants",
    id: 10762
  },
  {
    name: "Familial",
    id: 10751
  },
  {
    name: "Fantastique",
    id: 14
  },
  {
    name: "Guerre",
    id: 10752
  },
  {
    name: "Histoire",
    id: 36
  },
  {
    name: "Horreur",
    id: 27
  },
  {
    name: "Musique",
    id: 10402
  },
  {
    name: "Mystère",
    id: 9648
  },
  {
    name: "Policier",
    id: 80
  },
  {
    name: "Romance",
    id: 10749
  },
  {
    name: "Science-Fiction",
    id: 878
  },
  {
    name: "Thriller",
    id: 53
  },
  {
    name: "Western",
    id: 37
  }
])

  const contextValue = useMemo(() => (
    {
        types, setTypes
    }
  ), [types, setTypes])

    TypeProvider.propTypes = {
      children: PropTypes.shape({}).isRequired,
    }  

  return (
    <CategoryContext.Provider value={contextValue}>
        {children}
    </CategoryContext.Provider>
  )
}
