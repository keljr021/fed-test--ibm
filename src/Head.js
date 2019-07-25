import React, { Component } from 'react';

class Head extends Component {

    setLanguage(e) {
        let option = e.target.options[e.target.options.selectedIndex];
        let input = option.value;

        this.props.changeLanguage(input);
    }

    render() {
        const { languages } = this.props;

        return (
            <div className='head'>
                <div className='head-title'>
                    Couch Potato
                </div>
                <div className='head-language'>
                    <select onChange={(e) => this.setLanguage(e)}>
                        {languages.map((language, key) =>
                            <option value={language.json_file} key={key}>{language.name}</option>
                        )}
                    </select>
                </div>
                
            </div>
        );
    }
}

export default Head;

