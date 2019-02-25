'use strict';

var index_id = document.getElementById('berekenTool');
var clickButton = function clickButton() {
    alert('Word aan gewerkt');
};
var templateOne = React.createElement(
    'section',
    { id: 'container' },
    React.createElement(
        'div',
        null,
        React.createElement('div', { id: 'divOne' }),
        React.createElement(
            'div',
            { id: 'divTwo' },
            React.createElement('img', { src: 'images/logo.png', width: '50%' }),
            React.createElement('input', { type: 'text', className: 'formControl', name: 'option', placeholder: 'Dagkoers' }),
            React.createElement('input', { type: 'text', className: 'formControl', name: 'option', placeholder: 'Spaarbedrag' }),
            React.createElement('input', { type: 'number', className: 'formControl', name: 'option', min: '1', max: '30', placeholder: 'Looptijd' }),
            React.createElement('input', { type: 'text', className: 'formControl', name: 'option', placeholder: 'Rente' }),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { type: 'button', onClick: clickButton },
                    'Berekenen'
                )
            )
        )
    )
);
ReactDOM.render(templateOne, index_id);
