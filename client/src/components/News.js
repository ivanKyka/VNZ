import React, {useEffect} from 'react';
import styled from "styled-components";
import {inject, observer} from 'mobx-react';
import Preloader from "./Preloader";
import {logosLinks, styles} from "../consts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSyncAlt} from "@fortawesome/free-solid-svg-icons";

const News = ({newsStore}) => {

    useEffect(() => {
        newsStore.getMoreNewsFromApi();
    }, []);

    if (newsStore.news.length === 0 && newsStore.isLoading) return <Preloader />

    return (
        <>
            <List>
                {newsStore.news.map(el => (<ListItem key={el._id}>
                    <a href={el.href}>
                        <img src={logosLinks[el.source]} alt="ВВНЗ ЛОГО"/>
                        <div>
                            <p>{el.title.replaceAll('&#039;', '\'')}</p>
                            <span>{new Date(el.date).toLocaleDateString()}</span>
                        </div>
                    </a>
                </ListItem>))}
            </List>
            {(newsStore.news.length < newsStore.length) && <LoadMoreButton onClick={newsStore.getMoreNewsFromApi}>
                <FontAwesomeIcon icon={faSyncAlt} />
                <button>Завантажити ще</button>
            </LoadMoreButton>}
        </>
    )
}

export default inject('newsStore')(observer(News));

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  min-height: 400px;
`;

export const ListItem = styled.li`
  &:hover {
    background: ${styles.bgColor};

    p {
      text-decoration: underline;
    }
  }

  img {
    height: 50px;
    padding: 5px;
    object-fit: contain;
    align-self: center;
    justify-self: center;
  }

  a {
    padding: 10px;
    align-self: center;
    color: black;
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    text-decoration: none;
    font-size: 1.2rem;
  }

  span {
    font-size: 0.9rem;
    grid-column: 2;
    color: #4c4c4c;
  }

  p {
    margin: 0;
  }
`;

const LoadMoreButton = styled.div`
    display: flex;
    font-size: 1.6rem;
    margin: 20px auto;
    width: max-content;
  
    svg {
      height: 40px;
      width: 40px;
      transition: all 1s ease-out;
    }

    button {
      border: none;
      background: none;
    }
  
    &:hover svg{
      transform: rotate(180deg);
    }
    &:hover button{
      text-decoration: underline;
    }
`;