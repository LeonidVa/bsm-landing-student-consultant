import React, {Component} from 'react';
import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';


class Wrapper extends Component {

    state = {
        showSaleModal: false
    };

    handleSaleModal = () => {
        const time = new Date();

        //показываем окно скидки один раз и ставим на коллдаун
        if (!window.localStorage.getItem("showSaleModal")) {
            //часы, минуты, секунды, милисекунды
            window.localStorage.setItem("showSaleModal", time.getTime() + (2 * 60 * 60 * 1000))

            this.setState({showSaleModal: true})

        }

        if (Number(window.localStorage.getItem("showSaleModal")) < time.getTime()) {
            this.setState({showSaleModal: true});
            // обновляем коллдаун
            window.localStorage.setItem("showSaleModal", time.getTime() + (2 * 60 * 60 * 1000))
        }

    };

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextState.showSaleModal !== this.state.showSaleModal
    };

    render() {
        return (
            <div onMouseLeave={() => this.handleSaleModal()}>
                <Head>
                    <title>BeSmarter! - {this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                </Head>
                <Header showSaleModal={this.state.showSaleModal}/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}


export default Wrapper;