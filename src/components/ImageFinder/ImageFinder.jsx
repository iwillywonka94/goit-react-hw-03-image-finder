import { Component } from "react";

import SearchForm from "./SearchBar/SearchForm";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import Button from "../Button";
import Loader from "../Loader";
import Modal from "../Modal";

import style from "./imageFinder.module.css"

import { searchImages } from '../../services/api-services'


class ImageFinder extends Component {

    state = {
        items: [],
        loading: false,
        error: null,
        q: '',
        page: 1,
        isModal: false,
        modalBody: {}
    }

    async componentDidUpdate(prevProps, prevState) {
        const { q, page } = this.state;
        if (q !== prevState.q || page > prevState.page) {
            this.setState({
                loading: true,
                error: null,
            })
            try {
                const items = await searchImages(q, page);
                this.setState(prevState => {
                    return {
                        items: [...prevState.items, ...items],
                        loading: false,
                    }
                })
            } catch (error) {
                this.setState({
                    isLoading: false,
                    error: error.message,
                });
            }
        }
    }

    setSearch = q => {
        this.setState({
            q,
            page: 1,
            items: [],
        })
    }

    loadMore = () => {
        this.setState(({ page }) => {
            return {
                page: page + 1
            };
        });
    };

    showModal = (modalBody) => {
        this.setState({
            isModal: true,
            modalBody,
        })
    }

    closeModal = () => {
        this.setState({
            isModal: false,
        })
    }

    render() {
        const { setSearch, loadMore, showModal, closeModal} = this
        const { items, loading, isModal, modalBody } = this.state
        return (
            <>
                <SearchBar>
                    < SearchForm onSubmit={setSearch} />
                </SearchBar>
                {loading && <Loader />}
                {Boolean(items.length) && <ImageGallery items={items} onClick={showModal}/>}
                {Boolean(items.length) && <div className={style.button}>< Button onClick={loadMore} text={"Load More"}/></div>}
                {isModal && 
                
                <Modal close={closeModal}>
                    <img
                        src={modalBody.modalUrl}
                        alt={modalBody.tags}
                    />
                </Modal>}
            </>
        )
    }
}

export default ImageFinder;